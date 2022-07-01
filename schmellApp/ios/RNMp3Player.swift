//
//  RNMp3Player.swift
//  schmellApp
//
//  Created by Francin Anoj Vincent on 24/06/2022.
//

import Foundation
import AVFoundation
import AVKit

@objc(RNMp3Player)
class RNMp3Player: NSObject {
  
  var player: AVPlayer?
  
  @objc static func requiresMainQueueSetup() -> Bool {
    return false
  }
  
  @objc func playSound(_ urlOfFile: String) -> Void {
    DispatchQueue.main.async { [self] in
      let url = URL(string:urlOfFile)
      do {

        let playerItem = AVPlayerItem(url: url!)

        self.player = try AVPlayer(playerItem:playerItem)
          player!.volume = 1.0
          player!.play()
      } catch let error as NSError {
          self.player = nil
          print(error.localizedDescription)
      } catch {
          print("AVAudioPlayer init failed")
      }
    }
  }
}
