const fs = require("fs");
const path = require("path");
module.exports = {
    findAll: () => {
        const products = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/products.json"), { encoding: "utf-8" }));
        return products;
    },
    findOne: function (id) {
        const products = this.findAll();
        const product = products.find(product => Number(product.id) === id);
        return product;
    },
    findCategory: function (category) {
        const products = this.findAll().filter(product => product.category.toLowerCase() == category.toLowerCase());
        return products;
    },
    findMostwanted: function (){
        const products = this.findAll().filter(product => product.mostwanted);
        return products;
    }

}