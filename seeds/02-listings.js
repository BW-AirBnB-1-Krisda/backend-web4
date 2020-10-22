
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('listings').insert([
    {
      city: 'Las Vegas',
      room_type: 'Idk',
      security_deposit: 1200,
      guests_included: 2,
      min_nights: 3,
      price: 1000,
      user_id: 1
    }
  ])
}