
module.exports = async (data, props, event) => {
    console.log(event)
    data.livre[data.buttonindex].pageFaite = event.value;

    return data;
}
