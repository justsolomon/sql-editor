export interface Order {
  orderID: number;
  customerID?: string;
  employeeID?: number;
  orderDate?: string;
  requiredDate?: string;
  shippedDate?: string;
  shipVia?: number;
  freight?: number;
  shipName: string;
  shipAddress?: string;
  shipCity?: string;
  shipRegion?: string;
  shipPostalCode?: string | number;
  shipCountry: string;
}
