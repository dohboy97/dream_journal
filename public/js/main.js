const delBtn = document.querySelectorAll('.del')

Array.from(delbtn).forEach(element=>{
    element.addEventListener('click',deleteDream)
})






async function deletedream(){
    const dreamId = this.parentNode.dataset.id 
    try{
        const response = await fetch ('journal/deleteDream', {
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