import { writable } from 'svelte/store';

export const drawerOpen = writable(false);

export const isSettingsRoute = writable(true);
export const isHomeRoute = writable(false);

export const user = writable({
    name: 'محمد عمر داغستاني',
    isMale: true,
});

export function getGender(user){
    return user.isMale ? 'رجال' : 'نساء';
}
export function getDoor(user){
    return user.isMale ? 'باب السلام' : 'باب رقم 37'
}

function generateRevNumber() {
    // Helper function to generate a random number of specified length
    function getRandomNumber(length) {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += Math.floor(Math.random() * 10);
        }
        return result;
    }

    // Generate a 9-digit number starting with 12
    const random1 = "12" + getRandomNumber(7);

    // Generate a 10-digit number starting with 10
    const random2 = "10" + getRandomNumber(8);

    return { v1: random1, v2: random2 };
}

export const revNo = generateRevNumber()


const options = { numberingSystem: 'latn', timeZone: 'Asia/Riyadh' };
const dayFormat = new Intl.DateTimeFormat('ar', { ...options, day: 'numeric' });
const monthFormat = new Intl.DateTimeFormat('ar', { ...options, month: 'long' });
const yearFormat = new Intl.DateTimeFormat('ar', { ...options, year: 'numeric' });


function calculateMakkahTime(currentTime) {
    const makkahOffset = 3 * 60; 
    const localOffset = currentTime.getTimezoneOffset();
    return new Date(currentTime.getTime() + (makkahOffset + localOffset) * 60000);
}
    

export const currentHalfHour = writable('');
export const currentDateHijriArabic = writable('');
export const currentDateGregorianArabic = writable('')

function updateHours() {
    const now = new Date();
    const makkahTime = calculateMakkahTime(now);
    currentHalfHour.set(formatHalfHour(makkahTime));
    currentDateHijriArabic.set(new Intl.DateTimeFormat('ar-SA', { ...options, calendar: 'islamic', month: 'long', day: 'numeric', year: 'numeric' }).format(now).replace(/،/g, ''));
    currentDateGregorianArabic.set(`${dayFormat.format(now)} ${monthFormat.format(now)} ${yearFormat.format(now)}`)
}
updateHours();
const interval = 5 * 60 * 1000; // 5 minutes
setInterval(() => {
    updateHours();
}, interval);

function formatHalfHour(time) {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const startMinutes = minutes < 30 ? '00' : '30';
    const endMinutes = minutes < 30 ? '29' : '59';
    return `${hours}:${startMinutes} - ${hours}:${endMinutes}`;
}