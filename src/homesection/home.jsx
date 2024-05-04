
import Sitebar from '../sitebar/sitebar';
import Mainhome from './mainhome';

const home = () => {
    return (
        <div className="flex">
            <Sitebar></Sitebar>
            <Mainhome></Mainhome>
        </div>
    );
};

export default home;