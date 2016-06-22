var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82
if (typeof window !== 'undefined') {
    const matchMediaPolyfill = function matchMediaPolyfill() {
        return {
            matches: false,
            addListener() {
            },
            removeListener() {
            },
        };
    };
    window.matchMedia = window.matchMedia || matchMediaPolyfill;
}
import SlickCarousel from 'react-slick';
import React from 'react';
import assign from 'object-assign';
export default class Carousel extends React.Component {
    render() {
        let props = assign({}, this.props);
        if (props.effect === 'fade') {
            props.fade = true;
            props.draggable = false;
        }
        let className = 'am-carousel';
        if (props.vertical) {
            className = `${className} am-carousel-vertical`;
        }
        if (props.mode === 'banner') {
            className = `${className} am-carousel-banner`;
        }
        if (props.mode === 'card') {
            className = `${className} am-carousel-card center slider variable-width`;
            props.centerMode = true;
            props.infinite = true;
            props.slidesToShow = 1;
            props.slidesToScroll = 1;
            props.variableWidth = true;
        }
        return (React.createElement("div", {className: className}, React.createElement(SlickCarousel, __assign({}, props))));
    }
}
Carousel.defaultProps = {
    dots: true,
    arrows: false,
};
