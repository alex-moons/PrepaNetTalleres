//
//  TableViewCellNotif.swift
//  AppMovilPrepanet
//
//  Created by alex on 18/10/22.
//
/*
 Celdas de notificaciones
 */

import UIKit

class TableViewCellNotif: UITableViewCell {
    @IBOutlet weak var lbTitle: UILabel!
    @IBOutlet weak var lbMsg: UILabel!
    @IBOutlet weak var lbAutor: UILabel!
    
    var title:String!
    var msg:String!
    var autor:String!
    
    override func awakeFromNib() {
        super.awakeFromNib()
        lbTitle.text = title
        lbMsg.text = msg
        lbAutor.text = autor
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)
    }
}
