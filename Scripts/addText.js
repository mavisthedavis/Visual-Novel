$("html").on( "mousedown", makeTxt);  
var textIndex = -1; 
const parentElementList = [$("#header")[0]];  
var delay = 0;   
var firstClick = true;     
var ClickWhileRun = true; 
var element = $("#text");    
var intervalIndex = 0; 
function makeTxt() {    
    
    /* 
    if (intervalList.length > 0) { 
           for(let x = 0; x < intervalList.length - 1; x++) {
               if (intervalList[x].isRunning) {  
                      clearInterval(intervalList[x]);    
                    
                }  
           }   
           textIndex++; 
    } */ 
    $("#text").text("");   
    
    intervalIndex = 0; 
    if (textIndex < textList.length) {    
        //imageChange();   
        
        //textIndex++;  
        var textInt = setInterval(function() {   
            console.log(textIndex); 
            element.append(textList[textIndex][intervalIndex]);  
            intervalIndex++;  
            if (element.text().length >= textList[textIndex].length || textList[textIndex].length == 0) { 
                clearInterval(textInt);   
            } 
        }, 30);    
        if (textInt.isRunning && !firstClick && ClickWhileRun) {   
            console.log("check"); 
            clearInterval(textInt);     
            element.text(textList[textIndex]);  
            ClickWhileRun = false; 
        } else {   
            console.log("check"); 
            ClickWhileRun = true; 
            textIndex++;  
        }
        
        
        
    }  
    firstClick = false
    
}    



