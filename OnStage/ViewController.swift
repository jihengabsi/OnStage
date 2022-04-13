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
    }
    
}

