import useComponentsHooks from "./componentsHooks";
import useLocalComponentsHooks from "./localComponentsHooks";
import useScreenHooks from "./screenHooks";

const useControllers = () => {
    return {
        useComponentsHooks,
        useLocalComponentsHooks,
        useScreenHooks,
    };
};

export default useControllers;
