const mongoose = require('mongoose')

mongoose.connect(
    'mongodb+srv://sara:311514327@cluster0-l7bjp.mongodb.net/test?retryWrites=true&w=majority',
    { autoReconnect: true }
    , (err) => {
        if (err) throw 'mongo connection problem'
        else console.log('mongo connected')
    })

const productsScheme = {
    barcode: Number,
    name: String,
    price: Number,
    department: String,
    category: String,
    image: String,
    brand: String,
    tags: String,
    description: String,
}

const userModel = mongoose.model('produts', productsScheme) //model פונקציה שמקשרת את הסכמה ל DB

const createProduct = async (data) => {
    return productModel.create(data)
}

const getProducts = async () => { //31:27
    return productModel.find({}, 'barcode name price') // ומציג מסנן לפי מה שנותנים לו
}

const updateProduct = async (update) => {
    return productModel.findOneAndUpdate({ barcode: update.barcode }, {name: update.price}, { runValidators: true, new: true })
}

const deleteProduct = async (barcode) => {
    return productModel.deleteOne({ 'barcode': barcode }), (err) => {
        if (err)
            throw err;
        else
            console.log('barcode:' ,barcode, 'is deleted')
    }

}

module.exports = { createProduct, getProducts, updateProduct, deleteProduct }