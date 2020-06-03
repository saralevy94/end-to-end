const BL = require('./BL')

function Router(app) {

    app.get('/', (req, res) => {
        res.send(`<h1>Hello word</h1>`)
    })

    app.post('/product', async (req, res) => {
        try {
            const { body } = req
            const result = await BL.products.create
                ({
                    barcode: body.barcode,
                    name: body.name,
                    price: body.price,
                    department: body.department,
                    category: body.category,
                    image: body.image,
                    brand: body.brand,
                    tags: body.tags,
                    description: body.description,
                })
            res.send(result)
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })
    app.get('/product', async (req, res) => {
        try {
            const result = await BL.products.read({ barcode: '', name: '' })
            res.send(result)
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })
    app.get('/productFilter/:filter', async (req, res) => {
        try {
            const { Category } = req.params
            const result = await BL.products.getOneAllAndFilterCategory(Category)
            res.send(result) //http/localhost
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })

app.get('/productFilter/', async (req, res) => {
    try {
        const { from, to } = req.body
        const result = await BL.products.getOneAllAndFilterPrice(from, to)
        res.send(result) //http/localhost
    } catch (error) {
        res.send({ error: error.message || error })
    }
})
app.put('/product', async (req, res) => {
    try {
        const { body } = req
        const result = await BL.products.update({ barcode: body.barcode, price: body.price })
        res.send(result)
    } catch (error) {
        res.send({ error: error.message || error })
    }
})
app.delete('/product', async (req, res) => {
    try {
        const { body } = req

        // const { barcode } = req.params
        const result = await BL.products.delete({ barcode: body.barcode })
        res.send(result)
    } catch (error) {
        res.send({ error: error.message || error })
    }
})
}
module.exports = Router