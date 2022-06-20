import Foundation
import UIKit
import AVFoundation

@objc(RNUniqueId)
class RNUniqueId: NSObject {

  @objc static func requiresMainQueueSetup() -> Bool {
    return false
  }


  @objc func getUniqueString(_ callback: @escaping RCTResponseSenderBlock) -> Void {
    DispatchQueue.main.async {
      self._getUniqueString(callback: callback)
    }
  }

  func _getUniqueString(callback: RCTResponseSenderBlock) -> Void {
    let uuid = UIDevice.current.identifierForVendor?.uuidString
    callback([uuid])
  }

}
