//
//  taller.swift
//  AppMovilPrepanet
//
//  Created by alex on 10/10/22.
//

import UIKit

class taller: NSObject {
    var nombre:String
    var status: String
    var desc:String
    
    init(nombre: String, status: String, desc:String) {
        self.nombre = nombre
        self.status = status
        self.desc = desc
    }

}
