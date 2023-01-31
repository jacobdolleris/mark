import { marked } from "marked";


var area = document.getElementById('markdown');
if (area.addEventListener){
    area.addEventListener('input',function(){
        var text = document.getElementById("markdown").value; 
        document.getElementById('parsed').innerHTML =
        marked.parse(text);
    },false);
}