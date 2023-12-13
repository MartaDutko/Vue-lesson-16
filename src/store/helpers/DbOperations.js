import firebaseDB from '@/firebase-config'
import { doc, collection, getDocs, addDoc, deleteDoc, updateDoc, query, where, and } from 'firebase/firestore/lite'

class DbOperations {
    constructor(collectionTitle) {
        this.dbCollection = collection(firebaseDB, `/${collectionTitle}`)
    }
    getListFromSnapshot(snapshot) {
        const list = []
        snapshot.docs.forEach((doc) => {
            list.push({
                id: doc.id,
                ...doc.data(),
            })
        })
        return list
    }
    loadItemsList() {
        console.log('Loading items list...');
        return new Promise((resolve, reject) => {
            getDocs(this.dbCollection)
                .then((querySnapshot) => {
                    console.log('Query Snapshot:', querySnapshot);
                    resolve(this.getListFromSnapshot(querySnapshot))
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }

    addItem(item) {
        return new Promise((resolve, reject) => {
            addDoc(this.dbCollection, item)
                .then(() => {
                    resolve(true)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }

    deleteItem(id) {
        return new Promise((resolve, reject) => {
            deleteDoc(doc(this.dbCollection, id))
                .then(() => {
                    resolve(true)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }

    updateItem(itemId, data) {
        console.log('itemId')
        console.log(itemId)
        return new Promise((resolve, reject) => {
            const oldDocRef = doc(this.dbCollection, itemId)
            updateDoc(oldDocRef, data)
                .then(() => {
                    resolve(true)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
    loadFilteredData(filterObj) {
        const conditions = [];
        // Не розумію чому name, expFrom і expTo - працює але окремо
        // а name, expFrom і expTo - не працює разом
        if (filterObj.name) {
            conditions.push(where('name', '==', filterObj.name));
        }
        if (filterObj.expFrom) {
            const expFrom = parseInt(filterObj.expFrom);
            conditions.push(where('exp', '>=', expFrom));
        }
        if (filterObj.expTo) {
            const expTo = parseInt(filterObj.expTo);
            conditions.push(where('exp', '<=', expTo));
        }

        const q = query(this.dbCollection, and(...conditions));
        return new Promise((resolve, reject) => {
            getDocs(q)
                .then((querySnapshot) => {
                    resolve(this.getListFromSnapshot(querySnapshot))
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
}

export default DbOperations
