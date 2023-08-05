let hover3=document.getElementsByClassName('hover3')[0]
let startmenu=document.getElementsByClassName('startmenu')[0]


hover3.addEventListener('click',()=>{
    console.log('clicked');
    if(startmenu.style.bottom=="560px"){
        startmenu.style.bottom="-100px"
    }
    else{
        startmenu.style.bottom="560px"
    }
})
