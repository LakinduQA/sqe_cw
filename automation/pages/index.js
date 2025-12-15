/**
 * Page Objects Index
 * Central export for all page objects
 *
 * SQE Coursework - Lakindu De Silva
 */

const { BasePage } = require("./BasePage");
const { RegisterPage } = require("./RegisterPage");
const { LoginPage } = require("./LoginPage");
const { ProductPage } = require("./ProductPage");
const { CartPage } = require("./CartPage");
const { CheckoutPage } = require("./CheckoutPage");

module.exports = {
  BasePage,
  RegisterPage,
  LoginPage,
  ProductPage,
  CartPage,
  CheckoutPage,
};
