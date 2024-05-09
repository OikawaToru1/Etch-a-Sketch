const box = document.getElementById("container");
let noOfBoxes=16;
let boxDimension=30;
const btn = document.querySelector("button").addEventListener("click",()=>{
     noOfBoxes = prompt("Enter the no of boxes per cum");
     boxDimension = 512/noOfBoxes -2 ;
});
console.log(boxDimension);

for(i=0;i<noOfBoxes;i++)
{
    for(j=0; j<noOfBoxes; j++)
        {
            const div = document.createElement("div");
            div.classList.add("grid");
            div.style.border="1px solid blue";
            div.style.height=`30px`;
            div.style.width =`30px`;
            box.append(div);
        }
}

const quard = document.querySelectorAll(".grid");

quard.forEach((boxu)=>{
    boxu.addEventListener("mouseover",()=>{
        boxu.style.backgroundColor="pink";
    })
   
})




