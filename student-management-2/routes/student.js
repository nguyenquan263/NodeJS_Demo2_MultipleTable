var express = require("express");
var router = express.Router();
var model = require("../models/index");

router.get("/", function (req, res, next) {
    return model.student.findAll({})
        .then(students => res.json({
            error: 0,
            message: "This is the list of student.",
            data: students
        }))
        .catch(err => res.json({
            error: 1,
            message: err.toString(),
            data: null
        }));
});

router.post("/", function (req, res, next) {
    return model.student.create({
        student_code: req.body.student_code,
        full_name: req.body.full_name,
        dob: req.body.dob,
        address: req.body.address,
        specialization_id: req.body.specialization_id
    })
        .then(stu => res.json({
            error: 0,
            message: "Adding a student successfully.",
            data: stu
        }))
        .catch(error => res.json({
            error: 1,
            message: error.toString(),
            data: null
        }));
});

router.put("/:id", function (req, res, next) {
    return model.student.update({
        student_code: req.body.student_code,
        full_name: req.body.full_name,
        dob: req.body.dob,
        address: req.body.address
    }, {
        where: {
            id: req.params.id
        }
    })
        .then(res.json({
            error: 0,
            message: "Updating this student successfully.",
            data: null
        }))
        .catch(error => res.json({
            error: 1,
            message: error.toString(),
            data: null
        }));
});

router.delete("/:id", function (req, res, next) {
    return model.student.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(res.json({
            error: 0,
            message: "Deleting this student successfully.",
            data: null
        }))
        .catch(error => res.json({
            error: 1,
            message: error.toString(),
            data: null
        }));
});

router.get("/specializationID/:id", function (req, res, next) {
    return model.student.findAll({
        where: {
            specialization_id: req.params.id
        }
    })
        .then(stus => res.json({
            error: 0,
            message: "This is students who are following this specialization.",
            data: stus
        }))
        .catch(error => res.json({
            error: 1,
            message: error.toString(),
            data: null
        }));
});

module.exports = router;