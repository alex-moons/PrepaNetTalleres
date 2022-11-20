//
//  ViewControllerInfoTaller.swift
//  AppMovilPrepanet
//
//  Created by alex on 14/10/22.
//

import UIKit
import EventKit
import Foundation
import Firebase

class ViewControllerInfoTaller: UIViewController {
    @IBOutlet weak var lbName: UILabel!
    @IBOutlet weak var lbStatus: UILabel!
    @IBOutlet weak var imgTitulo: UIImageView!
    @IBOutlet weak var textDesc: UITextView!
    @IBOutlet weak var btnInscribir: UIButton!
    @IBOutlet weak var btnCalendario: UIButton!
    @IBOutlet weak var lbFechasCurso: UILabel!
    @IBOutlet weak var lbFechasInscripcion: UILabel!
    
    var db = Firestore.firestore()
    let user = Auth.auth().currentUser
    
    var talleres:[taller]!
    var tallerIndex:Int!
    var tallerInfo:taller!
    var img:UIImage!
    var tallerDisponible:QueryDocumentSnapshot!
    var fechaini:Date?
    var fechafin:Date?
    
    
    override func viewDidLoad() {
        super.viewDidLoad()

        imgTitulo.image = img
        
        lbName.text = tallerInfo.nombre
        lbStatus.text = tallerInfo.status
        textDesc.text = tallerInfo.desc
        
        // Do any additional setup after loading the view.
    }
    
    override func viewWillAppear(_ animated: Bool) {
        let formatoFecha = DateFormatter()
        formatoFecha.dateFormat = "dd/MM/yyyy"
        switch tallerInfo.status {
        case "Aprobado":
            print("Taller aprobado")
            let cursoInit = (talleres[tallerIndex].grupoDatos!["fecha_inicio"] as! Timestamp).dateValue()
            let cursoFin = (talleres[tallerIndex].grupoDatos!["fecha_fin"] as! Timestamp).dateValue()
            lbFechasCurso.text = formatoFecha.string(from: cursoInit) + " - " + formatoFecha.string(from: cursoFin)
            lbFechasInscripcion.text = "Sin Fechas"
            
            break
            
        case "Cursando":
            print("Taller cursando")
            let cursoInit = (talleres[tallerIndex].grupoDatos!["fecha_inicio"] as! Timestamp).dateValue()
            let cursoFin = (talleres[tallerIndex].grupoDatos!["fecha_fin"] as! Timestamp).dateValue()
            lbFechasCurso.text = formatoFecha.string(from: cursoInit) + " - " + formatoFecha.string(from: cursoFin)
            lbFechasInscripcion.text = "Sin Fechas"
            
            break
            
        case "Pendiente":
            print("Taller pendiente")
            let cursoInit = (talleres[tallerIndex].grupoDatos!["fecha_inicio"] as! Timestamp).dateValue()
            let cursoFin = (talleres[tallerIndex].grupoDatos!["fecha_fin"] as! Timestamp).dateValue()
            let inscripInit = (talleres[tallerIndex].grupoDatos!["inscripcion_inicio"] as! Timestamp).dateValue()
            let inscripFin = (talleres[tallerIndex].grupoDatos!["inscripcion_fin"] as! Timestamp).dateValue()
            lbFechasCurso.text = formatoFecha.string(from: cursoInit) + " - " + formatoFecha.string(from: cursoFin)
            lbFechasInscripcion.text = formatoFecha.string(from: inscripInit) + " - " + formatoFecha.string(from: inscripFin)
            
            break
            
        case "Sin Cursar":
            print("Taller sin cursar")
            
            /*let tallerDocRef = db.collection("Taller").document(talleres[tallerIndex].docID);
            
            db.collection("GrupoTaller").whereField("taller_id", isEqualTo: tallerDocRef)*/
            
            if let cursoInit = talleres[tallerIndex].grupoDatos,
               let cursoFin = talleres[tallerIndex].grupoDatos {
                let dateInit = (cursoInit["fecha_inicio"] as! Timestamp).dateValue()
                let dateFin = (cursoFin["fecha_fin"] as! Timestamp).dateValue()
                fechaini = dateInit
                fechafin = dateFin
                lbFechasCurso.text = formatoFecha.string(from: dateInit) + " - " + formatoFecha.string(from: dateFin)
            }
            else {
                lbFechasCurso.text = "Sin Fechas"
            }
            
            if let inscripInit = talleres[tallerIndex].grupoDatos,
               let inscripFin = talleres[tallerIndex].grupoDatos {
                let dateInit = (inscripInit["inscripcion_inicio"] as! Timestamp).dateValue()
                let dateFin = (inscripFin["inscripcion_fin"] as! Timestamp).dateValue()
                lbFechasInscripcion.text = formatoFecha.string(from: dateInit) + " - " + formatoFecha.string(from: dateFin)
            }
            else {
                lbFechasInscripcion.text = "Sin Fechas"
            }
            
            break
            
        default:
            lbFechasCurso.text = "Sin Fechas"
            lbFechasInscripcion.text = "Sin Fechas"
            
            break
        }
        
        btnInscribir.isEnabled = false
        if lbFechasCurso.text == "Sin Fechas"{
            btnCalendario.isEnabled = false
        }else{
            btnCalendario.isEnabled = true
        }
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
        
        if (tallerInfo.status == "Pendiente"){
            habilitarBotones = false
        }
        
        if tallerInfo.status == "Sin Cursar" && habilitarBotones {
            habilitarBotones = false
            mensajeError = "No hay fechas disponibles por el momento."
            let currentTime = Date()
            let tallerDoc = db.collection("Taller").document(tallerInfo.docID)
            
            db.collection("GrupoTaller").whereField("taller_id", isEqualTo: tallerDoc).getDocuments { querySnapshot, error in
                if let error = error {
                    print("Inscripcion Error" + error.localizedDescription)
                }
                
                for tallerDoc in querySnapshot!.documents {
                    let tallerData = tallerDoc.data()
                    let inscripcionInit = (tallerData["inscripcion_inicio"] as! Timestamp).dateValue()
                    let inscripcionFin = (tallerData["inscripcion_fin"] as! Timestamp).dateValue()
                    /*print(inscripcionInit)
                    print(currentTime)
                    print(inscripcionFin)*/
                    if inscripcionInit <= currentTime && inscripcionFin >= currentTime {
                        //print("Hay taller disponible")
                        self.tallerDisponible = tallerDoc
                        habilitarBotones = true
                        mensajeError = ""
                    }
                }
                if let _ = self.tallerDisponible {
                    print("Hay taller disponible")
                    let cursoInit = (self.tallerDisponible.data()["fecha_inicio"] as! Timestamp).dateValue()
                    let cursoFin = (self.tallerDisponible.data()["fecha_fin"] as! Timestamp).dateValue()
                    let inscripInit = (self.tallerDisponible.data()["inscripcion_inicio"] as! Timestamp).dateValue()
                    let inscripFin = (self.tallerDisponible.data()["inscripcion_fin"] as! Timestamp).dateValue()
                    self.lbFechasCurso.text = formatoFecha.string(from: cursoInit) + " - " + formatoFecha.string(from: cursoFin)
                    self.lbFechasInscripcion.text = formatoFecha.string(from: inscripInit) + " - " + formatoFecha.string(from: inscripFin)
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
    
    @IBAction func Inscribir(_ sender: UIButton){
        let confirmAlert = UIAlertController(title: "Confirmar inscripción", message: "Deseas inscribirte a este taller? Una vez mandada la solicitud, un coordinador aceptará tu inscripción.", preferredStyle: .alert)
        
        confirmAlert.addAction(UIAlertAction(title: "Confirmar", style: .default, handler: { (action: UIAlertAction!) in
          /*
           - Tener taller disponible (gupo_id)
           - Conseguir doc Alumno
           - Crear inscripcion
           */
            
            self.db.collection("Alumno").whereField("correo_institucional", isEqualTo: self.user!.email!).getDocuments {
                qsAlumno, error in
                if let error = error {
                    print("Inscripcion Error" + error.localizedDescription)
                }
                
                let alumnoDoc = qsAlumno?.documents[0]
                
                self.db.collection("Inscripcion").document().setData([
                    "alumno_id": self.db.collection("Alumno").document(alumnoDoc!.documentID),
                    "alumno_idStr": alumnoDoc!.documentID,
                    "estatus": "Pendiente",
                    "grupo_id": self.db.collection("GrupoTaller").document(self.tallerDisponible!.documentID),
                    "grupo_idStr": self.tallerDisponible!.documentID,
                    "periodo": "SD22",
                    "taller_aprobado": false
                ]) { err in
                    if let err = err {
                        print("Error writing document: \(err)")
                    } else {
                        print("Document successfully written!")
                    }
                }
                let alertInscrip = UIAlertController(title: "Inscripción Aceptada", message: "Se ha inscrito exitosamente al taller", preferredStyle: .alert)
                let okAccion = UIAlertAction(title: "Regresar a Dashboard", style: .cancel){ _ in
                    self.navigationController?.popViewController(animated: true)
                }
                alertInscrip.addAction(okAccion)
                self.present(alertInscrip, animated: true)
                
            }
           
          }))

        confirmAlert.addAction(UIAlertAction(title: "Cancel", style: .cancel, handler: { (action: UIAlertAction!) in
          print("Handle Cancel Logic here")
          }))
        
        self.present(confirmAlert, animated: true)
    }
    
    func addEventToCalendar(title: String, description: String?, startDate: Date, endDate: Date, completion: ((_ success: Bool, _ error: NSError?) -> Void)? = nil) {
        print("func actioned")
        let eventStore = EKEventStore()

        eventStore.requestAccess(to: .event) { (granted, error) in
          
          if (granted) && (error == nil) {
              print("granted \(granted)")
              print("error \(String(describing: error))")
              
              let event:EKEvent = EKEvent(eventStore: eventStore)
              
              event.title = title
              event.startDate = startDate
              event.endDate = endDate
              event.isAllDay = true
              event.notes = description
              event.calendar = eventStore.defaultCalendarForNewEvents
              do {
                  try eventStore.save(event, span: .thisEvent)
              } catch let error as NSError {
                  print("failed to save event with error : \(error)")
              }
              print("Saved Event")
          }
          else{
          
              print("failed to save event with error : \(String(describing: error)) or access not granted")
          }
        }
    }
    
    @IBAction func calendarHandler(_ sender: Any) {
        print("Calendar clicked")
        if fechaini != nil && fechafin != nil {
            print(fechaini!)
            print(fechafin!)
            addEventToCalendar(title: lbName.text!, description: textDesc.text!, startDate: fechaini!, endDate: fechafin!)
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
