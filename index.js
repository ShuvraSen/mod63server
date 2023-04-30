const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const categories=require('./data/categories.json')
const news=require('./data/news.json')

app.get('/', (req, res) => {
    res.send('module63 is running- dragon news')
  })


  app.get('/categories',(req,res)=>{
    res.send(categories);
  })

  // to get for all news the code will be like that.
  // this '/news' can be any name that i choose to this route. 
  app.get('/news',(req,res)=>{
    res.send(news);
  })

  // to get specific id related api call
  app.get('/categories/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    console.log(id);
    if(id===0){
      res.send(news)
    }
   else{
    const categoryNews=news.filter(n=> parseInt(n.category_id)===id)
    res.send(categoryNews);
   }
  })

  // to get category related news api call
  app.get('/news/:id',(req,res)=>{
    const id=req.params.id;
    console.log(id);
    const selectedNews=news.find(n=> n._id===id)
    res.send(selectedNews);
  })

 
  
  app.listen(port, () => {
    console.log(`Dragon news on port ${port}`)
  })