interface FilterProps {
  title: string;
  children: React.ReactNode;
}

export const Filter: React.FC<FilterProps> = ({ title, children }) => {
  return (
    <div className="mb-4">
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <div>{children}</div>
    </div>
  );
};
