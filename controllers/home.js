const Journal = require('../models/journal')

//connecting to database to display todaysdream IF it has been filled out

module.exports = {
    getIndex:async(req,res)=>{
        try{
            const todaysDream = await Journal.find()
        res.render('index.ejs'), {dreams: todaysDream}
        }catch(err){
            console.log(err)
        }
    }
}