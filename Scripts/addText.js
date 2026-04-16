$("html").on( "mousedown", makeTxt);  
textList = ["test1", "test2"]; 
textIndex = 0; 
const parentElementList = [$("#header")[0]];  
var delay = 0; 
function makeTxt() {    
    if (textIndex < textList.length - 1) {  
        $("#text-box").text(""); 
        var element = $("#text-box");    
        console.log(element); 
        var repeat = false;  
        var text = textList[textIndex]; 
        var i = 0;   
        var textInt = setInterval(function() { 
            element.append(text[i]);  
            console.log(element); 
            i++; 
            if (element.text().length == text.length ||  text.length == 0) { 
                clearInterval(textInt);  
            } 
        }, 30);  
        textIndex++;   
    }
}    

