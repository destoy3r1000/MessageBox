/**
 * Denis IFS 2026 — animated "parts" characters.
 * Renders an SVG into every <span class="chr" data-c="..."> on the page.
 * Used by the "Part character" block (front end and editor).
 */
(function () {
var INK='#2b1a12';
var S='stroke="'+INK+'" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"';
function eye(x,y,r,dx,dy){r=r||6.5;dx=dx||0;dy=dy||0;return '<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="#fff" stroke="'+INK+'" stroke-width="2.2"/><circle cx="'+(x+dx)+'" cy="'+(y+dy)+'" r="'+(r*.46)+'" fill="'+INK+'"/>';}
function eyes(a,b,r,dx,dy){return '<g class="blink">'+eye(a[0],a[1],r,dx,dy)+eye(b[0],b[1],r,dx,dy)+'</g>';}
function shut(x,y){return '<path d="M'+(x-6)+' '+y+' Q'+x+' '+(y+5)+' '+(x+6)+' '+y+'" '+S+'/>';}
function legs(x1,x2,y1,y2,shoe,cls){cls=cls||['',''];shoe=shoe||'#e8532f';
  return '<g class="'+cls[0]+'"><path d="M'+x1+' '+y1+' L'+x1+' '+y2+'" '+S+'/><ellipse cx="'+(x1-4)+'" cy="'+(y2+1)+'" rx="8" ry="4.2" fill="'+shoe+'" stroke="'+INK+'" stroke-width="2"/></g>'+
         '<g class="'+cls[1]+'"><path d="M'+x2+' '+y1+' L'+x2+' '+y2+'" '+S+'/><ellipse cx="'+(x2+4)+'" cy="'+(y2+1)+'" rx="8" ry="4.2" fill="'+shoe+'" stroke="'+INK+'" stroke-width="2"/></g>';}
function blush(a,b){return '<circle cx="'+a[0]+'" cy="'+a[1]+'" r="5" fill="#f08aa6" opacity=".6"/><circle cx="'+b[0]+'" cy="'+b[1]+'" r="5" fill="#f08aa6" opacity=".6"/>';}
var SH='<ellipse cx="70" cy="142" rx="36" ry="5" fill="'+INK+'" opacity=".12"/>';
function star(cx,cy,ro,ri,n){var p=[];for(var i=0;i<n*2;i++){var r=i%2?ri:ro,a=Math.PI*i/n-Math.PI/2;p.push((cx+r*Math.cos(a)).toFixed(1)+','+(cy+r*Math.sin(a)).toFixed(1));}return p.join(' ');}
var C={
 identity:{name:'Identity',say:'Who am I today?',g:function(){return SH+'<g class="a-sway">'+legs(60,80,112,136,'#e8532f')+
   '<path d="M28 80 L14 70 M112 80 L126 70" '+S+'/>'+
   '<g filter="url(#tex)"><path d="M70 28 A44 44 0 0 0 70 116 Z" fill="#f2a0bf"/><path d="M70 28 A44 44 0 0 1 70 116 Z" fill="#8fb7e8"/></g>'+
   '<path d="M68 28 C62 14 78 10 78 20" '+S+'/>'+eyes([56,66],[84,66],7,0,0)+'<path d="M60 90 Q70 98 80 90" '+S+'/></g>';}},
 body:{name:'Body',say:'I’m allowed to feel at home here.',g:function(){return SH+'<g class="a-breathe">'+legs(60,80,126,138,'#5f8f78')+
   '<path filter="url(#tex)" d="M70 20 C100 20 114 60 114 92 C114 122 94 130 70 130 C46 130 26 122 26 92 C26 60 40 20 70 20Z" fill="#f4cf4a"/>'+
   shut(56,62)+shut(84,62)+blush([48,74],[92,74])+'<path d="M62 78 Q70 86 78 78" '+S+'/>'+
   '<path d="M30 84 C44 104 76 106 94 94" '+S+'/><path d="M110 84 C96 104 64 106 46 94" '+S+'/></g>';}},
 habits:{name:'Habits',say:'Just one more scroll…',g:function(){return SH+'<g class="a-bob">'+legs(56,84,122,138,'#8fb7e8')+
   '<path filter="url(#tex)" d="M22 124 C16 80 40 46 70 46 C100 46 124 80 118 124 Z" fill="#9b7bd4"/>'+
   eyes([57,72],[83,72],6.5,0,3)+'<path d="M64 86 L76 86" '+S+'/>'+
   '<rect x="57" y="92" width="26" height="32" rx="5" fill="'+INK+'"/><rect class="glow" x="60" y="96" width="20" height="23" rx="2" fill="#b9d2ee"/>'+
   '<path d="M28 102 Q42 114 58 110 M112 102 Q98 114 82 110" '+S+'/></g>';}},
 critic:{name:'Inner critic',say:'You could have done better.',g:function(){return SH+'<g>'+legs(58,82,124,138,'#2b1a12')+
   '<path d="M40 88 L22 102" '+S+'/><g class="wag"><path d="M100 80 L120 60 L124 50" '+S+'/></g>'+
   '<rect filter="url(#tex)" x="38" y="32" width="64" height="94" rx="12" fill="#4f86d6"/>'+
   '<rect x="56" y="14" width="28" height="18" rx="2" fill="#5f8f78" stroke="'+INK+'" stroke-width="2.2"/><path d="M48 32 L92 32" '+S+'/>'+
   '<path d="M48 58 L64 64 M92 58 L76 64" '+S+'/>'+eyes([57,72],[83,72],6.5,0,0)+'<path d="M58 104 Q70 94 82 104" '+S+'/></g>';}},
 rest:{name:'Rest',say:'Zzz… just five more minutes.',g:function(){return SH+'<g class="a-breathe">'+
   '<ellipse cx="28" cy="114" rx="20" ry="13" fill="#fbf7ef" stroke="'+INK+'" stroke-width="2.2"/>'+
   '<ellipse filter="url(#tex)" cx="74" cy="108" rx="52" ry="28" fill="#ee7a3a"/>'+
   shut(44,100)+shut(62,100)+'<path d="M48 114 Q54 118 60 114" '+S+'/>'+
   '<path d="M124 112 L134 106 M122 120 L134 120" '+S+'/></g>'+
   '<text class="zz" x="78" y="68" font-family="Fraunces,Georgia,serif" font-weight="900" font-size="16" fill="'+INK+'">z</text>'+
   '<text class="zz d2" x="92" y="56" font-family="Fraunces,Georgia,serif" font-weight="900" font-size="20" fill="'+INK+'">z</text>'+
   '<text class="zz d3" x="108" y="44" font-family="Fraunces,Georgia,serif" font-weight="900" font-size="24" fill="'+INK+'">Z</text>';}},
 change:{name:'Change',say:'Somewhere new. Scary and exciting.',g:function(){return SH+'<g class="a-bob">'+legs(58,82,116,136,'#e8532f',['walk-l','walk-r'])+
   '<path d="M36 84 L22 96" '+S+'/><path d="M104 84 L114 100" '+S+'/>'+
   '<path filter="url(#tex)" d="M70 24 C98 24 108 56 106 86 C104 112 92 120 70 120 C48 120 34 112 34 86 C32 56 42 24 70 24Z" fill="#5fae5a"/>'+
   eyes([60,64],[84,64],6.5,2,0)+'<path d="M62 86 Q72 96 82 86" '+S+'/>'+
   '<rect x="106" y="100" width="28" height="22" rx="4" fill="#f4e08a" stroke="'+INK+'" stroke-width="2.2"/><path d="M114 100 L114 95 L126 95 L126 100" '+S+'/></g>';}},
 trust:{name:'Trust',say:'I’ve got you.',g:function(){return SH+'<g class="a-sway">'+
   legs(36,50,108,136,'#8fb7e8')+legs(90,106,106,136,'#e8532f')+
   '<circle filter="url(#tex)" cx="44" cy="84" r="27" fill="#f2a0bf"/><circle filter="url(#tex)" cx="98" cy="80" r="30" fill="#f4cf4a"/>'+
   eyes([36,80],[52,80],5,1,0)+eyes([90,76],[106,76],5.5,-1,0)+
   '<path d="M38 94 Q44 99 50 94 M92 92 Q98 98 104 92" '+S+'/>'+
   '<path d="M64 98 L71 106 L76 98" '+S+'/>'+
   '<path class="hbeat" d="M71 46 C66 38 56 42 60 50 L71 60 L82 50 C86 42 76 38 71 46Z" fill="#e8532f"/></g>';}},
 desire:{name:'Desire',say:'What do I actually want?',g:function(){return SH+'<g class="a-pulse">'+legs(62,78,120,138,'#f4cf4a')+
   '<path d="M26 74 L12 64 M114 74 L128 64" '+S+'/>'+
   '<path filter="url(#tex)" d="M70 126 C30 98 18 76 26 56 C34 36 60 36 70 56 C80 36 106 36 114 56 C122 76 110 98 70 126Z" fill="#e8532f"/>'+
   eyes([56,72],[84,72],6.5,0,0)+'<path d="M48 62 L46 57 M53 60 L52 55 M92 62 L94 57 M87 60 L88 55" '+S+'/>'+
   blush([48,86],[92,86])+'<path d="M64 90 Q70 95 76 90" '+S+'/></g>';}},
 anger:{name:'Anger',say:'That really upset me!',g:function(){return SH+'<g class="a-shake">'+legs(60,80,118,138,'#2b1a12')+
   '<polygon filter="url(#tex)" points="'+star(70,82,46,34,12)+'" fill="#d8261c"/>'+
   '<path d="M50 66 L64 72 M90 66 L76 72" '+S+'/>'+eyes([57,78],[83,78],6,0,0)+
   '<path d="M56 102 L62 96 L70 102 L78 96 L84 102" '+S+'/></g>'+
   '<circle class="steam" cx="40" cy="28" r="8" fill="#fbf7ef" stroke="'+INK+'" stroke-width="2"/><circle class="steam d2" cx="100" cy="26" r="9" fill="#fbf7ef" stroke="'+INK+'" stroke-width="2"/>';}},
 self:{name:'Self',say:'Hello. I’m curious about all of you.',g:function(){var r='';for(var i=0;i<12;i++){var a=i*Math.PI/6;r+='<path d="M'+(70+50*Math.cos(a)).toFixed(1)+' '+(78+50*Math.sin(a)).toFixed(1)+' L'+(70+62*Math.cos(a)).toFixed(1)+' '+(78+62*Math.sin(a)).toFixed(1)+'" stroke="#e8532f" stroke-width="4" stroke-linecap="round"/>';}
   return SH+'<g class="spin">'+r+'</g><g class="a-breathe">'+legs(60,80,118,138,'#8fb7e8')+
   '<circle filter="url(#tex)" cx="70" cy="78" r="42" fill="#f4cf4a"/>'+shut(56,72)+shut(84,72)+blush([48,86],[92,86])+'<path d="M58 88 Q70 100 82 88" '+S+'/></g>';}},
 worry:{name:'Worry',say:'What if it all goes wrong?',g:function(){return SH+'<g class="a-tremble">'+legs(62,78,124,138,'#f4cf4a')+
   '<path d="M44 74 C34 70 36 60 28 56 M96 74 C106 70 104 60 112 56" '+S+'/>'+
   '<path filter="url(#tex)" d="M70 18 C92 18 98 50 96 80 C94 110 90 126 70 126 C50 126 46 110 44 80 C42 50 48 18 70 18Z" fill="#8fb7e8"/>'+
   eyes([60,58],[80,58],8.5,0,-2)+'<ellipse cx="70" cy="86" rx="5" ry="6" fill="'+INK+'"/>'+
   '<path class="drop" d="M100 38 C104 44 104 48 100 48 C96 48 96 44 100 38Z" fill="#b9d2ee" stroke="'+INK+'" stroke-width="1.6"/></g>';}}
};

var DEFS = '<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>' +
  '<filter id="tex" x="-15%" y="-15%" width="130%" height="130%"><feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="4" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="5" xChannelSelector="R" yChannelSelector="G" result="d"/><feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="1" seed="9" result="g"/><feColorMatrix in="g" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.1 1.35" result="ga"/><feComposite in="d" in2="ga" operator="in"/></filter>' +
  '<filter id="paint" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.01 0.018" numOctaves="2" seed="7" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="7" xChannelSelector="R" yChannelSelector="G" result="d"/><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" seed="3" result="g"/><feColorMatrix in="g" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -0.5 1.15" result="ga"/><feComposite in="d" in2="ga" operator="in"/></filter>' +
  '</defs></svg>';

function svg(k) { if (!C[k]) k = 'self'; return '<svg viewBox="0 0 140 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">' + C[k].g() + '</svg>'; }

function ensureDefs(doc) {
  if (doc.getElementById('tex')) return;
  var holder = doc.createElement('div'); holder.innerHTML = DEFS;
  (doc.body || doc.documentElement).appendChild(holder.firstChild);
}

function mount(root) {
  var doc = (root && root.ownerDocument) || document;
  ensureDefs(doc);
  (root || document).querySelectorAll('.chr[data-c]').forEach(function (el) {
    if (el.dataset.done) return;
    var k = el.dataset.c; if (!C[k]) return;
    el.innerHTML = svg(k); el.dataset.done = 1;
    if (!el.title) el.title = C[k].say;
    var d = (-Math.random() * 4).toFixed(2) + 's';
    el.querySelectorAll('[class]').forEach(function (n) { n.style.animationDelay = d; });
    el.addEventListener('click', function () { el.classList.remove('hop'); void el.offsetWidth; el.classList.add('hop'); });
  });
}

var LIST = Object.keys(C).map(function (k) { return { value: k, label: C[k].name + ' — ' + C[k].say }; });
window.DenisCharacters = { svg: svg, mount: mount, ensureDefs: ensureDefs, list: LIST };

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { mount(); });
else mount();
})();
