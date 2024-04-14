import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Eventlist } from "./pages/event";
import { Cart } from "./pages/cart";
import { EventContextProvider } from "./context/event-context";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutPage from "./pages/About";
import PaymentPage from "./pages/Payment";

function App() {
  return (
    <div className="App">
      <EventContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Eventlist />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Routes>
        </Router>
      </EventContextProvider>
    </div>
  );
}

export default App;