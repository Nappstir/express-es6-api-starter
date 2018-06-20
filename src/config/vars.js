import path from 'path';
import dotenv from 'dotenv-safe';

dotenv.config({
	example: path.join(__dirname, '../../.env.example'),
	path: path.join(__dirname, '../../.env'),
});

module.exports = {
	env: process.env.NODE_ENV,
	port: process.env.PORT
};