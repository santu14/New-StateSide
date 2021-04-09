/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  signUp: (userData) => {
    return axios.post("/api/signup", userData).then((data) => {
      // console.log(data);
      return data;
    });
  },
  signIn: (userData) => {
    return axios.post("/api/signin", userData).then((data) => {
      // console.log(data);
      return data;
    });
  },
  signOut: () => {
    return axios.get("/api/signout");
  },
  checkAuth: () => {
    return axios.get("/api/checkauth");
  },

  // Gets all users
  getUsers: function () {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function (id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database

  saveTrip: function (id, tripData) {
    // console.log(tripData, id);
    return axios.post("/api/users/" + id, tripData);
  },
  updateTrip: function (id, tripData) {
    // console.log(tripData, id);
    return axios.put("/api/trips/" + id, tripData);
  },
  getTrip: function (id) {
    return axios.get("/api/trips/" + id);
  },
  saveActivity: function (id, activityData) {
    // console.log(activityData, id);
    return axios.post("/api/trips/" + id, activityData);
  },
  saveExpense: function (id, expensesData) {
    // console.log(expensesData, id);
    return axios.post("/api/expenses/" + id, expensesData);
  },
  savePhoto: function (id, photoData) {
    // console.log(photoData, id);
    return axios.post("/api/photos/" + id, photoData);
  },
  getTrips: function () {
    return axios.get("/api/trips");
  },
};
