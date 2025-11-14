
import UpperContent from "./upperContent";
import LowerContent from "./lowerContent";

interface servicesProps {
    className?: string;
};

const Services: React.FC<servicesProps> = ({ className }) => {
    return (
        <div className={`text-[#201728] ${className}`}>
            <UpperContent className="h-auto w-full bg-white rounded-t-[50px] p-5"/>
            <LowerContent className="h-auto w-full bg-white p-5"/>
        </div>
    );
};

export default Services;