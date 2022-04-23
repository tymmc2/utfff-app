import React from 'react';
import { Container } from 'react-bootstrap';

const ResourcesList = () => {
    return (
        <Container style={{ textAlign: 'left', padding: 20 }}>
            <h3>Extra resources</h3>
            <ul>
                <li><a>UT Outpost</a></li>
                <li><a>Resource 2</a></li>
                <li><a>Resource 3</a></li>
            </ul>
        </Container>
    );
};

export default ResourcesList;