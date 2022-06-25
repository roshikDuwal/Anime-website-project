
const middlebox=document.getElementById("middle_box")

const getrecoanimeinfo = async(event)=>{
    try{
        let url=`https://api.jikan.moe/v4/recommendations/anime?limit=20`
        const response=await fetch(url)
        const jsondata= await response.json()
        
        jsondata.data.map((val)=>{      
                let img=document.createElement("img")
                img.src=val.entry[0].images.jpg.image_url
                middlebox.appendChild(img);
        })
        
    }catch{
        console.log("Error");
    }
}

getrecoanimeinfo()

const scrolll=()=>{
    var left=document.querySelector("#middle_box")
    left.scrollBy(-240,0)
}

const scrollr=()=>{
    var right=document.querySelector("#middle_box")
    right.scrollBy(240,0)
}



