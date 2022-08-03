//
//  RNLockOrientation.swift
//  schmellApp
//
//  Created by Francin@Home on 22/07/2022.
//

import Foundation
import UIKit

@objc(RNLockOrientation)
class RNLockOrientation: NSObject {
  
  @objc static func requiresMainQueueSetup() -> Bool {
    return false
  }

  @objc func lockToLandscapeLeft() -> Void {
    DispatchQueue.main.async {
      self._lockToLandscapeLeft();
    }
  }
  
  @objc func lockToPortrait () -> Void {
    DispatchQueue.main.async {
      self._lockToPortrait();
    }
  }
  
  static func lockOrientation(_ orientation: UIInterfaceOrientationMask) {
      if let delegate = UIApplication.shared.delegate as? AppDelegate {
        delegate.orientationLock = orientation;
      }
  }
  
  func _lockToLandscapeLeft() {
    RNLockOrientation.lockOrientation(UIInterfaceOrientationMask.landscapeRight);
        
    UIDevice.current.setValue(UIInterfaceOrientation.landscapeRight.rawValue, forKey: "orientation");
    UINavigationController.attemptRotationToDeviceOrientation();
  }
  
  func _lockToPortrait() {
    RNLockOrientation.lockOrientation(UIInterfaceOrientationMask.portrait);
        
    UIDevice.current.setValue(UIInterfaceOrientation.portrait.rawValue, forKey: "orientation");
    UINavigationController.attemptRotationToDeviceOrientation();
  }
  
}


