const cron = require('node-cron');

cron.schedule('*/5 * * * * *', () => {
  console.log('Helloooooooooo, Good Morning!!!');
});