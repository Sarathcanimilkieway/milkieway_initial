const request = require('request')
const fetch = require('node-fetch')

const cheerio = require('cheerio')


const url_first = "https://www.imdb.com/find?q="
const url_last = "&s=tt&ttype=ft&ref_=fn_ft"

// url = url_first + term + url_last

searchMovie = (term) => {
    url = url_first + term.replace(' ' , '%20') + url_last
    
    // console.log(url)
    return fetch(url).then(response => response.text())

}

let movie_list = []

searchMovie('star wars')
    .then((response) => {
        // console.log(response)

        const $ = cheerio.load(response)
        $(".result_text").each(function( index , element) {
            let movie = $(element).text()

            movie_list.push(movie.trim())
        })
        

        console.log(movie_list)
    })