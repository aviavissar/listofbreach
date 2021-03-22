import React, { useState, createContext, useContext, useEffect } from "react";
import { getData } from "../service/fetchData"

const TasksStore = createContext()
const { Provider } = TasksStore;

const useStore = () => {
  const context = useContext(TasksStore);
  if (!context) {
    throw new Error(`useStore must be used within a Provider`);
  }
  return context;
};



const TaskAppProvider = ({ children }) => {
  let [breaches, setBreaches] = useState( []);

  useEffect(() => {
    async function fetchData() {
      console.log(await getData())
      setBreaches(await getData())
    }
    fetchData()
  }, []);

  const state = {
    breaches
  };
  // actions = callbacks to invoke
  const actions = {
    setBreaches
  };

  return <Provider value={{ ...state, ...actions }}>{children}</Provider>;
}

export { TaskAppProvider, useStore };
