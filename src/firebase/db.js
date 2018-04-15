import { db } from './firebase';

export const doUpdateItem = (itemId, text) =>{
  let ref = db.ref('todolist');
  return ref
  .child(itemId)
  .update({
    date: new Date().getTime(),
    text: text
  })
  .then(() => ref.once('value'))
  .then(snapshot => snapshot.val())
  .catch(error => ({
    errorCode: error.code,
    errorMessage: error.message
  }));
}

export const doDeleteItem = (itemId) =>{
  let ref = db.ref('todolist');
  return ref
  .child(itemId)
  .remove()
  .then(() => ref.once('value'))
  .then(snapshot => snapshot.val())
  .catch(error => ({
    errorCode: error.code,
    errorMessage: error.message
  }));
}

// Other Entity APIs ...