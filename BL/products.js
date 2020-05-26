module.exports = function products(DL) {
    return {

        create: (data) => {
            const { barcode, name, price, discription, category, image, brand, tags, description } = data
            return DL.createProduct(data)
        },
        read: (data) => {
            const { barcode, name, price } = data
            return DL.getProducts()
        },
        update: (data) => {
            return DL.updateProduct(data)
        },
        delete: (data) => {
            return DL.deleteProduct(data)

        }

    }
}
