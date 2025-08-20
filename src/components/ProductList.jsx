import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import { products } from '../mock/mock';
import ComparePlanTable from './CompareTable';

const supportLevelOptions = ["Email", "Priority email", "Phone and email"];

const ProductList = ({ isLogin  }) => {
    const [productList, setProductList] = useState(products);
    const [plan, setPlan] = useState("")
    const [monthPrice, setmonthPrice] = useState(0)
    const [userLimit, setUseLimit] = useState(0)
    const [memoryLimit, setMemoryLimit] = useState(0)
    const [supportLevel, setSuportLevel] = useState(supportLevelOptions[0])
    const [hasHelpCenter, setHasHelpCenter] = useState("Yes")
    const [сhosenPlan, setChosenPlan] = useState({})
    const prevPlan = useRef(null)


    const handlePlanChange = (e) => {
        setPlan(e.target.value)
    }

    const handlemonthPriceChange = (e) => {
        setmonthPrice(e.target.value)
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
        setHasHelpCenter(e.target.value);
    }

    const handleAddProduct = (e) => {
        e.preventDefault(); 

        const newProduct = {
            plan,
            monthPrice,
            userLimit,
            memoryLimit,
            support: supportLevel,
            hasHelpCenter,
            isSelected: false
        }       

        setProductList(productList => [...productList, newProduct]);
        resetForm();
       
    }

    const resetForm = () => {
        setPlan("")
        setmonthPrice(0)
        setMemoryLimit(0)
        setUseLimit(0)
        setSuportLevel("Email")
        setHasHelpCenter(true)
    }

    const setSelectedPlan = (selectedPlan) => {
        return productList.map(product => ({
                ...product,
                isSelectedPlan: product.plan === selectedPlan.plan
            }
        ))
    } 

    const handleChosenPlan = (plan) => {
        setProductList(setSelectedPlan(plan))
        setChosenPlan(plan);
    };

    useEffect(() => {
        if (сhosenPlan && сhosenPlan.plan) {
            prevPlan.current = {...сhosenPlan};
        }

    }, [сhosenPlan]);

    return (
        <>
            <ComparePlanTable current={сhosenPlan} prev={prevPlan.current} />

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
                            value={monthPrice}
                            onChange={handlemonthPriceChange}
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
                            value={supportLevel}
                            onChange={(e) => handleSuportLevelChange(e)}
                            id="supportLevel">
                                {supportLevelOptions.map((level, index) => (
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
                            <ProductCard {...product} onPlanChange={handleChosenPlan} />
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