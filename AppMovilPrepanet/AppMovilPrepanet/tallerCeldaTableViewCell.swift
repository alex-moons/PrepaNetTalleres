//
//  tallerCeldaTableViewCell.swift
//  AppMovilPrepanet
//
//  Created by Alumno on 02/11/22.
//

import UIKit

class tallerCeldaTableViewCell: UITableViewCell {

    @IBOutlet weak var lbNombre: UILabel!
    @IBOutlet weak var viewCelda: UIView!
    @IBOutlet weak var bgImage: UIImageView!
    @IBOutlet weak var statusView: UIView!
    @IBOutlet weak var lbStatus: UILabel!
    @IBOutlet weak var viewNombre: UIView!
    
    override func awakeFromNib() {
        super.awakeFromNib()
        
        viewCelda.layer.cornerRadius = 6
        bgImage.layer.cornerRadius = 7
        statusView.layer.cornerRadius = 4
        viewNombre.clipsToBounds = true
        viewNombre.layer.cornerRadius = 6
        viewNombre.layer.maskedCorners = [.layerMinXMaxYCorner, .layerMaxXMaxYCorner]

        // Initialization code
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }

}
