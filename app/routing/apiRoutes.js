var friends = require("../data/friends");

module.exports = function(app) {
    
    app.get("/api/friends", function(req, res) {
        return res.json(friends)
    });

    app.post("/api/friends", function(req, res) {
        // write logic here to compare new friend to friends in array
        // 2 for loops - one to loop thru each user and then another to loop thru each user's scores array property
        // while looping thru the scores array, find difference between user and new user's scores
            // then add total difference for each comparison
            // smallest total difference will be the match - identify the match via their index in the friends array
        // push new user AFTER complete comparison math
    });
}