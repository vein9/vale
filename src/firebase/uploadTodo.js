import { projectStorage, projectFirestore, timestamp } from './config';

export default function uploadTodo(newTodo) {
  const storageRef = projectStorage.ref(newTodo.text)
  const collectionRef = projectFirestore.collection('todos')

  storageRef.put(newTodo)
    .on('state_changed',
      snap => { },
      error => { },
      async () => await collectionRef.add({ ...newTodo, createAt: timestamp() }))
}