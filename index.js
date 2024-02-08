let NoOfButton=document.querySelectorAll(".btn").length;
for(let i=0;i<NoOfButton;i++)
{
    document.querySelectorAll(".btn")[i].addEventListener("click",function()
    {
        let activebutton=this.innerHTML;
        call(activebutton);
        animation(activebutton);
    });
}
document.addEventListener("keydown",function(event)
{
    call(event.key);
    animation(event.key);
})
function call(val)
{
    let text=val;
    switch (text) {
        case "l":
            var l=new Audio("./sounds/crash.mp3");
            l.play();
            break;
    
        case "a":
            var l=new Audio("./sounds/kick-bass.mp3");
            l.play();
            break;
    
        case "k":
            var l=new Audio("./sounds/snare.mp3");
            l.play();
            break;
    
        case "s":
            var l=new Audio("./sounds/tom-1.mp3");
            l.play();
            break;
    
        case "h":
            var l=new Audio("./sounds/tom-2.mp3");
            l.play();
            break;
    
        case "y":
            var l=new Audio("./sounds/tom-3.mp3");
            l.play();
            break;

        case "a":
            var l=new Audio("./sounds/tom-4.mp3");
            l.play();
            break;
    
        default:
            console.log(text);
            break;
    }
}
function animation(touched)
{
    let activebutton=document.querySelector("."+touched);
    activebutton.classList.add("pressed");

    setTimeout(function()
    {
        activebutton.classList.remove("pressed");
    },100)

}