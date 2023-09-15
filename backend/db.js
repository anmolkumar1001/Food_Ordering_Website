const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      "Database connected: ",
      connect.connection.host,
      connect.connection.name
    );

    // For fetching the data
    const fetched_data = await mongoose.connection.db.collection("fooditems");
    const data = await fetched_data.find({}).toArray();

    console.log("Fetched data:");
    console.log();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;
