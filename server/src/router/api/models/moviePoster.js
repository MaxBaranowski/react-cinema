import axios from "axios";

export default class MoviePoster {
  constructor(props) {
    try {
      this.movieId = props.id;
      this.baseUrl = `https://allpeliculas.io`;
      this.linksUrl = `${this.baseUrl}/source/movies/poster/${this.movieId}`;
    } catch (error) {
      console.log(error);
    }
  }

  get() {
    return new Promise((resolve, reject) => {
      try {
        axios(this.linksUrl)
          .then(poster => {
            this.getLinks(poster.data).then(links => resolve(links));
          })
          .catch(err => {
            reject(err);
          });
      } catch (error) {
        reject(error);
      }
    });
  }

  getLinks(str) {
    return new Promise((resolve, reject) => {
      try {
        let links = str.match(/(?<=href=").*\..*(?=")/gm);
        links = links.map(link => this.baseUrl + link);
        resolve(links);
      } catch (error) {
        reject(error);
      }
    });
  }
}
