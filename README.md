# Smart Headphones for Safety

## Descrizione del progetto
Questa è un repository appartenente al progetto "Smart Headphones for Safety", ossia un progetto dell'Università del Salento del corso di Internet of Thing nato per tutelare la sicurezza di lavoratori in ambienti di lavoro rumorosi. Sono infatti numerosissimi i casi di operatori che subiscono danni permanenti all'udito a causa di una mancata protezione del loro apparato uditivo, in fabbriche e industrie rumorose. In questo progetto si è sviluppato un sistema di cuffie smart che non solo permettono all'operatore di isolarsi dai rumori esterni, ma grazie all'impiego di una applicazione Android permettono anche la ricezione di notifiche di allarme da parte di macchinari potenzialmente pericolosi, venendo quindi avvertiti in tempo e potendo quindi allontanarsi a una distanza di sicurezza dal pericolo. Il vantaggio di un progetto di questo tipo è che non solo permette un isolamento dai rumori esterni, ma evita anche quelle complicazioni dovute a un isolamento completo, come operatori che non si accorgono di essere troppo vicini ai macchinari, che possono quindi incorrere in danni fisici anche permanenti nei peggiori dei casi.

## Architettura del sistema
La soluzione proposta per affrontare e risolvere le problematiche precedentemente descritte prevede l’utilizzo e l’implementazione della seguente architettura:

### Macchinari
Il sistema prevede l’utilizzo di due Raspberry che simulano due macchinari presenti nel contesto di un’industria di lavorazione del legno: una sega a nastro e un tornio. La simulazione dei due macchinari avviene tramite script Python nel quale si generano in maniera pseudocasuale le misure relative ai parametri caratteristici del macchinario e si inoltrano al backend. L’inoltro dei dati avviene tramite protocollo TCP Modbus (libreria PyModbus) sfruttando 11 Holding Registers.

### Backend
Il backend è composto da tre componenti principali: un’applicazione Python, un’applicazione SpringBoot e un database Mongo.

* L’applicazione Python utilizza la libreria PyModbus per ricevere i dati dai macchinari, li processa e in caso di valori fuori range invia l’allarme al dispositivo mobile tramite protocollo MQTT. L’applicazione effettua anche delle richieste POST (con i dati dei macchinari e con gli allarmi) all’applicazione SpringBoot che si occuperà di salvarli nel database.
* L’applicazione SpringBoot ha quindi il compito di interfacciarsi con il database Mongo per la lettura e la scrittura dei dati e fornisce queste funzionalità anche agli altri componenti del sistema tramite la definizione di API Rest, alcune delle quali hanno la necessità di autenticazione tramite token JWT per poter essere richiamate.
* Il database Mongo contiene cinque collezioni, una per i dati dei macchinari, una per gli allarmi, una per le macchine e una per gli admin

### Mobile App
L’applicazione Android, predisposta già all’avvio per la ricezione di messaggi MQTT, svolge un compito molto importante: il subscribe dinamico ai topic relativi ai macchinari nelle vicinanze. Una volta avviata l’applicazione, viene costantemente eseguita la scansione dei dispositivi Bluetooth nella zona e viene letto l’indirizzo MAC del dispositivo rilevato e il valore di RSSI al fine di analizzare la distanza da quest’ultimo. L’applicazione, conoscendo l’indirizzo MAC dei beacon e i topic ad essi associati, può effettuare il subscribe o l’unsubscribe in maniera del tutto dinamica. Una volta ricevuto un messaggio di allarme, un sintetizzatore vocale riprodurrà il testo ricevuto. Le cuffie antirumore possono essere collegate tramite Bluetooth allo smartphone e in questo modo l’operaio verrà avvisato tempestivamente del malfunzionamento del macchiario.

### Frontend
L’amministratore del sistema può accedere tramite login alla dashboard, ovvero una web application in Angular che racchiude lo storico dei dati ricevuti dai macchinari e gli eventuali allarmi. La dashboard interrogherà il backend tramite delle richieste GET per ottenere i dati. È possibile visualizzare dei grafici, leggere le misure dei parametri dei macchinari in tempo reale e analizzare tutti gli allarmi ricevuti filtrandoli in base alle esigenze.

## Link alle altre componenti
* Applicazione Android: https://github.com/UniSalento-IDALab-IoTCourse-2022-2023/wot-project-2022-2023-AndroidApplication-RolloCotardo
* Backend: https://github.com/UniSalento-IDALab-IoTCourse-2022-2023/wot-project-2022-2023-backend-RolloCotardo
* Python che simula tornio: https://github.com/UniSalento-IDALab-IoTCourse-2022-2023/wot-project-2022-2023-raspberryT-RolloCotardo
* Python che simula sega a nastro: https://github.com/UniSalento-IDALab-IoTCourse-2022-2023/wot-project-2022-2023-raspberryS-RolloCotardo
* Link alla presentazione del progetto: https://github.com/UniSalento-IDALab-IoTCourse-2022-2023/wot-project-presentation-RolloCotardo

## Cosa c'è nella presente repository
Questa repository contiene un codice Angular che implementa una Dashboard per visualizzare in maniera dinamica e funzionale i dati contenuti nei database Mongo.
All'avvio l'utente si trova di fronte a una pagina web per il login; verrà autenticato solo chi possieda email e password da amministratore. Gli amministratori possono essere aggiunti al databaseMongo sfruttando l'API POST corrispondente implementata nel backend Springboot.
Una volta effettuato l'accesso l'utente si troverà di fronte all'homePage che spiega il funzionamento delle varie sezione della dashboard:
* **Graifici** che mostra gli ultimi dati generati dai vari macchinari, con la possibilità di selezionare un macchinario specifico e aumentare il range di visualizzazione. Questa dashboard si aggiorna in tempo reale mostrando sempre l'ultimo dato generato non appena venga aggiunto al database. 
* **Info Macchine** che mostra l'ultimo set di dati arrivati da uno specifico macchinario, con la possibilità di visualizzare un macchinario al posto di un altro. La pagina si aggiorna automaticamente mostrando sempre l'ultimo set di dati arrivato. 
* **Allarmi** che mostra gli allarmi arrivati a uno specifico macchinario. La visualizzazione si aggiorna in automatico ed è possibile navigare per visualizzare allarmi più vecchi. La pagina offre inoltre la possibilità di filtrare la visualizzazione per macchinario e per tipologia di allarme.

Per avviare l'applicazione Angular è sufficiente seguire i seguenti passaggi: 
1) clonare la presente repository
2) spostarsi da terminale nella cartella del progetto e lanciare: 
```
npm install
ng serve
```
3) aprire un qualsiasi browser e andare sulla pagina "localhost:4200"