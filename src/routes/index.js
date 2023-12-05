const userRouter = require('./user.route');
const bookingRouter = require('./booking.route');
const hotelRouter = require('./hotel.route');
const destinationRouter = require('./destination.route');
const scheduleRouter = require('./schedule.route');
const catalogRouter = require('./catalog.route');

const initRouter = (app) => {
  app.use('/user', userRouter);
  app.use('/hotel', hotelRouter);
  app.use('/destination', destinationRouter);
  app.use('/booking', bookingRouter);
  app.use('/schedule', scheduleRouter);
  app.use('/catalog', catalogRouter);
};

module.exports = initRouter;
