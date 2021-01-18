const portfolioRouter = require('./portfolio.routes');

module.exports = function (app) {
	app.use('/portfolio', portfolioRouter);
};
