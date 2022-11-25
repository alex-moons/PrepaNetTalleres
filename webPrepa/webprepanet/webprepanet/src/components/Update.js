import React from "react";
import { Dropdown, Button } from 'react-bootstrap';
import firebase from "firebase/compat/app";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// PARA ACTUALIZAR VALORES EN UN HTML PON <UPADTE DOC ={ DOC.ID}/>
export const UpdateEstatus = ({ doc }) => {
    const [value, setValue] = React.useState();
    const [active, setActive] = React.useState(false);

    const db = firebase.firestore();
    const getEstado = (e) => {
        setValue(e.target.value);
        doc.value.estatus = (e.target.value);
        setActive(true);
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
                <select id="estados" value={doc.value.estatus}
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
                <button  onClick={updateValue}>Actualizar</button>
            </td>
        </>
    );
};

export const UpdateGrupo = ({ doc }) => {
    const [startDate, setStartDate] = React.useState(doc.value.fecha_inicio.toDate());
    const [endDate, setEndDate] = React.useState(doc.value.fecha_fin.toDate());
    const [startIns, setStartIns] = React.useState(doc.value.inscripcion_inicio.toDate());
    const [endIns, setEndIns] = React.useState(doc.value.inscripcion_fin.toDate());

    
    const [active, setActive] = React.useState(false);

    
        
    

    const db = firebase.firestore();
    const getEstado = (e) => {
        //setValue(e.target.value);
        doc.value.estatus = (e.target.value);
        setActive(true);
    };



    const updateValue = () => {
        console.log("Entre al update")
        db.collection("GrupoTaller")
            .doc(doc.id)
            .update({
                fecha_inicio: startDate,
                fecha_fin: endDate,
                inscripcion_inicio: startIns,
                inscripcion_fin: endIns
            })
            .then(function () {
                console.log("Document successfully updated!");
            })
            .catch(function (error) {
                console.error("Error updating document: ", error);
            });
       
    };

    return (

        <>

            
                
           <p>Inicio Curso</p>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            <p>Fin Curso</p>
            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
            <p>Inicio Inscripcion</p>
            <DatePicker selected={startIns} onChange={(date) => setStartIns(date)} />
            <p>Fin Inscripcion</p>
            <DatePicker selected={endIns} onChange={(date) => setEndIns(date)} />
            <button onClick={updateValue}>Actualizar</button>
            
        </>
    );
};