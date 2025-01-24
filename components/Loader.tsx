import { Loader2 } from "lucide-react";

export const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin">
        <Loader2 className="w-8 h-8 text-gray-600" />
      </div>
    </div>
  );
};
