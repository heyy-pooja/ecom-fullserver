const router = require("express").Router()
const userController = require("./../controllers/user.controller")

router
    .get("/orders/:id", userController.userGetAllOrders)
    .get("/orders-details/:id", userController.userGetOrderDetails)
    .post("/order-placed", userController.userPlacedOrder)
    .put("/order-cancel/:id", userController.userCancelOrder)
    .post("/update-password/:id", userController.userUpdatePassword)

module.exports = router