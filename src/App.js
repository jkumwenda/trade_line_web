import { Routes, Route } from "react-router-dom";
// import { RequireToken } from "./services/AuthService";
import Web from "./layouts/Web";
import Auth from "./layouts/Auth";
import Admin from "./layouts/Admin";
import Home from "./pages/web/home/Home";
import HowItWorks from "./pages/web/how_it_works/HowItWorks";
import AuctionItems from "./pages/web/auction_items/AuctionItems";
import Item from "./pages/web/auction_items/Item";
import Faqs from "./pages/web/faqs/Faqs";
import ContactUs from "./pages/web/contact_us/ContactUs";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Users from "./pages/admin/users/Users";
import AddUser from "./pages/admin/users/AddUser";
import Roles from "./pages/admin/roles/Roles";
import AddRole from "./pages/admin/roles/AddRole";
import EditRole from "./pages/admin/roles/EditRole";

import Auctions from "./pages/admin/auctions/Auctions";
import Auction from "./pages/admin/auctions/Auction";
import AddAuction from "./pages/admin/auctions/AddAuction";
import EditAuction from "./pages/admin/auctions/EditAuction";

import Reports from "./pages/admin/reports/Reports";

import Traders from "./pages/admin/traders/Traders";
import AddTrader from "./pages/admin/traders/AddTrader";
import EditTrader from "./pages/admin/traders/EditTrader";

import ItemCategories from "./pages/admin/item_categories/ItemCategories";
import AddItemCategory from "./pages/admin/item_categories/AddItemCategory";
import EditItemCategory from "./pages/admin/item_categories/EditItemCategory";

import NoMatch from "./pages/NoMatch";
import Login from "./pages/admin/login/Login";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full text-lg font-gantari text-cod-gray-300">
      <Routes>
        <Route element={<Web />}>
          <Route path="/" element={<Home />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="auction-items" element={<AuctionItems />} />
          <Route path="item" element={<Item />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
        <Route element={<Auth />}>
          <Route path="login" element={<Login />} />
        </Route>
        <Route element={<Admin />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="add-user" element={<AddUser />} />
          <Route path="roles" element={<Roles />} />
          <Route path="add-role" element={<AddRole />} />
          <Route path="edit-role:roleId" element={<EditRole />} />
          <Route path="auctions" element={<Auctions />} />
          <Route path="auction" element={<Auction />} />
          <Route path="add-auction" element={<AddAuction />} />
          <Route path="edit-auction:roleId" element={<EditAuction />} />
          <Route path="reports" element={<Reports />} />
          <Route path="traders" element={<Traders />} />
          <Route path="add-trader" element={<AddTrader />} />
          <Route path="edit-trader:roleId" element={<EditTrader />} />
          <Route path="item_categories" element={<ItemCategories />} />
          <Route path="add-item-category" element={<AddItemCategory />} />
          <Route
            path="edit-item-category:roleId"
            element={<EditItemCategory />}
          />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
