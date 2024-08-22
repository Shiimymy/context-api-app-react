import logo from "./logo.svg";
import "./App.css";
import UserInfoContext from "./context/UserInfoContext";

export default function App() {
  const userInfo = { user: "Admin", isAdmin: true };
  return <UserInfoContext.Provider value={userInfo}></UserInfoContext.Provider>;
}
