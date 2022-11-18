//
//  ViewControllerSettings.swift
//  AppMovilPrepanet
//
//  Created by alex on 19/10/22.
//

import UIKit
import Firebase
import FirebaseAuth

class ViewControllerSettings: UIViewController, UITableViewDelegate, UITableViewDataSource{
    
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 0
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath)
        return cell
    }
    
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }
    
    @IBAction func logOut(_ sender: UIButton) {
        do {
            print("Signing out")
            try Auth.auth().signOut()
            print("Signed out")
        } catch {
            print("Sign out error")
          print(error)
        }
        print("Dismissing")
        self.dismiss(animated: true)
        print("Dismissed")
        //performSegue(withIdentifier: "signOut", sender: self)
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
