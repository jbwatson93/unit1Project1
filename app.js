var compSequence = [];
let level = 6;
 var on = false
 var start = false;
 var tempo = 2000;
 var buttons =[$("#blue"),$("#yellow"),$("#red"),$("#green")];
 var colors = ["blue","yellow","red","green"]
//  var levelCount = 0
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
