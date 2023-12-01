import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import {
  // FiftyPercentDiscount,
  NoDiscount,
  // TenPercentDiscount,
} from './classes/discount';

const messaging = new Messaging();
const persistency = new Persistency();
// const fiftyPercent = new FiftyPercentDiscount();
// const tenPercent = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingcart = new ShoppingCart(noDiscount);
const order = new Order(shoppingcart, messaging, persistency);

shoppingcart.addItem(new Product('Camiseta', 49.9));
shoppingcart.addItem(new Product('Caderno', 9.9));
shoppingcart.addItem(new Product('Lapis', 1.59));

console.log(shoppingcart.items);
console.log(shoppingcart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
