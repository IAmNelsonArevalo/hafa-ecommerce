import {FC, Fragment} from "react";
/** Interfaces */
import {IGeneralLayoutProps} from "models/interfaces/layouts/general.interfaces";

const GeneralLayout: FC<IGeneralLayoutProps> = ({children}) => {
    return <Fragment>{children}</Fragment>;
};

export default GeneralLayout;
