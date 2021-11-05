const pages = require("../../ui/pages");
const _const = require("../../utils/const");


module.exports = async (data, props, event) => {
    console.log(event)
    data.livre[data.buttonindex].pageFaite = event.value;

    return data;
}
