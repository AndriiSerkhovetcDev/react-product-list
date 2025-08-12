import React from 'react';
import PropTypes from 'prop-types';

const FooterNavBrand = (props) => {
    const { logoUrl, logoWidth, logoHeight, logoAltText, copyright } = props;

    return (
      <div className="col-12 col-md">
        <img 
            className="mb-2" 
            src={logoUrl} 
            alt={logoAltText} 
            width={logoWidth}
            height={logoHeight} />
        <small className="d-block mb-3 text-muted">{copyright}</small>
    </div>
    );
};

FooterNavBrand.propTypes = {
    logoUrl: PropTypes.string.isRequired,
    logoWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    logoHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    logoAltText: PropTypes.string.isRequired,
    copyright: PropTypes.string.isRequired
};

FooterNavBrand.defaultProps = {
    logoWidth: 24,
    logoHeight: 24,
};

export default FooterNavBrand;