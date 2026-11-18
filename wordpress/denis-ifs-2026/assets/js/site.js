/**
 * Denis IFS 2026: small front-end helpers.
 * 1. "Scrolling banner" paragraphs: split the text on ✱ and repeat it so it can loop.
 * 2. Picture stories: add a "Scrolling down / Swiping right" switch above any group with the class dr-story.
 * Nothing here is needed for the page to read correctly; it only adds motion and the switch.
 */
( function () {
	function ticker( p ) {
		if ( p.dataset.ready ) return;
		var text = p.textContent;
		var items = text.split( /[✱*·|]/ ).map( function ( s ) { return s.trim(); } ).filter( Boolean );
		if ( ! items.length ) return;
		var html = '';
		for ( var r = 0; r < 4; r++ ) {
			html += items.map( function ( s ) { var e = document.createElement( 'span' ); e.textContent = s; return e.outerHTML; } ).join( '' );
		}
		p.setAttribute( 'aria-label', items.join( ', ' ) );
		p.innerHTML = '<span class="dr-track" aria-hidden="true">' + html + '</span>';
		p.dataset.ready = 1;
	}

	function story( box, n ) {
		if ( box.dataset.ready ) return;
		box.dataset.ready = 1;
		var frames = [].slice.call( box.children );
		var key = 'drStoryMode';
		var bar = document.createElement( 'div' );
		bar.className = 'dr-story-bar';
		bar.innerHTML = '<span class="is-style-eyebrow" style="background:none">Read it by</span><div class="dr-seg" role="group" aria-label="Story layout">' +
			'<button type="button" data-m="scroll" aria-pressed="true">Scrolling down</button><button type="button" data-m="swipe" aria-pressed="false">Swiping right</button></div>';
		box.parentNode.insertBefore( bar, box );
		var nav = document.createElement( 'div' );
		nav.className = 'dr-story-nav';
		nav.hidden = true;
		nav.innerHTML = '<button type="button" data-d="-1" aria-label="Previous picture">←</button><button type="button" data-d="1" aria-label="Next picture">→</button>';
		box.parentNode.insertBefore( nav, box.nextSibling );
		box.setAttribute( 'tabindex', '0' );
		frames.forEach( function ( f, i ) { f.setAttribute( 'role', 'group' ); f.setAttribute( 'aria-label', 'Picture ' + ( i + 1 ) + ' of ' + frames.length ); } );

		function setMode( m ) {
			box.classList.toggle( 'is-swipe', m === 'swipe' );
			nav.hidden = m !== 'swipe';
			bar.querySelectorAll( 'button' ).forEach( function ( b ) { b.setAttribute( 'aria-pressed', b.dataset.m === m ); } );
			try { localStorage.setItem( key, m ); } catch ( e ) {}
		}
		function current() { var w = frames[ 0 ].getBoundingClientRect().width + 22; return Math.round( box.scrollLeft / w ); }
		function go( d ) {
			var i = Math.max( 0, Math.min( frames.length - 1, current() + d ) ), el = frames[ i ];
			box.scrollTo( { left: el.offsetLeft - ( box.clientWidth - el.clientWidth ) / 2, behavior: 'smooth' } );
		}
		bar.addEventListener( 'click', function ( e ) { var b = e.target.closest( 'button' ); if ( b ) setMode( b.dataset.m ); } );
		nav.addEventListener( 'click', function ( e ) { var b = e.target.closest( 'button' ); if ( b ) go( +b.dataset.d ); } );
		box.addEventListener( 'keydown', function ( e ) {
			if ( ! box.classList.contains( 'is-swipe' ) ) return;
			if ( e.key === 'ArrowRight' ) { go( 1 ); e.preventDefault(); }
			if ( e.key === 'ArrowLeft' ) { go( -1 ); e.preventDefault(); }
		} );
		try { if ( localStorage.getItem( key ) === 'swipe' ) setMode( 'swipe' ); } catch ( e ) {}
	}

	function init() {
		document.querySelectorAll( '.is-style-ticker' ).forEach( ticker );
		document.querySelectorAll( '.dr-story' ).forEach( story );
	}
	if ( document.readyState === 'loading' ) document.addEventListener( 'DOMContentLoaded', init );
	else init();
} )();
