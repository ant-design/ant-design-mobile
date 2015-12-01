var Gulp = require('gulp');
var SSH = require('gulp-ssh');
var Path = require('path');

// global variables
var rootPath = process.cwd();
var sitePath = Path.join(rootPath, './_site');

console.log(sitePath);
// deploy to server
Gulp.task('deploy', function() {
  var config = {
    host : 'antui.alipay.net',
    port : 22,
    username : 'admin',
    password : 'alipay_ali88'
  };
  var ssh = new SSH({
    ignoreErrors : false,
    sshConfig : config
  });
  return Gulp.src([sitePath + '/**/*']).pipe(ssh.dest('/var/www/html/ant-mobile/site/'));
});

// default task
Gulp.task('default', ['deploy']);
