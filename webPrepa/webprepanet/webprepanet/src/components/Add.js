import React from "react";
import firebase from "firebase/compat/app"; // Biblioteca para usar el firebase globalmente
import 'firebase/compat/firestore'; // Biblioteca para usar el FireStore Database

// Tiene que ser en mayusculas, un export para cada query que se quiere hacer
export const AddValueInscripcion = () => {
    const [alumnoId, setAlumnoId] = React.useState(""); // Aqui se ponen los valores que queremos junto a su set
    const [estatusVal, setEstatusVal] = React.useState("");
    const [value, setValue] = React.useState("");
    const [grupoId, setGrupoId] = React.useState("");
    const [periodoVal, setPeriodoVal] = React.useState("");
    const [tallerAprobado, setTallerAprobado] = React.useState(false);
    const db = firebase.firestore(); // Esto es la variable general para accesar a FireBase
    // Para cada valor, definir un get
    const getAlumnoId = (event) => {
        setAlumnoId(event.target.value); // se pone el valor del field
    };
    const getEstatusVal = (event) => {
        setEstatusVal(event.target.value); // se pone el valor del field
    };
    const getGrupoId = (event) => {
        setGrupoId(event.target.value); // se pone el valor del field
    };
    const getPeriodoVal = (event) => {
        setPeriodoVal(event.target.value); // se pone el valor del field
    };
    const getValue = (event) => {
        setValue(event.target.value); // se pone el valor del field
    };

    // Metodo para agregar los valores del useState a FireBase
    const addValue = () => {
        db.collection("Inscripcion") // Se define en que coleccion lo queremos meter
            .doc(value) // Nombre del doc
            .set({
                // Aqui definimos los valores que queremos poner el el doc
                estatus: estatusVal,
                alumno_idStr: alumnoId,
                grupo_idStr: grupoId,
                periodo: periodoVal,
                tallerAprobado :false
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
            <p style={{ color: "white" }}> value</p>
            <input onBlur={getValue} type='text' /> 
            <p style={{ color: "white" }}> alumnoId</p>
            <input onBlur={getAlumnoId} type='text' /> 
            <p style={{ color: "white" }}> estatus</p>
            <input onBlur={getEstatusVal} type='text' /> 
            <p style={{ color: "white" }}> grupoId</p>
            <input onBlur={getGrupoId} type='text' /> 
            <p style={{ color: "white" }}> Taller</p>
            <input onBlur={getPeriodoVal} type='text' /> 
            <button type='button' onClick={addValue}> {/* Al presionar el boton se corre para mandar a Firebase*/}
                Add
            </button>
        </div>
    );
};

