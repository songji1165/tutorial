
        var videoImg = document.getElementsByClassName('video');
       
        for(let i=0; i<videoImg.length ; i++){
            videoImg[i].addEventListener('click',function(e){
                document.querySelector('video').src = "images/PAYCO"+(i+1)+".mp4";
            });
            videoImg[i].addEventListener('mouseenter',function(e){
                document.querySelector('.talk').style.opacity = '0.7';
            })
             videoImg[i].addEventListener('mouseleave',function(e){
                document.querySelector('.talk').style.opacity = '0.3';
            })
        }
