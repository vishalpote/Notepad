const add=document.querySelector("#btn")
const main=document.querySelector("#main")
const savenotes=()=>{
    const notes=document.querySelectorAll(".note textarea");
    console.log(notes);
    const data=[];
    notes.forEach((note)=>
    {
        data.push(note.value);
    });
    // console.log(data);
    localStorage.setItem("notes",JSON.stringify(data));

}
add.addEventListener(
    "click",
    function()
    {
        addnote()
    }
)

const addnote=(text="")=>
{
    const note=document.createElement("div");
    note.classList.add("note");
    note.innerHTML=`
        <div class="tool">
            <i class=" save fa-solid fa-floppy-disk"></i>
            <i class=" trash fa-solid fa-trash"></i>
           
        </div>
        <textarea>${text}</textarea>
    `;

    main.appendChild(note);
    savenotes();
    note.querySelector(".trash").addEventListener(
        "click",
        function ()
        {
            note.remove();
            savenotes();
        }
    )
    note.querySelector(".save").addEventListener(
        "click",
        function()
        {
            savenotes();
        }
    )
}


    function display()
    {
        const lsnotes=JSON.parse(localStorage.getItem("notes"));
        lsnotes.forEach(
            (lsnotes)=>
            {
                addnote(lsnotes)
            }
        )
    }
    display()
