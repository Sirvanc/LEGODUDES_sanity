import { useEffect, useState } from "react"
import { fetchAllProducts } from "../../sanity/productServices"

export default function Home(){
    const[products, setProducts] = useState (null)
    const getAllProducts = async () => {
        const data = await fetchAllProducts()

    }

    useEffect(() => {
        // Add your code here
    })

    return (<main>
            <h2>Velkommen til LEGO-dudes</h2>
        </main>)
}