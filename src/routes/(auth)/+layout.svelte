<div class="h-screen grid place-items-center">
	<div>
		<h1 class="text-4xl font-bold text-center mb-12"><a href="/">SvelteKit Forum</a></h1>
		<div class="flex bg-neutral-800 rounded shadow overflow-hidden">
			<div class="w-[400px] h-[500px]">
				<!-- image -->
				<img src="https://picsum.photos/400/500" alt="placeholder" />
			</div>
			<div class="grid place-items-center text-center py-4 px-24">
				<!-- content -->
				<slot />
			</div>
		</div>
	</div>
</div>
