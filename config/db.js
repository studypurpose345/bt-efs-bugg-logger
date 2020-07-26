const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const con = await mongoose.connect('YOUR_MONGO_URI', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
