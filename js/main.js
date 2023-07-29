const btnApp = document.getElementById('btnApp');

btnApp.addEventListener('click', () => {
    const toffle = document.getElementById('toffle')
    // toffle.style.display = toffle.style.display == 'block' ? 'none' : 'block' ;
    if(toffle.style.display === '' || toffle.style.display === 'none'){
        toffle.style.display = 'block'
        btnApp.style.backgroundColor = 'rgb(71, 74, 82)'
        btnApp.style.borderRadius = '50px'
    }
    else{
        toffle.style.display = 'none'
        btnApp.style.backgroundColor = 'inherit'
    }
})
// btnApp.addEventListener('focusout', () => {
//     const toffle = document.getElementById('toffle')
//     toffle.style.display = 'none'
//     btnApp.style.backgroundColor = 'inherit'
// })
