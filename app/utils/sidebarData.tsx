import {
  EmergencyIcon,
  PoliceIcon,
  HealthIcon,
  FireIcon,
  AmbulanceIcon,
  DomesticViolenceIcon,
  DisasterIcon,
  AccidentIcon,
  CrimeIcon,
  FloodIcon,
  MedicalIcon,
  RapeIcon,
  RedFireIcon,
  Blog1,
  Blog2,
  Blog3,
  HomeIcon,
  SearchIcon,
  BlackBell,
} from "@/app/utils/icons";

interface SideBarNavDataProps {
  id: number;
  title: string;
  icon: string;
  link: string;
}
interface BlogDataProps {
  id: number;
  title: string;
  icon: string;
  link: string;
  date: string;
  time: string;
}
interface FooterProps {
  id: number;
  title: string;
  link: string;
}
interface LocationServicesDataProps {
  id: number;
  title: string;
  link: string;
  phone: string;
  location: string;
}
interface EmergenciesDataProps {
  id: number;
  title: string;
  icon: string;
}

export const EmergenciesData: EmergenciesDataProps[] = [
  {
    id: 1,
    title: "Accident",
    icon: AccidentIcon,
  },
  {
    id: 2,
    title: "Fire",
    icon: RedFireIcon,
  },
  {
    id: 3,
    title: "Medical",
    icon: MedicalIcon,
  },
  {
    id: 4,
    title: "Crime",
    icon: CrimeIcon,
  },
  {
    id: 5,
    title: "Rape",
    icon: RapeIcon,
  },
  {
    id: 6,
    title: "Flood",
    icon: FloodIcon,
  },
];
export const LocationServicesData: LocationServicesDataProps[] = [
  {
    id: 1,
    title: "Oval Police station",
    link: "/",
    phone: "09098765678",
    location: "8 min read",
  },
  {
    id: 2,
    title: "Pentagon ambulance and medicals",
    link: "/",
    phone: "09098765678",
    location: "8 min read",
  },
  {
    id: 3,
    title: "Westgate fire station",
    link: "/",
    phone: "09098765678",
    location: "8 min read",
  },
];
export const BlogData: BlogDataProps[] = [
  {
    id: 1,
    title: "How to administer CPR",
    icon: Blog1,
    link: "/",
    date: "Oct 9, 2024",
    time: "8 min read",
  },
  {
    id: 2,
    title: "First aid tips",
    icon: Blog2,
    link: "/",
    date: "Oct 9, 2024",
    time: "8 min read",
  },
  {
    id: 3,
    title: "What to do in a fire accident",
    icon: Blog3,
    link: "/",
    date: "Oct 9, 2024",
    time: "8 min read",
  },
];
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
    link: "/police",
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
export const MobileNavData: SideBarNavDataProps[] = [
  {
    id: 1,
    title: "Home",
    icon: HomeIcon,
    link: "/",
  },
  {
    id: 2,
    title: "Services",
    icon: EmergencyIcon,
    link: "/police",
  },
  {
    id: 3,
    title: "Alert",
    icon: BlackBell,
    link: "/fire-department",
  },
  {
    id: 4,
    title: "search",
    icon: SearchIcon,
    link: "/health",
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
