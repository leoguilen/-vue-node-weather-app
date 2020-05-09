import app from './app';
import chalk from 'chalk';

require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env.development'
});

const _PORT = process.env.PORT || 3000;

app.listen(_PORT, () =>
  console.info(chalk.green('Server is Running')));
