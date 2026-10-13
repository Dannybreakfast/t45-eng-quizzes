/* KNQI plate currency + refresh check (static site). */
(function(){
  var REPO="Dannybreakfast/t45-eng-quizzes";
  var ACTIONS="https://github.com/"+REPO+"/actions/workflows/knqi-plates.yml";
  var DTPP="https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/dtpp/search/results/?ident=NQI";
  function parseEd(s){ // "0901Z  10/01/26"
    var m=/(\d{2})(\d{2})Z\s+(\d{2})\/(\d{2})\/(\d{2})/.exec(s||""); if(!m) return null;
    return new Date(Date.UTC(2000+ +m[5], +m[3]-1, +m[4], +m[1], +m[2]));
  }
  function airac(d){ // 28-day cycle; 2601 effective 2026-01-22 0901Z
    var ref=Date.UTC(2026,0,22,9,1), k=Math.floor((d-ref)/(28*864e5));
    var eff=new Date(ref+k*28*864e5), y=eff.getUTCFullYear();
    var n=Math.floor((eff-Date.UTC(y,0,1))/(28*864e5))+1;
    return {id:String(y%100).padStart(2,"0")+String(n).padStart(2,"0"), eff:eff, exp:new Date(eff.getTime()+28*864e5)};
  }
  function fmt(d){return d.toLocaleDateString(undefined,{day:"2-digit",month:"short",year:"numeric",timeZone:"UTC"});}
  var base=document.currentScript.getAttribute("data-base")||"";
  window.KNQI={airac:airac};
  function render(m){
    var box=document.getElementById("knqi-currency"); if(!box) return;
    var pid=box.getAttribute("data-plate"), now=new Date();
    var eff=parseEd(m.effective), exp=parseEd(m.expires);
    var cur= eff && exp && now>=eff && now<exp;
    var p= pid && m.plates[pid];
    var h="<span class='cyc'>d-TPP cycle <b>"+m.cycle+"</b> · effective "+(eff?fmt(eff):m.effective)+" → expires "+(exp?fmt(exp):m.expires)+" (0901Z)</span> "+
      (cur?"<span class='badge ok'>CURRENT</span>":(eff&&now<eff?"<span class='badge warn'>NOT YET EFFECTIVE — starts "+fmt(eff)+"</span>":"<span class='badge bad'>EXPIRED</span>"));
    if(p && p.changed) h+=" <span class='badge warn'>CHART CHANGED since questions were written (cycle "+p.baseline_cycle+") — review answers against the plate</span>";
    if(p && p.missing) h+=" <span class='badge bad'>No longer listed in d-TPP</span>";
    if(!pid){
      var ch=Object.keys(m.plates).filter(function(k){return m.plates[k].changed;});
      if(ch.length) h+=" <span class='badge warn'>"+ch.length+" plate(s) changed since quiz was written: "+ch.join(", ")+"</span>";
      if(m.unquizzed_new_charts && m.unquizzed_new_charts.length) h+=" <span class='badge warn'>New chart(s) not yet quizzed: "+m.unquizzed_new_charts.join("; ")+"</span>";
    }
    h+="<div class='chk'><button id='knqi-refresh' type='button'>Refresh / check for new plates</button> <span id='knqi-refresh-out'></span>"+
       "<div class='small'>Manifest checked "+(m.checked_utc||"?")+" · <a href='"+ACTIONS+"' target='_blank' rel='noopener'>Run plate-update workflow (GitHub Actions)</a> · <a href='"+DTPP+"' target='_blank' rel='noopener'>FAA d-TPP: NQI</a></div></div>";
    box.innerHTML=h;
    document.getElementById("knqi-refresh").onclick=function(){
      var out=document.getElementById("knqi-refresh-out"); out.textContent="checking…";
      fetch(base+"plates-manifest.json?ts="+Date.now(),{cache:"no-store"}).then(function(r){return r.json();}).then(function(m2){
        var a=airac(new Date());
        if(m2.cycle!==m.cycle){ out.innerHTML="Manifest was updated to cycle "+m2.cycle+" — <a href='javascript:location.reload()'>reload page</a>."; return; }
        if(m2.cycle>a.id) out.innerHTML="<b class='badt'>This site already has the next cycle</b> ("+m2.cycle+"); the current cycle is "+a.id+" until "+fmt(a.exp)+".";
        else if(a.id===m2.cycle) out.innerHTML="<b class='okt'>Up to date</b> — cycle "+a.id+" ("+fmt(a.eff)+"–"+fmt(a.exp)+") is what this site has.";
        else out.innerHTML="<b class='badt'>A new cycle is out:</b> "+a.id+" (effective "+fmt(a.eff)+"). Site has "+m2.cycle+". <a href='"+DTPP+"' target='_blank' rel='noopener'>Open FAA d-TPP for NQI</a> or <a href='"+ACTIONS+"' target='_blank' rel='noopener'>run the update workflow</a> (Run workflow button).";
      }).catch(function(e){out.textContent="Could not load manifest: "+e;});
    };
  }
  fetch(base+"plates-manifest.json",{cache:"no-cache"}).then(function(r){return r.json();}).then(render).catch(function(){});
})();
