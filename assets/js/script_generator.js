function generuj() {
    var system = document.getElementById("system").value;
    var hostname = document.getElementById("hostname").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var autoUpdate = document.getElementById("updates").value;

    var roles = [];
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    for (var i = 0; i < checkboxes.length; i++) {
        roles.push(checkboxes[i].value);
    }

    if (!hostname) { alert("Uzupełnij nazwę komputera."); return; }

    var skryptKonfiguracyjny = "";

    if (system === "linux") {
        var linuxConfig = "hostnamectl set-hostname " + hostname + "\n";
        if (username) linuxConfig += "useradd -m " + username + " && echo \"" + username + ":" + password + "\" | chpasswd\n";

        for (var j = 0; j < roles.length; j++) {
            switch(roles[j]) {
                case "WWW": linuxConfig += "apt install apache2 -y\n"; break;
                case "DNS": linuxConfig += "apt install bind9 -y\n"; break;
                case "FTP": linuxConfig += "apt install vsftpd -y\n"; break;
                case "SSH": linuxConfig += "apt install openssh-server -y\n"; break;
                case "DB": linuxConfig += "apt install mariadb-server -y\n"; break;
                case "XAMPP": linuxConfig += "apt install xampp -y\n"; break;
                case "VSCode": linuxConfig += "apt install code -y\n"; break;
                case "VisualStudio": linuxConfig += "# Visual Studio IDE nie jest dostępne na Linux\n"; break;
                case "Python": linuxConfig += "apt install python3 -y\n"; break;
                case "Notepad++": linuxConfig += "apt install notepad-plus-plus -y\n"; break;
                case "Adobe": linuxConfig += "apt install adobe-reader -y\n"; break;
                case "LibreOffice": linuxConfig += "apt install libreoffice -y\n"; break;
                case "GIMP": linuxConfig += "apt install gimp -y\n"; break;
                case "Firefox": linuxConfig += "apt install firefox -y\n"; break;
                case "Chrome": linuxConfig += "wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && dpkg -i google-chrome-stable_current_amd64.deb\n"; break;
                case "Thunderbird": linuxConfig += "apt install thunderbird -y\n"; break;
            }
        }

        if (autoUpdate === "tak") linuxConfig += "apt install unattended-upgrades -y\n";
        skryptKonfiguracyjny = linuxConfig;
    }

    if (system === "windows") {
        var windowsConfig = "Rename-Computer -NewName \"" + hostname + "\" -Force\n";
        if (username) windowsConfig += "net user " + username + " " + password + " /add\n";

        for (var k = 0; k < roles.length; k++) {
            switch(roles[k]) {
                case "WWW": windowsConfig += "Install-WindowsFeature Web-Server\n"; break;
                case "DNS": windowsConfig += "Install-WindowsFeature DNS\n"; break;
                case "FTP": windowsConfig += "Install-WindowsFeature Web-Ftp-Server\n"; break;
                case "SSH": windowsConfig += "Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0\n"; break;
                case "DB": windowsConfig += "REM Instalacja SQL Server ręcznie\n"; break;
                case "XAMPP": windowsConfig += "Start-Process 'https://www.apachefriends.org/download.html' -ArgumentList '/S' -Wait\n"; break;
                case "VSCode": windowsConfig += "Start-Process 'https://code.visualstudio.com/Download' -ArgumentList '/S' -Wait\n"; break;
                case "VisualStudio": windowsConfig += "Start-Process 'https://visualstudio.microsoft.com/downloads/' -ArgumentList '/S' -Wait\n"; break;
                case "Python": windowsConfig += "Start-Process 'https://www.python.org/ftp/python/3.12.0/python-3.12.0-amd64.exe' -ArgumentList '/quiet InstallAllUsers=1 PrependPath=1' -Wait\n"; break;
                case "Notepad++": windowsConfig += "Start-Process 'https://notepad-plus-plus.org/downloads/' -ArgumentList '/S' -Wait\n"; break;
                case "Adobe": windowsConfig += "Start-Process 'https://get.adobe.com/reader/' -ArgumentList '/S' -Wait\n"; break;
                case "LibreOffice": windowsConfig += "Start-Process 'https://www.libreoffice.org/download/download/' -ArgumentList '/S' -Wait\n"; break;
                case "GIMP": windowsConfig += "Start-Process 'https://www.gimp.org/downloads/' -ArgumentList '/S' -Wait\n"; break;
                case "Firefox": windowsConfig += "Start-Process 'https://www.mozilla.org/firefox/download/' -ArgumentList '/S' -Wait\n"; break;
                case "Chrome": windowsConfig += "Start-Process 'https://dl.google.com/chrome/install/latest/chrome_installer.exe' -ArgumentList '/silent /install' -Wait\n"; break;
                case "Thunderbird": windowsConfig += "Start-Process 'https://www.mozilla.org/thunderbird/download/' -ArgumentList '/S' -Wait\n"; break;
            }
        }

        if (autoUpdate === "tak") windowsConfig += "sconfig\n";
        skryptKonfiguracyjny = windowsConfig;
    }

    document.getElementById("wynik").innerText = skryptKonfiguracyjny;
}



function wyczysc() {
    // Reset formularza
    document.getElementById("configForm").reset();

    // Wyczyść wynik
    document.getElementById("wynik").innerText = "";
}
