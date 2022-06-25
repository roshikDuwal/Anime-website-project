const animename = document.getElementById("animename")
const submitbtn= document.getElementById("submitbtn")
const start=document.getElementById("start")

const getanimeinfo = async(event)=>{
    event.preventDefault()
    const Animename=animename.value
    start.classList.add("searchcontainer")
    try{
        let url=`https://api.jikan.moe/v3/search/anime?q=${Animename}&order_by=title&sort=asc&limit=20`
        const response=await fetch(url)
        const jsondata= await response.json()

        start.innerHTML=jsondata.results.map(getdata).join("")

        function getdata(item){
            
            const seasonanimeList= `
                <div class="seasonbox">
                    <div class="box_size">
                        <img src="${item.image_url}" alt="Loading..">
                    </div>
                    <div class="box_title">
                        <h2><a href="${item.url}">${item.title}</a></h2>
                        <h5>Episode:${item.episodes}</h5>
                        <h5>Type:${item.type}</h5>
                        <h5>Score:${item.score}</h5>
                        <br>  
                    </div>
                </div>
            `

        return seasonanimeList
        }
      
    }catch{
        console.log("Error");
    }
}

submitbtn.addEventListener('click',getanimeinfo)


