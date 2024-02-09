import {Outlet} from "react-router-dom";

/**
 * Base is a layout component that includes the Sidebar and Hero components.
 * @component Base
 * @returns {JSX.Element} The Base layout component.
 */
export const Base = () => {
    return <div>
        <Outlet />
    </div>;
};