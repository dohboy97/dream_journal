const Journal = require('../models/journal')

module.exports = {
    getDream: async (req,res)=>{
        try{
            const dreamEntry = await Journal.find()
            res.render('journal.ejs', {dreams: dreamEntry})
        }catch(err){
            console.log(err)
        }
    },

    createDream: async (req,res)=>{
       
        try{
            
            await Journal.create({
                dream: req.body.dream,
                date: req.body.date,
                userId: req.user.id
                
            })
           
            console.log('created dream')
            console.log(req.body.date)
            res.redirect('/journal')
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

    
}