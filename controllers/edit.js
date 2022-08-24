const Journal = require('../models/journal')

module.exports = {
    

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
        console.log(req)
    }
}