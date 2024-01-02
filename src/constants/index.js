import { shieldTick, support, truckFast } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    {href:"#home", label:"Home"},
    {href:"#about-us", label:"About Us"},
    {href:"#products", label:"Products"},
    {href:"#contact-us", label:"Contact Us"}
];

export const statistics = [
    {value:"1k+", label:"Brands"},
    {value:"500+", label:"Shops"},
    {value:"250k+", label:"Customers"}
];

export const shoes = [
    {thumbnail:thumbnailShoe1, bigShoe:bigShoe1},
    {thumbnail:thumbnailShoe2, bigShoe:bigShoe2},
    {thumbnail:thumbnailShoe3, bigShoe:bigShoe3}
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
        rating:4.3
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
        rating:4.9
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
        rating:4.1
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
        rating:5
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];