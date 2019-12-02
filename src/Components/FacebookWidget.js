import React from 'react';
import styled from 'styled-components';

import SectionHeader from './SectionHeader';

const FacebookWidget = () => {
    return (
        <>
            <StyledSectionHeader color={({ theme }) => theme.color.facebook}>
                Facebook
            </StyledSectionHeader>
            <div id="fb-root" />
            {(function johnDoe(d, s, id) {
                const fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                const js = d.createElement(s);
                js.id = id;
                js.src =
                    'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.1';
                fjs.parentNode.insertBefore(js, fjs);
            })(document, 'script', 'facebook-jssdk')}
            <Wrapper>
                <div
                    className="fb-page"
                    data-href="https://www.facebook.com/wosplondyn"
                    data-tabs="timeline"
                    data-small-header="true"
                    data-adapt-container-width="true"
                    data-hide-cover="true"
                    data-show-facepile="false"
                >
                    <blockquote
                        cite="https://www.facebook.com/wosplondyn"
                        className="fb-xfbml-parse-ignore"
                    >
                        <a href="https://www.facebook.com/wosplondyn">
                            WOŚP Londyn
                        </a>
                    </blockquote>
                </div>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.section`
    display: none;
    ${({ theme }) => theme.media.above.xl} {
        display: block;
        border: 1px solid #a2a2a2;
        padding: 0 !important;
    }
`;

const StyledSectionHeader = styled(SectionHeader)`
    ${({ theme }) => theme.media.below.xl} {
        display: none;
    }
`;

export default FacebookWidget;
