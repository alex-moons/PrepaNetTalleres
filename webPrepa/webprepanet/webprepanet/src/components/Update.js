import React from "react";
import { Dropdown, Button } from 'react-bootstrap';
import firebase from "firebase/compat/app";
// PARA ACTUALIZAR VALORES EN UN HTML PON <UPADTE DOC ={ DOC.ID}/>
export const UpdateEstatus = ({ doc }) => {
    const [value, setValue] = React.useState("");
    const [estado, setEstado] = React.useState("");



    const db = firebase.firestore();
    const getValue = (event) => {
        setValue(event.target.value);
        setEstado(event.target.value);
    };
    const getEstado = (e) => {
        setValue(e.target.value);
    };

    const updateTaller_aprobado = () => {
        let pasa = false;
        if (value == "Aprobado") {
            pasa = true;
        }
        console.log("Entre al update")
        db.collection("Inscripcion")
            .doc(doc.id)
            .update({
                taller_aprobado: pasa,
            })
            .then(function () {
                console.log("Document successfully updated!");
            })
            .catch(function (error) {
                console.error("Error updating document: ", error);
            });

    };

    const updateValue = () => {
        console.log("Entre al update")
        db.collection("Inscripcion")
            .doc(doc.id)
            .update({
                estatus: value,
            })
            .then(function () {
                console.log("Document successfully updated!");
            })
            .catch(function (error) {
                console.error("Error updating document: ", error);
            });
        updateTaller_aprobado();
    };

    return (
        <>
            <td>
            <select id="estados" defaultValue={doc.value.estatus}
                onChange={

                    getEstado
                }
                >
                <option value="Aprobado">Aprobado</option>
                <option value="Reprobado">Reprobado</option>
                <option value="Cursando">Cursando</option>
                <option value="Pendiente">Pendiente</option>
                </select>
            </td>
            <td>
                <button onClick={updateValue}>Actualizar</button>
            </td>
        </>
    );
};

