//
//  TableViewCellNotif.swift
//  AppMovilPrepanet
//
//  Created by alex on 18/10/22.
//

import UIKit

class TableViewCellNotif: UITableViewCell {
    @IBOutlet weak var lbTitle: UILabel!
    @IBOutlet weak var lbMsg: UILabel!
    
    var title:String!
    var msg:String!
    
    override func awakeFromNib() {
        super.awakeFromNib()
        lbTitle.text = title
        lbMsg.text = msg
        // Initialization code
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }

}
