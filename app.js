var compSequence = [];
let level = 6;
 var on = false
 var start = false;
 var tempo = 2000;
 var buttons =[$("#blue"),$("#yellow"),$("#red"),$("#green")];
 var colors = ["blue","yellow","red","green"]
 var levelCount = 0
 var sound = [$("#sound1"),$("#sound2"),$("#sound3"),$("#sound4")]
 
function generateSeq(){
    
        compSequence.push(Math.floor(Math.random() * 4) )
    
}
generateSeq()
generateSeq()
generateSeq()
generateSeq()
generateSeq()
generateSeq()



function lightButtons(){
  
for(let levelCount =0;levelCount < level;levelCount++){
    function loopDelay(levelCount){
    setTimeout(function (){
        function (){
            sound[compSequence[levelCount]].play()
        };
        console.log(buttons[compSequence[levelCount]])
        buttons[compSequence[levelCount]].fadeOut(50).fadeIn(60)
    }, tempo * levelCount)
} loopDelay(levelCount)
}

}

// $("#on").on("click", onOff())
function onOff(){
    $("#on").css("justify-content", "flex-start")
   setTimeout(function(){
    lightButtons()
   }, 3000)
    ;
}
function lightOnTouch(i){
    buttons[i].fadeOut(50).fadeIn(60)
}
function checkBlue(){
    if(compSequence[levelCount] == 0){
        levelCount++
        generateSeq()
    }
    else{
        levelCount --;

    }
}
function checkYellow(){
    if(compSequence[levelCount] == 1){
        levelCount++
        generateSeq()
    }
    else{
        levelCount --;
        
    }
}
function checkRed(){
    if(compSequence[levelCount] == 2){
        levelCount++
        generateSeq()
    }
    else{
        levelCount --;
        
    }
}
function checkgreen(){
    if(compSequence[levelCount] == 3){
        levelCount++
        generateSeq()
    }
    else{
        levelCount --;
        
    }
}

$("#blue").on("click", function (){
    lightOnTouch(0);

})
$("#yellow").on("click", function (){
    lightOnTouch(1);
    
})
$("#red").on("click", function (){
    lightOnTouch(2);
    
})

$("#green").on("click", function (){
    lightOnTouch(3);
    
})