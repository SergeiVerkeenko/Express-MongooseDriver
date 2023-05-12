import { getAllUsersDB, createAllUsersDB, getIdUsersDB, deleteUsersDB, updateUserDB } from "../repository/user.repository"

async function getAllUsers() {
    return await getAllUsersDB()
}

async function getIdUsers(_id) {
    return await getIdUsersDB(_id)
}

async function createAllUsers(obj) {
    return await createAllUsersDB(obj)
}

async function deleteUsers(_id) {
    return await deleteUsersDB(_id)
}

async function updateUser(_id, data) {
    return await updateUserDB(_id, data)
}
export { getAllUsers, createAllUsers, getIdUsers, deleteUsers, updateUser }