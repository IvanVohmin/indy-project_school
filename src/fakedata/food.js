import axios from "axios";
import { apiRoute } from "../api/api";

let food = []
let drinks = []
let bakery = []
let hot = []

async function getFood() {
    try {
        const req = await axios.post(apiRoute("/products"))
        if (req.status === 200) {
            console.log(req.data)
            food = req.data
            drinks = food.filter(item => item.category === 'drinks');
            bakery = food.filter(item => item.category === 'bakery');
            hot = food.filter(item => item.category === 'hot');
        }
    } catch (err) {
        console.log("Food.js error -> " + err)
    }
}

getFood()

export { drinks, bakery, hot, food, getFood };