<script lang="ts">
	import dayjs from 'dayjs';
	import { Datepicker } from 'svelte-calendar';
	import toast from 'svelte-french-toast';
	import { goto } from '$app/navigation';
	let result = null;
	let title: any = null;
	let organizer: any = null;
	let link: any = null;
	let store_start: any;
	let store_end: any;

	async function submit_contest() {
		await fetch('https://contestapi.up.railway.app/api/contest/post', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				title: title,
				organizer: organizer,
				link: link,
				start: $store_start.selected,
				end: $store_end.selected
			})
		});
	}

	async function handleClick() {
		await toast.promise(submit_contest(), {
			loading: 'Submitting',
			success: 'Contest submitted!',
			error: 'Could not submit!'
		});

		goto('/');
	}
</script>

<div class="px-4 py-4 sm:px-0">
	<div
		class="gap-2 text-md border-2 border-black bg-pink-200 font-semibold shadow-[3px_3px_0_0_#000] overflow-visible mt-5"
	>
		<form class=" flex flex-col px-4 py-5 sm:p-6 gap-y-5" on:submit={handleClick}>
			<div class="col-span-6">
				<label for="title" class="flex  text-black text-md font-bold"> Title </label>
				<input
					type="text"
					name="title"
					maxLength={30}
                    bind:value={title}
					id="title"
					required
					placeholder="Contest's Title"
					class="mt-2 block text-black py-2.5 px-3 w-full text-md font-normal border-2 border-black focus:outline-none focus:ring-black"
				/>
			</div>

			<div class="col-span-6">
				<label for="organizer" class="flex  text-black text-md font-bold"> Organizer </label>
				<input
					type="text"
					name="organizer"
					maxLength={30}
					id="organizer"
                    bind:value={organizer}
					required
					placeholder="Contest's Organizer"
					class="mt-2 block text-black py-2.5 px-3 w-full text-md font-normal border-2 border-black focus:outline-none focus:ring-black"
				/>
			</div>

			<div class="col-span-6">
				<label for="link" class="flex  text-black text-md font-bold"> Link </label>
				<input
					type="text"
					name="link"
					id="link"
                    bind:value={link}
					required
					placeholder="Contest's Link"
					class="mt-2 block text-black py-2.5 px-3 w-full text-md font-normal border-2 border-black focus:outline-none focus:ring-black"
				/>
			</div>

			<label for="link" class="flex text-black text-md font-bold -mb-3"> Start Date </label>

			<Datepicker bind:store={store_start} let:key let:send let:receive>
				<button
					type="button"
					class="flex mb-1 w-full items-center justify-center gap-2 text-md  border-2 border-black bg-white px-4 py-2 font-semibold shadow-[3px_3px_0_0_#000] transition hover:shadow-none focus:outline-none active:bg-white"
					in:receive|local={{ key }}
					out:send|local={{ key }}
				>
					{#if $store_start?.hasChosen}
						{dayjs($store_start.selected).format('ddd MMM D, YYYY')}
					{:else}
						Pick a Date
					{/if}
				</button>
			</Datepicker>

			<label for="link" class="flex text-black text-md font-bold -mb-3"> End Date </label>

			<Datepicker bind:store={store_end} let:key let:send let:receive>
				<button
					type="button"
					class="flex mb-1 items-center justify-center gap-2 text-md  border-2 border-black bg-white px-4 py-2 font-semibold shadow-[3px_3px_0_0_#000] transition hover:shadow-none focus:outline-none active:bg-white"
					in:receive|local={{ key }}
					out:send|local={{ key }}
				>
					{#if $store_end?.hasChosen}
						{dayjs($store_end.selected).format('ddd MMM D, YYYY')}
					{:else}
						Pick a Date
					{/if}
				</button>
			</Datepicker>

			<button
				type="submit"
				class="flex mb-1 mt-2 items-center justify-center gap-2 text-md  border-2 border-black bg-emerald-400 px-4 py-2 font-semibold shadow-[3px_3px_0_0_#000] transition hover:shadow-none focus:outline-none active:bg-pink-50"
			>
				Submit Contest
			</button>
		</form>
	</div>
</div>
