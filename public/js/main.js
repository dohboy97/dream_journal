
//need to import the getText variable from the quill textbox - is in the edit.ejs script


//queryselectors for the varying buttons to trigger crud functions



const delBtn = document.querySelectorAll('.del')

const editBtn = document.querySelectorAll('.edit')

const updateBtn = document.querySelectorAll('.updateBtn')

const submitBtn = document.querySelectorAll('.submitBtn')

//adding an event listener for the update and delete buttons on EACH dream

Array.from(delBtn).forEach(element=>{
    element.addEventListener('click',deleteDream)
})



Array.from(updateBtn).forEach(element=>{
    element.addEventListener('click',updateDreamById)
})

Array.from(submitBtn).forEach(element=>{
    element.addEventListener('click',createDream)
})

//due to quill not working properly with the form, need to create a function for createDream instead

async function createDream(){
    const dreamTextFromJsFile = quill.getText(0,)

    let dateFromJsFile = new Date
    dateFromJsFile = String(dateFromJsFile)

    
    try{
        const response = await fetch ('/journal/createDream' , {
            method:'post',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                dream: dreamTextFromJsFile,
                date: dateFromJsFile
            })

        })
        // const data = await response.json()
        // console.log(data)
        window.location.reload()
        window.location.href = '/journal'
        console.log(dreamTextFromJsFile)
    }catch(err){
        console.log(err)
    }

}




async function updateDreamById(){
    const dreamId = this.parentNode.dataset.id

    //grab update text with quill gettext method

    const dreamText = quill.getText(0,)
    
    try{
        const response = await fetch(`/journal/edit/${dreamId}/update`, {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'dreamIdFromJSFile':dreamId,
                'dream':dreamText
            })
        })
        const data = await response.json()
        console.log(data)
       
        window.location.reload()
        window.location.href = '/journal'
        console.log(dreamText)
    }catch(err){
        console.log(err)
    }
}

async function deleteDream(){
    const dreamId = this.parentNode.dataset.id 
    try{
        const response = await fetch ('/journal/deleteDream', {
            method:'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'dreamIdFromJSFile':dreamId 
            })
        })
        const data = await response.json()
        console.log(data)
        window.location.reload()
        window.location.href = '/journal'
    }catch(err){
        console.log(err)
    }
}