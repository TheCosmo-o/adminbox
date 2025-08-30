document.addEventListener('DOMContentLoaded', () => {
    const dropdownLinks = document.querySelectorAll('.dropdown a');

    const header = document.getElementById('AdminToolbox');
    const mainParagraph = document.getElementById('wprowadzenie');
    const apkiContainer = document.querySelector('.apki');

    // Definiujemy kategorie z opisem i aplikacjami
    const categories = {
        'Diagnozowania komputera': {
            intro: '<b>Diagnostyka komputera</b> jest kluczowym procesem w utrzymaniu sprzętu w dobrym stanie. Polega na analizie komponentów systemu komputerowego w celu wykrycia problemów.',
            apps: `
<section class="ramka_apka">
    <a href="https://www.cpuid.com/softwares/hwmonitor.html" target="_blank">
        <img src="./assets/img/apki-diagnoza-komputera/hwmonitor.png">
        <p id="nazwa_apki">HwMonitor</p>
        <p id="opis_apki">Monitoruje temperaturę i napięcia komponentów.</p>
    </a>
</section>
<section class="ramka_apka">
    <a href="https://crystalmark.info/en/software/crystaldiskinfo/" target="_blank">
        <img src="./assets/img/apki-diagnoza-komputera/crystal-disk.png">
        <p id="nazwa_apki">CrystalDiskInfo</p>
        <p id="opis_apki">Pokazuje stan dysków twardych i SSD oraz temperatury.</p>
    </a>
</section>
<section class="ramka_apka">
    <a href="https://www.mersenne.org/download/" target="_blank">
        <img src="./assets/img/apki-diagnoza-komputera/prime95.png">
        <p id="nazwa_apki">Prime95</p>
        <p id="opis_apki">Testuje stabilność procesora pod pełnym obciążeniem.</p>
    </a>
</section>
<section class="ramka_apka">
    <a href="https://www.ccleaner.com/speccy" target="_blank">
        <img src="./assets/img/apki-diagnoza-komputera/speccy.png">
        <p id="nazwa_apki">Speccy</p>
        <p id="opis_apki">Szybki wgląd w szczegóły wszystkich podzespołów komputera.</p>
    </a>
</section>
<section class="ramka_apka">
    <a href="https://www.aida64.com/downloads" target="_blank">
        <img src="./assets/img/apki-diagnoza-komputera/aida64.png">
        <p id="nazwa_apki">AIDA64</p>
        <p id="opis_apki">Rozbudowane narzędzie do testów i monitorowania sprzętu.</p>
    </a>
</section>
<section class="ramka_apka">
    <a href="https://geeks3d.com/furmark/" target="_blank">
        <img src="./assets/img/apki-diagnoza-komputera/furmark.png">
        <p id="nazwa_apki">FurMark</p>
        <p id="opis_apki">Testuje wydajność i stabilność karty graficznej (GPU).</p>
    </a>
</section>

            `
        },
        'Diagnozowania sieci komputerowej': {
            intro: '<b>Diagnostyka sieci</b> pozwala sprawdzić poprawność działania sieci, opóźnienia i awarie urządzeń.',
            apps: `
<div class="apki">
    <section class="ramka_apka">
        <a href="https://www.pingplotter.com/" target="_blank">
            <img src="./assets/img/apki-diagnoza-sieci/pingplotter.png" alt="PingPlotter">
            <p id="nazwa_apki">PingPlotter</p>
            <p id="opis_apki">Analizuje opóźnienia i straty pakietów w sieci.</p>
        </a>
    </section>
    <section class="ramka_apka">
        <a href="https://www.wireshark.org/" target="_blank">
            <img src="./assets/img/apki-diagnoza-sieci/wireshark.png" alt="Wireshark">
            <p id="nazwa_apki">Wireshark</p>
            <p id="opis_apki">Podgląd ruchu sieciowego i diagnostyka błędów.</p>
        </a>
    </section>
    <section class="ramka_apka">
        <a href="https://nmap.org/" target="_blank">
            <img src="./assets/img/apki-diagnoza-sieci/nmap.png" alt="Nmap">
            <p id="nazwa_apki">Nmap</p>
            <p id="opis_apki">Skanuje porty i wykrywa urządzenia w sieci.</p>
        </a>
    </section>
    <section class="ramka_apka">
        <a href="https://www.speedtest.net/" target="_blank">
            <img src="./assets/img/apki-diagnoza-sieci/speedtest.png" alt="SpeedTest">
            <p id="nazwa_apki">SpeedTest</p>
            <p id="opis_apki">Sprawdza prędkość internetu i opóźnienia.</p>
        </a>
    </section>
    <section class="ramka_apka">
        <a href="https://www.netcat.com/" target="_blank">
            <img src="./assets/img/apki-diagnoza-sieci/netcat.png" alt="Netcat">
            <p id="nazwa_apki">Netcat</p>
            <p id="opis_apki">Testuje połączenia TCP/IP i przesył danych w sieci.</p>
        </a>
    </section>
</div>
            `
        },
        'Zarządzania kopią zapasową': {
            intro: '<b>Kopie zapasowe</b> zabezpieczają dane przed utratą.',
            apps: `
            <div class="apki">
    <section class="ramka_apka">
        <a href="https://clonezilla.org/" target="_blank">
            <img src="./assets/img/apki-backup/clonezilla.png" alt="Clonezilla">
            <p id="nazwa_apki">Clonezilla</p>
            <p id="opis_apki">Darmowe narzędzie do klonowania i tworzenia obrazów dysków.</p>
        </a>
    </section>
    <section class="ramka_apka">
        <a href="https://www.veeam.com/" target="_blank">
            <img src="./assets/img/apki-backup/veeam.png" alt="Veeam Backup">
            <p id="nazwa_apki">Veeam Backup</p>
            <p id="opis_apki">Profesjonalny backup serwerów i danych w chmurze.</p>
        </a>
    </section>
    <section class="ramka_apka">
        <a href="https://www.acronis.com/en-us/" target="_blank">
            <img src="./assets/img/apki-backup/acronis.png" alt="Acronis True Image">
            <p id="nazwa_apki">Acronis Cyber Protect</p>
            <p id="opis_apki">Tworzenie backupów lokalnych i w chmurze z ochroną antywirusową.</p>
        </a>
    </section>
    <section class="ramka_apka">
        <a href="https://www.macrium.com/reflectfree" target="_blank">
            <img src="./assets/img/apki-backup/macrium.png" alt="Macrium Reflect">
            <p id="nazwa_apki">Macrium Reflect</p>
            <p id="opis_apki">Backup i klonowanie dysków z szybkim przywracaniem systemu.</p>
        </a>
    </section>
    <section class="ramka_apka">
        <a href="https://duplicati.com/" target="_blank">
            <img src="./assets/img/apki-backup/duplicati.png" alt="Duplicati">
            <p id="nazwa_apki">Duplicati</p>
            <p id="opis_apki">Backup danych do chmury z szyfrowaniem i harmonogramem.</p>
        </a>
    </section>
</div>
            `
        },
        'Zarządzania bezpieczeństwem urządzenia': {
            intro: '<b>Bezpieczeństwo urządzenia</b> obejmuje ochronę systemu przed wirusami, malware i nieautoryzowanym dostępem.',
            apps: `
<div class="apki">
    <section class="ramka_apka">
        <a href="https://www.malwarebytes.com/" target="_blank">
            <img src="./assets/img/apki-bezpieczenstwo/malwarebytes.png" alt="Malwarebytes">
            <p id="nazwa_apki">Malwarebytes</p>
            <p id="opis_apki">Skanuje system w poszukiwaniu malware, ransomware i rootkitów.</p>
        </a>
    </section>
    <section class="ramka_apka">
        <a href="https://www.veracrypt.fr/" target="_blank">
            <img src="./assets/img/apki-bezpieczenstwo/veracrypt.png" alt="VeraCrypt">
            <p id="nazwa_apki">VeraCrypt</p>
            <p id="opis_apki">Szyfruje dane i tworzy bezpieczne wolumeny na dyskach i plikach.</p>
        </a>
    </section>
    <section class="ramka_apka">
        <a href="https://www.wireshark.org/" target="_blank">
            <img src="./assets/img/apki-bezpieczenstwo/wireshark.png" alt="Wireshark">
            <p id="nazwa_apki">Wireshark</p>
            <p id="opis_apki">Analizuje pakiety sieciowe i wykrywa nieautoryzowaną aktywność.</p>
        </a>
    </section>
    <section class="ramka_apka">
        <a href="https://www.bitdefender.com/" target="_blank">
            <img src="./assets/img/apki-bezpieczenstwo/bitdefender.png" alt="Bitdefender">
            <p id="nazwa_apki">Bitdefender</p>
            <p id="opis_apki">Kompletny pakiet ochrony antywirusowej, firewall i antyphishing.</p>
        </a>
    </section>
    <section class="ramka_apka">
        <a href="https://www.kaspersky.com/password-manager" target="_blank">
            <img src="./assets/img/apki-bezpieczenstwo/kaspersky.png" alt="Kaspersky Password Manager">
            <p id="nazwa_apki">Kaspersky Password Manager</p>
            <p id="opis_apki">Bezpieczne przechowywanie haseł i automatyczne logowanie.</p>
        </a>
    </section>
</div>

            `
        },
        'Informacje BIOS & UEFI': {
            intro: '<b>Informacje BIOS/UEFI</b> pozwalają sprawdzić ustawienia firmware, wersje systemu i opcje bezpieczeństwa.',
            apps: `
            <div class="apki">
    <section class="ramka_apka">
        <a href="https://www.cpuid.com/softwares/cpu-z.html" target="_blank">
            <img src="./assets/img/apki-BIOS-UEFI/cpuz.png" alt="CPU-Z">
            <p id="nazwa_apki">CPU-Z</p>
            <p id="opis_apki">Pokazuje informacje o CPU, płycie głównej i wersji BIOS/UEFI.</p>
        </a>
    </section>
    <section class="ramka_apka">
        <a href="https://www.hwinfo.com/" target="_blank">
            <img src="./assets/img/apki-BIOS-UEFI/hwinfo.png" alt="HWiNFO">
            <p id="nazwa_apki">HWiNFO</p>
            <p id="opis_apki">Wyświetla szczegółowe dane systemu i informacje o BIOS/UEFI.</p>
        </a>
    </section>
    <section class="ramka_apka">
        <a href="https://www.intel.com/content/www/us/en/download/19386/26704/intel-processor-identification-utility-windows-version.html" target="_blank">
            <img src="./assets/img/apki-BIOS-UEFI/intelid.png" alt="Intel Processor ID Utility">
            <p id="nazwa_apki">Intel Processor ID Utility</p>
            <p id="opis_apki">Sprawdza funkcje CPU i kompatybilność z UEFI.</p>
        </a>
    </section>
    <section class="ramka_apka">
        <a href="https://rufus.ie/pl/" target="_blank">
            <img src="./assets/img/apki-BIOS-UEFI/rufus.png" alt="Rufus">
            <p id="nazwa_apki">Rufus</p>
            <p id="opis_apki">Tworzy bootowalne pendrive'y w trybie BIOS/UEFI.</p>
        </a>
    </section>
    <section class="ramka_apka">
        <a href="https://www.tenforums.com/tutorials/114927-how-check-if-windows-boot-uefi-legacy-mode.html" target="_blank">
            <img src="./assets/img/apki-BIOS-UEFI/uefi.png" alt="UEFI Checker">
            <p id="nazwa_apki">UEFI Mode Checker</p>
            <p id="opis_apki">Sprawdza, czy Windows działa w trybie UEFI czy Legacy BIOS.</p>
        </a>
    </section>
</div>

            `
},
        'Programowania': {
    intro: '<b>Programowanie</b> obejmuje narzędzia do tworzenia, testowania i debugowania kodu w różnych językach.',
    apps: `
<div class="apki">
    <section class="ramka_apka">
        <a href="https://code.visualstudio.com/" target="_blank">
            <img src="./assets/img/apki-programowanie/vscode.png" alt="Visual Studio Code">
            <p id="nazwa_apki">Visual Studio Code</p>
            <p id="opis_apki">Lekki edytor kodu z ogromną ilością rozszerzeń dla różnych języków.</p>
        </a>
    </section>
    <section class="ramka_apka">
        <a href="https://www.jetbrains.com/idea/" target="_blank">
            <img src="./assets/img/apki-programowanie/intellij.png" alt="IntelliJ IDEA">
            <p id="nazwa_apki">IntelliJ IDEA</p>
            <p id="opis_apki">Potężne IDE do Java, Kotlin i wielu innych języków.</p>
        </a>
    </section>
    <section class="ramka_apka">
        <a href="https://www.sublimetext.com/" target="_blank">
            <img src="./assets/img/apki-programowanie/sublime.png" alt="Sublime Text">
            <p id="nazwa_apki">Sublime Text</p>
            <p id="opis_apki">Szybki i lekki edytor tekstu dla programistów.</p>
        </a>
    </section>
    <section class="ramka_apka">
        <a href="https://www.python.org/downloads/" target="_blank">
            <img src="./assets/img/apki-programowanie/python.png" alt="Python">
            <p id="nazwa_apki">Python</p>
            <p id="opis_apki">Język programowania ogólnego przeznaczenia, idealny do nauki i projektów.</p>
        </a>
    </section>
    <section class="ramka_apka">
        <a href="https://git-scm.com/" target="_blank">
            <img src="./assets/img/apki-programowanie/git.png" alt="Git">
            <p id="nazwa_apki">Git</p>
            <p id="opis_apki">System kontroli wersji do zarządzania kodem i współpracy zespołowej.</p>
        </a>
    </section>
</div>
`
},
'Codziennego użytku': {
    intro: '<b>Programy codziennego użytku</b> to aplikacje wspomagające pracę i codzienne zadania, np. edycję dokumentów czy przeglądanie internetu.',
    apps: `
<div class="apki">
    <section class="ramka_apka">
        <a href="https://www.google.com/chrome/" target="_blank">
            <img src="./assets/img/apki-codzienne/chrome.png" alt="Google Chrome">
            <p id="nazwa_apki">Google Chrome</p>
            <p id="opis_apki">Popularna przeglądarka internetowa z szerokim wsparciem dodatków.</p>
        </a>
    </section>
    <section class="ramka_apka">
        <a href="https://www.mozilla.org/firefox/" target="_blank">
            <img src="./assets/img/apki-codzienne/firefox.png" alt="Mozilla Firefox">
            <p id="nazwa_apki">Mozilla Firefox</p>
            <p id="opis_apki">Przeglądarka internetowa dbająca o prywatność użytkownika.</p>
        </a>
    </section>
    <section class="ramka_apka">
        <a href="https://www.microsoft.com/en-us/microsoft-365" target="_blank">
            <img src="./assets/img/apki-codzienne/office.png" alt="Microsoft Office">
            <p id="nazwa_apki">Microsoft Office</p>
            <p id="opis_apki">Pakiet biurowy do edycji dokumentów, arkuszy kalkulacyjnych i prezentacji.</p>
        </a>
    </section>
    <section class="ramka_apka">
        <a href="https://www.libreoffice.org/" target="_blank">
            <img src="./assets/img/apki-codzienne/libreoffice.png" alt="LibreOffice">
            <p id="nazwa_apki">LibreOffice</p>
            <p id="opis_apki">Darmowy pakiet biurowy kompatybilny z formatami MS Office.</p>
        </a>
    </section>
    <section class="ramka_apka">
        <a href="https://www.spotify.com/" target="_blank">
            <img src="./assets/img/apki-codzienne/spotify.png" alt="Spotify">
            <p id="nazwa_apki">Spotify</p>
            <p id="opis_apki">Aplikacja do słuchania muzyki i tworzenia playlist online.</p>
        </a>
    </section>
</div>
`
}

    };

    function updateCategory(categoryName) {
        const category = categories[categoryName];
        if(!category) return;

        header.innerHTML = `<b>${categoryName}</b>`;
        mainParagraph.innerHTML = category.intro;
        apkiContainer.innerHTML = category.apps;
    }

    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
    const categoryName = this.textContent.trim();
    updateCategory(categoryName);
    // strona automatycznie przewinie się do #category

        });
    });
});
