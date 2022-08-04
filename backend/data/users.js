import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'Amarnath',
    email: 'amar@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  }
]

export default users