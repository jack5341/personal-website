import PropTypes from "prop-types";

export function NavLogo(p) {
    return (
        <a href={p.url} target={p.isBlank ? "_blank" : null} className={"text-5xl font-bold " + p.classnames} rel="noreferrer">
            {p.children}
        </a>
    );
}

NavLogo.propTypes = {
    children: PropTypes.node.isRequired,
    url: PropTypes.string.isRequired,
    classnames: PropTypes.string,
    isBlank: PropTypes.bool,
};
