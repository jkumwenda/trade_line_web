import { Routes, Route } from "react-router-dom";
import { RequireToken } from "./services/AuthService";

import Web from "./layouts/Web";
import Auth from "./layouts/Auth";
import Admin from "./layouts/Admin";
import Home from "./pages/web/home/Home";
import HowItWorks from "./pages/web/how_it_works/HowItWorks";
import AuctionItems from "./pages/web/auction_items/AuctionItems";
import CompletedAuctions from "./pages/web/completed_auctions/CompletedAuctions";
import MyBids from "./pages/web/my_bids/MyBids";
import Item from "./pages/web/auction_items/Item";
import Faqs from "./pages/web/faqs/Faqs";
import ContactUs from "./pages/web/contact_us/ContactUs";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Users from "./pages/admin/users/Users";
import AddUser from "./pages/admin/users/AddUser";
import EditUser from "./pages/admin/users/EditUser";
import Roles from "./pages/admin/roles/Roles";
import AddRole from "./pages/admin/roles/AddRole";
import EditRole from "./pages/admin/roles/EditRole";

import Auctions from "./pages/admin/auctions/Auctions";
import Auction from "./pages/admin/auctions/Auction";
import AddAuction from "./pages/admin/auctions/AddAuction";
import EditAuction from "./pages/admin/auctions/EditAuction";

import Reports from "./pages/admin/reports/Reports";

import Bidders from "./pages/admin/bidders/Bidders";
import AddBidder from "./pages/admin/bidders/AddBidder";
import EditBidder from "./pages/admin/bidders/EditBidder";

import Traders from "./pages/admin/traders/Traders";
import AddTrader from "./pages/admin/traders/AddTrader";
import EditTrader from "./pages/admin/traders/EditTrader";

import ItemCategories from "./pages/admin/item_categories/ItemCategories";
import AddItemCategory from "./pages/admin/item_categories/AddItemCategory";
import EditItemCategory from "./pages/admin/item_categories/EditItemCategory";
import Settings from "./pages/admin/settings/Settings";
import Help from "./pages/admin/help/Help";

import NoMatch from "./pages/NoMatch";
import Login from "./pages/admin/login/Login";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full text-lg font-gantari text-cod-gray-300">
      <Routes>
        <Route element={<Web />}>
          <Route path="/" element={<Home />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="completed-auctions" element={<CompletedAuctions />} />
          <Route path="auction-items" element={<AuctionItems />} />
          <Route path="item" element={<Item />} />
          <Route path="my-bids" element={<MyBids />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
        <Route element={<Auth />}>
          <Route path="login" element={<Login />} />
        </Route>
        <Route element={<Admin />}>
          <Route
            path="dashboard"
            element={
              <RequireToken>
                <Dashboard />
              </RequireToken>
            }
          />
          <Route path="users" element={<Users />} />
          <Route path="add-user" element={<AddUser />} />
          <Route path="edit-user" element={<EditUser />} />
          <Route path="roles" element={<Roles />} />
          <Route path="add-role" element={<AddRole />} />
          <Route path="edit-role" element={<EditRole />} />
          <Route path="auctions" element={<Auctions />} />
          <Route path="auction" element={<Auction />} />
          <Route path="add-auction" element={<AddAuction />} />
          <Route path="edit-auction:roleId" element={<EditAuction />} />
          <Route path="reports" element={<Reports />} />
          <Route path="bidders" element={<Bidders />} />
          <Route path="add-bidder" element={<AddBidder />} />
          <Route path="edit-bidder" element={<EditBidder />} />
          <Route path="traders" element={<Traders />} />
          <Route path="add-trader" element={<AddTrader />} />
          <Route path="edit-trader" element={<EditTrader />} />
          <Route path="item_categories" element={<ItemCategories />} />
          <Route path="add-item-category" element={<AddItemCategory />} />
          <Route path="settings" element={<Settings />} />
          <Route path="help" element={<Help />} />
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
