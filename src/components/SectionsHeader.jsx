import React from 'react';
import PropTypes from 'prop-types';

const SectionsHeader = props => {
    return (
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center col-md-8 col-lg-6">
            <h1 className="display-4">Pricing</h1>
            <p className="lead">
                Quickly build an effective pricing table for your potential customers with this Bootstrap example. 
                It's built with default Bootstrap components and utilities with little customization.
            </p>
        </div>
    );
};

SectionsHeader.propTypes = {
    
};

export default SectionsHeader;