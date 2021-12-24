import PropTypes from "prop-types";

export function Headline1(p) {
    return <h1 className={"text-6xl font-extrabold" + p.classnames}>{p.children}</h1>;
}

Headline1.propTypes = {
    classnames: PropTypes.string,
};

export function Headline2(p) {
    return <h2 className={"text-5xl " + p.classnames}>{p.children}</h2>;
}

Headline2.propTypes = {
    classnames: PropTypes.string,
};
