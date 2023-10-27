import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRoutes} from "app/providers/routes";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar />
            <div className="content">
                <Sidebar />
                <div className="main">
                    <AppRoutes />
                </div>
            </div>
        </div>
    );
};

export default App;