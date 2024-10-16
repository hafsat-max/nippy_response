import Image from "next/image";
import { GeneralEmergencyContact } from "./components/EmergencyContact";
import { EmergenciesData } from "./utils/sidebarData";
import Blog from "./components/Blog/Blog";
import ServicesNearYou from "./components/ServicesNearYou/ServicesNearYou";

export default function Home() {
  return (
    <section className=" py-10 flex flex-col gap-y-10">
      <div className="flex flex-col gap-3 px-6 md:px-14">
        <h3 className="text-secondary text-semibold-18">Good day,</h3>
        <p className="font-semibold text-2xl md:3xl text-secondary">
          What’s your emergency?
        </p>
        <div className="flex gap-x-6 overflow-x-scroll scrollbar-hide text-center">
          {EmergenciesData.map((item, idx) => {
            return (
              <div key={idx * 2}>
                <div>
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 flex items-center justify-center  rounded-lg bg-bgBlue `}
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={20}
                      height={20}
                      className="w-6 h-6 md:w-8 md:h-8 "
                    />
                  </div>
                  <p className="mt-2 text-sm sm:text-md">{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-8">
          <GeneralEmergencyContact />
          <ServicesNearYou />
        </div>
        <Blog />
      </div>
    </section>
  );
}
