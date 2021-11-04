const appCheckbox = require("../components/appCheckbox");
const appForm = require("../components/appForm");
const header = require("../components/header");

module.exports = function homePage(data) {
    return {
        type: "flex",
        direction: "col",
        spacing: 4,
        fillParent: true,
        scroll: true,
        crossAxisAlignment: "stretch",
        children: [
            header(),
            {
                type: "flex",
                direction: "col",
                crossAxisAlignment: "center",
                spacing: 2,
                padding: {
                    left: 2,
                    right: 2
                },
                children: [
                    {
                        type: "text",
                        style: "headline1",
                        value: "Bibliotheque:"
                    }
                ]
            },
            {
                type: "flex",
                direction: "col",
                crossAxisAlignment: "center",
                spacing: 2,
                padding: {
                    left: 2,
                    right: 2
                },
                children: [

                ]
            }
        ]
    }

}
