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
    @IBOutlet weak var imgTitulo: UIImageView!
    @IBOutlet weak var textDesc: UITextView!
    
    var tallerInfo:taller!
    var img:UIImage!
    
    override func viewDidLoad() {
        super.viewDidLoad()

        imgTitulo.image = img
        
        lbName.text = tallerInfo.nombre
        lbStatus.text = tallerInfo.status
        textDesc.text = tallerInfo.desc
        
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
