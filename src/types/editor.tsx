export type QueryType = 'saved' | 'history';

export interface QueryUtilFunctions {
  setEditorQuery: (value: string) => void;
  deleteQuery: (index: number) => void;
}
