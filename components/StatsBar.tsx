import { cn } from "@/lib/utils";

interface StatBarProps {
  value: number;
  maxValue: number;
  color: string;
}

export const StatBar = ({ value, maxValue, color }: StatBarProps) => (
  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
    <div
      className={cn("h-2.5", color)}
      style={{
        width: `${(value / maxValue) * 100}%`,
        backgroundSize: `${(maxValue / value) * 100}% 100%`,
        backgroundPosition: "left",
      }}
    />
  </div>
);
