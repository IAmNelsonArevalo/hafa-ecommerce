import {FC} from "react";
/** Interfaces */
import {IAnonymousRouteProps} from "models/interfaces/routes.interfaces";
/** Modules */
import useViews from "views";

const AnonymousRoute: FC<IAnonymousRouteProps> = ({
    component,
    layout,
    layoutProps,
}) => {
    /** Views */
    const {useLayouts} = useViews();
    const {GeneralLayout} = useLayouts();

    /** Variables */
    const Layout = layout || GeneralLayout;
    const Component = component;

    return (
        <Layout {...layoutProps}>
            <Component />
        </Layout>
    );
};

export default AnonymousRoute;
