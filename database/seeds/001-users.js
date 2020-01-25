exports.seed = async (knex) => {
  await knex("users").insert([
    { username: "darren", password: 'angus123', department: 'backend' },
    { username: "josh_12", password: 'askew123', department: 'frontend' },
    { username: "peterg", password: 'familyguy123', department: 'frontend'},
  ])
}
