export const handleResponse = (res, statusCode, data) => {
    res.status().status(statusCode).json({status: 'Ok', data});
}