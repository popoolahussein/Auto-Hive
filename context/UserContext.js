import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);


  // Load users and current user from storage on app start
  useEffect(() => {
    const loadUsers = async () => {
      const storedUsers = await AsyncStorage.getItem('users');
      const storedCurrentUser = await AsyncStorage.getItem('currentUser');
      if (storedUsers) setUsers(JSON.parse(storedUsers));
      if (storedCurrentUser) setCurrentUser(JSON.parse(storedCurrentUser));
    };
    loadUsers();
  }, []);

  // Save users to storage
  const saveUsersToStorage = async (users) => {
    await AsyncStorage.setItem('users', JSON.stringify(users));
  };

  // Save current user to storage
  const saveCurrentUserToStorage = async (user) => {
    await AsyncStorage.setItem('currentUser', JSON.stringify(user));
  };

  // Register a new user
  const registerUser = (newUser) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    saveUsersToStorage(updatedUsers);
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setCurrentUser(newUser); // Automatically log in the newly registered user
  };

  // Validate user login
  const validateUser = (email, password) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) setCurrentUser(user);
    saveCurrentUserToStorage(user);
    return user;
  };

  // Update the current user's profile
  const updateUserProfile = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.email === currentUser?.email ? { ...user, ...updatedUser } : user
      )
    );
    setCurrentUser((prevUser) => ({
      ...prevUser,
      ...updatedUser
    })); // Update the logged-in user's data
  };

  return (
    <UserContext.Provider
      value={{
        users,
        currentUser,
        registerUser,
        validateUser,
        updateUserProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
