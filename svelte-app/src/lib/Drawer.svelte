<script>
import QRCode from 'qrcode';
import { onMount } from 'svelte';
import { revNo, drawerOpen, getGender, user, currentDateGregorianArabic, currentDateHijriArabic, currentHalfHour } from './../routes/store.js';
import  UserIcon  from '$lib/images/UserIcon.svelte';
import  CalendarIcon  from '$lib/images/CalendarIcon.svelte';
import ClockIcon from '$lib/images/ClockIcon.svelte';

import { slide } from 'svelte/transition';


function generateQRCode(length = 100) {
// Each byte is two hex digits, so length should be halved when generating random bytes
    const randomBytes = crypto.getRandomValues(new Uint8Array(length / 2));
    let hexString = '';
    randomBytes.forEach(b => {
        hexString += ('0' + b.toString(16)).slice(-2); // Ensure two hex digits per byte
    });
    return hexString.length > length ? hexString.substr(0, length) : hexString;
}

let canvas;
const qrCode = generateQRCode();

onMount(async () => {
	 try {
      await QRCode.toCanvas(canvas, qrCode, {
        errorCorrectionLevel: 'L',
		    margin: 1.5, // Set the margin around the QR code
        scale: 2,
        color: {
          light: '#FFF7E5' // Transparent background
        },
        //transperent background
		
      });
    } catch (err) {
      console.error(err);
    }
});

export const b = 1;  

// This function toggles the drawer's open and closed states.
export function toggleDrawer() {
    drawerOpen.set(!$drawerOpen)
}

  // This function closes the drawer when clicking outside of it.
export function closeDrawer() {
    if (!$drawerOpen) return;
    drawerOpen.set(false);
}

  
</script>
 <div class={`fixed inset-0 flex overflow-hidden   ${!$drawerOpen && 'translate-y-full' }`} >
  <!-- Overlay background when drawer is open -->
  <div class={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${!$drawerOpen && 'hidden'}`}  on:click={closeDrawer}></div>

  <!-- Drawer panel, show/hide based on drawer state -->
  <div  class={`mt-8 mr-3 ml-3 relative flex-1 flex flex-col h-screen bg-white rounded-t-2xl shadow-lg transform transition duration-1000 ${$drawerOpen ? 'translate-y-0' : 'translate-y-full'}`}>

   <!-- Draggable gray bar aligned with the QR code -->
      <div class="flex justify-center py-2">
        <div class="w-24 h-1 bg-gray-400 rounded-full cursor-pointer" on:click={closeDrawer}></div>
      </div>

    <!-- QR Code placeholder -->
    <div class="px-4 py-4 flex flex-col items-center justify-center">
      <div class="h-18 w-18 p-[.4rem]  relative">
	    <div class="absolute inset-0 rounded-md bg-active  animate-[activePulse_1.2s_linear_infinite]"></div>
	  	<canvas class="w-full h-full relative"  bind:this={canvas}></canvas>
	  </div>
      <p class="text-active animate-[activePulse_1.2s_linear_infinite] font-bold my-1 text-center">فعّال</p>
    </div>

    <!-- Content area -->
    <div class="flex-1 overflow-y-auto">
    <div class="p-2">
    <p class="text-center font-bold mb-1">{$user.name}</p>
      <div class="text-gold text-center">
        
        <p class="font-medium">الصلاة في الروضة الشريفة - {getGender($user)}</p>
        <p class="mt-1">رقم الحجز: {revNo.v1}</p>
        <p class="mt-1">رقم التصريح: {revNo.v2}</p>
      </div>

    <h5 class="mt-8 mr-2 mx-auto max-w-sm text-gray-500 font-semibold">بيانات التصريح</h5>
      <div class="bg-gray-100 pl-2 pr-2 pt-4 pb-4 rounded-lg shadow-md max-w-sm mx-auto my-3">
        <div class="flex flex-col mb-4">
          <div class="text-sm text-gray-400 mr-7">أصدر بواسطة</div>
          <div class="flex items-center">
            <UserIcon className="h-7 w-7 fill-gold" />
            <div>{$user.name}</div>
         </div>
        </div>
        <div class="flex items-center justify-between">
            <div class="text-sm text-gray-400">يصرح لك بدخول المسجد النبوي في</div>
        </div>
        <div class="flex flex-col my-4">
         <div class="flex">
            <div class="text-sm w-1/2  text-gray-400 mr-6">اليوم</div>
            <div class="text-sm w-1/2 text-gray-400 mr-5">الساعة</div>
            </div>
             <div class="flex">
                <CalendarIcon className="h-5 w-4 ml-2 fill-gold" />
                <div class="text-sm w-1/2">{$currentDateGregorianArabic}</div>
                <ClockIcon className="h-5 w-4 ml-2 fill-transparent stroke-gold" />
                <div class="text-sm w-1/2">{$currentHalfHour}</div>
            </div>
            <div class="flex">
                <div class="text-sm w-1/2 mr-6">{$currentDateHijriArabic}</div>
            </div>
            
        </div>
        <div class="flex items-center justify-between">
            
        </div>
        </div>
    </div>
        
     <div class="fixed inset-x-0  bg-white">
	  	<div class="flex justify-end">
        	<button class="text-gold py-2 px-4" on:click={closeDrawer}>إنهاء</button>
		</div>
      </div>
    </div>
  </div>
</div>