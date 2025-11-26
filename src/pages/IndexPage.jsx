import { useState, useEffect } from "react";
import { data, useParams } from "react-router";
import { Flex, Rate } from 'antd';
export default function ProductsPage() {

    



    const [products, setProducts] = useState([])
    useEffect(() => {
        async function getData() {
            const response = await fetch('https://dummyjson.com/products')
            const data = await response.json()
            setProducts(data.products)
        }
        getData()
    }, [])


    
    return (

        <div className="grid grid-cols-4 gap-8">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            {
                products.map((product) => (
                    <div className="">
                        <div className="">
                            <div className="">
                                <img className="Img_size " src={product.images[0]} alt="" />
                            </div>
                        </div>

                        <p>{product.price}$</p>
                        <p>{product.title}</p>



                        <Flex gap="middle" vertical>
                            <Flex gap="middle">
                                <Rate defaultValue={product.rating} />
                                <span>allowClear: true</span>
                            </Flex>
                            {/* <Flex gap="middle">
                                <Rate defaultValue={3} allowClear={false} />
                                <span>allowClear: false</span>
                            </Flex> */}
                        </Flex>

                    </div>
                ))
            }

        </div >
    )

}
