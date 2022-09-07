
//need to import the getText variable from the quill textbox - is in the edit.ejs script


//queryselectors for the varying buttons to trigger crud functions



const delBtn = document.querySelectorAll('.del')

const editBtn = document.querySelectorAll('.edit')

const updateBtn = document.querySelectorAll('.updateBtn')

const submitBtn = document.querySelectorAll('.submitBtn')

const dateSearchBtn = document.querySelectorAll('.dateSearchBtn')

//todays date function to run on index.ejs for displaying todays dream

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
    dateFromJsFile =`${month}/${dateArr[2]}/${dateArr[3]}`
    return dateFromJsFile
}


//adding an event listener for the update and delete buttons on EACH dream

Array.from(delBtn).forEach(element=>{
    element.addEventListener('click',deleteDream)
})



Array.from(updateBtn).forEach(element=>{
    element.addEventListener('click',updateDreamById)
})

// ADDING  a button event listener on the homepage to be able to render dreams from a given date

Array.from(dateSearchBtn).forEach(element=>{
    element.addEventListener('click',readDate)
})


Array.from(submitBtn).forEach(element=>{
    element.addEventListener('click',createDream)
})

//due to quill not working properly with the form, need to create a function for createDream instead

async function createDream(){
    const dreamTextFromJsFile = quill.getText(0,)

        //see below a variable for storing the date and time upon submission

    let dateFromJsFile = todaysDate()
    

    
    try{
        const response = await fetch ('/journal/createDream' , {
            method:'post',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                'dream': dreamTextFromJsFile,
                'date': dateFromJsFile
            })
        })
        window.location.reload()
        window.location.href = '/journal'
        console.log(dateFromJsFile)
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