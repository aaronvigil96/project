export const handleError = (err, req, res) => {
    res.status(err.statusCode = 500).json({status: 'failed', msg:err.message});
}