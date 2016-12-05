//
//  HomeViewController.m
//  antd-mobile
//
//  Created by silentcloud on 7/4/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "HomeViewController.h"
#import "RCTBundleURLProvider.h"
#import "RCTRootView.h"
#import "CodePush.h"
#import "ScanViewController.h"
#import "ResultViewController.h"

@interface HomeViewController () <QRScanControllerDelegate, UIAlertViewDelegate>
@property(nonatomic, strong) UIButton *scanButton;
@property(nonatomic, strong) NSString *bundleURL;
@end

@implementation HomeViewController

- (void)viewDidLoad {
  [super viewDidLoad];

  self.navigationController.navigationBarHidden = YES;

  NSURL *jsCodeLocation;

  #ifdef DEBUG
    jsCodeLocation = [RCTBundleURLProvider jsBundleURLForBundleRoot:@"rn-kitchen-sink/index.ios.bundle" packagerHost:@"127.0.0.1" enableDev:YES enableMinification:NO];
  #else
    jsCodeLocation = [CodePush bundleURLForResource:@"index.ios" withExtension:@"bundle"];
  #endif

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"kitchen-sink"
                                               initialProperties:nil
                                                   launchOptions:nil];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  rootView.frame = self.view.bounds;

  UIButton *button=[UIButton buttonWithType:UIButtonTypeCustom];
  [button setImage:[UIImage imageNamed:@"scan"] forState:UIControlStateNormal];
  button.hidden = YES;
  button.frame = CGRectMake([UIScreen mainScreen].bounds.size.width - 42, 31, 22, 22);
  [button addTarget:self action:@selector(pushView) forControlEvents:UIControlEventTouchUpInside];
  _scanButton = button;

  [self.view addSubview:rootView];
  [self.view addSubview:button];

  [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(showScanButton) name:RCTJavaScriptDidLoadNotification object:nil];
}

// 跳扫码登录界面
- (void)pushView {
  // 先判断哈有没有摄像头
  if ([UIImagePickerController isSourceTypeAvailable: UIImagePickerControllerSourceTypeCamera]){
    ScanViewController *vc = [[ScanViewController alloc] init];
    vc.delegate = self;
    [self.navigationController pushViewController:vc animated:YES];
  } else {
    UIAlertView *alert = [[UIAlertView alloc] initWithTitle:@"无摄像头手动输入信息"
                                                    message:@"RN 项目请输入 moduleName，不输入则默认取文件名前缀(eg: main.jsbundle => main)"
                                                   delegate:self
                                          cancelButtonTitle:@"Cancel"
                                          otherButtonTitles:@"Ok",nil];
    alert.tag = 100;
    [alert setAlertViewStyle:UIAlertViewStyleLoginAndPasswordInput];

    UITextField *nameField = [alert textFieldAtIndex:0];
    nameField.placeholder =  @"moduleName";

    UITextField *urlField = [alert textFieldAtIndex:1];
    [urlField setSecureTextEntry:NO];
    urlField.placeholder = @"bundleURL";
    [alert show];
  }
}

- (void)showScanButton {
  _scanButton.hidden = NO;
}

- (void)dealloc
{
  [[NSNotificationCenter defaultCenter] removeObserver:self];
}

#pragma mark - UIAlertViewDelegate

- (void)alertView:(UIAlertView *)alertView clickedButtonAtIndex:(NSInteger)buttonIndex
{
  if (buttonIndex == 1) {
    if (alertView.tag == 100) {
      UITextField *urlField = [alertView textFieldAtIndex:1];
      self.bundleURL = urlField.text;
    }
    // 先根据 url 判断项目类型

    NSURL *url = [NSURL URLWithString:self.bundleURL];
    NSString *filePath = url.path;

    NSString *moduleName = nil;
    if ([filePath hasSuffix:@"bundle"] || [filePath hasSuffix:@"jsbundle"] || [filePath hasSuffix:@"js"] ) {
      UITextField *moduleNameField = [alertView textFieldAtIndex:0];
      if (moduleNameField.text.length > 0) {
        moduleName = moduleNameField.text;
      } else {
        NSURL *url = [NSURL URLWithString:self.bundleURL];
        NSString *lastPath = url.lastPathComponent;
        NSRange range = [lastPath rangeOfString:@"." options:NSBackwardsSearch];
        moduleName = [lastPath substringToIndex:range.location];
      }
      [moduleNameField resignFirstResponder];
    }

    ResultViewController *resultVC = [[ResultViewController alloc] init];
    resultVC.moduleName = moduleName;
    resultVC.bundleURL = self.bundleURL;
    [self.navigationController pushViewController:resultVC animated:NO];
  }
}

- (BOOL)alertViewShouldEnableFirstOtherButton:(UIAlertView *)alertView
{
  if (alertView.tag == 100) {
    UITextField *bundleURLField = [alertView textFieldAtIndex:1];
    if ([bundleURLField.text length] == 0){
      return NO;
    }
  }
  return YES;
}

#pragma mark - QRScanControllerDelegate

- (void)didFinishedScanQR:(NSString *)string
{
  [self.navigationController popViewControllerAnimated:NO];
  NSLog(@"ScarnQR URL: %@", string);
  self.bundleURL = string;
  @try {
    NSURL *url = [NSURL URLWithString:string];
    NSString *filePath = url.path;

    if ([filePath hasSuffix:@"bundle"] || [filePath hasSuffix:@"jsbundle"] || [filePath hasSuffix:@"js"] ) {
      // 弹框输入 moduleName
      UIAlertView *alert = [[UIAlertView alloc] initWithTitle:@"请输入 moduleName"
                                                      message:@"moduleName 即 RN 项目入口文件 registerComponent 的名称，不输入则默认取文件名前缀(eg: main.jsbundle => main)"
                                                     delegate:self
                                            cancelButtonTitle:@"Cancel"
                                            otherButtonTitles:@"Ok", nil];
      alert.tag = 200;
      UITextField *nameField = [alert textFieldAtIndex:0];
      nameField.placeholder = @"moduleName";
      [alert setAlertViewStyle:UIAlertViewStylePlainTextInput];
      [alert show];
    } else {
      ResultViewController *resultVC = [[ResultViewController alloc] init];
      resultVC.bundleURL = string;
      [self.navigationController pushViewController:resultVC animated:YES];
    }
  }
  @catch (NSException *exception) {
    NSLog(@"Exception:%@", [exception reason]);
    UIAlertController* alert = [UIAlertController
                                alertControllerWithTitle:nil
                                message:@"该二维码不是一个有效的项目入口文件地址"
                                preferredStyle:UIAlertControllerStyleAlert];

    UIAlertAction* defaultAction = [UIAlertAction actionWithTitle:@"确定" style:UIAlertActionStyleDefault handler:nil];

    [alert addAction:defaultAction];
  }
}

@end
