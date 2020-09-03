module.exports = params => {
    return {
        "message": "Ano invalido!",
        "helper": `Só será aceitos ano entre 2001 e ${new Date().getFullYear()}`
        ,"params": params
    }
}