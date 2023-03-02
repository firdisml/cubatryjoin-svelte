<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';

	const fetch_contests = async (skip: number) => {
		const url = "https://contestapi.up.railway.app/api/contest?skip="+ skip +"&take=9";
		const res = await fetch(url);
		const data = await res.json();
		return data;
	};

	let start = 1;

	$: query = createQuery({
		queryKey: [start],
		queryFn: () => fetch_contests(skip)
	});

    $: skip = start === 1 ? 0 : (start - 1) * 9;

    $: limit = Math.ceil($query?.data?.count  / 9);

</script>

<div class="px-4 py-4 sm:px-0">
	<div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 mt-3">
		{#if $query?.status === 'loading'}
			<img class="mx-auto col-span-3" src="/spinner.svg" alt="">
		{:else if $query?.status === 'error'}
			<span>Error</span>
		{:else if $query?.data?.length === 0}
			<span>Empty</span>
		{:else}
			{#each $query?.data?.data as contest (contest.id)}
				<div
					class="gap-2 text-md border-2 border-black bg-pink-200 font-semibold shadow-[3px_3px_0_0_#000] transition focus:outline-none active:bg-pink-50 inline-block overflow-hidden"
				>
					<div class="px-4 py-5 sm:p-6 rounded-md">
						<h1 class="text-md font-semibold tracking-wider text-black truncate block">
							{contest.title}
						</h1>
						<div class="flex text-sm font-medium text-black mt-3">
							<img src="bulb.svg" alt="bulv" class="w-6 h-6 mr-2" />
							<p class="mt-1">{contest.organizer}</p>
						</div>
						<div class="flex text-sm font-medium text-black mt-3">
							<img src="date.svg" alt="bulv" class="w-5 h-5 ml-1 mr-2" />
							<p>Start @ 13 February 2023</p>
						</div>
						<div class="flex text-sm font-medium text-black mt-3">
							<img src="end.svg" alt="bulv" class="w-6 h-6 ml-0.5 mr-2" />
							<p>End @ 23 February 2023</p>
						</div>

						<button
							class="flex mt-5 items-center justify-center gap-2 text-md  border-2 border-black bg-emerald-400 px-4 py-2 font-semibold shadow-[3px_3px_0_0_#000] transition hover:shadow-none focus:outline-none active:bg-pink-50"
						>
							Join Contest
						</button>
					</div>
				</div>
			{/each}
		{/if}
	</div>

    {#if !$query?.data?.count}
    <div></div>
    {:else}
	<nav
		class="py-3 relative flex items-center justify-between border-t border-gray-300 dark:border-gray-700 mt-12"
	>
        <div class="hidden sm:block">
			<p class="text-sm text-black">
				Showing <span class="font-medium">{skip+1}</span> to{' '}
				<span class="font-medium"> {skip + $query?.data?.data?.length} </span>{' '}
				of <span class="font-medium">{$query?.data?.count}</span>{' '}
				results
			</p>
		</div>

		<div class="flex-1 flex justify-between sm:justify-end gap-x-2">
			<button
                on:click|preventDefault={() => start = start - 1}
                disabled={start <= 1 || $query?.status === 'error' || $query?.status === 'loading'}
				class="flex mt-5 items-center justify-center gap-2 text-md  border-2 border-black bg-pink-200 px-4 py-2 font-semibold shadow-[3px_3px_0_0_#000] transition hover:shadow-none focus:outline-none active:bg-pink-50"
			>
				Back
			</button>
			<button
                disabled={start >= limit || $query?.status === 'error' || $query?.status === 'loading'}
				on:click|preventDefault={() => start = start + 1}
				class="flex mt-5 items-center justify-center gap-2 text-md  border-2 border-black bg-pink-200 px-4 py-2 font-semibold shadow-[3px_3px_0_0_#000] transition hover:shadow-none focus:outline-none active:bg-pink-50"
			>
				Next
			</button>
		</div>
	</nav>
    {/if}
</div>
