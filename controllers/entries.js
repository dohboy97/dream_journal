const Journal = require('../models/journal')

module.exports = {
    getDream: async (req,res)=>{
        try{
            const dreamEntry = await Journal.find({userId:req.user.id})
            res.render('entries.ejs', {dreams: dreamEntry,})
            //to then in ejs filter so that only this specific user's messages are displayed
        }catch(err){
            console.log(err)
        }
    },

    deleteDream: async (req,res)=>{
        console.log(req.body.dreamIdFromJSFile)
        try{
            await Journal.findOneAndDelete({_id: req.body.dreamIdFromJSFile})
            console.log('Deleted Dream')
            res.json('Deleted it')
        }catch(err){
        console.log(err)
        } 
    },

    getDreamByDate: async (req,res)=>{
        console.log(req.body.dreamDateFromJsFile)
    }
}