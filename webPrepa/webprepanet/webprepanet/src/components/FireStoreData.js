import React from "react";
import { useGetDataAlumno } from "../hooks/useGetData";


export const FireStoreDataAlumno = () => {
    const [documents] = useGetDataAlumno();


    return (
        <div>
            <span>Values</span>
            {documents.map((documents) => (
                <div key={documents.id}>
                    <div>
                        Document: {documents.id} Value: {documents.value.nombre}
                    </div>
                </div>
            ))}
        </div>
    );
};