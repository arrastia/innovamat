export interface CardProps {
  description: string;
  id: string;
  image?: string;
  onCardClick: () => void;
  title: string;
}
