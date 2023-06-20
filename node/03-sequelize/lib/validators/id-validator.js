const idValidator = (id, res) => {
    id = parseInt(id)
    if (isNaN(id)) {
        res.send({
            message: 'Please pass a valid id'
        })
        return false
    }
    return true
}

module.exports = idValidator