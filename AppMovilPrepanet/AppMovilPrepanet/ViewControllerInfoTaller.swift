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
    @IBOutlet weak var btnInscribir: UIButton!
    @IBOutlet weak var btnCalendario: UIButton!
    
    var talleres = [taller]()
    var tallerIndex:Int = -1
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
    
    override func viewWillAppear(_ animated: Bool) {
        btnInscribir.isEnabled = false
        btnCalendario.isEnabled = false
        /*Condiciones para habilitar boton
         - El alumno debio cursar todos los talleres anteriores y no estar cursando el taller escogido
         - Debe haber un grupo con fechas de inscripcion vigentes
         */
        var habilitarBotones = true
        
        print(tallerIndex)
        for i in 0..<tallerIndex {
            print(talleres[i].status)
            if talleres[i].status != "Aprobado" {
                habilitarBotones = false
            }
        }
        
        
        
        if habilitarBotones {
            btnInscribir.isEnabled = true
            btnCalendario.isEnabled = true
        }
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
