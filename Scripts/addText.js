$("html").on( "mousedown", makeTxt);  
var textIndex = -1; 
const parentElementList = [$("#header")[0]];  
const delay = 20;   
var firstClick = true;     
var ClickWhileRun = false; 
var element = $("#text");    
var intervalIndex = 0; 

function makeTxt() {    
    $("#text").text("");   
    intervalIndex = 0; 
    if (firstClick) { 
        var textInt = setInterval(function() {    
            ClickWhileRun = true;   
            if (!(element.text().length >= textList[textIndex].length || textList[textIndex].length == 0)) {    
                element.append(textList[textIndex][intervalIndex]);
                intervalIndex++;   
            } else { 
                ClickWhileRun = false;  
                intervalIndex = 0; 
            }
        }, delay);  
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




