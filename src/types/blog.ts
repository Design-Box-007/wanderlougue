export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  isActive: boolean;
}

export interface SortOption {
  id: string;
  name: string;
  isActive: boolean;
}
