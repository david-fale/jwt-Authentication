// TODO: import a generateHash function

exports.seed = (knex) => {
  return knex('users').del()
    .then(() => Promise.all([
      // generateHash('jess'),
      // generateHash('jules')
    ]))
    .then(([jessHash, julesHash]) =>
      knex('users').insert([
        { id: 1, username: 'jess', hash: jessHash },
        { id: 2, username: 'jules', hash: julesHash }
      ])
    )
}
