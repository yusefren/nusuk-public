<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import './styles.css';
	import { drawerOpen } from './store.js';
	import Tabs from './../lib/Tabs.svelte';
	inject({ mode: dev ? 'development' : 'production' });
</script>

<div dir="rtl" class="sticky flex flex-col h-screen overscroll-y-contain">
<header class="sticky top-0 shadow fixed">
	<Header />
	<Tabs />
</header>

	<main class="flex-1 overflow-y-hidden sticky">
		<slot />
	</main>
 {#if !$drawerOpen}
	<footer class="sticky bottom-0 z-10">
		<Footer />
	</footer>
 {/if}
</div>
