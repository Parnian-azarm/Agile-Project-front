async function makeFetchtoBackEndToGetData() {
    const response = await fetch('https://agile-2199.uw.r.appspot.com/api')
    const json = await response.json()
    return json
  }
  



  
  async function addSomeElementsToThePage() {
    const listOfMovies = await makeFetchtoBackEndToGetData()
    return listOfMovies
  }
  




const allMovies = document.getElementById("display_movies")

let idTracker = 0

// function createMovieElement(listOfMovies){
//   const movie = document.createElement("div")
//   const img = document.createElement("img")
//   const name = document.createElement("p")
//   movie.id = idTracker
//   idTracker = idTracker + 1
//   img.src = 'img/rushhour.jfif'
//   movie.append(img)
//   name.textContent = listOfMovies[0].title
//   movie.append(name)
//   allMovies.append(movie)
// }


// const listOfMovies = addSomeElementsToThePage()
// createMovieElement(listOfMovies)
// console.log(listOfMovies)




async function main() {
    // await makeFetchtoBackEndToGetData()
    const listOfMovies = await makeFetchtoBackEndToGetData()
    await displayAllMovies(listOfMovies)
    // await viewDataInMovieList(listOfMovies)
    // console.log(listOfMovies)
  }

// function viewDataInMovieList(listOfMovies) {
//     for (let information of listOfMovies){
//         console.log(information)
//     }
// }

function displayAllMovies(listOfMovies){
    for (let numberOfMovies of listOfMovies) {
        // createMovieElement(listOfMovies)
        const titleTag = document.createElement('p');
        const objectTag = document.createElement('p');
        const ratingTag = document.createElement('p');
        const movieDiv = document.createElement('div');
        const imgTag = document.createElement('img');

        movieDiv.id = idTracker

        idTracker = idTracker + 1
        for (let object in numberOfMovies) {
            console.log(object)
            if ( object === 'title' ) {
                titleTag.textContent = numberOfMovies.title
                imgTag.src = 'img/' + numberOfMovies.title + '.jfif'
                movieDiv.append(titleTag)
                movieDiv.append(imgTag)
            }
            if ( object === 'year' )  {
                objectTag.textContent = numberOfMovies.year
                movieDiv.append(objectTag)
            }
            if ( object === 'rating' ) {
                ratingTag.textContent = numberOfMovies.rating
                movieDiv.append(ratingTag)
            }


        }
        allMovies.append(movieDiv)
        }
    
}
main()