import { combineClasses } from '@/shared/lib/style-worker';

interface AccordionProps {
  className?: string;
  title: string | React.ReactNode;
  content: React.ReactNode;
  name: string;
  defaultChecked?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  className,
  title,
  content,
  name,
  defaultChecked = false,
}) => {
  const classes = combineClasses(className, 'collapse');
  return (
    <div className={classes}>
      <input type="radio" name={name} defaultChecked={defaultChecked} />
      <div className="collapse-title text-xl font-medium">{title}</div>
      <div className="collapse-content">{content}</div>
    </div>
  );
};
