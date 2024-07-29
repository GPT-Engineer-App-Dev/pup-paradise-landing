import { Button } from "@/components/ui/button";
import { Paw, Heart, Bone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-yellow-200">
      <header className="py-6 px-4 md:px-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-yellow-800">DoggyLand</h1>
          <Button variant="outline" className="text-yellow-800 border-yellow-800">
            Contact Us
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-900 mb-6">
          Welcome to DoggyLand!
        </h2>
        <p className="text-xl text-yellow-800 mb-8">
          Where tails wag and hearts melt
        </p>
        <div className="mb-12">
          <img
            src="/placeholder.svg"
            alt="Happy dog"
            className="mx-auto object-cover w-full md:w-2/3 h-[400px] rounded-lg shadow-lg"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <FeatureCard
            icon={<Paw className="h-8 w-8 text-yellow-600" />}
            title="Friendly Companions"
            description="Our dogs are loving, loyal, and always ready for cuddles."
          />
          <FeatureCard
            icon={<Heart className="h-8 w-8 text-yellow-600" />}
            title="Health & Care"
            description="We prioritize the well-being of our furry friends with top-notch care."
          />
          <FeatureCard
            icon={<Bone className="h-8 w-8 text-yellow-600" />}
            title="Training & Fun"
            description="Engage in fun activities and professional training sessions."
          />
        </div>
        <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
          Adopt a Furry Friend
        </Button>
      </main>

      <footer className="bg-yellow-800 text-yellow-100 py-6 px-4 text-center">
        <p>&copy; 2024 DoggyLand. All rights reserved.</p>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-yellow-800 mb-2">{title}</h3>
    <p className="text-yellow-700">{description}</p>
  </div>
);

export default Index;
