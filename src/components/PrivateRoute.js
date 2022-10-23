import { Navigate } from "react-router-dom"
const PrivateRoute =({ children }) => {
   
    const isUser = localStorage.getItem("userAuth")

   
    return isUser ? children : <Navigate to="/login" replace/>


}
export default PrivateRoute