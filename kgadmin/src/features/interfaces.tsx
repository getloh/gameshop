export interface inventoryProperties {
    inventory_id: number;
    title: string;
    platform: string;
    stock: number;
    price: number;
    discount: any;
  };

  export interface orderProperties {
    user_id: number;
    order_id: number;
    inventory_id: number;
    quantity: number;
    status: null | "Dispatched" | "Complete" | "In Progress";
    payment: string;
    order_date: string;
    title: string;
    platform: string;
    price: number
  };

export interface pricePerOrderType {
    value: number;
    order_date: string;
    quantity: number
  }

export interface dailyDataType {
  date: string;
  totalval: number;
  quantity: number;
}

export interface orderDataDetailType {
  user_id: number;
  order_id: number;
  inventory_id: number;
  quantity: number;
  order_date: string;
  firstname: string;
  lastname: string;
  email: string;
  address: string;
  postcode: string;
  title: string;
  platform: string;
  price: number;
  discount: number;
}

export interface userDetailType {
  user_id: number;
  firstname: string;
  lastname: string;
  email: string;
  address: string;
  postcode: string;
}