//
//  ViewController.swift
//  AppMovilPrepanet
//
//  Created by alex on 11/10/22.
//
/*
 Página de login de la aplicación. Aquí se hace login a Firebase con
 Firebase Auth.
 */

import UIKit
import Firebase
import FirebaseAuth

class ViewController: UIViewController {

    @IBOutlet weak var imgLogo: UIImageView!
    @IBOutlet weak var lbInicioSesion: UILabel!
    @IBOutlet weak var tfUsername: UITextField!
    @IBOutlet weak var tfPassword: UITextField!
    @IBOutlet weak var btnEntrar: UIButton!
    @IBOutlet weak var btnReset: UIButton!
    @IBOutlet weak var checkbox: UIButton!
    
    let db = Firestore.firestore()
    let defaults = UserDefaults.standard
    var staySigned = false; //Se utiliza para recordar al usuario
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let tap = UITapGestureRecognizer(target: self, action: #selector(UIInputViewController.dismissKeyboard))
        view.addGestureRecognizer(tap)
    }
    
    override func viewWillAppear(_ animated: Bool) {
        //Se revisa si hay un usuario guardado para ingresar en Firebase Auth
        let _ = Auth.auth().addStateDidChangeListener { auth, user in }
        
        if let signedUser = defaults.string(forKey: "signedUser"){
            if signedUser == ""{
                print("No hay usuario guardado.")
                do {
                    try Auth.auth().signOut()
                } catch {
                  print(error)
                }
            } else {
                print("Existe usuario guardado, ir a menu principal.")
                DispatchQueue.main.async {
                    [unowned self] in self.performSegue(withIdentifier: "login", sender: self)
                }
            }
        } else {
            print("No hay usuario guardado.")
            do {
                try Auth.auth().signOut()
            } catch {
              print(error)
            }
        }
    }
    
    // MARK: - Funcionalidades de interfaz
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
    
    @IBAction func recuperacion(_ sender: Any) {
        guard let url = URL(string: "https://itesm.custhelp.com/app/chat/login_faqs") else { return }
        UIApplication.shared.open(url)
    }
    
    @IBAction func recuerdame(_ sender: Any) {
        if staySigned {
            self.checkbox.setImage(UIImage(named: "unchecked"), for: .normal)
            staySigned = false
        }else{
            self.checkbox.setImage(UIImage(named: "checkbox"), for: .normal)
            staySigned = true
        }
    }
    
    // MARK: - Funcionalidad Login
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
                    print("Error en auth:")
                    print(err.localizedDescription)
                }
                
                if Auth.auth().currentUser != nil {
                    self!.db.collection("Alumno").whereField("correo_institucional", isEqualTo: username).getDocuments{ [self] querySnapshot, error in
                            if let error = error {
                                print("Inscripcion Error" + error.localizedDescription)
                            }
                        if querySnapshot?.documents.count != 0 {
                            print("Valid user")
                            if (self!.staySigned){
                                self!.defaults.set(username, forKey: "signedUser")
                            }
                            DispatchQueue.main.async {
                                [unowned self] in self?.performSegue(withIdentifier: "login", sender: self)
                            }
                        } else {
                            self!.errorMessage(title: "No es alumno", message: "No es alumno")
                            do {
                                try Auth.auth().signOut()
                            } catch let signOutError as NSError {
                              print("Error signing out: %@", signOutError)
                            }
                        }
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
}
