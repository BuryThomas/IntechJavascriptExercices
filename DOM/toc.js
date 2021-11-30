const allTitle = document.querySelectorAll("h1,h2,h3,h4,h5,h6")
let ol= document.createElement("ol")
let li= document.createElement("li")
allTitle.forEach(element => {
    
    switch(element.nodeName){
        case "H1":
            ol.append(li)
            document.prepend(ol)
        break;
        default:
            console.log("no type fd")
            break;
    }
   
});