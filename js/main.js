const btnApp = document.getElementById('btnApp');
const inputSearcher = document.getElementById('inputSearcher');
const buscarGoogle = document.getElementById('buscarGoogle');

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

document.addEventListener('click', (e) => {
    if(e.target.id == 'inputSearcher'){
        const btnContainer = document.getElementById('btnContainer')
        const sectionSearcher = document.getElementById('sectionSearcher')
        const searcherExpandible = document.getElementById('searcherExpandible')
        btnContainer.style.display = 'none'
        sectionSearcher.classList.add('section_searcher__focuses')
        searcherExpandible.style.display = 'flex'
    }else if(e.target.className != 'section_searcher section_searcher__focuses' && e.target.className != 'bg_Clock' && e.target.className != 'searcher_borrar' && e.target.className != 'section_buttonsContainer'  && e.target.localName != 'li' && e.target.localName != 'span' && e.target.className != 'buttonsContainer_button'){
        const btnContainer = document.getElementById('btnContainer')
        const sectionSearcher = document.getElementById('sectionSearcher')
        const searcherExpandible = document.getElementById('searcherExpandible')
        btnContainer.style.display = 'flex'
        sectionSearcher.classList.remove('section_searcher__focuses')
        searcherExpandible.style.display = 'none'
    }
})

buscarGoogle.addEventListener('click', () => {
    
})