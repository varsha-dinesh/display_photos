const input = document.getElementById("input")
const photos = document.querySelector(".photos")
let search = document.querySelector(".fa-search")
console.log(input.value)


input.addEventListener("keydown", (event) => {
    if (event === "Enter")
        apiRequest()

})

document.querySelector(".fa-search").addEventListener("click", () => {
    console.log(input.value)
    apiRequest()
})


document.querySelector(".fa-search").addEventListener("click", () => {
    console.log("clicked")
    apiRequest()
})

function apiRequest() {
    removeImages()

    console.log(input.value)

    const url = 'https://api.unsplash.com/search/photos?query='+input.value+'&per_page=9&client_id=QUd_zO0sRS6M3jwazQT2qTblQSY-0UrA9xUr6Ptd-fA'

    // QUd_zO0sRS6M3jwazQT2qTblQSY-0UrA9xUr6Ptd-fA

    fetch(url)
        .then((response) => {
            if (response.ok) {
                console.log(response)
                return response.json()
            }
            else {
                alert(response.status)
            }
        })
        .then((data) => {
            console.log(data)
            const images = []
            for (let i = 0; i < data.results.length; i++) {
                images[i] = document.createElement("div");
                images[i].className = "img1"
                images[i].style.backgroundImage = 'url('+data.results[i].urls.raw+')'
                console.log(data.results[i])
                console.log(images[i])
                images[i].addEventListener("dblclick", function(){
                    window.open(data.results[i].links.download, '_blank');
                  })
                photos.appendChild(images[i])
            }
        })
    // .catch((error) => {console.log(error)})
}




function removeImages() {
    photos.innerHTML = ""
}

