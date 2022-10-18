//
//  ViewControllerTalleres.swift
//  AppMovilPrepanet
//
//  Created by alex on 14/10/22.
//

import UIKit

class ViewControllerTalleres: UIViewController, UITableViewDelegate, UITableViewDataSource{
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return talleres.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath) as! TableViewCellTaller
        cell.lbNum.text = String(indexPath.row+1)
        cell.lbNombre.text = talleres[indexPath.row].nombre
        cell.lbStatus.text = talleres[indexPath.row].status
        
        return cell
    }
    
    @IBOutlet weak var tableViewTalleres: UITableView!
    
    var talleres = [taller]()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        talleres = [
            taller(nombre: "Liderazgo Positivo y Transformación Personal", status: "Aprobado"),
            taller(nombre: "Mis Habilidades y Motivaciones", status: "Aprobado"),
            taller(nombre: "Mis Emociones", status: "Sin Asistencia"),
            taller(nombre: "Mis Relaciones", status: "No enrolado por no aprobar etapa 2"),
            taller(nombre: "Mis Àreas de Oportunidad", status: ""),
            taller(nombre: "Mis Metas", status: "")
        ]
        // Do any additional setup after loading the view.
    }
    


    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let target = segue.destination as? ViewControllerInfoTaller
        let index = tableViewTalleres.indexPathForSelectedRow!
        target?.tallerInfo = talleres[index.row]
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }

}
