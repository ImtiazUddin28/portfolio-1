const router = require('express').Router();

router.get('/', (req, res) => {
	res.render('pages/portfolio.ejs');
});


module.exports = router;