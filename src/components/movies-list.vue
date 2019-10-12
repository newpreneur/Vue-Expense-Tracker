<template>
  <div>
    <movie-item v-for="movie in movies" :key="movie.id" :movie="movie"></movie-item>
  </div>
</template>

<script>
import MovieItem from "./movie-item";
import gql from "graphql-tag";
const GET_MOVIES = gql`
  query getMovies {
    movies {
      id
      title
      director
      composer
      release_date
    }
  }
`;
export default {
  name: "MoviesList",
  components: { MovieItem },
  data() {
    return {
      movies: []
      // movies: [
      //    {
      //      id: "123123123",
      //      title: "Harry Potter and the Order of the Phoenix",
      //      director: "David Yates",
      //      composer: "Nicholas Hopper",
      //      release_date: "2007-07-11"
      //    }
      //  ]
    };
  },
  apollo: {
    movies: {
      query: GET_MOVIES
    }
  }
};
</script>
