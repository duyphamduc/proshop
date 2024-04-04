import e from 'express';
import asyncHandler from '../middleware/asyncHandler.js';
import Order from '../models/orderModel.js';

// @desc    Create new order
// @route   POST /api/products
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {
  res.send('addOrderItems');
});

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = asyncHandler(async (req, res) => {
  res.send('get my orders');
});

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
  res.send('get order by id');
});

// @desc    Update order to paid
// @route   GET /api/orders/:id/pay
// @access  Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send('update order to paid');
});

// @desc    Update to delivered
// @route   GET /api/orders/:id/deliver
// @access  Private/ Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send('Update order to delivered');
});

// @desc    Get all orders
// @route   GET /api/orders/:id
// @access  Private/ Admin
const getOrders = asyncHandler(async (req, res) => {
  res.send('get all orders');
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
