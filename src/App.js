
import Navbar from "./components/Navbar";
import Footer from "./components/layout/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AddCategory from "./components/admin/add_category";
import Signin from "./pages/Signin";
import SignUp from "./pages/Signup";
import Profile from "./pages/profile";
import Header from "./components/admin/Header";
import UpdateProfile from "./pages/updateprofile";
import AdminLogin from "./components/admin/admin_login";
import ShowUser from "./components/admin/admin_homepage";
import Contact from "./components/layout/Contact/Contact";
import About from "./components/layout/About/About";
import ShowCategory from "./components/admin/admin_category";
import { UserAuthContextProvider } from "./context/UserAuthContext";


function App() {
  // useEffect(() => {
  //   if (window.location.pathname === "/home") {
  //     if (!localStorage.getItem("accessToken")) {
  //       window.location.href = "/";
  //     }
  //   }
  //   if (
  //     window.location.pathname === "/" ||
  //     window.location.pathname === "/signup"
  //   ) {
  //     if (localStorage.getItem("accessToken")) {
  //       window.location.href = "/home";
  //     }
  //   }
  // }, []);

  return (
    <div className="App">
      <UserAuthContextProvider>
        <Routes>
         
          <Route
            path="/home"
            element={
              <>
                <Navbar />
                <Homepage />
                <Footer />
                
              </>
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Signin />} />
          
          <Route  path="/profile" element={
          <><Navbar /> 
          <Profile /> 
          <Footer />
          </>}/>
          <Route path="/profile/update" element={<>
          <Navbar />
          <UpdateProfile />

          </>} />
          <Route
            path="/admin"
            element={
              <AdminLogin />
            }
          />
          <Route
            path="/admin/home"
            element={<><Header />
              <ShowUser /></>
            }
          />
          <Route
            path="/admin/category"
            element={<><Header />
              <ShowCategory /></>
            }
          />
          <Route
            path="/admin/addcategory"
            element={<><Header />
              <AddCategory /></>
            }
          />
          <Route
            path="/aboutus"
            element={<><Navbar />
              <About /></>
            }
          />
          <Route
            path="/contact"
            element={<><Navbar />
              <Contact /></>
            }
          />
          
          
          
        </Routes>
          
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
