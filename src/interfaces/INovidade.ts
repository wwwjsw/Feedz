interface IUser {
   name: string;
   profile_picture: string;
}

interface IMassage {
   content: string;
   created_at: string;
}

export interface INovidade {
   user: IUser;
   message: IMassage;
}
