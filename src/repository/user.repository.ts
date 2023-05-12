import { Collection, ObjectId } from "../db"

async function getAllUsersDB() {
    return await Collection.User.find()
}

async function getIdUsersDB(_id) {
    return await Collection.User.find({ _id: new ObjectId(_id) })
}

async function createAllUsersDB(obj) {
    await Collection.User.collection.insertOne(obj)
    return 'success'
}

async function deleteUsersDB(_id) {
    await Collection.User.collection.deleteOne({ _id: new ObjectId(_id) })
    return 'success'
}

async function updateUserDB(_id, data) {
    await Collection.User.updateOne({ _id: new ObjectId(_id)}, data )
    return 'success'
}


export { getAllUsersDB, createAllUsersDB, getIdUsersDB, deleteUsersDB, updateUserDB }