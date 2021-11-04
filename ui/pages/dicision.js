

module.exports = function dicision(data) {
    return {
        type: "flex",
        direction: "col",
        spacing: 4,
        fillParent: true,
        scroll: true,
        crossAxisAlignment: "stretch",
        children: [
            {
                type: 'button',
                text: 'retour',
                onPressed:{
                    action: 'NavigateTo',
                    props:{
                        page: 'homePage'
                    }
                }
            },
            {
                type: "flex",
                crossAxisAlignment: "center",
                direction: "col",
                children: [
                    {
                        type: 'text',
                        value: `nom du live: ${data.buttonlivre}`
                    }
                ]
            }
        ]
    }
}