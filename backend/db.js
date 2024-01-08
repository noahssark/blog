// connect to database

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://noahssark:noahssark@cluster0.yfali.mongodb.net/blog?retryWrites=true&w=majority', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
}).then(() => {
    console.log('Database sucessfully connected')
},
    (err) => {
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
    }
);

module.exports = mongoose;