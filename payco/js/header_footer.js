//noticewrap Close
function noticeClose(){
    var noticeWrap = document.getElementById('noticewrap');
    noticeWrap.classList.toggle('noticeClose');
}



//header scrollTo
var gnbHover = document.querySelectorAll('.gnb > ul > li > a');

var color = document.querySelector('.gnb');

gnbHover[3].addEventListener('click',function(){
    window.scrollTo({
        top:document.getElementById('main5').offsetTop,
        behavior:'smooth'
    })
    event.preventDefault();
})
    
gnbHover[4].addEventListener('click',function(){
    window.scrollTo({
        top:document.getElementById('main7').offsetTop,
        behavior:'smooth'
    })
    event.preventDefault();
})

function hoverstyle(){
    for(var j=0;j<gnbHover.length;j++){
        if(color.className == 'blackFont'){
            
        gnbHover[j].style.color ='#333'
        } else{
            gnbHover[j].style.color ='#fff'
        }
    }
}

//header user
var userIcon = document.querySelector('.user')
var userMore = document.querySelector('.usermore')

userIcon.addEventListener('click',usermoreOpen);

function usermoreOpen(){
    userMore.classList.toggle('userOpen')
}



for(var i=0; i<gnbHover.length;i++){
    gnbHover[i].addEventListener('click',hoverColor)
}

function hoverColor(e){
    for(var j=0;j<gnbHover.length;j++){
        if(color.className == 'blackFont'){
            
        gnbHover[j].style.color ='#333'
        } else{
            gnbHover[j].style.color ='#fff'
        }
    }
    
    this.style.color='#fa2828';
    console.log(this)
};



// header gnb ani
window.onscroll = function() {scrollFunction()};
    function scrollFunction(){
        var height =document.documentElement.clientHeight
//        console.log(height)
        var mqw = window.matchMedia("screen and (min-widht:700px)")
    if(window.matchMedia("(min-width:700px)") && document.body.scollTop > height/4 || document.documentElement.scrollTop >height/4){
        document.querySelector('header').style.background ='#fff';
        color.classList.add('blackFont');
        console.log(screen.width)
        console.log('ok')
        
    } else{
        document.querySelector('header').style.background ='transparent';
        color.classList.remove('blackFont')
        
    }
    }


//header mobile gnb
var menubar = document.querySelector('#menubar'),
    nav = document.querySelector('.gnb > ul');
 var gnb =document.querySelector('.gnb');

menubar.addEventListener('click',opengnb)
    
function opengnb(e){
        
    console.log(this)
    menubar.classList.toggle('close')
    
        var current = menubar.className;
          if(current != 'close'){
            nav.style.height = '0'
           gnb.style.height ='0';
       }else {
            nav.style.height = '320px'
           gnb.style.height ='100vh';
       }
    }





// footer Family site
var linkul = document.querySelector('.linksite ul')
var linkli = document.querySelectorAll('.linksite ul li')
var linklia= document.querySelectorAll('.linksite ul li a');
var icon = document.querySelector('.linksite > a > i')
function familyOpen(){
    event.preventDefault();
    linkul.classList.toggle('onLink');
	icon.classList.toggle('rotate')

for(let i=0; i<linkli.length; i++){
    linkli[i].addEventListener('mouseenter',function(e){
    if(linkli[i] == e.target ){
     console.log('ok')
        for(var j=0; j<linklia.length; j++){
            
        linkli[j].style.background='#fff';
        linklia[j].style.color = '#333';
        }
        linkli[i].style.background='#fa2828';
       linklia[i].style.color = '#fff'
    } 
        
    })
}
}
