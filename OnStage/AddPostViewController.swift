//
//  AddPostViewController.swift
//  OnStage
//
//  Created by Jihen Gabsi on 8/4/2022.
//

import UIKit

class AddPostViewController: UIViewController {
    //IBOutlets
    @IBOutlet weak var publichBtn: UIButton!
    @IBOutlet weak var ProfileImage: UIImageView!
    @IBOutlet weak var fullName: UILabel!
    @IBOutlet weak var titleField: UITextField!
    @IBOutlet weak var descriptionField: UITextField!
    
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        publichBtn.layer.cornerRadius = 20.0
        // Do any additional setup after loading the view.
    }
    
    @IBAction func publichAction(_ sender: Any) {
    }
    
    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
