'use strict';
const fs = require('fs');
const path = require('path');

// Files to fix: root + all language variants for each game
const files = [
  // memory-game
  'memory-game.html',
  'ar/memory-game/index.html',
  'de/memory-game/index.html',
  'es/memory-game/index.html',
  'fr/memory-game/index.html',
  'ru/memory-game/index.html',
  // quick-math
  'quick-math.html',
  'ar/quick-math/index.html',
  'de/quick-math/index.html',
  'es/quick-math/index.html',
  'fr/quick-math/index.html',
  'ru/quick-math/index.html',
  // reaction-test
  'reaction-test.html',
  'ar/reaction-test/index.html',
  'de/reaction-test/index.html',
  'es/reaction-test/index.html',
  'fr/reaction-test/index.html',
  'ru/reaction-test/index.html',
];

// Patterns to replace — note each game has different render fn names and translation objects
const patches = [
  // ─── memory-game (root) ───────────────────────────────────────────
  {
    old: `document.addEventListener('DOMContentLoaded',()=>{
  currentLang=document.documentElement.lang||'en';if(!MT[currentLang])currentLang='en';
  const origSet=window.setLang;
  window.setLang=function(lang){origSet&&origSet(lang);currentLang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';renderLevelUI();updateStats();renderLb();};
  window.onLangChange=function(lang){currentLang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';renderLevelUI();updateStats();renderLb();};
  startLevel(0);`,
    new: `const _PAGE_LANG=document.documentElement.lang||'en';let _bypassLang=false;
document.addEventListener('DOMContentLoaded',()=>{
  currentLang=_PAGE_LANG;if(!MT[currentLang])currentLang='en';
  const origSet=window.setLang;
  window.setLang=function(lang){_bypassLang=true;origSet&&origSet(lang);_bypassLang=false;currentLang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';renderLevelUI();updateStats();renderLb();};
  window.onLangChange=function(lang){if(!_bypassLang&&lang!==_PAGE_LANG)return;currentLang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';renderLevelUI();updateStats();renderLb();};
  startLevel(0);`
  },
  // ─── memory-game (language variants — no currentLang= inside DOMContentLoaded) ──
  {
    old: `function jumpToLevel(i){startLevel(i);}
document.addEventListener('DOMContentLoaded',()=>{
  const origSet=window.setLang;
  window.setLang=function(lang){origSet&&origSet(lang);currentLang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';renderLevelUI();updateStats();renderLb();};
  window.onLangChange=function(lang){currentLang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';renderLevelUI();updateStats();renderLb();};
  startLevel(0);`,
    new: `function jumpToLevel(i){startLevel(i);}
const _PAGE_LANG=document.documentElement.lang||'en';let _bypassLang=false;
document.addEventListener('DOMContentLoaded',()=>{
  const origSet=window.setLang;
  window.setLang=function(lang){_bypassLang=true;origSet&&origSet(lang);_bypassLang=false;currentLang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';renderLevelUI();updateStats();renderLb();};
  window.onLangChange=function(lang){if(!_bypassLang&&lang!==_PAGE_LANG)return;currentLang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';renderLevelUI();updateStats();renderLb();};
  startLevel(0);`
  },
  // ─── quick-math (root) ───────────────────────────────────────────
  {
    old: `document.addEventListener('DOMContentLoaded',()=>{
  currentLang=document.documentElement.lang||'en';if(!QT[currentLang])currentLang='en';
  const origSet=window.setLang;
  window.setLang=function(lang){origSet&&origSet(lang);currentLang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';updateText();};
  window.onLangChange=function(lang){currentLang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';updateText();};`,
    new: `const _PAGE_LANG=document.documentElement.lang||'en';let _bypassLang=false;
document.addEventListener('DOMContentLoaded',()=>{
  currentLang=_PAGE_LANG;if(!QT[currentLang])currentLang='en';
  const origSet=window.setLang;
  window.setLang=function(lang){_bypassLang=true;origSet&&origSet(lang);_bypassLang=false;currentLang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';updateText();};
  window.onLangChange=function(lang){if(!_bypassLang&&lang!==_PAGE_LANG)return;currentLang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';updateText();};`
  },
  // ─── quick-math (language variants) ─────────────────────────────
  {
    old: `  const origSet=window.setLang;
  window.setLang=function(lang){origSet&&origSet(lang);currentLang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';updateText();};
  window.onLangChange=function(lang){currentLang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';updateText();};
  // Pause timer when tab is hidden, resume when visible`,
    new: `  const origSet=window.setLang;
  window.setLang=function(lang){_bypassLang=true;origSet&&origSet(lang);_bypassLang=false;currentLang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';updateText();};
  window.onLangChange=function(lang){if(!_bypassLang&&lang!==_PAGE_LANG)return;currentLang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';updateText();};
  // Pause timer when tab is hidden, resume when visible`
  },
  // ─── reaction-test (root) ────────────────────────────────────────
  {
    old: `document.addEventListener('DOMContentLoaded',()=>{
  currentLang=document.documentElement.lang||'en';if(!RT[currentLang])currentLang='en';
  const origSet=window.setLang;
  window.setLang=function(lang){origSet&&origSet(lang);currentLang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';renderLevelUI();renderLb();};
  window.onLangChange=function(lang){currentLang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';renderLevelUI();renderLb();};`,
    new: `const _PAGE_LANG=document.documentElement.lang||'en';let _bypassLang=false;
document.addEventListener('DOMContentLoaded',()=>{
  currentLang=_PAGE_LANG;if(!RT[currentLang])currentLang='en';
  const origSet=window.setLang;
  window.setLang=function(lang){_bypassLang=true;origSet&&origSet(lang);_bypassLang=false;currentLang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';renderLevelUI();renderLb();};
  window.onLangChange=function(lang){if(!_bypassLang&&lang!==_PAGE_LANG)return;currentLang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';renderLevelUI();renderLb();};`
  },
  // ─── reaction-test (language variants) ──────────────────────────
  {
    old: `  const origSet=window.setLang;
  window.setLang=function(lang){origSet&&origSet(lang);currentLang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';renderLevelUI();renderLb();};
  window.onLangChange=function(lang){currentLang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';renderLevelUI();renderLb();};
  // Clear pending timers when tab hides to avoid ghost clicks/misses`,
    new: `  const origSet=window.setLang;
  window.setLang=function(lang){_bypassLang=true;origSet&&origSet(lang);_bypassLang=false;currentLang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';renderLevelUI();renderLb();};
  window.onLangChange=function(lang){if(!_bypassLang&&lang!==_PAGE_LANG)return;currentLang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';renderLevelUI();renderLb();};
  // Clear pending timers when tab hides to avoid ghost clicks/misses`
  },
];

let totalFixed = 0;
for (const relPath of files) {
  const fullPath = path.join(__dirname, relPath);
  if (!fs.existsSync(fullPath)) {
    console.log(`SKIP (not found): ${relPath}`);
    continue;
  }
  let content = fs.readFileSync(fullPath, 'utf8');
  let changed = false;
  for (const p of patches) {
    if (content.includes(p.old)) {
      content = content.replace(p.old, p.new);
      changed = true;
      totalFixed++;
      console.log(`  PATCHED [${p.old.split('\n')[0].slice(0,60)}] in ${relPath}`);
      break; // only one patch applies per file
    }
  }
  if (!changed) {
    // Check if already patched
    if (content.includes('_bypassLang')) {
      console.log(`  ALREADY PATCHED: ${relPath}`);
    } else {
      console.log(`  WARNING: no matching pattern found in ${relPath}`);
    }
  } else {
    fs.writeFileSync(fullPath, content, 'utf8');
  }
}
console.log(`\nDone. Total patches applied: ${totalFixed} / ${files.length} files`);
