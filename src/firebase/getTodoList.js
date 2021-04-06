import { useState, useEffect } from 'react';
import { projectFirestore } from './config';

export default function () {
  const [myList, setMyList] = useState([])
  useEffect(() => {
    const unsub = projectFirestore.collection('todos').orderBy('vote', 'desc')
      .onSnapshot(snap => {
        let documents = []
        snap.forEach(doc => doc.data() &&
          doc.data().done === false &&
          documents.push({ ...doc.data(), id: doc.id }))
        setMyList(documents)
      })
    return () => unsub()

  }, [])

  return myList
}