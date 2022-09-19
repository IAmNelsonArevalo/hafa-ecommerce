import {map} from "lodash";
import {Route} from "react-router-dom";
/** Interfaces */
import {IAnonymousRoutes} from "models/interfaces/routes.interfaces";
/** Modules */
import useViews from "views";
import AnonymousRoute from "./AnonymousRoute";

const useAnonymousRoutes = () => {
    /** Views */
    const {useScreens} = useViews();
    const {Home} = useScreens();

    /** Variables */
    const routes: IAnonymousRoutes[] = [
        {
            component: Home,
            exact: true,
            path: "/",
            name: "Home",
        },
    ];

    return map(routes, (route: IAnonymousRoutes, index: number) => (
        <Route
            path={route.path}
            key={index}
            index={route.exact}
            element={
                <AnonymousRoute
                    component={route.component}
                    layout={route.layout}
                    layoutProps={route.layoutProps}
                />
            }
        />
    ));
};

export default useAnonymousRoutes;
