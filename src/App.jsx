import Layout from "../src/components/Layout";
import { queryClient } from "./lib/queryClient";
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "../src/components/ui/toaster";
import { TooltipProvider } from "../src/components/ui/tooltip";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Products from "../src/pages/Products";
import ProductDetails from "../src/pages/ProductDetails";
import Contact from "../src/pages/Contact";
import LockAIHotelManagementSystem from "../src/pages/LockAIHotelManagementSystem";
import MobileKeySolution from "../src/pages/MobileKeySolution";
import TTHotelSystem from "../src/pages/TTHotelSystem";
import HTLOCKHotelManagementSystem from "../src/pages/HTLOCKHotelManagementSystem";

function Router() {


  return (
    <Layout>
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
         <Route path="/products" component={Products} /> 
      <Route path="/products/:category" component={Products} />
      <Route path="/product/:id" component={ProductDetails} />
      <Route path="/contact" component={Contact} />
      <Route path="/solutions/lockai-hotel-management-system" component={LockAIHotelManagementSystem} />
      <Route path="/solutions/mobile-key-solution" component={MobileKeySolution} />
      <Route path="/solutions/tt-hotel-system" component={TTHotelSystem} />
      <Route path="/solutions/htlock-hotel-management-system" component={HTLOCKHotelManagementSystem} />
      </Switch>
    </Layout>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App
