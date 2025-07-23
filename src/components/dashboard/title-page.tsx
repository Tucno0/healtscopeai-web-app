import { Badge } from '../ui/badge';

interface TitlePageProps {
  title: string;
  description: string;
  total?: number;
}

export const TitlePage = ({ title, description, total }: TitlePageProps) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <h2 className="text-2xl font-bold tracking-tight">
          {title
            ? title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()
            : ''}
        </h2>

        {total && <Badge variant="outline">{total} elementos</Badge>}
      </div>
      <p className="text-muted-foreground">
        {description
          ? description.charAt(0).toUpperCase() +
            description.slice(1).toLowerCase()
          : ''}
      </p>
    </div>
  );
};
