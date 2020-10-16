
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').insert([
    {
      username: "LambdaSchool",
      password: "$2a$10$7DwDRy4NSS9wT7EI7c6i8.jO6snE0wT5WSMbVnIgHZJ4BqHMw9Yi.",
      email: "lambda@gmail.com"
    }
  ])
};
