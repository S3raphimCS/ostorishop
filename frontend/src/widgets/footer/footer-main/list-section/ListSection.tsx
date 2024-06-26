interface ListSectionProps {
  title: string;
  children: React.ReactNode;
}

export const ListSection: React.FC<ListSectionProps> = ({
  title,
  children,
}) => {
  return (
    <div className="text-center sm:text-left">
      <p className="text-lg font-bold tracking-wide text-white">{title}</p>
      <ul className="mt-8 space-y-4 text-sm">{children}</ul>
    </div>
  );
};
