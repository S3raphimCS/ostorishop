interface ItemOption {
  name: string;
  value: string;
}

interface CartItem {
  id: number | string;
  name: string;
  path: string;
  variant: {
    image?: {
      url: string;
      alt?: string;
    };
  };
  price: number;
  quantity: number;
  options?: ItemOption[];
}
