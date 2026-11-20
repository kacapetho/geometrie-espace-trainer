// Complete 8-module x 2-variant curriculum for Géométrie dans l'espace (TC + BacM 2021-2026)
// Zero answer leaks in format hints. Plausible non-suggestive distractors. Multi-check Rédaction Bac.

const UI_TEXT = {
  sk: {
    appTitle: "Géométrie dans l'espace",
    appSubtitle: "Kompletný maturitný tréner & Rédaction Bac (5e/6e année)",
    refBtn: "📖 Vzorce & Slovníček",
    refTitle: "Vzorce a slovníček (Géométrie dans l'espace)",
    roadmap: "Cesta k majstrovstvu",
    viewer: "Interaktívny 3D model",
    drag: "Ťahaj myšou",
    chkPlane: "Rovina $(ABC)$",
    chkNormal: "Normála $\\vec{n}$",
    chkProj: "Priemet $H$",
    chkExtra: "Bod $D$",
    step1: "Heuristické objavenie",
    step2: "Výpočet krok za krokom",
    step3: "Rédaction (slovný komentár)",
    checkBtn: "Overiť",
    checkRedBtn: "Overiť výber viet",
    nextPhase: "Pokračovať na ďalšiu fázu →",
    nextModule: "Odomknúť ďalší modul →",
    finishAll: "🎉 Gratulujeme! Zvládol si všetkých 8 modulov priestorovej geometrie!",
    phaseLocked: "Najprv vyrieš všetky kroky v tejto fáze.",
    footer: "Progres sa automaticky ukladá lokálne v prehliadači (localStorage).",
    resetConfirm: "Naozaj chceš vynulovať celý svoj progres v tejto variante?",
    redactionIntro: "Označ VŠETKY potrebné kroky pre plný počet bodov v rédactií (pozor na matematické chytáky):"
  },
  fr: {
    appTitle: "Géométrie dans l'espace",
    appSubtitle: "Entraînement complet & Rédaction Bac (5e/6e année)",
    refBtn: "📖 Formules & Lexique",
    refTitle: "Formules et lexique (Géométrie dans l'espace)",
    roadmap: "Parcours de maîtrise",
    viewer: "Modèle 3D interactif",
    drag: "Glisser la souris",
    chkPlane: "Plan $(ABC)$",
    chkNormal: "Vecteur normal $\\vec{n}$",
    chkProj: "Projeté $H$",
    chkExtra: "Point $D$",
    step1: "Découverte heuristique",
    step2: "Calcul pas à pas",
    step3: "Rédaction type Bac",
    checkBtn: "Vérifier",
    checkRedBtn: "Valider la rédaction",
    nextPhase: "Passer à l'étape suivante →",
    nextModule: "Débloquer le module suivant →",
    finishAll: "🎉 Félicitations ! Tu maîtrises les 8 modules de géométrie dans l'espace !",
    phaseLocked: "Résous d'abord toutes les questions de cette étape.",
    footer: "Ta progression est enregistrée automatiquement en local dans ton navigateur.",
    resetConfirm: "Veux-tu vraiment réinitialiser toute ta progression pour cette variante ?",
    redactionIntro: "Coche TOUTES les affirmations indispensables pour obtenir tous les points de rédaction :"
  }
};

const REF_CONTENT = {
  sk: `
    <h3>Kľúčové vzorce</h3>
    <table class="ref-table">
      <tr><th>Pojem</th><th>Vzorec</th></tr>
      <tr><td>Vektor a norma</td><td>$\\overrightarrow{AB}(x_B-x_A;\\, y_B-y_A;\\, z_B-z_A)$, &nbsp; $\\|\\vec{u}\\| = \\sqrt{x^2+y^2+z^2}$</td></tr>
      <tr><td>Stred úsečky $[AB]$</td><td>$I\\left(\\frac{x_A+x_B}{2};\\,\\frac{y_A+y_B}{2};\\,\\frac{z_A+z_B}{2}\\right)$</td></tr>
      <tr><td>Skalárny súčin &amp; uhol</td><td>$\\vec{u}\\cdot\\vec{v} = xx'+yy'+zz' = \\|\\vec{u}\\|\\,\\|\\vec{v}\\|\\cos\\theta$</td></tr>
      <tr><td>Uhol priamky a roviny</td><td>$\\sin\\alpha = \\frac{|\\vec{u}\\cdot\\vec{n}|}{\\|\\vec{u}\\|\\,\\|\\vec{n}\\|}$</td></tr>
      <tr><td>Vektorový súčin</td><td>$\\vec{u}\\wedge\\vec{v} = \\big(yz'-zy'\\,;\\; -(xz'-zx')\\,;\\; xy'-yx'\\big)$, &nbsp; $\\mathcal{A}_{ABC} = \\frac{\\|\\overrightarrow{AB}\\wedge\\overrightarrow{AC}\\|}{2}$</td></tr>
      <tr><td>Rovina &amp; vzdialenosť</td><td>$ax+by+cz+d=0$ ($\\vec{n}(a;b;c)$), &nbsp; $d(M,\\mathcal{P}) = \\frac{|ax_M+by_M+cz_M+d|}{\\sqrt{a^2+b^2+c^2}}$</td></tr>
      <tr><td>Objem štvorstena &amp; mierka</td><td>$V = \\frac{1}{3}\\,\\mathcal{A}_{\\text{base}} \\times h$; pri mierke $u\\text{ cm}$: dĺžka $\\times u$, obsah $\\times u^2$, objem $\\times u^3$</td></tr>
    </table>
    <h3>Slovníček FR ↔ SK</h3>
    <table class="ref-table">
      <tr><td><i>non alignés / non colinéaires</i></td><td>neležia na jednej priamke / lineárne nezávislé</td></tr>
      <tr><td><i>non coplanaires</i></td><td>neležia v jednej rovine (mimobežné pre priamky)</td></tr>
      <tr><td><i>vecteur normal / directeur</i></td><td>normálový vektor / smerový vektor</td></tr>
      <tr><td><i>projeté orthogonal</i></td><td>kolmý priemet</td></tr>
      <tr><td><i>plans sécants / confondus</i></td><td>rôznobežné / totožné roviny</td></tr>
      <tr><td><i>droite incluse dans un plan</i></td><td>priamka ležiaca v rovine</td></tr>
    </table>
  `,
  fr: `
    <h3>Formules essentielles</h3>
    <table class="ref-table">
      <tr><th>Notion</th><th>Formule</th></tr>
      <tr><td>Vecteur et norme</td><td>$\\overrightarrow{AB}(x_B-x_A;\\, y_B-y_A;\\, z_B-z_A)$, &nbsp; $\\|\\vec{u}\\| = \\sqrt{x^2+y^2+z^2}$</td></tr>
      <tr><td>Milieu de $[AB]$</td><td>$I\\left(\\frac{x_A+x_B}{2};\\,\\frac{y_A+y_B}{2};\\,\\frac{z_A+z_B}{2}\\right)$</td></tr>
      <tr><td>Produit scalaire &amp; angle</td><td>$\\vec{u}\\cdot\\vec{v} = xx'+yy'+zz' = \\|\\vec{u}\\|\\,\\|\\vec{v}\\|\\cos\\theta$</td></tr>
      <tr><td>Angle droite / plan</td><td>$\\sin\\alpha = \\frac{|\\vec{u}\\cdot\\vec{n}|}{\\|\\vec{u}\\|\\,\\|\\vec{n}\\|}$</td></tr>
      <tr><td>Produit vectoriel</td><td>$\\vec{u}\\wedge\\vec{v} = \\big(yz'-zy'\\,;\\; -(xz'-zx')\\,;\\; xy'-yx'\\big)$, &nbsp; $\\mathcal{A}_{ABC} = \\frac{\\|\\overrightarrow{AB}\\wedge\\overrightarrow{AC}\\|}{2}$</td></tr>
      <tr><td>Plan &amp; distance</td><td>$ax+by+cz+d=0$ ($\\vec{n}(a;b;c)$), &nbsp; $d(M,\\mathcal{P}) = \\frac{|ax_M+by_M+cz_M+d|}{\\sqrt{a^2+b^2+c^2}}$</td></tr>
      <tr><td>Volume &amp; unité graphique</td><td>$V = \\frac{1}{3}\\,\\mathcal{A}_{\\text{base}} \\times h$; si unité $= u\\text{ cm}$ : longueur $\\times u$, aire $\\times u^2$, volume $\\times u^3$</td></tr>
    </table>
  `
};

const VARIANTS = {
  A: {
    O: [0, 0, 0], A: [2, 0, 0], B: [0, 2, 0], C: [0, 0, 1], D: [1, 1, 1],
    n: [1, 1, 2], H: [1/3, 1/3, 2/3],
    coordsHtml: `
      <b>Repère orthonormé $(O;\\vec{i},\\vec{j},\\vec{k})$ (unité : $1\\text{ cm}$) :</b><br>
      $O(0\\,;\\,0\\,;\\,0)$, $A(2\\,;\\,0\\,;\\,0)$, $B(0\\,;\\,2\\,;\\,0)$, $C(0\\,;\\,0\\,;\\,1)$, $D(1\\,;\\,1\\,;\\,1)$<br>
      <span style="color:#64748b">Vecteur testé : $\\vec{n}(1\\,;\\,1\\,;\\,2)$</span>
    `,
    modules: [
      {
        id: "m1",
        title: { sk: "1. Body, stred, vektory a nekolinearita", fr: "1. Points, milieu, vecteurs et non-colinéarité" },
        desc: { sk: "Zostav vektory, nájdi stred úsečky $[AB]$ a dokáž, že body $A, B, C$ určujú rovinu.", fr: "Former les vecteurs, trouver le milieu de $[AB]$ et prouver que $A, B, C$ ne sont pas alignés." },
        heuristic: [
          {
            prompt: {
              sk: "Ktorá podmienka je nutná a postačujúca na to, aby tri body $A, B, C$ jednoznačne určovali rovinu $(ABC)$?",
              fr: "Quelle condition est nécessaire et suffisante pour que $A, B, C$ définissent un unique plan $(ABC)$ ?"
            },
            options: [
              { sk: "Vektory $\\overrightarrow{CA}$ a $\\overrightarrow{CB}$ nie sú kolineárne.", fr: "Les vecteurs $\\overrightarrow{CA}$ et $\\overrightarrow{CB}$ ne sont pas colinéaires.", ok: true },
              { sk: "Vektory $\\overrightarrow{CA}$ a $\\overrightarrow{CB}$ sú ortogonálne ($\\overrightarrow{CA}\\cdot\\overrightarrow{CB} = 0$).", fr: "Les vecteurs $\\overrightarrow{CA}$ et $\\overrightarrow{CB}$ sont orthogonaux.", ok: false },
              { sk: "Body $A, B, C$ majú rôzne súradnice a nenulové normy.", fr: "Les points $A, B, C$ sont deux à deux distincts.", ok: false }
            ],
            explain: {
              sk: "Správne! Ortogonalita nie je potrebná (uhol nemusí byť $90^\\circ$) a rôznosť bodov nestačí (môžu ležať na jednej priamke). Rozhoduje nekolinearita.",
              fr: "Exact ! L'orthogonalité n'est pas nécessaire et des points distincts peuvent être alignés."
            }
          }
        ],
        calcs: [
          {
            label: { sk: "Súradnice stredu $I$ úsečky $[AB]$", fr: "Coordonnées du milieu $I$ de $[AB]$" },
            format: { sk: "(tvar: x;y;z)", fr: "(format : x;y;z)" },
            answers: ["1;1;0", "(1;1;0)"],
            hint1: { sk: "$I\\left(\\frac{x_A+x_B}{2};\\frac{y_A+y_B}{2};\\frac{z_A+z_B}{2}\\right)$.", fr: "$I\\left(\\frac{x_A+x_B}{2};\\frac{y_A+y_B}{2};\\frac{z_A+z_B}{2}\\right)$." },
            hint2: { sk: "$I\\left(\\frac{2+0}{2};\\,\\frac{0+2}{2};\\,\\frac{0+0}{2}\\right)$.", fr: "$I\\left(\\frac{2+0}{2};\\,\\frac{0+2}{2};\\,\\frac{0+0}{2}\\right)$." }
          },
          {
            label: { sk: "Súradnice vektora $\\overrightarrow{CA}$", fr: "Coordonnées de $\\overrightarrow{CA}$" },
            format: { sk: "(tvar: x;y;z)", fr: "(format : x;y;z)" },
            answers: ["2;0;-1", "(2;0;-1)"],
            hint1: { sk: "$(x_A-x_C;\\,y_A-y_C;\\,z_A-z_C)$.", fr: "$(x_A-x_C;\\,y_A-y_C;\\,z_A-z_C)$." },
            hint2: { sk: "$(2-0;\\, 0-0;\\, 0-1)$.", fr: "$(2-0;\\, 0-0;\\, 0-1)$." }
          },
          {
            label: { sk: "Súradnice vektora $\\overrightarrow{CB}$", fr: "Coordonnées de $\\overrightarrow{CB}$" },
            format: { sk: "(tvar: x;y;z)", fr: "(format : x;y;z)" },
            answers: ["0;2;-1", "(0;2;-1)"],
            hint1: { sk: "$(x_B-x_C;\\,y_B-y_C;\\,z_B-z_C)$.", fr: "$(x_B-x_C;\\,y_B-y_C;\\,z_B-z_C)$." },
            hint2: { sk: "$(0-0;\\, 2-0;\\, 0-1)$.", fr: "$(0-0;\\, 2-0;\\, 0-1)$." }
          }
        ],
        redaction: {
          items: [
            { sk: "Porovnať pomery súradníc $\\overrightarrow{CA}$ a $\\overrightarrow{CB}$ a ukázať, že neexistuje $k \\in \\mathbb{R}$ také, že $\\overrightarrow{CA}=k\\overrightarrow{CB}$.", fr: "Montrer qu'il n'existe pas de réel $k$ tel que $\\overrightarrow{CA}=k\\overrightarrow{CB}$.", req: true },
            { sk: "Uviesť záver: body $A, B, C$ neležia na jednej priamke (*non alignés*), teda určujú rovinu $(ABC)$.", fr: "Conclure que $A, B, C$ ne sont pas alignés et définissent le plan $(ABC)$.", req: true },
            { sk: "Overiť, že skalárny súčin $\\overrightarrow{CA}\\cdot\\overrightarrow{CB}$ je nenulový.", fr: "Vérifier que $\\overrightarrow{CA}\\cdot\\overrightarrow{CB} \\neq 0$.", req: false }
          ],
          modelFr: `On a $\\overrightarrow{CA}(2\\,;\\,0\\,;\\,-1)$ et $\\overrightarrow{CB}(0\\,;\\,2\\,;\\,-1)$.
Leurs coordonnées ne sont pas proportionnelles ($2 \\neq k \\cdot 0$), donc $\\overrightarrow{CA}$ et $\\overrightarrow{CB}$ ne sont pas colinéaires.
Par conséquent, les points $A$, $B$ et $C$ ne sont pas alignés et définissent le plan $(ABC)$.`
        }
      },
      {
        id: "m2",
        title: { sk: "2. Skalárny súčin, normy a uhol", fr: "2. Produit scalaire, normes et angle" },
        desc: { sk: "Vypočítaj $\\overrightarrow{CA}\\cdot\\overrightarrow{CB}$, normy a uhol $\\widehat{ACB}$.", fr: "Calculer $\\overrightarrow{CA}\\cdot\\overrightarrow{CB}$, les normes et l'angle $\\widehat{ACB}$." },
        heuristic: [
          {
            prompt: {
              sk: "Ak pri výpočte uhla $\\widehat{ACB}$ omylom použijeme vektory $\\overrightarrow{AC}$ a $\\overrightarrow{CB}$, čo presne dostaneme?",
              fr: "Si l'on utilise $\\overrightarrow{AC}$ et $\\overrightarrow{CB}$ pour calculer l'angle $\\widehat{ACB}$, qu'obtient-on ?"
            },
            options: [
              { sk: "Vedľajší uhol $180^\\circ - \\widehat{ACB}$, lebo $\\overrightarrow{AC} = -\\overrightarrow{CA}$.", fr: "L'angle supplémentaire $180^\\circ - \\widehat{ACB}$, car $\\overrightarrow{AC} = -\\overrightarrow{CA}$.", ok: true },
              { sk: "Rovnaký uhol $\\widehat{ACB}$, lebo $\\cos$ je párna funkcia.", fr: "Le même angle $\\widehat{ACB}$, car $\\cos$ est paire.", ok: false },
              { sk: "Doplnkový uhol $90^\\circ - \\widehat{ACB}$.", fr: "L'angle complémentaire $90^\\circ - \\widehat{ACB}$.", ok: false }
            ],
            explain: { sk: "Presne tak! Zmena orientácie jedného vektora zmení znamienko $\\cos\\theta$, čo dá $180^\\circ - \\theta$.", fr: "Exact !" }
          }
        ],
        calcs: [
          {
            label: { sk: "Skalárny súčin $\\overrightarrow{CA} \\cdot \\overrightarrow{CB}$", fr: "Produit scalaire $\\overrightarrow{CA} \\cdot \\overrightarrow{CB}$" },
            format: { sk: "(celé číslo)", fr: "(entier)" },
            answers: ["1"],
            hint1: { sk: "$x_1 x_2 + y_1 y_2 + z_1 z_2$.", fr: "$x_1 x_2 + y_1 y_2 + z_1 z_2$." },
            hint2: { sk: "$2\\cdot 0 + 0\\cdot 2 + (-1)\\cdot(-1)$.", fr: "$2\\times 0 + 0\\times 2 + (-1)\\times(-1)$." }
          },
          {
            label: { sk: "Norma $\\|\\overrightarrow{CA}\\| = \\|\\overrightarrow{CB}\\|$", fr: "Norme $\\|\\overrightarrow{CA}\\| = \\|\\overrightarrow{CB}\\|$" },
            format: { sk: "(presný tvar, napr. sqrt(n))", fr: "(valeur exacte, ex. sqrt(n))" },
            answers: ["sqrt(5)", "√5"],
            hint1: { sk: "$\\|\\vec{u}\\| = \\sqrt{x^2 + y^2 + z^2}$.", fr: "$\\|\\vec{u}\\| = \\sqrt{x^2 + y^2 + z^2}$." },
            hint2: { sk: "$\\sqrt{2^2 + 0^2 + (-1)^2}$.", fr: "$\\sqrt{2^2 + 0^2 + (-1)^2}$." }
          },
          {
            label: { sk: "Uhol $\\widehat{ACB}$ v stupňoch", fr: "Angle $\\widehat{ACB}$ en degrés" },
            format: { sk: "(na 1 desatinné miesto)", fr: "(arrondi au dixième)" },
            answers: ["78.5", "78,5"],
            hint1: { sk: "$\\cos\\widehat{ACB} = \\frac{\\overrightarrow{CA}\\cdot\\overrightarrow{CB}}{\\|\\overrightarrow{CA}\\|\\,\\|\\overrightarrow{CB}\\|}$ a $\\arccos$ v stupňoch.", fr: "$\\cos\\widehat{ACB} = \\frac{\\overrightarrow{CA}\\cdot\\overrightarrow{CB}}{\\|\\overrightarrow{CA}\\|\\,\\|\\overrightarrow{CB}\\|}$ puis $\\arccos$." },
            hint2: { sk: "$\\cos\\widehat{ACB} = \\frac{1}{5} \\implies \\arccos(0{,}2)$.", fr: "$\\cos\\widehat{ACB} = \\frac{1}{5} \\implies \\arccos(0{,}2)$." }
          }
        ],
        redaction: {
          items: [
            { sk: "Prepojiť analytické a geometrické vyjadrenie skalárneho súčinu cez $\\cos\\widehat{ACB}$.", fr: "Relier l'expression analytique et géométrique via $\\cos\\widehat{ACB}$.", req: true },
            { sk: "Uviesť presnú hodnotu $\\cos\\widehat{ACB}$ a následne zaokrúhlenie v stupňoch ($^\\circ$).", fr: "Écrire la valeur exacte de $\\cos\\widehat{ACB}$ puis l'arrondi en degrés.", req: true },
            { sk: "Zaokrúhliť normy ešte pred výpočtom podielu $\\cos\\widehat{ACB}$.", fr: "Arrondir les normes avant de calculer $\\cos\\widehat{ACB}$.", req: false }
          ],
          modelFr: `$\\overrightarrow{CA} \\cdot \\overrightarrow{CB} = 1$ et $\\|\\overrightarrow{CA}\\| = \\|\\overrightarrow{CB}\\| = \\sqrt{5}$.
Or $\\overrightarrow{CA} \\cdot \\overrightarrow{CB} = \\|\\overrightarrow{CA}\\|\\,\\|\\overrightarrow{CB}\\|\\cos\\widehat{ACB}$, d'où $\\cos\\widehat{ACB} = \\dfrac{1}{5}$ et $\\widehat{ACB} \\approx 78{,}5^\\circ$.`
        }
      },
      {
        id: "m3",
        title: { sk: "3. Normálový vektor, rovina $(ABC)$ a koplanarita", fr: "3. Vecteur normal, plan $(ABC)$ et coplanarité" },
        desc: { sk: "Over normálový vektor $\\vec{n}(1;1;2)$, zostav rovnicu $(ABC)$ a otestuj bod $D(1;1;1)$.", fr: "Justifier $\\vec{n}(1\\,;\\,1\\,;\\,2)$, trouver $(ABC)$ et tester $D(1\\,;\\,1\\,;\\,1)$." },
        heuristic: [
          {
            prompt: {
              sk: "Ak sme už v 1. úlohe dokázali, že $A, B, C$ neležia na jednej priamke, prečo musíme pri dôkaze normálového vektora $\\vec{n}$ počítať DVA skalárne súčiny?",
              fr: "Pourquoi faut-il vérifier DEUX produits scalaires nuls pour prouver que $\\vec{n}$ est normal à $(ABC)$ ?"
            },
            options: [
              { sk: "Aby sme ukázali, že $\\vec{n}$ je kolmý na dva nekolineárne vektory roviny, čím je jednoznačne kolmý na celú rovinu.", fr: "Pour montrer que $\\vec{n}$ est orthogonal à deux vecteurs non colinéaires du plan.", ok: true },
              { sk: "Pretože jeden skalárny súčin by neurčil znamienko koeficientu $d$.", fr: "Parce qu'un seul produit scalaire ne détermine pas le signe de $d$.", ok: false },
              { sk: "Pretože tým zároveň overíme, že $\\|\\vec{n}\\| = 1$.", fr: "Parce que cela prouve aussi que $\\|\\vec{n}\\| = 1$.", ok: false }
            ],
            explain: { sk: "Presne tak! K jednému vektoru existuje nekonečne veľa smerov v priestore, až dva nekolineárne vektory určujú rovinu.", fr: "Exact !" }
          }
        ],
        calcs: [
          {
            label: { sk: "Skalárny súčin $\\vec{n} \\cdot \\overrightarrow{CA}$", fr: "Calculer $\\vec{n} \\cdot \\overrightarrow{CA}$" },
            format: { sk: "(číslo)", fr: "(nombre)" },
            answers: ["0"],
            hint1: { sk: "$\\vec{n}(1;1;2)$ a $\\overrightarrow{CA}(2;0;-1)$.", fr: "$\\vec{n}(1\\,;\\,1\\,;\\,2)$ et $\\overrightarrow{CA}(2\\,;\\,0\\,;\\,-1)$." },
            hint2: { sk: "$1(2) + 1(0) + 2(-1)$.", fr: "$2 + 0 - 2$." }
          },
          {
            label: { sk: "Skalárny súčin $\\vec{n} \\cdot \\overrightarrow{CB}$", fr: "Calculer $\\vec{n} \\cdot \\overrightarrow{CB}$" },
            format: { sk: "(číslo)", fr: "(nombre)" },
            answers: ["0"],
            hint1: { sk: "$\\vec{n}(1;1;2)$ a $\\overrightarrow{CB}(0;2;-1)$.", fr: "$\\vec{n}(1\\,;\\,1\\,;\\,2)$ et $\\overrightarrow{CB}(0\\,;\\,2\\,;\\,-1)$." },
            hint2: { sk: "$1(0) + 1(2) + 2(-1)$.", fr: "$0 + 2 - 2$." }
          },
          {
            label: { sk: "Konštanta $d$ v rovnici $(ABC): x + y + 2z + d = 0$", fr: "Constante $d$ dans $(ABC) : x + y + 2z + d = 0$" },
            format: { sk: "(celé číslo)", fr: "(entier)" },
            answers: ["-2"],
            hint1: { sk: "Dosaď bod $A(2;0;0)$.", fr: "Remplacer par $A(2\\,;\\,0\\,;\\,0)$." },
            hint2: { sk: "$2 + 0 + 0 + d = 0$.", fr: "$2 + d = 0$." }
          },
          {
            label: { sk: "Hodnota $x_D + y_D + 2z_D + d$ pre bod $D(1;1;1)$", fr: "Valeur de $x_D + y_D + 2z_D + d$ pour $D(1\\,;\\,1\\,;\\,1)$" },
            format: { sk: "(celé číslo)", fr: "(entier)" },
            answers: ["2"],
            hint1: { sk: "Dosaď $(1;1;1)$ a svoje $d$.", fr: "Remplacer $(1\\,;\\,1\\,;\\,1)$ et $d$." },
            hint2: { sk: "$1 + 1 + 2 - 2$.", fr: "$4 - 2$." }
          }
        ],
        redaction: {
          items: [
            { sk: "Uviesť, že $\\overrightarrow{CA}$ a $\\overrightarrow{CB}$ sú dva nekolineárne vektory roviny $(ABC)$.", fr: "Préciser que $\\overrightarrow{CA}$ et $\\overrightarrow{CB}$ sont deux vecteurs non colinéaires de $(ABC)$.", req: true },
            { sk: "Ukázať $\\vec{n}\\cdot\\overrightarrow{CA}=0$ a $\\vec{n}\\cdot\\overrightarrow{CB}=0$, potom vyvodiť záver o normálovom vektore.", fr: "Montrer les deux produits scalaires nuls puis conclure.", req: true },
            { sk: "Pre $D$: $2 \\neq 0 \\implies D \\notin (ABC) \\implies A, B, C, D$ neležia v jednej rovine (*non coplanaires*).", fr: "Pour $D$ : $2 \\neq 0 \\implies D \\notin (ABC) \\implies$ non coplanaires.", req: true },
            { sk: "Overiť ešte, či je vektor $\\vec{n}$ jednotkový ($\\|\\vec{n}\\|=1$).", fr: "Vérifier que $\\vec{n}$ est unitaire.", req: false }
          ],
          modelFr: `Les vecteurs $\\overrightarrow{CA}$ et $\\overrightarrow{CB}$ sont deux vecteurs non colinéaires de $(ABC)$. Comme $\\vec{n}\\cdot\\overrightarrow{CA} = 0$ et $\\vec{n}\\cdot\\overrightarrow{CB} = 0$, $\\vec{n}$ est normal à $(ABC)$.
Ainsi $(ABC) : x + y + 2z + d = 0$. Avec $A(2\\,;\\,0\\,;\\,0) \\in (ABC)$, on trouve $d = -2$, soit $(ABC) : x + y + 2z - 2 = 0$.
Pour $D(1\\,;\\,1\\,;\\,1)$ : $1 + 1 + 2 - 2 = 2 \\neq 0$, donc $D \\notin (ABC)$ : les points $A, B, C, D$ ne sont pas coplanaires.`
        }
      },
      {
        id: "m4",
        title: { sk: "4. Parametrická priamka, priemet $H$ a vzdialenosť", fr: "4. Droite paramétrique, projeté $H$ et distance" },
        desc: { sk: "Nájdi priemet $H$ bodu $O$ na $(ABC)$, vzdialenosť $OH$ aj priamy vzorec pre $d(D,(ABC))$.", fr: "Trouver $H$, $OH$, et $d(D,(ABC))$ par la formule directe." },
        heuristic: [
          {
            prompt: {
              sk: "Aký je rozdiel medzi priamkou $(OH)$ a úsečkou $[OH]$ v parametrickom vyjadrení $x = t, y = t, z = 2t$?",
              fr: "Quelle contrainte sur $t$ distingue la droite $(OH)$ du segment $[OH]$ ?"
            },
            options: [
              { sk: "Pre celú priamku $(OH)$ platí $t \\in \\mathbb{R}$, zatiaľ čo pre úsečku len $t \\in [0; t_H]$.", fr: "Pour la droite $(OH)$, $t \\in \\mathbb{R}$, alors que le segment correspond à $t \\in [0\\,;\\,t_H]$.", ok: true },
              { sk: "Pre priamku $(OH)$ platí $t > 0$.", fr: "Pour la droite $(OH)$, $t > 0$.", ok: false }
            ],
            explain: { sk: "Presne tak! Preto je zápis $(t \\in \\mathbb{R})$ pri priamke povinný.", fr: "Exact ! D'où l'importance de préciser $(t \\in \\mathbb{R})$." }
          }
        ],
        calcs: [
          {
            label: { sk: "Parameter $t$ pre priesečník $H \\in (OH) \\cap (ABC)$", fr: "Paramètre $t$ pour $H \\in (OH) \\cap (ABC)$" },
            format: { sk: "(zlomok a/b)", fr: "(fraction a/b)" },
            answers: ["1/3"],
            hint1: { sk: "Dosaď $(t, t, 2t)$ do $x + y + 2z - 2 = 0$.", fr: "Remplacer $(t,t,2t)$ dans $x + y + 2z - 2 = 0$." },
            hint2: { sk: "$6t - 2 = 0$.", fr: "$6t = 2$." }
          },
          {
            label: { sk: "Súradnice bodu $H$", fr: "Coordonnées de $H$" },
            format: { sk: "(tvar: x;y;z)", fr: "(format : x;y;z)" },
            answers: ["1/3;1/3;2/3", "(1/3;1/3;2/3)"],
            hint1: { sk: "Dosaď $t$ do $(t;\\,t;\\,2t)$.", fr: "Remplacer $t$ dans $(t\\,;\\,t\\,;\\,2t)$." },
            hint2: { sk: "$\\left(\\frac{1}{3};\\,\\frac{1}{3};\\,2\\cdot\\frac{1}{3}\\right)$.", fr: "$\\left(\\frac{1}{3};\\,\\frac{1}{3};\\,\\frac{2}{3}\\right)$." }
          },
          {
            label: { sk: "Vzdialenosť $OH$ v cm", fr: "Distance $OH$ en cm" },
            format: { sk: "(tvar: sqrt(a)/b)", fr: "(format : sqrt(a)/b)" },
            answers: ["sqrt(6)/3", "√6/3"],
            hint1: { sk: "$OH = \\sqrt{x_H^2 + y_H^2 + z_H^2}$.", fr: "$OH = \\sqrt{x_H^2 + y_H^2 + z_H^2}$." },
            hint2: { sk: "$\\sqrt{\\frac{1+1+4}{9}} = \\sqrt{\\frac{6}{9}}$.", fr: "$\\sqrt{\\frac{6}{9}}$." }
          },
          {
            label: { sk: "Vzdialenosť $d(D,(ABC))$ pre $D(1;1;1)$ priamym vzorcom", fr: "Distance $d(D,(ABC))$ par la formule directe" },
            format: { sk: "(tvar: sqrt(a)/b)", fr: "(format : sqrt(a)/b)" },
            answers: ["sqrt(6)/3", "√6/3"],
            hint1: { sk: "$d(D,(ABC)) = \\frac{|x_D + y_D + 2z_D - 2|}{\\sqrt{1^2+1^2+2^2}}$.", fr: "$\\frac{|ax_D+by_D+cz_D+d|}{\\sqrt{a^2+b^2+c^2}}$." },
            hint2: { sk: "$\\frac{2}{\\sqrt{6}}$ a usmerni menovateľa.", fr: "$\\frac{2}{\\sqrt{6}}$ puis rationaliser." }
          }
        ],
        redaction: {
          items: [
            { sk: "Zdôvodniť: $(OH) \\perp (ABC) \\implies \\vec{n}$ je smerový vektor $(OH)$.", fr: "Justifier $(OH) \\perp (ABC) \\implies \\vec{n}$ dirige $(OH)$.", req: true },
            { sk: "Uviesť $(t \\in \\mathbb{R})$ v parametrickej sústave.", fr: "Préciser $(t \\in \\mathbb{R})$.", req: true },
            { sk: "Použiť rovnaký parameter $t$ pre dve rôzne priamky v jednej sústave.", fr: "Utiliser le même paramètre $t$ pour deux droites différentes.", req: false }
          ],
          modelFr: `$H$ est le projeté orthogonal de $O$ sur $(ABC)$, donc $(OH) \\perp (ABC)$ et $\\vec{n}(1\\,;\\,1\\,;\\,2)$ dirige $(OH)$ passant par $O$ :
$$(OH) : \\begin{cases} x = t \\\\ y = t \\\\ z = 2t \\end{cases} \\quad (t \\in \\mathbb{R})$$
$H \\in (OH) \\cap (ABC) \\iff 6t - 2 = 0 \\iff t = \\dfrac{1}{3}$, d'où $H\\left(\\dfrac{1}{3}\\,;\\,\\dfrac{1}{3}\\,;\\,\\dfrac{2}{3}\\right)$ et $OH = \\dfrac{\\sqrt{6}}{3}\\text{ cm}$.`
        }
      },
      {
        id: "m5",
        title: { sk: "5. Priamka vs. rovina a uhol priamky s rovinou", fr: "5. Position droite / plan et angle droite-plan" },
        desc: { sk: "Otestuj polohu priamky $(d_1): x=2+t, y=t, z=-t$ a roviny $(ABC)$ a vypočítaj uhol $(OC)$ s $(ABC)$.", fr: "Étudier $(d_1)$ et $(ABC)$, puis l'angle entre $(OC)$ et $(ABC)$." },
        heuristic: [
          {
            prompt: {
              sk: "Ak pri dosadení priamky $(d)$ do rovnice roviny $\\mathcal{P}$ dostaneme $0 = 0$ (identita pre každé $t$), aká je ich vzájomná poloha?",
              fr: "Si en remplaçant $(d)$ dans l'équation de $\\mathcal{P}$ on obtient $0 = 0$ pour tout $t$, quelle est leur position ?"
            },
            options: [
              { sk: "Priamka $(d)$ leží v rovine $\\mathcal{P}$ ($(d) \\subset \\mathcal{P}$).", fr: "La droite $(d)$ est incluse dans $\\mathcal{P}$ ($(d) \\subset \\mathcal{P}$).", ok: true },
              { sk: "Priamka $(d)$ je prísne rovnobežná s $\\mathcal{P}$ ($(d) \\cap \\mathcal{P} = \\emptyset$).", fr: "La droite $(d)$ est strictement parallèle à $\\mathcal{P}$.", ok: false },
              { sk: "Priamka $(d)$ je kolmá na $\\mathcal{P}$.", fr: "La droite $(d)$ est perpendiculaire à $\\mathcal{P}$.", ok: false }
            ],
            explain: { sk: "Správne! Identita $0=0$ znamená nekonečne veľa spoločných bodov $\\implies (d)\\subset\\mathcal{P}$. Spor $k=0$ ($k\\neq 0$) znamená prísnu rovnobežnosť.", fr: "Exact !" }
          },
          {
            prompt: {
              sk: "Ktorá goniometrická funkcia dáva ostrý uhol $\\alpha$ medzi priamkou (smer $\\vec{u}$) a rovinou (normála $\\vec{n}$)?",
              fr: "Quelle fonction trigonométrique donne l'angle aigu $\\alpha$ entre une droite (vecteur $\\vec{u}$) et un plan (normale $\\vec{n}$) ?"
            },
            options: [
              { sk: "$\\sin\\alpha = \\frac{|\\vec{u}\\cdot\\vec{n}|}{\\|\\vec{u}\\|\\,\\|\\vec{n}\\|}$", fr: "$\\sin\\alpha = \\frac{|\\vec{u}\\cdot\\vec{n}|}{\\|\\vec{u}\\|\\,\\|\\vec{n}\\|}$", ok: true },
              { sk: "$\\cos\\alpha = \\frac{|\\vec{u}\\cdot\\vec{n}|}{\\|\\vec{u}\\|\\,\\|\\vec{n}\\|}$", fr: "$\\cos\\alpha = \\frac{|\\vec{u}\\cdot\\vec{n}|}{\\|\\vec{u}\\|\\,\\|\\vec{n}\\|}$", ok: false }
            ],
            explain: { sk: "Výborne! $\\cos$ by dal uhol s normálou $\\vec{n}$, preto uhol s rovinou je $90^\\circ - \\theta$, teda $\\sin\\alpha$!", fr: "Exact !" }
          }
        ],
        calcs: [
          {
            label: { sk: "Dosaď $(d_1): x=2+t, y=t, z=-t$ do $(ABC): x+y+2z-2$. Aké číslo vyjde na ľavej strane?", fr: "Remplacer $(d_1)$ dans $x+y+2z-2$. Quelle constante obtient-on ?" },
            format: { sk: "(celé číslo)", fr: "(entier)" },
            answers: ["0"],
            hint1: { sk: "$(2+t) + t + 2(-t) - 2$.", fr: "$(2+t) + t + 2(-t) - 2$." },
            hint2: { sk: "$2 - 2 + 2t - 2t$.", fr: "$2 - 2 + 2t - 2t$." }
          },
          {
            label: { sk: "Rovnobežná rovina $\\mathcal{P}' \\parallel (ABC)$ cez $D(1;1;1)$ má rovnicu $x+y+2z+d'=0$. Urči $d'$", fr: "Plan $\\mathcal{P}' \\parallel (ABC)$ passant par $D(1\\,;\\,1\\,;\\,1)$ : $x+y+2z+d'=0$. Trouver $d'$" },
            format: { sk: "(celé číslo)", fr: "(entier)" },
            answers: ["-4"],
            hint1: { sk: "Roviny sú rovnobežné $\\implies$ rovnaký normálový vektor $(1;1;2)$, dosaď $D(1;1;1)$.", fr: "Même vecteur normal $(1\\,;\\,1\\,;\\,2)$, remplacer par $D(1\\,;\\,1\\,;\\,1)$." },
            hint2: { sk: "$1 + 1 + 2(1) + d' = 0$.", fr: "$4 + d' = 0$." }
          },
          {
            label: { sk: "Ostrý uhol $\\alpha$ (v stupňoch) medzi osou $(OC)$ ($\\vec{k}(0;0;1)$) a rovinou $(ABC)$", fr: "Angle aigu $\\alpha$ (en degrés) entre $(OC)$ et $(ABC)$" },
            format: { sk: "(na 1 desatinné miesto)", fr: "(au dixième près)" },
            answers: ["54.7", "54,7"],
            hint1: { sk: "Použi $\\sin\\alpha = \\frac{|\\vec{k}\\cdot\\vec{n}|}{\\|\\vec{k}\\|\\,\\|\\vec{n}\\|}$.", fr: "Utiliser $\\sin\\alpha = \\frac{|\\vec{k}\\cdot\\vec{n}|}{\\|\\vec{k}\\|\\,\\|\\vec{n}\\|}$." },
            hint2: { sk: "$\\sin\\alpha = \\frac{2}{1\\cdot\\sqrt{6}} \\implies \\arcsin\\left(\\frac{2}{\\sqrt{6}}\\right)$.", fr: "$\\sin\\alpha = \\frac{2}{\\sqrt{6}}$." }
          }
        ],
        redaction: {
          items: [
            { sk: "Pri $(d_1) \\subset (ABC)$ napísať, že rovnosť $0=0$ platí *pour tout $t \\in \\mathbb{R}$*.", fr: "Préciser que l'égalité $0=0$ est vraie pour tout $t \\in \\mathbb{R}$.", req: true },
            { sk: "Pri uhle s rovinou použiť $\\sin\\alpha$ (nie $\\cos\\alpha$) s normálovým vektorom $\\vec{n}$.", fr: "Utiliser $\\sin\\alpha$ avec le vecteur normal $\\vec{n}$.", req: true },
            { sk: "Pre $\\mathcal{P}' \\parallel (ABC)$ napísať, že dve rovnobežné roviny majú rovnaký normálový vektor.", fr: "Justifier que deux plans parallèles ont le même vecteur normal.", req: true },
            { sk: "Ak je $\\vec{u}\\cdot\\vec{n}=0$, priamka je určite kolmá na rovinu.", fr: "Si $\\vec{u}\\cdot\\vec{n}=0$, la droite est perpendiculaire au plan.", req: false }
          ],
          modelFr: `En remplaçant les coordonnées paramétriques de $(d_1)$ dans $(ABC)$, on obtient $(2+t)+t-2t-2 = 0$ pour tout $t \\in \\mathbb{R}$, donc $(d_1) \\subset (ABC)$.
Pour l'angle $\\alpha$ entre $(OC)$ et $(ABC)$ : $\\sin\\alpha = \\dfrac{|\\vec{k}\\cdot\\vec{n}|}{\\|\\vec{k}\\|\\,\\|\\vec{n}\\|} = \\dfrac{2}{\\sqrt{6}}$, soit $\\alpha \\approx 54{,}7^\\circ$.`
        }
      },
      {
        id: "m6",
        title: { sk: "6. Dve roviny, priesečnica a mimobežné priamky", fr: "6. Deux plans, intersection et droites non coplanaires" },
        desc: { sk: "Priesečnica $(d) = (ABC) \\cap \\mathcal{P}_2$ ($\\mathcal{P}_2: x-y=0$) a mimobežnosť s $(L)$.", fr: "Intersection $(d) = (ABC) \\cap \\mathcal{P}_2$ et non-coplanarité avec $(L)$." },
        heuristic: [
          {
            prompt: {
              sk: "Ak sústava pre priesečník dvoch priamok $(d)$ a $(L)$ nemá riešenie, kedy sú priamky mimobežné (*non coplanaires*) a nie rovnobežné?",
              fr: "Si le système d'intersection de $(d)$ et $(L)$ n'a pas de solution, comment distinguer droites parallèles et non coplanaires ?"
            },
            options: [
              { sk: "Sú mimobežné práve vtedy, keď ich smerové vektory NIE sú kolineárne.", fr: "Elles sont non coplanaires si et seulement si leurs vecteurs directeurs ne sont pas colinéaires.", ok: true },
              { sk: "Sú mimobežné práve vtedy, keď ich smerové vektory sú kolmé ($\\vec{u}_d \\cdot \\vec{v} = 0$).", fr: "Elles sont non coplanaires ssi leurs vecteurs directeurs sont orthogonaux.", ok: false }
            ],
            explain: { sk: "Presne tak! Bez testu nekolinearity smerových vektorov by mohli byť prísne rovnobežné (čo sú tiež koplanárne priamky!).", fr: "Exact !" }
          }
        ],
        calcs: [
          {
            label: { sk: "Vektorový súčin normál $\\vec{n}(1;1;2) \\wedge \\vec{n}_2(1;-1;0)$ (smer priesečnice)", fr: "Produit vectoriel $\\vec{n} \\wedge \\vec{n}_2$ (vecteur directeur de $(d)$)" },
            format: { sk: "(tvar: x;y;z)", fr: "(format : x;y;z)" },
            answers: ["2;2;-2", "(2;2;-2)", "-1;-1;1", "(-1;-1;1)", "1;1;-1", "(1;1;-1)"],
            hint1: { sk: "Vypočítaj $(1;1;2) \\wedge (1;-1;0)$.", fr: "Calculer $(1\\,;\\,1\\,;\\,2) \\wedge (1\\,;\\,-1\\,;\\,0)$." },
            hint2: { sk: "$x = 1(0)-2(-1) = 2$, $y = -(1(0)-2(1)) = 2$, $z = 1(-1)-1(1) = -2$.", fr: "$(2\\,;\\,2\\,;\\,-2)$." }
          },
          {
            label: { sk: "V $(d) = (ABC) \\cap \\mathcal{P}_2$ polož $z = t$. Vyjadri $x$ pomocou $t$", fr: "Dans $(d) = (ABC) \\cap \\mathcal{P}_2$, si $z = t$, exprimer $x$ en fonction de $t$" },
            format: { sk: "(výraz s t)", fr: "(expression en t)" },
            answers: ["1-t", "-t+1"],
            hint1: { sk: "Z $x - y = 0 \\implies y = x$, dosaď do $x + y + 2t - 2 = 0$.", fr: "De $y = x$, remplacer dans $x + y + 2t - 2 = 0$." },
            hint2: { sk: "$2x = 2 - 2t$.", fr: "$2x = 2 - 2t$." }
          },
          {
            label: { sk: "Priamka $(L): x=1+s, y=1, z=1+s$ a $(d)$: sú rôznobežné (`ano`) alebo mimobežné (`nie`)?", fr: "Les droites $(L): x=1+s, y=1, z=1+s$ et $(d)$ sont-elles sécantes (`oui`) ou non coplanaires (`non`) ?" },
            format: { sk: "(ano / nie alebo oui / non)", fr: "(oui / non)" },
            answers: ["nie", "non"],
            hint1: { sk: "Vyrieš $1-t = 1$ pre $t$, potom $1-t = 1+s$ pre $s$, a over 3. rovnicu $t = 1+s$.", fr: "Résous $y_d=y_L$ et $x_d=x_L$, puis vérifie $z_d=z_L$." },
            hint2: { sk: "$t=0, s=0 \\implies 0 = 1$ (spor).", fr: "$0 = 1$, impossible." }
          }
        ],
        redaction: {
          items: [
            { sk: "Overiť nekolinearitu $\\vec{n}$ a $\\vec{n}_2$ (roviny sú *sécants*).", fr: "Vérifier que $\\vec{n}$ et $\\vec{n}_2$ sont non colinéaires.", req: true },
            { sk: "Pre mimobežnosť overiť, že smerové vektory $\\vec{u}_d$ a $\\vec{v}$ NIE sú kolineárne.", fr: "Vérifier que $\\vec{u}_d$ et $\\vec{v}$ ne sont pas colinéaires.", req: true },
            { sk: "Ukázať spor v 3. rovnici sústavy $M(t) = N(s)$ $\\implies$ *non coplanaires*.", fr: "Montrer l'incompatibilité du système $\\implies$ non coplanaires.", req: true },
            { sk: "Z toho, že sústava nemá riešenie, automaticky vyplýva, že sú mimobežné aj bez kontroly smerových vektorov.", fr: "Un système sans solution suffit sans vérifier les vecteurs directeurs.", req: false }
          ],
          modelFr: `$\vec{n}$ et $\vec{n}_2$ ne sont pas colinéaires, donc $(ABC)$ et $\mathcal{P}_2$ sont sécants suivant $(d): x=1-t,\\; y=1-t,\\; z=t\\;(t\\in\\mathbb{R})$.
Les vecteurs directeurs $\\vec{u}_d(-1\\,;\\,-1\\,;\\,1)$ et $\\vec{v}(1\\,;\\,0\\,;\\,1)$ ne sont pas colinéaires, donc $(d)$ et $(L)$ ne sont pas parallèles.
Le système $1-t=1+s,\\; 1-t=1,\\; t=1+s$ donne $t=0, s=0$ mais $0\\neq 1$ : aucune solution, donc $(d)$ et $(L)$ sont non coplanaires.`
        }
      },
      {
        id: "m7",
        title: { sk: "7. Vzdialenosť bodu od priamky (2 metódy)", fr: "7. Distance d'un point à une droite (2 méthodes)" },
        desc: { sk: "Vypočítaj vzdialenosť bodu $C(0;0;1)$ od priamky $(AB): x=2-t, y=t, z=0$ minimalizáciou $CM(t)^2$ aj cez kolmú rovinu.", fr: "Calculer $d(C,(AB))$ par minimisation de $CM(t)^2$ et par plan perpendiculaire." },
        heuristic: [
          {
            prompt: {
              sk: "Ak máme $M(t) \\in (AB)$ a vyjadríme $CM(t)^2 = at^2 + bt + c$ ($a > 0$), kedy je vzdialenosť $CM(t)$ minimálna?",
              fr: "Si $CM(t)^2 = at^2 + bt + c$ ($a > 0$), pour quelle valeur de $t$ la distance $CM(t)$ est-elle minimale ?"
            },
            options: [
              { sk: "Vo vrchole paraboly $t_0 = -\\frac{b}{2a}$ (kde je derivácia nulová).", fr: "Au sommet de la parabole $t_0 = -\\frac{b}{2a}$.", ok: true },
              { sk: "V koreni rovnice $at^2 + bt + c = 0$.", fr: "Aux racines de $at^2 + bt + c = 0$.", ok: false }
            ],
            explain: { sk: "Presne tak! Koreň by znamenal $CM = 0$ (čo nastane len ak $C \\in (AB)$). Minimum je vždy v $t_0 = -\\frac{b}{2a}$.", fr: "Exact !" }
          }
        ],
        calcs: [
          {
            label: { sk: "Vyjadri $CM(t)^2 = (2-t)^2 + t^2 + 1$ ako kvadratický trojčlen (napr. `at^2+bt+c`)", fr: "Développer $CM(t)^2 = (2-t)^2 + t^2 + 1$" },
            format: { sk: "(tvar: at^2+bt+c)", fr: "(forme : at^2+bt+c)" },
            answers: ["2t^2-4t+5"],
            hint1: { sk: "Roznásob $(2-t)^2 = 4 - 4t + t^2$.", fr: "Développer $(2-t)^2 = 4 - 4t + t^2$." },
            hint2: { sk: "$4 - 4t + t^2 + t^2 + 1$.", fr: "$4 - 4t + t^2 + t^2 + 1$." }
          },
          {
            label: { sk: "Parameter $t_0$, pre ktorý je $CM(t)^2$ minimálne", fr: "Valeur $t_0$ minimisant $CM(t)^2$" },
            format: { sk: "(celé číslo)", fr: "(entier)" },
            answers: ["1"],
            hint1: { sk: "Použi $t_0 = -\\frac{b}{2a}$.", fr: "Utiliser $t_0 = -\\frac{b}{2a}$." },
            hint2: { sk: "$t_0 = -\\frac{-4}{2\\cdot 2}$.", fr: "$t_0 = \\frac{4}{4}$." }
          },
          {
            label: { sk: "Minimálna vzdialenosť $d(C,(AB))$ v cm", fr: "Distance minimale $d(C,(AB))$ en cm" },
            format: { sk: "(tvar: sqrt(n))", fr: "(format : sqrt(n))" },
            answers: ["sqrt(3)", "√3"],
            hint1: { sk: "Dosaď $t_0$ do $CM(t)^2$ a nezabudni zobrať odmocninu!", fr: "Remplacer $t_0$ dans $CM(t)^2$ puis prendre la racine carrée !" },
            hint2: { sk: "$CM(1)^2 = 2 - 4 + 5 = 3 \\implies CM = \\dots$", fr: "$CM(1)^2 = 3$." }
          }
        ],
        redaction: {
          items: [
            { sk: "Zdôvodniť, že $CM(t)$ je minimálna práve vtedy, keď je minimálne $CM(t)^2$ (funkcia $x \\mapsto \\sqrt{x}$ je rastúca).", fr: "Justifier que $CM$ est minimale lorsque $CM^2$ est minimal.", req: true },
            { sk: "Pri metóde cez kolmú rovinu: normálovým vektorom roviny $\\mathcal{P}$ je smerový vektor priamky $(AB)$.", fr: "Par plan perpendiculaire : le vecteur directeur de $(AB)$ est normal à $\\mathcal{P}$.", req: true },
            { sk: "Zabudnúť odmocniť $CM(t_0)^2$ na konci výpočtu.", fr: "Oublier de prendre la racine carrée de $CM(t_0)^2$.", req: false }
          ],
          modelFr: `Pour tout $M(2-t\\,;\\,t\\,;\\,0) \\in (AB)$, $CM(t)^2 = (2-t)^2 + t^2 + 1 = 2t^2 - 4t + 5$.
Ce trinôme admet un minimum en $t_0 = -\\dfrac{-4}{2\\times 2} = 1$, soit $M_0(1\\,;\\,1\\,;\\,0)$, et $CM_0 = \\sqrt{2(1)^2 - 4(1) + 5} = \\sqrt{3}\\text{ cm}$.`
        }
      },
      {
        id: "m8",
        title: { sk: "8. Vektorový súčin, obsah, objem & mierka", fr: "8. Produit vectoriel, aire, volume & unité" },
        desc: { sk: "Vypočítaj $\\overrightarrow{CA}\\wedge\\overrightarrow{CB}$, obsah $\\mathcal{A}_{ABC}$, objem $V_{OABC}$, over $OH$ a otestuj mierku $2\\text{ cm}$.", fr: "Calculer $\\overrightarrow{CA}\\wedge\\overrightarrow{CB}$, $\\mathcal{A}_{ABC}$, $V_{OABC}$, $OH$ et l'effet d'une unité de $2\\text{ cm}$." },
        heuristic: [
          {
            prompt: {
              sk: "Ak je v zadaní *« unité graphique : $2\\text{ cm}$ »* (ako v TC 2023/24 a 2026), čím musíme vynásobiť obsah v jednotkách plochy a objem v jednotkách objemu?",
              fr: "Si l'unité graphique est $2\\text{ cm}$, par combien multiplie-t-on l'aire en unités d'aire et le volume pour passer en $\\text{cm}^2$ et $\\text{cm}^3$ ?"
            },
            options: [
              { sk: "Obsah $\\times 2^2 = 4$ a objem $\\times 2^3 = 8$.", fr: "L'aire par $2^2 = 4$ et le volume par $2^3 = 8$.", ok: true },
              { sk: "Oboje $\\times 2$.", fr: "Les deux par $2$.", ok: false }
            ],
            explain: { sk: "Presne tak! Jednotka dĺžky je $u$, obsahu $u^2$ a objemu $u^3$.", fr: "Exact !" }
          }
        ],
        calcs: [
          {
            label: { sk: "Vektorový súčin $\\overrightarrow{CA} \\wedge \\overrightarrow{CB}$ pre $(2;0;-1)\\wedge(0;2;-1)$", fr: "Produit vectoriel $\\overrightarrow{CA} \\wedge \\overrightarrow{CB}$" },
            format: { sk: "(tvar: x;y;z)", fr: "(format : x;y;z)" },
            answers: ["2;2;4", "(2;2;4)"],
            hint1: { sk: "Pozor na mínus v 2. zložke.", fr: "Attention au signe moins sur la 2e coordonnée." },
            hint2: { sk: "$x = 0(-1)-(-1)(2)$, $y = -(2(-1)-0)$, $z = 2(2)-0$.", fr: "$(2\\,;\\,2\\,;\\,4)$." }
          },
          {
            label: { sk: "Obsah $\\mathcal{A}_{ABC}$ v jednotkách plochy (mierka $1\\text{ cm}$)", fr: "Aire $\\mathcal{A}_{ABC}$ en $\\text{cm}^2$" },
            format: { sk: "(tvar: sqrt(n))", fr: "(format : sqrt(n))" },
            answers: ["sqrt(6)", "√6"],
            hint1: { sk: "$\\frac{\\|\\overrightarrow{CA}\\wedge\\overrightarrow{CB}\\|}{2}$.", fr: "$\\frac{\\|\\overrightarrow{CA}\\wedge\\overrightarrow{CB}\\|}{2}$." },
            hint2: { sk: "$\\frac{\\sqrt{24}}{2} = \\frac{2\\sqrt{6}}{2}$.", fr: "$\\frac{2\\sqrt{6}}{2}$." }
          },
          {
            label: { sk: "Objem $V_{OABC}$ v $\\text{cm}^3$ (mierka $1\\text{ cm}$)", fr: "Volume $V_{OABC}$ en $\\text{cm}^3$" },
            format: { sk: "(zlomok a/b)", fr: "(fraction a/b)" },
            answers: ["2/3"],
            hint1: { sk: "$V = \\frac{1}{3}\\mathcal{A}_{OAB} \\cdot OC$.", fr: "$V = \\frac{1}{3}\\mathcal{A}_{OAB} \\times OC$." },
            hint2: { sk: "$\\frac{1}{3} \\cdot 2 \\cdot 1$.", fr: "$\\frac{1}{3} \\times 2 \\times 1$." }
          },
          {
            label: { sk: "Over $OH = \\frac{3V_{OABC}}{\\mathcal{A}_{ABC}}$ v cm", fr: "Retrouver $OH$ en cm" },
            format: { sk: "(tvar: sqrt(a)/b)", fr: "(format : sqrt(a)/b)" },
            answers: ["sqrt(6)/3", "√6/3"],
            hint1: { sk: "Dosaď $V_{OABC}$ a $\\mathcal{A}_{ABC}$, usmerni menovateľa.", fr: "Remplacer et rationaliser." },
            hint2: { sk: "$\\frac{2}{\\sqrt{6}} = \\frac{2\\sqrt{6}}{6}$.", fr: "$\\frac{2\\sqrt{6}}{6}$." }
          }
        ],
        redaction: {
          items: [
            { sk: "Uviesť vzorec $\\mathcal{A}_{ABC} = \\frac{\\|\\overrightarrow{CA}\\wedge\\overrightarrow{CB}\\|}{2}$.", fr: "Écrire $\\mathcal{A}_{ABC} = \\frac{\\|\\overrightarrow{CA}\\wedge\\overrightarrow{CB}\\|}{2}$.", req: true },
            { sk: "Zdôvodniť zmenu podstavy (*en prenant $(ABC)$ comme base et $OH$ comme hauteur*).", fr: "Justifier le changement de base vers $(ABC)$.", req: true },
            { sk: "Usmerniť menovateľa a uviesť jednotky.", fr: "Rationaliser et écrire les unités.", req: true },
            { sk: "Vynechať delenie $2$ pri obsahu trojuholníka.", fr: "Oublier de diviser par $2$.", req: false }
          ],
          modelFr: `$\\mathcal{A}_{ABC} = \\dfrac{\\|\\overrightarrow{CA}\\wedge\\overrightarrow{CB}\\|}{2} = \\sqrt{6}\\text{ cm}^2$ et $V_{OABC} = \\dfrac{1}{3}\\times 2\\times 1 = \\dfrac{2}{3}\\text{ cm}^3$.
En prenant $(ABC)$ pour base : $OH = \\dfrac{3V_{OABC}}{\\mathcal{A}_{ABC}} = \\dfrac{2}{\\sqrt{6}} = \\dfrac{\\sqrt{6}}{3}\\text{ cm}$.`
        }
      }
    ]
  },

  B: {
    O: [0, 0, 0], A: [3, 0, 0], B: [0, 6, 0], C: [0, 0, 6], D: [2, 2, 2],
    n: [2, 1, 1], H: [2, 1, 1],
    coordsHtml: `
      <b>Repère orthonormé $(O;\\vec{i},\\vec{j},\\vec{k})$ (unité : $1\\text{ cm}$) :</b><br>
      $O(0\\,;\\,0\\,;\\,0)$, $A(3\\,;\\,0\\,;\\,0)$, $B(0\\,;\\,6\\,;\\,0)$, $C(0\\,;\\,0\\,;\\,6)$, $D(2\\,;\\,2\\,;\\,2)$<br>
      <span style="color:#64748b">Vecteur testé : $\\vec{n}(2\\,;\\,1\\,;\\,1)$</span>
    `,
    modules: [
      {
        id: "m1",
        title: { sk: "1. Body, stred, vektory a nekolinearita", fr: "1. Points, milieu, vecteurs et non-colinéarité" },
        desc: { sk: "Nájdi stred $[AB]$, zostav $\\overrightarrow{CA}, \\overrightarrow{CB}$ a dokáž nekolinearitu.", fr: "Milieu de $[AB]$, vecteurs $\\overrightarrow{CA}, \\overrightarrow{CB}$ et non-colinéarité." },
        heuristic: [
          {
            prompt: {
              sk: "Ako formálne dokážeme, že $\\overrightarrow{CA}(3;0;-6)$ a $\\overrightarrow{CB}(0;6;-6)$ nie sú kolineárne?",
              fr: "Comment prouver rigoureusement que $\\overrightarrow{CA}(3\\,;\\,0\\,;\\,-6)$ et $\\overrightarrow{CB}(0\\,;\\,6\\,;\\,-6)$ ne sont pas colinéaires ?"
            },
            options: [
              { sk: "Ukážeme, že neexistuje $k \\in \\mathbb{R}$ také, že $\\overrightarrow{CA} = k\\overrightarrow{CB}$ (súradnice nie sú úmerné).", fr: "On montre qu'il n'existe pas de réel $k$ tel que $\\overrightarrow{CA} = k\\overrightarrow{CB}$.", ok: true },
              { sk: "Vypočítame ich skalárny súčin a ukážeme, že nie je rovný $0$.", fr: "On montre que leur produit scalaire est non nul.", ok: false }
            ],
            explain: { sk: "Správne! Nenulový skalárny súčin znamená len to, že nie sú kolmé.", fr: "Exact !" }
          }
        ],
        calcs: [
          {
            label: { sk: "Súradnice stredu $I$ úsečky $[AB]$", fr: "Coordonnées du milieu $I$ de $[AB]$" },
            format: { sk: "(tvar: x;y;z)", fr: "(format : x;y;z)" },
            answers: ["3/2;3;0", "1.5;3;0", "1,5;3;0", "(3/2;3;0)"],
            hint1: { sk: "Priemer súradníc $A(3;0;0)$ a $B(0;6;0)$.", fr: "Moyenne de $A$ et $B$." },
            hint2: { sk: "$\\left(\\frac{3+0}{2};\\,\\frac{0+6}{2};\\,\\frac{0+0}{2}\\right)$.", fr: "$\\left(\\frac{3}{2};\\,3;\\,0\\right)$." }
          },
          {
            label: { sk: "Súradnice vektora $\\overrightarrow{CA}$", fr: "Coordonnées de $\\overrightarrow{CA}$" },
            format: { sk: "(tvar: x;y;z)", fr: "(format : x;y;z)" },
            answers: ["3;0;-6", "(3;0;-6)"],
            hint1: { sk: "$(x_A-x_C;\\,y_A-y_C;\\,z_A-z_C)$.", fr: "$(x_A-x_C;\\,y_A-y_C;\\,z_A-z_C)$." },
            hint2: { sk: "$(3-0;\\,0-0;\\,0-6)$.", fr: "$(3;\\,0;\\,-6)$." }
          },
          {
            label: { sk: "Súradnice vektora $\\overrightarrow{CB}$", fr: "Coordonnées de $\\overrightarrow{CB}$" },
            format: { sk: "(tvar: x;y;z)", fr: "(format : x;y;z)" },
            answers: ["0;6;-6", "(0;6;-6)"],
            hint1: { sk: "$(x_B-x_C;\\,y_B-y_C;\\,z_B-z_C)$.", fr: "$(x_B-x_C;\\,y_B-y_C;\\,z_B-z_C)$." },
            hint2: { sk: "$(0-0;\\,6-0;\\,0-6)$.", fr: "$(0;\\,6;\\,-6)$." }
          }
        ],
        redaction: {
          items: [
            { sk: "Ukázať neúmernosť súradníc $\\overrightarrow{CA}$ a $\\overrightarrow{CB}$.", fr: "Montrer la non-proportionnalité des coordonnées.", req: true },
            { sk: "Vyvodiť: body $A, B, C$ neležia na jednej priamke (*non alignés*) a určujú rovinu $(ABC)$.", fr: "Conclure que $A, B, C$ ne sont pas alignés.", req: true },
            { sk: "Skontrolovať, či sú $\\|\\overrightarrow{CA}\\|$ a $\\|\\overrightarrow{CB}\\|$ rôzne.", fr: "Vérifier que les normes sont différentes.", req: false }
          ],
          modelFr: `Les coordonnées de $\\overrightarrow{CA}(3\\,;\\,0\\,;\\,-6)$ et $\\overrightarrow{CB}(0\\,;\\,6\\,;\\,-6)$ ne sont pas proportionnelles. Ces deux vecteurs sont non colinéaires, donc $A, B, C$ ne sont pas alignés et définissent le plan $(ABC)$.`
        }
      },
      {
        id: "m2",
        title: { sk: "2. Skalárny súčin, normy a uhol", fr: "2. Produit scalaire, normes et angle" },
        desc: { sk: "Vypočítaj $\\overrightarrow{CA}\\cdot\\overrightarrow{CB}$, normy a uhol $\\widehat{ACB}$.", fr: "Calculer $\\overrightarrow{CA}\\cdot\\overrightarrow{CB}$, les normes et l'angle $\\widehat{ACB}$." },
        heuristic: [
          {
            prompt: { sk: "Čo platí, ak je uhol $\\widehat{ACB}$ ostrý?", fr: "Que peut-on dire du produit scalaire si $\\widehat{ACB}$ est aigu ?" },
            options: [
              { sk: "$\\overrightarrow{CA}\\cdot\\overrightarrow{CB} > 0$, lebo $\\cos\\widehat{ACB} > 0$.", fr: "$\\overrightarrow{CA}\\cdot\\overrightarrow{CB} > 0$, car $\\cos\\widehat{ACB} > 0$.", ok: true },
              { sk: "$\\overrightarrow{CA}\\cdot\\overrightarrow{CB} < 0$.", fr: "$\\overrightarrow{CA}\\cdot\\overrightarrow{CB} < 0$.", ok: false }
            ],
            explain: { sk: "Správne!", fr: "Exact !" }
          }
        ],
        calcs: [
          {
            label: { sk: "Skalárny súčin $\\overrightarrow{CA} \\cdot \\overrightarrow{CB}$", fr: "Produit scalaire $\\overrightarrow{CA} \\cdot \\overrightarrow{CB}$" },
            format: { sk: "(celé číslo)", fr: "(entier)" },
            answers: ["36"],
            hint1: { sk: "$x_1 x_2 + y_1 y_2 + z_1 z_2$.", fr: "$x_1 x_2 + y_1 y_2 + z_1 z_2$." },
            hint2: { sk: "$3(0) + 0(6) + (-6)(-6)$.", fr: "$36$." }
          },
          {
            label: { sk: "Norma $\\|\\overrightarrow{CA}\\|$", fr: "Norme $\\|\\overrightarrow{CA}\\|$" },
            format: { sk: "(tvar: a*sqrt(b) alebo sqrt(n))", fr: "(format : a*sqrt(b) ou sqrt(n))" },
            answers: ["3*sqrt(5)", "3sqrt(5)", "3√5", "sqrt(45)", "√45"],
            hint1: { sk: "$\\sqrt{3^2 + 0^2 + (-6)^2}$.", fr: "$\\sqrt{3^2 + 0^2 + (-6)^2}$." },
            hint2: { sk: "$\\sqrt{45} = 3\\sqrt{5}$.", fr: "$\\sqrt{45}$." }
          },
          {
            label: { sk: "Uhol $\\widehat{ACB}$ v stupňoch", fr: "Angle $\\widehat{ACB}$ en degrés" },
            format: { sk: "(na 1 desatinné miesto)", fr: "(arrondi au dixième)" },
            answers: ["50.8", "50,8"],
            hint1: { sk: "$\\|\\overrightarrow{CB}\\| = \\sqrt{72} = 6\\sqrt{2}$. Použi $\\cos\\widehat{ACB}$.", fr: "$\\|\\overrightarrow{CB}\\| = 6\\sqrt{2}$, puis $\\cos\\widehat{ACB}$." },
            hint2: { sk: "$\\cos\\widehat{ACB} = \\frac{36}{18\\sqrt{10}} = \\frac{2}{\\sqrt{10}}$.", fr: "$\\cos\\widehat{ACB} = \\frac{2}{\\sqrt{10}}$." }
          }
        ],
        redaction: {
          items: [
            { sk: "Napísať vzťah $\\cos\\widehat{ACB} = \\frac{\\overrightarrow{CA}\\cdot\\overrightarrow{CB}}{\\|\\overrightarrow{CA}\\|\\|\\overrightarrow{CB}\\|}$.", fr: "Écrire $\\cos\\widehat{ACB} = \\frac{\\overrightarrow{CA}\\cdot\\overrightarrow{CB}}{\\|\\overrightarrow{CA}\\|\\|\\overrightarrow{CB}\\|}$.", req: true },
            { sk: "Zaokrúhliť výsledok v stupňoch ($^\\circ$).", fr: "Arrondir en degrés ($^\\circ$).", req: true },
            { sk: "Zaokrúhliť normy skôr, než sa vydelia.", fr: "Arrondir les normes avant la division.", req: false }
          ],
          modelFr: `$\\overrightarrow{CA}\\cdot\\overrightarrow{CB} = 36$, $\\|\\overrightarrow{CA}\\| = 3\\sqrt{5}$ et $\\|\\overrightarrow{CB}\\| = 6\\sqrt{2}$.
Donc $\\cos\\widehat{ACB} = \\dfrac{\\sqrt{10}}{5}$, soit $\\widehat{ACB} \\approx 50{,}8^\\circ$.`
        }
      },
      {
        id: "m3",
        title: { sk: "3. Normálový vektor, rovina $(ABC)$ a koplanarita", fr: "3. Vecteur normal, plan $(ABC)$ et coplanarité" },
        desc: { sk: "Over $\\vec{n}(2;1;1)$, zostav $(ABC)$ a otestuj bod $D(2;2;2)$.", fr: "Justifier $\\vec{n}(2\\,;\\,1\\,;\\,1)$, trouver $(ABC)$ et tester $D(2\\,;\\,2\\,;\\,2)$." },
        heuristic: [
          {
            prompt: { sk: "Ako overíme, či sú štyri body $A, B, C, D$ komplanárne?", fr: "Comment tester si $A, B, C, D$ sont coplanaires ?" },
            options: [
              { sk: "Dosadíme $D$ do všeobecnej rovnice roviny $(ABC)$: ak platí $= 0$, sú komplanárne; inak nie.", fr: "On remplace $D$ dans l'équation de $(ABC)$ : nul ssi coplanaires.", ok: true },
              { sk: "Vypočítame skalárny súčin $\\overrightarrow{AD}\\cdot\\overrightarrow{BC}$.", fr: "On calcule $\\overrightarrow{AD}\\cdot\\overrightarrow{BC}$.", ok: false }
            ],
            explain: { sk: "Presne tak!", fr: "Exact !" }
          }
        ],
        calcs: [
          {
            label: { sk: "Skalárny súčin $\\vec{n} \\cdot \\overrightarrow{CA}$", fr: "Calculer $\\vec{n} \\cdot \\overrightarrow{CA}$" },
            format: { sk: "(číslo)", fr: "(nombre)" },
            answers: ["0"],
            hint1: { sk: "$\\vec{n}(2;1;1)$ a $\\overrightarrow{CA}(3;0;-6)$.", fr: "$\\vec{n}(2\\,;\\,1\\,;\\,1)$ et $\\overrightarrow{CA}(3\\,;\\,0\\,;\\,-6)$." },
            hint2: { sk: "$6 + 0 - 6$.", fr: "$6 - 6$." }
          },
          {
            label: { sk: "Konštanta $d$ v rovnici $(ABC): 2x + y + z + d = 0$", fr: "Constante $d$ dans $(ABC) : 2x + y + z + d = 0$" },
            format: { sk: "(celé číslo)", fr: "(entier)" },
            answers: ["-6"],
            hint1: { sk: "Dosaď bod $A(3;0;0)$.", fr: "Remplacer par $A(3\\,;\\,0\\,;\\,0)$." },
            hint2: { sk: "$6 + d = 0$.", fr: "$6 + d = 0$." }
          },
          {
            label: { sk: "Hodnota $2x_D + y_D + z_D + d$ pre $D(2;2;2)$", fr: "Valeur de $2x_D + y_D + z_D + d$ pour $D(2\\,;\\,2\\,;\\,2)$" },
            format: { sk: "(celé číslo)", fr: "(entier)" },
            answers: ["2"],
            hint1: { sk: "Dosaď $(2;2;2)$ a svoje $d$.", fr: "Remplacer $(2\\,;\\,2\\,;\\,2)$ et $d$." },
            hint2: { sk: "$4 + 2 + 2 - 6$.", fr: "$8 - 6$." }
          }
        ],
        redaction: {
          items: [
            { sk: "Uviesť nekolinearitu $\\overrightarrow{CA}$ a $\\overrightarrow{CB}$.", fr: "Préciser la non-colinéarité de $\\overrightarrow{CA}$ et $\\overrightarrow{CB}$.", req: true },
            { sk: "Overiť oba skalárne súčiny $\\vec{n}\\cdot\\overrightarrow{CA}=0$ a $\\vec{n}\\cdot\\overrightarrow{CB}=0$.", fr: "Vérifier les deux produits scalaires nuls.", req: true },
            { sk: "Pre $D$: $2 \\neq 0 \\implies D \\notin (ABC) \\implies$ *non coplanaires*.", fr: "Pour $D$ : $2 \\neq 0 \\implies D \\notin (ABC) \\implies$ non coplanaires.", req: true },
            { sk: "Overiť, že $\\|\\vec{n}\\| = 1$.", fr: "Vérifier que $\\|\\vec{n}\\| = 1$.", req: false }
          ],
          modelFr: `$\\overrightarrow{CA}$ et $\\overrightarrow{CB}$ sont non colinéaires, $\\vec{n}\\cdot\\overrightarrow{CA}=0$ et $\\vec{n}\\cdot\\overrightarrow{CB}=0$, donc $\\vec{n}(2\\,;\\,1\\,;\\,1)$ est normal à $(ABC)$.
Avec $A(3\\,;\\,0\\,;\\,0) \\in (ABC)$, on a $(ABC) : 2x + y + z - 6 = 0$. Pour $D(2\\,;\\,2\\,;\\,2)$, $2(2)+2+2-6 = 2 \\neq 0 \\implies$ non coplanaires.`
        }
      },
      {
        id: "m4",
        title: { sk: "4. Parametrická priamka, priemet $H$ a vzdialenosť", fr: "4. Droite paramétrique, projeté $H$ et distance" },
        desc: { sk: "Nájdi priemet $H$ bodu $O$ na $(ABC)$, vzdialenosť $OH$ a $d(D,(ABC))$.", fr: "Trouver $H$, $OH$, et $d(D,(ABC))$." },
        heuristic: [
          {
            prompt: { sk: "Aký vektor je smerovým vektorom kolmice $(OH)$ na $(ABC)$?", fr: "Quel vecteur dirige la droite $(OH)$ orthogonale à $(ABC)$ ?" },
            options: [
              { sk: "Normálový vektor roviny $\\vec{n}(2;1;1)$.", fr: "Le vecteur normal $\\vec{n}(2\\,;\\,1\\,;\\,1)$.", ok: true },
              { sk: "Vektor $\\overrightarrow{AB}$.", fr: "Le vecteur $\\overrightarrow{AB}$.", ok: false }
            ],
            explain: { sk: "Správne!", fr: "Exact !" }
          }
        ],
        calcs: [
          {
            label: { sk: "Parameter $t$ pre $H \\in (OH) \\cap (ABC)$", fr: "Paramètre $t$ pour $H \\in (OH) \\cap (ABC)$" },
            format: { sk: "(celé číslo)", fr: "(entier)" },
            answers: ["1"],
            hint1: { sk: "Dosaď $(2t;\\,t;\\,t)$ do $2x+y+z-6=0$.", fr: "Remplacer $(2t\\,;\\,t\\,;\\,t)$." },
            hint2: { sk: "$6t - 6 = 0$.", fr: "$6t = 6$." }
          },
          {
            label: { sk: "Súradnice bodu $H$", fr: "Coordonnées de $H$" },
            format: { sk: "(tvar: x;y;z)", fr: "(format : x;y;z)" },
            answers: ["2;1;1", "(2;1;1)"],
            hint1: { sk: "Dosaď $t$ do $(2t;\\,t;\\,t)$.", fr: "Remplacer $t$ dans $(2t\\,;\\,t\\,;\\,t)$." },
            hint2: { sk: "$(2\\cdot 1;\\,1;\\,1)$.", fr: "$(2\\,;\\,1\\,;\\,1)$." }
          },
          {
            label: { sk: "Vzdialenosť $OH$ v cm", fr: "Distance $OH$ en cm" },
            format: { sk: "(tvar: sqrt(a))", fr: "(format : sqrt(a))" },
            answers: ["sqrt(6)", "√6"],
            hint1: { sk: "$\\sqrt{x_H^2+y_H^2+z_H^2}$.", fr: "$\\sqrt{x_H^2+y_H^2+z_H^2}$." },
            hint2: { sk: "$\\sqrt{4+1+1}$.", fr: "$\\sqrt{6}$." }
          },
          {
            label: { sk: "Vzdialenosť $d(D,(ABC))$ pre $D(2;2;2)$ priamym vzorcom", fr: "Distance $d(D,(ABC))$ par la formule directe" },
            format: { sk: "(tvar: sqrt(a)/b)", fr: "(format : sqrt(a)/b)" },
            answers: ["sqrt(6)/3", "√6/3"],
            hint1: { sk: "$\\frac{|2x_D+y_D+z_D-6|}{\\sqrt{2^2+1^2+1^2}}$.", fr: "$\\frac{|2x_D+y_D+z_D-6|}{\\sqrt{6}}$." },
            hint2: { sk: "$\\frac{2}{\\sqrt{6}}$ a usmerni menovateľa.", fr: "$\\frac{2}{\\sqrt{6}}$ puis rationaliser." }
          }
        ],
        redaction: {
          items: [
            { sk: "Zdôvodniť $(OH) \\perp (ABC) \\implies \\vec{n}$ je smerový vektor $(OH)$.", fr: "Justifier $(OH) \\perp (ABC) \\implies \\vec{n}$ dirige $(OH)$.", req: true },
            { sk: "Uviesť $(t \\in \\mathbb{R})$ v parametrickej sústave.", fr: "Préciser $(t \\in \\mathbb{R})$.", req: true },
            { sk: "Použiť rovnaký parameter $t$ pre dve rôzne priamky.", fr: "Utiliser le même paramètre $t$ pour deux droites.", req: false }
          ],
          modelFr: `$(OH) \\perp (ABC)$, donc $\\vec{n}(2\\,;\\,1\\,;\\,1)$ dirige $(OH) : x=2t,\\; y=t,\\; z=t\\;(t\\in\\mathbb{R})$.
$H \\in (ABC) \\iff 6t - 6 = 0 \\iff t = 1$, d'où $H(2\\,;\\,1\\,;\\,1)$ et $OH = \\sqrt{6}\\text{ cm}$.`
        }
      },
      {
        id: "m5",
        title: { sk: "5. Priamka vs. rovina a uhol priamky s rovinou", fr: "5. Position droite / plan et angle droite-plan" },
        desc: { sk: "Otestuj polohu priamky $(d_1): x=t, y=-t, z=-t$ s rovinou $(ABC)$ a vypočítaj uhol $(OC)$ s $(ABC)$.", fr: "Étudier $(d_1)$ et $(ABC)$, puis l'angle entre $(OC)$ et $(ABC)$." },
        heuristic: [
          {
            prompt: { sk: "Ak pri dosadení $(d_1)$ do rovnice roviny $\\mathcal{P}$ dostaneme $-6 = 0$ (spor), aká je ich poloha?", fr: "Si la substitution donne $-6 = 0$ (impossible), quelle est la position de $(d_1)$ et $\\mathcal{P}$ ?" },
            options: [
              { sk: "Priamka $(d_1)$ je prísne rovnobežná s rovinou $\\mathcal{P}$ ($(d_1) \\cap \\mathcal{P} = \\emptyset$).", fr: "La droite $(d_1)$ est strictement parallèle à $\\mathcal{P}$.", ok: true },
              { sk: "Priamka $(d_1)$ leží v rovine $\\mathcal{P}$.", fr: "La droite $(d_1)$ est incluse dans $\\mathcal{P}$.", ok: false }
            ],
            explain: { sk: "Presne tak! Spor znamená prázdny prienik ($\\emptyset$) pri rovnobežnosti.", fr: "Exact !" }
          }
        ],
        calcs: [
          {
            label: { sk: "Dosaď $(d_1): x=t, y=-t, z=-t$ do $2x+y+z-6$. Aká konštanta vyjde?", fr: "Remplacer $(d_1)$ dans $2x+y+z-6$. Quelle constante obtient-on ?" },
            format: { sk: "(celé číslo)", fr: "(entier)" },
            answers: ["-6"],
            hint1: { sk: "$2t + (-t) + (-t) - 6$.", fr: "$2t - t - t - 6$." },
            hint2: { sk: "$0t - 6$.", fr: "$-6$." }
          },
          {
            label: { sk: "Ostrý uhol $\\alpha$ (v stupňoch) medzi $(OC)$ ($\\vec{k}(0;0;1)$) a $(ABC)$ ($\\vec{n}(2;1;1)$)", fr: "Angle aigu $\\alpha$ (en degrés) entre $(OC)$ et $(ABC)$" },
            format: { sk: "(na 1 desatinné miesto)", fr: "(au dixième près)" },
            answers: ["24.1", "24,1"],
            hint1: { sk: "Použi $\\sin\\alpha = \\frac{|\\vec{k}\\cdot\\vec{n}|}{\\|\\vec{k}\\|\\,\\|\\vec{n}\\|}$.", fr: "Utiliser $\\sin\\alpha = \\frac{|\\vec{k}\\cdot\\vec{n}|}{\\|\\vec{k}\\|\\,\\|\\vec{n}\\|}$." },
            hint2: { sk: "$\\sin\\alpha = \\frac{1}{\\sqrt{6}} \\implies \\arcsin\\left(\\frac{1}{\\sqrt{6}}\\right)$.", fr: "$\\sin\\alpha = \\frac{1}{\\sqrt{6}}$." }
          }
        ],
        redaction: {
          items: [
            { sk: "Ukázať spor ($-6 \\neq 0$) $\\implies$ prázdny prienik $\\implies$ prísne rovnobežné.", fr: "Montrer l'impossibilité ($-6 \\neq 0$) $\\implies$ strictement parallèles.", req: true },
            { sk: "Pri uhle priamky a roviny použiť $\\sin\\alpha$ s normálou $\\vec{n}$.", fr: "Utiliser $\\sin\\alpha$ avec la normale $\\vec{n}$.", req: true },
            { sk: "Použiť $\\cos\\alpha = \\frac{|\\vec{u}\\cdot\\vec{n}|}{\\|\\vec{u}\\|\\|\\vec{n}\\|}$ priamo ako uhol s rovinou.", fr: "Prendre $\\arccos$ directement comme angle avec le plan.", req: false }
          ],
          modelFr: `En remplaçant $(d_1)$ dans $(ABC)$, on obtient $-6 = 0$, ce qui est impossible : $(d_1)$ est strictement parallèle à $(ABC)$.
Pour l'angle $\\alpha$ entre $(OC)$ et $(ABC)$ : $\\sin\\alpha = \\dfrac{|\\vec{k}\\cdot\\vec{n}|}{\\|\\vec{k}\\|\\,\\|\\vec{n}\\|} = \\dfrac{1}{\\sqrt{6}}$, soit $\\alpha \\approx 24{,}1^\\circ$.`
        }
      },
      {
        id: "m6",
        title: { sk: "6. Dve roviny, priesečnica a mimobežné priamky", fr: "6. Deux plans, intersection et droites non coplanaires" },
        desc: { sk: "Priesečnica $(d) = (ABC) \\cap \\mathcal{P}_2$ ($\\mathcal{P}_2: x-2y=0$) a mimobežnosť s $(L)$.", fr: "Intersection $(d) = (ABC) \\cap \\mathcal{P}_2$ et non-coplanarité avec $(L)$." },
        heuristic: [
          {
            prompt: { sk: "Aký vektor je automaticky smerovým vektorom priesečnice dvoch rôznobežných rovín s normálami $\\vec{n}$ a $\\vec{n}_2$?", fr: "Quel vecteur dirige automatiquement l'intersection de deux plans sécants de normales $\\vec{n}$ et $\\vec{n}_2$ ?" },
            options: [
              { sk: "Ich vektorový súčin $\\vec{n} \\wedge \\vec{n}_2$ (lebo je kolmý na obe normály).", fr: "Leur produit vectoriel $\\vec{n} \\wedge \\vec{n}_2$.", ok: true },
              { sk: "Ich súčet $\\vec{n} + \\vec{n}_2$.", fr: "Leur somme $\\vec{n} + \\vec{n}_2$.", ok: false }
            ],
            explain: { sk: "Výborne! Priamka priesečnice leží v oboch rovinách, preto je kolmá na obe normály.", fr: "Exact !" }
          }
        ],
        calcs: [
          {
            label: { sk: "Skalárny súčin $\\vec{n}(2;1;1) \\cdot \\vec{n}_2(1;-2;0)$", fr: "Produit scalaire $\\vec{n} \\cdot \\vec{n}_2$" },
            format: { sk: "(číslo)", fr: "(nombre)" },
            answers: ["0"],
            hint1: { sk: "$2(1) + 1(-2) + 1(0)$.", fr: "$2 - 2 + 0$." },
            hint2: { sk: "$2 - 2$.", fr: "$0$." }
          },
          {
            label: { sk: "V $(d) = (ABC) \\cap \\mathcal{P}_2$ polož $y = t$ (takže $x = 2t$). Vyjadri $z$ pomocou $t$", fr: "Dans $(d)$, si $y = t$ et $x = 2t$, exprimer $z$ en fonction de $t$" },
            format: { sk: "(výraz s t)", fr: "(expression en t)" },
            answers: ["6-5t", "-5t+6"],
            hint1: { sk: "Dosaď $x = 2t, y = t$ do $2x + y + z - 6 = 0$.", fr: "Remplacer dans $2x + y + z - 6 = 0$." },
            hint2: { sk: "$5t + z - 6 = 0$.", fr: "$z = 6 - 5t$." }
          },
          {
            label: { sk: "Priamka $(L): x=2, y=2+s, z=2+2s$ a $(d)$: sú rôznobežné (`ano`) alebo mimobežné (`nie`)?", fr: "Les droites $(L): x=2, y=2+s, z=2+2s$ et $(d)$ sont-elles sécantes (`oui`) ou non coplanaires (`non`) ?" },
            format: { sk: "(ano / nie alebo oui / non)", fr: "(oui / non)" },
            answers: ["nie", "non"],
            hint1: { sk: "Z $2t = 2$ urči $t$, z $t = 2+s$ urči $s$, a over $6-5t = 2+2s$.", fr: "Résous $2t=2$ et $t=2+s$, puis vérifie $6-5t = 2+2s$." },
            hint2: { sk: "$t=1, s=-1 \\implies 1 = 0$ (spor).", fr: "$1 = 0$, impossible." }
          }
        ],
        redaction: {
          items: [
            { sk: "Overiť nekolinearitu smerových vektorov $\\vec{u}_d(2;1;-5)$ a $\\vec{v}(0;1;2)$.", fr: "Vérifier que $\\vec{u}_d$ et $\\vec{v}$ sont non colinéaires.", req: true },
            { sk: "Ukázať spor v 3. rovnici sústavy $\\implies$ *non coplanaires*.", fr: "Montrer l'incompatibilité du système $\\implies$ non coplanaires.", req: true },
            { sk: "Skončiť pri tom, že prvé dve rovnice majú riešenie $(t; s)$.", fr: "S'arrêter après avoir résolu les deux premières équations.", req: false }
          ],
          modelFr: `$\\vec{n}\\cdot\\vec{n}_2 = 0$ et $\\vec{n}, \\vec{n}_2$ sont non colinéaires : $(ABC) \\perp \\mathcal{P}_2$ et leur intersection est $(d): x=2t,\\; y=t,\\; z=6-5t\\;(t\\in\\mathbb{R})$.
$\\vec{u}_d(2\\,;\\,1\\,;\\,-5)$ et $\\vec{v}(0\\,;\\,1\\,;\\,2)$ sont non colinéaires et le système d'intersection n'a pas de solution ($1\\neq 0$) : $(d)$ et $(L)$ sont non coplanaires.`
        }
      },
      {
        id: "m7",
        title: { sk: "7. Vzdialenosť bodu od priamky (2 metódy)", fr: "7. Distance d'un point à une droite (2 méthodes)" },
        desc: { sk: "Nájdi vzdialenosť bodu $D(2;2;2)$ od priamky $(AB): x=3-t, y=2t, z=0$ minimalizáciou $DM(t)^2$.", fr: "Calculer $d(D,(AB))$ par minimisation de $DM(t)^2$." },
        heuristic: [
          {
            prompt: { sk: "Pre $DM(t)^2 = at^2 + bt + c$ ($a > 0$), v ktorom bode nastáva minimum?", fr: "Pour $DM(t)^2 = at^2 + bt + c$ ($a > 0$), où se trouve le minimum ?" },
            options: [
              { sk: "V $t_0 = -\\frac{b}{2a}$.", fr: "En $t_0 = -\\frac{b}{2a}$.", ok: true },
              { sk: "V $t_0 = \\frac{b}{2a}$.", fr: "En $t_0 = \\frac{b}{2a}$.", ok: false }
            ],
            explain: { sk: "Presne tak!", fr: "Exact !" }
          }
        ],
        calcs: [
          {
            label: { sk: "Roznásob $DM(t)^2 = (1-t)^2 + (2t-2)^2 + 4$ (tvar `at^2+bt+c`)", fr: "Développer $DM(t)^2 = (1-t)^2 + (2t-2)^2 + 4$" },
            format: { sk: "(tvar: at^2+bt+c)", fr: "(forme : at^2+bt+c)" },
            answers: ["5t^2-10t+9"],
            hint1: { sk: "$(1-2t+t^2) + (4t^2-8t+4) + 4$.", fr: "$(1-2t+t^2) + (4t^2-8t+4) + 4$." },
            hint2: { sk: "Sčítaj koeficienty pri $t^2$, $t$ a konštanty.", fr: "Regrouper les termes." }
          },
          {
            label: { sk: "Parameter $t_0$ pre minimum", fr: "Paramètre $t_0$ du minimum" },
            format: { sk: "(celé číslo)", fr: "(entier)" },
            answers: ["1"],
            hint1: { sk: "$t_0 = -\\frac{b}{2a}$.", fr: "$t_0 = -\\frac{b}{2a}$." },
            hint2: { sk: "$-\\frac{-10}{2\\cdot 5}$.", fr: "$\\frac{10}{10}$." }
          },
          {
            label: { sk: "Minimálna vzdialenosť $d(D,(AB))$ v cm", fr: "Distance minimale $d(D,(AB))$ en cm" },
            format: { sk: "(celé číslo)", fr: "(entier)" },
            answers: ["2"],
            hint1: { sk: "Dosaď $t_0$ do $DM(t)^2$ a zober odmocninu.", fr: "Remplacer $t_0$ dans $DM^2$ puis prendre la racine." },
            hint2: { sk: "$DM(1)^2 = 5 - 10 + 9 = 4 \\implies \\sqrt{4}$.", fr: "$\\sqrt{4}$." }
          }
        ],
        redaction: {
          items: [
            { sk: "Zdôvodniť, že minimum $DM$ nastáva v rovnakom $t_0$ ako minimum $DM^2$.", fr: "Justifier que $DM$ et $DM^2$ ont le même minimum.", req: true },
            { sk: "Zobrať odmocninu z $DM(t_0)^2$ na záver.", fr: "Prendre la racine carrée de $DM(t_0)^2$.", req: true },
            { sk: "Ponechať výsledok ako $4\\text{ cm}$ bez odmocnenia.", fr: "Laisser $4\\text{ cm}$ sans racine carrée.", req: false }
          ],
          modelFr: `$DM(t)^2 = 5t^2 - 10t + 9$, dont le minimum est atteint en $t_0 = -\\dfrac{-10}{10} = 1$.
Ainsi $d(D,(AB)) = \\sqrt{5(1)^2 - 10(1) + 9} = \\sqrt{4} = 2\\text{ cm}$.`
        }
      },
      {
        id: "m8",
        title: { sk: "8. Vektorový súčin, obsah, objem & mierka", fr: "8. Produit vectoriel, aire, volume & unité" },
        desc: { sk: "Vypočítaj $\\overrightarrow{CA}\\wedge\\overrightarrow{CB}$, obsah $\\mathcal{A}_{ABC}$, objem $V_{OABC}$ a over $OH$.", fr: "Calculer $\\overrightarrow{CA}\\wedge\\overrightarrow{CB}$, $\\mathcal{A}_{ABC}$, $V_{OABC}$ et $OH$." },
        heuristic: [
          {
            prompt: { sk: "Prečo vytkneme $18$ z $(36;18;18) = 18(2;1;1)$?", fr: "Pourquoi factoriser $18$ dans $(36\\,;\\,18\\,;\\,18) = 18(2\\,;\\,1\\,;\\,1)$ ?" },
            options: [
              { sk: "Aby sme normu vypočítali ako $18\\sqrt{2^2+1^2+1^2}$ bez veľkých mocnín.", fr: "Pour calculer la norme $18\\sqrt{2^2+1^2+1^2}$ sans grands carrés.", ok: true },
              { sk: "Aby sme zmenili smer vektora.", fr: "Pour changer la direction du vecteur.", ok: false }
            ],
            explain: { sk: "Presne tak!", fr: "Exact !" }
          }
        ],
        calcs: [
          {
            label: { sk: "Vektorový súčin $(3;0;-6) \\wedge (0;6;-6)$", fr: "Produit vectoriel $(3\\,;\\,0\\,;\\,-6) \\wedge (0\\,;\\,6\\,;\\,-6)$" },
            format: { sk: "(tvar: x;y;z)", fr: "(format : x;y;z)" },
            answers: ["36;18;18", "(36;18;18)"],
            hint1: { sk: "Nezabudni na mínus v 2. zložke.", fr: "Attention au signe moins sur la 2e coordonnée." },
            hint2: { sk: "$x = 36$, $y = -(-18)$, $z = 18$.", fr: "$(36\\,;\\,18\\,;\\,18)$." }
          },
          {
            label: { sk: "Obsah $\\mathcal{A}_{ABC}$ v $\\text{cm}^2$", fr: "Aire $\\mathcal{A}_{ABC}$ en $\\text{cm}^2$" },
            format: { sk: "(tvar: a*sqrt(b))", fr: "(format : a*sqrt(b))" },
            answers: ["9*sqrt(6)", "9sqrt(6)", "9√6"],
            hint1: { sk: "$\\frac{18\\sqrt{2^2+1^2+1^2}}{2}$.", fr: "$\\frac{18\\sqrt{6}}{2}$." },
            hint2: { sk: "$9\\sqrt{6}$.", fr: "$9\\sqrt{6}$." }
          },
          {
            label: { sk: "Objem $V_{OABC}$ v $\\text{cm}^3$", fr: "Volume $V_{OABC}$ en $\\text{cm}^3$" },
            format: { sk: "(celé číslo)", fr: "(entier)" },
            answers: ["18"],
            hint1: { sk: "$V = \\frac{1}{3}(\\frac{1}{2}\\cdot 3\\cdot 6)\\cdot 6$.", fr: "$V = \\frac{1}{3}\\times 9\\times 6$." },
            hint2: { sk: "$3 \\times 6$.", fr: "$18$." }
          },
          {
            label: { sk: "Vzdialenosť $OH = \\frac{3V_{OABC}}{\\mathcal{A}_{ABC}}$ v cm", fr: "Distance $OH$ en cm" },
            format: { sk: "(tvar: sqrt(n))", fr: "(format : sqrt(n))" },
            answers: ["sqrt(6)", "√6"],
            hint1: { sk: "$\\frac{3\\cdot 18}{9\\sqrt{6}} = \\frac{6}{\\sqrt{6}}$.", fr: "$\\frac{6}{\\sqrt{6}}$." },
            hint2: { sk: "Usmerni menovateľa: $\\frac{6\\sqrt{6}}{6}$.", fr: "$\\frac{6\\sqrt{6}}{6}$." }
          }
        ],
        redaction: {
          items: [
            { sk: "Uviesť vzorec $\\mathcal{A}_{ABC} = \\frac{1}{2}\\|\\overrightarrow{CA}\\wedge\\overrightarrow{CB}\\|$.", fr: "Écrire $\\mathcal{A}_{ABC} = \\frac{1}{2}\\|\\overrightarrow{CA}\\wedge\\overrightarrow{CB}\\|$.", req: true },
            { sk: "Zdôvodniť zmenu podstavy na $(ABC)$ s výškou $OH$.", fr: "Justifier le changement de base.", req: true },
            { sk: "Usmerniť $\\frac{6}{\\sqrt{6}} = \\sqrt{6}\\text{ cm}$.", fr: "Rationaliser $\\frac{6}{\\sqrt{6}} = \\sqrt{6}\\text{ cm}$.", req: true },
            { sk: "Vynechať jednotky.", fr: "Omettre les unités.", req: false }
          ],
          modelFr: `$\\mathcal{A}_{ABC} = 9\\sqrt{6}\\text{ cm}^2$ et $V_{OABC} = 18\\text{ cm}^3$. En prenant $(ABC)$ pour base : $OH = \\dfrac{54}{9\\sqrt{6}} = \\sqrt{6}\\text{ cm}$.`
        }
      }
    ]
  }
};
