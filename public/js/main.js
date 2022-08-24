

const delBtn = document.querySelectorAll('.del')

Array.from(delBtn).forEach(element=>{
    element.addEventListener('click',deleteDream)
})






async function deleteDream(){
    const dreamId = this.parentNode.dataset.id 
    try{
        const response = await fetch (__dirname + '/journal/deleteDream', {
            method:'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'dreamIdFromJSFile':dreamId 
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}