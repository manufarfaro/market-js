import React from 'react';
import styled from '@emotion/styled';
import Link from './Link';

const StyledFooter = styled.footer`
    text-align: right;
    padding: 8px;
`;

const Footer = () =>
    <StyledFooter>
        <Link target="_blank" href="https://github.com/manufarfaro">@manufarfaro</Link>
    </StyledFooter>
;

export default Footer;
