import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductCard = (props) => {
    const { 
        plan,
        monthPrice,
        userLimit,
        memoryLimit,
        support,
        hasHelpCenter,
        isSelectedPlan,
        onPlanChange } = props

    const handleChousenPlan = () => {
        onPlanChange({
                plan,
                monthPrice,
                userLimit,
                memoryLimit,
                support,
                hasHelpCenter,
                isSelectedPlan: true
            })
    }

    return (
        <div className="card mb-4 text-center box-shadow">
            <div className="card-header">
                <h4 className="my-0 font-weight-normal">{plan}</h4>
            </div>
            <div className="card-body">
                <h1 className="card-title pricing-card-title">${monthPrice} <small className="text-muted">/ mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                    <li>{userLimit} users included</li>
                    <li>{memoryLimit} GB of storage</li>
                    <li>{support} support</li>
                    {hasHelpCenter === "Yes" && <li>Help center access</li>}
                </ul> 
                <button
                    onClick={handleChousenPlan}
                    type="button"
                    className="btn btn-lg btn-block btn-outline-primary"
                    disabled={isSelectedPlan}>
                        {isSelectedPlan ? "Selected" : "Select your plan"}
                </button>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    plan: PropTypes.string,
    monthPrice: PropTypes.number,
    userLimit: PropTypes.number,
    memoryLimit: PropTypes.number,
    support: PropTypes.string,
    hasHelpCenter: PropTypes.string,
    isSelectedPlan: PropTypes.bool
};

export default ProductCard;