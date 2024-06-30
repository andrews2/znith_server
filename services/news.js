module.exports = function(app) {
    app.get('/api/news', (req, res) => {
        res.send('Hello News');
    })
}