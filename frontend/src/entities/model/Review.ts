export interface Review {
  user: string;
  rating: number;
  comment: string;
  pros?: string;
  cons?: string;
  date?: string;
}
