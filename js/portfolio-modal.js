        const nextImagebtn = document.querySelector('#nextImg')
        const prevImagebtn = document.querySelector('#prevImg')
        const closeModal = document.querySelector('#closeModal')
        const imgTitle = document.querySelector('.img-title')
        const imgDescription = document.querySelector('.img-description')
        let filteredIndex
document.addEventListener('readystatechange', ()=>{
    if(document.readyState == 'complete'){

        
        nextImagebtn.addEventListener('click', ()=>{
            rightSlide()
        })
        
        prevImagebtn.addEventListener('click', ()=>{
            leftSlide()
        })
        
        window.addEventListener('keydown', (event)=>{
            if(event.key === "ArrowLeft" && (!portfolioCon.classList.contains('web'))){
                leftSlide()
                
            } else if(event.key === "ArrowRight" && (!portfolioCon.classList.contains('web'))){
                rightSlide()
            } else if(event.key === "Escape"){
                closeModalfunc()
            }
        })
        
        closeModal.addEventListener('click', ()=>{
            closeModalfunc()
        })
        
        const closeModalfunc = ()=>{
            buddy.classList.remove('portfolio-modal-open')
            modalContainer.classList.remove('open')
        }
        
        const leftSlide = ()=>{
            imgIndex-=1
            if(imgIndex <0 && portfolioCon.classList.contains('graphic')){
                imgIndex = graphicArray.length -1
            }
            else if(imgIndex <0 && portfolioCon.classList.contains('net')){
                imgIndex = netArray.length - 1
            }
            else if (imgIndex <0 && (!portfolioCon.classList.contains('net') || !portfolioCon.classList.contains('web') || !portfolioCon.classList.contains('graphic'))){
                imgIndex = modalImg.length - 1
            }
            imgmodal.classList.remove('control-clicked','left-slided','right-slided')
            imgmodal.classList.add('control-clicked', 'left')
            setTimeout(()=>{
                imgmodal.classList.remove('left')
                imgmodal.classList.add('left-slide')
            },300)
            
            setTimeout(()=>{
                imgmodal.classList.remove('left-slide')
                imgmodal.classList.add('left-slided')
                if(portfolioCon.classList.contains('graphic')){
                    imgmodal.src = modalImg[graphicArray[imgIndex]].src
                }
                else if(portfolioCon.classList.contains('net')){
                    imgmodal.src = modalImg[netArray[imgIndex]].src
                }
                else if (!portfolioCon.classList.contains('net') || !portfolioCon.classList.contains('web') || !portfolioCon.classList.contains('graphic')){
                    imgmodal.src = modalImg[imgIndex].src
                }
            },500)
            imgTitleDescription()
            
            
        }
        
        const rightSlide = ()=>{
            imgIndex+=1
            if(imgIndex > graphicArray.length - 1 && portfolioCon.classList.contains('graphic')){
                imgIndex = 0
            }
            else if(imgIndex > netArray.length - 1 && portfolioCon.classList.contains('net')){
                imgIndex = 0
            }
            else if (imgIndex > modalImg.length -1 && (!portfolioCon.classList.contains('net') || !portfolioCon.classList.contains('web') || !portfolioCon.classList.contains('graphic'))){
                imgIndex = 0
            }
            imgmodal.classList.remove('control-clicked','right-slided','left-slided')
            imgmodal.classList.add('control-clicked', 'right')
            setTimeout(()=>{
                imgmodal.classList.remove('right')
                imgmodal.classList.add('right-slide')
            },300)
            
            setTimeout(()=>{
                imgmodal.classList.remove('right-slide')
                imgmodal.classList.add('right-slided')
                if(portfolioCon.classList.contains('graphic')){
                    imgmodal.src = modalImg[graphicArray[imgIndex]].src
                }
                else if(portfolioCon.classList.contains('net')){
                    imgmodal.src = modalImg[netArray[imgIndex]].src
                }
                else if (!portfolioCon.classList.contains('net') || !portfolioCon.classList.contains('web') || !portfolioCon.classList.contains('graphic')){
                    imgmodal.src = modalImg[imgIndex].src
                }
            },500)
            imgTitleDescription()
            
        }
    }
})