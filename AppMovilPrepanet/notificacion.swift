//
//  notificacion.swift
//  AppMovilPrepanet
//
//  Created by alex on 18/10/22.
//

import UIKit
import Firebase

class notificacion: NSObject {
    var titulo:String
    var fecha:Timestamp
    var contenido:String
    var autor_id:DocumentReference
    var groupKey:String
    
    init(titulo: String, fecha: Timestamp, contenido: String, autor_id:DocumentReference, groupKey:String) {
        self.titulo = titulo
        self.fecha = fecha
        self.contenido = contenido
        self.autor_id = autor_id
        self.groupKey = groupKey
    }
}
