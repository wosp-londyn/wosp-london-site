import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = ({ sectionColor }) => {
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
                <BreadLink
                    to={slugs[i]}
                    key={element}
                    sectionColor={sectionColor}
                >
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
    padding: 3px 15px 3px 25px;
    color: white;
    background: ${({ sectionColor }) => sectionColor.dark};
    position: relative;

    :hover {
        text-decoration: none;
        color: white;
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: -15px;
      background-color: black;
      bottom: 0;
      height: 30px;
      width: 15px;
      clip-path: polygon(0 0, 0 100%, 100% 50%);
      z-index: 2;
    }

    :nth-child(1){
         background: ${({ sectionColor }) => sectionColor.dark};
         display: inline-block;

    }
    &:nth-child(1):after {
        background: ${({ sectionColor }) => sectionColor.dark};
    }

    :nth-child(2){
        background: ${({ sectionColor }) => sectionColor.light};
        display: inline-block;
        margin-top: 8px;
    }
    :nth-child(2):after {
        background: ${({ sectionColor }) => sectionColor.light};
    }

    :nth-child(3) {
        display: inline-block;
        margin-top: 8px;
        margin-right: 40px;

        background: #EDEDED;
        color: #8c8c8c;

        font-weight: light;

        pointer-events: none;

    }

    :nth-child(3):after {
         background-color: #EDEDED;
         height: 100%
    }
`;

export default Breadcrumbs;
