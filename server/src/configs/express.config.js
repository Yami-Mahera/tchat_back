import express from 'express';
import bodyParser from 'body-parser';
import routes from '../routes';
import cors from 'cors';
import cookieParser from 'cookie-parser';

class App {

    constructor () {
        this.app = express();
    }

    init() {
        this.initMiddlewares();
        this.initRoutes();
        return this.app;
    }

    initMiddlewares() {
        this.app.use(cors())
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cookieParser());
    }

    initRoutes() {
        this.app.use('/api', routes);
    }
}

export default new App();
