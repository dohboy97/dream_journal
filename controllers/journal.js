const journal = require('../models/journal')

module.exports = {
    getDream: async (req,res)=>{
        try{
            const dreamEntry = await journal.find()
            res.render('journal.ejs', {dreams: dreamEntry})
        }catch(err){
            console.log(err)
        }
    },

    createDream: async (req,res)=>{
        try{
            await journal.create({dream: req.body.dreamEntry})
            //will add date functionality afterwards
            console.log('Dream has been added')
            res.redirect('/journal')
        }catch(err){
            console.log(err)
        }
    }
}