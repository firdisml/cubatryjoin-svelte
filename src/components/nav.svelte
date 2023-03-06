<script>
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@rgossiaux/svelte-headlessui';
</script>

<div class="min-h-full">
	<Disclosure as="nav" class="bg-emerald-400">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between h-16">
				<div class="flex items-center">
					<div class="flex flex-shrink-0">
						<a
							href="/"
							class="flex mb-1 items-center justify-center gap-2 text-md  rounded-full border-2 border-black bg-white px-4 py-2 font-semibold  transition focus:outline-none active:bg-pink-200"
						>
							<img src="/bulb.svg" alt="" class="h-6 w-6">  Cuba Try Join
						</a>
					</div>
				</div>

				<div class="hidden md:block">
					<div class="ml-10 flex items-baseline space-x-4">
						<a
							href="/submit"
							class="flex mb-1 items-center justify-center gap-2 text-md  border-2 border-black bg-pink-200 px-4 py-2 font-semibold shadow-[3px_3px_0_0_#000] transition hover:shadow-none focus:outline-none active:bg-pink-50"
						>
							Submit Contest
						</a>
					</div>
				</div>

				<div class="-mr-2 flex md:hidden">
					<DisclosureButton
						let:open
						class="flex items-center justify-center gap-2  border-2 border-black bg-pink-200 px-2 py-2 font-semibold shadow-[3px_3px_0_0_#000] transition hover:shadow-none focus:outline-none active:bg-pink-50"
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
					href="/submit"
					as="a"
					class="flex items-center justify-center gap-2  border-2 border-black bg-pink-200 px-2 py-2 font-semibold shadow-[3px_3px_0_0_#000] transition hover:shadow-none focus:outline-none active:bg-pink-50"
					aria-current="page"
				>
					Submit Contest
				</DisclosureButton>
			</div>
		</DisclosurePanel>
	</Disclosure>
</div>
