<script>
	import '../app.css';
	import Nav from '../components/nav.svelte';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import { browser } from '$app/environment';
	import toast, { Toaster } from 'svelte-french-toast';
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});
	import { SvelteToast } from '@zerodevx/svelte-toast'
</script>

<svelte:head>
	<title>Cuba Try Join | Contest Tracker</title>
</svelte:head>

<QueryClientProvider client={queryClient}>
	<Toaster
	position="bottom-center"
	toastOptions={{
		className:
			'gap-2 text-md border-2 border-black font-semibold shadow-[3px_3px_0_0_#000] overflow-visible mt-5',
		style: 'border-radius:0px'
	}}
/>
	<main class="font-sans">
		<Nav />
		<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
			<slot />
		</div>
	</main>
</QueryClientProvider>
