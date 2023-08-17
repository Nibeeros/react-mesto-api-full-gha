const router = require('express').Router();
const usersRouter = require('./users');
const cardsRouter = require('./cards');
const signinRouter = require('./signin');
const signupRouter = require('./signup');
const auth = require('../middlewares/auth');
const NotFoundErr = require('../errors/NotFoundErr');

router.use(signinRouter);
router.use(signupRouter);

router.use(auth);

router.use(usersRouter);
router.use(cardsRouter);

router.use((req, res, next) => { next(new NotFoundErr('Такой страницы не существует')); });

module.exports = router;
