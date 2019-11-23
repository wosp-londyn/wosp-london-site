import React from 'react';

import useCurrentPath from '../Utils/useCurrentPath';

const Breadcrumbs = () => {
    const path = useCurrentPath();

    return <div>{path}</div>;
};

export default Breadcrumbs;
