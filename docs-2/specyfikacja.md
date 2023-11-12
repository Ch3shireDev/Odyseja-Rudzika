# Wędrówka rudzikiem - specyfikacja

1. Jaka jest główna idea Twojej aplikacji, jaki cel biznesowy spełnia?

Gra odtwarza prawdziwą migrację rudzika - jej scenariusz stworzyli czołowi specjaliści w dziedzinie wędrówek drobnych ptaków na świecie. Gracz kieruje jednym (lub niezależnie kilkoma) rudzikami stając przed dylematami i wyborami, przed jakimi naprawdę stoją rudziki w czasie każdej jesiennej wędrówki, a potem wiosennej wędrówki.

2. Czy jest to aplikacja budowana od początku czy rozwój istniejącej aplikacji?

Aplikacja jest budowana od początku - w ramach przetargu dostarczany jest jej prototyp, który spełnia jedynie podstawowe założenia gry.

3. Kto jest użytkownikiem Twojej aplikacji?

Gra jest kierowana do uczniów szkół podstawowych, średnich i wyższych, w ramach popularyzacji ornitologii w Polsce i promocji Akcji Bałtyckiej.

4. Na jakie platformy (Android, iOS, web) i wersje systemu ma zostać zaimplementowana aplikacja?

Aplikacja ma być napisana we frameworku Ionic (https://ionicframework.com/) i docelowo ma obejmować platformy webową i mobilne, Android oraz iOS.

5. Na jakie urządzenia powinna zostać zaprojektowana aplikacja (smartfon, tablet, desktop)?

Aplikacja powinna zostać zaprojektowana tak, by była responsywna na smartfonach, tabletach oraz desktopach.

6. Jakie funkcje powinna mieć aplikacja (co użytkownik dzięki niej będzie mógł robić)?

Aplikacja powinna pozwalać graczowi na:

1. Gracz może przejrzeć panel statystyk rudzika:
- imię, 
- płeć, 
- rodzaj skrzydeł, 
- stan zdrowia, 
- stan otłuszczenia, 
- rodzaj żerowiska na którym się w danej chwili znajduje. 

2. Gracz ma dostęp do informacji o postępie gry: 
- dniu i dacie rozgrywki, 
- liczbie przebytych kilometrów,
- pozostałych kilometrach do przebycia, 
- położeniu geograficznym 
- informacji o lokalizacji dostarczanej poprzez odwrotne geokodowanie.

3. Gracz ma dostęp do informacji o pogodzie na dzień bieżący oraz na najbliższe dni, w formie:
- natężenie wiatru,
- natężenia opadów,
- temperatury

4. Gracz ma dostęp do informacji o dotychczasowo przeżytych:

- atakach krogulca
- załamaniach pogody
- mgłach
- zderzeniach ze szklanymi wieżowcami

5. Gracz ma dostęp do grafiki rudzika, wraz z możliwością konfiguracji jego wyglądu:

- elementach ubioru (hawajska koszula, okulary przeciwsłoneczne, sombrero, etc.)
- noszonych przedmiotach (podróżny aparat na pasku wokół głowy, walizka, składana mapa trzymana w skrzydłach, etc.)
- tle (nadmorska plaża, hotel, park rozrywki, etc.)

6. Gracz dostaje informacje w oknie panelu z zestawem ciekawostek przyrodniczych z ogólnie pojętej dziedziny ornitologii.

7. Gracz ma dostęp do okna decyzji na dany dzień:
- intensywnym żerowaniu na bieżącym żerowisku
- żerowaniu na utrzymanie kondycji
- dalszym locie
- zmianie żerowiska
- leczeniu ran (w przypadku ataku przez drapieżnika)

9. Przy wyborze decyzji gracz dostaje informacje na temat spodziewanych rezultatów:
- spodziewanego przyrostu lub utraty tłuszczu - w przypadku żerowania
- prawdopodobieństwie zdarzenia losowego (załamania pogody, wystąpieniu mgły, zderzeniu z wieżowcem - w przypadku żerowania, ataku krogulca - w przypadku żerowania i lotu)
- prawdopodobieństwie znalezienia lepszego żerowiska - w przypadku decyzji o lepszym żerowisku
- możliwości ozdrowienia - w przypadku decyzji o leczeniu ran

10. Po potwierdzeniu wybranej decyzji gracz dostaje informacje na temat efektów - przyrostu lub ubytku tłuszczu, ataku krogulca lub innych zdarzeniach losowych, przelecianych kilometrach (w przypadku decyzji o locie), znalezieniu (lub nie) lepszego żerowiska - w przypadku podjęcia decyzji o szukaniu lepszego żerowiska.

11. Gracz ma dostęp do mapy świata, na której zaznaczane są kolejne przystanki na których zatrzymywał się rudzik. Ważne jest by przystanki odwzorowywały faktyczną trasę rudzika, jak również i to, by trasa pokrywała się z realnymi trasami migracji.

12. Gracz ma możliwość zalogowania się w celu uzyskania 

Aplikacja w docelowej wersji powinna pozwalać na logowanie się do systemu.

- Aplikacja powinna umożliwiać komunikację z zewnętrznym serwerem.

Wykonawcy programu zostaną dostarczony tekst opisów i ciekawostek na temat podróży rudzika.

Wykonawca jest zobowiązany samodzielnie zarządzać procesem publikacji aplikacji.

Wykonawca jest zobowiązany do stworzenia aplikacji, wraz z projektem interfejsu i doświadczenia użytkownika, przeprowadzeniem testów i utrzymania aplikacji po wdrożeniu.

Poza obszar prac wykonawcy wychodzą zadania związane z wiedzą ornitologiczną i ekologiczną - pojawiające się informacje na temat życia ptaków, trasy wędrówek, stan żerowisk w zależności od lokalizacji geograficznej i pory roku, parametry pogodowe wychodzące poza dostarczane przez standardowe API.

Praca będzie trwać do 1 lipca 2022 roku, przy nakładzie 10 godzin pracy na miesiąc. Raz w miesiącu przewidywane jest spotkanie online dotyczące bieżącego stanu aplikacji. Omawiana będzie bieżąca funkcjonalność i wygląd aplikacji i wprowadzane propozycje zmian. Projekt zakłada współpracę z grafikiem dostarczającym rysunków ptaków.

## Co powinna zawierać specyfikacja?

Zdefiniuj cel, jaki aplikacja ma spełniać

- Jaka jest główna idea aplikacji? Do czego jest przeznaczona i jaki problem rozwiązuje?

Być może jest to aplikacja do usprawnienia procesów wewnątrz firmy (np. logistyka, zarządzanie pracownikami) lub do procesów zewnętrznych (np. komunikacja, sprzedaż). Opisz cel biznesowy i preferowane zmiany po wprowadzeniu aplikacji. Wskaż, czy rozwijasz istniejąca aplikację, czy budujesz nowy produkt od podstaw.
Określ, kto będzie twoim użytkownikiem

- Kto będzie korzystał z Twojej aplikacji i dlaczego? Jakim typem użytkownika będą Twoi klienci, na czym im zależy? Jakie doświadczenia ma zapewniać Twoja aplikacja?

Jeżeli posiadasz opis person, dane rynkowe na temat swoich użytkowników, analizy behawioralne lub kluczowe wnioski z analiz, to jest moment, w którym możesz je przedstawić zespołowi tak, aby ten lepiej zaprojektował system. Opisz typy użytkowników, jakie będą występowały w ramach systemu oraz ich kluczowe role.
Wylistuj wszystkie funkcje

- Jakie czynności, akcje użytkownik będzie mógł podejmować poprzez aplikacje? W jaki sposób aplikacja będzie prowadziła użytkownika przez kolejne swoje funkcje od momentu zalogowania się? Czy występuje jakaś sekwencja akcji podejmowanych przez użytkownika?

Przykładowymi funkcjami w aplikacji mogą być: logowanie się, przeglądanie produktów, porównywanie produktów, kupowanie produktów, śledzenie przesyłki, wysyłanie wiadomości, otrzymywanie notyfikacji push, geolokalizacja. Określ priorytety poszczególnych funkcji i wskaż, które stanowią kluczową część aplikacji, a które opcjonalną. Rozpisz, jakie elementy mają być uwzględnione na poszczególnych ekranach i jak mają się zachowywać, jaką pełnić rolę, jakie stany mogą przyjmować.

## Zdefiniuj integracje ze wszystkimi systemami

- Czy aplikacja będzie musiała się integrować z np. systemem kasowym, twoim CRM-em, social mediami, innymi platformami? Z jakimi systemami będzie musiała współpracować aby spełniać swoje funkcje?

- Jeżeli posiadasz dokumentację API, czy hardware'u, z którym aplikacja powinna się łączyć, lub informacje na temat systemów, z którymi aplikacja powinna być zintegrowana (np. płatności), opisz to w specyfikacji.
Określ zakres współpracy i dostarczane materiały

- Za jakie obszary rozwoju aplikacji będzie odpowiadał wybrany software house, a za jakie Twoja firma lub inni podwykonawcy? Czy po twojej stronie jest dostarczenie API, designu, makiety, copywriting?

Jeżeli dostarczasz potrzebne materiały – określ w dokumencie czy poszczególne elementy są gotowe, czy w trakcie przygotowywania i zadeklaruj termin przekazania ich.

## Specyfikacja funkcjonalna spis treści

Jak można zauważyć, każda funkcja stanowi osobny podrozdział, przez co sam dokument jest dość rozbudowany.
Przykładowa specyfikacja funkcjonalna aplikacji

Kliknij i pobierz wzór specyfikacji funkcjonalnej

Specyfikacja funkcjonalna w trakcie procesu developmentu

Budując specyfikację funkcjonalną, powinniśmy zastanowić się, które elementy są istotne w drodze do osiągnięcia założonego celu. Dlatego w zależności od projektu specyfikacja będzie mniej lub bardziej obszerna.

Często okazuje się, że w trakcie rozwoju produktu i testowania jego poszczególnych modułów ostateczna wizja projektu zmienia się. Weryfikując oprogramowanie, klient widzi czego brakuje, co dobrze byłoby zrobić inaczej, co należy dodać. W takim przypadku wraz z nowymi postanowieniami należy zaktualizować specyfikację funkcjonalną.

To jak dobrze zdefiniowany zostanie produkt będzie miało przełożenie na to, czy produkt będzie spełniał wymagania klienta i odzwierciedlał jego ostateczne wyobrażenia. Każde niedopowiedzenie to późniejsza strata w zaplanowanych godzinach w harmonogramie, dlatego bardzo ważne jest wzajemne zrozumienie swoich intencji i zakresów działania.

Czym jest Specyfikacja Wymagań Systemu Informatycznego (Specyfikacja Oprogramowania)?

Specyfikacja to dokument, w którym zebrano wszystkie oczekiwania funkcjonalne i niefunkcjonalne stawiane przyszłemu systemowi (np. wymagania funkcjonalne i niefunkcjonalne aplikacji). Standardowy dokument tego rodzaju zawiera:

- nazwę produktu
- imiona i nazwiska jego autorów
- wersję dokumentu
- historię zmian – prezentowaną najczęściej w postaci tabelarycznej
- spis treści
- część poświęconą charakterystyce firmy (jej potrzeb, problemów biznesowych)
- opis przyszłego / aktualnego systemu, z jakiego firma chce lub z jakiego już korzysta
- słownik pojęć używanych w dokumencie
- opis modelu biznesowego (w szczególności uwzględniający aktorów, reguły, procesy biznesowe)
- opis wymagań funkcjonalnych
- opis wymagań niefunkcjonalnych
- listę wymagań (wraz z priorytetyzacją i opisem przypadków użycia)
- model systemu.

Specyfikacja Wymagań obejmuje z jednej strony biznesową użyteczność systemu, z drugiej zaś porządkuje informacje dotyczące zakresu prac, czasu ich wykonania, metod oraz wyróżnionych etapów (Statement of Work).

Specyfikacja wymagań oprogramowania opisuje także wszystkie możliwe interakcje, jakie będą zachodzić między użytkownikami (zewnętrznymi i wewnętrznymi - administratorami) a systemem.

Dostarcza wiedzy na temat celów, jakie aplikacja webowa pozwala osiągać, sposobów ich osiągania, warunków koniecznych do ich osiągania, wyjątków, jakich nie dotyczy. Uściśla także oczekiwania względem bezpieczeństwa, ochrony danych, warunków korzystania (specyfikacja wymagań systemowych).

Specyfikacja Wymagań pełni rolę nie tylko dokumentacji technicznej (specyfikacja wymagań funkcjonalnych), w pełnym tego słowa znaczeniu, ale także jest dokumentem pozwalającym:

- wycenić projekt (jest szczególnie użyteczna w modelu rozliczeń Fixed Price)
- określić czas wykonania
- podzielić projekt na etapy (Sprinty)
- dookreślić zespół koniecznych do jego wykonania specjalistów
- dobrać adekwatne technologie
- zaplanować ewentualne integracje
- dostosować produkt do aktualnych standardów
- zrozumieć developerom, do czego ma służyć i w jaki sposób ma działać system (np. przypadki użycia).

Przygotowanie do tworzenia Specyfikacji Wymagań

Uwzględnienie wszystkich wymagań, jakie stawiane są systemowi, jest czasochłonne i pracochłonne. Zdecydowanie jednak przekłada się na szybkość i jakość powstania produktu cyfrowego. Pozwala uniknąć niepotrzebnych błędów, zmniejsza ilość poprawek i zmian. Warto zatem poświęcić czas na przygotowanie wyczerpujących odpowiedzi na najbardziej typowe pytania:

- czy rozwiązanie ma być tworzone od podstaw, czy ma być rozwinięciem istniejącego systemu?
- czy strona internetowa, aplikacja musi być stworzona z uwzględnieniem Design Systemu?
- jaki jest główny cel biznesowy?
- jaki jest zakres prac produkcyjnych oraz jaki będzie zakres obsługi związanej z utrzymaniem i rozwojem systemu?
- jakie będą główne korzyści firmy oraz przyszłych użytkowników systemu?
- jakie funkcje, moduły musi posiadać, powinna posiadać, może posiadać?
- jakie prace i w jakim zakresie będą wykonywane przez zleceniodawcę lub innych wykonawców?
- na jakich urządzeniach, na jakich systemach operacyjnych, w jakim środowisku system ma docelowo działać?
- w jakim stopniu ma być systemem typowym (podobnym do istniejących), a w jakim stopniu ma oferować dodatkowe funkcjonalności?
- z jakich narzędzi analitycznych będzie korzystać firma do śledzenia zachowań użytkowników?
- z jakimi systemami zewnętrznymi będzie zintegrowany?

Wyczerpujące określenie:

- zadań, jakie będzie wykonywać produkt cyfrowy
- korzyści, jakie pozwoli osiągać
- sposobów ich wykonywania i osiągania

przekłada się bezpośrednio na satysfakcję właścicieli systemu i jego użytkowników.
Specjaliści tworzący Specyfikację Wymagań

Za Tworzenie Specyfikacji Wymagań zazwyczaj odpowiedzialnych jest kilku specjalistów, przy czym w czasie jego powstawania treść dokumentu powinna być konsultowana z pracownikami wszystkich działów.

Analityk Biznesowy odpowiada za przełożenie celów biznesowych na język wymagań programistycznych. Efektem jego prac ma być odpowiedź na pytanie „co ma być wykonane”. Za odpowiedź na pytanie „jak ma być to wykonane” odpowiada Architekt Systemu, który określa jego strukturę oraz sposób jej wdrożenia.

Zespół programistów, mając tak przygotowane ramy, jest w stanie uzupełnić je o konkretne propozycje rozwiązań technicznych. Równie istotną rolę pełni UX Designer, który wskazuje wymagania dotyczące użyteczności, ergonomii systemu. Bardzo przydatnymi narzędziami w tworzeniu Specyfikacji Funkcjonalnej są Business Model Canvas, User Stories.

Metodą pozwalająca na ukonkretnienie wymagań jest ich zapis w formie zdań określających możliwość (np. mam możliwość utworzenia konta, mogę oglądać filmy). Zdania można sformalizować do formuły: ja / rola – mogę / określenie funkcji – nacisnąć, wybrać / określenie działania – w celu / określenie rezultatu.

## Specyfikacja Wymagań w formule SMART

Każde wymaganie (funkcjonalne i niefunkcjonalne) powinno być określone, wyrażone w sposób:

 prosty i jednoznaczny (Simple / Specific)
 mierzalny za pomocą standardowych miar (Measureable)
 możliwy do uzyskania w danym czasie, przy zaangażowaniu dostępnych środków (Achievable)
 adekwatny do funkcji, celu (Relevant)
 możliwy do kontroli (Traceable).

Dodatkowo każde wymaganie powinno być możliwe do łatwej identyfikacji za pomocą atrybutów:

 alfanumerycznego identyfikatora
 kategorii wymagań, do jakiej przynależy
 definicji
 priorytetu ważności (najczęściej trzystopniowego: bardzo ważny, ważny, nieistotny).

Wymagania biznesowe i funkcjonalne

Stworzona strona internetowa, aplikacja webowa, mobilna stanowić musi równoważną wartość dla jej użytkowników oraz posiadaczy. Powinna ona pozwalać na osiąganie wspólnych celów. Przy czym warto zauważyć, że wymagania funkcjonalne w przeciwieństwie do biznesowych, zostają osiągnięte wraz z ukończeniem prac. Cele biznesowe mogą być mierzone za pomocą różnych wskaźników i osiągane w różnych perspektywach czasowych.

