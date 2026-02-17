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
// Brand slider functionality
// document.addEventListener('DOMContentLoaded', function () {
// 	const brandLogos = document.querySelector('.brand-logos');
// 	if (!brandLogos) return;

// 	// Clone logos for infinite loop effect
// 	const logos = Array.from(brandLogos.children);
// 	logos.forEach(logo => {
// 		const clone = logo.cloneNode(true);
// 		brandLogos.appendChild(clone);
// 	});

// 	let scrollAmount = 0;
// 	const speed = 1; // px per frame

// 	function slideLogos() {
// 		scrollAmount += speed;
// 		brandLogos.scrollLeft = scrollAmount;
// 		// Reset scroll when halfway through
// 		if (scrollAmount >= brandLogos.scrollWidth / 2) {
// 			scrollAmount = 0;
// 		}
// 		requestAnimationFrame(slideLogos);
// 	}

// 	// Set brandLogos to scrollable
// 	brandLogos.style.overflowX = 'hidden';
// 	brandLogos.style.whiteSpace = 'nowrap';
// 	// brandLogos.style.scrollBehavior = 'auto';

// 	slideLogos();
// });
