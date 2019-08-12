
import Home from "./pages/home.js";
import Contact from "./pages/contact.js";
import Quote from "./pages/quote.js";


var indexRoutes = [
  { path: "/contact-us", name: "ContactPage", component: Contact },
  { path: "/get-quote", name: "QuotePage", component: Quote },
  { path: "/", name: "HomePage", component: Home }
];

export default indexRoutes;
