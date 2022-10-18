//
//  TableViewCellTaller.swift
//  AppMovilPrepanet
//
//  Created by alex on 14/10/22.
//

import UIKit

class TableViewCellTaller: UITableViewCell {
    
    @IBOutlet weak var lbNum: UILabel!
    @IBOutlet weak var lbNombre: UILabel!
    @IBOutlet weak var lbStatus: UILabel!

    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }

}
