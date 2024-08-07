import Image from "next/image";
import ProfileCard from "./_components/ProfileCard";

export default function Home() {
  return (
   <div>
        <div className="flex flex-col justify-center items-center h-screen p-4">
      <h1 className="text-5xl font-bold mb-4 text-center">Welcome to Our Portfolio for the Cyphers</h1>
      <p className="text-lg mb-8 text-center">Discover our work, skills, and background</p>
      <div className="flex items-center justify-center space-x-8">
        <ProfileCard name="Khushpreet Singh Gill" path="/khush.jpeg" />
        <ProfileCard name="Jashanpreet Singh" path="/Jashan.jpeg" />
        <ProfileCard name="Ravneet Singh" path="/Rav.jpeg" />
      </div>
    </div>
   </div>
  );
}
