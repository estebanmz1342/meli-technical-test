export interface Item {
  id: string;
  title: string;
  picture: string;
  condition: string;
  free_shipping: boolean;
  price: {
    currency: string;
    amount: string;
    decimals?: string;
  };
}

export interface ItemWithDescription extends Item {
  sold_quantity: number;
  description: string;
}
