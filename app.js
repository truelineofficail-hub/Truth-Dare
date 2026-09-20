/* ================= PROMPT DATABASES ================= */
const TRUTH_SRC = {
Funny:[
"What's the silliest thing you've ever cried about?",
"What's the most embarrassing song on your playlist?",
"What's a food combination you love that other people find weird?",
"What's the funniest lie you've ever told?",
"Which cartoon character do you secretly relate to the most?",
"What's the strangest thing you've ever Googled?",
"What's your most ridiculous irrational fear?",
"What's the worst haircut you've ever had?",
"What nickname did you hate as a kid?",
"What's the dumbest thing you've done to impress someone?",
"If you had to eat one meal forever, what would it be?",
"What's the weirdest habit you have when you're alone?",
"What's a talent you have that is completely useless?",
"What's the funniest thing you've said in your sleep, or been told you said?",
"What's the most awkward thing that's happened to you in public?"],
Deep:[
"What's something you've never told anyone before?",
"What do you fear most about the future?",
"What moment in your life changed you the most?",
"What's something you wish people understood about you?",
"What's a regret you still think about?",
"When do you feel most like yourself?",
"What's a dream you gave up on, and do you miss it?",
"What's the kindest thing anyone has ever done for you?",
"What do you need more of in your life right now?",
"What's a belief you held years ago that you've completely changed?",
"What makes you feel truly safe with someone?",
"What's something you're still trying to forgive yourself for?",
"What does a perfect, ordinary day look like to you?",
"Who shaped who you are the most, and how?",
"What are you most proud of that almost nobody knows about?"],
Romantic:[
"When did you first realize you liked me?",
"What's your favorite memory of us?",
"What's one thing I do that makes you fall for me again?",
"Where would you take me if we could go anywhere tomorrow?",
"What song reminds you of us?",
"What's your idea of a perfect date night with me?",
"What was your first impression of me?",
"What small thing do I do that you secretly love?",
"When do you feel closest to me?",
"What's something you've always wanted to tell me?",
"How do you picture us a few years from now?",
"What's the most romantic thing you've ever imagined doing for me?",
"What's one thing about us you never want to change?",
"What moment made you feel most loved by me?",
"What's a tradition you'd like us to start together?"],
Flirty:[
"What's the first thing you noticed about me?",
"What's your favorite thing about the way I look?",
"What's the most attractive thing someone can do?",
"Have you ever had a dream about me?",
"Which outfit of mine do you like best?",
"Where's your favorite place to be kissed?",
"What's something I do that drives you a little crazy, in a good way?",
"What's your favorite way to be flirted with?",
"What's the boldest flirty thing you've ever done?",
"What would you whisper to me if nobody else was around?",
"What's your idea of the perfect kiss?",
"When was the last time you thought about me and smiled?",
"What's a pickup line that would actually work on you?",
"What's one thing you'd like me to do more often?",
"What's the most attractive thing about my personality?"],
Embarrassing:[
"What's your most embarrassing moment from school?",
"What's the most cringe thing you've ever posted online?",
"Have you ever been caught doing something you shouldn't have?",
"What's the most embarrassing thing in your camera roll?",
"What's the worst date you've ever been on?",
"What's a guilty pleasure you'd be embarrassed to admit?",
"What's the most awkward text you've sent to the wrong person?",
"When did you last trip or fall in front of people?",
"What embarrassing thing did you do when you had a crush on someone?",
"What's the most childish thing you still do?",
"What's the strangest rumor you've heard about yourself?",
"What's the most embarrassing thing you've done to get attention?",
"What's something you pretended to know about but didn't?",
"What's the cheesiest thing you've ever said to someone?",
"What's the most embarrassing thing you've ever worn?"],
Relationship:[
"What's one thing I could do to make you feel more supported?",
"What did you think would happen the first time we talked?",
"What's something you're still curious about when it comes to me?",
"What do you think is our strongest quality as a pair?",
"What's one thing we could improve together?",
"When do you feel most understood by me?",
"What's a small habit of mine you find endearing?",
"What's one fear you have about relationships?",
"What does trust look like to you?",
"What's a moment when I surprised you?",
"What's something you've been afraid to ask me?",
"How do you like to be comforted when you're upset?",
"What's your love language, and how can I speak it better?",
"What's a goal you'd love for us to achieve together?",
"What's something I've taught you?"],
Random:[
"If you could live in any era, which would it be?",
"What's your most-used emoji, and what does it say about you?",
"What superpower would you pick, and why?",
"What's the best gift you've ever received?",
"If you could have dinner with anyone, who would it be?",
"What's a smell that brings back memories?",
"What's the best advice you've ever gotten?",
"What's a place you've never been but feel drawn to?",
"What's one thing you'd do if you knew you couldn't fail?",
"What's your comfort movie?",
"If you had a free day and no responsibilities, what would you do?",
"What's a skill you wish you could learn overnight?",
"What's the best meal you've ever had?",
"What would your autobiography be called?",
"What's something small that always makes your day better?"]
};
const DARE_SRC = {
Funny:[
"Do your best impression of a celebrity until your partner guesses who it is.",
"Speak in an accent for the next three minutes.",
"Dance without music for 30 seconds.",
"Make up a short song about your partner, right now.",
"Try to lick your elbow.",
"Talk like a news anchor and report on your day.",
"Balance something on your head for 20 seconds.",
"Act out an animal until your partner guesses it.",
"Say the alphabet backwards as fast as you can.",
"Act out your last dream in mime.",
"Let your partner draw a tiny doodle on your hand.",
"Sing your favorite song using only the word “meow”.",
"Make the funniest face you can and hold it for 10 seconds.",
"Narrate the next thing you do like a nature documentary.",
"Make your partner laugh within 30 seconds, without touching them."],
Romantic:[
"Write a two-line love note and read it aloud.",
"Hold hands and look into each other's eyes for one minute.",
"Tell your partner three things you love about them.",
"Slow dance together for one song.",
"Recreate the moment you first met.",
"Give your partner a sincere compliment they rarely hear.",
"Say thank you for three specific things your partner did this week.",
"Plan a surprise date out loud, with all the details.",
"Whisper something you're grateful for into your partner's ear.",
"Share a favorite memory of you two and describe how it felt.",
"Make a small promise to your partner, and mean it.",
"Give your partner a long, warm hug without saying anything.",
"Tell your partner what you were thinking the first time you held hands.",
"Describe your partner using only three words, then explain each one.",
"Send your partner a sweet message right now, even though they're beside you."],
Cute:[
"Give your partner a forehead kiss.",
"Let your partner choose your next profile picture.",
"Do a little happy dance and finish with a high five.",
"Give your partner a new cute nickname.",
"Take a silly selfie together.",
"Hug your partner from behind for 20 seconds.",
"Talk in a baby voice for the rest of your turn.",
"Draw a small heart on your partner's hand.",
"Build a tiny gift out of anything nearby and give it to them.",
"Say “I'm so lucky” and explain why.",
"Give your partner a gentle shoulder squeeze.",
"Let your partner pick an emoji that describes you.",
"Make a pinky promise about something small.",
"Trade a small accessory with your partner for the rest of the game.",
"Give your partner your best puppy-eyes look and hold it."],
Flirty:[
"Give your partner a compliment with a wink.",
"Whisper your favorite thing about your partner's smile.",
"Trace a slow heart on your partner's palm.",
"Say something charming in your smoothest voice.",
"Give your partner a kiss on the cheek.",
"Look into their eyes without blinking or looking away for 20 seconds.",
"Tell your partner what you noticed about them the first time you met.",
"Deliver your best pickup line, fully committed.",
"Give a slow hand massage for one minute.",
"Send your partner a flirty text right now.",
"Lean in close and whisper something sweet.",
"Tell your partner which outfit of theirs you like most, and why.",
"Give your partner a playful smirk and hold it.",
"Say “come here” in the smoothest voice you can manage.",
"Compliment your partner three times in a row without repeating yourself."],
Wild:[
"Do ten jumping jacks while your partner counts.",
"Let your partner feed you a snack while your eyes are closed.",
"Let your partner style your hair however they like.",
"Take a photo in the funniest pose your partner picks.",
"Speak only in questions for the next two minutes.",
"Try to do a cartwheel, or the closest thing you can manage.",
"Shout something silly out of the nearest window.",
"Let your partner choose a song, then dance to it.",
"Do your best runway walk across the room.",
"Swap a piece of clothing with your partner for the rest of the game.",
"Say a tongue twister three times fast.",
"Close your eyes and guess an object your partner places in your hand.",
"Let your partner give you a silly makeover with whatever's nearby.",
"Hold a plank for as long as you can while your partner tells a story.",
"Text one harmless emoji to a random contact, and show your partner the reply."],
Couple:[
"Tell your partner one thing you'd like to do together this month.",
"Name five things you two have in common in 20 seconds.",
"Give your partner a shoulder rub for one minute.",
"Plan a snack you could make together in ten minutes.",
"Take a photo together that you'll keep as a memory.",
"Recreate a couple's pose from your favorite movie.",
"Describe your perfect lazy Sunday together.",
"Write a short bucket list of three trips you'd take together.",
"Tell your partner something you learned from them.",
"Plan your next date together in one minute.",
"Share a quiet hope you have for your relationship.",
"Play three quick rounds of “would you rather”.",
"Finish each other's sentences for the next minute.",
"Take ten slow, deep breaths together.",
"Pick a song that belongs to the two of you and hum it together."],
Random:[
"Text a friend “I'm thinking of you” right now.",
"Do your best impression of your partner.",
"Name as many countries as you can in 30 seconds.",
"Hum a song and let your partner guess it.",
"Tell a joke, and make it a good one.",
"Stand on one leg for 30 seconds.",
"Describe your day in exactly five words.",
"Show your partner the last photo you took and explain it.",
"Say the word “banana” in as many voices as you can.",
"Do a slow-motion replay of something you did earlier today.",
"Do a ten-second impersonation of a robot.",
"Give a one-minute motivational speech about anything.",
"Tell your partner three things you're looking forward to.",
"Pick a random object and sell it to your partner like an ad.",
"Ask your partner any question, then answer it yourself, honestly."]
};
const truths = []; for (const c in TRUTH_SRC) TRUTH_SRC[c].forEach(t => truths.push({cat:c, text:t}));
const dares  = []; for (const c in DARE_SRC)  DARE_SRC[c].forEach(t => dares.push({cat:c, text:t}));

/* ================= STATE ================= */
const KEY = 'truth-dare-v1';
const DEF = {names:['',''], settings:{sound:true, bg:'ocean', turns:10}, game:null, history:[], used:{truths:[], dares:[]}};
const BGS = [['ocean','Obsidian Shore'],['rain','Rainy Window'],['night','Night Sky'],['forest','Smoke'],['sunset','Moonlight'],['black','Minimal Black']];
let S = load();
if (!S.used || !Array.isArray(S.used.truths) || !Array.isArray(S.used.dares)) S.used = {truths:[], dares:[]};
function load(){
  try{
    const r = JSON.parse(localStorage.getItem(KEY));
    if (r) return {...JSON.parse(JSON.stringify(DEF)), ...r, settings:{...DEF.settings, ...(r.settings||{})}};
  }catch(e){}
  return JSON.parse(JSON.stringify(DEF));
}
function save(){ try{ localStorage.setItem(KEY, JSON.stringify(S)); }catch(e){} }

const ui = {screen:'splash', sel:String(S.settings.turns), custom:'', detail:null, from:null, choosing:false};
if (![5,10,20].includes(S.settings.turns)) { ui.sel='custom'; ui.custom=String(S.settings.turns); }
if (S.game && S.names[0] && S.names[1]) ui.screen = 'turn';

/* ================= HELPERS ================= */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const N = i => esc(S.names[i] || 'Player ' + (i+1));
let ac;
function beep(f=520, d=.14, v=.035){
  if (!S.settings.sound) return;
  try{
    ac = ac || new (window.AudioContext || window.webkitAudioContext)();
    const o = ac.createOscillator(), g = ac.createGain();
    o.type='sine'; o.frequency.value=f;
    g.gain.setValueAtTime(v, ac.currentTime); g.gain.exponentialRampToValueAtTime(.0001, ac.currentTime+d);
    o.connect(g); g.connect(ac.destination); o.start(); o.stop(ac.currentTime+d);
  }catch(e){}
}
function buzz(ms=14){ if (S.settings.sound && navigator.vibrate) try{ navigator.vibrate(ms); }catch(e){} }
let toastT;
function toast(m){ const t=$('#toast'); t.textContent=m; t.classList.add('show'); clearTimeout(toastT); toastT=setTimeout(()=>t.classList.remove('show'),1900); }
function confirmBox(title, msg, ok, cb){
  const m = $('#modal');
  m.innerHTML = `<div class="box glass"><h3>${title}</h3><p>${msg}</p><div class="acts"><button class="btn ghost" data-m="no">Cancel</button><button class="btn" data-m="yes">${ok}</button></div></div>`;
  m.style.display='flex';
  m.onclick = e => { const b = e.target.closest('[data-m]'); if (!b && e.target!==m) return; m.style.display='none'; if (b && b.dataset.m==='yes') cb(); };
}
function pick(list, used){
  let avail = list.map((_,i)=>i).filter(i=>!used.includes(i));
  if (!avail.length){ used.length = 0; avail = list.map((_,i)=>i); }
  const i = avail[Math.floor(Math.random()*avail.length)];
  used.push(i);
  return list[i];
}
const fmtDate = ts => new Date(ts).toLocaleDateString(undefined,{month:'short',day:'numeric'});

/* ================= ICONS ================= */
const sv = (p, s=22) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
const ic = {
  back: sv('<path d="M15 5l-7 7 7 7"/>'),
  gear: sv('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z"/>',20),
  heart: sv('<path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z"/>',44),
  user: sv('<circle cx="12" cy="8" r="3.6"/><path d="M5 20c.8-3.6 3.8-5.4 7-5.4s6.2 1.8 7 5.4"/>'),
  star: sv('<path d="M12 3l1.9 5.6L19.5 10l-4.6 3.4 1.7 5.6L12 15.6 7.4 19l1.7-5.6L4.5 10l5.6-1.4z"/>'),
  spark: sv('<path d="M12 3v18M3 12h18M6 6l12 12M18 6L6 18" opacity=".35"/><path d="M12 5c.6 4.4 2.6 6.4 7 7-4.4.6-6.4 2.6-7 7-.6-4.4-2.6-6.4-7-7 4.4-.6 6.4-2.6 7-7z"/>',30),
  game: sv('<rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="9" cy="9" r=".8"/><circle cx="15" cy="15" r=".8"/><circle cx="12" cy="12" r=".8"/>'),
  clock: sv('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>'),
  bars: sv('<path d="M6 20V11M12 20V5M18 20v-6"/>'),
  chev: sv('<path d="M9 5l7 7-7 7"/>',18),
  arrow: sv('<path d="M5 12h14M13 6l6 6-6 6"/>',18),
  sound: sv('<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16.5 8.5a5 5 0 010 7"/>'),
  palette: sv('<path d="M12 3a9 9 0 100 18c1.2 0 1.8-.9 1.4-1.9-.4-1 .2-2.1 1.3-2.1H17a4 4 0 004-4c0-5-4-10-9-10z"/><circle cx="8" cy="11" r=".8"/><circle cx="12" cy="7.5" r=".8"/><circle cx="16" cy="11" r=".8"/>'),
  reset: sv('<path d="M4 12a8 8 0 108-8 8 8 0 00-6 2.7L4 9"/><path d="M4 4v5h5"/>'),
  book: sv('<path d="M5 4h11a3 3 0 013 3v13H8a3 3 0 01-3-3z"/><path d="M5 17a3 3 0 013-3h11"/>'),
  info: sv('<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5M12 8v.01"/>'),
  edit: sv('<path d="M4 20h4L19 9a2.8 2.8 0 00-4-4L4 16z"/>'),
  hash: sv('<path d="M5 9h14M5 15h14M10 4L8 20M16 4l-2 16"/>'),
  lock: sv('<rect x="5" y="11" width="14" height="9" rx="3"/><path d="M8 11V8a4 4 0 018 0v3"/>'),
  offline: sv('<path d="M3 3l18 18"/><path d="M8.5 16.5a5 5 0 017 0M5 12.6a10 10 0 013-2M12 20v.01M19 12.6a10 10 0 00-6.5-3.5"/>'),
};

ic.heartS = ic.heart.replace('width="44" height="44"','width="26" height="26"');
const strip = p => `<div class="strip">${[0,1].map(i=>`<span class="pl ${i===p?'on':''}"><i></i>${N(i)}</span>`).join('')}</div>`;

/* ================= LAYOUT PIECES ================= */
function bar({back, title, serif, gear, act}){
  const l = back ? `<button class="ib" data-act="${act||'go'}" data-v="${back}" aria-label="Back">${ic.back}</button>` : '';
  const r = gear ? `<button class="ib" data-act="go" data-v="settings" aria-label="Settings">${ic.gear}</button>` : '';
  return `<div class="bar"><div>${l}</div><div class="bt ${serif?'s':''}">${title||''}</div><div>${r}</div></div>`;
}
function navHTML(sc){
  const on = {home:'home',gsetup:'home',history:'history',detail:'history',stats:'stats'}[sc];
  return [['home','Game',ic.game],['history','History',ic.clock],['stats','Stats',ic.bars]]
    .map(([v,l,i]) => `<button data-act="go" data-v="${v}" class="${on===v?'on':''}">${i}<span>${l}</span></button>`).join('');
}
function chipsHTML(){
  const c = v => `<button class="chip glass ${ui.sel===v?'on':''}" data-act="chip" data-v="${v}"><b>${v==='custom'?'Custom':v}</b><small>${v==='custom'?'your number':'turns'}</small></button>`;
  return `<div class="chips">${c('5')}${c('10')}${c('20')}${c('custom')}</div>` +
    (ui.sel==='custom' ? `<div class="custom glass"><input id="customN" type="number" inputmode="numeric" min="1" max="100" placeholder="1 – 100" value="${esc(ui.custom)}" aria-label="Custom number of turns"><span>turns</span></div>` : '');
}
function chosenTurns(){
  const n = ui.sel==='custom' ? parseInt(ui.custom,10) : parseInt(ui.sel,10);
  return (n>=1 && n<=100) ? n : null;
}
const curPlayer = g => (g.turn-1) % 2;

/* ================= SCREENS ================= */
const screens = {
splash(){
  return {top:'', nav:false, body:`
  <div class="splash" data-act="start">
    <div class="spacer"></div>
    <h1 class="metal mini">TRUTH<span>×</span>DARE</h1>
    <div class="spacer"></div>
    <button class="btn" data-act="start">Tap to start ${ic.arrow}</button>
  </div>`};
},
names(){
  return {top: bar({back: ui.from==='settings' ? 'settings' : null}), nav:false, body:`
  <div class="center" style="margin-top:10px"><h1 class="serif ttl">Enter Player Names</h1><p class="sub">Two people. One game.</p></div>
  <div class="field glass" style="margin-top:34px"><span class="av">${ic.user}</span><div style="flex:1"><label for="n1">Player 1</label><input id="n1" maxlength="14" placeholder="Name" value="${esc(S.names[0])}" autocomplete="off"></div></div>
  <div class="field glass"><span class="av">${ic.user}</span><div style="flex:1"><label for="n2">Player 2</label><input id="n2" maxlength="14" placeholder="Name" value="${esc(S.names[1])}" autocomplete="off"></div></div>
  <div class="spacer"></div>
  <button class="btn" data-act="saveNames">Continue ${ic.arrow}</button>`};
},
home(){
  const g = S.game, resume = g && g.phase !== 'complete';
  return {top: bar({gear:true}), nav:true, body:`
  <div class="hero" style="margin-top:18px"><div class="mk">${ic.heartS}</div><h1 class="serif hello">Hey,<br>${N(0)} &amp; ${N(1)}</h1><p class="sub" style="font-size:16px;margin-top:14px">Ready for some fun?</p></div>
  <div class="spacer"></div>
  ${resume?`<div class="resume glass"><i></i><span>Game in progress · <b>Turn ${g.turn} of ${g.total}</b></span></div>`:''}
  <button class="btn" data-act="${resume?'resume':'go'}" data-v="gsetup">${resume?'Resume Game':'Start Game'} ${ic.arrow}</button>
  ${resume?`<button class="link" data-act="go" data-v="gsetup">Start a new game</button>`:''}
  <div class="pills">
    <button class="pill glass" data-act="go" data-v="history">History</button>
    <button class="pill glass" data-act="go" data-v="stats">Stats</button>
    <button class="pill glass" data-act="go" data-v="settings">Settings</button>
  </div>`};
},
gsetup(){
  return {top: bar({back:'home', title:'New game'}), nav:true, body:`
  <div class="center" style="margin-top:8px"><h1 class="serif ttl">Number of Turns</h1><p class="sub">One turn is one player, one prompt.</p></div>
  ${chipsHTML()}
  <p class="note">${N(0)} goes first, then you take turns.</p>
  <div class="spacer"></div>
  <button class="btn" data-act="startGame">Start Game ${ic.arrow}</button>`};
},
turnsset(){
  return {top: bar({back:'settings', title:'Turns'}), nav:false, body:`
  <div class="center" style="margin-top:8px"><h1 class="serif ttl">Number of Turns</h1><p class="sub">Used for your next game.</p></div>
  ${chipsHTML()}
  <div class="spacer"></div>
  <button class="btn" data-act="saveTurns">Save</button>`};
},
turn(){
  const g = S.game;
  if (!g) { ui.screen='home'; return screens.home(); }
  if (g.phase === 'complete') return screens.complete();
  const p = curPlayer(g), name = N(p);
  const top = bar({back:'leave', act:'leave', title:`Turn ${g.turn} / ${g.total}`}) + `<div class="prog"><i style="transform:scaleX(${(g.turn-1)/g.total})"></i></div>`;

  if (ui.choosing) return {top, nav:false, body:`
    <div class="spacer"></div>
    <div class="center">
      <div class="shuf"><div class="ring"></div><div class="c c1 glass">${ic.user}</div><div class="c c2 glass">${ic.star}</div></div>
      <div class="word" id="shufWord">·</div>
      <p class="muted" style="margin-top:6px;font-size:14px">Choosing...</p>
    </div>
    <div class="spacer"></div>`};

  if (g.phase === 'ready') return {top, nav:false, body:`
    <div class="spacer"></div>
    <div class="center">
      ${strip(p)}
      <div style="height:30px"></div>
      <div class="avatar">${esc((S.names[p]||'?').trim().charAt(0).toUpperCase())}</div>
      <h2 class="serif big">${name}'s turn</h2>
      <p class="sub" style="margin-top:12px">Pass the phone to ${name}</p>
    </div>
    <div class="spacer"></div>
    <button class="reveal" data-act="reveal">REVEAL</button>
    <div style="height:8px"></div>`};

  if (g.phase === 'typed') {
    const t = g.type === 'truth';
    return {top, nav:false, body:`
    <div class="spacer"></div>
    <div class="pcard ${g.type} tap" data-act="showPrompt" role="button" tabindex="0">
      <div class="spark">${ic.spark}</div>
      <div class="who">${name}</div>
      <h2 class="serif">${t?'Truth':'Dare'}</h2>
      <hr>
      <p class="hint">Tap to reveal your ${t?'question':'challenge'}</p>
    </div>
    <div class="spacer"></div>`};
  }

  if (g.phase === 'prompt') {
    const t = g.type === 'truth';
    return {top, nav:false, body:`
    <div class="spacer"></div>
    <div class="pcard ${g.type}">
      <div class="who">${name}</div>
      <h2 class="serif" style="font-size:28px">${t?'Truth':'Dare'}</h2>
      <hr>
      <p class="ptext">${esc(g.prompt.text)}</p>
      <div class="cat">${esc(g.prompt.cat)}</div>
    </div>
    <div class="spacer"></div>
    <button class="btn" data-act="done">Done ${ic.arrow}</button>`};
  }

  if (g.phase === 'pass') {
    const nx = N(curPlayer(g));
    return {top, nav:false, body:`
    <div class="spacer"></div>
    <div class="center">
      <p class="muted" style="font-size:13px;letter-spacing:.2em;margin:0 0 18px">TURN COMPLETE</p>
      <h2 class="serif big" style="font-size:34px">Your turn is over.</h2>
      <p class="sub" style="margin-top:16px;font-size:16px">Pass the phone to ${nx}.</p>
    </div>
    <div class="spacer"></div>
    <button class="btn" data-act="ready">I'm ready ${ic.arrow}</button>`};
  }
  return {top, nav:false, body:''};
},
complete(){
  const g = S.game, mine = S.history.filter(h => h.gid === g.id);
  const t = mine.filter(h => h.type==='truth').length, d = mine.length - t;
  return {top:'', nav:false, body:`
  <div class="spacer"></div>
  <div class="center">
    <div style="color:var(--ink2);margin-bottom:22px">${ic.heart}</div>
    <p class="muted" style="font-size:13px;letter-spacing:.3em;margin:0 0 14px">GAME COMPLETE</p>
    <h1 class="serif big" style="font-size:34px">${mine.length} turns together.</h1>
  </div>
  <div class="grid2" style="margin-top:34px">
    <div class="stat glass"><b>${t}</b><small>Truths</small></div>
    <div class="stat glass"><b>${d}</b><small>Dares</small></div>
  </div>
  <div class="spacer"></div>
  <button class="btn" data-act="again">Play Again</button>
  <div style="height:10px"></div>
  <button class="btn ghost" data-act="homeAfter">Back Home</button>`};
},
history(){
  const list = [...S.history].reverse();
  let body = `<div class="center" style="margin-top:2px"><h1 class="serif ttl" style="font-size:26px">Game History</h1></div>`;
  if (!list.length) body += `<div class="empty">No turns yet.<br>Every truth and dare you complete will be kept here.</div>`;
  else {
    let lastG = null, html = '';
    list.forEach(h => {
      if (h.gid !== lastG){ html += `<div class="divl">${fmtDate(h.gid)}</div>`; lastG = h.gid; }
      const i = S.history.indexOf(h);
      html += `<button class="row glass hrow" data-act="detail" data-v="${i}"><div class="rt"><b>Turn ${h.turn}</b><small class="${h.type==='truth'?'t':'d'}">${esc(h.name)} · ${h.type==='truth'?'Truth':'Dare'}</small></div><span class="ch">${ic.chev}</span></button>`;
    });
    body += `<div class="list" style="margin-top:6px">${html}</div>`;
  }
  return {top: bar({back:'home'}), nav:true, body};
},
detail(){
  const h = S.history[ui.detail];
  if (!h){ ui.screen='history'; return screens.history(); }
  return {top: bar({back:'history', title:`Turn ${h.turn}`}), nav:true, body:`
  <div class="spacer"></div>
  <div class="pcard ${h.type}">
    <div class="who">${esc(h.name)}</div>
    <h2 class="serif" style="font-size:28px">${h.type==='truth'?'Truth':'Dare'}</h2>
    <hr>
    <p class="ptext" style="animation:none">${esc(h.text)}</p>
    <div class="cat">${esc(h.cat)} · ${fmtDate(h.ts)}</div>
  </div>
  <div class="spacer"></div>`};
},
stats(){
  const H = S.history, t = H.filter(h=>h.type==='truth').length, d = H.length - t;
  const p1 = H.filter(h=>h.player===0).length, p2 = H.filter(h=>h.player===1).length;
  return {top: bar({back:'home', title:'Your Stats', serif:true}), nav:true, body:`
  <div class="grid2" style="margin-top:14px">
    <div class="stat wide glass"><b>${H.length}</b><small>Total Turns</small></div>
    <div class="stat glass"><b>${t}</b><small>Truths</small></div>
    <div class="stat glass"><b>${d}</b><small>Dares</small></div>
    <div class="stat glass"><b>${p1}</b><small>${N(0)}</small></div>
    <div class="stat glass"><b>${p2}</b><small>${N(1)}</small></div>
  </div>
  <p class="note" style="margin-top:26px">Good things happen when two people play together.</p>`};
},
settings(){
  const row = (ic_, t, s, act, v, right) => `<button class="row glass" data-act="${act}" ${v!==undefined?`data-v="${v}"`:''}><span class="ri">${ic_}</span><span class="rt"><b>${t}</b>${s?`<small>${s}</small>`:''}</span>${right===undefined?`<span class="ch">${ic.chev}</span>`:right}</button>`;
  return {top: bar({back:'home', title:'Settings', serif:true}), nav:false, body:`
  <div class="sec">GAME</div>
  <div class="list" style="margin-top:8px">
    ${row(ic.edit,'Change Player Names',`${N(0)} &amp; ${N(1)}`,'editNames')}
    ${row(ic.hash,'Number of Turns',`${S.settings.turns} turns`,'turnsSet')}
    ${row(ic.sound,'Sound &amp; Vibration',S.settings.sound?'On':'Off','sound','',`<span class="sw ${S.settings.sound?'on':''}"></span>`)}
    ${row(ic.palette,'Background',BGS.find(b=>b[0]===S.settings.bg)[1],'go','bgs')}
    ${row(ic.reset,'Reset Game',`${truths.length-S.used.truths.length} truths and ${dares.length-S.used.dares.length} dares still unseen`,'reset')}
  </div>
  <div class="sec">ABOUT</div>
  <div class="list" style="margin-top:8px">
    ${row(ic.book,'How to Play','','go','howto')}
    ${row(ic.info,'About','Version 1.0.0','go','about')}
  </div>`};
},
howto(){
  const st = [['Enter your names','Add both players.'],['Choose the turns','5, 10, 20, or your own number.'],['Pass the phone','Only the player whose turn it is looks.'],['Tap Reveal','Truth or Dare is picked at random, every turn.'],['Read, do, tap Done','Then pass the phone to the other player.']];
  return {top: bar({back:'settings', title:'How to Play', serif:true}), nav:false, body:`
  <div style="margin-top:14px">${st.map((s,i)=>`<div class="step"><i>${i+1}</i><div><b>${s[0]}</b><small>${s[1]}</small></div></div>`).join('')}</div>
  <div class="spacer"></div>
  <button class="btn" data-act="go" data-v="settings">Got it ${ic.arrow}</button>`};
},
about(){
  const it = (i,t)=>`<div class="step" style="align-items:center"><span class="muted" style="width:32px;display:grid;place-items:center">${i}</span><small style="font-size:14px;color:var(--ink2)">${t}</small></div>`;
  return {top: bar({back:'settings'}), nav:false, body:`
  <div class="center" style="margin-top:20px;color:var(--ink2)">${ic.heart}<h1 class="serif ttl" style="color:var(--ink);margin-top:16px">Truth × Dare</h1><p class="sub" style="font-size:12px">Version 1.0.0</p><p class="sub" style="margin-top:20px">Two hearts. One game.</p></div>
  <div style="margin-top:34px">
    ${it(ic.offline,'No internet needed to play')}
    ${it(ic.lock,'Your data stays on your device')}
    ${it(ic.heart.replace('width="44" height="44"','width="20" height="20"'),'No winner. No loser. Just a shared game.')}
  </div>
  <div class="spacer"></div>
  <p class="center muted serif" style="font-style:italic;font-size:17px;margin:0 0 14px">Play. Laugh. Repeat.</p>`};
},
bgs(){
  return {top: bar({back:'settings', title:'Background', serif:true}), nav:false, body:`
  <p class="sub" style="margin-top:10px">Choose your vibe.</p>
  <div class="bgs">${BGS.map(([k,n])=>`<button class="tile ${S.settings.bg===k?'on':''}" data-act="bg" data-v="${k}" aria-label="${n}"><div class="scene s-${k}"></div><span>${n}</span></button>`).join('')}</div>`};
}
};

/* ================= RENDER ================= */
function render(anim=true){
  const r = screens[ui.screen]();
  $('#top').innerHTML = r.top || '';
  const sc = $('#screen'); sc.innerHTML = r.body;
  const nv = $('#nav'); nv.style.display = r.nav ? 'flex' : 'none'; nv.innerHTML = r.nav ? navHTML(ui.screen) : '';
  if (anim){ sc.classList.remove('enter'); void sc.offsetWidth; sc.classList.add('enter'); sc.scrollTop = 0; }
  $('#scene').className = 'scene s-' + S.settings.bg;
  document.body.classList.toggle('plain', ui.screen==='splash');
}
function go(s){ ui.screen = s; if (s==='gsetup'){ const n=S.settings.turns; ui.sel=[5,10,20].includes(n)?String(n):'custom'; ui.custom=String(n); } render(); }

/* ================= GAME LOGIC ================= */
function startGame(total){
  S.settings.turns = total;
  S.game = {id:Date.now(), total, turn:1, phase:'ready', type:null, prompt:null};
  save(); ui.screen='turn'; render();
}
function reveal(){
  const g = S.game;
  if (!g || g.phase!=='ready' || ui.choosing) return;
  /* random type, decided independently for this turn only */
  const type = Math.random() < 0.5 ? 'truth' : 'dare';
  ui.choosing = true; buzz(); beep(420); render(false);
  const seq = []; const n = 10;
  for (let i=0;i<n;i++) seq.unshift(i%2===0 ? type : (type==='truth'?'dare':'truth'));
  let i = 0; const w = $('#shufWord');
  const tick = () => {
    if (i < seq.length){ w.textContent = seq[i].toUpperCase(); i++; beep(300+i*22,.05,.012); setTimeout(tick, 80); }
    else setTimeout(() => {
      ui.choosing = false; g.type = type; g.phase = 'typed'; save(); buzz(20); beep(640,.2,.04); render();
    }, 180);
  };
  tick();
}
function showPrompt(){
  const g = S.game;
  if (!g || g.phase!=='typed') return;
  g.prompt = g.type==='truth' ? pick(truths, S.used.truths) : pick(dares, S.used.dares);
  g.phase = 'prompt'; save(); buzz(); beep(560,.16); render();
}
function done(){
  const g = S.game;
  if (!g || g.phase!=='prompt') return;
  const p = curPlayer(g);
  S.history.push({gid:g.id, turn:g.turn, player:p, name:S.names[p], type:g.type, cat:g.prompt.cat, text:g.prompt.text, ts:Date.now()});
  g.type = null; g.prompt = null;
  if (g.turn >= g.total) g.phase = 'complete';
  else { g.turn++; g.phase = 'pass'; }   /* next player's type is NOT chosen yet */
  save(); buzz(); beep(480,.18); render();
}

/* ================= EVENTS ================= */
const act = {
  start(){ go(S.names[0] && S.names[1] ? 'home' : 'names'); },
  go(t){ go(t.dataset.v); },
  saveNames(){
    const a = $('#n1').value.trim(), b = $('#n2').value.trim();
    if (!a || !b){ toast('Add both names to continue'); const f=$('.field'); f.classList.remove('shake'); void f.offsetWidth; f.classList.add('shake'); return; }
    S.names = [a,b]; save(); const back = ui.from; ui.from = null; go(back || 'home');
  },
  editNames(){ ui.from='settings'; go('names'); },
  turnsSet(){ go('turnsset'); },
  chip(t){ ui.sel = t.dataset.v; render(false); const c=$('#customN'); if (c) c.focus(); },
  startGame(){ const n = chosenTurns(); if (!n) return toast('Choose 1 to 100 turns'); startGame(n); },
  saveTurns(){ const n = chosenTurns(); if (!n) return toast('Choose 1 to 100 turns'); S.settings.turns = n; save(); toast('Saved'); go('settings'); },
  resume(){ ui.screen='turn'; render(); },
  reveal, showPrompt, done,
  ready(){ const g=S.game; if (g && g.phase==='pass'){ g.phase='ready'; save(); render(); } },
  leave(){ if (ui.choosing) return; confirmBox('Leave game?','Your progress is saved. You can resume from Home.','Leave',()=>{ go('home'); }); },
  again(){ startGame(S.game ? S.game.total : S.settings.turns); },
  homeAfter(){ S.game = null; save(); go('home'); },
  detail(t){ ui.detail = parseInt(t.dataset.v,10); go('detail'); },
  sound(){ S.settings.sound = !S.settings.sound; save(); render(false); if (S.settings.sound){ buzz(); beep(); } },
  bg(t){ S.settings.bg = t.dataset.v; save(); render(false); },
  reset(){ confirmBox('Reset everything?','This clears the current game, history and stats. Prompts you have already seen will not come back.','Reset',()=>{ S.game=null; S.history=[]; save(); toast('Game reset'); render(false); }); }
};
document.addEventListener('click', e => {
  const t = e.target.closest('[data-act]');
  if (t && act[t.dataset.act]) act[t.dataset.act](t);
});
document.addEventListener('keydown', e => {
  if ((e.key==='Enter'||e.key===' ') && e.target.matches('.pcard.tap')){ e.preventDefault(); showPrompt(); }
  if (e.key==='Enter' && e.target.matches('#n1')) $('#n2').focus();
  if (e.key==='Enter' && e.target.matches('#n2')) act.saveNames();
});
document.addEventListener('input', e => { if (e.target.id==='customN') ui.custom = e.target.value; });

render();

/* ================= OFFLINE (service worker) ================= */
if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

