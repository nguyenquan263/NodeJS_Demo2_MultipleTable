var express = require("express");
var router = express.Router();
var model = require("../models/index");

router.get("/", function (req, res, next) {
    return model.specialization.findAll({})
        .then(specs => res.json({
            error: 0,
            message: "This is the list of specialization.",
            data: specs
        }))
        .catch(err => res.json({
            error: 1,
            message: err.toString(),
            data: null
        }));
});

router.post("/", function (req, res, next) {
    return model.specialization.create({
        code: req.body.code,
        name: req.body.name,
        total_credit: req.body.total_credit
    })
        .then(spec => res.json({
            error: 0,
            message: "Adding a new specialization successfully.",
            data: spec
        }))
        .catch(err => res.json({
            error: 1,
            message: err.toString(),
            data: null
        }));
});

router.put("/:id", function (req, res, next) {
    return model.specialization.update({
        code: req.body.code,
        name: req.body.name,
        total_credit: req.body.total_credit
    }, {
        where: {
            id: req.params.id
        }

    })
        .then(res.json({
            error: 0,
            message: "Updating this specialization successfully.",
            data: null
        }))
        .catch(error => res.json({
            error: 1,
            message: error.toString(),
            data: null
        }));
})

router.delete("/:id", function (req, res, next) {
    return model.specialization.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(res.json({
            error: 0,
            message: "Deleting this specialization successfully.",
            data: null
        }))
        .catch(error => res.json({
            error: 1,
            message: error.toString(),
            data: null
        }));
});

module.exports = router;