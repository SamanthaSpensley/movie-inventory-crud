
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('movies').insert({
          id: 1,
          title: 'Kazaam',
          imageURL: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU4NjAwMjg0MF5BMl5BanBnXkFtZTcwODgwNDMyMQ@@._V1_.jpg',
          type: 'Comedy',
          year: 1996,
          rating: 3,
          description: "Being a lone young boy in the 'hood' is dangerous and unpleasant. This is what Max experiences when he fools a gang of local toughs who cornered him at school. The gang finds out that the key he gave them is of no value in committing a robbery, and they chase him through the streets of his neighborhood, bent on revenge. He tries to escape by slipping into the open door of an old warehouse, but they follow him there, too. While running from them through aisles filled with all kinds of stuff, he bumps into an old boom box. By doing that, he manages to release Kazaam, a genie who has been held captive for thousands of years. In order to stay free, Kazaam must give Max three wishes.",
          snippet: '',
          note: "He's A Rappin' Genie With An Attitude... And He's Ready For Slam-Dunk Fun!"
        }),

      ]);
    });
};
