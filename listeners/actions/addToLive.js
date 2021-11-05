
module.exports = async (data, props, event) => {
    console.log(event)
    data.formulaire.nom = event.value;
    return data;
}
