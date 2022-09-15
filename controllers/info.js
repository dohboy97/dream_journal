const Journal = require('../models/journal')

module.exports = {
    
    
    
    getInfo:async(req,res)=>{
       
        try{
            
            //checking to see if user is authenticated before displaying either login or logout button
            let authenticated
            if(req.isAuthenticated()){
                authenticated = true
                
            }else{
                authenticated = false
            }
        res.render('info.ejs', {authentic: authenticated})
        }catch(err){
            console.log(err)
        }
        
    }
}