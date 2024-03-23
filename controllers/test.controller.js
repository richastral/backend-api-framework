const TestModel = require('../models/test.model');
const asyncErrors = require('../util/async-errors.util')

exports.test = asyncErrors(async (req, res, next) => {
    const tests = await TestModel.find()
    res.json({
        success: true,
        tests: tests
    })

})

exports.testWithId = asyncErrors(async (req, res, next) => {
    const test = await TestModel.findById(req.params.id)
    res.json({
        success: true,
        test,

    })

})

exports.testCreate = asyncErrors(async (req, res, next) => {

    const { name } = req.body;

    let test

    const findTest = await TestModel.findOne({ test: test })
    if (findTest) {
        test = findTest
    } else {

        test = await TestModel.create({
            name: name
        })

        await test.save()
    }


    res.json({
        success: true,
        test
    })
})