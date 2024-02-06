import { ReactComponent as HomeIcon } from './home.svg';
import { ReactComponent as MoreIcon } from './more.svg';
import {ReactComponent as CalendarIcon} from './calendar.svg';
import {ReactComponent as AppsIcon} from './apps.svg';


export default function NavBar() {
    return (
        <div className="fixed inset-x-0 bottom-0 bg-white py-2">
            <div className="flex justify-around items-center">
                <div className="flex flex-col items-center">
                    <HomeIcon className="h-12 w-12 stroke-gold" />
                    <span className="text-center text-gold mt-1">الرئيسية</span>
                </div>
                <div className="flex flex-col items-center">
                    <CalendarIcon className="h-12 w-12 text-gray-300" />
                    <span className="text-center text-gray-500 mt-1">التصاريح</span>
                </div>
                <div className="flex flex-col items-center">
                    <AppsIcon className="h-12 w-12 text-gray-300" />
                    <span className="text-center text-gray-500 mt-1">خدمات أخرى</span>
                </div>
                <div className="flex flex-col items-center">
                    <MoreIcon className="h-12 w-12 stroke-gray-300" />
                    <span className="text-center text-gray-500  mt-1">المزيد</span>
                </div>
            </div>
        </div>
    )
}