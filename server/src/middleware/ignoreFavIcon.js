const ignoreFavicon = (req, res, next) => {
  if (req.originalUrl === '/favicon.ico') {
    res.status(204).json({ faIicon: false });
  } else {
    next();
  }
}

export default ignoreFavicon;