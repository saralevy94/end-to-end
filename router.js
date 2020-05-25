const BL = require('./BL')

function Router(app) {

    app.get('/', (req, res) => {
        res.send(`<h1>Hello word</h1>`)
    })

    app.post('/products', async (req, res) => {
        try {
            const { body } = req
            const result = await BL.products.create({ barcode: body.barcode })
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
    app.put('/product/:barcode', async (req, res) => {
        try {
            const { barcode } = req.params,
                { newPrice } = req.qeury
            const result = await BL.products.update({ barcode, newPrice })
            res.send(result)
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })
    app.delete('/product/:barcode', async (req, res) => {
        try {
            const { barcode } = req.params
            const result = await BL.products.findOneAndDelete({ barcode:barcode })
            res.send(result)
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })
}
module.exports = Router