import React from "react";
import firebase from "firebase/compat/app"; // Biblioteca para usar el firebase globalmente
import 'firebase/compat/firestore'; // Biblioteca para usar el FireStore Database

// Tiene que ser en mayusculas, un export para cada query que se quiere hacer
export const AddValue = () => {
    const [value, setValue] = React.useState(""); // Aqui se ponen los valores que queremos junto a su set
    const db = firebase.firestore(); // Esto es la variable general para accesar a FireBase
    // Para cada valor, definir un get
    const getValue = (event) => {
        setValue(event.target.value); // se pone el valor del field
    };

    // Metodo para agregar los valores del useState a FireBase
    const addValue = () => {
        db.collection("Alumno") // Se define en que coleccion lo queremos meter
            .doc(value) // Nombre del doc
            .set({
                // Aqui definimos los valores que queremos poner el el doc
                value: value,
            })
            // Si todo sale bien se corre este metodo
            .then(function () {
                console.log("Value successfully written!");
            })
            // Si sale mal es este otro
            .catch(function (error) {
                console.error("Error writing Value: ", error);
            });
    };

    return (
        <div>
            {/*onBlur, el metodo dentro se corre al dejar el campo*/}
            <input onBlur={getValue} type='text' /> 
            <button type='button' onClick={addValue}> {/* Al presionar el boton se corre para mandar a Firebase*/}
                Add
            </button>
        </div>
    );
};

