const express = require("express");
const {
  getAllUsers,
  getSingleUserById,
  deleteUser,
  updateUserData,
  createNewUser,
  getSubscriptionDetailsById,
} = require("../controllers/user-controller");
const { users } = require("../data/users.json");

const { UserModel, BookModel } = require("../models");

const router = express.Router();

//localhost:8081/users
// router.get("/", (req, res) => {
//   res.status(200).json({
//     success: true,
//     data: users,
//   });
// });
router.get("/", getAllUsers);


// router.get("/:id", (req, res) => {
//   const { id } = req.params;
//   console.log(req.params);
//   const user = users.find((each) => each.id === id);
//   if (!user) {
//     return res.status(404).json({
//       success: false,
//       message: "User Doesn't Exist !!",
//     });
//   }
//   return res.status(200).json({
//     success: true,
//     message: "User Found",
//     data: user,
//   });
// });
router.get("/:id", getSingleUserById);

// router.post("/", (req, res) => {
//   const { id, name, surname, email, subscriptionType, subscriptionDate } =
//     req.body;

//   const user = users.find((each) => each.id === id);

//   if (user) {
//     return res.status(404).json({
//       success: false,
//       message: "User With The ID Exists",
//     });
//   }

//   users.push({
//     id,
//     name,
//     surname,
//     email,
//     subscriptionType,
//     subscriptionDate,
//   });

//   return res.status(201).json({
//     success: true,
//     message: "User Added Succesfully",
//     data: users,
//   });
// });


router.post("/", createNewUser);

// router.put("/:id", (req, res) => {
//   const { id } = req.params;
//   const { data } = req.body;

//   const user = users.find((each) => each.id === id);
//   if (!user) {
//     return res.status(404).json({
//       success: false,
//       message: "User Doesn't Exist !!",
//     });
//   }
//   const updateUserData = users.map((each) => {
//     if (each.id === id) {
//       return {
//         ...each,
//         ...data,
//       };
//     }
//     return each;
//   });
//   return res.status(200).json({
//     success: true,
//     message: "User Updated !!",
//     data: updateUserData,
//   });
// });

router.put("/:id", updateUserData);

// router.delete("/:id", (req, res) => {
//   const { id } = req.params;
//   const user = users.find((each) => each.id === id);
//   if (!user) {
//     return res.status(404).json({
//       success: false,
//       message: "User Doesn't Exist !!",
//     });
//   }
//   const index = users.indexOf(user);
//   users.splice(index, 1);

//   return res
//     .status(200)
//     .json({ success: true, message: "Deleted User..", data: users });
// });

router.delete("/:id", deleteUser);

// router.get("/subscription-details/:id", (req, res) => {
//   const { id } = req.params;
//   const user = users.find((each) => each.id === id);

//   if (!user) {
//     return res.status(404).json({
//       success: false,
//       message: "User With The ID Didnt Exist",
//     });
//   }

//   const getDateInDays = (data = "") => {
//     let date;
//     if (data === "") {
//       date = new Date();
//     } else {
//       date = new Date(data);
//     }
//     let days = Math.floor(date / (1000 * 60 * 60 * 24));
//     return days;
//   };

//   const subscriptionType = (date) => {
//     if (user.subscriptionType === "Basic") {
//       date = date + 90;
//     } else if (user.subscriptionType === "Standard") {
//       date = date + 180;
//     } else if (user.subscriptionType === "Premium") {
//       date = date + 365;
//     }
//     return date;
//   };

//   let returnDate = getDateInDays(user.returnDate);
//   let currentDate = getDateInDays();
//   let subscriptionDate = getDateInDays(user.subscriptionDate);
//   let subscriptionExpiration = subscriptionType(subscriptionDate);

//   const data = {
//     ...user,
//     isSubscriptionExpired: subscriptionExpiration < currentDate,
//     daysLeftForExpiration:
//       subscriptionExpiration <= currentDate
//         ? 0
//         : subscriptionExpiration - currentDate,
//     fine:
//       returnDate < currentDate
//         ? subscriptionExpiration <= currentDate
//           ? 100
//           : 50
//         : 0,
//   };
//   return res.status(200).json({
//     success: true,
//     message: "Subscription detail for the user is: ",
//     data,
//   });
// });

router.get("/subscription-details/:id", getSubscriptionDetailsById);
module.exports = router;
