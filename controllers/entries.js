const Journal = require('../models/journal')
const journal = require('./journal')

module.exports = {
    getDream: async (req,res)=>{
        try{

            //count for pagination
            let count = await Journal.countDocuments({userId:req.user.id})

            let perPage = 10
            let page = req.params.page || 1

            //trying to sort the entries by date for renderig in the log

            const dreamEntry = await Journal.find({userId:req.user.id}).sort({date:-1}).skip((perPage * page) - perPage)
            .limit(perPage)

            //const dreamEntry = await Journal.find({userId:req.user.id}).skip((perPage * page) - perPage)
            //.limit(perPage)

            res.render('entries.ejs', {dreams: dreamEntry,
            dreamsByDate: false,
            current: page,
            pages: Math.ceil(count / perPage)})
        
                console.log(page)
                console.log(Math.ceil(count / perPage))
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
        try{
            const dreamEntriesByDate = await Journal.find({
                date: req.params.date,
                userId:req.user.id
            })
            res.render('entries.ejs', {dreamsByDate: true,
            dreams: dreamEntriesByDate})
            let date = req.params.date
            
            // res.redirect(`/journal/entries/${date}`)
        }catch(err){
            console.log(err)
        }
    }
}