//
//  ViewControllerNotificaciones.swift
//  AppMovilPrepanet
//
//  Created by alex on 18/10/22.
//

import UIKit

class ViewControllerNotificaciones: UIViewController, UITableViewDelegate, UITableViewDataSource{
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return notificaciones.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath) as! TableViewCellNotif
        cell.lbTitle.text = notificaciones[indexPath.row].title
        cell.lbMsg.text = notificaciones[indexPath.row].content
        
        return cell
    }
    
    
    @IBOutlet weak var tableViewNotif: UITableView!
    
    var notificaciones = [notificacion]()

    override func viewDidLoad() {
        super.viewDidLoad()
        notificaciones = [
            notificacion(title: "Inicio de Inscripciones", date: .now, content: "Chavos, nada más para recordarles que las inscripciones ya están disponibles.", coordi: "Alejandro Hernández"),
            notificacion(title: "Recuerden confirmar", date: .now, content: "Porfa confirmen bien sus talleres, deberían aparecer en verde", coordi: "Alejandro Hernández")
        ]

        // Do any additional setup after loading the view.
    }
    

    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }

}
