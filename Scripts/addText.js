$("html").on( "mousedown", makeTxt);  
//textList = ["test1", "Nettle was, and is a goblin. With large eyes that poked out of her skull like a water droplet on a flat surface. She is quite smaller than most of her fellow sapiens, being three balls of lettuce, and two bell peppers tall. " 
           //];  
var intervalList = []; 
textIndex = 0; 
const parentElementList = [$("#header")[0]];  
var delay = 0;   
var firstClick = true;  
function makeTxt() {  
    if (intervalList.length > 0) { 
           for(let i = 0; i < intervalList - 1; i++) {
               if (intervalList[i].isRunning) {  
                      clearInterval(intervalList[i]);    
                    
                }  
           }   
           textIndex++; 
    }
    $("#text").text("");  
    var element = $("#text");    
    var repeat = false;  
    var text = textList[textIndex]; 
    var i = 0; 
    if (textIndex < textList.length) {    
        //imageChange(); 
        intervalList.push(setInterval(function() {  
            element.append(text[i]);  
            console.log(text); 
            i++; 
            if (element.text().length >= text.length ||  text.length == 0) { 
                clearInterval(textInt);  
            } 
        }, 30));  
        textIndex++;   
    }
}    



