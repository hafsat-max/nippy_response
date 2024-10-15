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
    link: "/overview",
  },
  {
    id: 2,
    title: "Police",
    icon: PoliceIcon,
    link: "/overview",
  },
  {
    id: 3,
    title: "Health",
    icon: HealthIcon,
    link: "/overview",
  },
  {
    id: 4,
    title: "Fire Department",
    icon: FireIcon,
    link: "/overview",
  },
  {
    id: 5,
    title: "Ambulance",
    icon: AmbulanceIcon,
    link: "/overview",
  },
  {
    id: 6,
    title: "Domestic violence",
    icon: DomesticViolenceIcon,
    link: "/overview",
  },
  {
    id: 7,
    title: "Disaster response",
    icon: DisasterIcon,
    link: "/overview",
  },
];
export const FooterData: FooterProps[] = [
  {
    id: 1,
    title: "About",
    link: "/overview",
  },
  {
    id: 2,
    title: "Emergency contact",
    link: "/overview",
  },
  {
    id: 3,
    title: "Health",
    link: "/overview",
  },
  {
    id: 4,
    title: "Blog",
    link: "/overview",
  },
  {
    id: 5,
    title: "Contact us",
    link: "/overview",
  },
  {
    id: 6,
    title: "Support",
    link: "/overview",
  },
  {
    id: 7,
    title: "Disaster response",
    link: "/overview",
  },
];
