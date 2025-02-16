require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');

const api = require('./api');
const router = new Router();
const app = new Koa();

const { PORT, MONGO_URI } = process.env;

mongoose
	.connect(MONGO_URI)
	.then(() => {
		console.log('Connected to Mongo');
	})
	.catch((e) => {
		console.log(e);
	});

router.use('/api', api.routes());

app.use(bodyParser()).use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;

app.listen(port, () => {
	console.log('Listening to port 4000');
});
