import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

interface Props {
    children: React.ComponentProps<'div'>['children'];
    title: string;
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Main = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
`;

const Layout = ({ children, title }: Props): React.ReactElement => (
    <>
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content="nextjs template" />
            <meta property="og:image" content="https://sammysamkough.com/assets/fam.jpg" />
        </Head>
        <Container>
            <Main>{children}</Main>
        </Container>
    </>
);

export default Layout;
