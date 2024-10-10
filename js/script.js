/*
! Script para el navbar 
Llamamos los métodos document.addEventListener junto con los parámetros 
'DOMContentLoaded' y una función flecha llamada 
*/
document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show');
        }, 100 * index);
    });

});

//! Código del footer

document.getElementById('year').textContent = new Date().getFullYear();