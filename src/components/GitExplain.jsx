const gitExplain = () => {
return (
    <div>
        <h1 className="text-4xl font-bold mb-4">CheatSheet Git und GitHub</h1>
        <h2 className="text-3xl font-semibold mb-3">Was ist was?</h2>
        <h3 className="text-2xl font-medium mb-2">Git</h3>
        <p>
            Git ist ein Versionskontrollsystem, das es Entwicklern ermöglicht, den
            Quellcode ihrer Projekte zu verwalten. Es speichert Änderungen in einer
            Chronologie, sodass man zu früheren Versionen zurückkehren und parallele
            Entwicklungen in sogenannten Branches durchführen kann. Git wird
            hauptsächlich lokal auf dem Computer verwendet.
        </p>
        <h3 className="text-2xl font-medium mb-2">GitHub</h3>
        <p>
            GitHub ist eine Plattform, die Git-Repositories in der Cloud hostet,
            wodurch Teams weltweit an gemeinsamen Projekten arbeiten können. GitHub
            speichert die Repositories online und ermöglicht den einfachen Austausch
            und die Zusammenarbeit.
        </p>
        <h3 className="text-2xl font-medium mb-2">Der Unterschied</h3>
        <p>
            Der Unterschied ist, dass Git das Versionskontrollsystem ist, das lokal
            auf dem Rechner läuft, während GitHub ein Online-Dienst ist, der
            Git-Repositories hostet. Git ist also das Werkzeug zur Verwaltung von
            Quellcodeänderungen, und GitHub ist eine Plattform zur gemeinsamen
            Nutzung und Verwaltung von Git-Projekten. Git kann ohne GitHub verwendet
            werden, aber GitHub setzt Git voraus.
        </p>
        <h2 className="text-3xl font-semibold mb-3">Git</h2>
        <h3 className="text-2xl font-medium mb-2">Git-Repository erstellen</h3>
        <p>
            Um ein neues Git-Repository zu erstellen, navigiere in deinem Terminal
            in das Projektverzeichnis
        </p>
        <code className="block bg-gray-100 p-2 rounded-md mb-2">--Terminal: cd /pfad/zu/deinem/projekt</code>
        <p> und führe den folgenden Befehl aus:</p>
        <code className="block bg-gray-100 p-2 rounded-md mb-2">--Terminal: git init</code>
        <p>
            Sollte der Haupt Branch nicht Main sondern Master sein kannst du dies
            hier für immer ändern:
        </p>
        <code className="block bg-gray-100 p-2 rounded-md mb-2">--Terminal: git config --global init.defaultBranch main</code>
        <h4 className="text-xl font-medium mb-2">Clonen</h4>
        <p>
            Sollte es allerdings schon ein Repository geben kannst du dieses Klonen
            mit folgendem Befehl:
        </p>
        <code className="block bg-gray-100 p-2 rounded-md mb-2">--Terminal: git clone [URL] </code>
        <p>
            Sei dir sicher, dass du in dem richtigen Ordner bist, in dem du das
            Repository haben möchtest. Der Befehl erstellt einen neuen Ordner mit
            dem Klon.
        </p>
        <h3 className="text-2xl font-medium mb-2">Arbeiten mit Git</h3>
        <h4 className="text-xl font-medium mb-2">Git Status</h4>
        <p>
            Um den Status deines Repositories zu überprüfen, führe den folgenden
            Befehl aus:
        </p>
        <code className="block bg-gray-100 p-2 rounded-md mb-2">--Terminal: git status</code>
        <p>
            Der Befehl zeigt dir, welche Dateien geändert wurden und welche Dateien
            noch nicht getrackt werden.
        </p>
        <h4 className="text-xl font-medium mb-2">Git Add</h4>
        <p>Um alle Änderungen auszuwählen, führe den folgenden Befehl aus:</p>
        <code className="block bg-gray-100 p-2 rounded-md mb-2">--Terminal: git add . //alle Dateien</code>
        <br />
        <code className="block bg-gray-100 p-2 rounded-md mb-2">--Terminal: git add [Datei] //bestimmte Dateien</code>
        <p>
            Wenn du nur bestimmte Dateien auswählen möchtest, füge die Dateinamen
            hinzu:
        </p>
        <h4 className="text-xl font-medium mb-2">Git Commit</h4>
        <p>
            Um die ausgewählten Dateien dem Branch hinzuzufügen kannst du diesen
            Befehl verwenden:
        </p>
        <code className="block bg-gray-100 p-2 rounded-md mb-2">
            --Terminal: git commit -m "Commit Nachricht" //Fügt die ausgewählten
            Dateien dem Branch hinzu
        </code>
        <code className="block bg-gray-100 p-2 rounded-md mb-2">
            <br />
            --Terminal: git commit -am "Commit Nachricht" //wählt alle Dateien aus
            und fügt sie dem Branch hinzu
        </code>
        <p>
            In die Commit Nachricht sollte hinein was sich verändert hat seit der
            letzten Commit Nachricht.
        </p>
        <p>
            Good Practice: Mache viele Kleinere Commits anstatt einem großen. Somit
            kannst du besser Fehlerquellen entdecken und verlierst nicht so viel
            Arbeit sollte man auf einen früheren Stand zurückgreifen müssen
        </p>
        <h4 className="text-xl font-medium mb-2">Branches</h4>
        <p>
            Branches sind parallele Versionen deines Projekts. Sie ermöglichen es
            dir, an verschiedenen Funktionen oder Features zu arbeiten, ohne den
            Hauptcode zu beeinträchtigen. Um einen neuen Branch zu erstellen, führe
            den folgenden Befehl aus:
        </p>
        <code className="block bg-gray-100 p-2 rounded-md mb-2">
            --Terminal: git checkout -b [neuer Branch] //erstellt einen neuen Branch
        </code>
        <br />
        <code className="block bg-gray-100 p-2 rounded-md mb-2">
            --Terminal: git branch [neuer Branch] //erstellt einen neuen Branch{" "}
        </code>
        <p>
            Good Practice: Erstelle deinen Branch immer mit einem Namen mit
            Bedeutung die für einen Fremden Sinn macht. Du wirst häufig mit anderen
            an einem Projekt arbeiten, da macht es sinn sich schon mal daran zu
            gewöhnen. (z.b. feature/Footer-links, add/GerneralRouting,
            fix/nav-buttons)
        </p>
        <p>
            {" "}
            Um zu einem anderen Branch zu wechseln, führe den folgenden Befehl aus:
        </p>
        <code className="block bg-gray-100 p-2 rounded-md mb-2">
            --Terminal: git checkout [Branch] //wechselt zu einem anderen Branch
        </code>
        <br />
        <code className="block bg-gray-100 p-2 rounded-md mb-2">--Terminal: git checkout - //wechselt zum vorherigen Branch </code>
        <p>
            Um alle Branches anzuzeigen oder einen Branch zu löschen, führe die
            folgenden Befehle aus:
        </p>
        <code className="block bg-gray-100 p-2 rounded-md mb-2">--Terminal: git branch //zeigt alle Branches an </code>
        <code className="block bg-gray-100 p-2 rounded-md mb-2">--Terminal: git branch -d [Branch] //löscht einen Branch</code>
        <br />
        <h4 className="text-xl font-medium mb-2">Merge</h4>
        <p>Um zwei Branches zusammenzuführen, führe den folgenden Befehl aus:</p>
        <code className="block bg-gray-100 p-2 rounded-md mb-2">
            --Terminal: git merge [anderer Branch] //fügt die Änderungen des anderen
            Branches in den aktuellen Branch ein
        </code>
        <p>
            Good Practice: Merge nie direkt einen branch in "main" sondern immer in
            einen stellvertreter z.b. ein Entwicklungs Branch "dev". In main soll
            nur etwas hinzugefügt werden was fertig oder vorzeigbar ist.
        </p>
        <h4 className="text-xl font-medium mb-2">Remote</h4>
        <p>
            Um mit einem Remote-Repository zu arbeiten, führe die folgenden Befehle
            aus:
        </p>
        <code className="block bg-gray-100 p-2 rounded-md mb-2">--Terminal: git remote -v //zeigt alle Remote-Repositories an</code>
        <br />
        <code className="block bg-gray-100 p-2 rounded-md mb-2">
            --Terminal: git remote add origin [URL] //verknüpft das lokale
            Repository mit dem Remote-Repository
        </code>
        <p>
            Um Änderungen in das Remote-Repository zu übertragen, führe den
            folgenden Befehl aus:
        </p>
        <code className="block bg-gray-100 p-2 rounded-md mb-2">
            --Terminal: git push --set-upstream origin [Branch] //schiebt den
            lokalen Branch in das Remote-Repository und erstellt ein upstream
        </code>
        <br />
        <code className="block bg-gray-100 p-2 rounded-md mb-2">
            --Terminal: git push //schiebt alle Branches in das Remote-Repository
            welche einen upstream haben
        </code>
        <br />
        <code className="block bg-gray-100 p-2 rounded-md mb-2">
            --Terminal: git push origin [Branch] //schiebt den lokalen Branch in das
            Remote-Repository
        </code>
        <p>
            Good Practice: Nach erstellen und Hochladen der allgemeinen Branches
            "main" und "dev" soll nicht wieder direkt auf diese Branches Daten
            geschoben werden. Verwende dafür z.b. GitHub.
        </p>
        <h4 className="text-xl font-medium mb-2">Pull</h4>
        <p>
            Um Änderungen aus dem Remote-Repository zu übernehmen, führe die
            folgenden Befehle aus:
        </p>
        <code className="block bg-gray-100 p-2 rounded-md mb-2">
            --Terminal: git pull //holt alle Änderungen aus dem Remote-Repository
        </code>
        <br />
        <code className="block bg-gray-100 p-2 rounded-md mb-2">
            --Terminal: git pull origin [Branch] //holt alle Änderungen aus dem
            Remote-Repository für einen bestimmten Branch
        </code>
        <code className="block bg-gray-100 p-2 rounded-md mb-2">
            --Terminal: git fetch origin //holt alle Änderungen aus dem
            Remote-Repository, zeigt sie aber nur an
        </code>
        <h4 className="text-xl font-medium mb-2">Log</h4>
        <p>Um die Commit-Historie anzuzeigen, führe den folgenden Befehl aus:</p>
        <code className="block bg-gray-100 p-2 rounded-md mb-2">--Terminal: git log //zeigt die Commit-Historie an</code>
        <br />
        <code className="block bg-gray-100 p-2 rounded-md mb-2">
            --Terminal: git log --oneline //zeigt die Commit-Historie in einer Zeile
            an
        </code>
        <h4 className="text-xl font-medium mb-2">Restore</h4>
        <p>
            Um eine Datei auf den Stand des letzten Commits zurückzusetzen, führe
            den folgenden Befehl aus:
        </p>
        <code className="block bg-gray-100 p-2 rounded-md mb-2">
            --Terminal: git restore [Datei] //setzt die Datei auf den Stand des
            letzten Commits zurück
        </code>
    </div>
);
};

export default gitExplain;
