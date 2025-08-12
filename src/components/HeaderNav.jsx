import React from 'react';
import PropTypes from 'prop-types';

const HeaderNav = ({isLogin, links}) => {
    return (
        <>
            <nav className="my-2 my-md-0 mr-md-3">
                {links.map((linkItem, index) => {
                    return <a key={index} className="p-2 text-dark text-decoration-none link-primary" href={linkItem.link}>{linkItem.title}</a>
                })}
            </nav>
            {!isLogin && <a className="btn btn-outline-primary mr-md-3" href="#">Sign up</a>}
        </>
    );
};

HeaderNav.propTypes = {
    isLogin: PropTypes.bool,
    navLinks: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            link: PropTypes.string
        })
    )
}

export default HeaderNav;