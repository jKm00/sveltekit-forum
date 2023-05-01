<script>
	import { theme } from '@/stores/theme';

	export let data;

	const settings = [
		{
			id: 0,
			header: 'Account',
			options: [
				{
					id: 0,
					name: 'Accont',
					slug: 'account'
				},
				{
					id: 1,
					name: 'Appearance',
					slug: 'appearance'
				},
				{
					id: 2,
					name: 'Accessibility',
					slug: 'accessibility'
				},
				{
					id: 3,
					name: 'Notification',
					slug: 'notification'
				}
			]
		},
		{
			id: 1,
			header: 'Access',
			options: [
				{
					id: 0,
					name: 'Billing',
					slug: 'billing'
				},
				{
					id: 1,
					name: 'Emails',
					slug: 'emails'
				},
				{
					id: 2,
					name: 'Passwords',
					slug: 'password'
				}
			]
		},
		{
			id: 2,
			header: 'Integrations',
			options: [
				{
					id: 0,
					name: 'Applications',
					slug: 'applications'
				},
				{
					id: 1,
					name: 'Scheduled reminders',
					slug: 'scheduled-reminders'
				}
			]
		}
	];
</script>

<div class="flex gap-5">
	<aside class="grid content-start gap-4 w-44">
		<a
			class={data.activePage === 'settings' ? $theme.text : ''}
			href={`/users/${data.uuid}/settings`}>Settings</a
		>
		{#each settings as settingGroup}
			<div class="border-b pb-2">
				<h3 class="text-neutral-400 text-sm">{settingGroup.header}</h3>
				<ul>
					{#each settingGroup.options as settingPage}
						<li>
							<a
								class={`block py-1 ${settingPage.slug === data.activePage ? $theme.text : ''}`}
								href={`/users/${data.uuid}/settings/${settingPage.slug}`}>{settingPage.name}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</aside>
	<main class="w-full">
		<slot />
	</main>
</div>
