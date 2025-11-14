
import UpperContent from "./upperContent";
import LowerContent from "./lowerContent";

interface servicesProps {
    className?: string;
};

const Services: React.FC<servicesProps> = ({ className }) => {
    return (
        <div className={`${className}`}>
            <UpperContent className="h-[50dvh] w-full bg-white rounded-t-[50px]"/>
            <LowerContent className="h-[50dvh] w-full bg-white"/>
        </div>
    );
};

export default Services;