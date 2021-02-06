const router = require("express").Router();
const flash = require("./flashRouter");
const userRouter = require("./userRouter");

router.use("/",flash);
router.use("/users",userRouter);


module.exports = router;
