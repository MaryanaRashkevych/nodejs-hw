//   import mongoose from 'mongoose';

// export const connectMongoDB = async () => {
//   try {
//     const mongoUrl = process.env.MONGODB_URL;
//     await mongoose.connect(mongoUrl);
//     console.log('✅ MongoDB connection established successfully');
//   } catch (error) {
//     console.error('❌ Failed to connect to MongoDB:', error.message);
//     process.exit(1); // аварійне завершення програми
//   }
// };
// connectMongoDB.js


// connectMongoDB.js

import mongoose from 'mongoose';

export const connectMongoDB = async () => {
  try {
    const mongoUrl = process.env.MONGODB_URL;

    // // ADD THIS LINE FOR DEBUGGING
    // console.log(`DEBUG: MONGODB_URL is: [${mongoUrl}]`);

    // if (!mongoUrl) {
    //   console.error("DEBUG: MONGODB_URL is undefined or empty. Check your .env file!");
    //   // Temporarily REMOVE the process.exit(1) to see more logs if possible
    //   // (Though it's crashing here anyway)
    //   return; // Stop execution if it's undefined
    // }

    await mongoose.connect(mongoUrl);
   console.log('✅ MongoDB connection established successfully');
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error.message);
    process.exit(1); // аварійне завершення програми
  }
};
connectMongoDB.js
