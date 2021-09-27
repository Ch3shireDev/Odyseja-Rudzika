# Wyprawa rudzika Remusa

Tekstowa wersja gry mobilnej.

## TODOs

1. [x] Należy zaimplementować mechanikę ujemnego otłuszczenia. W przypadku wejścia na ujemny poziom otłuszczenia ilość zyskanego tłuszczu danego dnia powinna być dzielona na pół.
2. [x] Zaktualizować deszcz w opisie.
3. [x] Należy zaimplementować mechanikę wysokiego otłuszczenia. W przypadku wysokiego otłuszczenia (powyżej ustalonej wartości) utrzymywanego przez więcej niż określoną liczbę dni, powinna stopniowo zwiększać się szansa bycia upolowanym przez krogulca.
4. [x] Należy zaimplementować odmienny mechanizm żerowania na utrzymanie kondycji - w tym wypadku szansa ataku przez krogulca wynosi inny procent (ustalmy że 25%).
5. [x] Należy zaimplementować mechanizm lotu - gracz powinien podejmować wtedy decyzję, ile tłuszczu zamierza zużyć na lot. Dalej, należy zaimplementować przeszkody czyhające na rudzika na trasie lotu.
6. [x] Należy zaimplementować przeszkodę: zderzenie ze szklanym wieżowcem. Taki wieżowiec jest jednokrotnym zdarzeniem, jest ustalone prawdopodobieństwo zderzenia (0.02%), 2/3 szansy na rany lub 1/3 szansy na śmierć. Po zderzeniu oszczędzany jest tłuszcz przeznaczony na resztę trasy, zdarzenie występuje tylko raz.
7. [x] Należy zaimplementować przeszkodę: krogulec.
8. [x] Należy zaimplementować przeszkodę: załamanie pogody. Powinno być ono ustalone losowo na odcinku trasy 50 km. Rudzik siada na 5-tym km obszaru załamania pogody, traci 3 jednostki tłuszczu, jednak zachowuje tłuszcz przeznaczony na dalszą podróż. W tym ruchu nie może zmienić żerowiska. Rudzik zyskuje doświadczenie z przeżytych załamań pogody, przy każdym kolejnym traci o jedną jednostkę tłuszczu mniej.
9. [x] Należy zaimplementować przeszkodę: mgła. Rudzik traci orientację i zbacza z właściwej trasy. Powrót na trasę kosztuje go dodatkowe 100 km w następnych rundach. Mgła występuje dwa razy na odcinku 50 km na każdej trasie. Rudzik zmniejsza dwukrotnie liczbę kilometrów do nadrobienia po każdej przebytej mgle.
10. [ ] Należy zaimplementować mechanizm przewidywania pogody na najbliższe dni.
11. [ ] Należy zaimplementować mechanizm przekraczania barier w trakcie wędrówki.

## Emotki

- 🦃 `:turkey:`
- 🐓 `:rooster:`
- 🐤 `:baby_chick:`
- 🐦 `:bird:`
- 🕊️ `:dove:`
- 🦆 `:duck:`
- 🦉 `:owl:`
- 🦚 `:peacock:`
- 🐔 `:chicken:`
- 🐣 `:hatching_chick:`
- 🐥 `:hatched_chick:`
- 🐧 `:penguin:`
- 🦅 `:eagle:`
- 🦢 `:swan:`
- 🦩 `:flamingo:`
- 🦜 `:parrot:`
