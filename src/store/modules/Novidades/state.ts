interface INovidadeUser {
   name: string;
   profile_picture: string;
}

interface INovidadeMessage {
   content: string;
   created_at: string;
}

interface INovidade {
   user: INovidadeUser;
   message: INovidadeMessage;
}

export interface INovidadesStateReducer {
   news: Array<INovidade>;
   loading: boolean;
   error: boolean;
}
