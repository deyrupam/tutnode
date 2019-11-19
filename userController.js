User = require('./userModel');


exports.index=function(req, res) {
    User.get(function (err, users) {
      if (err) {
        res.json({
            status: "error",
            message: err,
        });
      }
      res.json({
        status: "success",
        message: "User retrieved successfully",
        data: users
    });
  console.log('sdasdasdasd');
  });
  }
  
exports.new =function(req, res) {
      var user = new User();
      user.email = req.body.email ? req.body.email : user.email;
      user.password = req.body.password;
  // save the contact and check for errors
      user.save(function (err) {
          // if (err)
          //     res.json(err);
  res.json({
              message: 'New user created!',
              data: user
          });
      });
  };
  


