import React from 'react';
import EmployeeTextField from './EmployeeTextField';
import EmployeeTextArea from './EmployeeTextArea';
import RolesAndSalaryListing from './RolesAndSalaryListing';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName : '',
            emailId : '',
            phoneNumber : '',
            address : '',
            employeeSkills : '',
            rolesListing : [
                {title: 'developer', description: 'develope product', salary: 50000},
                {title: 'team lead', description: 'deliver product', salary: 70000},
                {title: 'manager', description: 'manage product', salary: 90000}
            ]
        };
        this.textFieldHandler = this.textFieldHandler.bind(this);//this is the method
    }

    textFieldHandler(event) {

        if(event.target.name === 'employeeFullName') {
            this.setState({
                fullName : event.target.value
            });
            console.log(`text field's val : ${this.state.fullName}`);
        }
        if(event.target.name === 'employeeEmailId') {
            this.setState({
                emailId : event.target.value
            });
            console.log(`text field's val : ${this.state.emailId}`);
        }
        if(event.target.name === 'employeePhoneNumber') {
            this.setState({
                phoneNumber : event.target.value
            });
            console.log(`text field's val : ${this.state.phoneNumber}`);
        }
        if(event.target.name === 'employeeAddress') {
            this.setState({
                address : event.target.value
            });
            console.log(`text field's val : ${this.state.address}`);
        }
        if(event.target.name === 'employeeSkills') {
            this.setState({
                employeeSkills : event.target.value
            });
            console.log(`text field's val : ${this.state.employeeSkills}`);
        }
    }

    render() {
        return(
            <div>
                <EmployeeTextField
                    empId = 'employeeFullName'
                    name = 'employeeFullName'
                    label = "employee's full name"
                    placeholder = 'Type in the full name...'
                    val = {this.state.fullName}
                    inputHandler = {this.textFieldHandler}
                    //text = 'Enter the full name'
                />
                <EmployeeTextField
                    empId = 'employeeEmailId'
                    name = 'employeeEmailId'
                    label = "employee's email id"
                    placeholder = 'Type in the email id...'
                    val = {this.state.emailId}
                    inputHandler = {this.textFieldHandler}
                    //text = 'Enter the email id'
                />
                <EmployeeTextField
                    empId = 'employeePhoneNumber'
                    name = 'employeePhoneNumber'
                    label = "employee's phone number"
                    placeholder = 'Type in the phone number...'
                    val = {this.state.phoneNumber}
                    inputHandler = {this.textFieldHandler}
                    //text = 'Enter the phone number'
                />
                <EmployeeTextField
                    empId = 'employeeAddress'
                    name = 'employeeAddress'
                    label = "employee's address"
                    placeholder = 'Type in the address...'
                    val = {this.state.address}
                    inputHandler = {this.textFieldHandler}
                    //text = 'Enter the address'
                />
                <EmployeeTextArea
                    label = 'Employee skills'
                    name = 'employeeSkills'
                    val = {this.state.employeeSkills}
                    inputHandler = {this.textFieldHandler}
                />
                <RolesAndSalaryListing
                    rolesListing = {this.state.rolesListing}
                />
            </div>
        );
    }
}