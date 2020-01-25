
const cleaner = require('knex-cleaner')

exports.seed = async (knex) => {
  await cleaner.clean(knex)
};