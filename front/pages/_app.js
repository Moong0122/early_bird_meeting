import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css'

const earlyBird = ({ Component }) => {
    return (
        <>
        <Head>
            <meta charSet="utf-8"/>
            <title>일일새모</title>
        </Head>
        <Component />
        </>
    );
};

earlyBird.propTypes = {
    Component: PropTypes.elementType.isRequired
}

export default earlyBird;