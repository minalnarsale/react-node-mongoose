import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class RolesAndSalaryListing extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        const roles = this.props.rolesListing;
        let htmlMark = [];
        console.log('roles : ' + JSON.stringify(roles));
        roles.map((roles, index) => {
            return htmlMark.push(
                <Row className="justify-content-md-center" key = {'index-' + index}>
                    <Col>{roles.title}</Col>
                    <Col>{roles.description}</Col>
                    <Col>{roles.salary}</Col>
                </Row>
            );
        });
        return(
            <Container>
                {htmlMark}
            </Container>
        );
    }
}