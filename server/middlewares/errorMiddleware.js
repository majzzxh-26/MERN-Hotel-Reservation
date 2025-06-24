const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || 'Internal Server Error';
  err.statusCode = err.statusCode || 500;

  // Handle Mongoose-specific errors
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map(val => val.message);
    err.message = messages.join(', ');
    err.statusCode = 400;
  }

  if (err.name === 'CastError') {
    err.message = `Invalid ${err.path}: ${err.value}`;
    err.statusCode = 400;
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
};

export default errorMiddleware;
