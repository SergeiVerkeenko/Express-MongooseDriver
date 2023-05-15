import { Collection, ObjectId } from "../db"

async function getTaskDB() {
    return await Collection.Task.find()
}

async function getTaskIdDB(_id) {
    return await Collection.Task.find({ _id: new ObjectId(_id) })
}
async function deleteTaskDB(_id) {
    return await Collection.Task.deleteOne({ _id: new ObjectId(_id) })
}

async function createTaskDB(data) {
    await Collection.Task.collection.insertOne(data)
    return 'success'
}
async function updateTaskDB(_id, data) {
    await Collection.Task.updateOne({ _id }, data)
    return 'success'
}

export { createTaskDB, updateTaskDB, getTaskDB, getTaskIdDB, deleteTaskDB }