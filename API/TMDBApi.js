const API_TOKEN = "6921a57a0263ff184af6c22ff85541a8"

export function getFilmsFromApiWithSearchedText (text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.log(error))
}

export function testData () {
  const url = 'https://jsonplaceholder.typicode.com/posts/1'
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}