


// ==========================Hover Effect====================




const listItems = document.querySelectorAll('.listItems');
const iconFontAwsome  = document.querySelectorAll('.iconFontAwsome');

  
    for(let i = 0; i<listItems.length; i++){

        listItems[i].classList.add('w-20', 'h-12', 'leading-10', 'relative', 'lg:flex', 'justify-center', 'items-center', 'before:rounded-full', 'before:w-0', 'before:h-1', 'before:bg-white', 'before:absolute', 'before:bottom-0','before:left-0', 'hover:before:w-full', 'before:transition-all', 'before:duration-700'); 

        listItems[i].addEventListener('mouseenter',function(e){
            e.preventDefault();
            listItems[i].classList.add('hover:before:w-full','before:left-0');
            
        })

        listItems[i].addEventListener('mouseleave',function(ev){
            ev.preventDefault();
            listItems[i].classList.add('before:w-0','before:right-0');
            listItems[i].classList.remove('before:left-0');
            
        })
    }

    for(let i = 0; i<iconFontAwsome.length; i++){
        iconFontAwsome[i].classList.add('w-12','h-12', 'flex','leading-10','flex-row','justify-center','relative','items-center');
    }






//    ==========================Responsive Menu setup====================

const microMenu = document.querySelectorAll('.microMenu');


for(let i=0; i<microMenu.length; i++){
    microMenu[i].classList.add('w-full', 'h-12', 'leading-10','px-8');
}
// ==============================================

const barBtn = document.querySelector('.barBtn');
const menuShow = document.querySelector('.menuShow');
const showBar = document.querySelector('.showBar');
const crossBar = document.querySelector('.crossBar');


barBtn.addEventListener('click', function(){
    menuShow.classList.remove('-translate-x-[600px]');
    menuShow.classList.add('left-0');
    barBtn.classList.add('hidden');
    crossBar.classList.remove('hidden');
})

crossBar.addEventListener('click', function(){
    menuShow.classList.add('-translate-x-[600px]');
    menuShow.classList.remove('left-0');
    barBtn.classList.remove('hidden');
    crossBar.classList.add('hidden');
})
