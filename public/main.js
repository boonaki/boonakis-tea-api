let animation = bodymovin.loadAnimation({
    container: document.getElementById('animContainer'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets1.lottiefiles.com/packages/lf20_7zfgb7k9.json' // lottie file path
})

function openReq(id){
    id = id.split('-')[1]
    let expandeds = document.getElementsByClassName('res')
    for(let i = 0; i < expandeds.length; i++){
        expandeds[i].classList.add('hidden')
    }
    document.getElementById(`res-${id}`).classList.remove('hidden')
}

// fillOrganized()
// fillUnorganized()

// function fillOrganized(){
//     let organized = document.querySelector('#organized')
//     let URL = "https://tea-api-boonaki.herokuapp.com/api/teas"
//     fetch(URL)
//         .then(res => res.json())
//         .then(data => {
//             // console.log()
//             // organized.innerHTML = data
//         })
// }
// function fillUnorganized(){
//     let unorganized = document.querySelector('#unorganized')
//     let URL = "https://tea-api-boonaki.herokuapp.com/api/all"
//     fetch(URL)
//         .then(res => res.json())
//         .then(data => {
//             data.forEach((obj) => {
//                 console.log(obj)
//             })
//             // unorganized.innerHTML = data
//         })
// }