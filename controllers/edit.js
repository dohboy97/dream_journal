const Journal = require('../models/journal')

module.exports = {
    

    deleteDream: async (req,res)=>{
        console.log(req.body.dreamIdFromJSFile)
        try{
            await Journal.findOneAndDelete({_id: req.body.dreamIdFromJSFile})
            console.log('Deleted Dream')
            res.redirect('/journal')
            
        }catch(err){
        console.log(err)
        } 
        
    },

    getDreamById: async(req,res)=>{
        
        try{
            const dreamEntry = await Journal.findOne({
                _id: req.params.id
            })
            console.log(dreamEntry)
            res.render('edit.ejs', {dreams:dreamEntry})
            
        }catch(err){
            console.log(err)
        }
    },

    updateDreamById: async (req,res)=>{
        console.log(req.body.dreamIdFromJSFile)
        try{
            await Journal.findByIdAndUpdate({_id: req.body.dreamIdFromJSFile},{
                dream:dreamText
            })
            console.log(dreamText)
            console.log('Dream Updated')
            res.json('Dream updated')
        }catch(err){
            console.log(err)
        }
        
    }
}