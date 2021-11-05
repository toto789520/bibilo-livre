const pages = require("../../ui/pages")
const _const = require("../../utils/const")
const fs = require('fs')
const request = require('request')
const { v4: uuidv4 } = require('uuid');

const download = (url, path, callback) => {
    console.log(fs.readdirSync('/home/app/application/resources/'))
    request.head(url, (err, res, body) => {
        request(url)
        .pipe(fs.createWriteStream(path))
        .on('close', callback)
    })
}

module.exports = async (data, props, event) => {
    const id = uuidv4()
    const url = `${data.formulaire.cdlien}`
    const path = `${id}.png`

    data.livre.push({
        name: data.formulaire.nom,
        page: data.formulaire.cdPage,
        lien: path,
        pageFaite: 0
    })
    data.page = 'homePage'

    download(url, `/home/app/application/resources/${path}`, () => {
        console.log('✅ Done!')
    })
    console.log(data)
    return data;
}
