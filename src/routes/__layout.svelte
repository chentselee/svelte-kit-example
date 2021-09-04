<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/admin">Admin</a>
</nav>

<slot />

<style>
	nav {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}
</style>
