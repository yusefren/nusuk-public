<script>
    import { user } from '../store.js';
    import { isSettingsRoute, isHomeRoute } from '../store.js';
    import { onMount } from 'svelte';
onMount(() => {
    isSettingsRoute.set(true);
    isHomeRoute.set(false);
  });
</script>
<svelte:head>
	<title>اعدادات تصاريح الروضة الشريفة </title>
	<meta name="description" content="تصاريح الروضة الشريفة" />
</svelte:head>
<main class="p-4">
        <div class="flex flex-col">
            <label for="name" class="flex justify-between w-full">
                <span>الاسم</span>
                <span>Name</span>
            </label>
            <input placeholder="الاسم بالكامل" type="text" id="name" bind:value={$user.name} class="text-xl font-bold border border-gold-light focus:border-gold rounded-md p-2" />
        </div>

        <div class="mt-4">
            <label for="gender" class="flex justify-between w-full">
                <span>النوع</span>
                <span>Gender</span>
            </label>
            <div class="flex  w-full">
                <button type="button" class:bg-gold-light={$user.isMale} on:click={() => $user.isMale = true} class="border border-gray-300 rounded-md h-20 mt-2 p-2 flex-1 flex justify-between w-full ml-3" ><span>رجال  </span><span>Male</span></button>
                <button type="button" class:bg-gold-light={!$user.isMale} on:click={() => $user.isMale = false} class="border border-gray-300 rounded-md h-20 mt-2 p-2 flex-1 flex justify-between w-full"><span>نساء</span><span> Female</span></button>
            </div>
        </div>

<div class="pt-12">
            <a class="text-white font-bold text-center w-full" href="./">
            <div class="bg-gold flex justify-between  p-4 m-2 rounded-md">
            <span>حفظ</span>
            <span>Save</span>
            </div>
            </a>
            
            </div>
        </main>
