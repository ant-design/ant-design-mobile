//
//  ScanViewController.h
//  antd-mobile
//
//  Created by silentcloud on 7/4/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>

@protocol QRScanControllerDelegate <NSObject>
- (void)didFinishedScanQR:(NSString *)string;
@optional
- (void)cancelScanQR;
@end

@interface ScanViewController : UIViewController
@property (nonatomic, weak) id<QRScanControllerDelegate> delegate;
@end
