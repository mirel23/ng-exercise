// ReqRes get users response
interface ApiUser  {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface ApiUsers {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: ApiUser[];
}

export interface ApiSingleUser {
  data: ApiUser;
}
