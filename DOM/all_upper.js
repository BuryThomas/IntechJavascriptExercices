function transformAllTxtType(node){
    if (node instanceof Text){
       node.data= node.data.toUpperCase();
    }else if (node.hasChildNodes()){
        node.childNodes.forEach(node => {
            transformAllTxtType(node)
        });
    }
}
document.childNodes.forEach(e=> transformAllTxtType(e))