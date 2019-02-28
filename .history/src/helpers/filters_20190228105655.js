uppercase: function (str) {
    return str.toUpperCase()
}
lowercase: function (str) {
    return str.toLowerCase()
}
capitalize: function (str) {
    str = str.toLowerCase()
    return str.charAt(0).toUpperCase() + str.slice(1);
}
capitalizeAll: function (str) {
    return str.replace(/\w\S*/g, function(str) { 
        return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()
    })
}
replaceHello: function (str) {
    return str.replace('soy un', 'Hello')
}
replaceWorld: function (str) {
    return str.replace('mensaje de prueba', 'World!')
}
export default filters();