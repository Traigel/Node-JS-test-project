const fs = require('fs')

exports.readJsonFromFile = (filePath) => {
  return new Promise((res, rej) => {
    fs.readFile(filePath, (err, buf) => {
      if (err) rej(err)
      else res(JSON.parse(buf.toString()))
    })
  })
}

exports.writeJsonToFile = (filePath, data) => {
  return new Promise( (res, rej) => {
    fs.writeFile(filePath, JSON.stringify(data), err => {
      if (err) rej(err)
      else res()
    })
  })
}