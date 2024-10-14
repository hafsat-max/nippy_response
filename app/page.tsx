import police from "@/public/assets/police-service.png";
import Image from "next/image";
import EmergencyContact from "./components/EmergencyContact";

export default function Home() {
  return (
    <section className=" py-10 flex flex-col gap-10">
      <div className="flex flex-col gap-3 px-14">
        <h3 className="text-secondary text-semibold-18">Good morning,</h3>
        <p className="text-semibold-32 text-secondary">
          Find the Nearest Police Station.........
        </p>
      </div>

      <div className="flex flex-col gap-8 p-8 ">
        {/* police */}
        <Image src={police} width={722} height={400} alt="police image" />

        {/* emergency  */}
        <EmergencyContact />
      </div>
    </section>
  );
}
