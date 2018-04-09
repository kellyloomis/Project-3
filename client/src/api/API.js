import axios from "axios";

export default {
  // Gets all employees
  getEmployee: function() {
    return axios.get("/api/employee");
  },
  // Saves an employee to the database
  saveEmployee: function(employeeData) {
    return axios.post("/api/employee", employeeData);
  },
  // Gets the employee with the given id
  getEmployee: function(id) {
    return axios.get("/api/employee/" + id);
  },
  // Updates an employee to the database
  updateEmployee: function(id, employeeData) {
    return axios.post("/api/employee/" + id, employeeData);
  },
  // Deletes the employee with the given id
  deleteEmployee: function(id) {
    return axios.delete("/api/employee/" + id);
  }
};
