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
    var fecha:Date
    var contenido:String
    var autor_id:DocumentReference
    var taller_id:String
    var campus_id:String
    var grupo_id:String
    
    init(titulo: String, fecha: Date, contenido: String, autor_id:DocumentReference, taller_id:String, campus_id:String, grupo_id:String) {
        self.titulo = titulo
        self.fecha = fecha
        self.contenido = contenido
        self.autor_id = autor_id
        self.taller_id = taller_id
        self.campus_id = campus_id
        self.grupo_id = grupo_id
    }
}
