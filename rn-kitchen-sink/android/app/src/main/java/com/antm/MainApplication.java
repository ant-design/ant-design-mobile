package com.antm;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

import com.microsoft.codepush.react.CodePush;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected String getBundleAssetName() {
        return "index.android.bundle";
    }

    @Override
    protected String getJSMainModuleName() {
        return "rn-kitchen-sink/index.android";
    }

    @Override
    protected String getJSBundleFile() {
        return CodePush.getBundleUrl();
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new RNAppInfoPackage(),
          new CodePush("G9i2CN948Wpy31683uO0DXPQfyzz4JsHf03EW", MainApplication.this, BuildConfig.DEBUG)
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }
}
