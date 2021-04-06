const path = require("path");
const router = require("express").Router();
const usersRoutes = require("./users");
const tripsRoutes = require("./trips");
const expensesRoutes = require("./expenses");
const activitiesRoutes = require("./activities");
const photosRoutes = require("./photos");
// const authRoutes = require("./auth")
const { signup, signin, signout, checkauth } = require('../../controllers/auth');

// Book routes
router.use("/users", usersRoutes);
router.use("/trips", tripsRoutes);
router.use("/expenses", expensesRoutes);
router.use("/activities", activitiesRoutes);
router.use("/photos", photosRoutes);
// router.use("/auth", authRoutes);
// ------------ Auth Routes -----------------------
router.post('/signup', signup);
router.post('/signin', signin);
router.get('/signout', signout);
router.get('/checkauth', checkauth);



router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });
module.exports = router;
