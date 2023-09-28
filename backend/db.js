const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://anmolkumar6943:anmol123@anmolcluster1.vhobohe.mongodb.net/food?retryWrites=true&w=majority";

const mongoDB = async () => {
  await mongoose.connect(mongoURI, { useNewUrlParser: true });

  const fetched_data = await mongoose.connection.db
    .collection("fooditems")
    .find({})
    .toArray();

  const foodCat = await mongoose.connection.db
    .collection("foodCategory")
    .find({})
    .toArray();

  global.fooditems = fetched_data;
  global.foodCategory = foodCat;
  console.log();
  // console.log("Connected");
};

module.exports = mongoDB;

// const mongoose = require("mongoose");

// const connectDb = async () => {
//   try {
//     await mongoose.connect(process.env.CONNECTION_STRING, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Database connected");

//     const fetched_data = await mongoose.connection.db.collection("fooditems");
//     const data = await fetched_data.find({}).toArray();

//     const foodCategory = await mongoose.connection.db.collection(
//       "foodCategory"
//     );
//     const catData = await foodCategory.find({}).toArray();

//     global.fooditems = data;
//     global.foodCategory = catData;

//     return true; // Database connection and data fetching succeeded
//   } catch (err) {
//     console.error(err);
//     return false; // Database connection or data fetching failed
//   }
// };

// module.exports = connectDb;
