//
//  ViewController.swift
//  OnStage
//
//  Created by Jihen Gabsi on 7/4/2022.
//

import UIKit
import AVKit
class ViewController: UIViewController {
    @IBOutlet weak var OTPbtn: UIButton!
    @IBOutlet weak var Email: UITextField!
    @IBOutlet weak var profileImage: UIImageView!
    @IBOutlet weak var imageBtn: UIButton!
    var profilePicture: Any?
    
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        OTPbtn.layer.cornerRadius = 20.0
        Email.layer.cornerRadius = 15.0
        Email.layer.shadowRadius = 15.0
        Email.layer.masksToBounds = true
        profileImage?.layer.shadowRadius = 45.0
        profileImage?.layer.cornerRadius = 45.0
       
   
  
  
    }

    @IBAction func OTPButton(_ sender: Any) {
        let secondVC = self.storyboard?.instantiateViewController(withIdentifier: "MainStory") as? UITabBarController
            self.present(secondVC!, animated: false, completion: nil)
    }
    @IBAction func editImage(_ sender: Any) {
        ImagePickerManager().pickImage(self){image in
                  self.profilePicture = image
                  self.profileImage.image = image
        
              }
    }
    
}

