import React from "react";
import firebase from "firebase/compat/app";

// un export para cada delete que se quiere hacer/ Esto funciona para borrar docs
// doc es el nombre del documento que queremos borrar
export const DeleteAlumno = ({ doc }) => {

    // para conectarse al firebase
    const db = firebase.firestore();

    // metodo para borrar el documento
    const deleteValue = () => {
        db.collection("values")
            .doc(doc)
            .delete()
            .then(function () {
                console.log("Document successfully deleted!");
            })
            .catch(function (error) {
                console.error("Error removing document: ", error);
            });
    };

    // un boton para borrar
    return <button onClick={deleteValue}>Delete</button>;
};
