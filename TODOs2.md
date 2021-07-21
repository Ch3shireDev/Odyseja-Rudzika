# TODOs

Rzeczy do zrobienia:

## DevOps

1.  [ ] Stworzyć skrypt GitHub Actions automatycznie generujący nową wersję plików `.apk` i `.ipa`.
2.  [ ] Stworzyć skrypt GitHub Actions generujący stronę na GitHub Pages.
3.  [ ] Stworzyć skrypt GitHub Actions przeprowadzający testy.

## Tryby

1. [ ] samodzielny - całą rozgrywkę można rozegrać w sposób ciągły, wykonując kolejny ruch po zakończeniu poprzedniego.
2. [ ] mistrzostwa - gracze grają ze wzajemnym podglądem i statystykami. Gracz również dysponuje pulą rudzików.

## Aplikacja

1.  [ ] Stworzyć stronę statystyk rudzika.
2.  [ ] Stworzyć stronę decyzji rudzika.
3.  [ ] Stworzyć stronę dotychczasowych postępów (historii) rudzika.
4.  [ ] Stworzyć widok ekranu mapy Europy z:
    - [ ] zaznaczonymi zimowiskami,
    - [ ] trasami wędrówki,
    - [ ] lęgowiskami,
    - [ ] aktualną pozycja gracza,
    - [ ] (opcjonalnie, później) pozycje innych graczy.
5.  [ ] Stworzyć widok planszy ze swoim rudzikiem z:
    - [ ] podglądem kondycji,
    - [ ] podglądem warunków żerowania,
    - [ ] pogodą
    - [ ] podjęciem decyzji co do jego poczynań na następne 24 godziny.
6.  [ ] Stworzyć okno decyzji rudzika:

- [ ] żeruj intensywnie,
- [ ] żeruj na utrzymanie kondycji,
- [ ] leć,
- [ ] zmień żerowisko.

7.  [ ] Stworzyć ekran tworzenia rudzika:

    - [ ] nadawanie imienia
    - [ ] wybór kierunku

8.  [ ] Stworzyć stronę wykładu o rudzikach.
9.  [ ] Stworzyć warunki wygranej - dotarcie do zimowiska/lęgu.
10. [ ] Stworzyć warunki przegranej:

    - [ ] Upolowanie przez krogulca
    - [ ] Utrata tkanki tłuszczowej
    - [ ] Brak dotarcia do zimowiska/lęgowiska

11. [ ] Stworzyć warunki remisu - brak znalezienia terytorium na zimowisku/lęgu.

## Mechanika

1.  [ ] Zaimplementować mechanizm otłuszczenia.
2.  [ ] Zaimplementować mechanizm opadów.
3.  [ ] Zaimplementować mechanizm jakości żerowiska.
4.  [ ] Zaimplementować mechanizm przekraczania limitu wysokich otłuszczeń.
5.  [ ] Zaimplementować mechanizm barier.
6.  [ ] Zaimplementować mechanizm podejmowania decyzji.

## Dalszy rozwój

1.  [ ] Rozbudowa o okresy zimowania i lęgowy - już po dotarciu.
2.  [ ] Dodać prognozę pogody na 3 dni naprzód.
3.  [ ] Rozbudowa o panel pogodowy uwzględniający faktyczne dane.
4.  [ ] Dodatkowe problemy wędrówki - polowania, światło miast
5.  [ ] Dodać niestandardowe cechy rudzika - kształt skrzydła, dzioba, etc.

## Szczegółowe parametry

Zaimplementować plik konfiguracyjny (yml lub json) zawierający:

1.  [ ] statystyki otłuszczenia
2.  [ ] statystyki opadów
3.  [ ] statystyki temperatury
4.  [ ] statystyki wiatru
5.  [ ] statystyki jakości żerowiska
6.  [ ] statystyki szans napotkania żerowiska
7.  [ ] szanse ataku krogulca
