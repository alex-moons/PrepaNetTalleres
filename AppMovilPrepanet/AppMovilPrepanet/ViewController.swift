//
//  ViewController.swift
//  AppMovilPrepanet
//
//  Created by macbook on 07/10/22.
//

import UIKit
import FirebaseCore
import FirebaseFirestore
import FirebaseAuth

class ViewController: UIViewController, UITableViewDelegate, UITableViewDataSource, UIApplicationDelegate{
    
    var window: UIWindow?

    func application(_ application: UIApplication,
      didFinishLaunchingWithOptions launchOptions:
                     [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        FirebaseApp.configure()
      return true
    }

    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return tallerList.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier:"cell")!
        cell.textLabel?.text = tallerList[indexPath.row]
        cell.detailTextLabel?.text = "\(indexPath.row)"
        cell.imageView?.image = UIImage(named: "defaultUser")
        return cell
    }
    
    var tallerList = ["Taller1", "Taller2", "Taller3", "Taller4", "Taller5"]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }
    //as


}

