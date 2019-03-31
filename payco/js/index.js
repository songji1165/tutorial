

//main1 app

function appLink(a){
    a.classList.add('applink');
}


//main1 movedown
var main2 = document.getElementById('main2')
function moveMain2(){
    event.preventDefault();
    window.scrollTo({
        top: main2.offsetTop,
        behavior : 'smooth'
    })
}

//main2,3,4 animation
window.onscroll = function(){scrollFunction(), animation(),Top()};


function animation(){
    var displayH = document.documentElement.clientHeight,
        eleH = document.documentElement.scrollHeight,
        scroll = document.documentElement.scrollTop;
    var percentH = (scroll/(eleH - displayH))*100;
    
    var icon = document.querySelectorAll('p.iconani');
    
    var bodyScroll = document.body.scrollTop,
        docuScroll = document.documentElement.scrollTop
    for(let i=0; i<icon.length; i++){
        var qurt = displayH * (4/5);
     if(bodyScroll > qurt*(i+1) || docuScroll > qurt*(i+1)){
        
        icon[i].classList.add('effect')
    }else if(docuScroll <qurt){
        icon[i].classList.remove('effect');
        
    }
        
    
    }
    
}



// slide onclick
    
function moveNext(){
    var movePx = 260;
    var ul = document.querySelector('.slides')
    var currentPx= window.getComputedStyle(ul).getPropertyValue('left')
    var parse = parseInt(currentPx,10)

    if(parse <= -movePx*5){
        ul.style.left= '-1300px'
    }else{
        ul.style.left = (parse - 260 )+'px'
    }
}

function movePre(){
     var movePx = 260;
    var ul = document.querySelector('.slides')
    var currentPx= window.getComputedStyle(ul).getPropertyValue('left')
    var parse = parseInt(currentPx,10)

    if(parse >= 0 ){
        ul.style.left= 0
    } else{
        ul.style.left = (parse + 260)+'px'
    }
}


function Top(){
    var doc =  document.documentElement;
   var top = document.getElementById('top')
   
    if(doc.scrollTop > doc.clientHeight ){
        top.style.opacity = "0.5"
    } else {
        top.style.opacity = "0"
    }
            
    top.addEventListener('click',function(){
        window.scrollTo({
            top : 0,
            behavior : 'smooth' 
        });
    })
    
}
		
