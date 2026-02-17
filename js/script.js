document.addEventListener('DOMContentLoaded', function () {
	const toggle = document.querySelector('.nav-toggle');
	const nav = document.getElementById('site-nav');

	if (!toggle || !nav) return;

	toggle.addEventListener('click', function () {
		const isOpen = nav.classList.toggle('open');
		toggle.classList.toggle('open', isOpen);
		toggle.setAttribute('aria-expanded', String(isOpen));
	});
});
