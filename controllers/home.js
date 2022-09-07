const Journal = require('../models/journal')

//connecting to database to display todaysdream IF it has been filled out

module.exports = {
    getIndex:async(req,res)=>{
        res.render('index.ejs')
    }
}