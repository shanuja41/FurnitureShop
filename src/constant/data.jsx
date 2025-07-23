import hero1 from "../assets/images/sofa1.jpeg";
import hero2 from "../assets/images/sofa2.jpeg";
import hero3 from "../assets/images/sofa3.jpeg";

export const heroImages = [hero1, hero2, hero3];

export const heroSlides = [
  {
    title: "VINTAGE",
    description: "Help For Rough Sleepers of San Antonio",
    buttonText: "READ MORE",
    buttonLink: "/about",
  },
  {
    title: "VINTAGE",
    description: "Help For Rough Sleepers of San Antonio",
    buttonText: "READ MORE",
    buttonLink: "/about",
  },
  {
    title: "VINTAGE",
    description: "Help For Rough Sleepers of San Antonio",
    buttonText: "READ MORE",
    buttonLink: "/about",
  },
];

import card1 from "../assets/images/card1.jpeg";
import card2 from "../assets/images/card2.jpeg";
import card3 from "../assets/images/card3.jpeg";
import card4 from "../assets/images/card4.jpeg";
import card5 from "../assets/images/card5.jpeg";

export const productData = [
  {
    id: 1,
    name: "Modular Modern Sofa",
    price: "$540",
    image: card1,
  },
  {
    id: 2,
    name: "Luxury Couch Set",
    price: "$720",
    image: card2,
  },
  {
    id: 3,
    name: "Elegant Living Chair",
    price: "$450",
    image: card3,
  },
  {
    id: 4,
    name: "Retro Velvet Sofa",
    price: "$610",
    image: card4,
  },
  {
    id: 5,
    name: "Contemporary Sofa",
    price: "$830",
    image: card5,
  },
];

import { FaShippingFast, FaUndoAlt, FaHeadset, FaLock } from "react-icons/fa"; // example icons from react-icons

export const featureData = [
  {
    id: 1,
    icon: FaShippingFast,
    title: "FREE SHIPPING",
    description: "On all orders over $50",
  },
  {
    id: 2,
    icon: FaUndoAlt,
    title: "FREE RETURNS",
    description: "30 days money back guarantee",
  },
  {
    id: 3,
    icon: FaHeadset,
    title: "24/7 SUPPORT",
    description: "We are here to help anytime",
  },
  {
    id: 4,
    icon: FaLock,
    title: "SECURE PAYMENT",
    description: "100% secure payment",
  },
];

export const featuredCategoryData = [
  {
    id: 1,
    name: "Skincare",
    image: card4,
    description: "Explore nourishing skincare products.",
  },
  {
    id: 2,
    name: "Makeup",
    image: card3,
    description: "Top trending makeup essentials.",
  },
  {
    id: 3,
    name: "Haircare",
    image: card2,
    description: "Products for all hair types.",
  },
  {
    id: 4,
    name: "Fragrances",
    image: card1,
    description: "Luxury perfumes and body mists.",
  },
  {
    id: 5,
    name: "Fragrances",
    image: card5,
    description: "Luxury perfumes and body mists.",
  },
  {
    id: 6,
    name: "Makeup",
    image: hero1,
    description: "Top trending makeup essentials.",
  },
  {
    id: 7,
    name: "Makeup",
    image: hero2,
    description: "Top trending makeup essentials.",
  },
  {
    id: 8,
    name: "Makeup",
    image: hero3,
    description: "Top trending makeup essentials.",
  },
];

export const latestPostsData = [
  {
    id: 1,
    image: card1, // rectangle image
    day: "08",
    month: "Jan",
    smallTitle: "Health",
    boldTitle: "The Benefits of Morning Walks",
    description:
      "Discover how morning walks can improve your mental and physical health.",
  },
  {
    id: 2,
    image: card2,
    day: "5",
    month: "Feb",
    smallTitle: "Technology",
    boldTitle: "AI in Daily Life",
    description:
      "How artificial intelligence is changing our everyday experiences.",
  },
  {
    id: 3,
    image: card3,
    day: "2",
    month: "Mar",
    smallTitle: "Travel",
    boldTitle: "Top 10 Destinations for 2025",
    description:
      "Explore the hottest travel spots you need to visit this year.",
  },
  // add more posts...
];

// data.jsx or data.js

import logo1 from "../assets/images/logo1.jpeg";
import logo2 from "../assets/images/logo2.jpeg";
import logo3 from "../assets/images/logo3.jpeg";
import logo4 from "../assets/images/logo4.jpeg";
import logo5 from "../assets/images/logo5.jpeg";
import logo6 from "../assets/images/logo6.jpeg";
import logo7 from "../assets/images/logo7.jpeg";

export const logoData = [
  { id: 1, image: logo1, alt: "Logo 1" },
  { id: 2, image: logo2, alt: "Logo 2" },
  { id: 3, image: logo3, alt: "Logo 3" },
  { id: 4, image: logo4, alt: "Logo 4" },
  { id: 5, image: logo5, alt: "Logo 5" },
  { id: 6, image: logo6, alt: "Logo 6" },
  { id: 7, image: logo7, alt: "Logo 7" },
];
