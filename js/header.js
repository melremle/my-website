        const divider = document.querySelector('.divider')
        const heroTextMain = document.querySelector('.hero-text-main')
        const heroTextsub = document.querySelector('.text')
        const blink = document.querySelector('.blink')
        
        const messageMeBTN = document.querySelector('#message-btn')
        const downloadBTN = document.querySelector('#download-btn')
        const btnDownload = document.querySelector('#btnDownload')
        
        const typeArray = ["Web Developer", "Graphic Artist" , "NET Developer"]
        const nextArrayDelay = 2000
        const typeDelay = 100
        const textEraseDelay = 50
        
        let indexArray = 0
        let indexArrayText = 0
        
        let htmSize
document.addEventListener('readystatechange', ()=>{
    if(document.readyState == 'complete'){

        downloadBTN.addEventListener('click', ()=>{
            downloadBTN.setAttribute('href',"assets/cv/remleCV.pdf")
        })
        
        btnDownload.addEventListener('click', ()=>{
            btnDownload.setAttribute('href',"assets/cv/remleCV.pdf")
        })
        
        window.addEventListener('resize', ()=>{
            htmSize= heroTextMain.getBoundingClientRect().width
            divider.style.width = htmSize / 1.5 + "px"
        })
        
        this.addEventListener('load', ()=>{
            htmSize= heroTextMain.getBoundingClientRect().width
            divider.style.width = htmSize  /1.5+ "px"
            setTimeout(typing, nextArrayDelay)
        })
        
        messageMeBTN.addEventListener('click', ()=>{
            window.scroll(0,header.scrollHeight + portfolio.scrollHeight + about.scrollHeight)
        })
        
        const typing = ()=>{
            if(indexArray < typeArray.length){
                if(heroTextsub.innerText.length < typeArray[indexArray].length){
                    blink.classList.remove('hide')
                    heroTextsub.innerText += typeArray[indexArray].charAt(indexArrayText)
                    indexArrayText++
                    setTimeout(typing, typeDelay)
                }
                else{
                    blink.classList.add('hide')
                    setTimeout(erasing, nextArrayDelay)
                }
            }
            else{
                indexArray = 0
                setTimeout(typing, nextArrayDelay - 1000)
            }
        }
        
        const erasing = ()=>{
            if(heroTextsub.innerText.length > 0){
                blink.classList.remove('hide')
                heroTextsub.innerText = typeArray[indexArray].substring(0,indexArrayText-1)
                indexArrayText--
                setTimeout(erasing, textEraseDelay)
            }
            else {
                blink.classList.add('hide')
                indexArray++
                setTimeout(typing, nextArrayDelay)
            }
        }
    }
})