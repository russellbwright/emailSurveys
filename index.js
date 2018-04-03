const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

require('./models/User');
require('./models/Survey');
require('./services/passport');

const keys = require('./config/keys')

mongoose.connect(keys.mongoURI)

const app = express();

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveryRoutes')(app);


if (process.env.NODE_ENV === 'production') {
    // Express will server up production assessts
    // like our main.js file
    app.use(express.static('client/build'));

    // Express will server up the index.html file
    // it is does not recognize the route
    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })

}


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Youre listening on port ${PORT}`)
}) 

// had to update npm to push to heroku correctly
