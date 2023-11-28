import { OrderStatus } from './interfaces/order-status';
import { ShoppingCart } from './shopping-cart';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messager: Messaging,
    private readonly persistency: Persistency,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Carrinho de compras vazio');
      return;
    }

    this.messager.sendMessage(
      `Seu Pedido com total de ${this.cart.total()} foi recebido`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
    this._orderStatus = 'closed';
  }
}
