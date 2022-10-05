const express = require("express");
const router = express.Router();
const { urlController } = require("../controllers");
const { urlValidation } = require("../validators");
const { body, param, validationResult } = require('express-validator');

router.route("/").get(urlController.getUrls);

/* Example with route /:name in longer version
    router.route("/:name").get(
        param('name').isLength({min: 5}),
        (req, res, next) => {
            const error = validationResult(req);
            if(!error.isEmpty()) {
                return res.status(400).json({errors: error.array()});
            }
            next();
        },
        urlController.getUrlByName);*/

// Example with route /:name in shorter version

router.route("/:nama").get(urlValidation.getUrlByName, urlController.getUrlByName);
router.route("/:email/:telpon").get(urlValidation.getUrlByPhoneEmail, urlController.getUrlByPhoneEmail);
router.route("/insert").post(urlValidation.insertUrl, urlController.insertUrl);
router.route("/insertBulk").post(urlValidation.insertBulkUser, urlController.insertBulkUser);
router.route("/delete").delete(urlValidation.deleteUrl, urlController.deleteUrl);
router.route("/update").patch(urlValidation.updateUrl, urlController.updateUrl);


module.exports = router;