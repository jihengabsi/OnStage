//
//  APIManagaer.swift
//  OnStage
//
//  Created by Jihen Gabsi on 19/4/2022.
//

import Foundation
import Alamofire
import SwiftUI

class APIManger{
    static let sharedInstance = APIManger()

    let headers: HTTPHeaders = [ .contentType("application/json")]
    
    func callingSendCodeAPI(email: String,completionHandler:@escaping(Bool,String) ->()){
        let parameters: [String: Any] = [
            "email" : email,
        ]
        AF.request(sendCode_url, method:.post, parameters: parameters,encoding: JSONEncoding.default,headers: headers).response { response in
            debugPrint(response)
            switch response.result{
            case .success(_):
                do{
                    //let json = try JSONSerialization.jsonObject(with: data!,options: [])
                     let res = String(data: response.data!, encoding: String.Encoding.utf8)
                    if response.response?.statusCode == 200{
                        completionHandler(true,res!)
                    }
                    else{
                        completionHandler(false,"Try again!")
                    }
                }
            case .failure(let err):
                print(err.localizedDescription)
                completionHandler(false,"Try again!")
            }
          
          
        }
      
    }
    func callingVerifCodeAPI(email:String,completionHandler:@escaping(Bool,String) ->()){
        let parameters: [String: Any] = [
            "email" : email
        ]
        AF.request(verifCode_url, method:.post, parameters: parameters,encoding: JSONEncoding.default,headers: headers).response { response in
            debugPrint(response)
            switch response.result{
            case .success(_):
                do{
                    //let json = try JSONSerialization.jsonObject(with: data!,options: [])
                     let res = String(data: response.data!, encoding: String.Encoding.utf8)
                    if response.response?.statusCode == 200{
                        completionHandler(true,res!)
                    }
                    else{
                        completionHandler(false,"Try again!")
                    }
                }
            case .failure(let err):
                print(err.localizedDescription)
                completionHandler(false,"Try again!")
            }
          
          
        }
      
    }
    func editProfileAPI(_id:String,name:String,currentPosition:String,currentyWorking:String,educationTitle:String,school:String,student:String,completionHandler:@escaping(Bool,String) ->()){
        let parameters: [String: Any] = [
            "_id" : _id,
            "name" : name,
            "currentPosition" : currentPosition,
            "currentyWorking" : currentyWorking,
            "educationTitle" : educationTitle,
            "school" : school,
            "student" : student
        ]
        AF.request(editProfile_url, method:.post, parameters: parameters,encoding: JSONEncoding.default,headers: headers).response { response in
            debugPrint(response)
            switch response.result{
            case .success(_):
                do{
                    //let json = try JSONSerialization.jsonObject(with: data!,options: [])
                     let res = String(data: response.data!, encoding: String.Encoding.utf8)
                    if response.response?.statusCode == 200{
                        completionHandler(true,res!)
                    }
                    else{
                        completionHandler(false,"Try again!")
                    }
                }
            case .failure(let err):
                print(err.localizedDescription)
                completionHandler(false,"Try again!")
            }
          
          
        }
      
    }
       
}

