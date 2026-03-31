export interface Car {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  brand: string;
  specs?: {
    engine: string;
    power: string;
    acceleration: string;
    topSpeed: string;
  };
}

export const cars: Car[] = [
  {
    id: 1,
    name: "BMW M4 Competition",
    brand: "BMW",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&auto=format&fit=crop&q=80",
    price: "$78,000",
    description: "The BMW M4 Competition Coupe offers impressive power and agility. Featuring a 3.0-liter BMW M TwinPower Turbo inline 6-cylinder engine with up to 503 horsepower.",
    specs: { engine: "3.0L TwinTurbo I6", power: "503 hp", acceleration: "3.8s 0–60", topSpeed: "180 mph" }
  },
  {
    id: 2,
    name: "Audi RS5 Sportback",
    brand: "Audi",
    image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800&auto=format&fit=crop&q=80",
    price: "$75,000",
    description: "The Audi RS5 Sportback blends high-performance capabilities with everyday usability. Its 2.9-liter biturbo V6 engine delivers 444 horsepower and 442 lb-ft of torque.",
    specs: { engine: "2.9L BiTurbo V6", power: "444 hp", acceleration: "3.9s 0–60", topSpeed: "174 mph" }
  },
  {
    id: 3,
    name: "Mercedes-AMG C63 S",
    brand: "Mercedes",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=80",
    price: "$82,000",
    description: "The Mercedes-AMG C63 S is the ultimate expression of performance in the C-Class lineup. Its handcrafted 4.0L V8 biturbo engine provides heart-pounding acceleration.",
    specs: { engine: "4.0L V8 BiTurbo", power: "503 hp", acceleration: "3.7s 0–60", topSpeed: "180 mph" }
  },
  {
    id: 4,
    name: "Porsche 911 GT3",
    brand: "Porsche",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80",
    price: "$162,000",
    description: "The 911 GT3 is the pinnacle of naturally aspirated performance. A 4.0-liter flat-six engine revving to 9,000 rpm delivers a pure, visceral driving experience.",
    specs: { engine: "4.0L Flat-Six NA", power: "502 hp", acceleration: "3.2s 0–60", topSpeed: "198 mph" }
  },
  {
    id: 5,
    name: "Lamborghini Huracán",
    brand: "Lamborghini",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&auto=format&fit=crop&q=80",
    price: "$261,000",
    description: "The Lamborghini Huracán is an Italian masterpiece combining breathtaking design with adrenaline-fueled performance, powered by a naturally aspirated V10 engine.",
    specs: { engine: "5.2L NA V10", power: "631 hp", acceleration: "2.9s 0–60", topSpeed: "202 mph" }
  },
  {
    id: 6,
    name: "Ferrari F8 Tributo",
    brand: "Ferrari",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&auto=format&fit=crop&q=80",
    price: "$280,000",
    description: "The Ferrari F8 Tributo pays tribute to the best Ferrari V8 in history. Its 3.9-litre twin-turbocharged V8 is a masterpiece of engineering producing 710 cv.",
    specs: { engine: "3.9L TwinTurbo V8", power: "710 hp", acceleration: "2.9s 0–60", topSpeed: "211 mph" }
  },
];
