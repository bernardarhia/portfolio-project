const createError = (status, msg = 'An Error Occur') => {
    const error = new Error(msg)
    error.status = status
    return error
}


module.exports = {
    createError
}