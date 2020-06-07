module.exports = {

    createEmployee : (req, res) => {
        res.status(200).json({'message':'I am in create employee'});
    },

    getEmployee : (req, res) => {
        res.status(200).json({'message':'I am in get employee'});
    },

    getAllEmployee : (req, res) => {
        res.status(200).json({'message':'I am in get all employee'});
    },

    updateEmployee : (req, res) => {
        res.status(200).json({'message':'I am in update employee'});
    },

    deleteEmployee : (req, res) => {
        res.status(200).json({'message':'I am in delete employee'});
    }
};