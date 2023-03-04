<script lang="ts">
	import dayjs from 'dayjs';
	import { Datepicker } from 'svelte-calendar';

	let store_start:any;
    let store_end:any;
</script>


<div class="px-4 py-4 sm:px-0">
    <div class="gap-2 text-md border-2 border-black bg-pink-200 font-semibold shadow-[3px_3px_0_0_#000] overflow-visible mt-5">

        <form class=" flex flex-col px-4 py-5 sm:p-6 gap-y-5">
            
            <div class="col-span-6">
                <label
                    for="title"
                    class="flex  text-black text-md font-bold"
                >
                    Title
                </label>
                <input
                    type="text"
                    name="title"
                    maxLength={30}
                    id="title"
                    required
                    placeholder="Contest's Title"
                    class="mt-2 block text-black py-2.5 px-3 w-full text-md font-normal border-2 border-black focus:outline-none focus:ring-black shadow-[3px_3px_0_0_#000]"
                />
            </div>
    
            <div class="col-span-6">
                <label
                    for="organizer"
                    class="flex  text-black text-md font-bold"
                >
                    Organizer
                </label>
                <input
                    type="text"
                    name="organizer"
                    maxLength={30}
                    id="organizer"
                    required
                    placeholder="Contest's Organizer"
                    class="mt-2 block text-black py-2.5 px-3 w-full text-md font-normal border-2 border-black focus:outline-none focus:ring-black shadow-[3px_3px_0_0_#000]"
                />
            </div>
            
            <div class="col-span-6">
                <label
                    for="link"
                    class="flex  text-black text-md font-bold"
                >
                    Link
                </label>
                <input
                    type="text"
                    name="link"
                    maxLength={30}
                    id="link"
                    required
                    placeholder="Contest's Link"
                    class="mt-2 block text-black py-2.5 px-3 w-full text-md font-normal border-2 border-black focus:outline-none focus:ring-black shadow-[3px_3px_0_0_#000]"
                />
            </div>

            
            <label
                for="link"
                class="flex text-black text-md font-bold -mb-3"
            >
                Start Date
            </label>
            
            <Datepicker bind:store={store_start} let:key let:send let:receive>
                <button type="button" class="flex mb-1 w-full items-center justify-center gap-2 text-md  border-2 border-black bg-white px-4 py-2 font-semibold shadow-[3px_3px_0_0_#000] transition hover:shadow-none focus:outline-none active:bg-white" in:receive|local={{ key }} out:send|local={{ key }}>
                    {#if $store_start?.hasChosen}
                        {dayjs($store_start.selected).format('ddd MMM D, YYYY')}
                    {:else}
                        Pick a Date
                    {/if}
                </button>
            </Datepicker>


            <label
                for="link"
                class="flex text-black text-md font-bold -mb-3"
            >
                End Date
            </label>
            
            <Datepicker bind:store={store_end} let:key let:send let:receive>
                <button type="button" class="flex mb-1 items-center justify-center gap-2 text-md  border-2 border-black bg-white px-4 py-2 font-semibold shadow-[3px_3px_0_0_#000] transition hover:shadow-none focus:outline-none active:bg-white" in:receive|local={{ key }} out:send|local={{ key }}>
                    {#if $store_end?.hasChosen}
                        {dayjs($store_end.selected).format('ddd MMM D, YYYY')}
                    {:else}
                        Pick a Date
                    {/if}
                </button>
            </Datepicker>


        


    </div>
</div>

