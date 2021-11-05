module.exports = function(data, props, event)
{
    console.log(props)
    delete data.livre[props.livre]
    data.page = 'homePage'
    return data
}