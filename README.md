# Grēksūdze

Palīgs sirdsapziņas izmeklēšanai. Dati paliek tikai ierīcē; nekas netiek sūtīts serverī.

## Palaišana

```bash
npm install
npm run dev
```

Atver [http://localhost:3000](http://localhost:3000).

## Plūsma

1. **Ievads** (`/`) — skaidrojums par rīku un privātumu  
2. **Vecuma izvēle** (`/vecums`) — bērni / pusaudži / pieaugušie  
3. **Versija** — bērniem viena; pusaudžiem 12–14 un 15–18; pieaugušajiem vairākas

## Struktūra

- `src/data/confession/children/` — bērnu saturs  
- `src/data/confession/teens/12-14/` un `15-18/` — pusaudžu versijas  
- `src/data/confession/adults/katolis-lv/` un `dveseles-spogulis/` — pieaugušo versijas

