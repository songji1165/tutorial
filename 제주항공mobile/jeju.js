//index ==================== 
var nav = document.getElementById('gnbpopWrap');
var navBtn = document.getElementById('navopenbtn');
var navmain = document.getElementById('gnbpop');
        function navOpen(){
         nav.style.visibility="visible";
            navmain.style.width='80%'
        }

        function navClose(){
            navmain.style.width='0';
         nav.style.visibility='hidden';
        };
        
       navBtn.addEventListener('click',navOpen);
        
		nav.addEventListener('click',function(e){
			if(e.target == nav){
				nav.style.visibility='hidden';
				navmain.style.width='0'
			}
		})
//        
//        var daMore = document.getElementById('DAopen'),
//            sign = daMore.querySelector('i');
//        
//        function opentable(){
//            var signRotate =  sign.style.transform;
//            document.getElementById('DA_more').classList.toggle('DAtable');
//            if(signRotate != 'rotate(180deg)'){
//            sign.style.transform='rotate(180deg)'
//            } else {
//                sign.style.transform='rotate(0deg)'
//            }
//        }
//        daMore.addEventListener('click',opentable);
//        
        


/*
0. #modalOpen(btn), #modalpop(pop), pop.querySelector('ul') (list) 
1. btn 클릭시 modal 열림(.open 추가/ btn rotate 추가) 
    + ul height(.height 추가) 
2. btn 클릭시 modal 닫힘 + .rotate 제거 +.height 제거
*/

    var btn = document.getElementById('modalOpen'),
        pop = document.getElementById('modalpop'),
        list = pop.querySelector('ul');

    btn.addEventListener('click',modalClick);
    
    function modalClick(){
        btn.classList.toggle('rotate');
        list.classList.toggle('height');
        pop.classList.toggle('open');
    }



        
//        var modal = document.getElementById('modalOpen');
//        
//        modal.addEventListener('click',modalClick);
//        
//        function modalClick(){
//            var pop = document.getElementById('modalpop');
//            var modalList = pop.querySelector('ul');
//            
//            pop.style.visibility = 'visible';
//            modalList.classList.add('ulheight');
//            
//            var btn = modal.style.transform;
//            
//            if( btn != 'rotate(45deg)'){
//                modalOpen.style.transform = 'rotate(45deg)';
//                modalOpen.style.boxShadow = '2px -2px 5px #333';
//            } else {
//                
//            }
//            
////            if(modalList.style.height == '0'){
////                modalList.style.height = 'auto';
////            } else {
////                modalList.style.height = '0'
////            }
////            
//            
//            
//            modal.addEventListener('click',closeModal);
//            function closeModal(){
//               
//                if(document.getElementById('modalpop').style.display == 'block'){ document.getElementById('modalpop').style.display = 'none';
//                   modalOpen.style.transform = 'rotate(0deg)';
//                 modalOpen.style.boxShadow = 'none'                                                              
////                   modalList.classList.remove('ulheight')      ;                                                        
//                }else{
//                    document.getElementById('modalpop').style.display = 'block';
//                }
//            }
//            
//        }


//subpage