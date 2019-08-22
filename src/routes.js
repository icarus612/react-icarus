
import Home from "./pages/home.js";
import Contact from "./pages/contact.js";
import Quote from "./pages/quote.js";
import Portfolio from "./pages/portfolio.js";
import About from "./pages/about.js";


var indexRoutes = [
  { path: "/contact-us", name: "ContactPage", component: Contact },
  { path: "/about-us", name: "AboutPage", component: About },
  { path: "/projects-and-portfolio", name: "PortfolioPage", component: Portfolio },
  { path: "/get-quote", name: "QuotePage", component: Quote },
  { path: "/", name: "HomePage", component: Home }
];

export default indexRoutes;
