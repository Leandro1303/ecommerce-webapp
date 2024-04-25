import express from 'express';
import User from '../models/user.js';
import auth from '../middleware/auth.js';

const router = express.Router()

router.post('/', async (req, res) => {
    const user = new User(req.body)
    
    try {
        await user.save()
        res.status(201).send(user)
    } catch(e) {
        res.status(400).send(e)
    }
})

router.get('/', auth, async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch(e) {
        res.status(500).send()
    }
})

router.get('/UserById/:id', auth, async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id)
        if(!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch(e) {
        res.status(500).send()
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken() 

        res.send({ user, token })
    } catch(e) {
        res.status(400).send(e)
    }
})

// Revision
router.post('/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })

        await req.user.save()

        res.send()
    } catch(e) {
        res.status(500).send(e)
    }
})

router.post('/logoutAll', auth, async (req, res) => {

    try {
        req.user.tokens = []

        await req.user.save()

        res.send()
    } catch(e) {
        res.status(500).send(e)
    }
})

router.get('/me', auth, async (req, res) => {
    res.send(req.user)
})

router.patch('/me', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const user = req.user

        updates.forEach((update) => user[update] = req.body[update])
        
        await user.save()

        res.send(user)
    } catch (e) {
        console.log(e.message)
    }
})

router.delete('/me', auth, async (req, res) => {
    try {
        await req.user.remove()

        res.send(req.user)
    } catch (e) {
        res.status(500).send()
    }
})

export default router;
