import React, { useEffect, useState } from 'react'
import './Product.component.css'
import { useSelector } from 'react-redux'
import Card from '../Common/Card.component'


const Product = () => {
    const products = useSelector(product => product.item)
    // console.log(products)
    const [search, setSearch] = useState("")
    const [filteredResult, setFilteredResult] = useState([])

    useEffect(() => {
        setFilteredResult(products.filter(item => item.product_name.toLowerCase().match(search.toLowerCase())))
    }, [search])

    return (
        <>
            <div className='w-50 m-auto mt-3 mb-5'>
                <input type='search' className="form-control form-control-lg" onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-4 mx-3 mb-5">
                {
                    filteredResult.map((item, index) => {
                        return <Card key={index} product={item} />
                    })
                }
            </div>
        </>
    )
}

export default Product