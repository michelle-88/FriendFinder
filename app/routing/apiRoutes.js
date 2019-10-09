var friends = require("../data/friends");

module.exports = function(app) {
    
    app.get("/api/friends", function(req, res) {
        return res.json(friends)
    });

    app.post("/api/friends", function(req, res) {

        var newFriend = req.body;

        console.log(newFriend);

        var newFriendScores = req.body.scores;      

        const add = (a, b) => a + b;        

        for(var i = 0; i < friends.length; i++) {
            let friendScores = friends[i].scores;

            let diffArray = [];

            for(var j = 0; j < friendScores.length; j++) {
                let diff = Math.abs(friendScores[j] - parseInt(newFriendScores[j]));
                diffArray.push(diff);
            }

            let totalDifference = diffArray.reduce(add)

            friends[i].totalDifference = totalDifference;
        }

        console.log(friends);
        
        var findMatchArr = []

        for(var i = 0; i < friends.length; i++) {
            findMatchArr.push(friends[i].totalDifference);
        }
        
        var index = 0; 
        var value = findMatchArr[0];
        for(var i = 1; i < findMatchArr.length; i++) {
            if(findMatchArr[i] < value) {
                value = findMatchArr[i];
                index = i;
            }
        }
        
        console.log(value, index)

        res.json(friends[index]);

        friends.push(newFriend);




        // return res.json(friends[0])
        // write logic here to compare new friend to friends in array
        // 2 for loops - one to loop thru each user and then another to loop thru each user's scores array property
        // while looping thru the scores array, find difference between user and new user's scores
            // then add total difference for each comparison
            // smallest total difference will be the match - identify the match via their index in the friends array
        // push new user AFTER complete comparison math
    });
}