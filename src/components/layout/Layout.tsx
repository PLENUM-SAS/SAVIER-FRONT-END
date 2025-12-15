import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import ChatbotWidget from "@/components/chatbot/ChatbotWidget";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ChatbotWidget />
    </>
  );
}
