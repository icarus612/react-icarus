
import Home from "./pages/home.js";
import Contact from "./pages/contact.js";


var indexRoutes = [
  { path: "/contact-us", name: "ContactPage", component: Contact },
  { path: "/", name: "HomePage", component: Home }
];

export default indexRoutes;
