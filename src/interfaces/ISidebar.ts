interface IMenuOptions {
   id: number;
   label: string;
   page: string;
   ativo: boolean;
   selected: boolean;
}

export interface ISidebar {
   props: Array<object>;
   menuOptions: Array<IMenuOptions>;
}
