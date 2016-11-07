package com.antm;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import android.content.pm.PackageManager;
import android.content.pm.PackageInfo;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager.NameNotFoundException;

import java.util.HashMap;
import java.util.Map;

public class RNAppInfo extends ReactContextBaseJavaModule {

    private String packageName = null;
    private String displayName = null;
    private String version = null;
    private String versionCode = null;

    public RNAppInfo(ReactApplicationContext reactContext) {
        super(reactContext);
        try {
            PackageManager pManager = reactContext.getPackageManager();
            packageName = reactContext.getPackageName();
            PackageInfo pInfo = pManager.getPackageInfo(packageName, 0);
            ApplicationInfo aInfo = pManager.getApplicationInfo(packageName, 0);
            displayName = pManager.getApplicationLabel(aInfo).toString();
            version = pInfo.versionName;
            versionCode = String.valueOf(pInfo.versionCode);
        } catch (NameNotFoundException nnfe) {
            System.out.println("RNAppInfo: package name not found");
        }
    }

    @Override
    public String getName() {
        return "RNAppInfo";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("version", versionCode);
        constants.put("shortVersion", version);
        constants.put("bundleIdentifier", packageName);
        constants.put("name", packageName);
        constants.put("displayName", displayName);
        return constants;
    }

}
