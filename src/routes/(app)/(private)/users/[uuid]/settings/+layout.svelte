<script>
	export let data;
</script>

<div class="flex gap-5">
	<aside class="grid gap-4 w-44">
		<a href={`/users/${data.uuid}/settings`}>Settings</a>
		<div class="border-b pb-2">
			<h3 class="text-neutral-400 text-sm">Account</h3>
			<ul>
				<li><a class="block py-1" href={`/users/${data.uuid}/settings/account`}>Account</a></li>
				<li>
					<a class="block py-1" href={`/users/${data.uuid}/settings/appearance`}>Appearance</a>
				</li>
				<li>
					<a class="block py-1" href={`/users/${data.uuid}/settings/accessibility`}>Accessibility</a
					>
				</li>
				<li>
					<a class="block py-1" href={`/users/${data.uuid}/settings/notifications`}>Notification</a>
				</li>
			</ul>
		</div>
		<div class="border-b">
			<h3 class="text-neutral-400 text-sm">Access</h3>
			<ul>
				<li><a class="block py-1" href={`/users/${data.uuid}/settings/billing`}>Billing</a></li>
				<li><a class="block py-1" href={`/users/${data.uuid}/settings/emails`}>Emails</a></li>
				<li><a class="block py-1" href={`/users/${data.uuid}/settings/passwords`}>Passwords</a></li>
			</ul>
		</div>
	</aside>
	<main class="w-full">
		<slot />
	</main>
</div>
