interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  size: string;
  variant: {
    image?: {
      url: string;
      alt?: string;
    };
  };
  options?: { name: string; value: string }[];
}
