
import UpperContent from "./upperContent";
import LowerContent from "./lowerContent";

interface hookProps {
    className?: string,
};

const Hook: React.FC<hookProps> = ({ className }) => {
    return (
        <div className={`${className}`}>
            <UpperContent className="h-auto w-full bg-[#4A3461] p-10"/>
            <LowerContent />
        </div>
    );
};

export default Hook;