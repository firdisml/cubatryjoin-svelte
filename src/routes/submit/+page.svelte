<script>
    
</script>

<style>
    
</style>
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
    </div>
</div>

