<script>
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@rgossiaux/svelte-headlessui';
</script>

<div class="min-h-full">
	<Disclosure as="nav" class="bg-indigo-600">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between h-16">
				<div class="flex items-center">
					<div class="flex flex-shrink-0">
						<a href={'/'} class="text-white text-2xl lg:text-3xl mb-1">
							<h1>CBJ</h1>
						</a>
					</div>
				</div>

				<div class="hidden md:block">
					<div class="ml-10 flex items-baseline space-x-4">
						<button
							class="flex text-white bg-indigo-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-semibold"
						>
							Submit Contest
						</button>
					</div>
				</div>

				<div class="-mr-2 flex md:hidden">
					<DisclosureButton
						let:open
						class="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
					>
						{#if open}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						{:else}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
						{/if}
					</DisclosureButton>
				</div>
			</div>
		</div>
		<DisclosurePanel class="md:hidden">
			<div class="px-2 pt-2 pb-3 space-y-3 sm:px-3">
				<DisclosureButton
					as="a"
					class="flex text-white bg-indigo-500 hover:bg-opacity-75 px-3 py-3 rounded-md text-base font-semibold"
					aria-current="page"
				>
					Browse Promotion
				</DisclosureButton>
			</div>
		</DisclosurePanel>s
	</Disclosure>
</div>
