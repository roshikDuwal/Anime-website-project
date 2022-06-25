
const getanime=async()=>{
    try{
        const response=await fetch('https://api.jikan.moe/v3/top/anime')
        const jsdata=await response.json()
        
        document.getElementById("tablebody").innerHTML =jsdata.top.map(getitem).join("")

        function getitem(item){
           console.log(item);
            const rankinglist=`
                <tr class="bodypart">
                    <td class="rank" width="20%"> <h1>${item.rank}</h1></td>
                    <td class="title" width="60%"> 
                        <div class="partone">
                            <img src="${item.image_url}" alt="Not found">
                        </div>

                        <div class="partwo">
                            <div class="part">
                            <h2 font-weight="200" margin="0"><a href="${item.url}">${item.title}</a></h2>
                            </div>
                            <div class="part">
                                <h3>${item.type} | episode:${item.episodes}</h3>
                            </div>
                            <div class="part">
                                <h4>${item.start_date}-${item.end_date}</h4>
                            </div>
                            <div class="part">
                                <h4>${item.members} members </h4>
                            </div>  
                        </div>
                    </td>
                    <td class="score" width="20%"> <h2>${item.score}</h1></td>
                </tr>
                <hr>
            `
        return  rankinglist
        }

    } catch{
        console.log("Error");
    }

}

getanime()