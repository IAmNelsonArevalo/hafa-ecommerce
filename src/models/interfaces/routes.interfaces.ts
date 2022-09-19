import { ComponentType } from "react";

export interface IAnonymousRouteProps {
    component: ComponentType<any>;
    layout?: ComponentType<any>;
    layoutProps?: {};
}

export interface IAnonymousRoutes extends IAnonymousRouteProps {
    path: string;
    exact?: boolean;
    name?: string;
}