const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const port = 8000

const staticPath=path.join(__dirname,"../public")
app.use(express.static(staticPath))

const templatePath=path.join(__dirname,"../templates/views")
app.set("view engine","hbs")
app.set("views",templatePath)

const partialPath=path.join(__dirname,"../templates/partials")
hbs.registerPartials(partialPath)

app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/topanime",(req,res)=>{
    res.render("top_anime")
})

app.get("/seasonalanime",(req,res)=>{
    res.render("seasonal_anime")
})

app.get("/searchedanime",(req,res)=>{
    res.render("searched_anime")
})



app.get("/*",(req,res)=>{
    res.render("404error",{
        errorcomment:"404 error!!",
        comment:"Page not found."
    })
})


app.listen(port,()=>{
    console.log(`Connected to port ${port}`);
})