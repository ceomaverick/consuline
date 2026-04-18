import HomeClient from "@/components/HomeClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consuline™ | Health System Strategy & Operations",
  description: "Enterprise strategy for healthcare providers and hospital systems. We optimize clinical operations, drive digital transformation, and ensure long-term financial sustainability.",
};

export default function Home() {
  return <HomeClient />;
}
