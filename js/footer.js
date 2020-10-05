const socialLinks = document.querySelectorAll('.fab')
document.addEventListener('readystatechange', ()=>{
    if(document.readyState == 'complete'){

        socialLinks.forEach((links, idx) =>{
            links.addEventListener('click', ()=>{
                if(idx === 0){
                    window.location.href = "https://www.facebook.com/remle.asuncion"
                } else if (idx ===1){
                    window.location.href = "https://www.fb.me/msg/remle.asuncion"
                } else if (idx === 2){
                    window.location.href = "https://twitter.com/melremle"
                }
                else if (idx === 3){
                    window.location.href = "https://github.com/melremle"
                }
            })
        })
    }
})