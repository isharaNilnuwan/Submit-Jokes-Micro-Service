const express = require('express');

const validApiKeys = [
  process.env.CLIENT_API_KEY
];

const validateApiKey = (req, res, next) => {
    const apiKey = req.header('Authorization');
    if (!apiKey || !apiKey.startsWith('ApiKey ') || !validApiKeys.includes(apiKey.split(' ')[1])) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
  };

  module.exports = validateApiKey;