var mongoose = require("mongoose")

var connect = function(cb) {
  mongoose.connect('mongodb://' + process.env.DATABASE_HOST + ':27017/userdb', {
    user: 'root', 
    pass: '12345678',
    ssl: true
  }, function(err) {
    if (err) {
      console.error('**Could not connect to MongoDB. Please ensure mongod is running and restart MEAN app.**');
      setTimeout(function() {
        connect(cb)
      }, 2000)
      return 
    }
    cb(null)
  })
}

connect(function(err, d) {
  console.log('connnected..')
})