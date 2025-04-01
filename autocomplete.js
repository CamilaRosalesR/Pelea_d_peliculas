// const fetchData = async(searchTerm) =>{
//     const response = await axios.get(,{
//         params:{
//             apikey:'93660f9e',
//             s:'avengers'
//         }
//     })
//     if(response.data.Error){
//         return[]
//     }
//     console.log(response.data.Search)
// }
// fetchData()


autocompleteConfig={
    renderOption(movie){
        const imgSrc = movie.Poster === 'N/A' ? '': movie.Poster
        return`
        <img src="$(imgSrc)"/>
        `
    
    
    },
    async fetchData(searchTerm){
        apiMovieUr1 = 'http://omdbapi.com/'
        const response = await axios.get(apiMovieUr1,{
            params:{
                apikey:'',
                s: searchTerm
            }
        })
        if(response.dat.Error){
            return[]
        }
        console.log(response.data)
        return response.data.Search
    }
    }
    createAutocomplete({
        ...autocompleteConfig,
        root: document.querySelector('#left-autocomplete'),
        onOptionSelect(movie){
            document.querySelector('.tutorial').classList.add('is-hidden')
            onMovieSelect(movie,document.querySelector('#left-summery'),'right')
        }
    })
    
    
    createAutocomplete({
        ...autocompleteConfig,
        root: document.querySelector('#right-autocomplete'),
        onOptionSelect(movie){
            document.querySelector('.tutorial').classList.add('is-hidden')
            onMovieSelect(movie,document.querySelector('#right-summery'),'right')
        }
    })
    
    
    //crea dos variables para leftMovie y rightMovie
    let leftMovie
    let rightMovie
    
    
    const onMovieSelect = async(movie,sumaryElement,side) =>{
        const response = await axios.get('http://omdbapi.com/',{
        params:{
            apikey:'92f57de2',
            i:movie.imdbID
    
    
        }
    })
    
    
        console.log(response.data)
        summarElement.innerHTML = movieTemplate(response.data)
    
    
        //preguntamos cual lado es
        if(side === 'left'){
            leftMovie = response.data
        }else{
            rightMovie = response.data
        }
        }
    
    
        //preguntamos si tenemos ambos lados
        if(leftMovie && rightMovie){
            //Entonces ejecutamos la funcion descomparación
            runComparison()
        }
    
    
        const runComparison = ()=>{
            console.log('Comparación de peliculas')
            const leftStats = document.querySelectorAll('#let-summary ')
        }
    
    
    
    
    const createAutocomplete= ({}) => {
        // funcion createAutocomplete
    
    
    root.innerHTML=`
            <label><b>Busqueda</b></label>
            <input class="input" />
            <div class ="dropdown">
                <div class="dropdown-menu">
                    <div class="dropdown-content results"></div>
        </div>
    </div>
    `
    }
    
    
    const input= root.querySelector('input')
    const dropdown = root.querySelector('.dropdown')
    const resultsWrapper = root.querySelector('.result')
    
    
    const debonce = (func, delay = 1000) => {
        let timeoutId
        return (...args)=>{
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => {
                func.apply(null, args)
            }, delay)
        }
     }
    
    
     const onInput = async event => {
        const items = await fetchData(event.target.value)
        console.log("Movies", items)
    
    
    
    
        if(!items.length){
            dropdown.classList.remove('is-active')
            return
        }
        resultsWrapper.innerHTML =''
        dropdown.classList.add('is-active')
        for(let item of items){
            const opcion=document.createElement('a')
    
    
            Option.classList.add('Dropdown-item')
            Option.innerHTML= renderOption(item)
            Option.addEventListener('click', () => {
                dropdown.classList.remove('is-active')
                input.value= inputValue (item)
                onOptionSelect(item)
                console.log("onMovieSelect")
            })
            resultsWrapper.appendChild(option)
        }
        input.addEventListener('input', debonce(onInput,1000))
    
    
        document.addEventListener('click', event => {
            if(!root.contains(event.targe)){
                dropdown.classList.remove('is-active')
            }
        })
     }
    
    
    
    