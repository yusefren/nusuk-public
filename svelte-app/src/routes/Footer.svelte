<script>
import HomeIcon from "./../lib/navIcons/HomeIcon.svelte";
import CalendarIcon from "./../lib/navIcons/CalendarIcon.svelte";
import AppsIcon from "./../lib/navIcons/AppsIcon.svelte";
import MoreIcon from "./../lib/navIcons/MoreIcon.svelte";
import { isSettingsRoute, isHomeRoute } from './store.js';
</script>

<div class="fixed inset-x-0 bottom-4 bg-white py-2">
    <div class="flex justify-around items-center">
    <a href="./">
        <div class="flex flex-col items-center">
            <HomeIcon className={`h-6 w-6 ${$isHomeRoute?'stroke-gold':'stroke-gray-300'}`} />
            <span class={`text-center ${$isHomeRoute?'stroke-gold':'text-gray-500'} mt-1 text-xs`}>الرئيسية</span>
        </div>
    </a>
        <div class="flex flex-col items-center">
            <CalendarIcon className="h-6 w-6 text-gray-300" />
            <span class="text-center text-gray-500 mt-1 text-xs">التصاريح</span>
        </div>
        <div class="flex flex-col items-center">
            <AppsIcon className="h-6 w-6 text-gray-300" />
            <span class="text-center text-gray-500 mt-1 text-xs">خدمات أخرى</span>
        </div>
        <a href="./settings">
        <div class="flex flex-col items-center">
            <MoreIcon className={`h-6 w-6 ${$isSettingsRoute?'stroke-gold':'stroke-gray-300'} `} />
            <span class={`text-center ${$isSettingsRoute?'text-gold':'text-gray-500'} mt-1 text-xs`}>المزيد</span>
        </div>
        </a>
    </div>
</div>
               