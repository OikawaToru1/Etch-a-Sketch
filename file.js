let container = document.querySelector(".container");
let changeGrid = document.querySelector(".btn");
let reset = document.querySelector(".reset");
let colorChanger = document.querySelectorAll(".change");
let noOfBox = 16;
let sizeofBox = 30;
container.style.height=container.style.width="512px";


function createGrid(totalBox,boxSize)
{
    for(i=0;i<totalBox;i++)
        {
            for(j=0;j<totalBox;j++)
                {
                    const box = document.createElement("div");
                    box.classList.add("grid");
                    box.style.border = "1px solid black";
                    box.style.height = boxSize+"px";
                    box.style.width = boxSize+"px";
                    container.appendChild(box);
                    box.addEventListener("mouseover",()=>{
                        box.style.backgroundColor= "pink";
                    })
                }
        }
        
}

function userInput()
{
    noOfBox = prompt("Enter size of new grid, less than 100 ","50");
    noOfBox = parseInt(noOfBox);
    sizeofBox = (512/noOfBox)-2 ;
    parseInt(sizeofBox);
    let boxes = document.querySelectorAll(".grid");
    boxes.forEach((boxu)=>{
    boxu.remove();
    });

    createGrid(noOfBox,sizeofBox);
}


function clear()
{
    let boxes = document.querySelectorAll(".grid");
    boxes.forEach((boxu)=>{
    boxu.style.backgroundColor= "White";
});

}
createGrid(noOfBox,sizeofBox);

changeGrid.addEventListener("click",userInput);
reset.addEventListener("click",clear);
