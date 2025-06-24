
import mongoose from 'mongoose';

const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URI, {
    dbName: 'foodiespot',
  })
    .then(() => console.log("✅ MongoDB Connected Successfully")).catch((err) => console.error("❌ DB Connection Error:", err));
};

export default dbConnection;
