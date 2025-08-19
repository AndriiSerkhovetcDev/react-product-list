import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = (props) => {
    const { 
        plan,
        monthtPrice,
        userLimit,
        memoryLimit,
        suport,
        hasHelpCenter,
        btnTitle } = props

    return (
        <div className="card mb-4 text-center box-shadow">
            <div className="card-header">
                <h4 className="my-0 font-weight-normal">{plan}</h4>
            </div>
            <div className="card-body">
                <h1 className="card-title pricing-card-title">${monthtPrice} <small className="text-muted">/ mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                    <li>{userLimit} users included</li>
                    <li>{memoryLimit} GB of storage</li>
                    <li>{suport} support</li>
                    {hasHelpCenter && <li>Help center access</li>}
                </ul>
                {btnTitle && <button type="button" className="btn btn-lg btn-block btn-outline-primary">{btnTitle}</button>}
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    plan: PropTypes.string,
    monthtPrice: PropTypes.number,
    userLimit: PropTypes.number,
    memoryLimit: PropTypes.number,
    suport: PropTypes.string,
    hasHelpCenter: PropTypes.bool,
    btnTitle: PropTypes.string
};

export default ProductCard;