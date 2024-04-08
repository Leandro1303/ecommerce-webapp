import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Task from '../models/task.js';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: [8, 'Minimo 8 caracteres'],
        validate(value) {
            if(value.includes('123456')) {
                throw new Error('Password inseguro')
            }
        }
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email incorrecto!')
            }
        }
    },
    role: {
        type: String,
        default: 'user',
        required: false,
        enum: ['user', 'admin']
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

userSchema.virtual('tasks', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'owner'
})

userSchema.virtual('order', {
    ref: 'Order',
    localField: '_id',
    foreignField: 'owner'
})

userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens

    return userObject
}


userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'leandro')

    user.tokens = user.tokens.concat( { token } )
    await user.save()

    return token
}


userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if(!user) {
        throw new Error('Error de login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch) {
        throw new Error('Error de login')
    }

    return user
}

// middleware --> route ---> create user --> pre ---> save 

userSchema.pre('save', async function(next) {
    const user = this

    if(user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8) 
    }

    next()
})

userSchema.pre('remove', async function(next) {
    const user = this

    await Task.deleteMany({ owner: user._id })

    next()
})


const User = mongoose.model('User', userSchema)

export default User