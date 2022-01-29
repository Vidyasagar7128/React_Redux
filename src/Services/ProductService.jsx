import axios from "axios"

export const AllProducts = async () => {
    return await axios.get(`https://localhost:44326/api/Book/Books`)
}
export const OneProduct = async (id) => {
    return await axios.get(`https://localhost:44326/api/Book/book?bookId=${id}`)
}