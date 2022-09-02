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
    console.log(expandeds.length + 1, id)
    for(let i = 1; i < expandeds.length + 1; i++){
        expandeds[i].classList.add('hidden')
    }
    document.getElementById(`res-${id}`).classList.remove('hidden')
}