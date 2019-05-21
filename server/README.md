# Server API Documentation

## /api/movies

Returns array of objects (movies)

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
/api/movies/?limit=5&sortBy=ReleasedUnix&order=asc
```

```javascript
// POST
url = "/api/movies/";

body: JSON.stringify({
  sortBy: "ReleasedUnix",
  limit: 5,
  order: "asc",
  skip: 0
});
```

## /api/movies/movie

Returns one object (movie)

### Parametrs:

```javascript
key; // "imdbID"
value; // movie id
```

### Example:

```javascript
// GET
/movies/movie/:id
/movies/movie/tt4669788
```

```javascript
// POST
url = "/api/movies/movie";

body: JSON.stringify({
  key: "imdbID",
  value: "tt4669788"
});
```

## /api/movies/name

Returns array of objects (movies) searched by name (movie title)

### Example:

```javascript
// GET
/movies/name/?name=alien&limit=2
```

```javascript
// POST
url = "/api/movies/name";

body: JSON.stringify({
  name = "alien",
  key = "Title",
  limit = 2
});
```

## /api/movies/remove

Removes movie by it`s id

### Example:

```javascript
// GET
/movies/remove/:id
/movies/remove/tt4669788
```

```javascript
// POST
url = "/api/movies/remove";

body: JSON.stringify({
  id = "tt4669788"
});
```
