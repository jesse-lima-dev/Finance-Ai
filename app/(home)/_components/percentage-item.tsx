import { ReactNode } from "react";

interface PercentageItemProps {
  icon: ReactNode;
  title: string;
  value: number;
  isFirst?: boolean;
}

const PercentageItem = ({
  title,
  icon,
  value,
  isFirst = false,
}: PercentageItemProps) => {
  return (
    <div className="flex items-center justify-between">
      {/* Título */}
      <p className="text-sm text-muted-foreground">{title}</p>
      {/* Ícone */}
      <div
        className={`flex items-center justify-center rounded-lg bg-white bg-opacity-[3%] p-2 ${isFirst ? "ml-4" : ""}`}
      >
        {icon}
      </div>
      {/* Valor */}
      <p className="text-sm font-bold">{value}%</p>
    </div>
  );
};

export default PercentageItem;
