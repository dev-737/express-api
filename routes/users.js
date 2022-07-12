const express = require('express');
const router = express.Router();

router.use(logger);

router.get('/', (req, res) => {
	// query thingy (/?name=joe)
	console.log(req.query.name);
	res.status(200).send(users);
});

router.get('/new', (req, res) => {
	res.render('users/new');
});

router.post('/', (req, res) => {
	const isValid = true;
	if (isValid) {
		console.log('in');
		users.push({ name: req.body.firstName });
		res.redirect(`/users/${users.length - 1}`);
	}

	else {
		console.log('Error');
		res.render('users/new', { firstName: req.body.firstName });
	}
});


router.route('/:id')
	.get((req, res) => {
		if (!req.user) {
			return res.send('Invalid user id');
		}
		res.json(req.user);
	})
	.put((req, res) => res.send('Update User With ID: ' + req.params.id))
	.delete((req, res) => res.send('Delete User With ID: ' + req.params.id));


const users = [{ name: 'Kyle' }, { name: 'Sally' }];

// This is a middleware that will be executed for every request to this router
router.param('id', (req, res, next, id) => {
	req.user = users[id];
	next();
});


function logger(req, res, next) {
	console.log(req.originalUrl);
	next();
}

module.exports = router;