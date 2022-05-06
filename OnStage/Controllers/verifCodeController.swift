//
//  verifCodeController.swift
//  OnStage
//
//  Created by Jihen Gabsi on 20/4/2022.
//

import UIKit
import SwiftUI

class verifCodeController: UIViewController {

    @IBOutlet weak var code: UITextField!
    @IBOutlet weak var verifyBtn: UIButton!
    
    var email = ""
    var code1 = ""
    override func viewDidLoad() {
        super.viewDidLoad()
        verifyBtn.layer.cornerRadius = 20.0
        code.layer.cornerRadius = 15.0
        code.layer.shadowRadius = 15.0
        code.layer.masksToBounds = true
        if let code1 = UserDefaults.standard.value(forKey: "code") as? String {
            self.code1 = code1
        }
        if let email = UserDefaults.standard.value(forKey: "email") as? String {
            self.email = email
        }
        print("cc:"+email)
        // Do any additional setup after loading the view.
    }
   
    @IBAction func verifAction(_ sender: UIButton) {
        guard let code2 = self.code.text else {return}

        print("code2:" + code2)
        print( "code1:" +  code1)



        if(code1 == code2){
            APIManger.sharedInstance.callingVerifCodeAPI(email: self.email){ [self]
                (isSuccess,found) in
                if isSuccess{
                    let json = Data(found.utf8)
                    let jj = (try? JSONSerialization.jsonObject(with: json, options:[] )) as? [String:String]
                   
                    let found = jj?["found"] ?? " "
                    let userId = jj?["userId"] ?? " "
                    let picture = jj?["picture"] ?? " "
                    let name = jj?["name"] ?? " "
                    let token = jj?["token"] ?? " "
                    UserDefaults.standard.set(found, forKey: "found")
                    UserDefaults.standard.set(userId, forKey: "userId")
                    UserDefaults.standard.set(picture, forKey: "picture")
                    UserDefaults.standard.set(name, forKey: "name")
                    UserDefaults.standard.set(token, forKey: "token")
                    if(found == "found")
                    {   let secondVC = self.storyboard?.instantiateViewController(withIdentifier: "MainStory") as? UITabBarController
                        self.present(secondVC!, animated: false, completion: nil)
                       
                    }
                    else {
                        let secondVC = self.storyboard?.instantiateViewController(withIdentifier: "ViewController") as? ViewController
                        self.present(secondVC!, animated: false, completion: nil)
                    }
                    
                    
              
            }
        }
        }
        
    }
    

    
    
}
