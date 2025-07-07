import { features, FeatureType } from "@/data/features";
import SubHeading from "../Comman/SubHeading";

interface FeatureBoxProps {
  heading: string;
  content: string;
  className: string;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({ heading, content, className }) => (
  <div className={`p-5 rounded-lg flex flex-col justify-between h-[200px] ${className}`}>
    <h5 className="font-medium text-2xl mb-2">
      {heading}
    </h5>
    <p className="font-normal text-base">
      {content}
    </p>
  </div>
);

const Features = () => {
  const evenClass = "bg-custom-red text-white";
  const oddClass = "custom-white-gradient text-black";

  return (
    <section className="">
      <SubHeading heading="Why Follow our Blog Page" className="text-center mb-4" />
      <p className="text-xl font-normal text-custom-dark-2 text-center mb-10 max-w-3xl mx-auto">
        {"We specialize in detailed travel guides, budget travel tips, and destination recommendations to help you make the most of your trips."}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature: FeatureType, index: number) => (
          <FeatureBox
            key={index}
            heading={feature.title}
            content={feature.description}
            className={index % 2 === 0 ? evenClass : oddClass}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
