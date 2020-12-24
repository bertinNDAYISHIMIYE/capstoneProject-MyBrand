import Users from '../models/users';
import { hashPassword } from '../helper/hash';
import jwt from 'jsonwebtoken';



export class usercontrollers{
 
static createAccount = async (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };
    try {
        const existUser = await Users.findOne({ email: user.email });

        if (existUser) return res.json({ err: 'User exist' }).status(400);
        const newPassword = await hashPassword(user.password);

        const newUser = new Users({
            name: user.name,
            email: user.email,
            password: newPassword
        });

        const savedUser = await newUser.save();

        res.status(201).json(savedUser);
    } catch (error) {
        res.json(error.message).status(400);
    }
};
static deleteUser = async (req, res) => {
    try {
        let { id } = req.params;
        const existUser = await Users.find({ _id: id });

        if (existUser.length) {
            const deletedUser = await Users.deleteOne({ _id: id });

            res.json({ status: 200, 'Deleted user': existUser });
        }
        else {
            res.json('user not found').status(404);
        }
    } catch (error) {
        throw new Error(error)
    }
}


static getUsers = async (req, res) => {
    try {
        const users = await Users.find();
        if(!users){
            res.status(404).json({
                status: 404,
                message: "users not found!"
            })
        }else{
        res.json({ users: users }).status(200);
    }
    } catch (error) {
        res.json(error).status(400);
    }
};


static login = async (req, res) => {
    try {
        const user = { email: req.body.email, password: req.body.password }
        jwt.sign({ user: user }, process.env.SECRETKEY, (error, token) => {
            res.status(200).json({ token });
        })
    } catch (error) {
        return res.json(error.message).status(500);
    }
};
}