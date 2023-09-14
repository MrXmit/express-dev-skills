import mongoose from 'mongoose'

// connect to the database
mongoose.connect(process.env.DATABASE_URL)

const skills = [
    { desc: 'javascript', level: 'senior', certified: true, _id: 125223 },
    { desc: 'css', level: 'junior', certified: false, _id: 127904 },
    { desc: 'html', level: 'junior', certified: false, _id: 139608 },
]

export {
    skills
}