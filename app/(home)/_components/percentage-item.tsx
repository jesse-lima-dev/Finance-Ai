import { ReactNode } from "react";

interface PercentageItemProps {
  icon: ReactNode;
  title: string;
  value: number;
  additionalClass?: string;
  moveTitleRight?: boolean;
}

const PercentageItem = ({
  title,
  icon,
  value,
  additionalClass = "",
  moveTitleRight = false,
}: PercentageItemProps) => {
  return (
    <div className={`flex items-center justify-between ${additionalClass}`}>
      {/* Título */}
      <p
        className={`flex-1 text-sm text-muted-foreground ${moveTitleRight ? "mr-4" : ""}`}
      >
        {title}
      </p>
      {/* Ícone */}
      <div className="flex items-center justify-center rounded-lg bg-white bg-opacity-[3%] p-2">
        {icon}
      </div>
      {/* Valor */}
      <p className="w-16 text-right text-sm font-bold">{value}%</p>{" "}
      {/* Definindo largura fixa para valor */}
    </div>
  );
};

export default PercentageItem;
