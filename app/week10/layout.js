import { AuthContextProvider } from "./_utils/auth-context";

//this runs before loading page.js
//children is the page.js or another layout.js
const Layout = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default Layout;
