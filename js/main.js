const btnApp = document.getElementById('btnApp');
const inputSearcher = document.getElementById('inputSearcher');

btnApp.addEventListener('click', () => {
    const toffle = document.getElementById('toffle')
    // toffle.style.display = toffle.style.display == 'block' ? 'none' : 'block' ;
    if(toffle.style.display === '' || toffle.style.display === 'none'){
        toffle.style.display = 'flex'
        btnApp.style.backgroundColor = 'rgba(71, 74, 82, 0.5)'
        btnApp.style.borderRadius = '50px'
    }
    else{
        toffle.style.display = 'none'
        btnApp.style.backgroundColor = 'inherit'
    }
})

inputSearcher.addEventListener('focus', () => {
    const btnContainer = document.getElementById('btnContainer')
    const sectionSearcher = document.getElementById('sectionSearcher')
    const searcherExpandible = document.getElementById('searcherExpandible')
    btnContainer.style.display = 'none'
    sectionSearcher.classList.add('section_searcher__focuses')
    searcherExpandible.style.display = 'flex'
})
inputSearcher.addEventListener('blur', () => {
    const btnContainer = document.getElementById('btnContainer')
    const sectionSearcher = document.getElementById('sectionSearcher')
    const searcherExpandible = document.getElementById('searcherExpandible')
    btnContainer.style.display = 'flex'
    sectionSearcher.classList.remove('section_searcher__focuses')
    searcherExpandible.style.display = 'none'
})