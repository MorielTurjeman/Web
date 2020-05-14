function createRectangles() {
    var dynamicContainer = undefined;
    var rec = undefined;
    for (var i = 0; i < 36; i++) {
        rec = document.createElement("article");
        dynamicContainer = document.getElementById("dynamic-container");
        dynamicContainer.appendChild(rec);
    }
}

function paintedRec(){
    var dynamicContainer= document.getElementById("dynamic-container");
    for(var i=0; i<6; i++){
        dynamicContainer.children[i].className="dark-rec"
    }
}


function clearDarkRec(){
    var dynamicContainer= document.getElementById("dynamic-container");
    for(var i=0; i<6; i++){
        dynamicContainer.children[i].className="";
    }
}



//main
createRectangles();
