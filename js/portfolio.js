const filterLi = document.querySelectorAll('.filter-li')
const portfolioContainers = document.querySelectorAll('.card-img-container')
const portfolioCon = document.querySelector('.portfolio-cards-container')
const modalImg = document.querySelectorAll('.card-img')
const imgmodal = document.querySelector('#modalImg')
const modalContainer = document.querySelector('.portfolio-modal-container')
const buddy = document.querySelector('body')

        let imgIndex
        let keys = [32,33,34,35,36,37,38,39,40];
        let fileName
        
        const allArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13]
        const graphicArray = [0,1,2,3,4,5,10,12,13]
        const web = 11
        const netArray = [6,7,8,9]

        const imgTitleDescription = ()=>{
            if(portfolioCon.classList.contains('graphic')){
                fileName = modalImg[graphicArray[imgIndex]].src.substring(modalImg[graphicArray[imgIndex]].src.lastIndexOf('/')+1)
            }
            else if(portfolioCon.classList.contains('net')){
                fileName = modalImg[netArray[imgIndex]].src.substring(modalImg[netArray[imgIndex]].src.lastIndexOf('/')+1)
            }
            else if (!portfolioCon.classList.contains('net') || !portfolioCon.classList.contains('web') || !portfolioCon.classList.contains('graphic')){
                fileName = modalImg[imgIndex].src.substring(modalImg[imgIndex].src.lastIndexOf('/')+1)
            }
            imgDescription.classList.add('slide')
            imgTitle.classList.add('slide')
            setTimeout(()=>{
                imgDescription.classList.remove('slide')
                imgTitle.classList.remove('slide')
                if(portfolioCon.classList.contains('graphic')){
                    imgDescription.innerText = modalImg[graphicArray[imgIndex]].alt
                }
                else if(portfolioCon.classList.contains('net')){
                    imgDescription.innerText = modalImg[netArray[imgIndex]].alt
                }
                else if (!portfolioCon.classList.contains('net') || !portfolioCon.classList.contains('web') || !portfolioCon.classList.contains('graphic')){
                    imgDescription.innerText = modalImg[imgIndex].alt
                }
                imgTitle.innerText = fileName.substring(0,fileName.lastIndexOf('.')).replace(/%20/g,' ')
            },500)
        }
document.addEventListener('readystatechange', ()=>{

    if(document.readyState == 'complete'){

        
        
        
        filterLi.forEach(links =>{
            links.addEventListener('click', ()=>{
                if(filterLi[0].classList.contains('active')){
                    filterLi[0].classList.remove('active')
                }
                else  if(filterLi[1].classList.contains('active')){
                    filterLi[1].classList.remove('active')
                }
                else  if(filterLi[2].classList.contains('active')){
                    filterLi[2].classList.remove('active')
                }
                else  if(filterLi[3].classList.contains('active')){
                    filterLi[3].classList.remove('active')
                }
                links.classList.add('active')
                
                if(links.innerText !== "All"){
                    portfolioCon.classList.add('filtered')
                } else{
                    portfolioCon.classList.remove('filtered')
                }
                portfolioCon.classList.remove('web')
                portfolioCon.classList.remove('graphic')
                portfolioCon.classList.remove('net')
                
                for(i=0;i<portfolioContainers.length;i++){
                    if(portfolioContainers[i].classList.contains("hidden")){
                        portfolioContainers[i].classList.remove("hidden")
                    }
                    if(links.innerText === "Graphics"){
                        if(!portfolioContainers[i].classList.contains('graphic')){
                            portfolioContainers[i].classList.add('hidden')
                            portfolioCon.classList.add('graphic')
                        }
                    } else if(links.innerText === "Web Development"){
                        if(!portfolioContainers[i].classList.contains('web')){
                            portfolioContainers[i].classList.add('hidden')
                            portfolioCon.classList.add('web')
                            
                        }
                    }  else if(links.innerText === "NET Development"){
                        if(!portfolioContainers[i].classList.contains('net')){
                            portfolioContainers[i].classList.add('hidden')
                            portfolioCon.classList.add('net')
                        }
                    }
                }
            });
        })
        
        
        modalImg.forEach((imgs,idx) =>{
            imgs.addEventListener('click', ()=>{
                imgIndex = idx
                if(portfolioCon.classList.contains('graphic')){
                    imgIndex = graphicArray.findIndex(idx =>{
                        return idx >= imgIndex
                    })
                    console.log(idx)
                } else if(portfolioCon.classList.contains('web')){
                    
                } else if(portfolioCon.classList.contains('net')){
                    imgIndex = netArray.findIndex(idx =>{
                        return idx >= imgIndex
                    })
                }
                modalContainer.classList.add('open')
                if(modalContainer.classList.contains('open')){
                    if(portfolioCon.classList.contains('web')){
                        nextImagebtn.style.display = 'none'
                        prevImagebtn.style.display = 'none'
                    } else {
                        nextImagebtn.style.display = 'unset'
                        prevImagebtn.style.display = 'unset'
                    }
                    imgmodal.src = imgs.src
                    buddy.classList.add('portfolio-modal-open')
                    window.addEventListener('DOMMouseScroll', function(e){e.preventDefault();}, {passive:false})
                    imgTitleDescription()
                } else{
                    reEnableScroll()
                }
            })
        })
        
        
        const reEnableScroll = ()=>{
            if(window.removeEventListener){
                window.removeEventListener('DOMMouseScroll', function(e){e.preventDefault()}, {passive:false})
            }
        }
    }
})