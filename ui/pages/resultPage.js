

module.exports = function resultPage(data) {

    return {
        type: "flex",
        direction: "col",
        scroll: true,
        spacing: 4,
        fillParent: true,
        crossAxisAlignment: "stretch",
        children: [
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

