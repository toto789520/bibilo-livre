
module.exports = async (data, props, event) => {
    console.log(event)
    data.formulaire.cdPage = event.value;
    return data;
}
