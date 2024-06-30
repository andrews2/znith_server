module.exports = function(app) {
    
    const articles = [];

    async function getArticles() {
        if (articles.length === 0) {
            try {
                const data = await fetch(`http://api.mediastack.com/v1/news?access_key=${process.env.NEWS_API_KEY}&limit=100`);
                const newArticles = await data.json();
                articles = newArticles.data;
            } catch(e) {
                console.error(e);
            }
        }
    }

    app.get('/api/news', (req, res) => {
        res.json({ articles });
    })
}