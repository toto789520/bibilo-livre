const pages = require("../../ui/pages");
const _const = require("../../utils/const");


module.exports = async (data, props, event) => {
    data.page = props.page;
    return data;
}
