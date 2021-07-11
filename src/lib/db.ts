import mongoose from 'mongoose';
import dotenv from 'dotenv';

import {Logger} from '../helpers/Logger';

dotenv.config();

const connectDB = async ( ) => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    Logger.info(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    Logger.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
