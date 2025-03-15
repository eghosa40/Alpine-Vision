// src/data/products.js
import greyFront from "src/assets/grey front.png";
import greySide from "src/assets/grey side.png";
import blueFront from "src/assets/blue front.png";
import blueSide from "src/assets/blue side.png";
import xFront from "src/assets/x front.png";
import xSide from "src/assets/x side.png";
import pinkFront from "src/assets/pink front.png";
import pinkSide from "src/assets/pink side.png";
import blueFront3 from "src/assets/blue front3.png";
import blue1Front from "src/assets/blue1 front.png";
import blue1Side from "src/assets/blue1 side.png";
import redFront from "src/assets/red front.png";
import redSide from "src/assets/red side.png";

const products = [
    {
        id: "1",
        name: "Alpine Pro",
        price: 189.99,
        originalPrice: 250,
        category: "Performance",
        onSale: true,
        isNew: false,
        description:
            "Alpine Pro is engineered for peak performance on rugged terrain. Enjoy unmatched durability and comfort.",
        image: greyFront,
        hoverImage: greySide,
    },
    {
        id: "2",
        name: "Summit Explorer",
        price: 99.99,
        currency: "GBP",  // ✅ Define currency dynamically
        category: "Performance",
        onSale: false,
        isNew: true,
        description:
            "Summit Explorer blends style and performance, making it perfect for adventurous souls.",
        image: blueFront,
        hoverImage: blueSide,
    },
    {
        id: "3",
        name: "Snow Drift",
        price: 249.99,
        category: "Casual",
        onSale: false,
        isNew: false,
        description:
            "Snow Drift offers a sleek design with everyday comfort, ideal for casual outings.",
        image: xFront,
        hoverImage: xSide,
    },
    {
        id: "4",
        name: "Mountain Glide",
        price: 219.99,
        category: "Casual",
        onSale: true,
        isNew: false,
        description:
            "Mountain Glide provides exceptional style and performance, a must-have for any wardrobe.",
        image: pinkFront,
        hoverImage: pinkSide,
    },
    {
        id: "5",
        name: "Storm Vision",
        price: 179.99,
        category: "Performance",
        onSale: false,
        isNew: true,
        description:
            "Storm Vision is designed for performance without compromise, delivering bold style on every adventure.",
        image: blueFront3,
        hoverImage: blueSide,
    },
    {
        id: "6",
        name: "Hyper Frost",
        price: 199.99,
        category: "Casual",
        onSale: false,
        isNew: false,
        description:
            "Hyper Frost stands out with its bold design and everyday comfort, perfect for casual wear.",
        image: blue1Front,
        hoverImage: blue1Side,
    },
    {
        id: "7",
        name: "Titan Vision",
        price: 299.99,
        category: "Performance",
        onSale: false,
        isNew: true,
        description:
            "Titan Vision is built to perform under pressure, delivering premium quality and a modern look.",
        image: redFront,
        hoverImage: redSide,
    },
];

export default products;



