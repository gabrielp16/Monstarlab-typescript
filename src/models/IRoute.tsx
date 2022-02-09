export interface IRoute {
    title: string;
    path: string;
    content: string | React.ReactNode;
    exact?: boolean;
    hide?: boolean;
    containParam?: boolean;
    params?: IParam[];
}

export interface IParam {
    id: string;
    value: string;
}