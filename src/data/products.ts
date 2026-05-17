export interface Product {
  id: number;
  name: string;
  nameEn: string;
  price: number;
  image: string;
  color: string;
  colorHex: string;
  sizes: string[];
  description: string;
  material: string;
  isBestseller?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Классическая белая",
    nameEn: "Classic White",
    price: 200,
    image: "/images/product1.jpg",
    color: "Белый",
    colorHex: "#FFFFFF",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Базовая белая футболка из 100% органического хлопка. Идеальная посадка, мягкая на ощупь ткань премиального качества.",
    material: "100% органический хлопок, 180 г/м²",
    isBestseller: true,
  },
  {
    id: 2,
    name: "Классическая чёрная",
    nameEn: "Classic Black",
    price: 200,
    image: "/images/product2.jpg",
    color: "Чёрный",
    colorHex: "#1a1a1a",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Глубокий чёрный цвет, который не выцветает после стирки. Универсальная футболка на каждый день.",
    material: "100% органический хлопок, 180 г/м²",
    isBestseller: true,
  },
  {
    id: 3,
    name: "Классическая красная",
    nameEn: "Classic Red",
    price: 200,
    image: "/images/product5.jpg",
    color: "Красный",
    colorHex: "#dc2626",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Яркий красный цвет для смелых образов. Насыщенный оттенок, который не выцветает после стирки.",
    material: "100% органический хлопок, 180 г/м²",
    isBestseller: true,
  },
];
