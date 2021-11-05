const fs = require('fs')

module.exports = function(data, props, event)
{
    console.log(props)
    fs.unlink(`/home/app/application/resources/${data.livre[props.livre].lien}`)
    delete data.livre[props.livre]
    data.page = 'homePage'
    return data
}
