import useLayouts from "./layouts";
import useScreens from "./screens";

const useViews = () => {
    return {
        useLayouts,
        useScreens,
    };
};

export default useViews;
