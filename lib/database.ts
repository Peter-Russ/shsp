import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('connected to db');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI as string, {
        dbName: "test" as string,
    });

    isConnected = true;
    console.log('connected to db');

  } catch (error) {
    console.log(error);
  }

}