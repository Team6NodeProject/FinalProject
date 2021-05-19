const router = require('express').Router()
const News = require('../models/News');

router.get('/getNews', (req, res) => {
    News.find((err, result) => {
        if(err) throw err;
        else res.send(result);
    })
})

router.post('/addNews', (req, res) => {
  const { title, description, image, publishDate, category} = req.body

  News.create(req.body, (err, result) => {
    if(err) res.send('Error inserting document!!');
    else{
        res.send({ message : 'Document inserted successfully!!'});
    }
})
})

router.delete('/delete/:title', (req, res) => {
    let title = req.params.title;
    News.findOneAndDelete({"title" : title}, (err, result) => {
        if(err) res.send('Error deleting document!!');
        else res.send({ message : 'Document deleted successfully!!'});
    })
})

module.exports = router;