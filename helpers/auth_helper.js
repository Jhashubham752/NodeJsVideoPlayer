module.exports={
    ensureAuthenticated: function(req,res,next){
        if(req.isAuthenticated()){
            return next()
        }else{
            req.flash("ERRORS_MESSAGES",'you are not authorized..');
            res.redirect('/auth/login',301,()=>{});
        }
    }
}