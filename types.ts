export interface MenuItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  isSpicy?: boolean;
  isNew?: boolean;
  category: 'Rice' | 'Noodles' | 'Burger' | 'Appetizer';
}

export interface OperatingHours {
  day: string;
  breakfast: string;
  main: string;
}

export const HOURS: OperatingHours = {
  day: "Daily",
  breakfast: "8:00 AM - 12:30 PM",
  main: "1:00 PM - 11:00 PM"
};