//
//  RNAppInfo.m
//  antd-mobile
//
//  Created by silentcloud on 2016/11/8.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "RNAppInfo.h"

@implementation RNAppInfo

RCT_EXPORT_MODULE();

- (NSDictionary *)constantsToExport
{
  NSString *displayName = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleDisplayName"];
  if(displayName == nil)
    displayName = @"";
  
  NSString *iosVersion = [[UIDevice currentDevice] systemVersion];
  NSString *infoDeviceName = [[UIDevice currentDevice] name];
  
  return @{
           @"version": [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleVersion"],
           @"shortVersion": [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleShortVersionString"],
           @"bundleIdentifier": [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleIdentifier"],
           @"name": [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleName"],
           @"displayName": displayName,
           @"getInfoiOS":iosVersion,
           @"getInfoDeviceName":infoDeviceName,
           
           };
}

@end
