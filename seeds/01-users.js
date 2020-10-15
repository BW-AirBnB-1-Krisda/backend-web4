
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').insert([
    {
      username: "NEW",
      password: "$2a$10$dTaH3OBhOxejjEAB9ymkJOyUsqiyyau0Y3SWb.e9hWPmcmIxH14HC",
      email: "happy@gmail.com"
    }
  ])
};
