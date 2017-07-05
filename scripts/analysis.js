/* eslint-disable */
var fs = require('fs');
var path = require('path');
var analysisDir = path.join(__dirname,'../ant-design-analysis');

if(fs.existsSync(analysisDir)) {

  console.log('generate versions.json for antd-mobile');

  fs.readdir(analysisDir, function (err, files) {
    var versions = [];
    files.forEach(function (file) {
      var mobileStats = file.match(/^antd-mobile@(.*).html$/);
      if (mobileStats && mobileStats.length) {
        versions.push(mobileStats[1]);
      }
    });
    fs.writeFileSync(path.join(analysisDir, 'antd-mobile-versions.json'), JSON.stringify(versions));
  });
}
