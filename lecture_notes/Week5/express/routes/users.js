const express = require("express");
const router = express.Router();

// router.use(logger)

router.get("/", (req, res) => {
    console.log(req.query.name)
  res.send("User List");
});

router.get("/new", (req, res) => {
  //   res.send("User New Form");
  res.render("users/new", { firstName: "Test" });
});

router.post("/", (req, res) => {
  //   res.send("Create User");
  const isValid = true;
  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`); 
  } else {
    console.log("Error");
    res.render("users/new", { firstName: req.body.firstName });
  }
  // res.send("Hi")
});

router
  .route("/:userId")
  .get((req, res) => {
    // console.log(req.user); 
    console.log(req.user)
    res.send(`Get User With ID ${req.params.userId}`);
  })
  .put((req, res) => {
    res.send(`Update User With ID ${req.params.userId}`);
  })
  .delete((req, res) => {
    res.send(`Delete User With ID ${req.params.userId}`);
  });

// router.get("/:userId", (req, res) => {
//   res.send(`Get User With ID ${req.params.userId}`);
// });

// router.put("/:userId", (req, res) => {
//   res.send(`Update User With ID ${req.params.userId}`);
// });

// router.delete("/:userId", (req, res) => {
//   res.send(`Delete User With ID ${req.params.userId}`);
// });
const users = [{ userName: "Kyle" }, { userName: "Sally" }];
router.param("userId", (req, res, next, userId) => {
  // console.log(userId)
  req.user = users[userId];
  next();
});

module.exports = router;
