const db = require('../dbConfig.js');

module.exports = {
    add,
    addListing,
    find,
    findBy,
    findById,
    findAllListings,
    findListingsForUser,
    findListingById,
    update,
    remove
}

async function add(user) {
    const [id] = await db('users').insert(user, "id");
    console.log(id);
    return findById(id);
}

function addListing(listing){
    return db('listings').insert(listing)
        .then(ids => {
            return findListingById(ids[0]);
        })
}

function find(){
    return db('users').select('id', 'username');
}

function findBy(filter){
    return db('users').where(filter)
}

function findById(id){
    return db('users')
        .where({id})
        .first();
}

function findAllListings(){
    return db('listings')
}
function findListingsForUser(id){
    return db('listings as l')
        .join('users as u', 'l.user_id','u.id')
        .select('u.username', 'l.city', 'l.room_type', 'l.security_deposit', 'l.guests_included', 'l.min_nights', 'l.price', 'l.id', 'l.user_id')
        .orderBy('u.id')
        .where({user_id: id})
}

function findListingById(id){
    return db('listings')
        .where({id})
        .first();
}

function update(changes, id){
    return db('listings')
        .where({id})
        .update(changes)
        .then(count => {
            return findListingById(id);
        })
}

function remove(id){
    return db('listings')
        .where({id})
        .del();
}