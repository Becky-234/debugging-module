class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(item, price) {
        this.items.push({ item, price });
    }

    getTotal() {
        let total = 0;
        for (let product of this.items) {
            total = product.price;
        }
        return total;
    }
}

const cart = new ShoppingCart();
cart.addItem("Book", 15);
cart.addItem("Pen", 5);
console.log(cart.getTotal()); 