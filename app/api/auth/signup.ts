import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/user";
import { IUser } from "@/types";
import { hash } from "bcryptjs";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    connectToDatabase().catch(err => res.json(err))

    if (req.method === 'POST') {
        if(!req.body) return res.status(400).json({ error: 'Data is missing' });

        const { email, password, ...rest } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(409).json({ error: 'User already exists' });
        } else {
            if (password.length < 6) return res.status(400).json({ error: 'Password must be at least 6 characters' });
                    
            const hashedPassword = await hash(password, 12);
            
            User.create({
                email,
                password: hashedPassword,
                ...rest,
            }, (error: unknown, data: IUser) => {
                if (error && error instanceof mongoose.Error.ValidationError) {
                    
                    // mongodb will return array of errors
                    for (let field in error.errors) {
                        return res.status(409).json({ error: error.errors[field].message })
                    }
                }

                const user = {
                    _id: data._id,
                    userName: data.userName,
                    email: data.email,
                }

                return res.status(201).json({ 
                    success: true,
                    user 
                })
            })
        }
        
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}

export default handler;