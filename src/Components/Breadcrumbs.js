import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
    const { pathname } = useLocation();

    const breadcrumbsArray = pathname
        .toUpperCase()
        .slice(1)
        .split('/');

    const slugs = [];

    breadcrumbsArray.forEach((elem, index) => {
        let slug = '';
        for (let i = 0; i <= index; i++) {
            slug += `/${breadcrumbsArray[i].toLowerCase()}`;
        }
        slugs.push(slug);
    });

    return (
        <Wrapper>
            {breadcrumbsArray.map((element, i) => (
                <BreadLink to={slugs[i]} key={element}>
                    {`${element.split('-').join(' ')}`}
                </BreadLink>
            ))}
        </Wrapper>
    );
};

const Wrapper = styled.nav`
    margin: 20px 0;
`;

const BreadLink = styled(Link)`
    padding: 6px 15px 6px 25px;
    color: white;
    background: ${({ theme }) => theme.color.red};
    position: relative;

    :hover {
        text-decoration: none;
        color: white;
    }

    &:after {
        content: '';
        width: 21px;
        height: 21px;

        transform: rotate(45deg);

        position: absolute;
        top: 5px;
        right: -11px;
        z-index: 2;
    }

    :nth-child(1),
    &:nth-child(1):after {
        background: ${({ theme }) => theme.color.mediumRed};
    }

    :nth-child(2),
    &:nth-child(2):after {
        background: ${({ theme }) => theme.color.lightRed};
    }

    :nth-child(3) {
        background: white;
        color: #646464;
        padding-top: 5px;
        padding-bottom: 5px;

        border-top: 1px solid #acacac;
        border-bottom: 1px solid #acacac;
        pointer-events: none;

        &:after {
            background: white;
            border-right: 1px solid #acacac;
            border-top: 1px solid #acacac;
            top: 4px;
            right: -11px;
        }
    }
`;

export default Breadcrumbs;
