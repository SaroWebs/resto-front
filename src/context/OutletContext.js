import { createContext, useContext } from "react";

const OutletContext = createContext();
const useOutletContext = () => useContext(OutletContext);

export default {OutletContext, useOutletContext}