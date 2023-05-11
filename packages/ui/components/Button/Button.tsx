export const Button = ({ text }: { text: string }) => {
  return <button className="text-black hover:opacity-90 py-3 px-6 rounded-full bg-brand">{text}</button>;
};
