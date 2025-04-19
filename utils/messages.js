const moment = require('moment');

function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().format('h:mm a') // gio, phut,am/pm
  }
}
// Common module
module.exports = formatMessage;
// ES module, thì làm sao???
