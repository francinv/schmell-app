import Foundation
import UIKit
import AVFoundation

@objc(RNUniqueId)
class RNUniqueId: NSObject {

  @objc static func requiresMainQueueSetup() -> Bool {
    return false
  }

  @objc func getUniqueCallback(_ callback: @escaping RCTResponseSenderBlock) -> Void {
    DispatchQueue.main.async {
      self._getUniqueCallback(callback: callback)
    }
  }

  func _getUniqueCallback(callback: RCTResponseSenderBlock) -> Void {
    let uuid = UIDevice.current.identifierForVendor?.uuidString
    callback([uuid])
  }

  func _getUniqueString() -> String {
    let uuid = UIDevice.current.identifierForVendor!.uuidString
    return uuid
  }

  @objc
 func constantsToExport() -> [String: Any]! {
   return ["uniqueString": self._getUniqueString()]
 }

}
