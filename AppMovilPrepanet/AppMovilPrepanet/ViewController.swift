//
//  ViewController.swift
//  AppMovilPrepanet
//
//  Created by alex on 11/10/22.
//

import UIKit
import FirebaseAuth

class ViewController: UIViewController {

    @IBOutlet weak var imgLogo: UIImageView!
    @IBOutlet weak var lbInicioSesion: UILabel!
    @IBOutlet weak var tfUsername: UITextField!
    @IBOutlet weak var tfPassword: UITextField!
    @IBOutlet weak var btnEntrar: UIButton!
    @IBOutlet weak var btnReset: UIButton!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let tap = UITapGestureRecognizer(target: self, action: #selector(UIInputViewController.dismissKeyboard))
        view.addGestureRecognizer(tap)
    }
    
    override func viewWillAppear(_ animated: Bool) {
        let _ = Auth.auth().addStateDidChangeListener { auth, user in }
        
        //EDITAR DESPUES: se hace sign out cada vez que hace login
        do {
            try Auth.auth().signOut()
        } catch let signOutError as NSError {
          print("Error signing out: %@", signOutError)
        }
    }
    
    override func viewDidDisappear(_ animated: Bool) {
        tfUsername.text = ""
        tfPassword.text = ""
    }
    
    @objc func dismissKeyboard() {
        view.endEditing(true)
    }
    
    @IBAction func nextTf(_ sender: Any) {
        self.tfPassword.becomeFirstResponder()
    }
    
    func clearTf(){
        tfUsername.text = ""
        tfPassword.text = ""
    }
    
    @IBAction func enterTf(_ sender: Any) {
        dismissKeyboard()
        Entrar(btnEntrar!)
    }
    
    func errorMessage(title: String, message: String) {
        let tfVacio = UIAlertController(title: title, message: message, preferredStyle: .alert)
        let alertOk = UIAlertAction(title: "Ok", style: .cancel)
        tfVacio.addAction(alertOk)
        self.present(tfVacio, animated: true)
    }
    
    @IBAction func Entrar(_ sender: Any) {
        /*Validar que la cuenta es un alumno dado de alta en Firebase. Se asume que
         todas las cuentas en Firebase Auth estan en la collection de Alumno */
        if tfUsername.hasText, tfPassword.hasText, let username = tfUsername.text, let password = tfPassword.text {
            Auth.auth().signIn(withEmail: username, password: password) {
                [weak self] authResult, error in
                guard let _ = self else { return }
                if let err = error {
                    print("Error en auth")
                    print(err.localizedDescription)
                }
                if Auth.auth().currentUser != nil {
                    //print(Auth.auth().currentUser?.uid as Any)
                    
                    DispatchQueue.main.async {
                        [unowned self] in self?.performSegue(withIdentifier: "login", sender: self)
                    }
                }
                else {
                    print("Usuario Invalido")
                    self?.errorMessage(title: "Cuenta no válida", message: "El usuario o la contraseña es incorrecta. Por favor intente de nuevo")
                }
            }
        }
        else{
            print("Campos vacios")
            errorMessage(title: "Campo de texto Vacío", message: "Por favor llena todos los campos");
        }
    }
    
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        //let target = segue.destination as! UINavigationController
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }

}
