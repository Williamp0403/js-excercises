import { createContext, useContext } from "react"
import { UseResponse as useResponseProvider } from "../hooks/useResponse.js"; // Importa el hook personalizado

export const ResponseContext = createContext()

export const useResponse = () => {
  const context = useContext(ResponseContext);
  if (!context) {
    throw new Error("useResponse debe utilizarse dentro de ResponseProvider");
  }
  return context;
}

export const ResponseProvider = ({ children }) => {
  const response = useResponseProvider()

  return (
    <ResponseContext.Provider value={response}>
      {children}
    </ResponseContext.Provider>
  )
}