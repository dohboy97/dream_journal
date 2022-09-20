const Journal = require('../models/journal')
const User = require('../models/User')

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
    dateFromJsFile =`${month}-${dateArr[2]}-${dateArr[3]}`
    return dateFromJsFile
}


module.exports = {
    
    
    
    getHome:async(req,res)=>{
       
        try{
            let todaysDream = await Journal.findOne({
                date: todaysDate(),
                userId: req.user.id
            })
            const userName = await User.findOne({
                userName:req.user.userName
            })
            //causes error if todaysDream doesnt exist yet
            if(todaysDream){
                if(todaysDream.dream.length > 50){
                todaysDream.dream = todaysDream.dream.slice(0,50) + '...'
                }
            }
        res.render('home.ejs', {dreams: todaysDream, user:userName, date:todaysDate()})
        }catch(err){
            console.log(err)
        }
        
    }
}