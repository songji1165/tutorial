
		window.onscroll = function(){loof()};
		
        var quick = document.querySelectorAll('#sticky span a');
        var stepwrap = document.querySelectorAll('.step')
//        console.log(quick , stepwrap[1].offsetTop)
        for(let i=0; i<quick.length ; i++){
            quick[i].addEventListener('click',function(){
                window.scrollTo({
                    top: stepwrap[i].offsetTop,
                    behavior:'smooth'
                });
                event.preventDefault()
            })
        }
        
		
//		window.onscroll = function(){loof()}
		function loof(){
        var doc =  document.documentElement
        var percentage = (doc.scrollTop /(doc.scrollHeight-doc.clientHeight))*100
        console.log(percentage);
			for(var k=0; k<quick.length;k++ ){
            document.querySelectorAll('#sticky span')[k].classList.remove('now')
			}
		if(percentage <= 40){
			document.querySelectorAll('#sticky span')[0].classList.add('now')
		} else if(percentage <= 70){
			document.querySelectorAll('#sticky span')[1].classList.add('now')
		} else{
			document.querySelectorAll('#sticky span')[2].classList.add('now')
		}
            
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
		
        
      

