//
//  ViewControllerTalleres.swift
//  AppMovilPrepanet
//
//  Created by alex on 14/10/22.
//

import UIKit
import Firebase
import FirebaseAuth

class ViewControllerTalleres: UIViewController, UITableViewDelegate, UITableViewDataSource{
        
    @IBOutlet weak var lbTituloTalleres: UILabel!
    @IBOutlet weak var tableViewTalleres: UITableView!
    
    var db = Firestore.firestore()
    let user = Auth.auth().currentUser
    var talleres = [taller](repeating: taller(nombre: "", status: "", desc: ""), count: 6)
    var queryAlumno: Query!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
    }
    
    override func viewWillAppear(_ animated: Bool) {
        let _ = Auth.auth().addStateDidChangeListener { auth, user in }
        
        // Título del menú
        queryAlumno = db.collection("Alumno").whereField("correo_institucional", isEqualTo: user?.email! as Any)
        queryAlumno.getDocuments { querySnapshot, error in
            if let error = error {
                print(error.localizedDescription)
            }
            else{
                let alumnoData = querySnapshot!.documents[0].data()
                let nombreAlumno = alumnoData["nombre"]as! String
                let nombreFullAlumno = nombreAlumno.components(separatedBy: " ")
                
                self.lbTituloTalleres.text = nombreFullAlumno[0]
            }
        }
        cargarTalleres()
    }
    
    func cargarTalleres() {
        //Cargar la info de los 6 talleres desde Firestore
        db.collection("Taller").getDocuments { querySnapshot, error in
            if let error = error {
                print(error.localizedDescription)
            }
            else{
                for tallerDoc in querySnapshot!.documents {
                    let datos = tallerDoc.data()
                    
                    self.talleres[(datos["id"] as! Int) - 1] = taller(nombre: datos["nombre"] as! String, status: "Sin Cursar", desc: datos["descripcion"] as! String)
                }
                //self.tableViewTalleres.reloadData()
            }
        }
        
        //Cargar el estatus del alumno en base a su grupo
        queryAlumno.getDocuments() { querySnapshot, error in
            if let error = error {
                print(error.localizedDescription)
            }
            else{
                //Se cargan todas las inscripciones del alumno
                let alumnoDoc = self.db.collection("Alumno").document(querySnapshot!.documents[0].documentID)
                let inscripcionesAlumno = self.db.collection("Inscripcion").whereField("alumno_id", isEqualTo: alumnoDoc)
                
                inscripcionesAlumno.getDocuments { querySnapshot1, error in
                    if let error = error {
                        print("Inscripcion Error" + error.localizedDescription)
                    }
                    else{
                        if (querySnapshot1!.documents.count == 0){
                            self.tableViewTalleres.reloadData()
                        }
                        //Se consigue el grupo y taller de cada inscripcion
                        for inscripcion in querySnapshot1!.documents {
                            let datos = inscripcion.data()
                            let grupoDoc = datos["grupo_id"] as! DocumentReference
                            
                            grupoDoc.getDocument { (document, error) in
                                if let document = document, document.exists {
                                    let grupoDatos = document.data()
                                    let tallerDoc = grupoDatos?["taller_id"] as! DocumentReference
                                    
                                    tallerDoc.getDocument { (document1, error) in
                                        if let document1 = document1, document1.exists {
                                            let tallerDatos = document1.data()
                                            let tallerID = tallerDatos?["id"] as! Int
                                            self.talleres[tallerID-1].status = datos["estatus"] as! String
                                            self.tableViewTalleres.reloadData()
                                        } else {
                                            print("Document does not exist")
                                        }
                                    }
                                } else {
                                    print("Document does not exist")
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return talleres.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath) as! tallerCeldaTableViewCell
        cell.bgImage.image = UIImage(named: "taller\(String(indexPath.row+1))")
        cell.lbNombre.text = talleres[indexPath.row].nombre
        cell.lbStatus.text = talleres[indexPath.row].status
        
        switch talleres[indexPath.row].status {
        case "Aprobado":
            cell.statusView.backgroundColor = UIColor(red: 223/255, green: 255/255, blue: 202/255, alpha: 1)
            cell.lbStatus.textColor =
            UIColor(red: 47/255, green: 55/255, blue: 43/255, alpha: 1)
        case "Sin Asistencia":
            cell.statusView.backgroundColor = UIColor(red: 255/255, green: 229/255, blue: 148/255, alpha: 1)
            cell.lbStatus.textColor =
            UIColor(red: 77/255, green: 69/255, blue: 45/255, alpha: 1)
        case "No enrolado por no aprobar etapa 2":
            cell.statusView.backgroundColor = UIColor(red: 255/255, green: 229/255, blue: 148/255, alpha: 1)
            cell.lbStatus.textColor =
            UIColor(red: 77/255, green: 69/255, blue: 45/255, alpha: 1)
        default:
            cell.statusView.backgroundColor = UIColor(red: 255/255, green: 255/255, blue: 255/255, alpha: 1)
            cell.lbStatus.textColor =
            UIColor(red: 31/255, green: 31/255, blue: 31/255, alpha: 1)
        }
        return cell
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        tableView.deselectRow(at: indexPath, animated: true)
    }
    
    
    
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let target = segue.destination as? ViewControllerInfoTaller
        let index = tableViewTalleres.indexPathForSelectedRow!
        target?.tallerInfo = talleres[index.row]
        target?.img = UIImage(named: "taller\(String(index.row+1))")
        target?.talleres = talleres
        target?.tallerIndex = index.row
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }

}
