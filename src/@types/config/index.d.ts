export type Config = {
  active: string;
  aliases: Record<string, AliasObject>;
};

export type AliasObject = {
  projectId: string;
  serviceAccount: string;
  mailchimp?: MailchimpConfig;
};

export type MailchimpConfig = {
  server: string;
  apiKey: string;
  audienceId: string;
};

export type MailchimpListMember = {
  id: string;
  email_address: string;
  unique_email_id: string;
  web_id: number; // integer
  email_type: "html" | "text";
  status:
    | "subscribed"
    | "unsubscribed"
    | "cleaned"
    | "pending"
    | "transactional"
    | "archived";
  unsubscribe_reason: string;
  merge_fields: {
    FNAME: string;
    LNAME: string;
    ADDRESS: string;
    PHONE: string;
  };
  interests: {
    [key: string]: any;
  };
  stats: {
    avg_open_rate: number;
    avg_click_rate: number;
    ecommerce_data: {
      total_revenue: number;
      number_of_orders: number;
      currency_code: string;
    };
  };

  ip_signup: string;
  timestamp_signup: string;
  ip_opt: string;
  timestamp_opt: string;
  member_rating: 1 | 2 | 3 | 4 | 5;
  last_changed: string;
  language: string;
  vip: boolean;
  email_client: string;
  location: {
    latitude: number;
    longitude: number;
    gmtoff: number;
    dstoff: number;
    country_code: string;
    timezone: string;
  };
  marketing_permissions: {
    marketing_permission_id: string;
    text: string;
    enabled: boolean;
  };
  last_note: {
    note_id: number; // integer
    created_at: string;
    created_by: string;
    note: string;
  };
  source: string;
  tags_count: number; // integer
  tags: { id: number; name: string }[];
  list_id: string;
  _links: {
    [key: string]: any;
  };
};

export type MailchimpMergeFields = MailchimpListMember["merge_fields"];

type RecursivePartial<T> = T extends object
  ? {
      [key in keyof T]?: RecursivePartial<T[key]>;
    }
  : T;

type t = { a: string; b: { c: number; d: 4 } };
type t2 = RecursivePartial<t>;

export type MailchimpListMemberUpdate = RecursivePartial<
  Omit<
    MailchimpListMember,
    | "id"
    | "unique_email_id"
    | "web_id"
    | "unsubscribe_reason"
    | "stats"
    | "member_rating"
    | "last_changed"
    | "email_client"
    | "last_note"
    | "source"
    | "tags_count"
    | "tags"
    | "list_id"
    | "_links"
  >
>;
