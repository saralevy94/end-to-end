module.exports = function products(DL) {
    return {

        create: (data) => {
            const { barcode } = data
            let dlReturn = await DL.getOnePrudactByBarcode(barcode)
            if (!dlReturn[0])
                return DL.createProduct(data)
            throw 'barcode exists'
        },

        read: () => {
            return DL.getProducts()
        },

        readOneByPrice: (data) => {
            return DL.getOneAllAndFilterPrice(data)
        },

        readOneByCategory: (category) => {
            return DL.getAndFilterByDescription(category)
        },

        readOne: async (barcode) => {
            let dlReturn = await DL.getOnePrudactByBarcode(barcode)
            if (dlReturn[0])
                return dlReturn
            throw 'barcode dos not exist'
        },

        update: async (data) => {
            let dlReturn = await DL.updateProduct(barcode)
            if (dlReturn)
                return dlReturn
            throw 'barcode dos not exist'
        },

        delete: async (data) => {
            const { barcode } = data
            let dlReturn = await DL.getOnePrudactByBarcode(barcode)
            if (dlReturn[0])
                return DL.deleteProduct(data)
            throw 'barcode exists'
        }

    }
}
