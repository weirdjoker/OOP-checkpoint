
// Product class to store id, name, and price
class Product {
    constructor(id, name, price) {
        this.id = id; // Product ID
        this.name = name; // Product Name
        this.price = price; // Product Price
    }
}

// ShoppingCartItem class to store product and its quantity
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product; // Product instance
        this.quantity = quantity; // Quantity of the product
    }

    // Method to calculate total price for this item
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

// ShoppingCart class to manage cart operations
class ShoppingCart {
    constructor() {
        this.items = []; // Array to store ShoppingCartItem instances
    }

    // Method to get the total number of items in the cart
    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    // Method to add an item to the cart
    addItem(product, quantity) {
        // Check if the product is already in the cart
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            // If product exists, update its quantity
            existingItem.quantity += quantity;
        } else {
            // Otherwise, create a new ShoppingCartItem and add it to the cart
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }

    // Method to remove an item from the cart
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Method to display cart items
    displayCart() {
        console.log("Shopping Cart:");
        this.items.forEach(item => {
            console.log(
                `Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: $${item.getTotalPrice()}`
            );
        });
        console.log(`Total Items: ${this.getTotalItems()}, Grand Total: $${this.getGrandTotal()}`);
    }

    // Method to calculate the grand total price of the cart
    getGrandTotal() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
}

// Testing the functionality
// Create some products
const product1 = new Product(1, "Laptop", 1000);
const product2 = new Product(2, "Phone", 500);
const product3 = new Product(3, "Headphones", 100);

// Create a shopping cart instance
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 1); // Add 1 Laptop
cart.addItem(product2, 2); // Add 2 Phones
cart.addItem(product3, 3); // Add 3 Headphones

// Display the cart
cart.displayCart();

// Remove an item from the cart
cart.removeItem(2); // Remove the Phone (product with id 2)

// Display the cart after removal
cart.displayCart();

