const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");
const URLbase = "https://fakestoreapi.com";

module.exports = {
    findAll: async() => {
        const response = await fetch(`${URLbase}/products`);
        const products = await response.json();
        return products;
        
    },
    findOne: async (id) => {
        try {
            const response = await fetch(`${URLbase}/products/${id}`);
            const product = await response.json();
            return product;
        } catch (error) {
            console.log(error);
        }
    },
    findCategory: async (category) => {
        try {
            const response = await fetch(`${URLbase}/products`);
            const products = await response.json();
            const filtro = products.filter(product => product.category.toLowerCase() == category.toLowerCase());
            return filtro;
        } catch (error) {
            console.log(error);
        }
    },
    findMostwanted: async ()=>{
        try {
            const response = await fetch(`${URLbase}/products`);
            const products = await response.json();
            const mostwanted = products.filter(product =>product.rating.count > 300);
            return mostwanted;
        } catch (error) {
            console.log(error);
        }
    }

}