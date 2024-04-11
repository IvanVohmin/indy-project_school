
const food = [
    {
        id: 1,
        category: "drinks",
        title: "Чай черный",
        price: 4,
    },
    {
        id: 2,
        category: "drinks",
        title: "Сок яблочный",
        price: 15,
    },
    {
        id: 3,
        category: "drinks",
        title: "Клюквенный морс",
        price: 20,
    },
    {
        id: 5,
        category: "bakery",
        title: "Булочка с корицей",
        price: 14,
    },
    {
        id: 6,
        category: "bakery",
        title: "Булочка с маком",
        price: 22,
    },
    {
        id: 7,
        category: "bakery",
        title: "Пироженное",
        price: 20,
    },
    {
        id: 8,
        category: "hot",
        title: "Борщ",
        price: 25,
    },
    {
        id: 9,
        category: "hot",
        title: "Макаронны",
        price: 30,
    },
    {
        id: 10,
        category: "hot",
        title: "Гречка с мясом",
        price: 27,
    },
]

export const drinks = food.filter(item => item.category === 'drinks');
export const bakery = food.filter(item => item.category === 'bakery');
export const hot = food.filter(item => item.category === 'hot');