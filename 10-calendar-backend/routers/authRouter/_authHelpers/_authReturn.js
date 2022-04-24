authReturn = ( req = request, res = response ) => {
    if(req.errType){
        return res.status( req.errType.status ).json({
            ok: false,
            msg: req.errType.msg
        })
    } else {
        return res.status( 200 ).json({
            ok: true,
            token: req.token
        })
    }
}

module.exports = authReturn;