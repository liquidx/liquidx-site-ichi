<script lang="ts">
	import { resolve } from '$app/paths';

	// TODO: Fill in the corporate number once issued.
	const details: { en: string; ja: string; value: string; email?: boolean }[] = [
		{ en: 'Company Name', ja: '商号', value: 'ICHI RESEARCH合同会社' },
		{ en: 'Corporate Number', ja: '法人番号', value: '[Corporate number]' },
		{ en: 'Representative', ja: '代表者', value: 'TSE ALASTAIR' },
		{
			en: 'Address',
			ja: '所在地',
			value: '〒107-0061 東京都港区北青山一丁目3番1号　アールキューブ青山3階'
		},
		{ en: 'Established', ja: '設立', value: '2026' },
		{
			en: 'Business',
			ja: '事業内容',
			value: 'Research & Development — Technology, Maps and Robotics'
		},
		{
			en: 'Contact',
			ja: 'お問い合わせ',
			value: 'research@ichi.ing',
			email: true
		}
	];
</script>

<svelte:head>
	<title>Company Info — Ichi Research イチリサーチ</title>
</svelte:head>

<h1 class="text-3xl leading-tight">
	Company Info <span class="block text-xl" lang="ja">会社概要</span>
</h1>

<dl class="mt-8 space-y-4 text-sm leading-relaxed">
	{#each details as row (row.en)}
		<div>
			<dt class="text-neutral-500">{row.en} <span lang="ja">{row.ja}</span></dt>
			<dd>
				{#if row.email}<a href="mailto:{row.value}">{row.value}</a>{:else}{row.value}{/if}
			</dd>
		</div>
	{/each}
</dl>

<p class="mt-12 text-sm">
	<a href={resolve('/')}>← Ichi Research <span lang="ja">イチリサーチ</span></a>
</p>
