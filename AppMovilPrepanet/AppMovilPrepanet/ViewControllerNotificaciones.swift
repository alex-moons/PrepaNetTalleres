//
//  ViewControllerNotificaciones.swift
//  AppMovilPrepanet
//
//  Created by alex on 18/10/22.
//

import UIKit
import Firebase

class ViewControllerNotificaciones: UIViewController, UITableViewDelegate, UITableViewDataSource{
    
    @IBOutlet weak var tableViewNotif: UITableView!
    
    let db = Firestore.firestore()
    let user = Auth.auth().currentUser
    
    var notificaciones:[notificacion] = []

    override func viewDidLoad() {
        super.viewDidLoad()
        
        /*notificaciones = [
            notificacion(titulo: "Inicio de Inscripciones", fecha: .now, contenido: "Chavos, nada más para recordarles que las inscripciones ya están disponibles.", autor_id: "Alejandro Hernández", taller_id: 0, campus_id: " ", grupo_id: " "),
            notificacion(titulo: "Recuerden confirmar", fecha: .now, contenido: "Porfa confirmen bien sus talleres, deberían aparecer en verde", autor_id: "Alejandro Hernández", taller_id: 0, campus_id: " ", grupo_id: " ")
        ]*/

        // Do any additional setup after loading the view.
    }
    
    override func viewWillAppear(_ animated: Bool) {
        /*
         - Llamar Alumno (Campus)
         - Llamar Inscripciones (Grupo)
         - Llamar Grupo (Taller)
         - Llamar Taller (numero)
         - Llamar notificaciones
         */
        notificaciones = [notificacion]()
        
        db.collection("Alumno").whereField("correo_institucional", isEqualTo: user!.email!).getDocuments { qsAlumno, error in
            if let error = error {
                print("Inscripcion Error" + error.localizedDescription)
            }
            
            let alumnoDoc = self.db.collection("Alumno").document(qsAlumno!.documents[0].documentID)
            let alumnoData = qsAlumno?.documents[0].data()
            
            self.db.collection("Inscripcion").whereField("alumno_id", isEqualTo: alumnoDoc).whereField("estatus", isEqualTo: "Cursando").getDocuments { qsInscripcion, error in
                if let error = error {
                    print("Inscripcion Error" + error.localizedDescription)
                }
                
                if (!qsInscripcion!.documents.isEmpty){
                    let inscripcionData = qsInscripcion?.documents[0].data()
                    let grupoDoc = inscripcionData?["grupo_id"] as! DocumentReference
                    
                    grupoDoc.getDocument { qsGrupo, error in
                        if let error = error {
                            print("Inscripcion Error" + error.localizedDescription)
                        }
                        let grupoData = qsGrupo!.data()
                        let tallerDoc = grupoData?["taller_id"] as! DocumentReference
                        
                        tallerDoc.getDocument { qsTaller, error in
                            if let error = error {
                                print("Inscripcion Error" + error.localizedDescription)
                            }
                            let tallerData = qsTaller!.data()
                            
                            let tallerId = String(tallerData!["id"] as! Int)
                            let campusKey = tallerId + "-" + (alumnoData?["campus"] as! String)
                            let groupKey = campusKey + "-" + qsGrupo!.documentID
                            
                            //print(groupKey)
                            
                            self.db.collection("Notificacion").whereField("groupKey", isEqualTo: "0").getDocuments{ qsNotificacion, error in
                                if let error = error {
                                    print("Inscripcion Error" + error.localizedDescription)
                                }
                                for notifDoc in qsNotificacion!.documents {
                                    let nData = notifDoc.data()
                                    let notif = notificacion(titulo: nData["titulo"] as! String, fecha: nData["fecha"] as! Timestamp, contenido: nData["contenido"] as! String, autor_id: nData["autor_id"] as! DocumentReference, groupKey: nData["groupKey"] as! String)
                                    self.notificaciones.append(notif)
                                }
                                self.tableViewNotif.reloadData()
                                self.db.collection("Notificacion").whereField("groupKey", isEqualTo: tallerId).getDocuments{ qsNotificacion, error in
                                    if let error = error {
                                        print("Inscripcion Error" + error.localizedDescription)
                                    }
                                    for notifDoc in qsNotificacion!.documents {
                                        let nData = notifDoc.data()
                                        let notif = notificacion(titulo: nData["titulo"] as! String, fecha: nData["fecha"] as! Timestamp, contenido: nData["contenido"] as! String, autor_id: nData["autor_id"] as! DocumentReference, groupKey: nData["groupKey"] as! String)
                                        self.notificaciones.append(notif)
                                    }
                                    self.tableViewNotif.reloadData()
                                    self.db.collection("Notificacion").whereField("groupKey", isEqualTo: campusKey).getDocuments{ qsNotificacion, error in
                                        if let error = error {
                                            print("Inscripcion Error" + error.localizedDescription)
                                        }
                                        for notifDoc in qsNotificacion!.documents {
                                            let nData = notifDoc.data()
                                            let notif = notificacion(titulo: nData["titulo"] as! String, fecha: nData["fecha"] as! Timestamp, contenido: nData["contenido"] as! String, autor_id: nData["autor_id"] as! DocumentReference, groupKey: nData["groupKey"] as! String)
                                            self.notificaciones.append(notif)
                                        }
                                        self.tableViewNotif.reloadData()
                                        self.db.collection("Notificacion").whereField("groupKey", isEqualTo: groupKey).getDocuments{ qsNotificacion, error in
                                            if let error = error {
                                                print("Inscripcion Error" + error.localizedDescription)
                                            }
                                            for notifDoc in qsNotificacion!.documents {
                                                let nData = notifDoc.data()
                                                let notif = notificacion(titulo: nData["titulo"] as! String, fecha: nData["fecha"] as! Timestamp, contenido: nData["contenido"] as! String, autor_id: nData["autor_id"] as! DocumentReference, groupKey: nData["groupKey"] as! String)
                                                self.notificaciones.append(notif)
                                            }
                                            self.tableViewNotif.reloadData()
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                else {
                    self.db.collection("Notificacion").whereField("groupKey", isEqualTo: "0").getDocuments{ qsNotificacion, error in
                        if let error = error {
                            print("Inscripcion Error" + error.localizedDescription)
                        }
                        for notifDoc in qsNotificacion!.documents {
                            let nData = notifDoc.data()
                            let notif = notificacion(titulo: nData["titulo"] as! String, fecha: nData["fecha"] as! Timestamp, contenido: nData["contenido"] as! String, autor_id: nData["autor_id"] as! DocumentReference, groupKey: nData["groupKey"] as! String)
                            self.notificaciones.append(notif)
                        }
                        if (!self.notificaciones.isEmpty){
                            self.tableViewNotif.reloadData()
                        }
                    }
                }
            }
        }
    }
    
    override func viewWillDisappear(_ animated: Bool) {
        notificaciones.removeAll();
    }
    
    // MARK: - Table
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return notificaciones.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath) as! TableViewCellNotif
        if (notificaciones.count != 0){
            cell.lbTitle.text = notificaciones[indexPath.row].titulo
            cell.lbMsg.text = notificaciones[indexPath.row].contenido
            cell.lbAutor.text = notificaciones[indexPath.row].groupKey
        }
        return cell
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        tableView.deselectRow(at: indexPath, animated: true)
    }

    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let target = segue.destination as? ViewControllerInfoNotif
        let index = tableViewNotif.indexPathForSelectedRow!

        target!.notif = notificaciones[index.row]

        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }

}
