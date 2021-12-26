import PropTypes from "prop-types";

export function Headline1(p) {
    return <h1 className={"text-5xl md:text-6xl lg:text-5xl font-extrabold " + p.classnames}>{p.children}</h1>;
}

Headline1.propTypes = {
    classnames: PropTypes.string,
};

export function Headline2(p) {
    return <h2 className={"text-2xl lg:text-3xl lg:mx-20 xl:mx-28 " + p.classnames}>{p.children}</h2>;
}

Headline2.propTypes = {
    classnames: PropTypes.string,
};
