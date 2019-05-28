"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MoviePoster =
/*#__PURE__*/
function () {
  function MoviePoster(props) {
    _classCallCheck(this, MoviePoster);

    try {
      this.movieId = props.id;
      this.baseUrl = "https://allpeliculas.io";
      this.linksUrl = "".concat(this.baseUrl, "/source/movies/poster/").concat(this.movieId);
    } catch (error) {
      console.log(error);
    }
  }

  _createClass(MoviePoster, [{
    key: "get",
    value: function get() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        try {
          (0, _axios.default)(_this.linksUrl).then(function (poster) {
            _this.getLinks(poster.data).then(function (links) {
              return resolve(links);
            });
          }).catch(function (err) {
            reject(err);
          });
        } catch (error) {
          reject(error);
        }
      });
    }
  }, {
    key: "getLinks",
    value: function getLinks(str) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        try {
          var links = str.match(/(?<=href=").*\..*(?=")/gm);
          links = links.map(function (link) {
            return _this2.baseUrl + link;
          });
          resolve(links);
        } catch (error) {
          reject(error);
        }
      });
    }
  }]);

  return MoviePoster;
}();

exports.default = MoviePoster;