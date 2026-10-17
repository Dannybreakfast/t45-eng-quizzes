(function(){
var root=document.getElementById('app');if(!root)return;
var key=root.dataset.ck,ALL=window.MEM,cks=key==='all'?ALL:ALL.filter(function(c){return c.id===key});
var SKEY='mem_srs_v1';
function E(t,a,c){var e=document.createElement(t);if(a)for(var k in a){if(k==='text')e.textContent=a[k];else if(k==='html')e.innerHTML=a[k];else if(k.slice(0,2)==='on')e.addEventListener(k.slice(2),a[k]);else e.setAttribute(k,a[k]);}(c||[]).forEach(function(x){if(x)e.appendChild(typeof x==='string'?document.createTextNode(x):x)});return e}
function B(t,f,cls){return E('button',{text:t,onclick:f,class:cls||''})}
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a}
function lineText(x){if(x.t==='item')return (x.n?x.n+'. ':'')+x.item+(x.set?'....'+x.set:'');if(x.t==='row')return x.key+' → '+x.val;if(x.t==='call')return (x.who?x.who+': ':'')+x.text;return x.text}
function units(c){return c.lines.filter(function(x){return x.t!=='hdr'})}
// normalization / forgiving match
function norm(s){s=(s||'').toUpperCase();
 s=s.replace(/[“”"]/g,'').replace(/[’‘`]/g,"'").replace(/½/g,' 1/2 ').replace(/\bHALF\b/g,' 1/2 ').replace(/±|\+\/-|\+-/g,' PM ').replace(/°|\bDEG(REES?)?\b/g,' ')
 .replace(/\bREQUIRED\b|\bREQD\b|\bREQ'D\b/g,'REQD').replace(/\bLIGHTS?\b/g,'LT').replace(/\bCONTROL\b/g,'CNTRL').replace(/\bCONTR\b/g,'CNTRL').replace(/\bKNOTS\b/g,'KTS').replace(/\bAUGMENTATION\b/g,'AUG')
 .replace(/\bEXTEND\b/g,'EXTENDED').replace(/\bAND\b/g,'&').replace(/\bWITH\b|\bW\//g,'W ').replace(/,(?=\d{3})/g,'').replace(/[^A-Z0-9%&/<>+\-. ]/g,' ').replace(/[\/\-.]/g,' ').replace(/\s+/g,' ').trim();return s}
function lev(a,b){var m=a.length,n=b.length,d=[];for(var i=0;i<=m;i++){d[i]=[i]}for(var j=1;j<=n;j++)d[0][j]=j;for(i=1;i<=m;i++)for(j=1;j<=n;j++)d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+(a[i-1]===b[j-1]?0:1));return d[m][n]}
function close(a,b){a=norm(a);b=norm(b);if(!b)return !a;if(a===b)return true;var x=a.replace(/ /g,''),y=b.replace(/ /g,'');if(x===y)return true;return lev(x,y)<=Math.floor(y.length/6)}
// SRS
function srs(){try{return JSON.parse(localStorage.getItem(SKEY)||'{}')}catch(e){return {}}}
function srsSet(id,ok){var s=srs();var b=s[id]?s[id].b:1;b=ok?Math.min(5,b+1):1;s[id]={b:b,t:Date.now()};try{localStorage.setItem(SKEY,JSON.stringify(s))}catch(e){}}
var INT=[0,0,10*60e3,3600e3*6,86400e3*2,86400e3*6];
function due(id){var s=srs()[id];if(!s)return true;return Date.now()-s.t>=INT[s.b]}
function box(id){var s=srs()[id];return s?s.b:0}
var allCards=[];cks.forEach(function(c){allCards=allCards.concat(c.cards)});
// UI shell
var tabs=E('div',{class:'tabs'}),body=E('div');root.appendChild(tabs);root.appendChild(body);
var MODES=[['ref','Reveal'],['mn','Mnemonics'],['acr','Acronym drill'],['fc','Flashcards'],['stack','Stack'],['fill','Fill-in'],['type','Type it'],['img','Card image']];
var cur='ref';function go(m){cur=m;[].forEach.call(tabs.children,function(b){b.className=b.dataset.m===m?'on':''});body.innerHTML='';R[m]();try{history.replaceState(null,'','#'+m)}catch(e){}}
MODES.forEach(function(m){var b=B(m[1],function(){go(m[0])});b.dataset.m=m[0];tabs.appendChild(b)});
var R={};
// 1 reveal
R.ref=function(){var hidden=true,lines=[];
 var p=E('div',{class:'panel'});var bar=E('div',{class:'row'},[B('Reveal next (R)',next),B('Reveal all',function(){lines.forEach(function(l){l.classList.remove('hid')})}),B('Hide all',function(){lines.forEach(function(l){l.classList.add('hid')})})]);
 body.appendChild(E('p',{class:'muted',text:'Tap a line or press R to reveal the next one. Verbatim card wording.'}));body.appendChild(bar);body.appendChild(p);
 cks.forEach(function(c){if(cks.length>1)p.appendChild(E('div',{class:'ln hdr',text:'■ '+c.title}));if(cks.length===1)p.appendChild(E('div',{class:'ln hdr',text:c.title}));
  c.lines.forEach(function(x){var tx=E('span',{class:'tx',text:lineText(x)});if(x.t==='row')tx.textContent='   '+x.label+':  '+x.key+' → '+x.val;
   var d=E('div',{class:'ln hid '+(x.t==='call'||x.t==='hdr'?'call':'')},[tx,x.note?E('span',{class:'note tx',text:x.note}):null]);d.onclick=function(){d.classList.toggle('hid')};lines.push(d);p.appendChild(d)})});
 function next(){for(var i=0;i<lines.length;i++)if(lines[i].classList.contains('hid')){lines[i].classList.remove('hid');lines[i].scrollIntoView({block:'nearest'});return}}
 R._key=function(e){if((e.key==='r'||e.key==='R')&&cur==='ref')next()}};
document.addEventListener('keydown',function(e){if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA')return;if(R._key)R._key(e)});
// 2 mnemonics
R.mn=function(){body.appendChild(E('div',{class:'aid'},[E('div',{class:'tag',text:'MEMORY AIDS — NOT CARD WORDING'}),E('div',{class:'small',text:'Acronyms and sentences below are made-up memory hooks. The checklist wording is only what appears in Reveal / Card image.'})]));
 cks.forEach(function(c){var p=E('div',{class:'panel'},[E('h3',{text:c.title})]);
  c.mn.forEach(function(m){p.appendChild(E('div',{class:'aid'},[E('div',{class:'tag',text:'MEMORY AID · '+m.name}),E('div',{class:'letters',text:m.letters}),E('div',{html:'<b>'+esc(m.sentence)+'</b>'}),E('ol',{class:'small',html:m.words.map(function(w){return '<li>'+esc(w)+'</li>'}).join('')})]))});
  if(c.pegs&&c.pegs.length)p.appendChild(E('div',{class:'aid'},[E('div',{class:'tag',text:'MEMORY AID · NUMBER PEGS'}),E('ul',{class:'small',html:c.pegs.map(function(w){return '<li>• '+esc(w)+'</li>'}).join('')})]));
  body.appendChild(p)})};
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
// 3 acronym drill
R.acr=function(){var q=[];cks.forEach(function(c){c.mn.forEach(function(m){m.words.forEach(function(w,i){q.push({c:c,m:m,i:i,w:w})})})});
 var n=0,miss=0,p=E('div',{class:'panel'});body.appendChild(E('p',{class:'muted',text:'See the letters, type the full item and setting (or just think it), then check. Misses re-queue.'}));body.appendChild(p);
 function show(){p.innerHTML='';if(!q.length){p.appendChild(E('div',{class:'res-ok',text:'Done! '+n+' answered, '+miss+' misses.'}));p.appendChild(B('Restart',function(){go('acr')}));return}
  var it=q[0],L=it.m.words.map(function(w,j){return j<it.i?w.split(/[\s:—]/)[0]:j===it.i?'['+lettersOf(it.m)[j]+']':lettersOf(it.m)[j]});
  var inp=E('input',{type:'text',placeholder:'Type item — setting'}),out=E('div');
  p.appendChild(E('div',{class:'muted',text:it.c.title+' · '+it.m.name+' · '+(it.i+1)+'/'+it.m.words.length+' · '+q.length+' left'}));
  p.appendChild(E('div',{class:'letters',text:L.join(' ')}));p.appendChild(inp);
  var ans=E('div',{class:'small'});
  p.appendChild(E('div',{class:'row'},[B('Check',chk),B('Show',function(){ans.textContent=it.w})]));p.appendChild(out);p.appendChild(ans);
  p.appendChild(E('div',{class:'row'},[B('Got it',function(){done(true)},'ok'),B('Missed',function(){done(false)},'bad')]));
  inp.addEventListener('keydown',function(e){if(e.key==='Enter')chk()});setTimeout(function(){inp.focus()},30);
  function chk(){var ok=close(inp.value,it.w)||close(inp.value,it.w.replace(' — ',' '));out.innerHTML=ok?'<span class=res-ok>✓ match</span>':'<span class=res-bad>✗</span> <span class=small>'+esc(it.w)+'</span>';setTimeout(function(){},0);it.res=ok}
 }
 function done(ok){n++;var it=q.shift();if(!ok){miss++;q.splice(Math.min(2,q.length),0,it)}show()}
 show()};
function lettersOf(m){var parts=m.letters.split(/\s+/).filter(function(x){return x!=='·'&&x!=='→'});if(parts.length===m.words.length)return parts;return m.words.map(function(w){return w.replace(/^[A-Z]\/C: /,'')[0]})}
// 4 flashcards + SRS
R.fc=function(){var order='due',dirs={s:1,r:1,c:1,n:1};
 var ctl=E('div',{class:'panel'}),p=E('div');body.appendChild(ctl);body.appendChild(p);
 var sel=E('select',{class:'btn'});[['due','Spaced repetition (due first)'],['order','In order'],['shuffle','Shuffle']].forEach(function(o){sel.appendChild(E('option',{value:o[0],text:o[1]}))});
 var chk=[['s','Item → setting'],['r','Table rows'],['c','Calls / ditties'],['n','What comes after X?']].map(function(d){var cb=E('input',{type:'checkbox',checked:'checked'});cb.onchange=function(){dirs[d[0]]=cb.checked?1:0;start()};return E('label',{class:'small',style:'margin-right:.6rem'},[cb,' '+d[1]])});
 sel.onchange=function(){order=sel.value;start()};
 ctl.appendChild(E('div',{class:'row'},[sel,B('Reset progress',function(){if(confirm('Reset spaced-repetition progress for these cards?')){var s=srs();allCards.forEach(function(c){delete s[c.id]});localStorage.setItem(SKEY,JSON.stringify(s));start()}})]));
 ctl.appendChild(E('div',{},chk));var stat=E('div',{class:'muted'});ctl.appendChild(stat);
 ctl.appendChild(E('div',{class:'small',html:'Export: <a href="mem-flashcards.tsv">mem-flashcards.tsv</a> (all checklists)'}));
 var q=[],got=0,miss=0;
 function start(){var cs=allCards.filter(function(c){return dirs[c.id.split(':').pop()]});
  if(order==='shuffle')cs=shuffle(cs);else if(order==='due'){var d=cs.filter(function(c){return due(c.id)}),nd=cs.filter(function(c){return !due(c.id)});d=shuffle(d).sort(function(a,b){return box(a.id)-box(b.id)});cs=d.length?d:shuffle(nd).sort(function(a,b){return box(a.id)-box(b.id)})}
  q=cs;got=0;miss=0;show()}
 function boxes(){var c=[0,0,0,0,0,0];allCards.forEach(function(x){c[box(x.id)]++});return 'Leitner boxes — new:'+c[0]+' · 1:'+c[1]+' · 2:'+c[2]+' · 3:'+c[3]+' · 4:'+c[4]+' · 5:'+c[5]}
 function show(){p.innerHTML='';stat.textContent=q.length+' in queue · got '+got+' · missed '+miss+' · '+boxes();
  if(!q.length){p.appendChild(E('div',{class:'panel res-ok',text:'Queue empty. '+(order==='due'?'Nothing due — come back later or pick Shuffle.':'')}));p.appendChild(B('Restart',start));return}
  var c=q[0],back=E('div',{class:'back',text:''}),card=E('div',{class:'card'},[E('div',{text:c.f}),back]);
  var flipped=false;card.onclick=function(){flipped=!flipped;back.textContent=flipped?c.b:''};
  p.appendChild(card);p.appendChild(E('div',{class:'muted',text:'Tap card to flip · box '+box(c.id)}));
  p.appendChild(E('div',{class:'row'},[B('✓ Got it',function(){srsSet(c.id,true);got++;q.shift();show()},'ok'),B('✗ Missed',function(){srsSet(c.id,false);miss++;q.shift();q.splice(Math.min(3,q.length),0,c);show()},'bad')]))}
 start()};
// 5 stacking
R.stack=function(){var segs=[];cks.forEach(function(c){var u=units(c);segs.push({c:c,u:u})});var si=0,k=1;var p=E('div',{class:'panel'});
 body.appendChild(E('p',{class:'muted',text:'Recite item 1, then 1–2, then 1–3… out loud. Reveal, then self-grade. Missed repeats the same stack.'}));body.appendChild(p);
 function show(){p.innerHTML='';var s=segs[si];if(!s){p.appendChild(E('div',{class:'res-ok',text:'Whole stack complete!'}));p.appendChild(B('Restart',function(){si=0;k=1;show()}));return}
  p.appendChild(E('div',{class:'muted',text:s.c.title+' · stack 1–'+k+' of '+s.u.length}));
  p.appendChild(E('div',{class:'small',text:'Say lines 1 through '+k+'. Next new line starts: '+lineText(s.u[k-1]).split(' ').slice(0,1).join(' ')+' …'}));
  var ans=E('div');p.appendChild(B('Reveal',function(){ans.innerHTML=s.u.slice(0,k).map(function(x,i){return '<div class="ln'+(i===k-1?' call':'')+'">'+esc(lineText(x))+'</div>'}).join('')}));p.appendChild(ans);
  p.appendChild(E('div',{class:'row'},[B('Got it',function(){k++;if(k>s.u.length){si++;k=1}show()},'ok'),B('Missed',show,'bad')]))}
 show()};
// 6 fill in
R.fill=function(){var p=E('div',{class:'panel'});body.appendChild(E('p',{class:'muted',text:'Fill the blanks (settings and key ditty words). Matching forgives case, punctuation, REQ’D/REQUIRED, LT/LIGHT, ½/1/2, ±/+-, small typos.'}));body.appendChild(p);
 var inputs=[];cks.forEach(function(c){p.appendChild(E('div',{class:'ln hdr',text:c.title}));
  c.lines.forEach(function(x){var d=E('div',{class:'blank ln'});
   if(x.t==='hdr'){d.textContent=x.text;d.className='ln hdr'}
   else if(x.t==='item'){d.appendChild(document.createTextNode((x.n?x.n+'. ':'')+x.item+(x.set?' .... ':'')));if(x.set)d.appendChild(mk(x.set));if(x.note)d.appendChild(E('span',{class:'note',text:x.note}))}
   else if(x.t==='row'){d.appendChild(document.createTextNode(x.key+' → '));d.appendChild(mk(x.val))}
   else{if(x.who)d.appendChild(document.createTextNode(x.who+': '));var words=x.text.split(' ');words.forEach(function(w,i){var core=w.replace(/[“”",.]/g,'');if(core.length>=3&&!/^_+$/.test(core)&&(i%2===0||words.length<4))d.appendChild(mk(w,1));else d.appendChild(document.createTextNode(w));d.appendChild(document.createTextNode(' '))})}
   p.appendChild(d)})});
 function mk(a,word){var i=E('input',{type:'text',size:Math.max(4,a.length),autocapitalize:'characters',autocomplete:'off',spellcheck:'false'});i.dataset.a=a;inputs.push(i);return i}
 var res=E('div');body.appendChild(E('div',{class:'row'},[B('Check',function(){var ok=0;inputs.forEach(function(i){var g=close(i.value,i.dataset.a.replace(/[“”]/g,''));ok+=g;i.style.borderColor=g?'var(--ok)':'var(--bad)';i.title=i.dataset.a});res.innerHTML='<b>'+ok+'/'+inputs.length+'</b> correct'}),B('Show answers',function(){inputs.forEach(function(i){if(!close(i.value,i.dataset.a)){i.value=i.dataset.a.replace(/[“”]/g,'');i.style.borderColor='#ffd479'}})}),B('Clear',function(){go('fill')})]));body.appendChild(res)};
// 7 type whole
R.type=function(){var p=E('div',{class:'panel'});body.appendChild(p);var sel=E('select',{class:'btn'});cks.forEach(function(c,i){sel.appendChild(E('option',{value:i,text:c.title}))});
 var parts=[];sel.onchange=function(){};var ta=E('textarea',{placeholder:'Type the whole checklist/ditty from memory (items, settings, and calls). Line breaks and punctuation are ignored.',autocapitalize:'characters',spellcheck:'false'}),out=E('div',{class:'diff panel'});
 p.appendChild(sel);p.appendChild(ta);p.appendChild(E('div',{class:'row'},[B('Compare',cmp),B('Show card text',function(){out.innerHTML='<div class=small>'+units(cks[sel.value]).map(function(x){return esc(lineText(x))}).join('<br>')+'</div>'})]));p.appendChild(out);
 function toks(s){return norm(s.replace(/\.{2,}/g,' ')).split(' ').filter(function(w){return w&&!/^\d+$/.test(w)||/\d/.test(w)})}
 function cmp(){var c=cks[sel.value],ref=toks(units(c).map(function(x){return x.t==='item'?x.item+' '+x.set:x.t==='row'?x.key+' '+x.val:x.text}).join(' ')),got=toks(ta.value);
  var m=ref.length,n=got.length,L=[];for(var i=0;i<=m;i++){L[i]=new Array(n+1).fill(0)}for(i=m-1;i>=0;i--)for(var j=n-1;j>=0;j--)L[i][j]=ref[i]===got[j]?L[i+1][j+1]+1:Math.max(L[i+1][j],L[i][j+1]);
  var h=[],i2=0,j2=0;while(i2<m&&j2<n){if(ref[i2]===got[j2]){h.push('<span class=d-ok>'+esc(ref[i2])+'</span>');i2++;j2++}else if(L[i2+1][j2]>=L[i2][j2+1]){h.push('<span class=d-miss>'+esc(ref[i2])+'</span>');i2++}else{h.push('<span class=d-extra>'+esc(got[j2])+'</span>');j2++}}
  while(i2<m)h.push('<span class=d-miss>'+esc(ref[i2++])+'</span>');while(j2<n)h.push('<span class=d-extra>'+esc(got[j2++])+'</span>');
  out.innerHTML='<div><b>'+Math.round(100*L[0][0]/Math.max(1,m))+'%</b> of card words in order ('+L[0][0]+'/'+m+'). <span class=d-ok>green</span>=match · <span class=d-miss>red underline</span>=missing · <span class=d-extra>strike</span>=extra/wrong</div><p>'+h.join(' ')+'</p>'}};
// 8 image
R.img=function(){var show=true,wrap=E('div');body.appendChild(B('Hide/show image',function(){show=!show;wrap.style.display=show?'':'none'}));body.appendChild(wrap);
 cks.forEach(function(c){wrap.appendChild(E('div',{class:'panel'},[E('div',{class:'muted',text:c.title+' — crop of the approved card image'}),E('img',{class:'crop',src:'img/mem/'+c.id+'.png',alt:c.title,loading:'lazy'})]))})};
var h=(location.hash||'').slice(1);go(R[h]?h:'ref');
window.addEventListener('hashchange',function(){var h=(location.hash||'').slice(1);if(R[h]&&h!==cur)go(h)});
})();
