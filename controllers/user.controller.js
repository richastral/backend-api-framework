const asyncErrors = require('../util/async-errors.util')
const UserModel = require('../models/user.model')

exports.create = asyncErrors(async (req, res, next) => {

    const { username, firstName, lastName, email, phone, userType } = req.body;

    let user

    const findUser = await UserModel.findOne({ username: username })
    if (findUser) {
        res.json({
            success: false,
            message: 'User already exists'
        })
    } else {
        user = await UserModel.create({
            username: username,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            userType: userType,

            // Standard fields
            status: 'Created',
            createdDate: new Date(),
            modifiedDate: new Date()
            
        })
        await user.save()
    }

    res.json({
        success: true,
        user
    })
})


// get user Details
exports.userDetails = asyncErrors(async (req, res, next) => {

    const user = await UserModel.findById(req.user.id)


    res.json({
        success: true,
        user,

    })

})

//Update User
exports.updateUser = asyncErrors(async (req, res, next) => {

    const newUserData = {
        name: req.body.name,
        image: req.body.image,
    }


    const user = await UserModel.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,

    })

    res.status(200).json({
        success: true,
        user
    })
})


//users length
exports.usersLength = asyncErrors(async (req, res, next) => {

    const users = await UserModel.countDocuments()

    res.status(200).json({
        success: true,
        TotalUsers: users
    })
})

//users detail
exports.userDetail = asyncErrors(async (req, res, next) => {

    const user = await UserModel.findById(req.params.id)

    res.status(200).json({
        success: true,
        user
    })
})






