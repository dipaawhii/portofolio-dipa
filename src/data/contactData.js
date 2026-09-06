import { Camera, Mail, MessageCircle, User } from "lucide-react";

export const contactData = [
  {
    title: "LinkedIn",
    icon: User,
    detail: "Dipawhi.id",
    link: "https://www.linkedin.com/in/divawhi",
    hoverClass: "hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] hover:border-[#0A66C2]/30",
  },
  {
    title: "Instagram",
    icon: Camera,
    detail: "@dipawhi",
    link: "https://www.instagram.com/dipawhi/", 
    hoverClass: "hover:bg-[#E1306C]/10 hover:text-[#E1306C] hover:border-[#E1306C]/30",
  },
  {
    title: "WhatsApp",
    icon: MessageCircle,
    detail: "+62 882-0227-90062",
    link: "https://wa.me/62882022790062", 
    hoverClass: "hover:bg-[#25D366]/10 hover:text-[#25D366] hover:border-[#25D366]/30",
  },

  {
    title: "E-mail",
    icon: Mail,
    detail: "widyasaridiva92@gmail.com",
    link: "mailto:widyasaridiva92@gmail.com", 
    hoverClass:"hover:bg-[#c22b64]/10 hover:text-[#c22b64] hover:border-[#c22b64]/30",
  },
];