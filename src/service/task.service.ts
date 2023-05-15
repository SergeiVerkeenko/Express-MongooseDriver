import { createTaskDB, updateTaskDB, getTaskDB, deleteTaskDB, getTaskIdDB } from "../repository/task.repository"

async function getTask() {
    return await getTaskDB()
}

async function getTaskId(_id) {
    return await getTaskIdDB(_id)
}

async function deleteTask(_id) {
    return await deleteTaskDB(_id)
}

async function createTask(data) {
    return await createTaskDB(data)

}
async function updateTask(_id, data) {
    return await updateTaskDB(_id, data)

}

export { createTask, updateTask, getTask, getTaskId, deleteTask }