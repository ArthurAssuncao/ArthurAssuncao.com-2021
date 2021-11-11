export interface FlareTag {
  name: string;
  bg_color_hex: string;
  text_color_hex: string;
}

export interface SharedUser {
  name: string;
  username: string;
  twitter_username?: string;
  github_username?: string;
  website_url?: string; // URL
  profile_image: string; // 640x640
  profile_image_90: string; // 90x90
}

export interface SharedOrganization {
  name: string;
  username: string;
  slug: string;
  profile_image: string; // url 640x640
  profile_image_90: string; // url 90x90
}

export interface Article {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id?: number;
  published_timestamp: Date;
  positive_reactions_count: number;
  cover_image?: string;
  social_image: string;
  canonical_url: string;
  created_at: Date;
  edited_at?: Date;
  crossposted_at?: Date;
  published_at: Date;
  last_comment_at: Date;
  reading_time_minutes: number;
  tag_list: string;
  tags: Array<string>;
  user: SharedUser;
  organization?: SharedOrganization;
  flare_tag?: FlareTag;
  body_html?: string;
  body_markdown?: string;
  published?: boolean;
}
