const router = require("express").Router()
const publicController = require("./../controllers/public.controller")

router
    .get("/Products", publicController.publicGetAllProduct)
    .get("/Products/:id", publicController.publicGetProductDetails)

module.exports = router