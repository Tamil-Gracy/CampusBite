const menuItems = [
  // ---------------- VEG ----------------
  {
    id: "1",
    name: "Classic Veg Burger",
    desc: "Grilled paneer, veggies, mayo wrapped in tortilla",
    price: 129,
    image: "https://loremflickr.com/400/300/veggie,burger",
    category: ['Bestsellers','Burgers','Veg']
  },
  {
    id: "2",
    name: "Paneer Tikka Wrap",
    desc: "Spiced paneer tikka wrapped with veggies and mint chutney",
    price: 149,
    image: "https://loremflickr.com/400/300/wrap,paneer",
    category: ['Bestsellers','Veg']
  },
  {
    id: "3",
    name: "Veg Loaded Fries",
    desc: "Crispy fries topped with cheese, corn and jalapenos",
    price: 119,
    image: "https://loremflickr.com/400/300/fries,cheese",
    category: ['Bestsellers','Veg']
  },
  {
    id: "4",
    name: "Farmhouse Veg Pizza",
    desc: "Loaded with bell peppers, onion, corn and olives",
    price: 199,
    image: "https://loremflickr.com/400/300/pizza,vegetable",
    category: ['Bestsellers','Veg']
  },
  {
    id: "5",
    name: "Veg Momos",
    desc: "Steamed dumplings stuffed with cabbage and carrot",
    price: 99,
    image: "https://loremflickr.com/400/300/momos,dumpling",
    category: ['Bestsellers','Veg']
  },
  {
    id: "6",
    name: "Corn & Cheese Sandwich",
    desc: "Grilled sandwich with sweet corn, cheese and herbs",
    price: 109,
    image: "https://loremflickr.com/400/300/sandwich,corn",
    category: ['Bestsellers','Veg']
  },
  {
    id: "7",
    name: "Veg Manchurian Rice Bowl",
    desc: "Fried rice topped with crispy veg manchurian balls",
    price: 159,
    image: "https://loremflickr.com/400/300/manchurian,rice",
    category: ['Bestsellers','Veg']
  },
  {
    id: "8",
    name: "Paneer Wrap",
    desc: "Cottage cheese cubes tossed in tangy sauce, wrapped soft",
    price: 139,
    image: "https://loremflickr.com/400/300/paneer,wrap",
    category: ['Bestsellers','Veg']
  },
 
  // ---------------- NON-VEG ----------------
  {
    id: "9",
    name: "Cheesey Chicken Burger",
    desc: "Grilled chicken, cheese, veggies, mayo wrapped in tortilla",
    price: 129,
    image: "https://loremflickr.com/400/300/burger,chicken",
    category: ['Bestsellers','Non-Veg']
  },
  {
    id: "10",
    name: "Chicken Tikka Wrap",
    desc: "Spicy chicken tikka wrapped with onions and mint chutney",
    price: 159,
    image: "https://loremflickr.com/400/300/wrap,chicken",
    category: ['Bestsellers','Non-Veg']
  },
  {
    id: "11",
    name: "Peri Peri Chicken Wings",
    desc: "Crispy chicken wings tossed in peri peri sauce",
    price: 179,
    image: "https://loremflickr.com/400/300/chicken,wings",
    category: ['Bestsellers','Non-Veg']
  },
  {
    id: "12",
    name: "Egg Bhurji Sandwich",
    desc: "Spiced scrambled egg sandwich with butter toast",
    price: 99,
    image: "https://loremflickr.com/400/300/sandwich,egg",
    category: ['Bestsellers','Non-Veg']
  },
  {
    id: "13",
    name: "Chicken Momos",
    desc: "Steamed dumplings stuffed with minced chicken",
    price: 129,
    image: "https://loremflickr.com/400/300/momos,chicken",
    category: ['Bestsellers','Non-Veg']
  },
  {
    id: "14",
    name: "Chicken Biryani Bowl",
    desc: "Fragrant basmati rice layered with spiced chicken",
    price: 189,
    image: "https://loremflickr.com/400/300/biryani,chicken",
    category: ['Bestsellers','Non-Veg']
  },
  {
    id: "15",
    name: "Fish Fingers",
    desc: "Crispy breaded fish fingers served with tartar sauce",
    price: 169,
    image: "https://loremflickr.com/400/300/fish,fingers",
    category: ['Bestsellers','Non-Veg']
  },
  {
    id: "16",
    name: "Chicken Seekh Roll",
    desc: "Grilled minced chicken skewers rolled in soft flatbread",
    price: 149,
    image: "https://loremflickr.com/400/300/kebab,roll",
    category: ['Bestsellers','Non-Veg']
  },
 
  // ---------------- BURGERS ----------------
  {
    id: "17",
    name: "Double Patty Burger",
    desc: "Two grilled patties, double cheese and special sauce",
    price: 179,
    image: "https://loremflickr.com/400/300/burger,cheese",
    category: ['Bestsellers','Burgers', 'Veg']
  },
  {
    id: "18",
    name: "Mushroom Swiss Burger",
    desc: "Sauteed mushrooms with swiss cheese and garlic mayo",
    price: 149,
    image: "https://loremflickr.com/400/300/burger,mushroom",
    category: ['Bestsellers','Burgers', 'Veg']
  },
  {
    id: "19",
    name: "Spicy Chicken Burger",
    desc: "Crispy fried chicken patty with spicy mayo and lettuce",
    price: 159,
    image: "https://loremflickr.com/400/300/burger,spicy",
    category: ['Bestsellers','Burgers', 'Non-Veg']
  },
  {
    id: "20",
    name: "BBQ Bacon Burger",
    desc: "Smoky BBQ sauce, crispy bacon and cheddar cheese",
    price: 189,
    image: "https://loremflickr.com/400/300/burger,bacon",
    category: ['Bestsellers','Burgers', 'Non-Veg']
  },
  {
    id: "21",
    name: "Aloo Tikki Burger",
    desc: "Crispy spiced potato patty with tangy chutneys",
    price: 99,
    image: "https://loremflickr.com/400/300/burger,potato",
    category: ['Bestsellers','Burgers', 'Veg']
  },
  {
    id: "22",
    name: "Grilled Veg Burger",
    desc: "Char-grilled mixed vegetable patty with fresh greens",
    price: 119,
    image: "https://loremflickr.com/400/300/burger,grilled",
    category: ['Bestsellers','Burgers', 'Veg']
  },
  // Classic Veg Burger (v1) and Cheesey Chicken Burger (nv1) also belong here —
  // included automatically via getItemsByCategory("burgers").
 
  // ---------------- FRIES ----------------
  {
    id: "23",
    name: "Peri Peri Fries",
    desc: "Crispy fries tossed in peri peri sauce",
    price: 99,
    image: "https://loremflickr.com/400/300/fries,spicy",
    category: ['Bestsellers','Fries']
  },
  {
    id: "24",
    name: "Classic Salted Fries",
    desc: "Golden fries with a pinch of salt",
    price: 79,
    image: "https://loremflickr.com/400/300/friedpotato",
    category: ['Bestsellers','Fries']
  },
  {
    id: "25",
    name: "Cheese Loaded Fries",
    desc: "Fries topped with melted cheese and herbs",
    price: 119,
    image: "https://loremflickr.com/400/300/fries,cheese",
    category: ['Bestsellers','Fries']
  },
  {
    id: "26",
    name: "Masala Fries",
    desc: "Fries tossed in tangy Indian masala spice mix",
    price: 89,
    image: "https://loremflickr.com/400/300/fries,masala",
    category: ['Bestsellers','Fries']
  },
  {
    id: "27",
    name: "Piri Piri Wedges",
    desc: "Thick-cut potato wedges with piri piri seasoning",
    price: 109,
    image: "https://loremflickr.com/400/300/wedges,potato",
    category: ['Bestsellers','Fries']
  },
  {
    id: "28",
    name: "Garlic Parmesan Fries",
    desc: "Fries tossed in garlic butter and parmesan",
    price: 129,
    image: "https://loremflickr.com/400/300/fries,garlic",
    category: ['Bestsellers','Fries']
  },
 
  // ---------------- DRINKS ----------------
  {
    id: "29",
    name: "Cold Coffee",
    desc: "Chilled coffee with ice cream and chocolate",
    price: 89,
    image: "https://loremflickr.com/400/300/coldcoffee,icecream",
    category: ['Bestsellers','Drinks']
  },
  {
    id: "30",
    name: "Oreo Milkshake",
    desc: "Creamy milkshake blended with Oreo cookies",
    price: 109,
    image: "https://loremflickr.com/400/300/milkshake,oreo",
    category: ['Bestsellers','Drinks']
  },
  {
    id: "31",
    name: "Fresh Lime Soda",
    desc: "Refreshing lime soda, sweet or salted",
    price: 59,
    image: "https://loremflickr.com/400/300/lemonade",
    category: ['Bestsellers','Drinks']
  },
  {
    id: "32",
    name: "Chocolate Milkshake",
    desc: "Rich chocolate shake topped with whipped cream",
    price: 99,
    image: "https://loremflickr.com/400/300/milkshake,chocolate",
    category: ['Bestsellers','Drinks']
  },
  {
    id: "33",
    name: "Mango Smoothie",
    desc: "Thick smoothie blended with fresh mango pulp",
    price: 99,
    image: "https://loremflickr.com/400/300/smoothie,mango",
    category: ['Bestsellers','Drinks']
  },
  {
    id: "34",
    name: "Iced Tea",
    desc: "Chilled lemon iced tea, light and refreshing",
    price: 69,
    image: "https://loremflickr.com/400/300/icedtea,lemon",
    category: ['Bestsellers','Drinks']
  },
  {
    id: "35",
    name: "Strawberry Milkshake",
    desc: "Creamy shake blended with fresh strawberries",
    price: 99,
    image: "https://loremflickr.com/400/300/milkshake,strawberry",
    category: ['Bestsellers','Drinks']
  },
 
  // ---------------- COMBOS ----------------
  {
    id: "36",
    name: "Burger Combo",
    desc: "Any burger + fries + soft drink",
    price: 249,
    image: "https://loremflickr.com/400/300/combo,meal",
    category: ['Bestsellers','Combos']
  },
  {
    id: "37",
    name: "Family Feast Combo",
    desc: "2 burgers + fries + 2 drinks",
    price: 449,
    image: "https://loremflickr.com/400/300/feast,food",
    category: ['Bestsellers','Combos']
  },
  {
    id: "38",
    name: "Wrap Combo",
    desc: "Any wrap + fries",
    price: 199,
    image: "https://loremflickr.com/400/300/wrap,meal",
    category: ['Bestsellers','Combos']
  },
  {
    id: "39",
    name: "Student Special Combo",
    desc: "Burger + fries + drink at a budget-friendly price",
    price: 179,
    image: "https://loremflickr.com/400/300/mealtray,food",
    category: ['Bestsellers','Combos']
  },
  {
    id: "40",
    name: "Momos & Drink Combo",
    desc: "Any momos plate + soft drink",
    price: 159,
    image: "https://loremflickr.com/400/300/momos,combo",
    category: ['Bestsellers','Combos']
  },
];
const menuItems2 = [
    {
        id: 1,
        name: "Classic Veg Burger",
        desc: "Grilled paneer, veggies, mayo wrapped in tortilla",
        category: ['Bestsellers','Burgers','Veg'],
        price: 129,
        image: "./images/classic_veg_burger.jpg"
    },

    {
        id: 2,
        name: "Cheesey Chicken Burger",
        desc: "Grilled chicken, cheese, veggies, mayo wrapped in tortilla",
        category: ['Bestsellers','Burgers','Non-Veg'],
        price: 129,
        image: "./images/cheesy_chicken_burger.jpg"
    },

    {
        id: 3,
        name: "Peri Peri Fries",
        desc: "Crispy fries tossed in peri peri sauce",
        category: ['Bestsellers','Fries'],
        price: 99,
        image: "./images/peri_peri_fries.jpg"
    },
    {
        id: 4,
        name: "Cold Coffee",
        desc: "Chilled coffee with ice cream and chocolate syrup",
        category: ['Bestsellers','Drinks'],
        price: 89,
        image: "./images/cold_coffee.jpg"
    },

    {
        id: 5,
        name: "Burger Combo",
        desc: "Classic Veg Burger + Peri Peri Fries + Cold Coffee",
        category: ['Combos'],
        price: 199,
        image: "./images/burger_combo.jpg"
    },
    {
        id: 6,
        name: "Paneer Wrap",
        desc: "Grilled paneer, veggies, mayo wrapped in tortilla",
        category: ['Combos'],
        price: 199,
        image: "./images/burger_combo.jpg"
    }
];

export { menuItems };