import { Fragment } from "react";
import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
    barColors: {
        0: "#4fc795",
        "1.0": "#098a55",
    },
    shadowBlur: 5,
});

const TopBarLoading = () => {
    return (
        <Fragment>
            <TopBarProgress />
        </Fragment>
    );
};

export default TopBarLoading;
