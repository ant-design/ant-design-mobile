var ghPages = require('gh-pages');
var path = require('path');
var options = {
  depth: 1,
  logger: function (message) {
    console.log(message);
  }
};
if (process.env.RUN_ENV_USER) {
  options.user = {
    name: process.env.RUN_ENV_USER,
    email: process.env.RUN_ENV_EMAIL,
  };
}
ghPages.publish(path.join(process.cwd(), '_site'), options, function (err) {
  if (err) {
    throw err;
  }
  console.log('Site has been published');
});
