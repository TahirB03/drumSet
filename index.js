const lista={
    drum :
    [{name:"j",
    sound:"sounds/crash.mp3"},
    {name:"l",
    sound:"sunds/kick-bass.mp3"},
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
var a=document.getElementsByClassName("drum").length;
function clickesd(){
    var audio=new Audio(lista.drum[i].sound);
    audio.play();
}

for (var i=0;i<a;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML=this.innerHTML;
        console.log(buttonInnerHTML,i);
        switch(buttonInnerHTML){
            case "j":
                var audio =new Audio(lista.drum[0].sound);
                audio.play();
                break;
            case "l":
                var audio =new Audio(lista.drum[1].sound);
                audio.play();
                break;
            case "k":
                var audio =new Audio(lista.drum[2].sound);
                audio.play();
                break;
            case "d":
                var audio =new Audio(lista.drum[3].sound);
                audio.play();
                break;
            case "w":
                var audio =new Audio(lista.drum[4].sound);
                audio.play();
                break;
            case "s":
                var audio =new Audio(lista.drum[5].sound);
                audio.play();
                break;
            case "a":
                var audio =new Audio(lista.drum[6].sound);
                audio.play();
                break;
        }
    })
}

document.addEventListener("keypress",function(event){
    var audio=new Audio(lista.drum[lista.drum.findIndex(obj => obj.name==event.key)].sound);
    console.log(event.key);
    console.log(lista.drum[lista.drum.findIndex(obj => obj.name==event.key)].sound);
    audio.play();
})
