const searchBtn = document.querySelector('.search-mobile');
const searchform = document.querySelector('.search-form');
const lol = document.querySelector('.lol');
const sys = document.querySelector('.sys');
const conserv = document.querySelector('.corv');

searchBtn.addEventListener('click',() => {
    if(!searchBtn.classList.contains('search-close')){
        searchform.style.display='block';
        searchBtn.classList.add('search-close');
    } else{
        searchform.style.display='none';
        searchBtn.classList.remove('search-close');
    }
    
})
lol.addEventListener('click',()=>{
    lol.classList.add('lol-img');
})
sys.addEventListener(Selector('lol-img'),()=>{
    sys.classList.add('lol-sys');
})
conserv.addEventListener(('.lol-img'),()=>{
    conserv.classList.add('conservi');
})
    
