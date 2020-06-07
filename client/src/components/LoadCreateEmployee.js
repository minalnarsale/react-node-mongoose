import React from 'react';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Layout from './Layout';

export default function LoadCreateEmployee() {
    return (
        //<h1 className='App'>welcome to create employee form</h1>
        <Jumbotron>
            <Card>
                <Card.Header as='h4'>Create employee form</Card.Header>
                <Card.Body>
                    <Layout/>
                </Card.Body>
            </Card>
        </Jumbotron>
    );
}