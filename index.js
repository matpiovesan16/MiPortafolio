// Constantes para las clases
const MENU_BUTTON_VISIBLE = 'fa-solid fa-bars text-3xl text-slate-200 sm:hidden cursor-pointer hover:text-opacity-50 animate__animated animate__fadeInRight';
const MENU_BUTTON_HIDDEN = `${MENU_BUTTON_VISIBLE} hidden`;
const MENU_CLOSE_VISIBLE = 'fa-solid fa-x text-3xl text-slate-200 sm:hidden cursor-pointer hover:text-opacity-50 animate__animated animate__fadeInRight absolute left-[84.5%]';
const MENU_CLOSE_HIDDEN = `${MENU_CLOSE_VISIBLE} hidden`;
const MENU_BOX_OPEN = 'flex justify-between w-full absolute p-9 max-sm:fixed max-sm:top-0 max-sm:bg-slate-900 max-sm:z-10 max-sm:h-2/4';
const MENU_BOX_CLOSED = 'flex justify-between w-full p-9 absolute max-sm:fixed max-sm:top-0 max-sm:bg-slate-900 max-sm:z-10';
const NAV_BAR_OPEN = 'text-slate-200 text-xl animate__animated animate__fadeInDown max-sm:flex max-sm:h-[220px] max-sm:flex-col max-sm:items-center max-sm:justify-center relative top-[15%] left-[-5%]';
const NAV_BAR_CLOSED = 'text-slate-200 text-xl animate__animated animate__fadeInDown max-sm:flex max-sm:h-full max-sm:flex-col max-sm:justify-center max-sm:hidden';

// Obtener elementos del DOM
const menu = document.getElementById('menu');
const navBar = document.getElementById('navBar');
const cajaMenu = document.getElementById('cajaMenu');
const menuCerrar = document.getElementById('menuCerrar');

// Verificar que todos los elementos existan
if (!menu || !navBar || !cajaMenu || !menuCerrar) {
    console.error('No se encontraron todos los elementos necesarios para el menú');
} else {
    // Funciones del menú
    function menuAbrirPortafolio() {
        try {
            menu.setAttribute('class', MENU_BUTTON_HIDDEN);
            cajaMenu.setAttribute('class', MENU_BOX_OPEN);
            navBar.setAttribute('class', NAV_BAR_OPEN);
            menuCerrar.setAttribute('class', MENU_CLOSE_VISIBLE);
        } catch (error) {
            console.error('Error al abrir el menú:', error);
        }
    }

    function menuCerrarPortafolio() {
        try {
            menu.setAttribute('class', MENU_BUTTON_VISIBLE);
            cajaMenu.setAttribute('class', MENU_BOX_CLOSED);
            navBar.setAttribute('class', NAV_BAR_CLOSED);
            menuCerrar.setAttribute('class', MENU_CLOSE_HIDDEN);
        } catch (error) {
            console.error('Error al cerrar el menú:', error);
        }
    }

    // Event listeners
    menu.addEventListener('click', menuAbrirPortafolio);
    menuCerrar.addEventListener('click', menuCerrarPortafolio);
}