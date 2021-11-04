const _const = require("../../utils/const");
const consumptions = require("../../utils/consumptions");
const ipToContry = require("../../utils/ipToContryCode");
const traceroute = require("../../utils/traceroute");
const webistes = require("../../utils/webistes");

module.exports = async function initData() {
    return {
        page: "homePage",
        forms: {},
        errors: {},
        dataset: {}
    }
}
