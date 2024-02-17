const Express = require('express');
const path = require('node:path')
const cors = require('cors')
const port = 5000;
const frontend = path.resolve(__dirname, '../frontend');
// const views = path.resolve(__dirname, 'views');
// const router = require('./router.js');
// const nunjucks = require('nunjucks');

const app = Express();
// nunjucks.configure(views, {
//     express: app,
//     autoescape: true
// });
app.use(cors())
app.use(Express.json());
app.use(Express.static(frontend));

app.listen(port, function () {
    console.log(`http://localhost:${port}`);
});
