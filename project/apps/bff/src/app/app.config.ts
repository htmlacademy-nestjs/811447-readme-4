export enum ApplicationServiceURL {
  Users = 'http://localhost:3001/api/auth',
  Blog = 'http://localhost:3005/api/posts'
}

export const HTTP_CLIENT_MAX_REDIRECTS = 5;
export const HTTP_CLIENT_TIMEOUT = 5000;