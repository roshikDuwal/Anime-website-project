const getseasonlist=async()=>{
    try{
        const response=await fetch('https://api.jikan.moe/v3/season/archive?limit=10')
        const jsdata=await response.json()

        document.getElementById("seasonlist_box").innerHTML =jsdata.archive.map(getitem).join("")
      

        function getitem(item){
            const items=item.seasons
            const seasonname=item.seasons[0]
            Lowercase=seasonname.toLowerCase()
          
            if(items.length<2){
                const rankinglist=`
                <button onclick="clickme('${item.year}','${item.seasons[0]}')">
                    ${item.year}${item.seasons[0]}
                </button>    
                `
                    
                return rankinglist;

            }else if(items.length<=2){
                const rankinglist=`
                    <button onclick="clickme('${item.year}','${item.seasons[0]}')">${item.year}${item.seasons[0]}</button> 
                    <button onclick="clickme('${item.year}','${item.seasons[1]}')">${item.year}${item.seasons[1]}</button> 
                `
                return  rankinglist
                    
                }else if(items.length<=3){
                        const rankinglist=`
                        <button onclick="clickme('${item.year}','${item.seasons[0]}')">${item.year}${item.seasons[0]}</button> 
                        <button onclick="clickme('${item.year}','${item.seasons[1]}')">${item.year}${item.seasons[1]}</button> 
                        <button onclick="clickme('${item.year}','${item.seasons[2]}')">${item.year}${item.seasons[2]}</button> 
                        `
                        return  rankinglist

                }else if(items.length<=4){

                        const rankinglist=`
                            <button onclick="clickme('${item.year}','${item.seasons[0]}')">
                                ${item.year}${item.seasons[0]}
                            </button>   

                            <button onclick="clickme('${item.year}','${item.seasons[1]}')">
                                ${item.year}${item.seasons[1]}
                            </button>

                            <button onclick="clickme('${item.year}','${item.seasons[2]}')">
                                ${item.year}${item.seasons[2]}
                            </button>  

                            <button onclick="clickme('${item.year}','${item.seasons[3]}')">
                                ${item.year}${item.seasons[3]}
                            </button>   
                        `
                
                        return  rankinglist
                    }     
        } 
    }catch{
        console.log("Error");
    }
}

getseasonlist()






const clickme=async(year,season)=>{
    seasonlower=season.toLowerCase()
    try{
        const response=await fetch(`https://api.jikan.moe/v3/season/${year}/${seasonlower}`)
        const jsdata=await response.json()
        console.log(jsdata);

        document.getElementById("seasonalanimelist").innerHTML=jsdata.anime.map(getdata).join("")

        function getdata(val){
            document.getElementById("heading").innerHTML=`<h2>${year}|${season}</h2>`
  
            const seasonanimeList= `
                <div class="seasonbox">
                    <div class="box_size">
                        <img src="${val.image_url}" alt="Loading..">
                    </div>
                    <div class="box_title">
                        <h2><a href="${val.url}">${val.title}</a></h2>
                        <br>
                        
                    </div>
                </div>
            
            `

            return seasonanimeList
        }
        
    }
    catch{
        console.log('error');
    }

   
}




const scrolll=()=>{
    var left=document.querySelector("#seasonlist_box")
    left.scrollBy(-100,0)
}

const scrollr=()=>{
    var right=document.querySelector("#seasonlist_box")
    right.scrollBy(100,0)
}
