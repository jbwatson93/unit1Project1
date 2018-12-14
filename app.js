var compSequence = [];
let level = 6;
 var on = false
 var start = false;
 var tempo = 2000;
 var buttons =[$("#blue"),$("#yellow"),$("#red",$("#green"))];
 var colors = ["blue","yellow","red","green"]
 var levelCount = 0
function generateSeq(){
    
        compSequence.push(Math.floor(Math.random() * 4) + 1)
    
}
generateSeq()
generateSeq()
generateSeq()
generateSeq()
generateSeq()
generateSeq()
function lightButtons(){
for(let levelCount =0;levelCount < level;levelCount++){
    setTimeout(function (){
        console.log(buttons[compSequence[levelCount]])
        buttons[compSequence[levelCount]].css("background","readial-gradient(white,"+colors[compSequence[levelCount]]+")")
    }, tempo )
}
}
lightButtons()
