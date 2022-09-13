const Journal = require('../models/journal')

//connecting to database to display todaysdream IF it has been filled out

function todaysDate(){
    let dateFromJsFile = new Date

    //getting month to put into mm/dd/yyyy format
    let month = dateFromJsFile.getMonth() + 1
    month=String(month)
    if(month.length<2){
        month= '0'+month
    }
    dateFromJsFile = String(dateFromJsFile)
    let dateArr = dateFromJsFile.split(' ')
    dateFromJsFile =`${month}/${dateArr[2]}/${dateArr[3]}`
    return dateFromJsFile
}


module.exports = {
    
    
    
    getIndex:async(req,res)=>{
       
        try{
            const todaysDream = await Journal.findOne({
                date: todaysDate()
            })
            //checking to see if user is authenticated before displaying either login or logout button
            let authenticated
            if(req.isAuthenticated()){
                authenticated = true
                
            }else{
                authenticated = false
            }
        res.render('index.ejs', {dreams: todaysDream})
        }catch(err){
            console.log(err)
        }
        
    }
}