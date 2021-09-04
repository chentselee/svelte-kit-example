<nav>
	<a href="/admin">Dashboard</a>
	<a href="/admin/settings">Settings</a>
</nav>

<slot />

<style>
	nav {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}
</style>
