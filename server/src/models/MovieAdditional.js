import axios from "axios";

export default class MovieAdditional {
  // from https://www.traileraddict.com/
  constructor({ movieName }) {
    this.movieName =
      movieName && typeof movieName === "string"
        ? cleanMovieName(movieName)
        : "";
    this.htmlTrailerURI = `https://www.traileraddict.com/${
      this.movieName
    }/trailer`;
    this.htmlURI = `https://www.traileraddict.com/${this.movieName}`;
    this.html = ``;
console.log(this.htmlTrailerURI)
    cleanMovieName.bind(this);
  }

  getTrailer() {
    const regex = /<a href="(\/[a-zA-z]+\/trailer)" class="m_title" itemprop="url">Trailer/gm;
    return new Promise(async (resolve, reject) => {
      try {
        await this.getHTML({ url: this.htmlTrailerURI });
        this.getDataFromHtml(regex, "trailer").then(data => {
          console.log(data);
          resolve(data);
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  getCast() {
    const regex = /itemprop="actor"><span itemprop="name">(?<actor>[a-zA-Z -]*)</gm;
    return new Promise(async (resolve, reject) => {
      try {
        await this.getHTML({ url: this.htmlURI });
        this.getDataFromHtml(regex, "actor").then(data => {
          resolve(data);
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  getHTML({ url = this.htmlURI }) {
    return new Promise((resolve, reject) => {
      try {
        axios(url)
          .then(html => {
            this.html = html.data;
            resolve(html);
          })
          .catch(err => {
            reject(err);
          });
      } catch (error) {
        reject(error);
      }
    });
  }

  getDataFromHtml(regex, group) {
    return new Promise(async (resolve, reject) => {
      try {
        let m;
        let trailerURI = [];

        while ((m = regex.exec(this.html)) !== null) {
          // This is necessary to avoid infinite loops with zero-width matches
          if (m.index === regex.lastIndex) {
            regex.lastIndex++;
          }
          console.log(1, m.groups[group]);
          // The result can be accessed through the `m`-variable.
          trailerURI.push(m.groups[group]);
        }
        resolve(trailerURI);
      } catch (error) {
        reject(error);
      }
    });
  }
}

function cleanMovieName(movieName) {
  // to lowwercase
  movieName = movieName.toLowerCase();
  // remove non wprd character
  movieName = movieName.replace(/[^a-zA-Z0-9]/gm, " ");
  // remove double spaces
  movieName = movieName.replace(/[ ]{2,}/gm, " ");
  // replace spaces with dash
  movieName = movieName.replace(/[ ]/gm, "-");

  return movieName;
}
