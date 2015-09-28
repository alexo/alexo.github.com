---
layout: post
title: Introducere in Couchbase - solutie NoSQL bazata pe Documente
excerpt: ""
modified: 2015-09-25
categories: articles
tags: [sample-post]
image:
  feature: so-simple-sample-image-1.jpg
  credit: WeGraphics
  creditlink: http://wegraphics.net/downloads/free-ultimate-blurred-background-pack/
comments: false
share: false
---

# Introducere in Couchbase - solutie NoSQL bazata pe Documente 

## Abstract
In prezent, industria IT abunda de termeni precum NoSQL, Big Data sau NewSQL. De multe ori, persoanele de decizie au dificultati in alegerea solutiei potrivite. In conditiile in care solutiile clasice - bazele de date relationale sunt folosite de mai bine de doua decenii, de ce ar trebui incercate solutiile alternative? Marile companii apeleaza deja de cativa ani la solutiile alternative ceea ce le permite sa economiseasca bani, sa inoveze rapid si sa ajunga cu produsele finale pe piata mult mai repede decat o faceau inainte. Scopul acestui articol e sa prezinte solutia NoSQL bazata pe documente - Couchbase. Pe langa detaliile tehnice se vor gasi si motivele pentru care aceasta tehnologie merita sa fie aleasa si cateva exemple de proiecte in care Couchbase este folosit cu succes.   


## De ce NoSQL?
Una din cele mai importante decizii luate de arhitecti, tine de alegerea tehnologiei potrivite pentru rezolvarea problemelor specifice produselor ce urmeaza a fi dezvoltate. In acest context, cand vine vorba de alegerea intre o baza de date relationala si o solutie NoSQL, este important sa se tina cont de cateva aspecte importante.

### Natura datelor
Modelul relational este foarte potrivit pentru datele ce au o structura tabulara, cum ar fi un registru contabil. Datele complexe, care contin multe nivele de imbricare, sunt mai greu de modelat folosind structuri bidimensionale. In astfel de cazuri,  alegerea bazelor de date de tip NoSQL pare a fi potrivita, pentru ca datele pot fi stocate in formatul JSON. Acest format fiind suportat de marea majoritate a tehnologiilor NoSQL.

Un alt aspect il reprezinta volatilitatea datelor. Este important sa se stie cat de des modelul de date se va schimba si va  evolua. De cele mai multe ori, modelul de date nu este bine definit de la inceput si flexibilitatea este necesara. Rigiditatea modelului de date este una din potentialele probleme pe care o putem avea cu baze de date relationale.  

### Eficienta de dezvoltare
Agilitatea, si rapiditatea de dezvoltare sunt caracteristicile cele mai importante in cadrul un proces de dezvoltare. In acest sens, tehnologiile NoSQL si-au demonstrat avantajul. Folosirea formatului de tip JSON pentru modelarea datelor, le da posibilitatea programatorilor de a elabora versiuni initiale ale produselor intr-un timp mult mai scurt. 

### Probleme operationale
Cresterea volumului de date si a numarului de utilizatori, duce la degradarea performantei. Unica solutia oferita in astfel de cazuri de catre tehnologiile relationale, este bazata pe scalare pe verticala (hardware) care este foarte costisitoare. Pe de alta parte, tehnologiile NoSQL ofera posibilitatea de a scala pe orizontala, prin adaugarea mai multor servere (nu neaparat foarte performante), care nu necesita investitii la fel de mari ca in primul caz.  

### Stocarea si analiza datelor
Modele de date relationale sunt potrivite pentru interogari sofisticate de date si reprezinta o alegere buna cand interogarea complexa si crearea de rapoarte este critica. 

Analiza in timp real al datelor operationale este mult mai potrivit pentru tehnologii NoSQL.

## Ce este Couchbase
Couchbase Server este o baza de date NoSQL bazata pe documente pentru aplicatii web interactive. Aceasta ofera avantajele clasice unei solutii NoSQL, cum ar fi flexibilitatea modelului de date, usurinta de scalare, performanta si capabilitatea de a oferi disponibilitate 100%. 

Couchbase a aparut ca urmare a imbinarii a doua tehnologii populare NoSQL:

* **Membase** - ce ofera persistenta, replicare si partitionare folosind tehnologia performanta memcached.
* **CouchDB** - care a fost initiatorul folosirii formatului JSON pentru modelarea datelor.


## Caracteristicile principale

### Model de date flexibil
Couchbase foloseste documentele in formatul JSON pentru reprezentarea obiectelor aplicatiei si a relatiilor dintre obiecte. Acest model e suficient de flexibil pentru a suporta schimbari ulterioare ale obiectelor fara a fi necesara migrarea schemei bazei de date sau planificarea unei perioade de mentenanta ce ar putea perturba disponibilitatea aplicatiei. Un alt avantaj al  modelului bazat pe document este usurinta cu care pot fi reprezentate obiectele din lumea reala, cu posibilitatea de a folosi mai multe nivele de imbricare, precum si folosirea atributelor pentru a reprezenta relatiile dintre obiecte.

### Scalabilitate
E foarte usor sa scalezi aplicatia folosind Couchbase Server, atat in cadrul unui cluster de servere cat si la nivel de clustere aflate in centre de date diferite. Se pot adauga noduri noi pentru a intampina nevoia de a face fata unui trafic crescut specific perioadelor de varf. Ce e si mai important, adaugarea de servere nu necesita intreruperea operationala a aplicatiei sau schimbarea codului aplicatiei. Noile servere pot prelua traficul aditional si pastreze distributia echilibrata a datelor. Couchbase ofera o partajare automata si rebalansare a datelor, ceea ce permite redimensionarea clusterului in functie de nevoile aplicatiei. 

### Usurinta integrarii  
Couchbase ofera o suita de librarii pentru diverse limbaje de programare cum ar fi: Java / .NET / PHP / Ruby / C / Python / Node.js. Aceste librarii faciliteaza integrarea solutiei in orice tip de aplicatie. 

Pentru operatia de citire, Couchbase ofera un mecanism de cautare bazat pe chei. Clientul cere un document pe baza unei chei si doar serverul responsabil de gazduirea partitiei in care se afla cheia, va fi contactat.

Couchbase ofera si un mecanism de cautare bazat pe interogare al unui index (**View**). Cautarea este distribuita la toate serverele din cluster si rezultatele gasite pe toate nodurile sunt agregate intr-un singur raspuns si trimise inapoi la client.

Pentru operatia de scriere, Couchbase ofera un mecanism de modificare bazat pe chei. Clientul trimite o solicitare de modificare, in care e trimis atat documentul modificat cat si cheia asociata documentului. Serverul trimite raspuns solicitarii clientului imediat ce documentul este salvat in memora nodului primar (responsabil de gazduirea acelui document), ceea ce permite obtinerea unei latente mici pentru operatiile de scriere.
 

### Performanta predictibila
Design-ul Couchbase-ului este focusat pe performanta, concurenta si randament (throughput) ridicat. Acesta ofera timp de raspuns de ordinul milisecundelor, ceea ce imbunatateste experienta utilizatorului final. De asemenea, serverul distribuie automatic procesarea la toate nodurile din cluster pentru a mentine performanta constanta si reduce incarcarea excesiva a unui singur nod.

### Fiabilitate si securitate
Couchbase ofera posibilitatea de a controla accesul la date pe baza combinatiei username/parola. Credentialele sunt transmise intr-un mod securizat prin retea. Datele senzitive sunt protejate in timpul transmiterii de la client la aplicatie si viceversa.

Fiabilitatea Couchbase-ului este data de faptul ca nu exista un singur nod care ar putea provoca indisponibilitatea sistemului, atata timp cat datele sunt replicate pe mai multe noduri. Functionalitatile precum XDCR (Cross Data Center Replication), failover, backup si restore ajuta asigurarea unei disponibilitati al sistemului in cazul unor probleme neprevazute, fie la nivel de nod sau de centru de date.

## Concepte Cheie

### Couchbase - solutie de stocare pe baza de documente
Unitatea de baza de stocare in Couchbase Server il reprezinta documentele. De cele mai multe ori, formatul preferat este JSON, ceea ce permite aplicatiilor sa modeleze datele fara sa aiba constrangeri legate de flexibilitatea modelului (specifice modelelor de date relationale). Pentru ca datele sunt stocate sub forma de documente, nu sunt necesare migrari de scheme.

Continutul documentelor poate fi si in alt format decat JSON (cum ar fi date binare), dar avantajele folosirii formatului JSON sunt posibilitatea de a indexa si a interoga datele. Couchbase ofera un motor de cautare bazat pe JavaScript ce permite cautarea datelor bazate pe valorile campurilor din documente.

[![Couchbase Data](couchbase_data.jpg)](couchbase_data.jpg)

### Data Buckets
Datele sunt stocate in cluster-ul Couchbase folosind asa numitele Data Buckets. Buckets-urile sunt containere virtuale izolate, ce formeaza un group logic de date in cadrul unui cluster. Un Bucket este echivalentul unei baze de date. Bucket-urile ofera un mecanism securizat de organizare, configurare (memorie, numarul de replici, etc) si analiza al datelor stocate. 

### vBuckets
Un vBucket este o entitate logica responsabila de un subset din spatiul de chei ale unui cluster Couchbase. vBucket-urile sunt folosite pentru distributia uniforma a informatiei in cluster. Acestea sunt responsabile atat de distributia datelor cat si de suportul replicilor pe mai multe noduri. 

Fiecare identificator de document (cheie) apartine unui vBucket. O functie de mapare este folosita pentru determinarea vBucket-ului de care apartine un document. Aceasta functie ia ca parametru ID-ul documentului si returneaza un identificator de vBucket. Odata calculat, se consulta un tabel ce tine maparile dintre vBucket-uri si nodurile gazda. Acest tabel contine un rand pentru fiecare vBucket. Un server poate fi responsabil pentru mai multe vBucket-uri.

### Chei si metadate
Toate datele salvate in Couchbase reprezinta documente cu chei asociate. Cheile reprezinta identificatori unici per document, iar valorile pot fi documente in format JSON sau un stream de biti sau alte obiecte serializate intr-o alta forma.

Cheile sunt conuscute si ca ID-uri de documente si sunt similare un chei primare in SQL. O cheie poate fi formata din orice caractere si trebuie sa fie unica.

Toate documentele contin metadate. Metadatale sunt stocate impreuna cu documente si sunt folosite pentru administrearea acestora. Acestea sunt de trei tipuri:

* **CAS Value** - o forma de baza de concurenta optimistica. 
* **Time to Live (ttl)** — timpul de expirare a unui document.
* **Flags** - O variatate de optiuni folosite la stocare, extragere, modificare si stergere de documente.

### Couchbase SDK
Cunoscut si sub numele librarii client, acestea reprezinta unelte de dezvoltare pentru diverse limbaje de programare. Sunt responsabile de comunicarea cu un Couchbase Server si ofera interfete specifice limbajelor de programare necesare pentru a efectua operatii pe baza de date. Librarile client stiu sa citeasca si sa scrie datele direct de pe nodul primar. Odata cu schimbarea topologiei, librariile client redirecteaza solicitarile ce urmeaza catre noile noduri gazda.

[![Couchbase SDK](basic_architecture.jpg)](basic_architecture.jpg)

## Arhitectura

Couchbase a fost construit de la inceput cu fundamentele bazate pe o arhitectura distribuita, datele partitionate pe toate nodurile disponibile din cluster.

Intr-o configurare tipica, o baza de date Couchbase este instalata intr-un cluster ce foloseste mai multe noduri. Librariile client se vor conecta la nodurile responsabile de datele cu care interactioneaza clientul. 

Pentru a facilita scalarea pe orizontala, Couchbase foloseste partitionarea bazata pe un hash care asigura distributia uniforma a datelor pe toate nodurile. Sistemul defineste 1024 de partitii (numar fix) si odata ce pentru cheia unui document se calculeaza un hash asociat unei partitii - aceasta partitie devine gazda documentului. Fiecare partitie are asignat un nod din cluster. Daca topologia cluster-ului se schimba (un nod adaugat sau eliminat), sistemul se rebalanseaza prin migrarea partitiilor de la un nod la altul.   

[![vBuckets](clusterMap.png)](clusterMap.png)

Nu exista o singura veriga slaba in sistem, deoarece toate nodurile dintr-un cluster sunt egale. Fiecare nod fiind responsabil doar de un set de date care i-au fost asignate. Toate nodurile dintr-un cluster ruleaza doua procese primare: data manager si cluster manager. Data manager-ul este responsabil de administrarea datelor din partitiile acelui nod, in timp ce cluster manager se ocupa de operatiile de comunicare intre nodurile cluster-ului.

Rezilienta sistemului este posibila datorita replicarii de documente. Procesul cluster manager coordoneaza comunicarea dintre datele replicate cu alte noduri din cluster, iar procesul data manager supervizeaza replicile ce sunt asignate de catre cluster catre nodul local. In mod natural, partitiile replicate sunt distribuite pe mai multe noduri, astfel incat sa se evite situatia in care partitiile replicate sunt stocate pe acelasi nod ca cele active.

[![Resilience](resilient.jpg)](resilient.jpg)

Documentele sunt situate in Bucket-uri si documentele dintr-un Bucket sunt izolate de documentele din alte Bucket-uri din perspectiva operatiilor de cautare si interogare. Cand se creaza un nou Bucket, este posibila configurarea numarului de replici (maxim trei) pentru acest Bucket. In cazul indisponibilitatii unui nod (server crash), sistemul va detecta problema, va localiza replicile documentelor ce au fost plasate in acel nod si le va promova la statusul de activ. Sistemul mentine o mapare de cluster care defineste topologia cluster-ului, iar acesta mapare este modificata la fiecare problema aparuta ce afecteaza nodurile din cluster.

Aceasta functionalitate se bazeaza mult pe implementarea librariilor client folosite de aplicatiile ce necesita interactionarea cu un server Couchbase. Clientii sunt intr-o comunicare continua cu nodurile din cluster. Acestia extrag maparea actualizata a clusterului, dupa care redirecteaza cererile catre noile noduri ca urmare a schimbarii topologiei. De asemenea, clientii participa la balansarea "load"-ului de request-uri emise catre baza de date. Procesul responsabil de balansarea "load"-ului este si el distribuit intre mai multi clienti. 

Schimbarile de topologie sunt coordonate de catre un orchestrator, care nu este altceva decat un nod ales sa joace rolul arbitrului in cazul schimbarilor de configurare din cluster. Schimbarile de topologie sunt comunicate catre toate nodurile din cluster. Chiar si in cazul in care nodul orchestrator devine indisponibil, un alt nod poate fi ales pentru a prelua rolul de arbitru pentru a asigura functionarea neintrerupta a sistemului.


## Interogarea datelor
Exista doua sabloane de interogare a datelor din Couchbase. Cel mai eficient este bazat pe interogarea de chei. Daca este cunoscuta cheia documentului cautat, complexitatea cautarii unui astfel de document este de O(1). Este de asemenea posibila cautarea documentelor multiple folosind operatia **multi-get**. Extragerea documentelor multiple este foarte eficienta in cazul in care aplicatia client are de a face cu o lista de documente, deoarece numarul de interactiuni este redus la minim.

Un alt sablon de interogare a datelor este bazat pe asa numitele **View**-uri, cunoscut si sub numele de index. Acestea reprezinta un mecanism folosit pentru interogarea de date din Couchbase. Pentru a defini un **View**, se creaza un document specific numit "design document", care contine un cod JavaScript ce implementeaza operatiile de map-reduce. "Design document"-ele sunt legate de un anumit Bucket, ceea ce inseamna ca interogarile nu se pot efectua pe mai multe Bucket-uri. Consistenta eventuala joaca un rol important in cadrul **View**-urilor. Adaugarea, modificarea sau stergerea unor documente dintr-un Bucket nu produc schimbari ce sunt vizibile imediat. 

Parametrii de interogare ofera posibiltatea de filtrare a unui index. Spre exemplu, se poate defini o cautare ce returneaza un singur document sau un set de documente aflate intr-un interval.

Indecsii din Couchbase sunt actualizati incremental. O modificare nu produce reconstructia intregului index. Modificarile implica doar acele documente care au fost adaugate sau sterse de la ultima modificare. Un index se poate configura sa fie actualizat in anumite circumstante. Spre exemplu, dupa un interval de timp sau cand un numar de documente au fost actualizate.

## Performanta
Performanta trebuie masurata folosind scenariile similare unui mediu din productie. Acest lucru poate ajuta sa intelegem caracteristicile performantei pentru anumite tipuri de situatii si sa alegem tehnologia potrivita pentru cerintele aplicatiei dezvoltate.

Unul din testele de performanta de referinta pentru compararea tehnologiilor NoSQL este YCSB (Yahoo Cloud Serving Benchmark). Scopul acestuia este sa se focuseze pe testarea diverselor tipuri de baze de date si analiza performantei. YCSB este open-source, extensibil, are un numar mare de conectori pentru diverse tipuri de tehnologii, este reproductibil si compara latenta vs randament (throughput).

[![Reads P99](benchmarking-couchbase-reads.jpg)](benchmarking-couchbase-reads.jpg)
[![Writes P99](benchmarking-couchbase-writes.jpg)](benchmarking-couchbase-reads.jpg)

Rezultatele au aratat ca tehnologia Couchbase ofera latenta cea mai mica si throughput-ul cu valori mai mari prin comparatie cu tehnologiile concurente.

### Performanta si consistenta
Pentru asigurarea consistentei, este importanta executia operatiilor de citire/scriere pe nodurile primare. Solutiile NoSQL ce se bazeaza pe un singur nod primar sunt limitate din punct de vedere al performantei, deoarece clientii nu pot folosi la capacitate maxima celelalte noduri aflate in cluster. Prima alternativa este de a efectua operatia de citire pe toate nodurile (atat primare cat si secundare). In acest caz, performanta de citire este foarte buna, insa nu mai este garantata consistenta pentru ca replicarea datelor este asincrona. A doua alternativa este replicarea sincrona care asigura consistenta datelor, insa contribuie la degradarea performantei.

[![Single Primary Node](mongodb_consistent.png)](mongodb_consistent.png)

Prin comparatie cu prima abordare, Server-ul Couchbase asigura consistenta datelor. Acesta, de asemenea executa operatiile de citire doar pe nodurile primare pentru asigurarea consistentei. Singura diferenta este ca toate nodurile sunt utilizate la capacitatea maxima, pentru ca fiecare nod este primar pentru un subset da partitii de date. 

[![Multiple Primary Nodes](couchbase_consistent.png)](couchbase_consistent.png)

Toate operatiile de citire/scriere sunt executate pe nodurile primare.


## Monitorizare
Couchbase Server include un set complet de statistici si informatii de monitorizare. Statisticile sunt oferite prin intermediul interfetelor de administrare. Una dintre ele este consola de administrare web, care include grafice in timp real ale datelor de performanta.

[![Monitor Graph](monitor_graph.png)](monitor_graph.png)

Statisticile sunt impartite in mai multe grupuri, permitand identificarea diferitelor tipuri de probleme:

* **Per Nod** - indica utilizarea de procesor, memorie, I/O pe fiecare server din cluster.
* **Per vBucket** - indica statisticile de utilizare si datele de performanta pentru fiecare vBucket
* **Per cozi de disc** - monitorizeaza cozile folosite pentru citirea si scrierea informatiilor pe disc si intre replici. Poate fi util pentru determinarea daca clusterul necesita extindere prin aduagare de noduri noi.

## Exemple 

### Activitatea utilizatorului in timp real
Evenimentele legate de activitatea utilizatorului sunt consumate de un sistem de messaging (kafka) pentru a stoca informatiile relevante in Couchbase. Acest serviciu este capabil sa raspunda in timp real la urmatoarele intrebari: cand un anumit utilizator a fost activ ultima data? A jucat vreodata un anumit joc? Toate interogarile pe acest serviciu se executa extrem de rapid. Bazat pe raspunsuri la aceste intrebari, alte aplicatii sunt capabile sa segmenteze clientii pentru diverse flow-uri de business. 

### Stocarea preferintelor utilizatorului
Stocarea diverselor informatii despre preferintele utilizatorului ce pot fi folosite intre mai multe produse ale unei aplicatii web. Aceasta solutie poate fi folosita ca o alternativa la folosirea sesiunii HTTP, cookie-urilor sau stocarea in baze de date relationale.

### Managementul de promotii si monitorizarea progresului
Promotiile sunt necesare pentru atragerea clientilor pentru a folosi diverse produse bazat pe criterii de calificare predefinite. Pe langa stocarea promotiilor definite, sunt stocate si documente care monitorizeaza progresul fiecarui utilizator care a optat pentru o anumita promotie. Sistemul este capabil sa identifice in timp real daca un utilizator a indeplinit toate cerintele promotiei si acorda diverse tipuri de premii configurate per promotie.

## Concluzii
Folosirea exploziva a internetului, cresterea volumului de date procesat de aplicatiile moderne, natura diferita a datelor, necesita o analiza foarte atenta pentru alegerea tehnologiei responsabila de stocare a datelor. Folosirea unei tehnologii NoSQL poate fi o decizie buna in cazul in care  este necesar un model flexibil de date, suportul pentru un numar foarte mare de utilizatori concurenti, scalabilitatea si performanta sunt aspecte critice pentru a raspunde cerintelor de business. 

Couchbase este un jucator important in piata tehnologiilor NoSQL. Acesta se comporta excelent in situatiile un "load" masiv atat la citire cat si la scriere, oferind posibilitatea unei scalari facile prin adaugare/eliminare de noduri din cluster in functie de nevoile aplicatiei. Arhitectura si design-ul acestei tehnologii garanteaza consistentei datelor si a performantei foarte bune in acelasi timp. Testele au aratat ca aceasta tehnologie este lider pe piata solutiilor similare. Desi nu se poate spune ca aceasta tehnologie e potrivite pentru orice problema, Couchbase poate fi o solutie foarte buna pentru anumite tipuri de aplicatii.  

## Resurse
* [RDBMS vs NoSQL](http://www.zdnet.com/article/rdbms-vs-nosql-how-do-you-pick/)
* [Couchbase Server Architecture Review](http://www.couchbase.com/sites/default/files/uploads/all/whitepapers/Couchbase_Server_Architecture_Review.pdf)
* [Betfair plus Couchbase](http://www.couchbase.com/cn/presentations/betfair-plus-couchbase-london-2013)
* [Couchbase blows competition](http://www.couchbase.com/press-releases/couchbase-blows-past-competition-nosql-performance-benchmark)
* [Couchbase performance benchmarking](http://www.slideshare.net/renatko/couchbase-performance-benchmarking)
* [No SQL performance series](http://blog.bigstep.com/big-data-performance/nosql-performance-benchmarks-series-couchbase/)
* [10 enterprise usecases for Couchbase](http://blog.couchbase.com/top-10-enterprise-use-cases-for-nosql)
* [MongoDB vs Coucbase showdown](http://www.javaworld.com/article/2078750/open-source-tools/nosql-showdown--mongodb-vs--couchbase.html)
