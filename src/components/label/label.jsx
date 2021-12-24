import PropTypes from "prop-types";

export default function Label(p) {
    return <label className={"text-neutral-600 text-sm " + p.classnames}>{p.children}</label>;
}

Label.propTypes = {
    classnames: PropTypes.string,
};
