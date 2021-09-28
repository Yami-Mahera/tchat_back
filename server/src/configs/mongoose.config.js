import mongoose from 'mongoose';
import 'dotenv/config';

function mongooseConnection(cb) {
    const database = `${process.env.mongodb_uri}${process.env.database}`;
    mongoose.Promise = global.Promise;

    mongoose.connect(database);
    mongoose.connection.on('connected', () => {        
        console.log(`connected to database: ${database}`);
    });

    mongoose.connection.once('open', () => {
        cb();
    });

    mongoose.connection.on('error', () => {
        throw new Error(`unable to connect to database: ${database}`);
    });

    mongoose.connection.on('Disconnected', () => {
        throw new Error(`Disconnected to database: ${database}`);
    });
}

export default mongooseConnection;
