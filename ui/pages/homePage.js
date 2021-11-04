

module.exports = function homePage(data) {
    return {
        type: "flex",
        direction: "col",
        spacing: 4,
        fillParent: true,
        scroll: true,
        crossAxisAlignment: "stretch",
        children: [
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
                }, //créun  boution avec le non du live
                children: data.livre.map(livre => {
                    return {
                        type: 'button',
                        text: `${livre}`,
                        onPressed: {
                            action: 'adddicision',
                            props: {
                                livre: livre
                            }
                        }

                    }
                })
            },
            {
                type: "flex",
                direction: "col",
                crossAxisAlignment: "center",
                spacing: 2,
                padding: {
                    left: 2,
                    right: 2},
                children: [
                    {
                    type: 'button',
                    text: '+ ajouté un live',
                    onPressed: {
                        action: `NavigateTo`,
                        props: {
                            page: 'addpage'
                        } 
                    }
                }]}
            ]
        }

    }
