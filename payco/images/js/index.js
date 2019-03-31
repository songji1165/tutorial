

//main1 app

function appLink(a){
    a.classList.add('applink');
//    console.log(a)
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
//     console.log("clientHeight :"+displayH)
//     console.log("scrollHeight :"+eleH)
//     console.log("scroll :"+scroll)
//    
    var percentH = (scroll/(eleH - displayH))*100;
//    console.log("높percentH이 :"+percentH)
    
    var icon = document.querySelectorAll('p.iconani');
    
    var bodyScroll = document.body.scrollTop,
        docuScroll = document.documentElement.scrollTop
    for(let i=0; i<icon.length; i++){
        var qurt = displayH * (4/5);
//        console.log('go'+i)
     if(bodyScroll > qurt*(i+1) || docuScroll > qurt*(i+1)){
//        console.log('ok'+i)
        
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
//     console.log(currentPx);
//     console.log(parse)
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
//     console.log(currentPx);
//     console.log(parse);
   
    if(parse >= 0 ){
        ul.style.left= 0
    } else{
        ul.style.left = (parse + 260)+'px'
    }
}


//main6 table
var linkimg = document.querySelectorAll('#main6 ul li');
console.log(linkimg.length)
for(let i =0; i<linkimg.length; i++){
//    linkimg[i].style.backgroundImage="url(../images/'link"+(i+1)+".png')"
    linkimg[i].style.backgroundImage=`url(../images/'link${i+1}.png')`
//    linkimg[i].style.backgroundImage="url(../images/'link2.png')"
    console.log('linkimg.length')
}


//top

function Top(){
    var doc =  document.documentElement;
   var top = document.getElementById('top')
   
    if(doc.scrollTop > doc.clientHeight ){
        top.style.opacity = "0.5"
    } else {
        top.style.opacity = "0"
    }
            
    top.addEventListener('click',function(){
//                top.style.opacity = "1"
        window.scrollTo({
            top : 0,
            behavior : 'smooth' 
        });
    })
    
}
		
