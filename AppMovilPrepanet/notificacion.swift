//
//  notificacion.swift
//  AppMovilPrepanet
//
//  Created by alex on 18/10/22.
//

import UIKit

class notificacion: NSObject {
    var title:String
    var date:Date
    var content:String
    var coordi:String
    
    init(title: String, date: Date, content: String, coordi:String) {
        self.title = title
        self.date = date
        self.content = content
        self.coordi = coordi
    }
}
