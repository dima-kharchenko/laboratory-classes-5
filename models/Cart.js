const Product = require('./Product')

class Cart {
    static #items = []

    static add(productName) {
        const product = Product.findByName(productName)
        console.log("------->", product)

        if(product) {
            const product_item = this.#items.find(item => item.product.name === productName)
            
            if(product_item) {
                product_item.quantity += 1
            } else {
                this.#items.push({ product: product, quantity: 1 })
            }
        } else {
            throw new Error('Product not found test test')
        }
    }

    static getItems(){
        return this.#items
    }

    static getTotalPrice(){
        let sum = 0
        this.#items.forEach(item => sum += item.product.price * item.quantity)

        return sum
    }

    static getProductsQuantity(){
        let sum = 0
        this.#items.forEach(item => sum += item.quantity)

        return sum
    }

    static clearCart(){
        this.#items = []
    }
}


module.exports = Cart;
