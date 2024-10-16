import {
  EmergencyIcon,
  PoliceIcon,
  HealthIcon,
  FireIcon,
  AmbulanceIcon,
  DomesticViolenceIcon,
  DisasterIcon,
} from "@/app/utils/icons";

interface SideBarNavDataProps {
  id: number;
  title: string;
  icon: string;
  link: string;
}
interface FooterProps {
  id: number;
  title: string;
  link: string;
}

export const SideBarNavData: SideBarNavDataProps[] = [
  {
    id: 1,
    title: "Emergency services",
    icon: EmergencyIcon,
    link: "/",
  },
  {
    id: 2,
    title: "Police",
    icon: PoliceIcon,
    link: "/",
  },
  {
    id: 3,
    title: "Health",
    icon: HealthIcon,
    link: "/health",
  },
  {
    id: 4,
    title: "Fire Department",
    icon: FireIcon,
    link: "/fire-department",
  },
  {
    id: 5,
    title: "Ambulance",
    icon: AmbulanceIcon,
    link: "/ambulance",
  },
  {
    id: 6,
    title: "Domestic violence",
    icon: DomesticViolenceIcon,
    link: "/domestic-violence",
  },
  {
    id: 7,
    title: "Disaster response",
    icon: DisasterIcon,
    link: "/disaster",
  },
];
export const FooterData: FooterProps[] = [
  {
    id: 1,
    title: "About",
    link: "/about",
  },
  {
    id: 2,
    title: "Emergency contact",
    link: "/emergency-contact",
  },
  {
    id: 3,
    title: "Health",
    link: "/health",
  },
  {
    id: 4,
    title: "Blog",
    link: "/blog",
  },
  {
    id: 5,
    title: "Contact us",
    link: "/contact-us",
  },
  {
    id: 6,
    title: "Support",
    link: "/support",
  },
  {
    id: 7,
    title: "Disaster response",
    link: "/disaster-response",
  },
];
