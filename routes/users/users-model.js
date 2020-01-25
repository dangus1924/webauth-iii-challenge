const db = require('../../database/db-config')

async function add(user) {
    const [id] = await db('users').insert(user)
    return findById({ id })
}

function find() {
    return db('users').select('username', 'password', 'department');
}

function findById(id) {
    return db('user').where(id)
}

module.exports = {
    add,
    find,
    findById,
}