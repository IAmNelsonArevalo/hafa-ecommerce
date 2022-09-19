import {BrowserRouter, Routes} from "react-router-dom";
import {map} from "lodash";
/** Modules */
import useAnonymousRoutes from "./anonymous";

const useRouter = () => {
    /** Variables */
    const anonymousRoutes = useAnonymousRoutes();
    const resultRoutes = [...anonymousRoutes];

    return (
        <BrowserRouter>
            <Routes>{map(resultRoutes)}</Routes>
        </BrowserRouter>
    );
};

export default useRouter;
