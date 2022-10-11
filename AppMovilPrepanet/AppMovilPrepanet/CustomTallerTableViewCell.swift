//
//  CustomTallerTableViewCell.swift
//  AppMovilPrepanet
//
//  Created by alex on 10/10/22.
//

import UIKit

class CustomTallerTableViewCell: UITableViewCell {
    
    @IBOutlet weak var lbEnum: UILabel!
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
