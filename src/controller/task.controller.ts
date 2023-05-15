import express, { Request, Response, NextFunction } from 'express'
import { createTask, getTask, getTaskId, updateTask, deleteTask } from '../service/task.service'
const route = express.Router()

route.get('/', async function (req: Request, res: Response) {
    try {
        res.status(200).send(await getTask())
    } catch (error) {

    }
})

route.get('/:_id', async function (req: Request, res: Response) {
    try {
        const { _id } = req.params
        res.status(200).send(await getTaskId(_id))
    } catch (error) {

    }
})

route.post('/', async function (req: Request, res: Response) {
    try {
        const data = req.body
        res.status(200).send(await createTask(data))
    } catch (error: any) {
        res.status(404).send(error.message)
    }

})

route.delete('/:_id', async function (req: Request, res: Response) {
    try {
        const { _id } = req.params
        res.status(200).send(await deleteTask(_id))

    } catch (error: any) {
        res.status(404).send(error.message)

    }

})

route.put('/:_id', async function (req: Request, res: Response) {
    try {
        const { _id } = req.params
        const data = req.body
        res.status(200).send(await updateTask(_id, data))
    } catch (error: any) {
        res.status(404).send(error.message)
    }
})

export default route
