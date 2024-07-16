const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

// Function to generate a random secret key
const generateSecretKey = () => {
  return crypto.randomBytes(64).toString('hex');
};

// Generate keys
const JWT_SECRET = generateSecretKey();
// const JWT_EMAIL_CONFIRMATION_KEY = generateSecretKey();
// const JWT_RESET_FORGOTTEN_PASSWORD_KEY = generateSecretKey();

// Prepare the content for the .env file
const envContent = `
JWT_SECRET=${JWT_SECRET}
`;

// Write the content to the .env file
fs.writeFileSync(path.join(__dirname, '.env'), envContent.trim(), { encoding: 'utf8' });

console.log('JWT secret keys have been generated and stored in .env file');
