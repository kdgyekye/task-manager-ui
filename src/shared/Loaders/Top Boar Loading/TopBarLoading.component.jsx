import { Fragment } from "react";
import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
    barColors: {
        0: "#9965e7",
        "1.0": "rebeccapurple",
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
