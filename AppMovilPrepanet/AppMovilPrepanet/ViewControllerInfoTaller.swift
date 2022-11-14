//
//  ViewControllerInfoTaller.swift
//  AppMovilPrepanet
//
//  Created by alex on 14/10/22.
//

import UIKit
import Firebase

class ViewControllerInfoTaller: UIViewController {
    @IBOutlet weak var lbName: UILabel!
    @IBOutlet weak var lbStatus: UILabel!
    @IBOutlet weak var imgTitulo: UIImageView!
    @IBOutlet weak var textDesc: UITextView!
    @IBOutlet weak var btnInscribir: UIButton!
    @IBOutlet weak var btnCalendario: UIButton!
    
    var db = Firestore.firestore()
    let user = Auth.auth().currentUser
    
    var talleres:[taller]!
    var tallerIndex:Int!
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
        var mensajeError = " "
                
        for i in 0..<tallerIndex {
            if talleres[i].status != "Aprobado" {
                habilitarBotones = false
                mensajeError = "No se han aprobado todos los talleres anteriores."
            }
        }
        
        if (mensajeError != " "){
            print(mensajeError)
        }
                
        if /*tallerInfo.status == "Sin Cursar" &&*/ habilitarBotones {
            habilitarBotones = false
            mensajeError = "No hay fechas disponibles por el momento."
            let currentTime = Date()
            let tallerDoc = db.collection("Taller").document(tallerInfo.docID)
            var tallerDisponible:QueryDocumentSnapshot!
            
            db.collection("GrupoTaller").whereField("taller_id", isEqualTo: tallerDoc).getDocuments { querySnapshot, error in
                if let error = error {
                    print("Inscripcion Error" + error.localizedDescription)
                }
                
                for tallerDoc in querySnapshot!.documents {
                    let tallerData = tallerDoc.data()
                    let inscripcionInit = (tallerData["inscripcion_inicio"] as! Timestamp).dateValue()
                    let inscripcionFin = (tallerData["inscripcion_fin"] as! Timestamp).dateValue()
                    print(inscripcionInit)
                    print(currentTime)
                    print(inscripcionFin)
                    if inscripcionInit <= currentTime && inscripcionFin >= currentTime {
                        //print("Hay taller disponible")
                        tallerDisponible = tallerDoc
                        habilitarBotones = true
                        mensajeError = ""
                    }
                    /*if inscripcionInit <= currentTime {
                        print("init usar <=")
                    }
                    if inscripcionInit >= currentTime {
                        print("init usar >=")
                    }
                    if inscripcionFin <= currentTime {
                        print("fin usar <=")
                    }
                    if inscripcionFin >= currentTime {
                        print("fin usar >=")
                    }*/
                }
                if let _ = tallerDisponible {
                    print("Hay taller disponible")
                }
                else {
                    print(mensajeError)
                }
                
                if habilitarBotones {
                    self.btnInscribir.isEnabled = true
                    self.btnCalendario.isEnabled = true
                }
            }
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
