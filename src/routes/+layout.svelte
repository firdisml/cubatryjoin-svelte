<script>
	import '../app.css';
	import Nav from '../components/nav.svelte';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import { browser } from '$app/environment';
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});
</script>

<svelte:head>
	<title>Cuba Try Join | Contest Tracker</title>
</svelte:head>

<QueryClientProvider client={queryClient}>
	<main class="font-sans">
		<Nav />
		<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
			<slot />
		</div>
	</main>
</QueryClientProvider>
