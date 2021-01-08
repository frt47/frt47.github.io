/*-----------MENÜ GÖSTERİMİ------*/
const showMenu=(toggleId, navId)=>{
    const toggle= document.getElementById(toggleId),
    nav= document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
        
    }
}
showMenu('nav-toggle','nav-menu')

/*-------Menüyü Aktif etme ve Silme----*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // Menüyü aktif et
    navLink.forEach(n=> n.classList.remove('active'))
    this.classList.add('active')
    //Mobil menüyü kaldır(Sil)
    const navMenu= document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n=> n.addEventListener('click',linkAction))

 /*-------KAYDIRMA ANİMASYON GÖSTERİMİ FONKSİYONU----*/
    const sr = ScrollReveal({
        origin: 'top',
        distance:'80px',
        duration: 2000,
        reset: true
    })

    // Anasayfa --- Kaydırma

        sr.reveal('.anasayfa__title',{}) 
        // Delay komutları https://stackoverflow.com/questions/17883692/how-to-set-time-delay-in-javascript adresinden esinlenmiştir. 
        sr.reveal('.button',{delay: 200})  
        sr.reveal('.anasayfa__img',{delay: 400})  
        sr.reveal('.anasayfa__social-icon',{ interval: 200})  
        
        // Hakkımda Bölümü--Kaydırma
        sr.reveal('.hakkimda__img',{})  
        sr.reveal('.hakkimda__subtitle',{delay:200})  
        sr.reveal('.hakkimda__text',{ delay: 400})  

     // Becerilerim ---Kaydırma
        sr.reveal('.becerilerim__subtitle',{})  
        sr.reveal('.becerilerim__text',{delay:200}) 
        sr.reveal('.becerilerim__data',{interval:200}) 
        sr.reveal('.becerilerim__img',{delay:400}) 


      // Çalışmalarım  ---Kaydırma
      sr.reveal('.galeri__img',{interval:200})

       // İletişim--- Kaydırma
       sr.reveal('.iletisim__input',{interval:200})


        
    
