import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';

const messaging = new Messaging();
const persistency = new Persistency();
const shoppingcart = new ShoppingCart();
const order = new Order(shoppingcart, messaging, persistency);

shoppingcart.addItem(new Product('Camiseta', 49.9));
shoppingcart.addItem(new Product('Caderno', 9.9));
shoppingcart.addItem(new Product('Lapis', 1.59));

console.log(shoppingcart.items);
console.log(shoppingcart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
