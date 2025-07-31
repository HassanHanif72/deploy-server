const mongoose = require('mongoose');

async function connectDB() {
    await mongoose.connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.o4npf4k.mongodb.net/Saylani`);
}
module.exports = {
    connectDB
}
