import { useContext } from "react";
import HeaderContext from "../context/HeaderContext";

const useHeader = () => useContext(HeaderContext);

export default useHeader;