exports.contentResult = (message,data,isSuccess) => {
    return {
        "data": data,
        "isSuccess": isSuccess,
        "message": message
    }
}