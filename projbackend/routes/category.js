const express = require("express");
const router = express.Router();

const {
  getCategoryById,
  createCategory,
  getCategory,
  getAllCategory,
  updateCategory,
  removeCategory,
} = require("../controllers/category");
const { isAuthenticated, isAdmin, isSignedIn } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

// Params
router.param("userId", getUserById);
router.param("categoryId", getCategoryById);

// Actual routes
// Create routes
router.post(
  "/category/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin, // Order of controllers are important, as they are middlewares
  createCategory
);

// Read Routes
router.get("/category/:categoryId", getCategory);
router.get("/categories", getAllCategory);

// Update Routes
router.put(
  "/category/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin, // Order of controllers are important, as they are middlewares
  updateCategory
);

// Delete Routes
router.delete(
  "/category/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin, // Order of controllers are important, as they are middlewares
  removeCategory
);

module.exports = router;
