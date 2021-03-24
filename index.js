const lista={
    drum :
    [{name:"j",
    sound:"sounds/crash.mp3"},
    {name:"l",
    sound:"sounds/s.mp3"},
    {name:"k",
    sound:"sounds/snare.mp3"},
    {name:"d",
    sound:"sounds/tom-1.mp3"},
    {name:"w",
    sound:"sounds/tom-2.mp3"},
    {name:"s",
    sound:"sounds/tom-3.mp3"},
    {name:"a",
    sound:"sounds/tom-4.mp3"},]
};//json file for sound

 $(".j").click(function(){
     playDrum(0);
 })
 $(".l").click(function(){
    playDrum(1);
})
$(".k").click(function(){
    playDrum(2);
})
$(".d").click(function(){
    playDrum(3);
})
$(".w").click(function(){
    playDrum(4);
})
$(".s").click(function(){
    playDrum(5);
})
$(".a").click(function(){
    playDrum(6);
})
function playDrum(index){
    var audio=new Audio(lista.drum[index].sound);
    audio.play();
}
document.addEventListener("keypress",function(event){
    var audio=new Audio(lista.drum[lista.drum.findIndex(obj => obj.name==event.key)].sound);
    $("."+event.key).addClass("pressed");
    audio.play();
    setTimeout(function() {
        $("."+event.key).removeClass("pressed"); }, 200);
}
)