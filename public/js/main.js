

const delBtn = document.querySelectorAll('.del')

const editBtn = document.querySelectorAll('.edit')

Array.from(delBtn).forEach(element=>{
    element.addEventListener('click',deleteDream)
})

Array.from(editBtn).forEach(element=>{
    element.addEventListener('click',editDream)
})



// async function editDream(){
//     const dreamID = this.parentNode.dataset.id
//     try{
//         const response = await fetch(`/journal/edit/${dreamID}`,{
//             method:'put',
            
//         })
//         const data = await response.json()
//         console.log(data)
     
//     }catch(err){
//         console.log(err)
//     }
// }


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