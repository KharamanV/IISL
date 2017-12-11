const children = [
  {
    id: 1,
    name: 'Vasya',
    age: 5,
  },
  {
    id: 2,
    name: 'Igor',
    age: 6,
  },
  {
    id: 3,
    name: 'John',
    age: 5,
  },
];

exports.seed = (knex, Promise) => (
  knex('children')
    .del()
    .then(() => knex('children').insert(children))
);
