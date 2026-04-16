$("div").on( "mouseenter", makeTxtBlock);  

const parentElementList = [$("#header")[0]];  
var delay = 0; 
function makeTxt() {   
    //if (element.)
    var element = this;    
    console.log(element); 
    var repeat = false;  
    var text = setTxt(textList[0], element); 
    for (let i = 0; i < elementList.length; i++) { 
        if (this == elementList[i]) { 
            repeat = true; 
        }
    }
    var i = 0;   
    if (!repeat) { 
        var textInt = setInterval(function() { 
            $(element).append(text[i]);  
            console.log(element); 
            i++; 
            if ($(element).text().length == text.length ||  text.length == 0) { 
                clearInterval(textInt);  
            } 
        }, 30);  
        elementList.push(element);  
    }
}   
async function makeTxtBlock() { 
    var element = this; 
    var repeat = false; 
    for (let i = 0; i < elementList.length; i++) { 
        if (this == elementList[i]) { 
            repeat = true; 
        }
    }   
    var text = setTxt(textList[0], element);  
    if (!repeat && text != false) {   
        var i = 0;   
        var x = 0;   
        var textInt = setInterval(function() {   
            if (x < text[i].length) {    
                $(element.children[i]).append(text[i][x]);    
                x++; 
            } else { 
                x = 0;   
                if (element.children[i].children.length == 0) { 
                    i++;   
                } else {  
                    console.log("check"); 
                    z++; 
                }
                
            }  
            
            if (element.children.length == i) {  
                clearInterval(textInt);
            }
        }, delay); 
            
         
        elementList.push(element);       
        
    }
    
} 
function setTxt(text, element) { 
    if (element.id == "header") {  
        delay = 30; 
        return textList[0]; 
    } else if (element.id == "main-info") {  
        delay = 1;
        return textList[1]; 
    }
    return false; 
}
