import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 8px;
`;

const Home = (): React.ReactElement => (
    <Layout title="Home">
        <Container>
            <div style={{ backgroundColor: 'lime' }}>nextjs</div>
            <div style={{ backgroundColor: 'pink' }}>template</div>
        </Container>
    </Layout>
);

export default Home;
