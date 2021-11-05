
module.exports = async (data, props, event) => {
    data.page = props.page;
    return data;
}
