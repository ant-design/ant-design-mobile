//
//  ResultViewController.m
//  antd-mobile
//
//  Created by silentcloud on 7/4/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "ResultViewController.h"
#import "RCTRootView.h"

@interface ResultViewController () <UIWebViewDelegate>

@property(nonatomic, strong) UIActivityIndicatorView *activityIndicatorView;

@end

@implementation ResultViewController

- (void)viewDidLoad
{
  [super viewDidLoad];
  if (self.moduleName && self.moduleName.length) {
    [self loadReactNativeView];
  } else {
    [self loadWebView];
  }
  [self loadBackButton];
}

- (void)loadBackButton
{
  UIButton *button=[UIButton buttonWithType:UIButtonTypeCustom];
  [button setImage:[UIImage imageNamed:@"back"] forState:UIControlStateNormal];
  button.frame = CGRectMake(10, 30, 16, 25);
  [button addTarget:self action:@selector(backHome) forControlEvents:UIControlEventTouchUpInside];
  [self.view addSubview:button];
}

- (void)backHome {
  [self.navigationController popViewControllerAnimated:YES];
}

- (void)loadReactNativeView
{
  NSURL *jsCodeLocation = [NSURL URLWithString:self.bundleURL];
  
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:self.moduleName
                                               initialProperties:nil
                                                   launchOptions:nil];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  rootView.frame = self.view.bounds;
  [self.view addSubview:rootView];
}

- (void)loadWebView
{
  UIWebView *webView = [[UIWebView alloc]initWithFrame:self.view.bounds];
  [webView setUserInteractionEnabled:YES];
  webView.delegate = self;
  [self.view addSubview:webView];
  
  NSURL *url = [NSURL URLWithString:self.bundleURL];
  [webView loadRequest:[NSURLRequest requestWithURL:url]];
  
  _activityIndicatorView = [[UIActivityIndicatorView alloc]initWithFrame:CGRectMake(0, 0, 100, 100)];
  [_activityIndicatorView setCenter:self.view.center];
  [_activityIndicatorView setActivityIndicatorViewStyle:UIActivityIndicatorViewStyleGray];
  [self.view addSubview:_activityIndicatorView];
}

-(void)webViewDidStartLoad:(UIWebView *)webView
{
  [_activityIndicatorView startAnimating];
}

-(void)webViewDidFinishLoad:(UIWebView *)webView
{
  [_activityIndicatorView stopAnimating];
}

- (void)webView:(UIWebView *)webView didFailLoadWithError:(NSError *)error
{
  UIAlertController* alert = [UIAlertController
                              alertControllerWithTitle:nil
                              message:[NSString stringWithFormat:@"webView 加载失败, code: %ld, description: %@", error.code, error.localizedDescription]
                              preferredStyle:UIAlertControllerStyleAlert];
  
  UIAlertAction* defaultAction = [UIAlertAction actionWithTitle:@"确定" style:UIAlertActionStyleDefault handler:nil];
  
  [alert addAction:defaultAction];
}
@end
