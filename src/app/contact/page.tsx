import ContactClient from "@/components/ContactClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Consuline™ | Request an Executive Briefing",
  description: "Schedule a confidential operational audit preview or strategic response advisory with our senior healthcare partners.",
};

export default function Contact() {
  return <ContactClient />;
}
