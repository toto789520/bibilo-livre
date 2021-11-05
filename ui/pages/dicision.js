

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
                type: 'button',
                text: 'surprimé',
                mainStyle: 'secondary',
                onPressed:{
                    action: 'diletdicision',
                    props:{
                        livre: data.buttonindex
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
                        value: `nom du live: ${data.buttonlivre.name}`
                    }
                ]
            },
            {
                type: "flex",
                crossAxisAlignment: "center",
                direction: "col",
                children: [
                    {
                        type: 'text',
                        value: `nombre de page: ${data.livre[data.buttonindex].page}`
                    },
                    {
                        type: 'image',
                        path: data.livre[data.buttonindex].lien
                    },
                ]
            },
            {
                type: 'textfield',
                value: `${data.livre[data.buttonindex].pageFaite}`,
                hintText: 'les page fait',
                label: 'nobre de page faite',
                onChanged: {
                    action: 'addTopagefaite'
                }
            },
            {
                type: "flex",
                crossAxisAlignment: "center",
                direction: "col",
                children: [
                    {
                        type: 'text',
                        value: `nombre de page restantes: ${data.livre[data.buttonindex].page - data.livre[data.buttonindex].pageFaite}`
                    }
                ]
            }
        ]
    }
}