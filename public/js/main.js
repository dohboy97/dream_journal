

const delBtn = document.querySelectorAll('.del')

const editBtn = document.querySelectorAll('.edit')

const updateBtn = document.querySelectorAll('.updateBtn')

Array.from(delBtn).forEach(element=>{
    element.addEventListener('click',deleteDream)
})




Array.from(updateBtn).forEach(element=>{
    element.addEventListener('click',updateDreamById)
})

async function updateDreamById(){
    const dreamId = this.parentNode.dataset.id
    const dreamText = document.querySelector('#dreamText').innerHTML
    console.log(dreamText)
    try{
        const response = await fetch(`/journal/edit/${dreamId}/update`, {
            method: 'put',
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