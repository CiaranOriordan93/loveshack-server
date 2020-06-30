const mongoConnect = require('../util/database');

class Product {
    constructor(name, pricePerNight, pricePerWeek, imageUrl, review) {
        this.name = name;
        this.pricePerNight = pricePerNight;
        this.pricePerWeek = pricePerWeek;
        this.ImageUrl = imageUrl;
        this.review = review;
    }
}