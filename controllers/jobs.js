const db = require("../models");


const index = (req, res) => {
    db.Jobs.find({}, function (err, allJobs) {
        if (err) return res.send(err);
        const context = { jobs: allJobs, user: req.user };
        return res.render("jobs/index", context);
    });
};


module.exports = {
    index,
    
}