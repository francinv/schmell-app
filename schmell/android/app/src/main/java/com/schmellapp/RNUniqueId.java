package com.schmellapp;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;

import javax.security.auth.callback.Callback;

import java.util.HashMap;
import android.provider.Settings.Secure;

public class RNUniqueId extends ReactContextBaseJavaModule {
  public RNUniqueId(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "RNUniqueId";
  }

  @ReactMethod
  public void getUniqueString(Callback callback) {
    callback.invoke(Secure.getString(this.getContext().getContentResolver(), Secure.ANDROID_ID));
  }
   
}
