import {Free} from "../core/entities/Free.tsx";

export const goalsList: Free[] = [
    {
        id: 1,
        goal: 'Build a successfull business',
        year: 2025
    },
    {
        id: 2,
        goal: 'Take care of my health',
        year: 2024
    },
    {
        id: 3,
        goal: 'Chabge career to a better company',
        year: 2024
    }
]


export const categories = [
    {
        id: 1,
        category: 'Groceries'
    },
    {
        id: 2,
        category: 'Utilities'
    },
    {
        id: 3,
        category: 'Entertainment'
    },
    {
        id: 4,
        category: 'Clothes'
    },
    {
        id: 5,
        category: 'Housing'
    }
]

export default {categories, goalsList}