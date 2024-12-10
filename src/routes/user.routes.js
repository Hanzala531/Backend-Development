import express from 'express';
import { registerUser } from '../controllers/user.controllers.js'; // Correct the path

const userRouter = express.Router();

// userRouter.route('/register').post(registerUser);
// If you want to add a login route, you can uncomment the following line
// userRouter.route('/login').post(registerUser);
userRouter.route('/register').post((req, res, next) => {
    console.log('Received request at /register');
    next();
}, registerUser);
export { userRouter };