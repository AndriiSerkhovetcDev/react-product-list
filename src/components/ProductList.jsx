import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import { products } from '../mock/mock';

const suportLevelOptions = ["Email", "Priority email", "Phone and email"];

const ProductList = ({ isLogin  }) => {
    const [productList, setProductList] = useState(products);
    const [plan, setPlan] = useState("")
    const [monthtPrice, setMonthtPrice] = useState(0)
    const [userLimit, setUseLimit] = useState(0)
    const [memoryLimit, setMemoryLimit] = useState(0)
    const [suportLevel, setSuportLevel] = useState(suportLevelOptions[0])
    const [hasHelpCenter, setHasHelpCenter] = useState(true)
    const [buttonText, setButtonText] = useState("")


    const handlePlanChange = (e) => {
        setPlan(e.target.value)
    }

    const handleMonthtPriceChange = (e) => {
        setMonthtPrice(e.target.value)
    }

    const handleUserLimitChange = (e) => {
        setUseLimit(e.target.value)
    }

    const handleMemoryLimitChange = (e) => {
        setMemoryLimit(e.target.value)
    }

    const handleSuportLevelChange = (e) => {
        setSuportLevel(e.target.value)
    }

    const handleHasHelpCenterChange = (e) => {
        setHasHelpCenter(e.target.value === "Yes");
    }

    const handleButtonTextChange = (e) => {
        setButtonText(e.target.value)
    }

    const handleAddProduct = (e) => {
        e.preventDefault(); 

        const newProduct = {
            plan,
            monthtPrice,
            userLimit,
            memoryLimit,
            suport: suportLevel,
            hasHelpCenter,
            btnTitle: buttonText
        }

        console.log(newProduct);
        

        setProductList(productList => [...productList, newProduct]);
        resetForm();
       
    }

    const resetForm = () => {
        setPlan("")
        setMonthtPrice(0)
        setMemoryLimit(0)
        setUseLimit(0)
        setSuportLevel("Email")
        setHasHelpCenter(true)
        setButtonText("")
    }

    return (
        <>
            {isLogin && <div className="mb-4">
                <form className="w-100" onSubmit={handleAddProduct}>
                    <div className="form-group">
                        <label htmlFor="plan">Plan</label>
                        <input
                            type="text"
                            className="form-control"
                            value={plan}
                            onChange={handlePlanChange} 
                            id="plan"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="monthlyPrice">Monthly Price ($)</label>
                        <input
                            type="number"
                            className="form-control"
                            value={monthtPrice}
                            onChange={handleMonthtPriceChange}
                            min="0"
                            id="monthlyPrice"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="userLimit">User Limit</label>
                        <input
                            type="number"
                            className="form-control"
                            value={userLimit}
                            onChange={handleUserLimitChange} 
                            min="0"
                            id="userLimit"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="memoryLimit">Memory Limit (GB)</label>
                        <input
                            type="number"
                            className="form-control"
                            value={memoryLimit}
                            onChange={handleMemoryLimitChange}
                            min="0"
                            id="memoryLimit"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="supportLevel">Support Level</label>
                        <select
                            className="form-control"
                            value={suportLevel}
                            onChange={(e) => handleSuportLevelChange(e)}
                            id="supportLevel">
                                {suportLevelOptions.map((level, index) => (
                                    <option key={index} value={level}>{level}</option>
                                ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="helpCenter">Help Center Access</label>
                        <select
                            className="form-control"
                            value={hasHelpCenter}
                            onChange={(e) => handleHasHelpCenterChange(e)}
                            id="helpCenter">
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="buttonText">Button Text</label>
                        <input
                            type="text"
                            className="form-control"
                            value={buttonText}
                            onChange={handleButtonTextChange} 
                            id="buttonText"/>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-primary" type="submit">
                            Add Product
                        </button>
                    </div>
                </form>
            </div>}

            <div className="row mb-3">
                {productList.map((product, index) => {
                    return (
                        <div key={index} className="col-md-4 mb-3">
                            <ProductCard {...product} />
                        </div>
                    )
                })}
            </div>
        </>
        
    );
};

  ProductList.propTypes = {
        isLogin: PropTypes.bool
  }


export default ProductList;