const Privacy = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-primary">Datenschutzerklärung</h1>
        
        <div className="space-y-12">
          {/* 1. Einleitung und Kontaktdaten */}
          <div>
            <h2 className="text-xl font-semibold mb-6 text-primary">1. Einleitung und Kontaktdaten des Verantwortlichen</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-primary">1.1 Einleitung</h3>
                <p className="text-primary/80">
                  Wir freuen uns, dass Sie unsere Website besuchen und bedanken uns für Ihr Interesse. Im Folgenden informieren wir Sie über den Umgang mit Ihren personenbezogenen Daten bei der Nutzung unserer Website. Personenbezogene Daten sind hierbei alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-primary">1.2 Verantwortlicher</h3>
                <p className="text-primary/80">
                  Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist Mustafa Kartal, Grafestraße 19, 57072 Siegen, Deutschland, Tel.: +491628069562, E-Mail: info@meksecurity.de. Der Verantwortliche entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-primary">1.3 Datenschutzbeauftragter</h3>
                <p className="text-primary/80">
                  Der Verantwortliche hat einen Datenschutzbeauftragten bestellt, der wie folgt zu erreichen ist: Mustafa Kartal, Grafestraße 19, 57072 Siegen, Tel.: +491628069562, E-Mail: info@meksecurity.de.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-primary">1.4 Sicherheitsmaßnahmen</h3>
                <p className="text-primary/80">
                  Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung personenbezogener Daten und anderer vertraulicher Inhalte eine SSL-bzw. TLS-Verschlüsselung. Sie erkennen eine verschlüsselte Verbindung an der Zeichenfolge „https://" und dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Datenerfassung */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-primary">2. Datenerfassung beim Besuch unserer Website</h2>
            <p className="text-primary/80 mb-4">
              Bei der bloß informatorischen Nutzung unserer Website erheben wir nur solche Daten, die Ihr Browser an den Seitenserver übermittelt (sog. „Server-Logfiles"). Dies sind:
            </p>
            <ul className="list-disc list-inside text-primary/80 mb-4 space-y-1">
              <li>Besuchte Website</li>
              <li>Datum und Uhrzeit zum Zeitpunkt des Zugriffes</li>
              <li>Menge der gesendeten Daten in Byte</li>
              <li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li>
              <li>Verwendeter Browser</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Verwendete IP-Adresse (ggf. in anonymisierter Form)</li>
            </ul>
            <p className="text-primary/80">
              Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website. Eine Weitergabe oder anderweitige Verwendung der Daten findet nicht statt, außer bei konkreten Anhaltspunkten auf eine rechtswidrige Nutzung.
            </p>
          </div>

          {/* 3. Cookies */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-primary">3. Cookies</h2>
            <p className="text-primary/80 mb-4">
              Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung bestimmter Funktionen zu ermöglichen, verwenden wir Cookies:
            </p>
            <ul className="list-disc list-inside text-primary/80 mb-4 space-y-1">
              <li>Session-Cookies: Diese werden nach Schließen des Browsers automatisch gelöscht.</li>
              <li>Persistente Cookies: Diese verbleiben länger auf Ihrem Endgerät und ermöglichen das Speichern von Seiteneinstellungen.</li>
            </ul>
            <p className="text-primary/80 mb-4">
              Wenn durch Cookies personenbezogene Daten verarbeitet werden, erfolgt dies gemäß Art. 6 Abs. 1 lit. b DSGVO zur Durchführung des Vertrages, gemäß Art. 6 Abs. 1 lit. a DSGVO bei erteilter Einwilligung oder gemäß Art. 6 Abs. 1 lit. f DSGVO zur Wahrung unserer berechtigten Interessen.
            </p>
            <p className="text-primary/80">
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und einzeln über deren Annahme entscheiden oder die Annahme von Cookies generell ausschließen. Beachten Sie, dass die Funktionalität unserer Website eingeschränkt sein kann, wenn Cookies nicht angenommen werden.
            </p>
          </div>

          {/* 4. Kontaktaufnahme */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-primary">4. Kontaktaufnahme</h2>
            <p className="text-primary/80">
              Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular oder E-Mail) werden personenbezogene Daten erhoben. Diese Daten werden ausschließlich zum Zweck der Beantwortung Ihres Anliegens und der damit verbundenen technischen Administration verwendet. Rechtsgrundlage ist unser berechtigtes Interesse gemäß Art. 6 Abs. 1 lit. f DSGVO. Zielt Ihre Kontaktierung auf den Abschluss eines Vertrages ab, ist zusätzliche Rechtsgrundlage Art. 6 Abs. 1 lit. b DSGVO. Ihre Daten werden nach abschließender Bearbeitung Ihrer Anfrage gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </div>

          {/* 5. Seitenfunktionalitäten */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-primary">5. Seitenfunktionalitäten</h2>
            <p className="text-primary/80">
              Bewerbungen auf Stellenausschreibungen werden per E-Mail entgegengenommen. Bewerber müssen alle personenbezogenen Daten angeben, die für eine fundierte Beurteilung erforderlich sind. Nach Eingang der Bewerbung werden die Daten ausschließlich zum Zwecke der Bewerbungsbearbeitung gespeichert und ausgewertet. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (bzw. § 26 Abs. 1 BDSG). Besondere Kategorien von personenbezogenen Daten werden gemäß Art. 9 Abs. 2 lit. b DSGVO verarbeitet.
            </p>
            <p className="text-primary/80 mt-4">
              Kommt es nicht zu einer Auswahl, werden die Daten nach spätestens 6 Monaten gelöscht. Bei einer erfolgreichen Bewerbung werden die Daten zum Zwecke der Durchführung des Beschäftigungsverhältnisses verarbeitet.
            </p>
          </div>

          {/* 6. Rechte des Betroffenen */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-primary">6. Rechte des Betroffenen</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-primary">6.1 Betroffenenrechte</h3>
                <p className="text-primary/80 mb-2">Das geltende Datenschutzrecht gewährt Ihnen folgende Rechte:</p>
                <ul className="list-disc list-inside text-primary/80 space-y-1">
                  <li>Auskunftsrecht gemäß Art. 15 DSGVO</li>
                  <li>Recht auf Berichtigung gemäß Art. 16 DSGVO</li>
                  <li>Recht auf Löschung gemäß Art. 17 DSGVO</li>
                  <li>Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO</li>
                  <li>Recht auf Unterrichtung gemäß Art. 19 DSGVO</li>
                  <li>Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO</li>
                  <li>Recht auf Widerruf erteilter Einwilligungen gemäß Art. 7 Abs. 3 DSGVO</li>
                  <li>Recht auf Beschwerde gemäß Art. 77 DSGVO</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-primary">6.2 Widerspruchsrecht</h3>
                <p className="text-primary/80">
                  Wenn wir Ihre personenbezogenen Daten auf Grundlage unseres berechtigten Interesses verarbeiten, haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen diese Verarbeitung Widerspruch einzulegen. Bei Direktwerbung können Sie jederzeit Widerspruch einlegen. Nach Ausübung Ihres Widerspruchsrechts beenden wir die Verarbeitung der betroffenen Daten.
                </p>
              </div>
            </div>
          </div>

          {/* 7. Dauer der Speicherung */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-primary">7. Dauer der Speicherung personenbezogener Daten</h2>
            <p className="text-primary/80">
              Die Dauer der Speicherung richtet sich nach der jeweiligen Rechtsgrundlage und dem Verarbeitungszweck. Daten werden so lange gespeichert, wie es zur Erfüllung des Zwecks erforderlich ist. Nach Ablauf gesetzlicher Aufbewahrungsfristen werden die Daten routinemäßig gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind oder kein berechtigtes Interesse an der Weiterspeicherung besteht.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy; 