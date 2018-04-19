import axios from "axios";

export default {
  // Gets the user with the given firebase id
  getUser: function(firebaseUser) {
    console.log("getUser called");
    console.log(firebaseUser);
    return axios.post("/api/user/fid", firebaseUser);
  },
  // Updates a User to the database
  updateUser: function(id, userData) {
    return axios.post("/api/user/" + id, userData);
  },

  // Gets all employees
  getAllEmployee: function() {
    return axios.get("/api/employee");
  },
  // Gets all employees from User
  getAllEmployeeFromUser: function(userId) {
    return axios.get("/api/employee/user/" + userId);
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
  // Gets all Goals by Employee
  getEmployeeGoals: function(id) {
    return axios.get("/api/goal/employee/" + id);
  },
  // Gets all Achieved Goals by Employee
  getEmployeeAchieved: function(id) {
    return axios.get("/api/achieved/employee/" + id);
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
  },
  // Saves an achieved goal to the database
  saveAchieved: function(achievedData) {
    return axios.post("/api/achieved", achievedData);
  }
};
