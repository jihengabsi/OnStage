//
//  sendCodeController.swift
//  OnStage
//
//  Created by Jihen Gabsi on 19/4/2022.
//

import UIKit
import SwiftUI

class sendCodeController: UIViewController {
    
    
    @IBOutlet weak var Email: UITextField!
    @IBOutlet weak var OTPbtn: UIButton!
    var code : String = ""
    var email1 : String = ""
    
    override func viewDidLoad() {
        super.viewDidLoad()
        OTPbtn.layer.cornerRadius = 20.0
        Email.layer.cornerRadius = 15.0
        Email.layer.shadowRadius = 15.0
        Email.layer.masksToBounds = true
     
    }
    
    @IBAction func OTPaction(_ sender: Any) {
        guard let email = self.Email.text else {return}
        
        APIManger.sharedInstance.callingSendCodeAPI(email: email){ [self]
            (isSuccess,str) in
            if isSuccess{
               
                UserDefaults.standard.set(str, forKey: "code")
                UserDefaults.standard.set(email, forKey: "email")

               
            }
        }
        performSegue(withIdentifier: "segue1", sender: sender)
    }
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        
        if segue.identifier == "segue1"{
            //let indexPath = sender as! IndexPath
            let destination = segue.destination as? verifCodeController
          
            
        }
    }
    

}
