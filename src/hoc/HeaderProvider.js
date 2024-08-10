import HeaderContext from "../context/HeaderContext";
import useProvideHeader from "../hooks/useProvideHeader";

function HeaderProvider({ children }) {
  const header = useProvideHeader(HeaderContext)
  return (
    <HeaderContext.Provider value={header}>
      {children}
    </HeaderContext.Provider>
  )
};

export default HeaderProvider;