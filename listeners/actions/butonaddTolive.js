const pages = require("../../ui/pages");
const _const = require("../../utils/const");


module.exports = async (data, props, event) => {
    console.log(data)
    data.livre.push(data.formulaire.nom)
    data.page = 'homePage'
    console.log(data)
    return data;
}
