import React from "react";
import firebase from "firebase/compat/app";;

export const useGetDataAlumno = () => {
    /*
     * const cityRef = db.collection('cities').doc('SF');
const doc = await cityRef.get();
if (!doc.exists) {
  console.log('No such document!');
} else {
  console.log('Document data:', doc.data());
}
*/
    const [documents, setDocuments] = React.useState([]);
    const db = firebase.firestore();
    React.useEffect(() => {
        db.collection("Alumno")
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