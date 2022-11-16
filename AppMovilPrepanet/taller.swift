//
//  taller.swift
//  AppMovilPrepanet
//
//  Created by alex on 10/10/22.
//

import UIKit

class taller: NSObject {
    var docID:String
    var nombre:String
    var status: String
    var desc:String
    var grupoDatos:[String : Any]?
    
    init(docID: String, nombre: String, status: String, desc:String) {
        self.docID = docID
        self.nombre = nombre
        self.status = status
        self.desc = desc
        grupoDatos = nil
    }

}
