import { HiHome } from "react-icons/hi2";
import {
  FaChartLine,
  FaShoppingCart,
  FaWeightHanging,
  FaUserCheck,
  FaTools,
} from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { PiNotepadFill } from "react-icons/pi";
import { TbTruckDelivery, TbAppsFilled, TbFidgetSpinner } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";
import { MdContactSupport } from "react-icons/md";

export const sidebarItems = [
  { title: "Home", address: "/", Icon: HiHome },
  { title: "Dashboard", address: "/Overview", Icon: FaChartLine },
  { title: "Orders", address: "/orders", Icon: FaShoppingCart },
  { title: "Returns", address: "/", Icon: GiReturnArrow },
  { title: "Delivery Boost", address: "/DeliveryBoost", Icon: TbTruckDelivery },
  { title: "Weight Management", address: "/", Icon: FaWeightHanging },
  { title: "Apps", address: "/", Icon: TbAppsFilled },
  { title: "Setup & Manage", address: "/", Icon: TbFidgetSpinner },
  { title: "Buyer Experience", address: "/", Icon: FaUserCheck },
  { title: "Billing", address: "/", Icon: PiNotepadFill },
  { title: "Rate Calculator", address: "/RateCalculator", Icon: FaTools },
  { title: "Settings", address: "/", Icon: IoSettings },
  { title: "Help & Support", address: "/", Icon: MdContactSupport },
];
