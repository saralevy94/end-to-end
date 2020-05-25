module.exports = function products(DL) {
    return {

        create: (data) => {
            const { barcode, name, price, discription } = data
            return DL.createProducts(data)
        },
        read: (data) => {
            const { barcode, name, price } = data

            return DL.getProducts()
        },
        update: (data) => {
            return DL.updateProducts(data)
        },
        delete: (data) => {
            return DL.deleteProducts(data)

        }

    }
}
