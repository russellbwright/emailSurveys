const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middleware/requireCredits')

module.exports = app => {
    app.post('/api/surveys', requireLogin, requireCredits, (req,res) => {
       const { title, subject, body, recipients } = req.body;
    })
};