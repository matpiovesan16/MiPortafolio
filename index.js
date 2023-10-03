var menu = document.getElementById('menu');
var navBar = document.getElementById('navBar');
var cajaMenu= document.getElementById('cajaMenu');
var menuCerrar = document.getElementById('menuCerrar');


function menuAbrirPortafolio(){
    menu.setAttribute('class', 'fa-solid fa-bars text-3xl text-slate-200 sm:hidden cursor-pointer hover:text-opacity-50 animate__animated animate__fadeInRight hidden');
    cajaMenu.setAttribute('class', 'flex justify-between w-full p-9 max-sm:fixed max-sm:top-0 max-sm:bg-slate-900 max-sm:z-10 max-sm:h-2/5');
    navBar.setAttribute('class','text-slate-200 text-xl animate__animated animate__fadeInDown max-sm:flex max-sm:h-full max-sm:flex-col max-sm:justify-center');
    menuCerrar.setAttribute('class', 'fa-solid fa-x text-3xl text-slate-200 sm:hidden cursor-pointer hover:text-opacity-50 animate__animated animate__fadeInRight absolute left-[84.5%]');

}


function menuCerrarPortafolio (){
    menu.setAttribute('class', 'fa-solid fa-bars text-3xl text-slate-200 sm:hidden cursor-pointer hover:text-opacity-50 animate__animated animate__fadeInRight');
    cajaMenu.setAttribute('class', 'flex justify-between w-full p-9 max-sm:fixed max-sm:top-0 max-sm:bg-slate-900 max-sm:z-10');
    navBar.setAttribute('class','text-slate-200 text-xl animate__animated animate__fadeInDown max-sm:flex max-sm:h-full max-sm:flex-col max-sm:justify-center max-sm:hidden');
    menuCerrar.setAttribute('class', 'fa-solid fa-x text-3xl text-slate-200 sm:hidden cursor-pointer hover:text-opacity-50 animate__animated animate__fadeInRight absolute left-[100%] hidden');

}


menu.addEventListener('click', menuAbrirPortafolio);
menuCerrar.addEventListener('click', menuCerrarPortafolio);