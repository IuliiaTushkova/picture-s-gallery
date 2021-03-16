
import { projectFirestore } from '../firebase/config';

const UseStorageDelete = (doc) => {

    console.log('*********');
    console.log(projectFirestore.collection("images").getRef());


}

export default UseStorageDelete;