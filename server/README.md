# Server API Documentation

## /api

## /api/movies

### Parametrs:

```javascript
limit; // defaut 50
sortBy; // defaut "ReleasedUnix",
order; // defaut desc ↓
skip; // defaut 0
```

### Example:

```javascript
// GET
/?limit=5&sortBy=ReleasedUnix&order=asc
```

```javascript
// POST
body: JSON.stringify({
  sortBy: "ReleasedUnix",
  limit: 5,
  order: "asc"
});
```

### Result:

```json
[
  {
    "ReleasedUnix": "10ed7280",
    "_id": "5cb71ba114c7da19ca9bbb12",
    "Title": "Take Down",
    "Year": "1979",
    "Released": "01 Jan 1979",
    "Genre": "Comedy, Drama, Family",
    "Country": "USA",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzZhY2JiYzMtNTkxYy00OTgwLWE4MWItMTA2NzE2YTljYTMzXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg",
    "Ratings": [
      {
        "_id": "5cb71ba114c7da19ca9bbb13",
        "Source": "Internet Movie Database",
        "Value": "6.3/10"
      }
    ],
    "imdbID": "tt0078358",
    "Type": "movie",
    "__v": 0
  },
  {
    "ReleasedUnix": "10ed7280",
    "_id": "5cb71b9f14c7da19ca9bbac3",
    "Title": "Richard Pryor: Live in Concert",
    "Year": "1979",
    "Released": "01 Jan 1979",
    "Genre": "Documentary, Comedy",
    "Country": "USA",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTg4NDkwMzYwNF5BMl5BanBnXkFtZTYwNTMzMTQ5._V1_SX300.jpg",
    "Ratings": [
      {
        "_id": "5cb71b9f14c7da19ca9bbac5",
        "Source": "Internet Movie Database",
        "Value": "8.2/10"
      },
      {
        "_id": "5cb71b9f14c7da19ca9bbac4",
        "Source": "Rotten Tomatoes",
        "Value": "92%"
      }
    ],
    "imdbID": "tt0079807",
    "Type": "movie",
    "__v": 0
  },
  {
    "ReleasedUnix": "11165100",
    "_id": "5cb71ba214c7da19ca9bbb6c",
    "Title": "Wolfman",
    "Year": "1979",
    "Released": "01 Feb 1979",
    "Genre": "Horror",
    "Country": "USA",
    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjlmNGVlZWMtZjE1Ny00MTRjLTlhOGMtNmI1OTBkMmE0YjRiXkEyXkFqcGdeQXVyMTQ2MjQyNDc@._V1_SX300.jpg",
    "Ratings": [
      {
        "_id": "5cb71ba214c7da19ca9bbb6d",
        "Source": "Internet Movie Database",
        "Value": "2.7/10"
      }
    ],
    "imdbID": "tt0141996",
    "Type": "movie",
    "__v": 0
  },
  {
    "ReleasedUnix": "11165100",
    "_id": "5cb71b9514c7da19ca9bb8d0",
    "Title": "Angels' Brigade",
    "Year": "1979",
    "Released": "01 Feb 1979",
    "Genre": "Action, Comedy",
    "Country": "USA",
    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTM5MzQzYjAtZmNlZi00MDA2LTgwZTAtOTg0OGMzYzkxOTM5L2ltYWdlXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_SX300.jpg",
    "Ratings": [
      {
        "_id": "5cb71b9514c7da19ca9bb8d1",
        "Source": "Internet Movie Database",
        "Value": "1.9/10"
      }
    ],
    "imdbID": "tt0078778",
    "Type": "movie",
    "__v": 0
  },
  {
    "ReleasedUnix": "1120dd00",
    "_id": "5cb71ba214c7da19ca9bbb4a",
    "Title": "The Warriors",
    "Year": "1979",
    "Released": "09 Feb 1979",
    "Genre": "Action, Crime, Thriller",
    "Country": "USA",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTU2MWRiMTMtYzAzZi00NGYzLTlkMDEtNWQ3MzZlNTJlNzZkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
    "Ratings": [
      {
        "_id": "5cb71ba214c7da19ca9bbb4d",
        "Source": "Internet Movie Database",
        "Value": "7.7/10"
      },
      {
        "_id": "5cb71ba214c7da19ca9bbb4c",
        "Source": "Rotten Tomatoes",
        "Value": "89%"
      },
      {
        "_id": "5cb71ba214c7da19ca9bbb4b",
        "Source": "Metacritic",
        "Value": "65/100"
      }
    ],
    "imdbID": "tt0080120",
    "Type": "movie",
    "__v": 0
  }
]
```

## /api/movies/:id

### Parametrs:

```javascript
key; // "imdbID"
value; // movie id
```

### Example:

```javascript
// GET
/api/movies/tt4669788
```

```javascript
// POST
body: JSON.stringify({
  key: "imdbID",
  value: "tt4669788"
});
```

### Result:

```json
{
  "ReleasedUnix": "5c37dc80",
  "Trailers": [],
  "_id": "5cb721102cead81ae2eebe5c",
  "Title": "On the Basis of Sex",
  "Year": "2018",
  "Released": "11 Jan 2019",
  "Runtime": "120 min",
  "Genre": "Biography, Drama",
  "Director": "Mimi Leder",
  "Writer": "Daniel Stiepleman",
  "Plot": "The true story of Ruth Bader Ginsburg, her struggles for equal rights, and the early cases of a historic career that lead to her nomination and confirmation as U.S. Supreme Court Associate Justice.",
  "Language": "English",
  "Country": "USA",
  "Awards": "N/A",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYzJlYmEwYjEtMmE1Ny00ZjdiLTg2ZjctMmMxYjRhNGJkNTY2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  "Ratings": [
    {
      "_id": "5cb721102cead81ae2eebe5f",
      "Source": "Internet Movie Database",
      "Value": "6.7/10"
    },
    {
      "_id": "5cb721102cead81ae2eebe5e",
      "Source": "Rotten Tomatoes",
      "Value": "73%"
    },
    {
      "_id": "5cb721102cead81ae2eebe5d",
      "Source": "Metacritic",
      "Value": "59/100"
    }
  ],
  "imdbRating": "6.7",
  "imdbVotes": "6,398",
  "imdbID": "tt4669788",
  "Type": "movie",
  "__v": 0
}
```

## /api/movies/name/:name

```javascript
router.get("/movies/name/:name", controller.getMoviesByName);
```

### Example:

`/api/movies/name/aliens`

### Result:

```json
[
  {
    "ReleasedUnix": "1f1d8700",
    "_id": "5cb71c1f3e26c819fa5630a9",
    "Title": "Aliens",
    "Year": "1986",
    "Released": "18 Jul 1986",
    "Genre": "Action, Adventure, Sci-Fi, Thriller",
    "Country": "USA",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZGU2OGY5ZTYtMWNhYy00NjZiLWI0NjUtZmNhY2JhNDRmODU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Ratings": [
      {
        "_id": "5cb71c1f3e26c819fa5630ac",
        "Source": "Internet Movie Database",
        "Value": "8.4/10"
      },
      {
        "_id": "5cb71c1f3e26c819fa5630ab",
        "Source": "Rotten Tomatoes",
        "Value": "99%"
      },
      {
        "_id": "5cb71c1f3e26c819fa5630aa",
        "Source": "Metacritic",
        "Value": "84/100"
      }
    ],
    "imdbID": "tt0090605",
    "Type": "movie",
    "__v": 0
  },
  {
    "ReleasedUnix": "430d0a00",
    "_id": "5cb71f3319d02d1a7b431885",
    "Title": "Aliens of the Deep",
    "Year": "2005",
    "Released": "25 Aug 2005",
    "Genre": "Documentary, Family",
    "Country": "USA",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTk2NjU2ODA1M15BMl5BanBnXkFtZTcwNzI0NDcyMQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "_id": "5cb71f3319d02d1a7b431888",
        "Source": "Internet Movie Database",
        "Value": "6.5/10"
      },
      {
        "_id": "5cb71f3319d02d1a7b431887",
        "Source": "Rotten Tomatoes",
        "Value": "84%"
      },
      {
        "_id": "5cb71f3319d02d1a7b431886",
        "Source": "Metacritic",
        "Value": "71/100"
      }
    ],
    "imdbID": "tt0417415",
    "Type": "movie",
    "__v": 0
  },
  {
    "ReleasedUnix": "47704800",
    "_id": "5cb71fb483169f1aadd744d3",
    "Title": "Aliens vs. Predator: Requiem",
    "Year": "2007",
    "Released": "25 Dec 2007",
    "Genre": "Action, Horror, Sci-Fi, Thriller",
    "Country": "USA",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTI5NDY2NDUwM15BMl5BanBnXkFtZTYwNzQxMTA3._V1_SX300.jpg",
    "Ratings": [
      {
        "_id": "5cb71fb483169f1aadd744d6",
        "Source": "Internet Movie Database",
        "Value": "4.7/10"
      },
      {
        "_id": "5cb71fb483169f1aadd744d5",
        "Source": "Rotten Tomatoes",
        "Value": "11%"
      },
      {
        "_id": "5cb71fb483169f1aadd744d4",
        "Source": "Metacritic",
        "Value": "29/100"
      }
    ],
    "imdbID": "tt0758730",
    "Type": "movie",
    "__v": 0
  },
  {
    "ReleasedUnix": "49cc1700",
    "_id": "5cb7200cae99c41ac0e20492",
    "Title": "Monsters vs. Aliens",
    "Year": "2009",
    "Released": "27 Mar 2009",
    "Genre": "Animation, Action, Adventure, Comedy, Family, Sci-Fi",
    "Country": "USA",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTY0OTQ3MzE3MV5BMl5BanBnXkFtZTcwMDQyMzMzMg@@._V1_SX300.jpg",
    "Ratings": [
      {
        "_id": "5cb7200cae99c41ac0e20495",
        "Source": "Internet Movie Database",
        "Value": "6.5/10"
      },
      {
        "_id": "5cb7200cae99c41ac0e20494",
        "Source": "Rotten Tomatoes",
        "Value": "73%"
      },
      {
        "_id": "5cb7200cae99c41ac0e20493",
        "Source": "Metacritic",
        "Value": "56/100"
      }
    ],
    "imdbID": "tt0892782",
    "Type": "movie",
    "__v": 0
  }
]
```

## /api/movies/:id

```javascript
router.delete("/movies", controller.removeMovie);
```
