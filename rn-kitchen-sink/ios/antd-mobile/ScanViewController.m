//
//  ScanViewController.m
//  antd-mobile
//
//  Created by silentcloud on 7/4/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "ScanViewController.h"
#import <AVFoundation/AVFoundation.h>

@interface ScanViewController () <AVCaptureMetadataOutputObjectsDelegate>
@property (strong, nonatomic) UIView *viewfinderView;
@property (strong, nonatomic) UIButton *backButton;
@property (strong, nonatomic) UIButton *torchButton;
@property (strong, nonatomic) UIImageView *scanLine;
@property (strong, nonatomic) UILabel *tipsLabel;
@property (strong, nonatomic) AVCaptureSession *session;
@property (strong, nonatomic) AVCaptureVideoPreviewLayer *previewLayer;
@property (strong, nonatomic) UILabel *infoLabel;
@property (strong, nonatomic) UIImageView *scanLineImageView;
@property (strong, nonatomic) AVCaptureMetadataOutput *outPut;
@end

@implementation UIColor (RGB)

+(UIColor*)withRGB:(NSUInteger)rgb alpha:(CGFloat)alpha
{
  return [UIColor colorWithRed:((rgb & 0x00FF0000) >> 16) / 255.0
                         green:((rgb & 0x0000FF00) >> 8) / 255.0
                          blue:((rgb & 0x000000FF)) / 255.0
                         alpha:alpha];
}

+(UIColor*)withRGB:(NSUInteger)rgb
{
  return [UIColor withRGB:rgb alpha:1.0];
}
@end

@implementation UIImage (Ext)

+ (UIImage *)imageWithColor1x1:(UIColor *)color
{
  return [UIImage imageWithColor:color size:CGSizeMake(1, 1)];
}

+ (UIImage *)imageWithColor:(UIColor *)color size:(CGSize)size
{
  UIGraphicsBeginImageContext(size);
  CGContextRef currentContext = UIGraphicsGetCurrentContext();
  CGRect fillRect = CGRectMake(0, 0, size.width, size.height);
  CGContextSetFillColorWithColor(currentContext, color.CGColor);
  CGContextFillRect(currentContext, fillRect);
  UIImage *colorImage = UIGraphicsGetImageFromCurrentImageContext();
  UIGraphicsEndImageContext();
  return colorImage;
}

@end


@implementation ScanViewController

- (UIButton *)backButton {
  if (!_backButton) {
    _backButton = [UIButton buttonWithType:UIButtonTypeCustom];
    _backButton.frame = CGRectMake(20, 30, 36, 36);
    [_backButton setImage:[UIImage imageNamed:@"QRBack"] forState:UIControlStateNormal];
    [_backButton addTarget:self action:@selector(goBackHandler) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:_backButton];
  }
  return _backButton;
}
- (UIButton *)torchButton {
  if (!_torchButton) {
    _torchButton = [UIButton buttonWithType:UIButtonTypeCustom];
    _torchButton.frame = CGRectMake(self.view.bounds.size.width - 56, 30, 36, 36);
    [_torchButton setImage:[UIImage imageNamed:@"QRTorch"] forState:UIControlStateNormal];
    [_torchButton addTarget:self action:@selector(torchHandler:) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:_torchButton];
  }
  return _torchButton;
}

- (UIImageView *)scanLine {
  if (!_scanLine) {
    _scanLine = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"QRScanLine"]];
    _scanLine.frame = CGRectMake(6, 1, 230, 10);
    _scanLine.hidden = YES;
    [self.viewfinderView addSubview:_scanLine];
  }
  return _scanLine;
}
- (UIView *)viewfinderView {
  if (!_viewfinderView) {
    _viewfinderView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, 242, 242)];
    _viewfinderView.center = self.view.center;
  }
  return _viewfinderView;
}

- (void)viewDidLoad {
  self.view.backgroundColor = [UIColor blackColor];
  [super viewDidLoad];
  // Do any additional setup after loading the view.
  [self initLayout];
}

- (void)initMask {
  CGSize viewSize = self.view.bounds.size;
  UIView *topMask = [[UIView alloc] initWithFrame:CGRectMake(0, 0, viewSize.width, (viewSize.height - 242)/2)];
  topMask.backgroundColor = [UIColor colorWithWhite:1 alpha:.2];
  UIView *rightMask = [[UIView alloc] initWithFrame:CGRectMake((viewSize.width - 242)/2 + 242, (viewSize.height - 242)/2, (viewSize.width - 242)/2, 242)];
  rightMask.backgroundColor = [UIColor colorWithWhite:1 alpha:.2];
  UIView *bottomMask = [[UIView alloc] initWithFrame:CGRectMake(0, (viewSize.height - 242)/2 + 242, viewSize.width, (viewSize.height - 242)/2)];
  bottomMask.backgroundColor = [UIColor colorWithWhite:1 alpha:.2];
  UIView *leftMask = [[UIView alloc] initWithFrame:CGRectMake(0, (viewSize.height - 242)/2, (viewSize.width - 242)/2, 242)];
  leftMask.backgroundColor = [UIColor colorWithWhite:1 alpha:.2];
  [self.view addSubview:topMask];
  [self.view addSubview:rightMask];
  [self.view addSubview:bottomMask];
  [self.view addSubview:leftMask];
  [self.view addSubview:self.viewfinderView];
}
- (void)initLayout {
  [self initMask];
  self.viewfinderView.layer.borderWidth = 1 / UIScreen.mainScreen.scale;
  self.viewfinderView.layer.borderColor = [UIColor withRGB:0x808080].CGColor;
  
  self.backButton.layer.cornerRadius = 18;
  self.backButton.clipsToBounds = YES;
  [self.backButton setBackgroundImage:[UIImage imageWithColor1x1:[UIColor withRGB:0x000000 alpha:.5]] forState:UIControlStateNormal];
  self.torchButton.layer.cornerRadius = 18;
  self.torchButton.clipsToBounds = YES;
  [self.torchButton setBackgroundImage:[UIImage imageWithColor1x1:[UIColor withRGB:0x000000 alpha:.5]] forState:UIControlStateNormal];
  
  self.tipsLabel.layer.cornerRadius = 15;
  self.tipsLabel.clipsToBounds = YES;
}

- (void)viewWillAppear:(BOOL)animated {
  [super viewWillAppear:animated];
  self.navigationController.navigationBar.hidden = YES;
  self.navigationController.interactivePopGestureRecognizer.enabled = NO;
  if (_previewLayer) {
    return;
  }
  //    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(orientationDidChange:) name:UIDeviceOrientationDidChangeNotification object:nil];
  /**********************************摄像头开始**********************************/
  // 1 实例化摄像头设备
  AVCaptureDevice *device = [AVCaptureDevice defaultDeviceWithMediaType:AVMediaTypeVideo];
  // 2 设置输入,把摄像头作为输入设备
  NSError *error = nil;
  AVCaptureDeviceInput *input = [AVCaptureDeviceInput deviceInputWithDevice:device error:&error];
  if (error) {
    UIAlertController* alert = [UIAlertController alertControllerWithTitle:@"设备信息"
                                                                   message:@"该设备没有摄像头"
                                                            preferredStyle:UIAlertControllerStyleAlert];
    
    UIAlertAction* defaultAction = [UIAlertAction actionWithTitle:@"确定" style:UIAlertActionStyleDefault handler:^(UIAlertAction * action) {
      [self goBackHandler];
    }];
    
    [alert addAction:defaultAction];
    [self presentViewController:alert animated:YES completion:nil];
    //        [self.view makeToast:@"该设备没有摄像头" duration:3 position:CSToastPositionCenter];
    //        [self performSelector:@selector(goBackHandler:) withObject:nil afterDelay:3];
    return;
  }
  // 4 拍摄会话
  AVCaptureSession *session = [[AVCaptureSession alloc] init];
  self.session = session;
  session.sessionPreset = AVCaptureSessionPreset640x480;
  
  // 5 设置预览图层(用来让用户能够看到扫描情况)
  AVCaptureVideoPreviewLayer *previewLayer = [AVCaptureVideoPreviewLayer layerWithSession:session];
  previewLayer.frame = self.view.bounds;
  // AVCaptureVideoPreviewLayer -- to show the user what a camera is recording
  // 5.1 设置preview图层的属性
  [previewLayer setVideoGravity:AVLayerVideoGravityResizeAspectFill];
  //5.3将图层添加到视图的图层
  [self.view.layer insertSublayer:previewLayer atIndex:0];
  self.previewLayer = previewLayer;
  
  // 3 设置输出(Metadata元数据)
  AVCaptureMetadataOutput *outPut = [[AVCaptureMetadataOutput alloc] init];
  // 3.1 设置输出的代理
  // 使用主线程队列，相应比较同步，使用其他队列，相应不同步，容易让用户产生不好的体验。
  [outPut setMetadataObjectsDelegate:self queue:dispatch_get_main_queue()];
  self.outPut = outPut;
  // 添加session的输入和输出
  [session addInput:input];
  [session addOutput:outPut];
  // 这个属性必须放在 addOutput之后设置才有效，不知道为啥。
  _outPut.rectOfInterest = [_previewLayer metadataOutputRectOfInterestForRect:self.viewfinderView.frame];
  //    NSLog(@"%@", NSStringFromCGRect(_outPut.rectOfInterest));
  // 4.1 设置输出的格式
  [outPut setMetadataObjectTypes:@[AVMetadataObjectTypeQRCode]];
  //6.启动会话
  [self.session startRunning];
  /**********************************摄像头结束**********************************/
  [self scanLineAnimation];
  
}

- (void)viewWillDisappear:(BOOL)animated {
  [super viewWillDisappear:animated];
  self.navigationController.navigationBar.hidden = NO;
  self.navigationController.interactivePopGestureRecognizer.enabled = YES;
}

- (void)goBackHandler{
  if ([self.delegate respondsToSelector:@selector(cancelScanQR)]) {
    [self.delegate cancelScanQR];
  }
  [self.navigationController popViewControllerAnimated:YES];
}
- (void)torchHandler:(id)sender {
  AVCaptureDevice *device = [AVCaptureDevice defaultDeviceWithMediaType:AVMediaTypeVideo];
  NSError *error;
  if (device.hasTorch) {  // 判断设备是否有散光灯
    BOOL b = [device lockForConfiguration:&error];
    if (!b) {
      if (error) {
        NSLog(@"lock torch configuration error:%@", error.localizedDescription);
      }
      return;
    }
    device.torchMode =
    (device.torchMode == AVCaptureTorchModeOff ? AVCaptureTorchModeOn : AVCaptureTorchModeOff);
    [device unlockForConfiguration];
  }
  
}
// 扫描条上下滚动
- (void)scanLineAnimation {
  self.scanLine.hidden = NO;
  [UIView animateWithDuration:3 - 0.05 delay:0 options:UIViewAnimationOptionRepeat | UIViewAnimationOptionAutoreverse animations:^{
    CGRect rect = self.scanLine.frame;
    rect.origin.y = 231;
    self.scanLine.frame = rect;
    [self.scanLine layoutIfNeeded];
  } completion:nil];
}

#pragma mark AVCaptureMetadataOutputObjectsDelegate
//此方法是在识别到QRCode并且完成转换，如果QRCode的内容越大，转换需要的时间就越长。
-(void)captureOutput:(AVCaptureOutput *)captureOutput didOutputMetadataObjects:(NSArray *)metadataObjects fromConnection:(AVCaptureConnection *)connection
{
  // 会频繁的扫描，调用代理方法
  // 1如果扫描完成，停止会话
  [self.session stopRunning];
  //2删除预览图层
  [self.previewLayer removeFromSuperlayer];
  //设置界面显示扫描结果
  if (metadataObjects.count > 0) {
    AVMetadataMachineReadableCodeObject *obj = metadataObjects[0];
    NSLog(@"%@", obj.stringValue);
    if ([self.delegate respondsToSelector:@selector(didFinishedScanQR:)]) {
      [self.delegate didFinishedScanQR:obj.stringValue];
    }
  }
  [self.navigationController popViewControllerAnimated:YES];
}

@end
