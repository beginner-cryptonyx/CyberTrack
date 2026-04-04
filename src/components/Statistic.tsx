interface StatProps {
  value: number | string;
  text: string;
  className?: string
}

export default function Statistic({ value, text, className }: StatProps) {
  return (
    <div className={`flex flex-col p-2 m-1 bg-white/7 backdrop-blur-sm px-6 py-4  rounded-xl border border-white/20 ${className}`}>
      <span className="text-white font-bold text-3xl">{value}</span>
      <span className=" text-am"> {text}</span>
    </div>
  );
}
