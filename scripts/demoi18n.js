const fs = require('fs')
const path = require('path')
const glob = require('glob')

const ROOT = path.join(__dirname, '../')

// Define the source directory
const srcDir = path.join(ROOT, 'src', 'components')

// Define the output directory
const outputDir = path.join(ROOT, '.dumi', 'theme', 'builtins', 'demosi18n')

// Find all files in the source directory
const files = glob.sync(path.join(srcDir, '**/demos/**.tsx'))
const cacheWriteFile = {}
const fileNames = {}
const useCache = false
// Extract Chinese characters from each file
files.forEach(file => {
  // 获取倒数第二个文件夹的名称
  const fileName = path.basename(path.dirname(path.dirname(file)))
  fileNames[fileName] = true
  const outputFile = path.join(outputDir, `${fileName}.json`)
  if (!cacheWriteFile[outputFile] && fs.existsSync(outputFile) && useCache) {
    cacheWriteFile[outputFile] = require(outputFile, 'utf-8')
  } else if (!cacheWriteFile[outputFile]) {
    cacheWriteFile[outputFile] = {}
  }
  let content = fs.readFileSync(file, 'utf8')
  const chineseRegex = /[\u4e00-\u9fa5]+/g
  const stringRegex = /(['"])(.*?)\1/g
  const strings = content.match(stringRegex) || []
  const words = content.match(chineseRegex) || []
  const matchWord = str => {
    const chineseMatches = str.match(chineseRegex)
    // Remove single quotes
    const cleanedStr = str.replace(/['"]/g, '')
    if (chineseMatches) {
      if (!cacheWriteFile[outputFile][cleanedStr]) {
        cacheWriteFile[outputFile][cleanedStr] = ''
      }
    }
    // Remove the matched characters from the original string
    content = content.replace(str, '')
  }
  ;[...strings, ...words].sort((a, b) => b.length - a.length).forEach(matchWord)
})
Object.keys(cacheWriteFile).forEach(file => {
  fs.writeFileSync(file, JSON.stringify(cacheWriteFile[file], null, 2), 'utf-8')
  // Write to the output file
  console.log('Written to', file)
})

// fileNames
// const content =
// fs.writeFileSync(file, JSON.stringify(cacheWriteFile[file], null, 2), 'utf-8');

// console.log('Written to', file);
