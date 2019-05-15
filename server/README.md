# Server API Documentation

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

### Example:

```javascript
// GET
/movies/name/?name=alien?limit=2
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
