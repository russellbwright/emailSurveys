// https://rallycoding.herokuapp.com/api/music_albums

// function fetchA(){
//     fetch('https://rallycoding.herokuapp.com/api/music_albums')
//         .then(res => res.json())
//         .then(albums => console.log(albums))
// }

// fetchA();


// https://rallycoding.herokuapp.com/api/music_albums

const fetchA = async () => {
   const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
   const json = await res.json()
        
   console.log(json)
}

fetchA();