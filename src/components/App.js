import React, { Component } from 'react';
import './App.css';
import Content from "./Content";

import Sponsors from "./Sponsors";
import Navigation from "./Nav";

import Footer from "./Footer";

class App extends Component{

  state = {
  timeAnimation: 0,

  menu : [
      { id: 1, name: "firma", active: true},
      { id: 2, name: "produkty", active: false},
      { id: 3, name: "zainstalowane", active: false},
      { id: 4, name: "zdjęcia", active: false},
      { id: 5, name: "przetargi", active: false},
      { id: 6, name: "kontakt", active: false}
  ],

  lastRun : [
      {id: 1, date: `10.2018`, device: `koniec testów i przekazanie urządzenia SysKon 500`, place: `Lubelski Węgiel „BOGDANKA” Spółka Akcyjna`},
      {id: 2, date: `04.2017`, device: `dwa urządzenia SysKonSystem na przenośniku taśmowym `, place: `Ostravská těžební, a.s.; Czechy`},
      {id: 3, date: `12.2016`, device: `urządzenie SysKonSystemSkan`, place: `Kopalnia Węgla Kamiennego "Brzeszcze"`},
      {id: 4, date: `11.2016`, device: `trzy urządzenia SysKon202`, place: `Zespół Elektrociepłowni Wrocławskich KOGENERACJA S.A. (Czechnica)`},
      {id: 5, date: `10.2016`, device: `urządzenie SysKon400 na przenośniku taśmowym`, place: `Lubelski Węgiel „BOGDANKA” Spółka Akcyjna`},
      {id: 6, date: `06.2016`, device: `urządzenie SysKon400 na przenośniku taśmowym`, place: `Lubelski Węgiel „BOGDANKA” Spółka Akcyjna`},
      {id: 7, date: `12.2014`, device: `urządzenie SysKon400 na przenośniku taśmowym`, place: `Lubelski Węgiel „BOGDANKA” Spółka Akcyjna`}
  ],

  products : [
      { id: 1, name: "SysKon 50", description: "Ciągły pomiar gęstości płynów, pulp, mułów itp. transportowanych w rurociągach.", place: "rurociąg przemysłowy", active: false, spec: "Pomiar gęstości płynów płynących w rurociągach w zakładach przemysłowych.", assembly: "Dowolny, stabilny rurociąg", workDesc: "Zasada pomiaru opiera się na oznaczaniu pochłaniania wysokoenergetycznego promieniowania gamma przez badany materiał. Miernik instalowany jest bezpośrednio na wznoszącym się odcinku rurociągu, co gwarantuje wypełnienie przekroju rury badanym materiałem. Producent dąży do zapewnienia stałego zdalnego dostępu do analizatora w celu prowadzenia ciągłej diagnostyki.", communication: "Wynik pomiaru (Pętla prądowa 4-20mA, modbus/TCP), wizualizacja raportów i pomiarów za pomocą interfersju WWW.", 
      specyfication: [
          {id: 1, description: `szerokość rurociągu: bez ograniczeń`},
          {id: 2, description: `prędkość przepływu cieczy: bez ograniczeń`},
          {id: 3, description: `wydajność transportu: bez ograniczeń`},
          {id: 4, description: `maksymalna granulacja: bez ograniczeń`},
          {id: 5, description: `zakres gęstości: bez ograniczeń`},
          {id: 6, description: `czas pomiaru: około 1 min.`},
          {id: 7, description: `źródło promieniowania: 137Cs`},
          {id: 8, description: `zasilanie: 230V, jednofazowe, 5A`}
      ],
      composition: [
          {id:1 , description: `izotopowy miernik gęstości`},
          {id:2 , description: `konstrukcja mocująca urządzeniu na rurociągu`},
          {id:3 , description: `komputer sterujący/pomiarowy`},
          {id:4 , description: `system komunikacji z serwisem`}
      ],
      feature: [
          {id:1 , description: `ciągły pomiar gęstości`},
          {id:2 , description: `pomiar metodą transmisyjną`},
          {id:3 , description: `elektronika ze stabilizacją temperatury dla zapewnienia większej dokładności`},
          {id:4 , description: `brak ingerencji w konstrukcje rurociągu`},
          {id:5 , description: `możliwość generowania dowolnych raportów`},
          {id:6 , description: `łatwa i szybka instalacja`},
          {id:7 , description: `możliwość zdalnej kalibracji i diagnozy`},
          {id:8 , description: `pomiary są wykonywane automatycznie i nie wymagana jest obecność pracownika w pobliżu urządzenia`},
      ],
      
      radioactive_desc: `SysKon 50 zawiera radioizotop, więc największą uwagę przy projektowaniu i konstruowaniu poświęcono by urządzenie spełniało wszystkie standardy bezpieczeństwa pracy`,

      radioactive: [
          {id:1 , description: `posiadamy zezwolenie na produkcję miernika wydane przez Państwową Agencję Atomistyki w Warszawie`},
          {id:2 , description: `poziom promieniowania na powierzchni pojemnika źródeł jest znacznie poniżej poziomu dozwolonego przez przepisy, tj. 2mSv/h`},
          {id:3 , description: `wiązka promieni jest skoncentrowana i operuje bardzo wąskim koncentrycznym strumieniem pomiędzy źródłem i detektorem`},
          {id:4 , description: `pomiary są wykonywane automatycznie i nie wymagana jest obecność pracownika w pobliżu urządzenia`}
      ]
  },

      { id: 2, name: "SysKon 202", description: "Ciągły pomiar zawartości części palnych w popiołach lotnych.", place: "na ścianie kanału spalin przed elektrofiltrem", active: false, spec: "Pomiar zawartości części palnych w popiołach lotnych dla elektrowni z kotłami węglowymi, włącznie z układami do współspalania biomasy.", assembly: "Kanał spalin, za wymiennikiem obrotowym, przed elektrofiltrem.", workDesc: "Sonda zamontowana w kanale spalin, wykorzystując podciśnienie tam panujące,  w sposób ciągły pobiera próbkę popiołu. Próbka o masie około 10g kierowana jest do pojemnika pomiarowego, gdzie zostaje prześwietlona promieniowaniem gamma, jednocześnie zostają zmierzone jej parametry dielektryczne. Z relacji pomiędzy pochłanianiem promieniowania gamma i właściwościami dielektrycznymi, wyliczona jest zawartość części palnych. Po pomiarze, próbka zostaje wydalona z powrotem do kanału spalin i rozpoczyna się nowy cykl. Analizator może być opcjonalnie wyposażony w automatyczną próbobiernię, służącą do magazynowania próbek. Próbki te mogą być udostępnione zakładowemu laboratorium chemicznemu. Zastosowana technologia minimalizuje wpływ składu chemicznego węgla na wynik pomiaru. Pozwala to na stosowanie jednej kalibracji, bez względu na pochodzenie spalanego węgla. Producent dąży do zapewnienia stałego zdalnego dostępu do analizatora w celu prowadzenia ciągłej diagnostyki.", communication: "Wynik pomiaru (Pętla prądowa 4-20mA, modbus/TCP), sygnalizacja działania/stanu urządzenia (wyjścia przekaźnikowe).", 
      specyfication: [
          {id: 1, description: `wymiary: 80cm x 120cm x 35cm`},
          {id: 2, description: `zakres części palnych : 0-16 %`},
          {id: 3, description: `czas pomiaru: 3-5 min.`},
          {id: 4, description: `dokładność pomiaru: 0.5% (średni błąd kwadratowy)`},
          {id: 5, description: `źródła promieniowania: 137Cs`},
          {id: 6, description: `zasilanie: 230V, jednofazowe, 5A`},
          {id: 7, description: `sprężone powietrze: 0.4 MPa - 0.8 MPa`}
      ],
      composition : [
          {id:1 , description: `izotopowy miernik zawartości popiołu`},
          {id:2 , description: `miernik własności dielektrycznych`},
          {id:3 , description: `system wymiany próbki i poboru próbki testowej`},
          {id:4 , description: `komputer sterujący/pomiarowy`},
          {id:5 , description: `system komunikacji z serwisem`}
      ],
      feature: [
          {id:1 , description: `pomiar ciągły`},
          {id:2 , description: `masa próbki wynosi ok. 10g`},
          {id:3 , description: `możliwość zdalnej rekalibracji miernika i diagnozy ewentualnych problemów`},
          {id:4 , description: `elektronika oraz układy pomiarowe zamknięte w szafkach metalowych spełniających stopień ochrony IP55`},
          {id:5 , description: `minimalna zależność wyników pomiarów od składu chemicznego popiołu pozwala na stosowanie jednej kalibracji, bez względu na pochodzenie palonego węgla`},
          {id:6 , description: `czas pojedynczego pomiaru ok. 3-5 minut`},
          {id:7 , description: `dynamiczna izokinetyka poboru próbek`},
      ],

      radioactive_desc: `Syskon 202 zawiera radioizotop, więc największą uwagę przy projektowaniu i konstruowaniu poświęcono by urządzenie spełniało wszystkie standardy bezpieczeństwa pracy`,

      radioactive: [
          {id:1 , description: `posiadamy zezwolenie na produkcję miernika wydane przez Państwową Agencję Atomistyki w Warszawie`},
          {id:2 , description: `poziom promieniowania na powierzchni pojemnika źródeł jest znacznie poniżej poziomu dozwolonego przez przepisy, tj. 2mSv/h`},
          {id:3 , description: `wiązka promieni jest skoncentrowana i operuje bardzo wąskim koncentrycznym strumieniem pomiędzy źródłem i detektorem`},
          {id:4 , description: `pomiary są wykonywane automatycznie i nie wymagana jest obecność pracownika w pobliżu urządzenia`}
      ]
  },

      { id: 3, name: "SysKonSystem", description: "Ciągły pomiar parametrów jakościowych (zawartość popiołu, wilgotność, wartość opałową) węgla kamiennego transportowanego przenośnikiem taśmowym. Pomiar wycinka strugi węgla.", place: "na przenośniku taśmowym", active: false, spec: "Pomiar zawartości popiołu oraz wilgotności węgla transportowanego na przenośniku taśmowym pozwala na obliczenie jego wartości opałowej.",assembly: "Dowolny przenośnik taśmowy. Zazwyczaj nie wymagane są zmiany w konstrukcji przenośnika (najczęściej spotykana zmiana, to zapewnienie odległości między taśmami, górną i powrotną, nie mniejszej niż 35 cm).", workDesc: "SysKonSystem pozwala w sposób ciągły kontrolować jakość węgla transportowanego przenośnikiem taśmowym. Prześwietlanie taśmy wiązką promieni gamma o dwóch różnych energiach i badanie wiązką mikrofalową pozwala na obliczenie zawartości popiołu i wilgoci, a później kaloryczności węgla. Urządzenie mierzy węgiel znajdujący się na środku przenośnika taśmowego - jest to główna cecha różniąca go od urządzenia SysKonSystem-Skan. Producent dąży do zapewnienia stałego zdalnego dostępu do analizatora w celu prowadzenia ciągłej diagnostyki.", communication: "Wynik pomiaru (Pętla prądowa 4-20mA, modbus/TCP), wizualizacja raportów i pomiarów za pomocą interfersju WWW.",
      specyfication: [
          {id: 1, description: `rodzaj węgla: kamienny`},
          {id: 2, description: `granulacja: 0-300mm`},
          {id: 3, description: `wysokość warstwy: 50-300mm`},
          {id: 4, description: `szerokość taśmy: bez ograniczeń`},
          {id: 5, description: `dokładność pomiaru popiołu: 1-2% (średni błąd kwadratowy)`},
          {id: 6, description: `dokładność pomiaru wilgotności: 0,5-1% (średni błąd kwadratowy)`},
          {id: 7, description: `źródła promieniowania: 241Am, 137Cs`},
          {id: 8, description: `zasilanie: 230V, jednofazowe, 5A`}
      ],
      composition : [
          {id:1 , description: `izotopowy miernik zawartości popiołu`},
          {id:2 , description: `mikrofalowy wilgotnościomierz`},
          {id:3 , description: `konstrukcja mocująca urządzeniu na przenośniku`},
          {id:4 , description: `komputer sterujący/pomiarowy`},
          {id:5 , description: `system komunikacji z serwisem`}
      ],
      feature: [
          {id:1 , description: `pomiar ciągły, bezpośredni na przenośniku taśmowym`},
          {id:2 , description: `dwuźródłowy pomiar popiołu metodą transmisyjną`},
          {id:3 , description: `wilgotność mierzona przez pomiar przesunięcia fazowego i tłumienia mikrofal w znacznej objętości mierzonej strugi`},
          {id:4 , description: `elektronika ze stabilizacją temperatury dla zapewnienia większej dokładności`},
          {id:5 , description: `struga mierzona w zakresie wysokości ~5-50cm`},
          {id:6 , description: `brak ingerencji w pracę przenośnika`},
          {id:7 , description: `brak mechanicznego kontaktu z warstwą węglą`},
          {id:8 , description: `automatyczna korekta dla dynamicznych zmian wysokości warstwy węgla`},
          {id:9 , description: `automatyczne odrzucanie wyników dla niskich i wysokich warstw węgla`},
          {id:10 , description: `możliwość współpracy z dowolną wagą przenośnikową`},
          {id:11 , description: `możliwość generowania dowolnych raportów`},
          {id:12 , description: `łatwa i szybka instalacja`},
          {id:13 , description: `najczęściej nie wymaga zmian w konstrukcji taśmociągu`},
          {id:14 , description: `możliwość zdalnej kalibracji i diagnozy`},
          {id:15 , description: `możliwość pracy urządzenia na przenośnikach składających się z wielu różnych odcinków`},
          {id:16 , description: `pomiary są wykonywane automatycznie i nie wymagana jest obecność pracownika w pobliżu urządzenia`}
      ],

      radioactive_desc: `SyskonSystem zawiera radioizotop, więc największą uwagę przy projektowaniu i konstruowaniu poświęcono by urządzenie spełniało wszystkie standardy bezpieczeństwa pracy`,

      radioactive: [
          {id:1 , description: `posiadamy zezwolenie na produkcję miernika wydane przez Państwową Agencję Atomistyki w Warszawie`},
          {id:2 , description: `poziom promieniowania na powierzchni pojemnika źródeł jest znacznie poniżej poziomu dozwolonego przez przepisy, tj. 2mSv/h`},
          {id:3 , description: `wiązka promieni jest skoncentrowana i operuje bardzo wąskim koncentrycznym strumieniem pomiędzy źródłem i detektorem`},
          {id:4 , description: `pomiary są wykonywane automatycznie i nie wymagana jest obecność pracownika w pobliżu urządzenia`}
      ]
  },

      { id: 4, name: "SysKonSystemSkan", description: "Ciągły pomiar parametrów jakościowych (zawartość popiołu, wilgotność, wartość opałową) węgla kamiennego transportowanego przenośnikiem taśmowym. Pomiar całej szerokości strugi węgla.", place: "na przenośniku taśmowym", active: false, spec: "Pomiar zawartości popiołu oraz wilgotności węgla transportowanego na przenośniku taśmowym pozwala na obliczenie jego wartości opałowej.",assembly: "  Dowolny przenośnik taśmowy. Zazwyczaj nie wymagane są zmiany w konstrukcji przenośnika (najczęściej spotykana zmiana, to zapewnienie odległości między taśmami, górną i powrotną, nie mniejszej niż 30 cm).", workDesc: "SysKonSystemSkan pozwala w sposób ciągły kontrolować jakość węgla transportowanego przenośnikiem taśmowym. Prześwietlanie taśmy wiązką promieni gamma o dwóch różnych energiach i badanie wiązką mikrofalową pozwala na obliczenie zawartości popiołu i wilgoci, a następnie kaloryczności węgla. Urządzenie, w wypadku niejednorodnej strugi materiału na przenośniku, dzięki skanowaniu poprzecznemu tej strugi,  lepiej uśrednia mierzone wartości - jest to główna cecha różniąca go od urządzenia SysKonSystem. Producent dąży do zapewnienia stałego zdalnego dostępu do analizatora w celu prowadzenia ciągłej diagnostyki.", communication: "Wynik pomiaru (Pętla prądowa 4-20mA, modbus/TCP), wizualizacja raportów i pomiarów za pomocą interfejsu WWW.", 
      specyfication: [
          {id: 1, description: `rodzaj węgla: kamienny`},
          {id: 2, description: `granulacja: 0-300mm`},
          {id: 3, description: `wysokość warstwy: 50-300mm`},
          {id: 4, description: `szerokość taśmy: bez ograniczeń`},
          {id: 5, description: `dokładność pomiaru popiołu: 1-2% (średni błąd kwadratowy)`},
          {id: 6, description: `dokładność pomiaru wilgotności: 0,5-1% (średni błąd kwadratowy)`},
          {id: 7, description: `źródła promieniowania: 241Am, 137Cs`},
          {id: 8, description: `zasilanie: 230V, jednofazowe, 5A`}
      ],
      composition : [
          {id:1 , description: `izotopowy miernik zawartości popiołu`},
          {id:2 , description: `mikrofalowy wilgotnościomierz`},
          {id:3 , description: `konstrukcja mocująca urządzeniu na przenośniku`},
          {id:4 , description: `komputer sterujący/pomiarowy`},
          {id:5 , description: `system komunikacji z serwisem`},
          {id:6 , description: `system napędowy umożliwiający skanowanie całej szerokości taśmy`}
      ],
      feature: [
          {id:1 , description: `pomiar ciągły, bezpośredni na całej szerokości przenośnika taśmowego`},
          {id:2 , description: `dwuźródłowy pomiar popiołu metodą transmisyjną`},
          {id:3 , description: `wilgotność mierzona przez pomiar przesunięcia fazowego i tłumienia mikrofal w znacznej objętości mierzonej strugi`},
          {id:4 , description: `elektronika ze stabilizacją temperatury dla zapewnienia większej dokładności`},
          {id:5 , description: `struga mierzona w zakresie wysokości ~5-50cm`},
          {id:6 , description: `brak ingerencji w pracę przenośnika`},
          {id:7 , description: `brak mechanicznego kontaktu z warstwą węglą`},
          {id:8 , description: `automatyczna korekta dla dynamicznych zmian wysokości warstwy węgla`},
          {id:9 , description: `automatyczne odrzucanie wyników dla niskich i wysokich warstw węgla`},
          {id:10 , description: `możliwość współpracy z dowolną wagą przenośnikową`},
          {id:11 , description: `możliwość generowania dowolnych raportów`},
          {id:12 , description: `łatwa i szybka instalacja`},
          {id:13 , description: `najczęściej nie wymaga zmian w konstrukcji taśmociągu`},
          {id:14 , description: `możliwość zdalnej kalibracji i diagnozy`},
          {id:15 , description: `możliwość pracy urządzenia na przenośnikach składających się z wielu różnych odcinków`},
          {id:16 , description: `pomiary są wykonywane automatycznie i nie wymagana jest obecność pracownika w pobliżu urządzenia`},
          {id:17 , description: `wyświetlany jest kształt strugi oraz rozkład zawartości popiołu z częstością co 5 sekund`},
          {id:18 , description: `w przypadku awarii systemu napędowego urządzenie pracuje jako analizator statyczny`}
      ],

      radioactive_desc: `SyskonSystemSkan zawiera radioizotop, więc największą uwagę przy projektowaniu i konstruowaniu poświęcono by urządzenie spełniało wszystkie standardy bezpieczeństwa pracy`,

      radioactive: [
          {id:1 , description: `posiadamy zezwolenie na produkcję miernika wydane przez Państwową Agencję Atomistyki w Warszawie`},
          {id:2 , description: `poziom promieniowania na powierzchni pojemnika źródeł jest znacznie poniżej poziomu dozwolonego przez przepisy, tj. 2mSv/h`},
          {id:3 , description: `wiązka promieni jest skoncentrowana i operuje bardzo wąskim koncentrycznym strumieniem pomiędzy źródłem i detektorem`},
          {id:4 , description: `pomiary są wykonywane automatycznie i nie wymagana jest obecność pracownika w pobliżu urządzenia`}
      ]
  },

      { id: 5, name: "SysKonSystemLab", description: "Urządzenie typu laboratoryjnego, pozwala na pomiar parametrów jakościowych (zawartość popiołu, wilgotność, wartość opałową) około 10-cio kilogramowych próbek umieszczanych w specjalnym pojemniku.", place: "urządzenie przenośne", active: false, spec: "Pomiar zawartości popiołu oraz wilgotności urobku umieszczonego w pojemniku pomiarowym we wnętrzu urządzenia, pozwalający na obliczenie kaloryczności materiału.",assembly: " Dowolne stabilne podłoże. Urządzenie jest wolnostojące.", workDesc: "SysKonSystemLab pozwala na pomiar jakości małej próbki węgla (do 20kg) i służy do badań laboratoryjnych. Prześwietlanie pojemnika wiązką promieni gamma o dwóch różnych energiach i badanie wiązką mikrofalową pozwala na obliczenie zawartości popiołu i wilgoci, a później kaloryczności węgla. Urządzenie posiada zespół napędów, które umożliwiają dokładne prześwietlanie badanej próbki. Producent dąży do zapewnienia stałego zdalnego dostępu do analizatora w celu prowadzenia ciągłej diagnostyki.", communication: "Wynik pomiaru (Pętla prądowa 4-20mA, modbus/TCP), wizualizacja raportów i pomiarów za pomocą interfejsu WWW.",
      specyfication: [
          {id: 1, description: `rodzaj węgla: kamienny`},
          {id: 2, description: `granulacja: 0-300mm`},
          {id: 3, description: `dokładność pomiaru popiołu: 1-2% (średni błąd kwadratowy)`},
          {id: 4, description: `dokładność pomiaru wilgotności: 0,5-1% (średni błąd kwadratowy)`},
          {id: 5, description: `źródła promieniowania: 241Am, 137Cs`},
          {id: 6, description: `zasilanie: 230V, jednofazowe, 5A`}
      ],
      composition : [
          {id:1 , description: `izotopowy miernik zawartości popiołu`},
          {id:2 , description: `mikrofalowy wilgotnościomierz`},
          {id:3 , description: `zespół napędowy`},
          {id:4 , description: `komputer sterujący/pomiarowy`},
          {id:5 , description: `system komunikacji z serwisem`}
      ],
      feature: [
          {id:1 , description: `pomiar ciągły próbki`},
          {id:2 , description: `dwuźródłowy pomiar popiołu metodą transmisyjną`},
          {id:3 , description: `wilgotność mierzona przez pomiar przesunięcia fazowego i tłumienia mikrofal w znacznej objętości mierzonej strugi`},
          {id:4 , description: `istotną zaletą urządzenia jest możliwość pomiaru próbki pochodzącej bezpośrednio z przenośnika taśmowego (węgiel nie musi być rozdrabniany)`},
          {id:5 , description: `elektronika ze stabilizacją temperatury dla zapewnienia większej dokładności`},
          {id:6 , description: `możliwość generowania dowolnych raportów`},
          {id:7 , description: `bardzo łatwa i szybka instalacja`},
          {id:8 , description: `możliwość zdalnej kalibracji i diagnozy`},
          {id:9 , description: `pomiary są wykonywane automatycznie i nie wymagana jest obecność pracownika w pobliżu urządzenia`}
      ],

      radioactive_desc: `SyskonLab zawiera radioizotop, więc największą uwagę przy projektowaniu i konstruowaniu poświęcono by urządzenie spełniało wszystkie standardy bezpieczeństwa pracy`,

      radioactive: [
          {id:1 , description: `posiadamy zezwolenie na produkcję miernika wydane przez Państwową Agencję Atomistyki w Warszawie`},
          {id:2 , description: `poziom promieniowania na powierzchni pojemnika źródeł jest znacznie poniżej poziomu dozwolonego przez przepisy, tj. 2mSv/h`},
          {id:3 , description: `wiązka promieni jest skoncentrowana i operuje bardzo wąskim koncentrycznym strumieniem pomiędzy źródłem i detektorem`},
          {id:4 , description: `pomiary są wykonywane automatycznie i nie wymagana jest obecność pracownika w pobliżu urządzenia`}
      ]
  },

      { id: 6, name: "SysKon 400", description: "Ciągły pomiar parametrów jakościowych (zawartość popiołu, wilgotność, wartość opałową) oraz wagi węgla kamiennego transportowanego przenośnikiem taśmowym. Pomiar wycinka strugi węgla. Urządzenie przeznaczone do użytku w podziemnych wyrobiskach górniczych.", place: "na przenośniku taśmowym", active: false, spec: "Pomiar zawartości popiołu, wilgotności oraz masy węgla transportowanego na przenośniku taśmowym pozwala na obliczenie jego wartości opałowej.",assembly: "Dowolny przenośnik taśmowy. Zazwyczaj nie wymagane są zmiany w konstrukcji przenośnika (najczęściej spotykana zmiana, to zapewnienie odpowiedniej odległości między taśmami).", workDesc: "SysKon400 pozwala w sposób ciągły kontrolować jakość oraz masę węgla transportowanego przenośnikiem taśmowym. Prześwietlanie taśmy wiązką promieni gamma o dwóch różnych energiach i badanie wiązką mikrofalową pozwala na oznaczenie zawartości popiołu i wilgoci, a później obliczenie kaloryczności węgla. Metoda izotopowa pozwala także na pomiar masy transportowanego urobku. Opcją jest dołączenie wagi technologicznej. Producent dąży do zapewnienia stałego zdalnego dostępu do analizatora w celu prowadzenia ciągłej diagnostyki.", communication: "Wynik pomiaru (linia telefoniczna), wizualizacja raportów i pomiarów za pomocą interfersju WWW, oraz możliwość wyświetlania informacji na transparencie optycznym zamontowanym w pobliżu urządzenia.",
      specyfication: [
          {id: 1, description: `rodzaj węgla: kamienny`},
          {id: 2, description: `granulacja: 0-300mm`},
          {id: 3, description: `wysokość warstwy: 50-300mm`},
          {id: 4, description: `szerokość taśmy: bez ograniczeń`},
          {id: 5, description: `dokładność pomiaru popiołu: 1-2% (średni błąd kwadratowy)`},
          {id: 6, description: `dokładność pomiaru wilgotności: 0,5-1% (średni błąd kwadratowy)`},
          {id: 7, description: `źródła promieniowania: 241Am, 137Cs`},
          {id: 8, description: `zasilanie: 230V, jednofazowe, 4A`}
      ],
      composition : [
          {id:1 , description: `izotopowy miernik zawartości popiołu`},
          {id:2 , description: `mikrofalowy wilgotnościomierz`},
          {id:3 , description: `waga technologiczna`},
          {id:4 , description: `transparenty optyczne`},
          {id:5 , description: `konstrukcja mocująca urządzeniu na przenośniku`},
          {id:6 , description: `komputer sterujący/pomiarowy`},
          {id:7 , description: `system komunikacji z serwisem`}
      ],
      feature: [
          {id:1 , description: `urządzenie przystosowane do pracy w wyrobiskach podziemnych`},
          {id:2 , description: `pomiar ciągły, bezpośredni na przenośniku taśmowym`},
          {id:3 , description: `dwuźródłowy pomiar popiołu metodą transmisyjną`},
          {id:4 , description: `wilgotność mierzona przez pomiar przesunięcia fazowego i tłumienia mikrofal w znacznej objętości mierzonej strugi`},
          {id:5 , description: `pomiar masy urobku`},
          {id:6 , description: `elektronika ze stabilizacją temperatury dla zapewnienia większej dokładności`},
          {id:7 , description: `struga mierzona w zakresie wysokości ~5-50cm`},
          {id:8 , description: `brak ingerencji w pracę przenośnika`},
          {id:9 , description: `brak mechanicznego kontaktu z warstwą węglą`},
          {id:10 , description: `automatyczna korekta dla dynamicznych zmian wysokości warstwy węgla`},
          {id:11 , description: `automatyczne odrzucanie wyników dla niskich i wysokich warstw węgla`},
          {id:12 , description: `możliwość generowania dowolnych raportów`},
          {id:13 , description: `łatwa i szybka instalacja`},
          {id:14 , description: `najczęściej nie wymaga zmian w konstrukcji taśmociągu`},
          {id:15 , description: `możliwość zdalnej kalibracji i diagnozy`},
          {id:16 , description: `możliwość pracy urządzenia na przenośnikach składających się z wielu różnych odcinków`},
          {id:17 , description: `pomiary są wykonywane automatycznie i nie wymagana jest obecność pracownika w pobliżu urządzenia`}
      ],

      radioactive_desc: `Syskon 400 zawiera radioizotop, więc największą uwagę przy projektowaniu i konstruowaniu poświęcono by urządzenie spełniało wszystkie standardy bezpieczeństwa pracy`,

      radioactive: [
          {id:1 , description: `posiadamy zezwolenie na produkcję miernika wydane przez Państwową Agencję Atomistyki w Warszawie`},
          {id:2 , description: `poziom promieniowania na powierzchni pojemnika źródeł jest znacznie poniżej poziomu dozwolonego przez przepisy, tj. 2mSv/h`},
          {id:3 , description: `wiązka promieni jest skoncentrowana i operuje bardzo wąskim koncentrycznym strumieniem pomiędzy źródłem i detektorem`},
          {id:4 , description: `pomiary są wykonywane automatycznie i nie wymagana jest obecność pracownika w pobliżu urządzenia`}
      ]
  },

      { id: 7, name: "SysKon 500", description: "Ciągły pomiar parametrów jakościowych (zawartość popiołu, siarki, wilgotność, wartość opałową) węgla kamiennego transportowanego przenośnikiem taśmowym. Możliwość oznaczenia większej ilości pierwiastków w materiale (wodór, tlen, wapń, chlor, krzem, siarka, żelazo i glin).", place: "na przenośniku taśmowym", active: false, spec: " Pomiar zawartości popiołu, siarki oraz wilgotności węgla transportowanego na przenośniku taśmowym pozwala na obliczenie jego wartości opałowej. Badamy możliwości pomiarowe pozwalające oznaczać większą ilość pierwiastków w materiale (wodór, tlen, wapń, chlor, krzem, siarka, żelazo i glin).", assembly: "Dowolny przenośnik taśmowy z odpowiednią ilością przestrzeni na konstrukcję urządzenia (zależy ona od szerokości przenośnika). Pracownicy producenta dokonują oględzin miejsca montażu przed rozpoczęciem prac.", workDesc: "SysKon 500 pozwala w sposób ciągły kontrolować jakość węgla transportowanego przenośnikiem taśmowym. Jest urządzeniem najnowszej generacji pozwalającym w sposób ciągły kontrolować jakość węgla transportowanego na przenośniku taśmowym. Pomiar urobku odbywa się metodą aktywacyjną. Poszczególne pierwiastki wchodzące w skład węgla na przenośniku, pod wpływem naświetlania neutronami o energiach 1-10MeV, generują charakterystyczne dla siebie spektra energetyczne. Poprzez badanie uzyskanego spektrum, możemy określić kaloryczność badanego węgla. Producent dąży do zapewnienia stałego zdalnego dostępu do analizatora w celu prowadzenia ciągłej diagnostyki.", communication: "",
      specyfication: [
          {id: 1, description: `rodzaj węgla: kamienny`},
          {id: 2, description: `granulacja: 0-300mm`},
          {id: 3, description: `wysokość warstwy: od 100 mm`},
          {id: 4, description: `szerokość taśmy: bez ograniczeń`},
          {id: 5, description: `źródło neutronów: Am-Be`},
          {id: 6, description: `zasilanie: 230V, jednofazowe, 4A`}
      ],
      composition : [
          {id:1 , description: `izotop Am-Be (ameryk-beryl) jako źródło neutronów`},
          {id:2 , description: `kryształ NaI(Tl) wraz z fotopowielaczem jako detektor gamma`},
          {id:3 , description: `wielokanałowy analizator gamma`},
          {id:4 , description: `konstrukcja mechaniczna wiążąca powyższe elementy`},
          {id:5 , description: `osłony chroniące przed promieniowaniem gamma i neutronowym`},
          {id:6 , description: `komputer sterujący/pomiarowy`},
          {id:7 , description: `system komunikacji z serwisem`}
      ],
      feature: [
          {id:1 , description: `pomiar ciągły całej objętości badanej masy węgla, bezpośredni na przenośniku taśmowym`},
          {id:2 , description: `pomiar materiału nowoczesną metodą neutronową`},
          {id:3 , description: `większa dokładność pomiaru niż w urządzeniach ze źródłem gamma`},
          {id:4 , description: `pomiar wielkości mierzonych nie zależy od pochodzenia węgla, więc z powodzeniem może być stosowany w elektrowniach, gdzie zazwyczaj węgiel pochodzi z wielu kopalni`},
          {id:5 , description: `źródło Am-Be jest źródłem o bardzo długim okresie połowicznego rozpadu (ok. 430 lat), co gwarantuje bardzo stabilny pomiar oraz uproszczoną logistykę w porównaniu z podobnymi analizatorami stosującymi jako źródło neutronów izotop Cf-252 (okres połowicznego rozpadu ok. 2.5 roku)`},
          {id:6 , description: `elektronika ze stabilizacją temperatury dla zapewnienia większej dokładności`},
          {id:7 , description: `brak ingerencji w pracę przenośnika`},
          {id:8 , description: `brak mechanicznego kontaktu z warstwą węglą`},
          {id:9 , description: `automatyczna korekta dla dynamicznych zmian wysokości warstwy węgla`},
          {id:10 , description: `możliwość generowania dowolnych raportów`},
          {id:11 , description: `najczęściej nie wymaga zmian w konstrukcji taśmociągu`},
          {id:12 , description: `możliwość zdalnej kalibracji i diagnozy`},
          {id:13 , description: `możliwość pracy urządzenia na przenośnikach składających się z wielu różnych odcinków`},
          {id:14 , description: `pomiary są wykonywane automatycznie i nie wymagana jest obecność pracownika w pobliżu urządzenia`}
      ],

      radioactive_desc: `Syskon 500 zawiera źródło neutronowe, więc największą uwagę przy projektowaniu i konstruowaniu poświęcono by urządzenie spełniało wszystkie standardy bezpieczeństwa pracy`,

      radioactive: [
          {id:1 , description: `posiadamy zezwolenie na produkcję miernika wydane przez Państwową Agencję Atomistyki w Warszawie`},
          {id:2 , description: `konstrukcja urządzenia zbudowana jest z odpowiednich osłon minimalizujących działanie promieniowania neutronowego i gamma na okolice urządzenia`},
          {id:3 , description: `pomiary są wykonywane automatycznie i nie wymagana jest obecność pracownika w pobliżu urządzenia`}
      ]
  }
  ],


  installed : [
      {id: 1, name: `"Łęczyńska Energetyka" Spółka z o.o. w Bogdance`, device: [
          {id: 1, name:"SysKonSystem", qnt: 1}]},

      {id: 2, name: `Lubelski Węgiel „BOGDANKA” Spółka Akcyjna`, device: [
          {id: 1, name: "SysKonSystem", qnt: 3},
          {id: 2, name: "SysKonSystemSkan", qnt: 7},
          {id: 3, name: "SysKonSystemLab", qnt: 1},
          {id: 4, name: "SysKon 400", qnt: 5},
          {id: 5, name: "SysKon 500", qnt: 1}]
      },

      {id: 3, name: `Przedsiębiorstwo Górnicze ”SILESIA” Sp. z o.o.`, device: [
          {id: 1, name:"SysKonSystem", qnt: 2},
          {id: 2, name:"SysKonSystemSkan", qnt: 2}
      ]},

      {id: 4, name: `Zakład Górniczy "Sobieski"`, device: [
          {id: 1, name:"SysKonSystem", qnt: 1}
      ]},

      {id: 5, name: `Kopalnia Węgla Kamiennego "Mysłowice-Wesoła"`, device: [
          {id: 1, name:"SysKonSystem", qnt: 2}
      ]},

      {id: 6, name: `Kopalnia Węgla Kamiennego "Brzeszcze"`, device: [
          {id: 1, name:"SysKonSystemSkan", qnt: 3}
      ]},

      {id: 7, name: `ENEA Wytwarzanie S.A., Kozienice`, device: [
          {id: 1, name:"SysKon 202", qnt: 8}
      ]},

      {id: 8, name: `PGE Górnictwo i Energetyka Konwencjonalna Spółka Akcyjna, Elektrownia Dolna Odra`, device: [
          {id: 1, name:"SysKon 202", qnt: 6}
      ]},

      {id: 9, name: `Zespół Elektrociepłowni Wrocławskich KOGENERACJA S.A`, device: [
          {id: 1, name:"SysKon 202", qnt: 6}
      ]},

      {id: 10, name: `PGE Energia Ciepła S.A., oddział w Rybniku`, device: [
          {id: 1, name:"SysKon 202", qnt: 4}
      ]},

      {id: 11, name: `Ostravská těžební, a.s.`, device: [
          {id: 1, name:"SysKonSystem", qnt: 2}
      ]},

      {id: 11, name: `Ostdsadasdasdasbní, a.s.`, device: [
          {id: 1, name:"SysKonSystem", qnt: 2}
      ]}

  ],

  auction: [
      {id: 1, name: `ZAPYTANIE OFERTOWE NR 1/1.2.ZIT/2017.`, date: `16.11.2017`, more: `(dostawa wraz z transportem fabrycznie nowych detektorów promieniowania gamma)`, status: `zakończono`},
      {id: 2, name: `Informacja o wyniku postępowania o udzielenie zamówienia publicznego na zapytanie ofertowe nr 1/1.2.ZIT/2017`, date: `16.11.2017`, more: `(dostawa wraz z transportem fabrycznie nowych detektorów promieniowania gamma)`, status: ``},
      {id: 3, name: `ZAPYTANIE OFERTOWE NR 2/1.2.ZIT/2017`, date: `16.11.2017`, more: `(dostawa wraz z transportem fabrycznie nowych wielokanałowych analizatorów promieniowania Gamma (MCA))`, status: `unieważniono`},
      {id: 4, name: `ZAPYTANIE OFERTOWE NR 2.1/1.2.ZIT/2017`, date: `23.11.2017`, more: `(dostawa wraz z transportem fabrycznie nowych wielokanałowych analizatorów promieniowania Gamma (MCA))`, status: `zakończono`},
      {id: 5, name: `Informacja o wyniku postępowania o udzielenie zamówienia publicznego na zapytanie ofertowe nr 2.1/1.2.ZIT/2017`, date: `23.11.2017`, more: `(dostawa wraz z transportem fabrycznie nowych wielokanałowych analizatorów promieniowania Gamma (MCA))`, status: ``},
      {id: 6, name: `ZAPYTANIE OFERTOWE NR 3/1.2.ZIT/2017`, date: `16.11.2017`, more: `(dostawa wraz z transportem fabrycznie nowych źródeł  neutronowych Am-Be)`, status: `unieważniono`},
      {id: 7, name: `ZAPYTANIE OFERTOWE NR 3.1/1.2.ZIT/2017`, date: `23.11.2017`, more: `(dostawa wraz z transportem fabrycznie nowego źródła neutronowego Am-Be)`, status: `zakończono`},
      {id: 8, name: `Informacja o wyniku postępowania o udzielenie zamówienia publicznego na zapytanie ofertowe nr 3.1/1.2.ZIT/2017`, date: `23.11.2017`, more: `(dostawa wraz z transportem fabrycznie nowego źródła neutronowego Am-Be)`, status: ``}
  ]
}

  
  handleClickSpecyfication = (id, operation) => {
        
    const newProducts = this.state.products.map(item => {
        item.active = false;
        if(id === item.id && operation === `add`){
            item.active = true;
        }else if(id === item.id && operation === `remove`){
            item.active = false
        }
        return item
    })

    this.setState({
        products: newProducts
    })
}

ResetClickSpecyfication = () => {
    const newProducts = this.state.products.map(item => {
        item.active = false;
        return item
    })

    this.setState({
        products: newProducts
    })
}

handleClickNav = (id) => {
    const newMenu = this.state.menu.map(item => {
        item.active = false;
        if(id === item.id){
            item.active = true
        }
        return item
    })

    this.setState({
        menu: newMenu
    })
}

componentDidMount () {
    this.myInterval = setInterval(() => {
        if(this.state.timeAnimation > this.state.lastRun.length-2){
          this.setState(() => ({
            timeAnimation: 0
          }))  
        }else{
            this.setState(prevState => ({
                timeAnimation: prevState.timeAnimation + 1
            }))
        }

        
    }, 5000)
}

resetSetSlider = () => {
    const time = 0;

    this.setState({
        timeAnimation: time
    })
}

loadingPage = () => {
    for(let i=0; i<this.state.menu.length; i++){
        if(this.state.menu[i].active){
            return(
                <Content
                    key={this.state.menu[i].id}
                    id={this.state.menu[i].id}
                    products={this.state.products}
                    installed={this.state.installed}
                    lastRun={this.state.lastRun}
                    timeAnimation={this.state.timeAnimation}
                    handleClick={this.handleClickSpecyfication}
                    auction={this.state.auction}
                />
            )
        }
    }
}

render(){
    return(
        <div className="wrapper">
          <Sponsors/>
          <Navigation menu={this.state.menu} navClick={this.handleClickNav} resetSpec={this.ResetClickSpecyfication} resetSetSlider={this.resetSetSlider}/>
          
          {this.loadingPage()}
          <Footer />
        </div>
    )
}

}

export default App;
