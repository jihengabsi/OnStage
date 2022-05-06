//
//  ModifProfileViewController.swift
//  OnStage
//
//  Created by Jihen Gabsi on 3/5/2022.
//

import UIKit
import MaterialComponents.MaterialTextFields
import MaterialComponents.MaterialTextControls_FilledTextAreas
import MaterialComponents.MaterialTextControls_FilledTextFields
import MaterialComponents.MaterialTextControls_OutlinedTextAreas
import MaterialComponents.MaterialTextControls_OutlinedTextFields
class ModifProfileViewController: UIViewController {

    @IBOutlet weak var EditBtn: UIButton!
    @IBOutlet weak var workSwitch: UISwitch!
    @IBOutlet weak var schoolSwitch: UISwitch!
    var _id = ""
    var firstName = ""
    var lastName = ""
    var currentPosition = ""
    var companyName = ""
    var educationTitle = ""
    var schoolName = ""
    var currentyWorking = "hey"
    var student = ""
    override func viewDidLoad() {
        super.viewDidLoad()
        EditBtn.layer.cornerRadius = 20.0
        let firstNameField = MDCMultilineTextField(frame: CGRect(x: 20, y: 150, width: self.view.frame.width-40, height: 80))
        firstNameField.placeholder = "First Name"
        let lastNameField = MDCMultilineTextField(frame: CGRect(x: 20, y: 200, width: self.view.frame.width-40, height: 80))
        lastNameField.placeholder = "Last Name"
        let titleField = MDCMultilineTextField(frame: CGRect(x: 20, y: 320, width: self.view.frame.width-40, height: 80))
        titleField.placeholder = "Title"
        let companyNameField = MDCMultilineTextField(frame: CGRect(x: 20, y: 370, width: self.view.frame.width-40, height: 80))
        companyNameField.placeholder = "Company Name"
        let eduTitleField = MDCMultilineTextField(frame: CGRect(x: 20, y: 550, width: self.view.frame.width-40, height: 80))
        eduTitleField.placeholder = "Title"
        let schoolNameField = MDCMultilineTextField(frame: CGRect(x: 20, y: 600, width: self.view.frame.width-40, height: 80))
        schoolNameField.placeholder = "School Name"
      
    
        view.addSubview(firstNameField)
        view.addSubview(lastNameField)
        view.addSubview(titleField)
        view.addSubview(companyNameField)
        view.addSubview(eduTitleField)
        view.addSubview(schoolNameField)
        
        self.firstName = firstNameField.text!
        self.lastName = lastNameField.text!
        self.companyName = companyNameField.text!
        self.currentPosition = titleField.text!
        self.educationTitle = eduTitleField.text!
        self.schoolName = schoolNameField.text!
      
        if let _id = UserDefaults.standard.value(forKey: "userId") as? String {
            self._id = _id
        }
    }
     
  
    @IBAction func editProfileActtion(_ sender: Any) {
        if schoolSwitch.isOn {self.student = "true"} else {self.student = "false"}
        if workSwitch.isOn {self.currentyWorking = "true"} else {self.currentyWorking = "false"}
        var name = self.firstName + self.lastName
        
            
        APIManger.sharedInstance.editProfileAPI(_id:self._id,name:name,currentPosition:self.currentPosition,currentyWorking:self.currentyWorking,educationTitle:self.educationTitle,school:self.schoolName,student:self.student){ [self]
            (isSuccess,str) in
            if isSuccess{
                debugPrint("success")
               
            }
            else { debugPrint("try again!") }
        }
        
    }
    

}
