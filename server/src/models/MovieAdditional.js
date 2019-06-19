import axios from "axios";

export default class MovieAdditional {
  // from https://www.traileraddict.com/
  constructor({ movieID }) {
    this.movieID =
      movieID && typeof movieID === "string"
        ? cleanmovieID(movieID)
        : "";
    this.htmlTrailerURI = `https://www.traileraddict.com/${
      this.movieID
    }/trailer`;
    // this.htmlURI = `https://www.traileraddict.com/${this.movieID}`;
    this.htmlURI = `https://www.imdb.com/title/${this.movieID}/`;
    this.html = ``;
    console.log(this.htmlTrailerURI);
    cleanmovieID.bind(this);
  }

  getTrailer() {
    const regex = /<a href="(\/[a-zA-z]+\/trailer)" class="m_title" itemprop="url">Trailer/gm;
    return new Promise(async (resolve, reject) => {
      try {
        await this.getHTML({ url: this.htmlTrailerURI });
        this.getDataFromHtml(regex).then(data => {
          resolve(data);
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  getCast() {
    //const regex = /itemprop="actor"><span itemprop="name">(?<actor>[a-zA-Z -]*)</gm;
    const regex = /primary_photo[\s\S]*?alt="(?<actor>\w+\s\S+\s?\w+)"[\s\S]*?src="(?<image>[a-zA-z0-9:/.-]+)/gm;
    //
    return new Promise(async (resolve, reject) => {
      try {
        await this.getHTML({ url: this.htmlURI });
        this.getDataFromHtml(regex).then(data => {
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

  getDataFromHtml(regex) {
    return new Promise(async (resolve, reject) => {
      try {
        let m;
        let trailerURI = [];

        while ((m = regex.exec(this.html)) !== null) {
          // This is necessary to avoid infinite loops with zero-width matches
          if (m.index === regex.lastIndex) {
            regex.lastIndex++;
          }
          trailerURI.push(JSON.parse(JSON.stringify(m.groups)));
        }
        resolve(trailerURI);
      } catch (error) {
        reject(error);
      }
    });
  }
}

function cleanmovieID(movieID) {
  // to lowwercase
  movieID = movieID.toLowerCase();
  // remove non wprd character
  movieID = movieID.replace(/[^a-zA-Z0-9]/gm, " ");
  // remove double spaces
  movieID = movieID.replace(/[ ]{2,}/gm, " ");
  // replace spaces with dash
  movieID = movieID.replace(/[ ]/gm, "-");

  return movieID;
}
