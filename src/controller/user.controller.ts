import express, { Request, Response, NextFunction } from 'express'
import { createAllUsers, getAllUsers, getIdUsers, deleteUsers, updateUser } from '../service/user.service'
const route = express.Router()

route.get('/', async function (req: Request, res: Response) {
    try {
        res.status(200).send(await getAllUsers())
    } catch (error: any) {
        res.status(404).send(error.message)
    }
})

route.get('/:_id', async function (req: Request, res: Response) {
    try {
        const { _id } = req.params;
        res.status(200).send(await getIdUsers(_id))
    } catch (error: any) {
        res.status(404).send(error.message_)
    }
})

route.post('/', async function (req: Request, res: Response) {
    try {
        const obj = req.body
        res.status(200).send(await createAllUsers(obj))
    } catch (error: any) {
        res.status(404).send(error.message)
    }
})

route.delete('/:_id', async function (req: Request, res: Response) {
    try {
        const { _id } = req.params;
        res.status(200).send(await deleteUsers(_id))

    } catch (error: any) {
        res.status(404).send(error.message)
    }
})

route.put('/:_id', async function (req: Request, res: Response) {
    try {
        const { _id } = req.params
        const data = req.body
        res.status(200).send(await updateUser(_id, data))
    } catch (error) {

    }
})



export default route