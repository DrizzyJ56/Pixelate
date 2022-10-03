// Your code here
const tableGrab = document.getElementById('table')

function makeRow(){
    const tr = document.createElement('tr')
    for(let i = 0; i < 20; i++){
        const td = document.createElement('td')
        tr.appendChild(td)
    }    
    tableGrab.appendChild(tr)
}
makeRow()

const addRow = document.getElementById('add-row')
addRow.addEventListener('click', makeRow)

tableGrab.addEventListener('click', colorize)

function colorize(event){
    console.log('clicked!')
}


