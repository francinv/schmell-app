#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(RNUniqueId, NSObject)
  RCT_EXTERN_METHOD(getUniqueCallback: (RCTResponseSenderBlock *)callback)
@end

@interface RCT_EXTERN_MODULE(RNMp3Player, NSObject)
RCT_EXTERN_METHOD(
  playSound: (NSString *)urlOfFile
)
@end

@interface RCT_EXTERN_MODULE(RNLockOrientation, NSObject)
RCT_EXTERN_METHOD(lockToLandscapeLeft)
RCT_EXTERN_METHOD(lockToPortrait)
@end