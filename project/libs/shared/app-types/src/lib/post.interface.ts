import { PostType } from './type.enum';
import { Comment } from './comment.interface';

export interface PostBase {
  id?: number;
  type: PostType;
  comments?: Comment[];
  userId?: string;
  tags?: string[];
  createdAt?: Date;
  publishAt?: Date;
  originPostId?: number;
  originUserId?: string;
  isRepost?: boolean;
  isPublished?: boolean;
}
export interface PostVideo extends PostBase {
  title: string;
  link: string;
  type: PostType.Video
}

export interface PostText extends PostBase {
  title: string;
  announce: string;
  description: string;
  type: PostType.Text
}

export interface PostQuote extends PostBase {
  author: string;
  description: string;
  type: PostType.Quote
}

export interface PostPhoto extends PostBase  {
  photo: string;
  type: PostType.Photo
}

export interface PostLink extends PostBase  {
  link: string;
  description?: string;
  type: PostType.Link
}

export type Post = PostVideo | PostPhoto | PostLink | PostQuote | PostText;
