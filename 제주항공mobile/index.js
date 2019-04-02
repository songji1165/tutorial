	var slide = document.getElementsByName('slide'),
		prev = document.getElementById('prevBtn'),
		next = document.getElementById('nextBtn');

/*
	1. prev버튼을 클릭하면 check가 +1 이된다
	2. 만약 check가 slide[2]라면 다음 check는 slide[0]이 된다
*/
var a = 0;
	next.addEventListener('click',nextSlide	)
	
	function nextSlide(){
		if(a>=3){
			a = 0
		}
		
		
		console.log(a)
		slide[a].checked = true;
		a+=1;
		console.log('슬라이드'+a)
	}
	prev.addEventListener('click',function(){
		if(a<0){
			a = 2
		}
		
		
		console.log(a)
		slide[a].checked = true;
		a-=1;
		console.log('슬라이드'+a)
	})
//	slide[0].checked = true


setInterval(nextSlide, 3000)


        var daMore = document.getElementById('DAopen'),
            sign = daMore.querySelector('i');
        
        function opentable(){
            var signRotate =  sign.style.transform;
            document.getElementById('DA_more').classList.toggle('DAtable');
            if(signRotate != 'rotate(180deg)'){
            sign.style.transform='rotate(180deg)'
            } else {
                sign.style.transform='rotate(0deg)'
            }
        }
        daMore.addEventListener('click',opentable);
        