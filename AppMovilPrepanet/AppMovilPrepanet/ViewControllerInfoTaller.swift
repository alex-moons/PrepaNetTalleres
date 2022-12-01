//
//  ViewControllerInfoTaller.swift
//  AppMovilPrepanet
//
//  Created by alex on 14/10/22.
//
/*
    Se despliega la información del taller y si se encuentra disponible para el alumno.
    Se hacen múltiples llamadas a Firestore
 */

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
    @IBOutlet weak var lbTFechasCurso: UILabel!
    @IBOutlet weak var lbTFechasInscripcion: UILabel!
    
    var db = Firestore.firestore()
    let user = Auth.auth().currentUser
    
    var talleres:[taller]!
    var tallerIndex:Int! //Indice del taller relativo a ViewControllerTalleres
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
    }
    
    override func viewWillAppear(_ animated: Bool) {
        //Se revisa la disponibilidad del taller y el estatus del alumno
        let formatoFecha = DateFormatter()
        formatoFecha.dateFormat = "dd/MM/yyyy" //Formato para desplegar la fecha
        
        switch tallerInfo.status { //Switch case para poner las fechas
        case "Aprobado":
            print("Taller aprobado")
            let cursoInit = (talleres[tallerIndex].grupoDatos!["fecha_inicio"] as! Timestamp).dateValue()
            let cursoFin = (talleres[tallerIndex].grupoDatos!["fecha_fin"] as! Timestamp).dateValue()
            fechaini = cursoInit
            fechafin = cursoFin
            lbFechasCurso.text = formatoFecha.string(from: cursoInit) + " - " + formatoFecha.string(from: cursoFin)
            lbTFechasInscripcion.text = ""
            lbFechasInscripcion.text = ""
            
            break
            
        case "Cursando":
            print("Taller cursando")
            let cursoInit = (talleres[tallerIndex].grupoDatos!["fecha_inicio"] as! Timestamp).dateValue()
            let cursoFin = (talleres[tallerIndex].grupoDatos!["fecha_fin"] as! Timestamp).dateValue()
            fechaini = cursoInit
            fechafin = cursoFin
            lbFechasCurso.text = formatoFecha.string(from: cursoInit) + " - " + formatoFecha.string(from: cursoFin)
            lbTFechasInscripcion.text = ""
            lbFechasInscripcion.text = ""
            
            break
            
        case "Pendiente":
            print("Taller pendiente")
            let cursoInit = (talleres[tallerIndex].grupoDatos!["fecha_inicio"] as! Timestamp).dateValue()
            let cursoFin = (talleres[tallerIndex].grupoDatos!["fecha_fin"] as! Timestamp).dateValue()
            fechaini = cursoInit
            fechafin = cursoFin
            let inscripInit = (talleres[tallerIndex].grupoDatos!["inscripcion_inicio"] as! Timestamp).dateValue()
            let inscripFin = (talleres[tallerIndex].grupoDatos!["inscripcion_fin"] as! Timestamp).dateValue()
            lbFechasCurso.text = formatoFecha.string(from: cursoInit) + " - " + formatoFecha.string(from: cursoFin)
            lbFechasInscripcion.text = formatoFecha.string(from: inscripInit) + " - " + formatoFecha.string(from: inscripFin)
            
            break
            
        case "Sin Cursar":
            print("Taller sin cursar")
            
            if let cursoInit = talleres[tallerIndex].grupoDatos,
               let cursoFin = talleres[tallerIndex].grupoDatos {
                let dateInit = (cursoInit["fecha_inicio"] as! Timestamp).dateValue()
                let dateFin = (cursoFin["fecha_fin"] as! Timestamp).dateValue()
                lbFechasCurso.text = formatoFecha.string(from: dateInit) + " - " + formatoFecha.string(from: dateFin)
            }
            else {
                lbFechasCurso.text = ""
                lbTFechasCurso.text = ""
            }
            
            if let inscripInit = talleres[tallerIndex].grupoDatos,
               let inscripFin = talleres[tallerIndex].grupoDatos {
                let dateInit = (inscripInit["inscripcion_inicio"] as! Timestamp).dateValue()
                let dateFin = (inscripFin["inscripcion_fin"] as! Timestamp).dateValue()
                lbFechasInscripcion.text = formatoFecha.string(from: dateInit) + " - " + formatoFecha.string(from: dateFin)
            }
            else {
                lbTFechasInscripcion.text = ""
                lbFechasInscripcion.text = ""
            }
            
            break
            
        default:
            lbTFechasCurso.text = ""
            lbFechasCurso.text = ""
            lbTFechasInscripcion.text = ""
            lbFechasInscripcion.text = ""
            
            break
        }
        
        //Proceso para habilitar o deshabilitar inscripción
        btnInscribir.isEnabled = false
        if lbFechasCurso.text == ""{
            btnCalendario.isEnabled = false
        }else{
            btnCalendario.isEnabled = true
        }
        
        var habilitarBotones = true
        var mensajeError = " "
        
        //Revisar que todos los talleres anteriores hayan sido cursados
        for i in 0..<tallerIndex {
            if talleres[i].status != "Aprobado" {
                habilitarBotones = false
                mensajeError = "No se han aprobado todos los talleres anteriores."
            }
        }
        
        //Revisar que el alumno no este cursando actualmente el taller
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
                    if inscripcionInit <= currentTime && inscripcionFin >= currentTime {
                        self.tallerDisponible = tallerDoc
                        habilitarBotones = true
                        mensajeError = ""
                    }
                }
                if let _ = self.tallerDisponible {
                    print("Hay taller disponible")
                    let cursoInit = (self.tallerDisponible.data()["fecha_inicio"] as! Timestamp).dateValue()
                    let cursoFin = (self.tallerDisponible.data()["fecha_fin"] as! Timestamp).dateValue()
                    self.fechaini = cursoInit
                    self.fechafin = cursoFin
                    let inscripInit = (self.tallerDisponible.data()["inscripcion_inicio"] as! Timestamp).dateValue()
                    let inscripFin = (self.tallerDisponible.data()["inscripcion_fin"] as! Timestamp).dateValue()
                    self.lbFechasCurso.text = formatoFecha.string(from: cursoInit) + " - " + formatoFecha.string(from: cursoFin)
                    self.lbFechasInscripcion.text = formatoFecha.string(from: inscripInit) + " - " + formatoFecha.string(from: inscripFin)
                    self.lbTFechasCurso.text = "Fechas del curso:"
                    self.lbTFechasInscripcion.text = "Fechas de inscripción:"
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
        //Se inscribe el alumno a un grupo disponible
        let confirmAlert = UIAlertController(title: "Confirmar inscripción", message: "Deseas inscribirte a este taller? Una vez mandada la solicitud, un coordinador aceptará tu inscripción.", preferredStyle: .alert)
        
        confirmAlert.addAction(UIAlertAction(title: "Confirmar", style: .default, handler: { (action: UIAlertAction!) in
            
            self.db.collection("Alumno").whereField("correo_institucional", isEqualTo: self.user!.email!).getDocuments {
                qsAlumno, error in
                if let error = error {
                    print("Inscripcion Error" + error.localizedDescription)
                }
                
                let alumnoDoc = qsAlumno?.documents[0]
                
                let formatoFecha = DateFormatter()
                formatoFecha.dateFormat = "MMMMM"
                let formatoYear = DateFormatter()
                formatoYear.dateFormat = "YY"
                
                var pIni = formatoFecha.string(from: self.fechaini!)
                let pFin = formatoFecha.string(from: self.fechafin!)
                let pYear = formatoYear.string(from: self.fechafin!)
                
                if pIni == "J"{
                    pIni = "E"
                }
                
                self.db.collection("Inscripcion").document().setData([
                    "alumno_id": self.db.collection("Alumno").document(alumnoDoc!.documentID),
                    "alumno_idStr": alumnoDoc!.documentID,
                    "estatus": "Pendiente",
                    "grupo_id": self.db.collection("GrupoTaller").document(self.tallerDisponible!.documentID),
                    "grupo_idStr": self.tallerDisponible!.documentID,
                    "periodo": pIni + pFin + pYear,
                    "campus": alumnoDoc?.data()["campus"] as! String,
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
        //Agregar las fechas del curso al calendario del telefono
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
}
