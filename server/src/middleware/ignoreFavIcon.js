const ignoreFavicon = (req, res, next) => {
  if (req.originalUrl === '/favicon.ico') {
    res.status(204).json({}); // no content
  } else {
    next();
  }
}

export default ignoreFavicon;