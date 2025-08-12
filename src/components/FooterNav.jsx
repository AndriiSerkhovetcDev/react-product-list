import React from 'react';
import PropTypes from 'prop-types';

const FooterNav = ({title = "", links = []}) => {
    return (
        <div className="col-6 col-md">
            <h5>{title}</h5>
            <ul className="list-unstyled text-small">
                {links.map((navItem, index) => {
                    return (
                        <li key={index}>
                            <a className="text-muted" href={navItem.link}>{navItem.text}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

FooterNav.propTypes = {
    title: PropTypes.string,
    links: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            link: PropTypes.string
        })
    )
};

export default FooterNav;