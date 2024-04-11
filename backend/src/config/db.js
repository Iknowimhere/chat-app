const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGO_URI)
  .then((connection) => {
    console.log(`db connected on ${connection.connection.host}`);
  })
  .catch((err) => {
    console.log(err.message);
    process.exit();
  });
