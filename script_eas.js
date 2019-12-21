const container = document.getElementById("grid_container");
//const containerClone=container.cloneNode(true);
const greyBtn=document.getElementById("darkenColorButton");
const rainbowBtn=document.getElementById("changeColorButton");
const clearBtn=document.getElementById("clearButton");
//Capture when a grid-item is hovered, and execute the changeColor function accordingly
greyBtn.addEventListener("click",function(e){
    container.removeEventListener("mouseover",changeColor);
    container.addEventListener("mouseover",changeDarkness);
    });
rainbowBtn.addEventListener("click",function(e){
    container.removeEventListener("mouseover",changeDarkness);
    container.addEventListener("mouseover",changeColor);
    });
clearBtn.addEventListener("click",function(e){
    var size=prompt("Please enter the number of grids you want to have");
    deleteChild();
    makeRows(size,size);
    
})



function deleteChild(){
    var first=container.firstElementChild;
    while(first){
        first.remove();
        first=container.firstElementChild;
    }
}
//    var el = document.getElementById('el-id'),
//    elClone = el.cloneNode(true);
///el.parentNode.replaceChild(elClone, el);

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.style.backgroundColor= "rgb(255,255,255)";
  };
};

makeRows(16, 16);
//Defining the necessary functions
function random_color(){
    var x=Math.floor(Math.random()*256);
    var y=Math.floor(Math.random()*256);
    var z=Math.floor(Math.random()*256);
    return "rgb("+x+","+y+","+z+")";
}
function darken_color(background_color){
    background_color=background_color.replace("rgb(","").replace(")","").split(",");
    //console.log(background_color);
    console.log("gri calisiyor");
    var x=parseInt(background_color[0],10)-25;
    var y=parseInt(background_color[1],10)-25;
    var z=parseInt(background_color[2],10)-25;
    return "rgb("+x+","+y+","+z+")";
}
function changeColor(e){
    //If cursor touches the boundary, do not change color of any one of the grid-items
    if(e.path.length===5){
        return null;
    }
    //console.log(e);
    e.path[0].style.backgroundColor=random_color();
}
function changeDarkness(e){
    if(e.path.length===5){
        return null;
    }
    //console.log(e);
    e.path[0].style.backgroundColor=darken_color(e.path[0].style.backgroundColor);
}