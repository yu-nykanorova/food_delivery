import royalSushiHouse from '../assets/img/royal_sushi_house.png';
import burgersPizza from '../assets/img/burgers_pizza.png';
import ninjaSushi from '../assets/img/ninja_sushi.png';
import sushiMaster from '../assets/img/sushi_master.png';
import japaneseSushi from '../assets/img/japanese_sushi.png';
import kobe from '../assets/img/kobe.png';
import sushi from '../assets/emoji/sushi.png';
import burger from '../assets/emoji/burger.png';
import pizza from '../assets/emoji/pizza.png';

export const restaurants = [
    {
        id: 1,
        title: "Royal Sushi House",
        image: royalSushiHouse,
        timeDelivery: "30-40",
        isFeatured: true,
        minInvoice: "32",
        kitchen: [
            { emoji: sushi, name: "Sushi" },
        ],
    },
    {
        id: 2,
        title: "Burgers & Pizza",
        image: burgersPizza,
        timeDelivery: "40-60",
        isFeatured: true,
        minInvoice: "24",
        kitchen: [
            { emoji: burger, name: "Burger" },
            { emoji: pizza, name: "Pizza" },
        ],
    },
    {
        id: 3,
        title: "Ninja sushi",
        image: ninjaSushi,
        timeDelivery: "20-40",
        isFeatured: false,
        minInvoice: "40",
        kitchen: [
            { emoji: sushi, name: "Sushi" },
        ],
    },
    {
        id: 4,
        title: "Sushi master",
        image: sushiMaster,
        timeDelivery: "60-70",
        isFeatured: false,
        minInvoice: "49",
        kitchen: [
            { emoji: sushi, name: "Sushi" },
        ],
    },
    {
        id: 5,
        title: "Japanese sushi",
        image: japaneseSushi,
        timeDelivery: "30-50",
        isFeatured: false,
        minInvoice: "104",
        kitchen: [
            { emoji: sushi, name: "Sushi" },
        ],
    },
    {
        id: 6,
        title: "Kobe",
        image: kobe,
        timeDelivery: "20-30",
        isFeatured: false,
        minInvoice: "57",
        kitchen: [
            { emoji: sushi, name: "Sushi" },
        ],
    },
]