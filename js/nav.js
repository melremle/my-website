        const hamburger = document.querySelector('.hamburger-container')
        const img = document.querySelector('.logo')
        const navBar = document.querySelector('.navbar-container')
        const nav = document.querySelector('.nav')
        const navLi = document.querySelectorAll('.nav-li')
        const header = document.querySelector('.header-section')
        const portfolio = document.querySelector('.portfolio-section')
        const about = document.querySelector('.about-section')
        const bttop = document.querySelector('.back-to-top-btn')
        const navList = document.querySelector('.nav-list-container')
        
        const heroImg = document.querySelector('img.hero-img')
        
        const line = document.querySelector('#line')
    

        const animatedLine = ()=>{
            if(hamburger.classList.contains('active')){
                
            } else{
                
                if(this.scrollY <= header.scrollHeight / 2){
                    // navLi[0].classList.remove('active')
                    // navLi[1].classList.remove('active')
                    // navLi[2].classList.remove('active')
                    // navLi[3].classList.remove('active')
                    line.style.width = navLi[0].clientWidth +"px"
                    line.style.left = navLi[0].getBoundingClientRect().left +"px"
                    // navLi[0].classList.add('active')
                }
                if(this.scrollY > header.scrollHeight / 2){
                    // navLi[0].classList.remove('active')
                    // navLi[1].classList.remove('active')
                    // navLi[2].classList.remove('active')
                    // navLi[3].classList.remove('active')
                    line.style.width = navLi[1].clientWidth +"px"
                    line.style.left = navLi[1].getBoundingClientRect().left +"px"
                    // navLi[1].classList.add('active')
                    
                }
                if(this.scrollY >= (header.scrollHeight + portfolio.scrollHeight) / 1.1){
                    // navLi[0].classList.remove('active')
                    // navLi[1].classList.remove('active')
                    // navLi[2].classList.remove('active')
                    // navLi[3].classList.remove('active')
                    line.style.width = navLi[2].clientWidth +"px"
                    line.style.left = navLi[2].getBoundingClientRect().left +"px"
                    // navLi[2].classList.add('active')
                }
                if(this.scrollY >= (header.scrollHeight + portfolio.scrollHeight + about.scrollHeight) / 1.05){
                    // navLi[0].classList.remove('active')
                    // navLi[1].classList.remove('active')
                    // navLi[2].classList.remove('active')
                    // navLi[3].classList.remove('active')
                    line.style.width = navLi[3].clientWidth +"px"
                    line.style.left = navLi[3].getBoundingClientRect().left +"px"
                    // navLi[3].classList.add('active')
                }
            }
        }
        
        const linkClicked = (idx)=>{
            if(idx == 'Home'){
                window.scroll(0,0)
            }
            if(idx == 'Portfolio'){
                window.scroll(0, header.scrollHeight)
            }
            if(idx == 'About'){
                window.scroll(0, header.scrollHeight + portfolio.scrollHeight)
            }
            if(idx == 'Contact'){
                window.scroll(0,header.scrollHeight + portfolio.scrollHeight + about.scrollHeight)
            }
        }
        
        const ScrollClick = ()=>{
            navLi.forEach(links =>{
                links.addEventListener('click', (e)=>{
                    e.preventDefault();
                    for(i=0;i<4;i++){
                        if(navLi[i].classList.contains('active')){
                            navLi[i].classList.remove('active')
                        }
                    }
                    links.classList.add('active')
                    linkClicked(links.innerText)
                })
            })
        }
        
        document.addEventListener('readystatechange', ()=>{
            if(document.readyState === "complete"){
                animatedLine()
                ScrollClick()
            }
        })
        
        
        
        
        hamburger.addEventListener('click', ()=> {
            hamburger.classList.toggle('active')
            nav.classList.toggle('ham-clicked')
            navList.classList.toggle('hidden')
        })
        
        window.addEventListener('resize', ()=>{
            animatedLine()
            
        })
        
        
        document.addEventListener('scroll', ()=>{
            animatedLine()
            ScrollClick()
            this
            if(heroImg.getBoundingClientRect().top < 50){
                navList.style.top = '70px'
                navBar.classList.add('scrolled')
                img.style.height = '40px'
                line.style.bottom = "15px"
            } else {
                navList.style.top = '100px'
                navBar.classList.remove('scrolled')
                img.style.height = '70px'
                line.style.bottom = "30px"
            }
            if(this.scrollY > header.scrollHeight / 2){
                bttop.style.opacity = '80%'
            } else{
                bttop.style.opacity = '0%'
            }
            
        })
        
        bttop.addEventListener('click', ()=>{
            window.scrollTo(0,0)
        })