const mongoose = require('mongoose')

module.exports = () => {
    mongoose.set('debug', process.env.MONGO_DEBUG)
    mongoose.set('strictQuery', false);
    mongoose.Promise = global.Promise
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    mongoose.connection.on('connected', () =>  console.log(`Mongoose Connected !`))
    mongoose.connection.on('disconnected', () =>  console.log(`Mongoose Disconnected !`))
    mongoose.connection.on('error', e => console.log(`Mongoose Connection Error: ${e}`))
    process.on('SIGINT', () => mongoose.connection.close(() => process.exit(0) ))
};
