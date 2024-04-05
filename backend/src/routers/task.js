import express from 'express';
import Task from '../models/task.js';
import auth from '../middleware/auth.js';

const router = express.Router()

router.post('/', auth, async (req, res) => {
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })

    try {
        await task.save()
        res.status(201).send(task)
    } catch(error) {
        res.status(400).send(error)
    }
})

router.get('/', auth, async (req, res) => {

    try {
        await req.user.populate('tasks').execPopulate()
        res.send(req.user.tasks)
    } catch(error) {
        res.status(500).send(error)
    }
})

router.get('/:id', auth, async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findOne({_id, owner: req.user._id})

        if(!task) {
            return  res.status(404).send()
        }

        res.send(task)
    } catch(error) {
        res.status(500).send()
    }
})

router.patch('/:id', auth, async (req, res) => {    // PATCH | PUT
    const keys = Object.keys(req.body)
    const permitidos = ['description', 'completed']

    const isValidOperation = keys.every((key) => {
        return permitidos.includes(key)
    })

    if(!isValidOperation) {
        return res.status(400).send({error: 'Invalid update!'})
    }

    try {

        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id})

        if(!task) {
            return res.status(404).send()
        }

        keys.forEach((key) => task[key] = req.body[key])
        await task.save()

        res.send(task)
    
    } catch(e) {
        res.status(400).send(e)
    }

})

router.delete('/:id', auth, async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id})

        if(!task) {
            return res.status(404).send()
        }

        res.send(task)

    } catch(e) {
        res.status(400).send()
    }
})

export default router;