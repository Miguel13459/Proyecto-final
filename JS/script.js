const nav = document.querySelector('.segunda-barra');
/*const logo = document.querySelector('#logo-segunda');*/

window.addEventListener('scroll', function(){
    nav.classList.toggle('activo', window.scrollY > 0)
})

/*window.addEventListener('scroll', function(){
    if(window.scrollY > 0){
        nav.classList.toggle('activo', window.scrollY > 0);
        logo.style.width = "10%";
        logo.className = 'img-logo';
        const contenedor = document.querySelector('.img-logo'); 
        contenedor.innerHTML = '<img src="img/logo.png">';
    }
    else{
        logo.style.width = "0";
        logo.classList.remove('img-logo')
    }
})*/

/*if(nav.classList.toggle('activo', window.scrollY > 0)){
    logo.style.width = "10%";
}*/

/*window.addEventListener("scroll", function() {
    const navbar = document.getElementById(".segunda-barra");
    const logo = document.getElementById("logo");
    
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
      logo.style.display = "block";
    } else {
      navbar.classList.remove("scrolled");
      logo.style.display = "none";
    }
  });*/
  