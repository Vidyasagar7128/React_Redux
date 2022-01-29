import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RemoveSelectedProduct, SelectedProduct } from '../Redux/Actions/ProductAction';
import { OneProduct } from '../Services/ProductService';

function ProductComponent() {
    const { id } = useParams()
    const dispatch = useDispatch()
    console.log(id);
    useEffect(() => {
        Product()
        return () => {
            dispatch(RemoveSelectedProduct())
        }
    }, []);

    const Product = () => {
        OneProduct(id).then((res) => {
            console.log(res.data);
            dispatch(SelectedProduct(res.data))
        }).catch((e) => {
            console.log(e);
        })
    }
    return <>

    </>
}

export default ProductComponent;
