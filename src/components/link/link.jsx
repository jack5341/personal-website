import PropTypes from "prop-types";

export function Link(p) {
    return (
        <a href={p.url} target={p.isBlank ? "_blank" : null} className={"text-lg underline underline-offset-4 " + p.classnames} rel="noreferrer">
            {p.label + (p.withArrow ? "↗" : "")}
        </a>
    );
}

Link.propTypes = {
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    classnames: PropTypes.string,
    isBlank: PropTypes.bool,
    withArrow: PropTypes.bool,
    isDisabled: PropTypes.bool,
};

export function NavLink(p) {
    return (
        <a href={p.url} target={p.isBlank ? "_blank" : null} className={"text-xl mx-4 " + p.classnames} rel="noreferrer">
            {p.label + (p.withArrow ? "↗" : "")}
        </a>
    );
}

NavLink.propTypes = {
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    classnames: PropTypes.string,
    isBlank: PropTypes.bool,
    isDisabled: PropTypes.bool,
};
