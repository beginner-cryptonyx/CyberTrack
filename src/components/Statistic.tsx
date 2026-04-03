interface StatProps {
  value: number | string;
  text: string;
}

export default function Statistic({ value, text }: StatProps) {
  return (
    <div className="flex flex-col p-2 m-1 bg-white/5 backdrop-blur-md px-6 py-4 rounded-xl border border-white/10">
      <span className="text-white font-bold text-3xl">{value}</span>
      <span className=" text-am"> {text}</span>
    </div>
  );
}
