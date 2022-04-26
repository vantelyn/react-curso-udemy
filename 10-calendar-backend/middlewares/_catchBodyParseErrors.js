
const catchBodyParseErrors = (err, req, res, next) => {
    if (err) {
        res.status(400).send('error parsing data')
    } else {
        next()
    }
}

module.exports = catchBodyParseErrors;