HELFENDE ASSISTENZHUNDEPFOTEN IM GRUND – STATISCHE WEBSITE
Export: 30.09.2026 | Originalinhalte erfasst am 29.09.2026

STARTEN UND HOCHLADEN
index.html ist die Startseite. Die Seite besteht ausschließlich aus HTML, CSS,
JavaScript und lokalen Bildern. Es werden weder npm noch ein Framework, ein
Build-Schritt, eine Datenbank oder eine serverseitige Programmiersprache benötigt.

Den vollständigen Inhalt dieses Ordners per SFTP in den für Ihre Domain vorgesehenen
Webspace-Ordner hochladen. index.html, css, js, images und alle Seitenordner müssen
ihre relative Anordnung behalten. Der gesamte Ordner kann auch in einem Unterordner
liegen, beispielsweise /neue-website/. Alle internen Pfade sind relativ.

Vorhandene Dateien auf dem Webspace vorher sichern und den neuen Stand zunächst in
einem separaten Ordner ausprobieren. Dieser Export hat weder die Domain noch die
bestehende STRATO-Website oder E-Mail-Einstellungen verändert.

Zum lokalen Anschauen kann index.html direkt im Browser geöffnet werden. Links
zwischen den Seiten enthalten ausdrücklich index.html und benötigen keine
besonderen Serverregeln. Für den produktiven Betrieb HTTPS beim Hoster aktivieren.

ORDNERSTRUKTUR
index.html                      Startseite
css/style.css                   Alle Gestaltungsregeln, einschließlich Mobilansicht
js/script.js                    Menü, Galerien, E-Mail-Vorbereitung, Öffnungszeiten
images/                         Sämtliche Fotos, Logos und das Favicon
assistenzhunde/                  Erklärungen, Ausbildungsformen, Leistungen und Preise
helferhunde/                     Helferhunde/ESA, Ausbildung, Leistungen und Preise
ueber-mich/                     Persönlicher Text und Qualifikationen
kontakt/                       Kontaktdaten, E-Mail-Vorbereitung und Öffnungszeiten
einblicke/                     Galerien: Training, Calla und Veranstaltungen
aktuelles/                     Unveränderte Ankündigungen der Originalseite
mantrailing/                   Mantrailing-Angebot
ernaehrungsberatung/            Reico-Vertriebspartner
fragen/                        Originalfragen und Originalantworten der Startseite
weitere-angebote/               Links zu Mantrailing und Ernährungsberatung
impressum/, datenschutz/        Übernommene Originalrechtstexte
seitenuebersicht/               Alle Inhaltsseiten
dokumentation/                 Abgleich, Bildliste, Prüfbericht und offene Punkte
README.txt                     Diese Anleitung

Weitere Ordner wie angebote-preise, galerie-calla und ueber-uns erhalten bisherige
Verzeichnisadressen durch einfache HTML-Weiterleitungen. Bitte mit hochladen.
Es gibt 27 Inhaltsseiten und 18 solche Weiterleitungsseiten.

BILDORDNER
images/logo/                   Vorhandenes Logo sowie favicon.svg
images/hero/                   Vorhandenes Landschaftsmotiv für den Einstiegsbereich
images/ueber-mich/              Ingeborg und ihre Hunde
images/ausbildung/             Grundausbildung und Spezialisierung
images/angebote/assistenzhunde/ Bilder der Assistenzhunde-Leistungen
images/angebote/helferhunde/    Bilder der Helferhunde-Leistungen
images/galerie/training/        Allgemeines Hundetraining
images/galerie/calla/           Callas Grundausbildung
images/galerie/theorie-und-praxisseminar/
images/galerie/tierpark-und-zoo/
images/galerie/training-am-flughafen/
images/galerie/autofreier-sonntag-ebsdorfergrund/
images/aktuelles/               Bilder zu Ankündigungen und besonderen Trainings
images/mantrailing/             Bilder zum Mantrailing
images/ernaehrungsberatung/     Bilder aus dem Reico-/Ernährungsbereich
images/sonstiges/               Weitere Originalmotive

Es wurden 298 unterschiedliche Bilddateien gespeichert. Hinzu kommt das kleine
technische SVG-Favicon. 268 Originalbilddateien sind in Seiten eingebunden, 30
weitere bleiben als Archiv verfügbar. Identische Dateiinhalte wurden dedupliziert.
Bilder, die mehrfach verwendet werden, werden mehrfach verlinkt und nicht kopiert.

Die vollständige Zuordnung steht in dokumentation/bildverzeichnis.csv. Dort finden
Sie Dateipfad, Originaladresse, ursprünglichen Dateinamen, Maße und Verwendung.
CSV-Dateien verwenden Semikolon und UTF-8 und lassen sich etwa in Excel öffnen.
Dateinamen beschreiben den Themenbereich. Gleichartige Galerieaufnahmen sind
nummeriert. Die Reihenfolge entspricht der Originalgalerie, soweit abrufbar.

VORHANDENES BILD AUSTAUSCHEN
1. Die Datei in dokumentation/bildverzeichnis.csv suchen.
2. Die bisherige Datei sichern.
3. Das neue Foto unter genau demselben Pfad und Dateinamen ablegen.
   Auch das Dateiformat muss zur Endung passen: Eine PNG-Datei nicht bloß in .jpg
   umbenennen. Beim Ersetzen wird das Bild an allen verlinkten Stellen geändert.
4. In den betroffenen HTML-Dateien alt, width und height an das neue Foto anpassen.
   Bei anderem Dateinamen müssen src, href und data-full entsprechend geändert werden.
5. Datei und gegebenenfalls angepasste HTML-Seiten per SFTP hochladen. Im Browser
   bei Bedarf mit Strg+F5 neu laden. Bilder werden teilweise passend zugeschnitten.

NEUES BILD ERGÄNZEN
1. Einen passenden Themenordner wählen und das Foto dort speichern, z.B.
   images/galerie/training/hundetraining-112.jpg. Kleinbuchstaben, Bindestriche und
   möglichst keine Umlaute oder Leerzeichen verwenden.
2. Die betreffende index.html mit einem Texteditor öffnen.
3. Für ein normales Foto ein vorhandenes img-Element kopieren und src, alt, width
   und height ändern. Pfade gelten relativ zum Ort der jeweiligen HTML-Datei.
4. Für eine Galerie einen kompletten Link mit class="gallery-item" innerhalb von
   class="gallery-grid" kopieren. href, data-full, data-caption, aria-label sowie
   img/src, img/alt, width und height anpassen. Das neue Bild bleibt innerhalb des
   vorhandenen data-gallery-Abschnitts. JavaScript erkennt es automatisch.
5. Die feste Bildzahl im Absatz class="gallery-description" aktualisieren.
6. Neue Bilddatei und geänderte HTML-Seite gemeinsam hochladen.

BEISPIEL FÜR RELATIVE PFADE
Von index.html aus: images/ueber-mich/ingeborg-mit-hunden.jpg
Von kontakt/index.html aus: ../images/ueber-mich/ingeborg-mit-hunden.jpg
Von einblicke/training/index.html aus: ../../images/galerie/training/hundetraining-001.jpg
Keine Pfade mit einem führenden / verwenden, sonst funktionieren Unterordner nicht.

TEXT ÄNDERN
Die jeweilige HTML-Datei in einem Texteditor öffnen und nur die sichtbaren Inhalte
zwischen den HTML-Tags ändern. Als UTF-8 speichern. Die Seite hat keinen eingebauten
Redaktionseditor. Einträge, die mehrfach vorkommen (z.B. Footer-Kontaktdaten), müssen
an allen betreffenden Stellen geändert werden.

ÖFFNUNGSZEITEN
Die angegebenen Zeiten stehen in kontakt/oeffnungszeiten/index.html. Für die Anzeige
"jetzt geöffnet/geschlossen" sind dieselben Zeiten in js/script.js unter schedule
hinterlegt; bei Änderungen beide Stellen anpassen. Die Anzeige verwendet Europe/Berlin.
Für Sonntag ist kein Status definiert, weil die Originalseite keine Sonntagszeit nennt.
Feiertagsabweichungen sind in der Quelle nicht spezifiziert.

KONTAKTFORMULAR
Eine rein statische Website kann ohne externen Versanddienst oder Serverfunktion
keine E-Mail eigenständig zustellen. Das Formular öffnet deshalb einen ausgefüllten
E-Mail-Entwurf im Mailprogramm des Besuchers. Erst dort wird versendet. Alternativ
lässt sich die Nachricht kopieren. Ohne Mailprogramm kann die vorhandene E-Mail-Adresse
in einem Webmail-Dienst verwendet werden. Es wird kein erfolgreicher Versand vorgetäuscht.
Die ursprünglichen Kontaktdaten und der Einwilligungstext sind erhalten.

INHALTE UND PRÜFUNG
Die Originaltexte wurden nicht fachlich aktualisiert oder redaktionell geglättet.
Neue Texte sind auf Navigation, Struktur und technische Bedienung beschränkt.
Die früher neu formulierten persönlichen Werbetexte sind entfernt.

dokumentation/inhaltsabgleich.csv: 23 Originalseiten, 546 geprüfte Textblöcke;
kein fehlender Textblock im Abgleich (Leerraum und Zeilenumbrüche normalisiert).
dokumentation/galerieabgleich.csv: Alle neun Originalgalerien mit Soll/Ist-Zahlen.
dokumentation/linkabgleich.csv: Originalverweise und technische Bereinigungen.
dokumentation/PRUEFBERICHT.txt: Prüfmethoden und Grenzen.
dokumentation/OFFENE-PUNKTE.txt: Nicht abrufbare Bilder und ungeklärte Originalangaben.

WICHTIGE GRENZEN VOR DER VERÖFFENTLICHUNG
- Fünf Originalbildadressen waren einschließlich bekannter Varianten nicht abrufbar.
  Die genaue Liste steht in OFFENE-PUNKTE.txt. Es wurden keine Ersatzbilder erfunden.
- Eine tatsächliche Sichtprüfung im Browser auf Desktop, Tablet und Smartphone war
  in der verfügbaren Umgebung nicht möglich. Responsive CSS-Regeln sind vorhanden;
  die Bildschirmansichten müssen im Browser noch geprüft werden.
- Die Datenschutzerklärung vom 1.10.2020 und das Impressum wurden unverändert übernommen.
  Ihre Aussagen über Dienste und Datenverarbeitung müssen zum tatsächlichen Betrieb
  passen. Dieser Export bestätigt keine rechtliche oder fachliche Aktualität.
- Bestehende Termine und Preise sind der Originalstand; es wurde kein neues Jahr ergänzt.
- Alte normale Verzeichnisadressen werden weitergeleitet. Frühere Baukastenadressen
  mit index.php/... benötigen gegebenenfalls zusätzliche Weiterleitungen beim Hoster.
- Die fertige Website hat keine Suchmaschinen-Sperre. Der private ChatGPT-Prototyp
  bleibt ein separater früherer Stand; dieser ZIP-Export ist die überarbeitete Fassung.
