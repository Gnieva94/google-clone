const btnApp = document.getElementById('btnApp');
const inputSearcher = document.getElementById('inputSearcher');
const btnBorrar = document.getElementsByClassName('searcher_borrar');

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
    console.log(e)
    if(e.target.id == 'inputSearcher'){
        const btnContainer = document.getElementById('btnContainer')
        const sectionSearcher = document.getElementById('sectionSearcher')
        const searcherExpandible = document.getElementById('searcherExpandible')
        btnContainer.style.display = 'none'
        sectionSearcher.classList.add('section_searcher__focuses')
        searcherExpandible.style.display = 'flex'
    }else if(e.target.className != 'section_searcher section_searcher__focuses' && e.target.className != 'bg_Clock' && e.target.className != 'searcher_borrar' && e.target.className != 'section_buttonsContainer' && e.target.className != 'searcher_expandible'  && e.target.localName != 'li' && e.target.localName != 'span' && e.target.className != 'buttonsContainer_button'){
        const btnContainer = document.getElementById('btnContainer')
        const sectionSearcher = document.getElementById('sectionSearcher')
        const searcherExpandible = document.getElementById('searcherExpandible')
        btnContainer.style.display = 'flex'
        sectionSearcher.classList.remove('section_searcher__focuses')
        searcherExpandible.style.display = 'none'
    }
})

function agregarBusqueda(){
    const inputSearcher = document.getElementById('inputSearcher')
    if(inputSearcher.value != ''){
        const ulSearcherExpandible = document.getElementById('ulSearcherExpandible')
        const li = document.createElement('li')
        const div = document.createElement('div')
        const span = document.createElement('span')
        const button = document.createElement('button')
        div.classList.add('bg_Clock')
        let txt = document.createTextNode(inputSearcher.value)
        let txta = document.createTextNode('Borrar')
        span.appendChild(txt)
        button.appendChild(txta)
        button.classList.add('searcher_borrar')
        li.appendChild(div)
        li.appendChild(span)
        li.appendChild(button)
        ulSearcherExpandible.appendChild(li)
    }
}


