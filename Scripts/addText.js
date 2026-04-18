$("html").on( "mousedown", makeTxt);  
var textIndex = -1; 
const parentElementList = [$("#header")[0]];  
var delay = 0;   
var firstClick = true;     
var ClickWhileRun = true; 
var element = $("#text");    
var intervalIndex = 0; 
function makeTxt() {    
    $("#text").text("");   
    intervalIndex = 0; 
    if (firstClick) { 
        var textInt = setInterval(function() {    
            ClickWhileRun = true; 
            element.append(textList[textIndex][intervalIndex]);  
            if (!(element.text().length >= textList[textIndex].length || textList[textIndex].length == 0)) {   
                intervalIndex++;  
            } 
        }, 30);  
        firstClick = false; 
    }
    if (textIndex < textList.length) {    
           
        if (ClickWhileRun) {   
            console.log("check"); 
            clearInterval(textInt);     
            element.text(textList[textIndex]);   
            ClickWhileRun = false; 
        } else { 
            textIndex++; 
            ClickWhileRun = true; 
        }
    }  
    
}     




