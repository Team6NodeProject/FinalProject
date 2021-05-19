const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema ({
    title: { type: String, required: true},
    description: { type: String, required: true},
    image: { type: String, required: true},
    publishDate: { type: String, required: true},
    category: { type: String, required: true}
}, {
    timestamps: true
})

const News = mongoose.model('News', NewsSchema, 'weatherInfo');

module.exports = News;