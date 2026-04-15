export type Screen = 'login' | 'dashboard' | 'job-match' | 'settings' | 'pricing';

export interface AnalysisRecord {
  id: string;
  filename: string;
  size: string;
  type: string;
  targetRole: string;
  date: string;
  score: number;
  status: 'Elite' | 'Strong' | 'Review';
}
