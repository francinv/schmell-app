package com.schmellapp; 
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.provider.Settings.Secure;
import android.content.ContentResolver;

public class RNUniqueId extends ReactContextBaseJavaModule {
    ContentResolver reactContext;
    RNUniqueId(ReactApplicationContext context) {
        super(context);
        reactContext = context.getContentResolver();
    }

    @Override
    public String getName() {
        return "RNUniqueId";
    }

    private String getUniqueString() {
        return Secure.getString(reactContext, Secure.ANDROID_ID);
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("uniqueString", getUniqueString());
        return constants;
    }


}