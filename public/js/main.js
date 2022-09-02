
//need to import the getText variable from the quill textbox - is in the edit.ejs script


//queryselectors for the varying buttons to trigger crud functions



const delBtn = document.querySelectorAll('.del')

const editBtn = document.querySelectorAll('.edit')

const updateBtn = document.querySelectorAll('.updateBtn')

//adding an event listener for the update and delete buttons on EACH dream

Array.from(delBtn).forEach(element=>{
    element.addEventListener('click',deleteDream)
})



Array.from(updateBtn).forEach(element=>{
    element.addEventListener('click',updateDreamById)
})

async function updateDreamById(){
    const dreamId = this.parentNode.dataset.id

    //grab via parentnode and childnode as queryselector not working

    const dreamText = document.getElementsByClassName('ql-editor').childNode.value
    
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