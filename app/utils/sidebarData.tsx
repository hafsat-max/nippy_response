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
