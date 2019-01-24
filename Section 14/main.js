// Create an array of movie objects.  Each movie should have a title, rating, and hasWatched properties.  Iterate through the array and print out the Data
let movieDB = [
  {
    title: "In Bruges",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Frozen",
    rating: 4.5,
    hasWatched: false
  },
  {
    title: "Mad Max Fury Road",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Les Miserables",
    rating: 3.5,
    hasWatched: false
  }
]

for (let i = 0; i < movieDB.length; i++) {
  console.log(`You have ${movieDB[i].hasWatched ? "watched" : "not seen"} "${movieDB[i].title}" - ${movieDB[i].rating} stars`);
}
