import server from './configs/express.config';
import dbConnect from './configs/mongoose.config';
import 'dotenv/config';

dbConnect(() => {
    const svr = server.init();
    console.log('sdf');
    svr.listen(process.env.PORT, () => {
        console.log(`app started, listening on port: ${process.env.PORT}`);
    });
});
