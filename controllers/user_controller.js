import { StatusCodes } from 'http-status-codes';
import { BadRequestError, UnAuthenticatedError } from '../errors/index.js';

import Student from '../models/student_model.js';
import Staff from '../models/staff_model.js';
import Alumni from  '../models/alumni_model.js';
import Partner from '../models/partner_model.js';
import Incubator from '../models/incubator_model.js';

import Login from '../models/login_model.js';

const register = async (req, res) => {

    const { type, name, email, password, gender, department, jobRole, jobTitle, partnerType, company } = req.body

    if(type == "Student"){

        if (!name || !email || !password) {
            throw new BadRequestError('please provide all values')
        }

        const userAlreadyExists = await Student.findOne({ email })
        if (userAlreadyExists) {
            throw new BadRequestError('Email already in used')
        }

        const user = await Student.create({ name, email });
        const userID = user._id
        const login = await Login.create({ userID, type, email, password });

        const token = user.createJWT()

        res.status(StatusCodes.CREATED).json({
            user: {
                id: user._id,
                email: user.email,
                name: user.name,
                type: type,
                img: user.img
            },
            token,
            location: user.name,
        })

    }else if(type == "Staff"){

        if (!name || !email || !password || !department || !jobRole) {
            throw new BadRequestError('please provide all values')
        }

        const userAlreadyExists = await Staff.findOne({ email })
        if (userAlreadyExists) {
            throw new BadRequestError('Email already in used')
        }

        const user = await Staff.create({ name, email, department, jobRole });
        const userID = user._id
        const login = await Login.create({ userID, type, email, password });

        const token = user.createJWT()

        res.status(StatusCodes.CREATED).json({
            user: {
                id: user._id,
                email: user.email,
                name: user.name,
                type: type,
                img: user.img
            },
            token,
            location: user.name,
        })



    }else if(type == "Alumni"){

        if (!name || !email || !password || !jobTitle) {
            throw new BadRequestError('please provide all values')
        }

        const userAlreadyExists = await Alumni.findOne({ email })
        if (userAlreadyExists) {
            throw new BadRequestError('Email already in used')
        }

        const user = await Alumni.create({ name, email, jobTitle });
        const userID = user._id
        const login = await Login.create({ userID, type, email, password });

        const token = user.createJWT()

        res.status(StatusCodes.CREATED).json({
            user: {
                id: user._id,
                email: user.email,
                name: user.name,
                type: type,
                img: user.img
            },
            token,
            location: user.name,
        })


    }else if(type == "Partner"){

        if (!name || !email || !password || !partnerType) {
            throw new BadRequestError('please provide all values')
        }

        const userAlreadyExists = await Partner.findOne({ email })
        if (userAlreadyExists) {
            throw new BadRequestError('Email already in used')
        }

        const user = await Partner.create({ name, email, partnerType });
        const userID = user._id
        const login = await Login.create({ userID, type, email, password });

        const token = user.createJWT()

        res.status(StatusCodes.CREATED).json({
            user: {
                id: user._id,
                email: user.email,
                name: user.name,
                type: type,
                img: user.img
            },
            token,
            location: user.name,
        })



    }else if(type == "Incubator"){

        if (!company || !email || !password) {
            throw new BadRequestError('please provide all values')
        }

        const userAlreadyExists = await Incubator.findOne({ email })
        if (userAlreadyExists) {
            throw new BadRequestError('Email already in used')
        }

        const user = await Incubator.create({ company, email });
        const userID = user._id
        const login = await Login.create({ userID, type, email, password });

        const token = user.createJWT()

        res.status(StatusCodes.CREATED).json({
            user: {
                id: user._id,
                email: user.email,
                name: user.company,
                type: type,
                img: user.img
            },
            token,
            location: user.company,
        })


    }

}






export { register }