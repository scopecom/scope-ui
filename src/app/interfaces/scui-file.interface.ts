export interface ScUiFile {
  id?: number;
  projectId?: number;
  title?: string;
  body: any;
  meta: any;
  status: any;
  createdAt: Date;
  updatedAt: Date;
  hasScheduledPublications?: boolean;
}
