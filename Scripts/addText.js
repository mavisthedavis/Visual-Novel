$("html").on( "mousedown", makeTxt);  
textList = ["test1", "Nettle was, and is a goblin. With large eyes that poked out of her skull like a water droplet on a flat surface. She is quite smaller than most of her fellow sapiens, being three balls of lettuce, and two bell peppers tall. " 
           ]; 
textIndex = 0; 
const parentElementList = [$("#header")[0]];  
var delay = 0; 
function makeTxt() {    
    if (textIndex < textList.length) {   
        imageChange(); 
        $("#text").text(""); 
        var element = $("#text");    
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

