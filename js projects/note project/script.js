const addNotes = document.getElementById("addNotes");


const addNewNotes = (text = '') => {

    const note = document.createElement('div');
    note.classList.add("notes");

    const htmlData = `
    <div class="operation">
    <span>
        <button class="edit"><i class="fa-regular fa-pen-to-square"></i></button>
        <button class="delete"><i class="fa-solid fa-trash"></i></button>
    </span>
    <div class="main ${text ? "" : "hidden"}" ></div>
    <textarea class = " ${text ? "hidden": ""}" ></textarea>`;

    note.insertAdjacentHTML("afterbegin",htmlData);

    const editNote = note.querySelector('.edit'); 
    const deleteNote = note.querySelector('.delete');
    const mainDiv = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    //delete
    deleteNote.addEventListener('click',()=> note.remove())

    //toggle using edit
    editNote.addEventListener('click', ()=>{
        mainDiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })

    textArea.addEventListener('change',(event)=>{
        const value = event.target.value;
        mainDiv.innerHTML = value;
    })

    document.getElementById("noteSection").appendChild(note);
}

addNotes.addEventListener('click', () => addNewNotes());