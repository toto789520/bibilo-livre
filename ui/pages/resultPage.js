const printConso = require("../../utils/printConso");
const header = require("../components/header");
const cityHops = require("../components/cityHops");
const cityHop = require("../components/cityHop");
const appSelectButtons = require("../components/appSelectButtons");
const map = require("../components/map");

module.exports = function resultPage(data) {

    return {
        type: "flex",
        direction: "col",
        scroll: true,
        spacing: 4,
        fillParent: true,
        crossAxisAlignment: "stretch",
        children: [
            header(),
            {
                type: "flex",
                direction: "col",
                spacing: 5,
                crossAxisAlignment: "center",
                children: [
                    {
                        type: "flex",
                        direction: "col",
                        spacing: 2,
                        crossAxisAlignment: "center",
                        children: [
                        ]
                    },
                    {
                        type: "flex",
                        direction: "col",
                        crossAxisAlignment: "center",
                        spacing: 2,
                        children: [

                        ]
                    }
                ]
            }
        ]
    }
}

