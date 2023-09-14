import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const skillSchema = new Schema({
    desc: String,
    level: String,
    certified: Boolean,
}, {
    timestamps: true
})

const Skill = mongoose.model('Skill', skillSchema)

export {
  Skill
}