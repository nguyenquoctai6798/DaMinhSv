const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const axios = require("axios")
var http = require('http');
let models = require('./models');
/**
 * Get port from environment and store in Express.
 */

models.sequelize.sync().then(result => {
    app.listen(port, () => {
        console.log(`Mixing it up on port ${port}`)
    })
})
var port = process.env.PORT || '8000';
app.set('port', port);

const brcypt = require('bcrypt')
const memberRouter = require('./routes/MembersRouter');
const authenticationRouter = require('./routes/AuthenticationRouter')
const getDateEat = require("./routes/GetDataEat");
const dontEatRiceRouter = require("./routes/DontEatRice");
const eatRiceRouter = require("./routes/EatRice");
const TimeMembers  = require("./routes/TimeMembers");
const houseRouter = require('./routes/House')

const goHomeOverNightRouter = require('./routes/GoHomeOverNight')
const studentsRouter = require('./routes/Students')


// view engine setup
app.set('view engine', 'ejs');
/* app.use(logger('dev')); */
app.use(cors());
app.use(fileUpload())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

/*========= Here we want to let the server know that we should expect and allow a header with the content-type of 'Authorization' ============*/
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
    next();
});

app.use('/members', memberRouter);
app.use('/members', dontEatRiceRouter);
app.use('/members', eatRiceRouter);
app.use('/houses/', houseRouter);
app.use('/authentication', authenticationRouter);
app.use("/members",getDateEat);
app.use("/members",TimeMembers);

app.use('/gohomeovernight', goHomeOverNightRouter);
app.use('/students', studentsRouter);

/* app.use(express.static(path.join(__dirname, 'client/build'))) */
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));