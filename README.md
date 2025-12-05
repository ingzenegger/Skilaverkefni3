# Skilaverkefni3 - Krakkakvizzið

Krakkakvizzið er einfalt quiz app. Til viðbótar við guidelines hér á eftir þá bætti ég við start screen þar sem notandi getur slegið inn nafn. Í lokaskjá er nafnið svo notað aftur (ef það hefur verið slegið inn). Hugmyndin var að vera með highscore töflu einnig í lokin þar sem notandi gæti séð allar tilraunir, en ákvað að vera ekki svo rosalega extra í þetta sinn... save it for later.
Note: answer array var bætt við eftir á þar sem ég missti af línu í verklýsingunni sem nefndi að vista gögn í lista(array). Svo það var sett inn til að tjékka í það box, þess vegna er það einungis notað til að console logga þegar kvizzinu lýkur. Live and learn.

## Markhópur og prófun
Setti upp appið með 8 ára dóttur mína í huga. Tók 10 spurningar úr krakkakviss 3 og notaði svipaða litapallettu einnig. Persónulega er ég hrifnari af dark mode útgáfunni. 
Þegar appið var tilbúið lét ég dóttur mína spila, og hún hætti ekki fyrr en hún var búin að ná upp í 10 stig. Eftir það fannst henni líka gaman að skrifa allskonar vitleysu í inputið í upphafi, svo miðað við markhóp þá var það hittari. 
Appið féll vel í kramið hjá henni, en eftir prófun þá fjarlægði ég prósentu tölu úr progress bar (sýndi 10%, 20% etc eftir að hverri spurningu er svarað), en hún spurði hvort hún væri komin með 50% stig þegar hún var hálfnuð, sem var ekki. Virkaði misvísandi.

# Verkefnislýsing:
Í þessu verkefni skal búa til einfalt Quiz-forrit í React. Forritið sýnir lista af spurningum, leyfir notanda að velja svar og sýnir svo niðurstöður í lokin.

## Minimum viable product

1. Spurningalisti ✅
   -Búðu til fylki af spurningum, t.d.:
   const questions = [ { id: 1, question: "Hvað heitir höfuðborg Íslands?", options: ["Akureyri", "Reykjavík", "Keflavík", "Selfoss"], correctIndex: 1 }, // ... ];

2. Birta eina spurningu í einu ✅
   -Sýna:
   --texta spurningar
   --lista af mögulegum svörum (options)
   -Notandi getur smellt á svar.

3. Vista valið svar í state✅
   -Þegar notandi velur svar:
   --vista valið svar (t.d. í answers state)
   --annað hvort:
   ---👉fara beint í næstu spurningu eða ✅
   ---leyfa notanda að ýta á “Næsta spurning” takka.

4. Sýna niðurstöðu í lokin ✅
   -Þegar notandi er búinn með allar spurningar:
   --sýna hve mörg svör voru rétt, t.d. “Þú fékkst 7/10 rétt.”
   --má líka sýna prósentu eða stutta skilaboð (“Frábært!”, “Allt í lagi”, o.s.frv.)

5. Reset / Spila aftur ✅
   -Takki “Reyna aftur” sem:
   --hreinsar state (valin svör + núverandi spurningu)
   --byrjar quizið upp á nýtt

## Tæknilegar kröfur

Nota React functional components ✅
Nota useState (og má nota useEffect ef það á við) ✅
Að minnsta kosti 2 components, t.d.:✅
-App – heldur utan um heildarstate og flæði
-Question – birtir staka spurningu og svarmöguleika


