import { openDB } from "idb";

const dbPromise = openDB('keyval-store', 1, {
    upgrade(db){
        db.createObjectStore('keyval');
    }
})


const PutToIDBDatabase = {
        async getData(key){
            return (await dbPromise).get('keyval', key);
        },
        async getAllData(){
            return (await dbPromise).getAll('keyval');
        },
        async setData(key, val){
            return (await dbPromise).put('keyval', val, key);
        },
        async del(key) {
            return (await dbPromise).delete('keyval', key);
        },
        async clear() {
         return (await dbPromise).clear('keyval');
        },
        async keys() {
        return (await dbPromise).getAllKeys('keyval');
        }

}

export default PutToIDBDatabase;