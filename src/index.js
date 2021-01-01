const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const DirExplorer = require('./middlewares/dirExplorer')
const enviroment = require('./enviroment');

const app = express();

app.set('port', enviroment.port);
app.set('json spaces', 2);

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json({}));
app.use(express.static('/servers'));
app.use(new DirExplorer()._explorer)

app.listen(app.get('port'), () => {
    console.log('gampp is listening at port', app.get('port'));
});
