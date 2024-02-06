<script>
import Drawer from "./../lib/Drawer.svelte";
import { onMount } from 'svelte';
import { isSettingsRoute, isHomeRoute, revNo, user, getDoor, getGender , currentDateGregorianArabic, currentDateHijriArabic, currentHalfHour } from './store.js';
import Tabs from './../lib/Tabs.svelte';

let DrawerComponent;


onMount(async () => {
    isSettingsRoute.set(false);
    isHomeRoute.set(true);
  });


</script>

<svelte:head>
	<title>تصاريح الروضة الشريفة</title>
	<meta name="description" content="تصاريح الروضة الشريفة" />
</svelte:head>


<div class="p-4 overflow-hidden">

	<div class="bg-white rounded-lg shadow p-4  border-r-4 border-solid border-active-green">
	<a href="#" on:click={DrawerComponent.toggleDrawer()}>
		<h2 class="text-lg font-semibold pb-3">الصلاة في الروضة الشريفة - {getGender($user)}</h2>
		<div class="flex flex-wrap -mx-2">
			<div class="w-1/2 px-2 mb-2">
			<p class="text-sm"> {$currentDateGregorianArabic}</p>
			</div>
			<div class="w-1/2 px-2 mb-2">
			<p class="text-sm font-bold">{getDoor($user)}</p>
			</div>
			<div class="w-1/2 px-2 mb-2">
			<p class="text-sm">{$currentDateHijriArabic}</p>
			</div>
			<div class="w-1/2 px-2 mb-2">
			<p class="text-sm">{$currentHalfHour}</p>
			</div>
			<div class="w-1/2 px-2 mb-2">
			<p class="text-sm">عدد الأشخاص: 1</p>
			</div>
			<div class="w-1/2 px-2 mb-2">
			<p class="text-sm">رقم الحجز: {revNo.v1}</p>
			</div>
			
		</div>
	
		<div class="flex justify-end items-center mt-4">
			<span class="text-gold py-2 px-4" >عرض التفاصيل &#11104;</span>
		</div>
	</a>
	</div>
	

	<Drawer bind:this={DrawerComponent}/>




</div>
