import { Rule } from 'antd/lib/form';

export type CardDetails = {
  title?: string;
  formId?: string;
  formEntryParameters?: string; // e.g. '282828977,1614173024'
  spreadsheetId?: string;
};

export type CardMessage = {
  author: string;
  content: string;
};

export type CardUrls = {
  cardViewOnlyUrl?: string;
  cardEditableUrl?: string;
  formUrl?: string;
  spreadsheetUrl?: string;
};

export type FormField = {
  name: string;
  label: string;
  rules?: Array<Rule>;
  placeholder?: string;
  value?: string;
};

export type PathDetails = {
  name: string;
  path: string;
};

export type RouteDetails = {
  component: () => JSX.Element;
} & PathDetails;
