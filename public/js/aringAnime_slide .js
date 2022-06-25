
const GetTopAnime = async(indexdata)=>{
try{
    let url=`https://api.jikan.moe/v3/top/anime/1/airing?limit=6`;
    const response = await fetch(url);
    const jsdata=await response.json();
  

    const imgdata =jsdata.top[indexdata].image_url
    const titledata=jsdata.top[indexdata].title
    const scoredata=jsdata.top[indexdata].score

    const imgid=`imgdata-${indexdata}`
    const titleid= `title-${indexdata}`
    const scoreid = `score-${indexdata}`
   
    const ID=document.getElementById(imgid);
    const imgsrc=document.createElement('img');
    imgsrc.src=imgdata;
    ID.appendChild(imgsrc);
  
    document.getElementById(titleid).innerText=titledata
    document.getElementById(scoreid).innerText='Score:' + scoredata

    imgsrc.classList.add('d-block')
    imgsrc.classList.add('w-100')
    imgsrc.classList.add('h-100')

    } catch{
        console.log('ERROR!!');
    }
}

GetTopAnime(0);
GetTopAnime(1);
GetTopAnime(2);
GetTopAnime(3);
GetTopAnime(4);

