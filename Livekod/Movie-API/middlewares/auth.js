const authenticate = (req, res, next) => {
    if(global.currentUser){
        next();
    } else {
        res.status(401).json({
            success: false,
            message: 'Unauthorized',
            status: 401
        })
    }
}

export default authenticate;