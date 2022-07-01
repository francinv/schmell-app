#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(RNUniqueId, NSObject)
  RCT_EXTERN_METHOD(getUniqueString: (RCTResponseSenderBlock *)callback)
@end

@interface RCT_EXTERN_MODULE(RNMp3Player, NSObject)
RCT_EXTERN_METHOD(
  playSound: (NSString *)urlOfFile
)
@end
