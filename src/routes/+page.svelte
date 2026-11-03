<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>Ichi Research イチリサーチ</title>
	<meta name="description" content="Research & Development. Technology, Maps and Robotics." />
</svelte:head>

<h1 class="text-5xl leading-tight">
	Ichi Research
	<span class="block text-3xl" lang="ja">イチリサーチ</span>
</h1>

<p class="mt-6 text-lg leading-relaxed">
	Research &amp; Development.<br />
	Technology, Maps and Robotics.
</p>
<p class="mt-4 text-lg leading-relaxed" lang="ja">
	研究開発。<br />
	テクノロジー、地図、ロボティクス。
</p>

<p class="mt-12 text-sm">
	<a href={resolve('/company')}>Company Info <span lang="ja">会社概要</span></a>
</p>
