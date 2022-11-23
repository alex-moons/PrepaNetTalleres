import React from "react";
import firebase from "firebase/compat/app";

export const useGetDataAlumno = () => {

    // documents es nuestro objeto, setDoc es un setter
    const [documents, setDocuments] = React.useState([]);

    // firebase principal
    const db = firebase.firestore();
    
    React.useEffect(() => {
        db.collection("Alumno") // se recojen los docs de alumno
            .get()
            .then((querySnapshot) => {
                let arr = [];
                querySnapshot.docs.map((doc) =>
                    arr.push({ id: doc.id, value: doc.data() })
                );
                setDocuments(arr);
            });
    }, [db]);
    return [documents];
};

export const useGetDataDoc = ( doc ) => {

// documents es nuestro objeto, setDoc es un setter
    const [document, setDocument] = React.useState();

    // firebase principal
    const db = firebase.firestore();
    let arr = [];
    React.useEffect(() => {
        db.collection("Alumno").doc(doc.value.alumno_id.id)
            .get()
            .then((querySnapshot) => {
                console.log(querySnapshot.data())
                querySnapshot.docs.map((doc) =>
                    arr.push({ id: doc.id, value: doc.data() })
                );
                setDocument(arr);
            });
    }, [db]);
    return arr;
};

export const useGetDataInscripcion = () => {

    // documents es nuestro objeto, setDoc es un setter
    const [document, setDocument] = React.useState([]);

    // firebase principal
    const db = firebase.firestore();

    React.useEffect(() => {
        db.collection("Inscripcion")
            .get()
            .then((querySnapshot) => {
                let arr = [];
                querySnapshot.docs.map((doc) =>
                    arr.push({ id: doc.id, value: doc.data() })
                );
                setDocument(arr);
            });
    }, [db]);
    return [document];
};

export const useGetDataTaller = () => {

    // documents es nuestro objeto, setDoc es un setter
    const [document, setDocument] = React.useState([]);

    // firebase principal
    const db = firebase.firestore();

    React.useEffect(() => {
        db.collection("Taller")
            .get()
            .then((querySnapshot) => {
                let arr = [];
                querySnapshot.docs.map((doc) =>
                    arr.push({ id: doc.id, value: doc.data() })
                );
                setDocument(arr);
            });
    }, [db]);
    return [document];
};

export const useGetDataGrupoTaller = () => {

    // documents es nuestro objeto, setDoc es un setter
    const [document, setDocument] = React.useState([]);

    // firebase principal
    const db = firebase.firestore();

    React.useEffect(() => {
        db.collection("GrupoTaller")
            .get()
            .then((querySnapshot) => {
                let arr = [];
                querySnapshot.docs.map((doc) =>
                    arr.push({ id: doc.id, value: doc.data() })
                );
                setDocument(arr);
            });
    }, [db]);
    return [document];
};

export const useGetDataAdministrador = () => {

    // documents es nuestro objeto, setDoc es un setter
    const [documents, setDocuments] = React.useState([]);

    // firebase principal
    const db = firebase.firestore();

    React.useEffect(() => {
        db.collection("Administrador") // se recojen los docs de alumno
            .get()
            .then((querySnapshot) => {
                let arr = [];
                querySnapshot.docs.map((doc) =>
                    arr.push({ id: doc.id, value: doc.data() })
                );
                setDocuments(arr);
            });
    }, [db]);
    return [documents];
};

export const useGetDataCoordinador = () => {

    // documents es nuestro objeto, setDoc es un setter
    const [documents, setDocuments] = React.useState([]);

    // firebase principal
    const db = firebase.firestore();

    React.useEffect(() => {
        db.collection("Coordinador") // se recojen los docs de alumno
            .get()
            .then((querySnapshot) => {
                let arr = [];
                querySnapshot.docs.map((doc) =>
                    arr.push({ id: doc.id, value: doc.data() })
                );
                setDocuments(arr);
            });
    }, [db]);
    return [documents];
};