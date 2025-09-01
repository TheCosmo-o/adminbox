# AdminBox

AdminBox to kompleksowa platforma internetowa stworzona z myślą o administratorach systemów, specjalistach IT oraz entuzjastach technologii. Strona pełni rolę interaktywnego katalogu najważniejszych narzędzi wykorzystywanych w codziennej pracy IT – od diagnostyki sprzętu, przez narzędzia sieciowe, aż po rozwiązania do backupu i bezpieczeństwa.

---

## Funkcjonalności

- Katalog narzędzi IT
  Kategorie obejmują:
  - Diagnozowanie komputera  
  - Diagnozowanie sieci komputerowej  
  - Zarządzanie kopią zapasową  
  - Zarządzanie bezpieczeństwem urządzenia  
  - Informacje BIOS & UEFI  
  - Programowanie  
  - Programy codziennego użytku  

- Sekcja ISO systemów operacyjnych 
  - Windows 10 / 11  
  - Ubuntu, Debian, Fedora  
  - Clonezilla Live  
  - Hiren's BootCD PE  

- Generator pliku konfiguracyjnego  
  - Dla systemów Linux i Windows  
  - Wybór nazwy komputera, użytkownika, hasła  
  - Konfiguracja ról serwera (WWW, DNS, FTP, SSH, DB)  
  - Instalacja dodatkowych aplikacji (XAMPP, VSCode, Python, LibreOffice, itp.)  
  - Obsługa automatycznych aktualizacji  

- Responsywny design  
  - Menu hamburgerowe dla urządzeń mobilnych  
  - Dynamiczne ładowanie treści w zależności od wybranej kategorii  

- Preloader i aktualizacja roku w stopce 
  - Animacja ładowania strony  
  - Automatyczna aktualizacja roku w footerze  

---

## Technologie

- HTML5 / CSS3 / JavaScript
- Dynamiczne skrypty JS:
  - `script_generator.js` – generator konfiguracji Linux/Windows
  - `script_category.js` – dynamiczna zmiana kategorii
  - `script_preloader.js` – preloader strony
  - `script_rok.js` – aktualizacja roku w stopce

---

## Instalacja i użycie

1. Sklonuj repozytorium:

```bash
git clone https://github.com/TheCosmo-o/adminbox.git

## Struktura projektu

AdminBox/
│
├─ assets/
│  ├─ css/             # Style CSS
│  ├─ js/              # Skrypty JS
│  ├─ img/             # Obrazy aplikacji
│  └─ favicon/         # Favicon strony
│
├─ index.html          # Strona główna
└─ README.md           # Ten plik

