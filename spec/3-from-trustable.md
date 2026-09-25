Specifiche delle modifiche al design

1. **Logo Trustant** — Inserire il logo sopra il titolo “A Trustable Code Assistant for Private AI”.

2. **Testo con effetto typewriter** — Sostituire il paragrafo sotto il titolo, che inizia con “Build full-stack applications…”, con le tre frasi mostrate una alla volta. Ogni frase compare progressivamente, si cancella e viene sostituita dalla successiva. Recuperare testi e materiali esistenti dalla cartella indicata come “old site templates”.

3. **Animazione** — Inserire dopo il testo animato il video `trustable-anim.mp4`, recuperandolo dai materiali esistenti.

4. **Apache OpenServerless** — Rendere il relativo elemento molto più largo e visibile. Sotto aggiungere “Built on Apache OpenServerless”, collegato a https://openserverless.apache.org.

5. **Stack Nuvolaris** — Dopo il riferimento ad Apache OpenServerless, inserire l’immagine “Nuvolaris stack”, che mostra lo stack, accompagnata da un testo descrittivo che ne spieghi i componenti e il funzionamento.

6. **Immagini nella sezione sulla pubblicazione** — Integrare le immagini indicate durante la dettatura:
   - PC con Trustant;
   - “locale API NG” (nome trascritto dalla dettatura, da verificare sui materiali esistenti);
   - Private Server;
   - Private AI.

7. **Sovereign Data Center** — Nello schema di pubblicazione, sostituire “Private Cluster” con “Sovereign Data Center” e inserire l’immagine indicata come “sovereign AI più NG” (nome da verificare sui materiali esistenti).

8. **Rimozione del collegamento separato all’AI** — Eliminare il blocco/schema “PC with Trustant → Your Private AI”.

---

## Decisioni di implementazione (punti 5–8)

**Nomi risolti dalla dettatura** (verificati sulle immagini in `oldsite/static/`):

- "locale API NG" → `local-ai.png` — l'appliance **NuvolarIA** (unità di calcolo AI nera sopra il cubo Nuvolaris).
- "sovereign AI più NG" → `sovereign-ai.png` — l'edificio del data center.
- "PC con Trustant" → `mac+spark.png` — MacBook con Trustant accanto a un DGX Spark.
- "Private Server" → `private-ai.png` — server GPU NVIDIA da rack.
- "Nuvolaris stack" → `nuvolaris-stack.png` — lo stack a strati con S3, PostgreSQL, Kubernetes, Redis, Prometheus, Velero.

**Branding.** Le immagini recuperate portano marchi Nuvolaris/NuvolarIA, mentre `spec/2-page.md`
vieta di portare quei nomi nella pagina Trustant. Decisione: si usano le immagini così come sono,
ma didascalie e testi alternativi sono riscritti in termini Trustant ("AI appliance",
"private GPU server") e non nominano mai Nuvolaris. Il marchio resta visibile nei pixel:
da sostituire quando saranno disponibili versioni senza marchio.

**Punto 5.** L'immagine dello stack va nella sezione "Platform" (§5 di `2-page.md`), non nell'hero:
quella sezione contiene già il diagramma a strati testuale, che viene mantenuto e affiancato
dall'immagine con il testo descrittivo dei componenti.

**Punto 8.** Si rimuove il blocco "PC with Trustant → Your Private AI" e anche la riga di supporto
"Choose the AI environment and the application destination independently". Questo fa decadere il
criterio di accettazione 4 di `2-page.md` (distinzione fra luogo dell'inferenza e luogo di
pubblicazione): decisione presa consapevolmente.
