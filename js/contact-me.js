        const btnsubmit = document.getElementById('btnsubmit')
        const stats = document.querySelector('.status')
        const statusMsg = document.querySelector('.status-msg')
        const spinner = document.querySelector('#spin')
        const frm = document.getElementById('frm')
        
        const nme = document.querySelector('input[name=name]')
        const email = document.querySelector('input[name=email]')
        const subject = document.querySelector('input[name=subject]')
        const message = document.querySelector('textarea[name=message]')
document.addEventListener('readystatechange', ()=>{
    if(document.readyState == 'complete'){
        btnsubmit.addEventListener('click', (e)=>{
            if(frm.checkValidity()){
                e.preventDefault()
                btnsubmit.disabled = true
                stats.style.opacity = '100%'
                statusMsg.innerText = " Sending message"
                spinner.classList.replace('fa-check','fa-spinner')
                spinner.classList.replace('fa-times','fa-spinner')
                spinner.classList.add('fa-spin')
                $.ajax({
                    type: "POST",
                    url: "./assets/php/send.php",
                    data: {
                        name:nme.innerText,
                        email:email.innerText,
                        message:message.value,
                        subject:subject.innerText,
                        submit:'submit'
                    },
                    cache:false,
                    success: function (response) {
                        if(JSON.parse(response)){
                            spinner.classList.remove('fa-spin')
                            spinner.classList.replace('fa-spinner', 'fa-check')
                            statusMsg.innerText = " Thank you! Message sent. I'll be reaching out to you soon."
                            setTimeout(()=>{
                                btnsubmit.disabled = false
                                stats.style.opacity = '0%'
                                frm.reset()
                                
                            },5000)
                        }
                        else{
                            spinner.classList.remove('fa-spin')
                            spinner.classList.replace('fa-spinner', 'fa-times')
                            statusMsg.innerText = " Your message has NOT sent. Please try again."
                            btnsubmit.disabled = false
                            
                        }
                    },
                    error: function(){
                        spinner.classList.remove('fa-spin')
                        spinner.classList.replace('fa-spinner', 'fa-times')
                        statusMsg.innerText = " Error! Please check your connection or try again."
                        btnsubmit.disabled = false
                    } 
                });
            }
        })
    }
})