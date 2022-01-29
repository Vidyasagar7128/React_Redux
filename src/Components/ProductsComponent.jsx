import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AllProducts } from '../Services/ProductService';
import { useDispatch } from 'react-redux';
import { SetProducts } from '../Redux/Actions/ProductAction';
import { useNavigate } from 'react-router-dom';

function ProductsComponent() {
    const navigate = useNavigate()
    const allProducts = useSelector((state) => state.Allproducts.products.response)
    const dispatch = useDispatch()
    console.log(allProducts);

    useEffect(() => {
        Products()
    }, []);

    const Products = () => {
        AllProducts().then((res) => {
            console.log(res.data);
            dispatch(SetProducts(res.data))
        }).catch((e) => {
            console.log(e);
        })
    }

    return <>
        <div className="four column wide book">
            <div className="ui link cards">
                {(allProducts || []).map(book => {
                    return <div className="card" key={book.bookId} onClick={() => navigate(`/details/${book.bookId}`)} style={{ height: '350px', width: '200px' }}>
                        <div className="image">
                            <img src={book.bannerImg} alt="" />
                        </div>
                        <div className="content">
                            <div className="header">{book.title}</div>
                            <div className="meta price">{book.price}</div>
                            <div className="meta">{book.category}</div>
                        </div>
                    </div>
                })}
            </div>

        </div>
    </>
}

export default ProductsComponent;
