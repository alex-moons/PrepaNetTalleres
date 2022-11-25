//
//  ViewControllerInfoNotif.swift
//  AppMovilPrepanet
//
//  Created by alex on 19/10/22.
//

import UIKit
import Firebase

class ViewControllerInfoNotif: UIViewController {
    
    @IBOutlet weak var lbTitulo: UILabel!
    @IBOutlet weak var textMsg: UITextView!
    @IBOutlet weak var lbAutor: UILabel!
    
    var notif:notificacion!
    var autor:String!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        lbTitulo.text = notif.titulo
        notif.autor_id.getDocument  { DocumentSnapshot, error in
            if let error = error {
                print("Inscripcion Error" + error.localizedDescription)
            }
            
            self.lbAutor.text = (DocumentSnapshot?.data()!["nombre"] as! String)
        }
        textMsg.text = notif.contenido
        

        // Do any additional setup after loading the view.
    }
    
    @IBAction func dismiss(_ sender: Any) {
        dismiss(animated: true, completion: nil)
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
