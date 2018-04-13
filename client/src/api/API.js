import axios from "axios";

export default {
  // Gets all employees
  getAllEmployee: function() {
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
  },

  // Gets all goals
  getAllGoal: function() {
    return axios.get("/api/goal");
  },
  // Saves a goal to the database
  saveGoal: function(goalData) {
    return axios.post("/api/goal", goalData);
  },
  // Gets the goal with the given id
  getGoal: function(id) {
    return axios.get("/api/goal/" + id);
  },
  // Updates a goal to the database
  updateGoal: function(id, goalData) {
    return axios.post("/api/goal/" + id, goalData);
  },
  // Deletes the goal with the given id
  deleteGoal: function(id) {
    return axios.delete("/api/goal/" + id);
  }
};