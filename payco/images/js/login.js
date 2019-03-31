
        var pop = document.getElementById('pop')
        
        document.getElementById('modal').addEventListener('click',open)
        function open(e){
            e.preventDefault;
            pop.classList.add("openPop")
        }
        document.getElementById('close').addEventListener('click',close)
        function close(){
            pop.classList.remove("openPop")
        }
        
            var ch = document.getElementsByClassName('vali')
            var alert = document.getElementsByClassName('check1');
		
        function checking(){
//            event.preventDefault;
            if(ch[0].value === '' || ch[1].value === ''){
				
				if(ch[0].value === ''){
              alert[0].style.display = "block";
            console.log('ok')
				}
				if(ch[1].value === ''){
              alert[1].style.display = "block";
            console.log('ok')
				}
                return false
            } else{
                alert[0].style.display = "none";
                alert[1].style.display = "none";
                return true
            }
                
             
        }
        
		
			ch[1].addEventListener('input',function(){
				if(ch[1].value.length >=2){
					alert[1].style.display = "none";
				}
			})
			ch[0].addEventListener('input',function(){
				if(ch[0].value.length >=2){
					alert[0].style.display = "none";
				}
			})
		
