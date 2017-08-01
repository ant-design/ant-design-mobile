var path = require("path");
var fs = require("fs");

var rootPath = '/Users/jiangkai/github/ant-design-mobile/components';
renameFilesInDir(rootPath);

function changeFileName(filepath){
    fs.stat(filepath, function(error, stats){
        if (error) {
          cosole.error(error);
          return;
        }
        if(stats.isFile()) {
            if (filepath.includes('.jsx')) {
              fs.unlinkSync(filepath);
            }
        } else if(stats.isDirectory()) {
            renameFilesInDir(filepath);
        }
    });
}

function renameFilesInDir(dir) {
    fs.readdir(dir,function(error,files){
        if (error) {
          console.error(error);
          return;
        }
        var len = files.length;
        var file = null;
        for(var i=0; i<len; i++){
            file = files[i];
            if (!/^(\.|_)/.test(file)) {
              changeFileName(path.join(dir, file));
            }
        }
    });
}
