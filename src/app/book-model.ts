
export enum EnumCategory {
  Newspaper,
  Newsletter,
  Magazine,
  Book
};
export interface BookModel {
  name: string;
  description: string;
  price: number;
  category: EnumCategory;
  createDate: number;
  isAvailable: boolean;
};
