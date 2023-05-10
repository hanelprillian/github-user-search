import IUserRepository from "./IUserRepository";

export default interface IUser {
  name?: string;
  username?: string;
  avatar?: string;
  location?: string;
  website?: string;
  url?: string;
  totalFollower?: number;
  totalFollowing?: number;
  repositories?: IUserRepository[];
}
