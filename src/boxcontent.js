// Label Contents
// 1: 'About'
// 2: 'Skills'
// 3: 'Experience'
// 4: 'Education'
// 5: 'Projects'
// 6: 'Contact'

// Declaration
const boxContent = {}
boxContent.helloWorld = {}
boxContent.iDo = {}
boxContent.presentation = {}
boxContent.cont1 = {}
boxContent.cont2 = {}
boxContent.cont3 = {}
boxContent.cont4 = {}
boxContent.cont5 = {}
boxContent.cont6 = {}

// Main
boxContent.helloWorld.en = `Hello, World, my name is`
boxContent.helloWorld.fr = `Bonjour, Monde, je m'appelle`
boxContent.helloWorld.pt = `Olá, Mundo, meu nome é`
boxContent.iDo.en = `Front-End Developer.`
boxContent.iDo.fr = `Front-End Développeur.`
boxContent.iDo.pt = `Desenvolvedor Front-End.`
boxContent.presentation.en = `I'm a former architect with over a decade of experience who opted to build interfaces for the web. Passionate about graphic design, 3D modeling, product development and computer programming.`
boxContent.presentation.fr = `Je suis un ancient architecte avec plus d'une décennie d'expérience qui a choisi de construire des interfaces pour le web. Passionné par le graphisme, la modélisation 3D, le développement de produits et la programmation informatique.`
boxContent.presentation.pt = `Sou um ex-arquiteto com mais de uma década de experiência que optou por construir interfaces para a web. Apaixonado por design gráfico, modelagem 3D, desenvolvimento de produtos e programação de computadores.`

// Content Box 1
boxContent.cont1.en = `
<head>
<h2>About Me</h2>
</head>
<section>
  <div class="photo-paragraph">
    <img class="portrait" src="portrait.png" alt="Alexandre's portrait" />
    <p>
      My name is Alexandre Leitão Santos and I am passionate about design and
      programming. I'm Portuguese and I lived my whole life in Brazil. I recently moved
      to Europe. I graduated in architecture and urbanism at the University of São
      Paulo, the institution from which I also obtained my Master of Science degree.
    </p>
  </div>
  <p>
    From very early on in my career I made bridges between architectural projects and
    the field of information technology. This relationship ranged from the traditional
    use of CAD and 3D modeling to the development of complex projects in BIM (Building
    Information Modeling) and urban analysis in GIS (Geographic Information Systems). At
    the same time, I had the opportunity to develop my skills in the field of graphic
    design, something that started as a hobby but soon took on a formal dimension.
  </p>
  <p>
    Professional needs led me to learn the fundamentals of computer science in addition
    to programming languages. Today, I'm looking for a career as a developer that
    considers my previous experiences and acquired skills.
  </p>
  <p>
    I really enjoy working in teams, but I also value introspection time in developing
    individual tasks. I always strive to discover new resources and maintain continuous
    learning and, therefore, I seek stimulating environments to share knowledge.
  </p>
  <p>
    I am passionate about gastronomy, photography, cinema and, of course, design. I have
    three cats, a son and a lovely wife. I also like to chat about it all. If you want,
    connect with me and let's talk!
  </p>
  </section>
  `
  boxContent.cont1.fr = `
  <head>
    <h2>Sur Moi</h2>
  </head>
  <section>
  <div class="photo-paragraph">
    <img class="portrait" src="portrait.png" alt="Alexandre's portrait" />
    <p>
      Je m'appelle Alexandre Leitão Santos et je suis passionné par le design et la
      programmation. Je suis portugais et j'ai vécu toute ma vie au Brésil. J'ai récemment
      déménagé en Europe. Je suis diplômé en architecture et urbanisme de l'Université de
      São Paulo, l'institution où j'ai également obtenu mon Master of Science.
    </p>
  </div>
  <p>
    Très tôt dans ma carrière, j'ai établi des ponts entre les projets architecturaux et
    le domaine des technologies de l'information. Cette relation allait de l'utilisation
    traditionnelle du CAD et de la modélisation 3D au développement de projets complexes
    en BIM (Modélisation des Informations du Bâtiment) et à l'analyse urbaine en SIG
    (Systèmes d'Information Géographique). Parallèlement, j'ai eu l'opportunité de
    développer mes compétences dans le domaine du design graphique, quelque chose qui a
    commencé comme un passe-temps mais a rapidement pris une dimension formelle.
  </p>
  <p>
    Les besoins professionnels m'ont amené à apprendre les bases de l'informatique en plus
    des langages de programmation. Aujourd'hui, je recherche une carrière de développeur
    qui mette à profit mes expériences précédentes et les compétences acquises.
  </p>
  <p>
    J'aime vraiment travailler en équipe, mais j'apprécie le temps d'introspection dans le
    développement des tâches individuelles. Je m'efforce toujours de découvrir de
    nouvelles ressources et de maintenir un apprentissage continu et, par conséquent, je
    recherche des environnements stimulants pour partager les connaissances.
  </p>
  <p>
    Je suis passionné de gastronomie, de photographie, de cinéma et bien sûr de design.
    J'ai trois chats, un fils et une femme adorable. J'aime aussi parler de tout ça. Si
    vous le souhaitez, contactez-moi et parlons-en !
  </p>
</section>
`
boxContent.cont1.pt = `
<head>
<h2>Sobre Mim</h2>
</head>
<section>
<div class="photo-paragraph">
  <img class="portrait" src="portrait.png" alt="Alexandre's portrait" />
  <p>
    Me chamo Alexandre Leitão Santos e sou apaixonado por design e programação. Sou
    português e morei minha vida toda no Brasil. Recentemente, passei a viver na
    Europa. Me formei em arquitetura e urbanismo pela Universidade de São Paulo,
    instituição pela qual também obtive meu título de Mestre em Ciências.
  </p>
</div>
<p>
  Desde muito cedo na carreira tracei pontes entre os projetos de arquitetura e o
  campo da informática. Essa relação foi desde o tradicional uso do CAD e da modelagem
  3D até o desenvolvimento de projetos complexos em BIM (Modelagem da Informação da
  Construção) e de análises urbanas em SIG (Sistemas de Informação Geográfica). Ao
  mesmo tempo, tive a oportunidade de desenvolver minhas habilidades no campo do
  design gráfico, algo que começou como hobbie mas que logo tomou dimensão formal.
</p>
<p>
  As necessidades profissionais me levaram a aprender os fundamentos das ciências da
  computação, além de linguagens de programação. Hoje, busco uma carreira como
  desenvolvedor que se utilize das minhas experiências prévias e das minhas
  competências adquiridas.
</p>
<p>
  Gosto muito de trabalhar em equipes, mas valorizo o tempo de introspecção no
  desenvolvimento de tarefas individuais. Empenho-me sempre em conhecer novos recursos
  e manter a aprendizagem continuada e, por isso, busco ambientes estimulantes para
  compartilhar conhecimentos.
</p>
<p>
  Sou aficionado por gastronomia, fotografia, cinema e, claro, por design. Tenho três
  gatos, um filho e uma adorável esposa. Também gosto muito de falar sobre isso tudo.
  Se você quiser, conecte-se a mim e vamos conversar!
</p>
</section>
`
// Content Box 2
boxContent.cont2.en = `
<header>
<h2>Skills</h2>
</header>
<section>
<h3>Coding Languages</h3>
<p>
  I learned most of these languages from real needs, through self-learning with the
  help of courses or books and immediately putting the acquired knowledge into
  practice. My goal is to know the basis of as many languages as possible while
  deepening the knowledge of the most necessary ones.
</p>
<div class="percent-container">
  <div class="percent-box">
    <div class="percent">
      <svg class="perc080">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">CSS</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc080">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">HTML</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc060">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">JavaScript</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc040">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">PHP</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc020">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Python</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc020">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">TypeScript</div>
    </div>
  </div>
</div>
<h3>Dev Resources</h3>
<p>
  I try to get to know what the mainstream requires, focusing on the most modern, but
  I also intend to learn less used resources, but with a strong capacity to help in my
  projects.
</p>
<div class="percent-container">
  <div class="percent-box">
    <div class="percent">
      <svg class="perc060">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Bootstrap</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc060">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Bulma</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc060">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Git / Github</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc040">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">JQuery</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc040">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">MongoDB</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc060">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Node.js</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc080">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">React</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc060">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Three.js</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc040">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Wordpress</div>
    </div>
  </div>
</div>
<h3>Design Tools</h3>
<p>
  This group of competencies goes beyond allowing the possibility of interaction with
  UX/UI professionals. It's a set of tools that I'm very familiar with from very early
  on in my career.
</p>
<div class="percent-container">
  <div class="percent-box">
    <div class="percent">
      <svg class="perc060">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Adobe Illustrator</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc080">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Adobe InDesign</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc080">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Adobe Photoshop</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc060">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Adobe XD</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc060">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Affinity</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc080">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Figma</div>
    </div>
  </div>
</div>
<h3>Drafting and 3D Modeling</h3>
<p>
  This set is probably the one I have the most time of experience and high mastery of,
  as they are tools that have been widely used by me during my career as an architect
  and professor.
</p>
<div class="percent-container">
  <div class="percent-box">
    <div class="percent">
      <svg class="perc060">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Adobe Substance 3D</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc100">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Autodesk AutoCAD</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc100">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Autodesk Revit</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc080">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Blender</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc080">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Rhinoceros 3D + Grasshopper</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc100">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">SketchUp</div>
    </div>
  </div>
</div>
<h3>Productivity Resources</h3>
<p>
  Experiences in previous companies put me in contact with resources that I learned to
  recognize as necessary for the good performance of project teams.
</p>
<div class="percent-container">
  <div class="percent-box">
    <div class="percent">
      <svg class="perc060">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Agile/Scrum Methodology</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc080">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Google Workspace</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc080">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Microsoft 365</div>
    </div>
  </div>
</div>
</section>
`
boxContent.cont2.fr = `
<header>
<h2>Compétences</h2>
</header>
<section>
<h3>Langages de Codage</h3>
<p>
  J'ai appris la plupart de ces langues à partir de besoins réels, par
  auto-apprentissage à l'aide de cours ou de livres et mettant immédiatement en
  pratique les connaissances acquises. Mon objectif est de connaître les bases d'un
  maximum de langages tout en approfondissant la connaissance des plus nécessaires.
</p>
<div class="percent-container">
  <div class="percent-box">
    <div class="percent">
      <svg class="perc080">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">CSS</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc080">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">HTML</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc060">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">JavaScript</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc040">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">PHP</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc020">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Python</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc020">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">TypeScript</div>
    </div>
  </div>
</div>
<h3>Ressources de Développement</h3>
<p>
  J'essaie d'apprendre à connaître ce que le mainstream exige, en me concentrant sur
  les plus modernes, mais j'ai également l'intention d'apprendre des ressources moins
  utilisées, mais avec une forte capacité à aider dans mes projets.
</p>
<div class="percent-container">
  <div class="percent-box">
    <div class="percent">
      <svg class="perc060">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Bootstrap</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc060">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Bulma</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc060">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Git / Github</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc040">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">JQuery</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc040">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">MongoDB</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc060">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Node.js</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc080">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">React</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc060">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Three.js</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc040">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Wordpress</div>
    </div>
  </div>
</div>
<h3>Outils de Design</h3>
<p>
  Ce groupe de compétences va au-delà de la possibilité d'interaction avec des
  professionnels UX/UI. C'est un ensemble d'outils que je connais très bien depuis le
  début de ma carrière.
</p>
<div class="percent-container">
  <div class="percent-box">
    <div class="percent">
      <svg class="perc060">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Adobe Illustrator</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc080">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Adobe InDesign</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc080">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Adobe Photoshop</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc060">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Adobe XD</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc060">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Affinity</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc080">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Figma</div>
    </div>
  </div>
</div>
<h3>Dessin et Modélisation 3D</h3>
<p>
  Cet ensemble est probablement celui que j'ai le plus d'expérience et de maîtrise,
  car ce sont des outils que j'ai largement utilisés au cours de ma carrière
  d'architecte et de professeur.
</p>
<div class="percent-container">
  <div class="percent-box">
    <div class="percent">
      <svg class="perc060">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Adobe Substance 3D</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc100">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Autodesk AutoCAD</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc100">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Autodesk Revit</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc080">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Blender</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc080">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Rhinoceros 3D + Grasshopper</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc100">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">SketchUp</div>
    </div>
  </div>
</div>
<h3>Ressources de Productivité</h3>
<p>
  Des expériences dans des entreprises précédentes m'ont mis en contact avec des
  ressources que j'ai appris à reconnaître comme nécessaires au bon fonctionnement des
  équipes de projet.
</p>
<div class="percent-container">
  <div class="percent-box">
    <div class="percent">
      <svg class="perc060">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Méthodologie Agile/Scrum</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc080">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Google Workspace</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc080">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Microsoft 365</div>
    </div>
  </div>
</div>
</section>
`
boxContent.cont2.pt = `
<header>
<h2>Competências</h2>
</header>
<section>
<h3>Linguagens de Programação</h3>
<p>
  Aprendi a maioria destas linguagens a partir de necessidades reais, através de
  autoaprendizagem com o auxílio de cursos ou livros e colocando imediatamente em
  prática os conhecimentos adquiridos. Meu objetivo é conhecer a base de tantas
  linguagens quanto possível ao mesmo tempo em que aprofundo o conhecimento das mais
  necessárias.
</p>
<div class="percent-container">
  <div class="percent-box">
    <div class="percent">
      <svg class="perc080">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">CSS</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc080">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">HTML</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc060">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">JavaScript</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc040">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">PHP</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc020">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Python</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc020">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">TypeScript</div>
    </div>
  </div>
</div>
<h3>Recursos de Desenvolvimento</h3>
<p>
  Procuro conhecer bem o que o mainstream exige, com foco no que há de mais moderno,
  mas também tenciono aprender recursos menos utilizados, porém com forte capacidade
  de auxiliar nos meus projetos.
</p>
<div class="percent-container">
  <div class="percent-box">
    <div class="percent">
      <svg class="perc060">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Bootstrap</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc060">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Bulma</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc060">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Git / Github</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc040">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">JQuery</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc040">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">MongoDB</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc060">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Node.js</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc080">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">React</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc060">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Three.js</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc040">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Wordpress</div>
    </div>
  </div>
</div>
<h3>Ferramentas de Design</h3>
<p>
  Este grupo de competências vai além de permitir a possibilidade de interação com os
  profissionais de UX/UI. É um conjunto de ferramentas com o qual tenho imensa
  familiaridade desde muito cedo na minha carreira.
</p>
<div class="percent-container">
  <div class="percent-box">
    <div class="percent">
      <svg class="perc060">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Adobe Illustrator</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc080">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Adobe InDesign</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc080">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Adobe Photoshop</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc060">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Adobe XD</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc060">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Affinity</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc080">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Figma</div>
    </div>
  </div>
</div>
<h3>Desenho e Modelagem 3D</h3>
<p>
  Este conjunto é, provavelmente, o que eu tenho mais tempo de experiência e alto
  domínio, já que são ferramentas que foram amplamente utilizadas durante minha
  carreira como arquiteto e professor.
</p>
<div class="percent-container">
  <div class="percent-box">
    <div class="percent">
      <svg class="perc060">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Adobe Substance 3D</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc100">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Autodesk AutoCAD</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc100">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Autodesk Revit</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc080">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Blender</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc080">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Rhinoceros 3D + Grasshopper</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc100">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">SketchUp</div>
    </div>
  </div>
</div>
<h3>Recursos de Produtividade</h3>
<p>
  As experiências em empresas anteriores me colocaram em contato com recursos que
  aprendi a reconhecer como necessários para o bom desempenho das equipes de projetos.
</p>
<div class="percent-container">
  <div class="percent-box">
    <div class="percent">
      <svg class="perc060">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Metodologia Agile/Scrum</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc080">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Google Workspace</div>
    </div>
  </div>
  <div class="percent-box">
    <div class="percent">
      <svg class="perc080">
        <circle cx="50" cy="50" r="50"></circle>
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <div class="perc-label">Microsoft 365</div>
    </div>
  </div>
</div>
</section>
`

// Content Box 3
boxContent.cont3.en = `
<header>
<h2>Experience</h2>
</header>
<section>
<div>
  <h4>Anhumas Associated Architects</h4>
  <p>
    <i class="fa-solid fa-calendar-days"></i> aug 2014 – dec 2021<br />
    <i class="fa-solid fa-briefcase"></i> Founding partner and chief architect
  </p>
</div>
<p>
  I was responsible for customer acquisition, internal branding, product development,
  team coordination, design and elaboration of architectural projects from feasibility
  studies to the documentation for construction stage. It was my greatest professional
  experience to date, an office under my full responsibility. It was where I learned the
  most about product development and project management methodologies, including strict
  version control for BIM, usage of productivity tools and process quality assessment.
  The technologies used there for Building Information Modeling were fundamental for my
  understanding of fundamental computer science concepts, especially object-oriented
  programming.
</p>
<div>
  <h4>
    <a target="_blank" rel="external" href="https://www.unasp.br/"
      >UNASP – Adventist College of São Paulo
      <i class="fa-solid fa-arrow-up-right-from-square"> </i>
    </a>
  </h4>
  <p>
    <i class="fa-solid fa-calendar-days"></i> jan 2015 – jul 2021<br />
    <i class="fa-solid fa-briefcase"></i> Professor of architectural design, 3D
    visualization and BIM
  </p>
</div>
<p>
  I was initially responsible for teaching subjects for the Architecture and Urbanism
  course, especially those related to the digital development of projects, whether in
  photorealistic 3D visualization, CAD or Building Information Modeling (BIM).
  Subsequently, I assumed leadership roles, participating in the review of the course’s
  pedagogical matrix and its update to a hybrid teaching model, and the coordination of
  the postgraduate course "Building Information Modeling for Construction Projects", in
  which I also taught subjects on informatics theory applied to the building design and
  the objects parameterization in BIM.
</p>
<div>
  <h4>
    <a target="_blank" rel="external" href="https://www.arquitec.com.br/"
      >Arquitec – School of Art and Design
      <i class="fa-solid fa-arrow-up-right-from-square"></i>
    </a>
  </h4>
  <p>
    <i class="fa-solid fa-calendar-days"></i> apr 2015 – sep 2020<br />
    <i class="fa-solid fa-briefcase"></i> Professor of interior design and graphic
    design
  </p>
</div>
<p>
  I was responsible for subjects for the postgraduate course in Interior Design,
  specifically on corporate design projects and graphic production applied to interior
  design. In the latter case, the fundamental concepts of digital graphic design and
  media methods for product presentation were approached.
</p>
<div>
  <h4>
    <a target="_blank" rel="external" href="https://faal.com.br/"
      >FAAL – Limeira Management and Arts College
      <i class="fa-solid fa-arrow-up-right-from-square"></i>
    </a>
  </h4>
  <p>
    <i class="fa-solid fa-calendar-days"></i> feb 2013 – dec 2015<br />
    <i class="fa-solid fa-briefcase"></i> Professor of interior design and 3D
    visualization
  </p>
</div>
<p>
  I was responsible for interior design project disciplines in the Interior Design
  course.
</p>
<div>
  <h4>TC Urbes</h4>
  <p>
    <i class="fa-solid fa-calendar-days"></i> oct 2013 – may 2014<br />
    <i class="fa-solid fa-briefcase"></i> Freelance urban planning analyst
  </p>
</div>
<p>
  I was responsible for the systematization of data, critical analysis and elaboration
  of a diagnostic report for the initial phase of the Passo Fundo Mobility Plan
  development.
</p>
<div>
  <h4>
    <a target="_blank" rel="external" href="https://www.piratininga.com.br/"
      >Piratininga Associated Architects
      <i class="fa-solid fa-arrow-up-right-from-square"></i>
    </a>
  </h4>
  <p>
    <i class="fa-solid fa-calendar-days"></i> apr 2010 – feb 2011<br />
    <i class="fa-solid fa-briefcase"></i> Junior architect
  </p>
</div>
<p>
  I was responsible for assisting teams in the development of large architectural
  projects. It was where I had contact, for the first time, with productivity
  methodologies applied to product development.
</p>
</section>
`
boxContent.cont3.fr = `
<header>
<h2>Expérience</h2>
</header>
<section>
<div>
  <h4>Anhumas Architectes Associés</h4>
  <p>
    <i class="fa-solid fa-calendar-days"></i> août 2014 – déc. 2021<br />
    <i class="fa-solid fa-briefcase"></i> Associé fondateur et architecte en chef
  </p>
</div>
<p>
  J'étais responsable de l'acquisition de clients, de l'image de marque interne, du
  développement de produits, de la coordination d'équipe, de la conception et du
  développement de projets architecturaux depuis les études de faisabilité jusqu'à la
  documentation pour la phase de construction. Ce fut ma plus grande expérience
  professionnelle à ce jour, un cabinet sous mon entière responsabilité. C'est là que
  j'ai le plus appris sur les méthodologies de développement de produits et de gestion
  de projet, y compris le contrôle strict des versions pour le BIM, l'utilisation
  d'outils de productivité et l'évaluation de la qualité des processus. Les technologies
  utilisées là-bas pour la modélisation des informations du bâtiment étaient
  fondamentales pour ma compréhension des concepts fondamentaux de l'informatique, en
  particulier la programmation orientée objet.
</p>
<div>
  <h4>
    <a target="_blank" rel="external" href="https://www.unasp.br/"
      >UNASP – Centre Universitaire Adventiste de São Paulo
      <i class="fa-solid fa-arrow-up-right-from-square"> </i>
    </a>
  </h4>
  <p>
    <i class="fa-solid fa-calendar-days"></i> janv. 2015 – juill. 2021<br />
    <i class="fa-solid fa-briefcase"></i> Professeur de conception architecturale,
    visualisation 3D et BIM
  </p>
</div>
<p>
  J'étais initialement responsable de l'enseignement des matières du parcours
  Architecture et Urbanisme, notamment celles liées au développement numérique des
  projets, que ce soit en visualisation 3D photoréaliste, en CAD ou en modélisation des
  informations du bâtiment (BIM). Par la suite, j'ai assumé des rôles de leadership, en
  participant à la révision de la matrice pédagogique du cours et à sa mise à jour vers
  un modèle d'enseignement hybride, et à la coordination du cours de spécialisation de
  troisième cycle en « Modélisation des informations du bâtiment pour les projets de
  construction », dans lequel j'ai également a enseigné des cours sur la théorie de
  l'informatique appliquée à la conception de bâtiments et au paramétrage d'objets en
  BIM.
</p>
<div>
  <h4>
    <a target="_blank" rel="external" href="https://www.arquitec.com.br/"
      >Arquitec – École d'Art et de Design
      <i class="fa-solid fa-arrow-up-right-from-square"></i>
    </a>
  </h4>
  <p>
    <i class="fa-solid fa-calendar-days"></i> avr. 2015 – sept. 2020<br />
    <i class="fa-solid fa-briefcase"></i> Professeur d'architecture d'intérieur et de
    graphisme
  </p>
</div>
<p>
  J'étais responsable des cours de spécialisation de troisième cycle en architecture
  d'intérieur, plus précisément sur les projets d'entreprise et sur le graphisme
  appliqué au design d'intérieur. Dans ce dernier, les concepts fondamentaux de la
  conception graphique numérique et les méthodes médiatiques de présentation des
  produits ont été présentés.
</p>
<div>
  <h4>
    <a target="_blank" rel="external" href="https://faal.com.br/"
      >FAAL – Faculté d'Administration et des Arts de Limeira
      <i class="fa-solid fa-arrow-up-right-from-square"></i>
    </a>
  </h4>
  <p>
    <i class="fa-solid fa-calendar-days"></i> févr. 2013 – déc. 2015<br />
    <i class="fa-solid fa-briefcase"></i> Professeur de design d'intérieur et de
    visualisation 3D
  </p>
</div>
<p>
  J'étais responsable des disciplines de projet de design d'intérieur dans le cours de
  design d'intérieur.
</p>
<div>
  <h4>TC Urbes</h4>
  <p>
    <i class="fa-solid fa-calendar-days"></i> oct. 2013 – mai 2014<br />
    <i class="fa-solid fa-briefcase"></i> Analyste indépendant en urbanisme
  </p>
</div>
<p>
  J'étais responsable de la systématisation des données, de l'analyse critique et de
  l'élaboration d'un rapport de diagnostic pour la phase initiale du développement du
  plan de mobilité de Passo Fundo.
</p>
<div>
  <h4>
    <a target="_blank" rel="external" href="https://www.piratininga.com.br/"
      >Piratininga Architectes Associés
      <i class="fa-solid fa-arrow-up-right-from-square"></i>
    </a>
  </h4>
  <p>
    <i class="fa-solid fa-calendar-days"></i> avr. 2010 – févr. 2011<br />
    <i class="fa-solid fa-briefcase"></i> Architecte junior
  </p>
</div>
<p>
  J'étais chargé d'accompagner les équipes dans le développement de grands projets
  architecturaux. C'est là que j'ai été en contact, pour la première fois, avec les
  méthodologies de productivité appliquées au développement de produits.
</p>
</section>
`
boxContent.cont3.pt = `
<header>
<h2>Experiência</h2>
</header>
<section>
<div>
  <h4>Anhumas Arquitetos Associados</h4>
  <p>
    <i class="fa-solid fa-calendar-days"></i> ago 2014 – dez 2021<br />
    <i class="fa-solid fa-briefcase"></i> Socio fundador e arquiteto chefe
  </p>
</div>
<p>
  Fui responsável pela captação de clientes, branding interno, desenvolvimento de
  produtos, coordenação de equipe, concepção e elaboração de projetos arquitetônicos
  desde os estudos de viabilidade até a etapa de documentação para obra. Foi a minha
  grande experiência profissional até hoje, um escritório sob minha inteira
  responsabilidade. Foi onde mais aprendi sobre as metodologias de desenvolvimento de
  produto e gestão de projetos, inclusive com rígido controle de versões para BIM, uso
  de ferramentas de produtividade e avaliação de qualidade de processos. As tecnologias
  ali utilizadas para a Modelagem da Informação da Construção foram fundamentais para a
  minha compreensão dos conceitos fundamentais da informática, em especial a programação
  orientada a objetos.
</p>
<div>
  <h4>
    <a target="_blank" rel="external" href="https://www.unasp.br/"
      >UNASP – Centro Universitário Adventista de São Paulo
      <i class="fa-solid fa-arrow-up-right-from-square"> </i>
    </a>
  </h4>
  <p>
    <i class="fa-solid fa-calendar-days"></i> jan 2015 – jul 2021<br />
    <i class="fa-solid fa-briefcase"></i> Professor de desenho arquitetônico,
    visualização 3D e BIM
  </p>
</div>
<p>
  Fui responsável, inicialmente, pela docência em disciplinas para o curso de
  Arquitetura e Urbanismo, em especial as relacionadas com o desenvolvimento digital de
  projetos, seja em visualização 3D fotorrealista, CAD ou na modelagem de informação da
  construção (BIM). Posteriormente, assumi funções de liderança, participando da revisão
  da matriz pedagógica do curso e sua atualização para um modelo híbrido de ensino e da
  coordenação do curso de pós-graduação em “Modelagem da Informação da Construção para
  Projetos da Construção Civil”, em que também ministrava disciplinas a respeito de
  teoria da informática aplicada ao projeto de edifícios e da parametrização de objetos
  em BIM.
</p>
<div>
  <h4>
    <a target="_blank" rel="external" href="https://www.arquitec.com.br/"
      >Arquitec – Escola de Arte e Design
      <i class="fa-solid fa-arrow-up-right-from-square"></i>
    </a>
  </h4>
  <p>
    <i class="fa-solid fa-calendar-days"></i> abr 2015 – set 2020<br />
    <i class="fa-solid fa-briefcase"></i> Professor de design de interiores e design
    gráfico
  </p>
</div>
<p>
  Fui responsável por disciplinas da pós-graduação em Design de Interiores,
  especificamente sobre projetos corporativos e sobre design gráfico aplicada ao design
  de interiores. Nesta última, apresentava-se os conceitos fundamentais do design
  gráfico digital e métodos midiáticos para apresentação de produtos.
</p>
<div>
  <h4>
    <a target="_blank" rel="external" href="https://faal.com.br/"
      >FAAL – Faculdade de Administração e Artes de Limeira
      <i class="fa-solid fa-arrow-up-right-from-square"></i>
    </a>
  </h4>
  <p>
    <i class="fa-solid fa-calendar-days"></i> fev 2013 – dez 2015<br />
    <i class="fa-solid fa-briefcase"></i> Professor de design de interiores e
    visualização 3D
  </p>
</div>
<p>
  Fui responsável por disciplinas de projeto de design de interiores no curso de Design
  de Interiores.
</p>
<div>
  <h4>TC Urbes</h4>
  <p>
    <i class="fa-solid fa-calendar-days"></i> out 2013 – mai 2014<br />
    <i class="fa-solid fa-briefcase"></i> Analista independente de urbanismo
  </p>
</div>
<p>
  Fui responsável pela sistematização de dados, análise crítica e elaboração de
  relatório de diagnóstico para a fase inicial do desenvolvimento do Plano de Mobilidade
  de Passo Fundo.
</p>
<div>
  <h4>
    <a target="_blank" rel="external" href="https://www.piratininga.com.br/"
      >Piratininga Arquitetos Associados
      <i class="fa-solid fa-arrow-up-right-from-square"></i>
    </a>
  </h4>
  <p>
    <i class="fa-solid fa-calendar-days"></i> abr 2010 – fev 2011<br />
    <i class="fa-solid fa-briefcase"></i> Arquiteto júnior
  </p>
</div>
<p>
  Fui responsável por auxiliar equipes no desenvolvimento de projetos arquitetônicos de
  grande porte. Foi onde tive contato, pela primeira vez, com metodologias de
  produtividade aplicadas ao desenvolvimento de produtos.
</p>
</section>
`

// Content Box 4
boxContent.cont4.en = `
<header>
<h2>Education</h2>
</header>
<section>
  <h3>Degrees</h3>
  <div class="title-flex">
    <h4>Master of Science</h4>
    <p>mar 2011 – may 2014</p>
  </div>
  <p>
    <a target="_blank" rel="external" href="https://www5.usp.br/#english">University of São Paulo <i class="fa-solid fa-arrow-up-right-from-square"></i></a><br />
    <a target="_blank" rel="external" href="https://www.iau.usp.br/">Institute of Architecture and Urbanism <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
  </p>
  <p>Master's Thesis:<br />
    <a target="_blank" rel="external" href="https://teses.usp.br/teses/disponiveis/102/102132/tde-20012015-093731/en.php">Useful landscape: Tietê River and São Paulo urbanization (1966-1986) <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
  </p>
  <div class="title-flex">
    <h4>Architecture and Urbanism</h4>
    <p>feb 2004 – dec 2009</p>
  </div>
  <p>
    <a target="_blank" rel="external" href="https://www5.usp.br/#english">University of São Paulo <i class="fa-solid fa-arrow-up-right-from-square"></i></a><br />
    <a target="_blank" rel="external" href="https://eesc.usp.br/en/">São Carlos School of Engineering <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
  </p>
  <p>Graduation Project:<br />
    <a target="_blank" rel="external" href="http://repositorio.iau.usp.br/handle/RIIAU/112">Metropolitan Maritime Terminals: infrastructure and landscape of a city at water's edge <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
  </p>
</section>
<section>
  <h3>Courses</h3>
  <div class="title-flex">
    <h4>Three.js Journey</h4>
    <p>2022</p>
  </div>
  <p>
    <a target="_blank" rel="external" href="https://threejs-journey.com/">Bruno Simon <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
  </p>
  <div class="title-flex">
    <h4>Git & Github Bootcamp</h4>
    <p>2022</p>
  </div>
  <p>
    <a target="_blank" rel="external" href="https://www.udemy.com/course/git-and-github-bootcamp/">Udemy / Colt Steele <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
  </p>
  <div class="title-flex">
    <h4>Modern React Bootcamp</h4>
    <p>2021</p>
  </div>
  <p>
    <a target="_blank" rel="external" href="https://www.udemy.com/course/modern-react-bootcamp/">Udemy / Colt Steele <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
  </p>
  <div class="title-flex">
    <h4>Web Developer Bootcamp</h4>
    <p>2021</p>
  </div>
  <p>
    <a target="_blank" rel="external" href="https://www.udemy.com/course/the-web-developer-bootcamp/">Udemy / Colt Steele <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
  </p>
  <div class="title-flex">
    <h4>Digital Product Design (UX & UI)</h4>
    <p>2021</p>
  </div>
  <p>
    <a target="_blank" rel="external" href="https://www.udemy.com/course/master-digital-product-design-ux-research-ui-design/">Udemy / Rob Sutcliffe <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
  </p>
  <div class="title-flex">
    <h4>Management for Design Offices</h4>
    <p>2014</p>
  </div>
  <p>
    <a target="_blank" rel="external" href="https://www.senac.br/">Senac <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
  </p>
  <div class="title-flex">
    <h4>Revit Architecture</h4>
    <p>2012</p>
  </div>
  <p>DRC Training and Consulting</p>
  <div class="title-flex">
    <h4>V-Ray</h4>
    <p>2010</p>
  </div>
  <p>Cadritech</p>
  <div class="title-flex">
    <h4>Digital 3D Modeling</h4>
    <p>2010</p>
  </div>
  <p>Cadritech</p>
</section>
`
boxContent.cont4.fr = `
<header>
<h2>Éducation</h2>
</header>
<section>
<h3>Diplômes</h3>
<div class="title-flex">
  <h4>Master of Science</h4>
  <p>mars 2011 – mai 2014</p>
</div>
<p>
  <a target="_blank" rel="external" href="https://www5.usp.br/#english"
    >Université de São Paulo <i class="fa-solid fa-arrow-up-right-from-square"></i></a
  ><br />
  <a target="_blank" rel="external" href="https://www.iau.usp.br/"
    >Institut d'architecture et d'urbanisme
    <i class="fa-solid fa-arrow-up-right-from-square"></i
  ></a>
</p>
<p>
  Mémoire de maîtrise :<br />
  <a
    target="_blank"
    rel="external"
    href="https://teses.usp.br/teses/disponiveis/102/102132/tde-20012015-093731/fr.php"
    >Paysage utile : la rivière Tieté et l’urbanisation de São Paulo (1966-1986)
    <i class="fa-solid fa-arrow-up-right-from-square"></i
  ></a>
</p>
<div class="title-flex">
  <h4>Architecture et Urbanisme</h4>
  <p>févr. 2004 – déc. 2009</p>
</div>
<p>
  <a target="_blank" rel="external" href="https://www5.usp.br/#english"
    >Université de São Paulo <i class="fa-solid fa-arrow-up-right-from-square"></i></a
  ><br />
  <a target="_blank" rel="external" href="https://eesc.usp.br/en/"
    >École d'ingénieur de São Carlos
    <i class="fa-solid fa-arrow-up-right-from-square"></i
  ></a>
</p>
<p>
  Projet de fin d'études :<br />
  <a
    target="_blank"
    rel="external"
    href="http://repositorio.iau.usp.br/handle/RIIAU/112"
    >Terminaux Maritimes Métropolitains : infrastructure et paysage d'une ville au
    bord de l'eau <i class="fa-solid fa-arrow-up-right-from-square"></i
  ></a>
</p>
</section>
<section>
<h3>Cours</h3>
<div class="title-flex">
  <h4>Three.js Journey</h4>
  <p>2022</p>
</div>
<p>
  <a target="_blank" rel="external" href="https://threejs-journey.com/"
    >Bruno Simon <i class="fa-solid fa-arrow-up-right-from-square"></i
  ></a>
</p>
<div class="title-flex">
  <h4>Git & Github Bootcamp</h4>
  <p>2022</p>
</div>
<p>
  <a
    target="_blank"
    rel="external"
    href="https://www.udemy.com/course/git-and-github-bootcamp/"
    >Udemy / Colt Steele <i class="fa-solid fa-arrow-up-right-from-square"></i
  ></a>
</p>
<div class="title-flex">
  <h4>Modern React Bootcamp</h4>
  <p>2021</p>
</div>
<p>
  <a
    target="_blank"
    rel="external"
    href="https://www.udemy.com/course/modern-react-bootcamp/"
    >Udemy / Colt Steele <i class="fa-solid fa-arrow-up-right-from-square"></i
  ></a>
</p>
<div class="title-flex">
  <h4>Web Developer Bootcamp</h4>
  <p>2021</p>
</div>
<p>
  <a
    target="_blank"
    rel="external"
    href="https://www.udemy.com/course/the-web-developer-bootcamp/"
    >Udemy / Colt Steele <i class="fa-solid fa-arrow-up-right-from-square"></i
  ></a>
</p>
<div class="title-flex">
  <h4>Digital Product Design (UX & UI)</h4>
  <p>2021</p>
</div>
<p>
  <a
    target="_blank"
    rel="external"
    href="https://www.udemy.com/course/master-digital-product-design-ux-research-ui-design/"
    >Udemy / Rob Sutcliffe <i class="fa-solid fa-arrow-up-right-from-square"></i
  ></a>
</p>
<div class="title-flex">
  <h4>Gestion de Bureaux de Design</h4>
  <p>2014</p>
</div>
<p>
  <a target="_blank" rel="external" href="https://www.senac.br/"
    >Senac <i class="fa-solid fa-arrow-up-right-from-square"></i
  ></a>
</p>
<div class="title-flex">
  <h4>Revit Architecture</h4>
  <p>2012</p>
</div>
<p>DRC Training and Consulting</p>
<div class="title-flex">
  <h4>V-Ray</h4>
  <p>2010</p>
</div>
<p>Cadritech</p>
<div class="title-flex">
  <h4>Modélisation Numérique 3D</h4>
  <p>2010</p>
</div>
<p>Cadritech</p>
</section>
`
boxContent.cont4.pt = `
<header>
<h2>Educação</h2>
</header>
<section>
<h3>Títulos</h3>
<div class="title-flex">
  <h4>Mestrado em ciências</h4>
  <p>mar 2011 – mai 2014</p>
</div>
<p>
  <a target="_blank" rel="external" href="https://www5.usp.br/"
    >Universidade de São Paulo
    <i class="fa-solid fa-arrow-up-right-from-square"></i></a
  ><br />
  <a target="_blank" rel="external" href="https://www.iau.usp.br/"
    >Instituto de Arquitetura e Urbanismo
    <i class="fa-solid fa-arrow-up-right-from-square"></i
  ></a>
</p>
<p>
  Dissertação de mestrado:<br />
  <a
    target="_blank"
    rel="external"
    href="https://teses.usp.br/teses/disponiveis/102/102132/tde-20012015-093731/pt-br.php"
    >Paisagem útil: o Rio Tietê e a urbanização paulistana (1966 - 1986)
    <i class="fa-solid fa-arrow-up-right-from-square"></i
  ></a>
</p>
<div class="title-flex">
  <h4>Arquitetura e Urbanismo</h4>
  <p>fev 2004 - dez 2009</p>
</div>
<p>
  <a target="_blank" rel="external" href="https://www5.usp.br/"
    >Universidade de São Paulo
    <i class="fa-solid fa-arrow-up-right-from-square"></i></a
  ><br />
  <a target="_blank" rel="external" href="https://eesc.usp.br/en/"
    >Escola de Engenharia de São Carlos
    <i class="fa-solid fa-arrow-up-right-from-square"></i
  ></a>
</p>
<p>
  Projeto de graduação:<br />
  <a
    target="_blank"
    rel="external"
    href="http://repositorio.iau.usp.br/handle/RIIAU/112"
    >Terminais Marítimos Metropolitanos: infraestrutura e paisagem de uma cidade à
    borda d’água <i class="fa-solid fa-arrow-up-right-from-square"></i
  ></a>
</p>
</section>
<section>
<h3>Cours</h3>
<div class="title-flex">
  <h4>Three.js Journey</h4>
  <p>2022</p>
</div>
<p>
  <a target="_blank" rel="external" href="https://threejs-journey.com/"
    >Bruno Simon <i class="fa-solid fa-arrow-up-right-from-square"></i
  ></a>
</p>
<div class="title-flex">
  <h4>Git & Github Bootcamp</h4>
  <p>2022</p>
</div>
<p>
  <a
    target="_blank"
    rel="external"
    href="https://www.udemy.com/course/git-and-github-bootcamp/"
    >Udemy / Colt Steele <i class="fa-solid fa-arrow-up-right-from-square"></i
  ></a>
</p>
<div class="title-flex">
  <h4>Modern React Bootcamp</h4>
  <p>2021</p>
</div>
<p>
  <a
    target="_blank"
    rel="external"
    href="https://www.udemy.com/course/modern-react-bootcamp/"
    >Udemy / Colt Steele <i class="fa-solid fa-arrow-up-right-from-square"></i
  ></a>
</p>
<div class="title-flex">
  <h4>Web Developer Bootcamp</h4>
  <p>2021</p>
</div>
<p>
  <a
    target="_blank"
    rel="external"
    href="https://www.udemy.com/course/the-web-developer-bootcamp/"
    >Udemy / Colt Steele <i class="fa-solid fa-arrow-up-right-from-square"></i
  ></a>
</p>
<div class="title-flex">
  <h4>Digital Product Design (UX & UI)</h4>
  <p>2021</p>
</div>
<p>
  <a
    target="_blank"
    rel="external"
    href="https://www.udemy.com/course/master-digital-product-design-ux-research-ui-design/"
    >Udemy / Rob Sutcliffe <i class="fa-solid fa-arrow-up-right-from-square"></i
  ></a>
</p>
<div class="title-flex">
  <h4>Gerenciamento de Escritórios de Design</h4>
  <p>2014</p>
</div>
<p>
  <a target="_blank" rel="external" href="https://www.senac.br/"
    >Senac <i class="fa-solid fa-arrow-up-right-from-square"></i
  ></a>
</p>
<div class="title-flex">
  <h4>Revit Architecture</h4>
  <p>2012</p>
</div>
<p>DRC Training and Consulting</p>
<div class="title-flex">
  <h4>V-Ray</h4>
  <p>2010</p>
</div>
<p>Cadritech</p>
<div class="title-flex">
  <h4>Modelagem Digital 3D</h4>
  <p>2010</p>
</div>
<p>Cadritech</p>
</section>
`

// Content Box 5
boxContent.cont5.en = ``
boxContent.cont5.fr = ``
boxContent.cont5.pt = `
<header>
<h2>Projetos</h2>
</header>
<section>
<h3>Web</h3>
<h4>Autorais</h4>
<div class="project-container">
  <div class="project-boxes">
    <div class="project-box">
      <div class="icons">
        <a
          target="_blank"
          rel="external"
          href="https://github.com/aleitaosantos/alexandreleitao-v1"
          ><i class="fa-brands fa-github"></i
        ></a>
        <a target="_blank" rel="external" href="https://alexandreleitao.netlify.app/"
          ><i class="fa-solid fa-up-right-from-square"></i
        ></a>
      </div>
      <div class="project-title">Website Pessoal</div>
      <div class="year">2022</div>
    </div>
    <div class="project-box">
      <div class="icons">
        <i class="fa-brands fa-github"></i>
        <i class="fa-solid fa-up-right-from-square"></i>
      </div>
      <div class="project-title">Unesco Heritage Sites</div>
      <div class="year">2022</div>
    </div>
    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">Website Anhumas Arquitetos Associados</div>
      <div class="year">2016</div>
    </div>
    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">Website Gabinete Urbano</div>
      <div class="year">2015</div>
    </div>
    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">Website Curso Linguagem</div>
      <div class="year">2015</div>
    </div>
  </div>
</div>
</section>
<section>
<h3>Design Gráfico</h3>
<h4>Autorais</h4>
<div class="project-container">
  <div class="project-boxes">
    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">Anuário LEAUC</div>
      <div class="year">2022</div>
    </div>
    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">Branding Urbanicidades</div>
      <div class="year">2016-2022</div>
    </div>
    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">Branding Anhumas Arquitetos Associados</div>
      <div class="year">2016</div>
    </div>
    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">Branding Gabinete Urbano</div>
      <div class="year">2014</div>
    </div>
    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">Branding Gato Urbano</div>
      <div class="year">2015</div>
    </div>
    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">Comunicação Estudos Urbanos SP</div>
      <div class="year">2014</div>
    </div>
    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">Branding EREA SP</div>
      <div class="year">2007</div>
    </div>
  </div>
</div>
</section>
<section>
<h3>Arquitetura e Urbanismo</h3>
<h4>Autorais</h4>
<div class="project-container">
  <div class="project-boxes">
    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>Museu Marítimo do Brasil</p>
        <p>Rio de Janeiro</p>
      </div>
      <div class="year">2021</div>
    </div>

    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>Igreja "Nova Semente"</p>
        <p>São Paulo</p>
      </div>
      <div class="year">2021</div>
    </div>

    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>CEVISA</p>
        <p>Engenheiro Coelho</p>
      </div>
      <div class="year">2021</div>
    </div>

    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>Residência Cazarotto</p>
        <p>Campinas</p>
      </div>
      <div class="year">2021</div>
    </div>

    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>Residência Gnatos</p>
        <p>Campinas</p>
      </div>
      <div class="year">2021</div>
    </div>

    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>Residência Vasconcellos</p>
        <p>Campinas</p>
      </div>
      <div class="year">2021</div>
    </div>

    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>Hospital Veterinário Universitário</p>
        <p>Engenheiro Coelho</p>
      </div>
      <div class="year">2019</div>
    </div>

    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>Residência Mussi</p>
        <p>Paraty</p>
      </div>
      <div class="year">2018</div>
    </div>

    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>Residência Biller</p>
        <p>Campinas</p>
      </div>
      <div class="year">2017</div>
    </div>

    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>Residência Rodrigues</p>
        <p>Porto Velho</p>
      </div>
      <div class="year">2017</div>
    </div>

    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>Escola Criar</p>
        <p>Campinas</p>
      </div>
      <div class="year">2017</div>
    </div>

    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>Casa da Sustentabilidade</p>
        <p>Campinas</p>
      </div>
      <div class="year">2016</div>
    </div>

    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>Conjunto "Sol Nascente"</p>
        <p>Brasília</p>
      </div>
      <div class="year">2016</div>
    </div>

    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>Clínica Cazarotto</p>
        <p>Campinas</p>
      </div>
      <div class="year">2016</div>
    </div>

    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>Estúdio Anhumas</p>
        <p>Campinas</p>
      </div>
      <div class="year">2016</div>
    </div>

    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>Residência Neves</p>
        <p>Campinas</p>
      </div>
      <div class="year">2016</div>
    </div>

    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>Residência Samantha</p>
        <p>Araras</p>
      </div>
      <div class="year">2015</div>
    </div>

    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>Biblioteca FDUSP</p>
        <p>São Paulo</p>
      </div>
      <div class="year">2013</div>
    </div>

    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>Cobertura do Mercado Público</p>
        <p>Florianópolis</p>
      </div>
      <div class="year">2013</div>
    </div>

    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>Confederação Nacional dos Municípios</p>
        <p>Brasília</p>
      </div>
      <div class="year">2010</div>
    </div>

    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>Biblioteca Pública</p>
        <p>Florianópolis</p>
      </div>
      <div class="year">2010</div>
    </div>

    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>Marcos Rodoviários</p>
        <p>Brusque</p>
      </div>
      <div class="year">2010</div>
    </div>

    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>Residência Fátima Leitão</p>
        <p>São Carlos</p>
      </div>
      <div class="year">2010</div>
    </div>

    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>Terminais Marítimos Metropolitanos</p>
        <p>Florianópolis</p>
      </div>
      <div class="year">2009</div>
    </div>
  </div>
</div>

<h4>Em colaboração</h4>

<div class="project-container">
  <div class="project-boxes">
    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>Subsea Seven</p>
        <p>Rio de Janeiro</p>
      </div>
      <div class="year">2011</div>
    </div>

    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>IBM</p>
        <p>Hortolândia</p>
      </div>
      <div class="year">2011</div>
    </div>

    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>General Motors do Brasil</p>
        <p>São Caetano do Sul</p>
      </div>
      <div class="year">2010</div>
    </div>

    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>Galeria de Arte</p>
        <p>São Paulo</p>
      </div>
      <div class="year">2010</div>
    </div>

    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>Residência na Vila Ida</p>
        <p>São Paulo</p>
      </div>
      <div class="year">2010</div>
    </div>

    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>Museus da USP</p>
        <p>São Paulo</p>
      </div>
      <div class="year">2010</div>
    </div>

    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>Instituto de Tecnologia Vale</p>
        <p>Belém</p>
      </div>
      <div class="year">2010</div>
    </div>

    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>Conjunto "Comandante Taylor"</p>
        <p>São Paulo</p>
      </div>
      <div class="year">2010</div>
    </div>

    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>Biblioteca Mário de Andrade</p>
        <p>São Paulo</p>
      </div>
      <div class="year">2010</div>
    </div>

    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>Centro de Apoio Cosan</p>
        <p>Piracicaba</p>
      </div>
      <div class="year">2010</div>
    </div>

    <div class="project-box">
      <div class="icons"></div>
      <div class="project-title">
        <p>Fatec Jaguaré</p>
        <p>São Paulo</p>
      </div>
      <div class="year">2010</div>
    </div>
  </div>
</div>
</section>
`

// Content Box 6
boxContent.cont6.en = `
<header>
<h2>Contact</h2>
</header>
<section>
<p>Get in touch with me using the form below, my email or social network. I will be very pleased to receive your message.</p>
<form class="form" name="contact" method="POST" data-netlify="true">                
  <p><input
    type="text"
    name="name"
    placeholder="Your name"
    required
    ></input></p>  
  <p><input
    type="email"
    name="email"
    placeholder="Your email"
    required></input></p>
  <p><textarea                  
    rows="10"
    name="message"
    placeholder="Your message"
    required></textarea></p>                
<div class="form-buttons">
  <div>
    <a                    
      rel="author"
      title="Email"
      href="mailto:alexandre.leitao.santos@gmail.com"
      ><div class="social-icons"><i class="fa-solid fa-envelope"></i></div
    ></a>
    <a
      target="_blank"
      rel="external"
      title="My GitHub profile"
      href="https://github.com/aleitaosantos/"
      ><div class="social-icons"><i class="fa-brands fa-github"></i></div
    ></a>
    <a
      target="_blank"
      rel="external"
      title="My LinkedIn profile"
      href="https://www.linkedin.com/in/alexandreleitao/"
      ><div class="social-icons"><i class="fa-brands fa-linkedin-in"></i></div
    ></a>
</div>
  <div>
    <button type="submit">Send</button>
  </div>
</div>
</form>
<p></p>
</section>
`
boxContent.cont6.fr = `
<header>
<h2>Contact</h2>
</header>
<section>
<p>Contactez-moi via le formulaire ci-dessous, mon email ou mon réseau social. Je serai très heureux de recevoir votre message.</p>
<form class="form" name="contact" method="POST" data-netlify="true">                
  <p><input
    type="text"
    name="name"
    placeholder="Votre nom"
    required
    ></input></p>  
  <p><input
    type="email"
    name="email"
    placeholder="Votre e-mail"
    required></input></p>
  <p><textarea                  
    rows="10"
    name="message"
    placeholder="Votre message"
    required></textarea></p>               
<div class="form-buttons">
  <div>
    <a                    
      rel="author"
      title="E-mail"
      href="mailto:alexandre.leitao.santos@gmail.com"
      ><div class="social-icons"><i class="fa-solid fa-envelope"></i></div
    ></a>
    <a
      target="_blank"
      rel="external"
      title="Mon profil GitHub"
      href="https://github.com/aleitaosantos/"
      ><div class="social-icons"><i class="fa-brands fa-github"></i></div
    ></a>
    <a
      target="_blank"
      rel="external"
      title="Mon profil LinkedIn"
      href="https://www.linkedin.com/in/alexandreleitao/"
      ><div class="social-icons"><i class="fa-brands fa-linkedin-in"></i></div
    ></a>
</div>
  <div>
    <button type="submit">Envoyer</button>
  </div>
</div>
</form>
<p></p>
</section>
`
boxContent.cont6.pt = `
<header>
<h2>Contact</h2>
</header>
<section>
<p>Entre em contato comigo através do formulário abaixo, meu e-mail ou minha rede social. Ficarei muito feliz em receber sua mensagem.</p>
<form class="form" name="contact" method="POST" data-netlify="true">                
  <p><input
    type="text"
    name="name"
    placeholder="Seu nome"
    required
    ></input></p>  
  <p><input
    type="email"
    name="email"
    placeholder="Seu e-mail"
    required></input></p>
  <p><textarea                  
    rows="10"
    name="message"
    placeholder="Sua mensagem"
    required></textarea></p>                
<div class="form-buttons">
  <div>
    <a                    
      rel="author"
      title="E-mail"
      href="mailto:alexandre.leitao.santos@gmail.com"
      ><div class="social-icons"><i class="fa-solid fa-envelope"></i></div
    ></a>
    <a
      target="_blank"
      rel="external"
      title="Meu perfil GitHub"
      href="https://github.com/aleitaosantos/"
      ><div class="social-icons"><i class="fa-brands fa-github"></i></div
    ></a>
    <a
      target="_blank"
      rel="external"
      title="Meu perfil LinkedIn"
      href="https://www.linkedin.com/in/alexandreleitao/"
      ><div class="social-icons"><i class="fa-brands fa-linkedin-in"></i></div
    ></a>
</div>
  <div>
    <button type="submit" onclick="return confirm('Send message?')">Enviar</button>
  </div>
</div>
</form>
<p></p>
</section>
`

// Export
export {boxContent}