//
//  ViewControllerInfoTaller.swift
//  AppMovilPrepanet
//
//  Created by alex on 14/10/22.
//

import UIKit

class ViewControllerInfoTaller: UIViewController {
    @IBOutlet weak var lbName: UILabel!
    @IBOutlet weak var lbStatus: UILabel!
    
    var tallerInfo:taller!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        lbName.text = tallerInfo.nombre
        lbStatus.text = tallerInfo.status

        // Do any additional setup after loading the view.
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
