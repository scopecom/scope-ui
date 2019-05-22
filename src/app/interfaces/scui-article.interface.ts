export interface ScUiArticle {
  id?: number | string;
  url: string;
  title: string;
  photoUrl?: string;
  description?: string;
  date?: string;
  mode?: 'default' | 'delete' | 'edit' | 'imported';
  publisher?: string;
  datePublished?: string;
}
