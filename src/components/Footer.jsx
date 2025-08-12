import React from 'react';
import PropTypes from 'prop-types';
import FooterNav from './FooterNav';
import FooterNavBrand from './FooterNavBrand';

const Footer = ({footerNavBrandProps, footerLinks = []}) => {
   
    return (
        <footer className="pt-4 my-md-5 pt-md-5 border-top">
            <div className="row">
                <FooterNavBrand {...footerNavBrandProps} />

                {footerLinks.map((footerCols, index) => {
                    return <FooterNav key={index} {...footerCols}/>
                })}
            </div>
        </footer>
    );
};

Footer.propTypes = {
    footerNavBrandProps: PropTypes.shape({
        logoUrl: PropTypes.string,
        logoWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        logoHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        logoAltText: PropTypes.string,
        copyright: PropTypes.string
    }),
    footerLinks: PropTypes.arrayOf(
        PropTypes.shape({
        title: PropTypes.string,
        links: PropTypes.arrayOf(
            PropTypes.shape({
            text: PropTypes.string,
            link: PropTypes.string
            })
        )
        })
    )
};

export default Footer;