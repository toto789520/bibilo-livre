
module.exports = function addPage(data) {
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
                crossAxisAlignment: "center",
                direction: "col",
                children: [
                    {
                    type: 'textfield',
                    value: '',
                    hintText: 'Mon livre',
                    label: 'Nom du livre',
                    onChanged: {
                         action: 'addToLive'
                    }
                    },
                {
                    type: 'textfield',
                    value: '',
                    hintText: 'les page',
                    label: 'nobre',
                    onChanged: {
                        action: 'addTopage'
                    }
                },
                {
                    type: 'textfield',
                    value: '',
                    hintText: 'lien pour des image',
                    label: 'lien image',
                    onChanged: {
                        action: 'imagelien'
                    }
                },
                {
                    type: 'button',
                    text: '+ ajouté un live',
                    onPressed: {
                        action: 'butonaddToLive'
                    }

                },
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
               
                ]
            }
        ]
    }
}