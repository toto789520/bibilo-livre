
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
                    type: 'button',
                    text: '+ ajouté un live',
                    onPressed: {
                        action: 'butonaddToLive'
                    }

                }
                ]
            }
        ]
    }
}