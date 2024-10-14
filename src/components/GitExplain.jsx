const gitExplain = () => {
  return (
    <div>
    <h1>CheatSheet Git und GitHub</h1>
    <h2>Was ist was?</h2>
    <h3>Git</h3>
    <p>Git ist ein Versionskontrollsystem, das es Entwicklern ermöglicht, den Quellcode ihrer Projekte zu verwalten. Es speichert Änderungen in einer Chronologie, sodass man zu früheren Versionen zurückkehren und parallele Entwicklungen in sogenannten Branches durchführen kann. Git wird hauptsächlich lokal auf dem Computer verwendet.</p>
    <h3>GitHub</h3>
    <p>GitHub ist eine Plattform, die Git-Repositories in der Cloud hostet, wodurch Teams weltweit an gemeinsamen Projekten arbeiten können. GitHub speichert die Repositories online und ermöglicht den einfachen Austausch und die Zusammenarbeit.</p>

    <h3>Der Unterschied</h3>
    <p>Der Unterschied ist, dass Git das Versionskontrollsystem ist, das lokal auf dem Rechner läuft, während GitHub ein Online-Dienst ist, der Git-Repositories hostet. Git ist also das Werkzeug zur Verwaltung von Quellcodeänderungen, und GitHub ist eine Plattform zur gemeinsamen Nutzung und Verwaltung von Git-Projekten. Git kann ohne GitHub verwendet werden, aber GitHub setzt Git voraus.</p>

    <h2>Git</h2>
    <h3>Git-Repository erstellen</h3>
    <p>Um ein neues Git-Repository zu erstellen, navigiere in deinem Terminal in das Projektverzeichnis</p>
            <code>
                --Terminal:
                cd /pfad/zu/deinem/projekt
            </code>
    <p> und führe den folgenden Befehl aus:</p>
    <code>
                --Terminal:
                git init
            </code>
   <p>Sollte der Haupt Branch nicht Main sondern Master sein kannst du dies hier für immer ändern:</p>
    <code>
                --Terminal: git config --global init.defaultBranch main
            </code>
    <h4>Clonen</h4>
    <p>Sollte es allerdings schon ein Repository geben kannst du dieses Klonen mit folgendem Befehl:</p>
    <code>
                --Terminal: git clone [URL]
            </code>

    <h3>Arbeiten mit Git</h3>
    <h4>Git Status</h4>
    <p>Um den Status deines Repositories zu überprüfen, führe den folgenden Befehl aus:</p>
    <code>
                --Terminal: git status
            </code>
    <p>Der Befehl zeigt dir, welche Dateien geändert wurden und welche Dateien noch nicht getrackt werden.</p>
    <h4>Git Add</h4>
    <p>Um alle Änderungen auszuwählen, führe den folgenden Befehl aus:</p>
    <code>
                --Terminal: git add .    //alle Dateien
                --Terminal: git add [Datei]   //bestimmte Dateien
            </code>
    <p>Wenn du nur bestimmte Dateien auswählen möchtest, füge die Dateinamen hinzu:</p>
    <h4>Git Commit</h4>
    <p>Um die ausgewählten Dateien dem Branch hinzuzufügen kannst du diesen Befehl verwenden:</p>
    <code>
                --Terminal: git commit -m "Commit Nachricht"    //Fügt die ausgewählten Dateien dem Branch hinzu
                --Terminal: git commit -am "Commit Nachricht"   //wählt alle Dateien aus und fügt sie dem Branch hinzu
            </code>
<p>In die Commit Nachricht sollte hinein was sich verändert hat seit der letzten Commit Nachricht.</p>
<p>Good Practice: Mache viele Kleinere Commits anstatt einem großen. Somit kannst du besser Fehlerquellen entdecken und verlierst nicht so viel Arbeit sollte man auf einen früheren Stand zurückgreifen müssen</p>
        










    <h3>Hier Git Codes In einem Codeblock</h3>
    <pre>
        <code>git config --global init.defaultBranch main   </code><br/>
        <code>git init</code><br/>
        <code>git clone [URL]</code><br/>
        <code>git status</code><br/>
        <code>git status</code><br/>
        <code>git add .</code><br/>
        <code>git add [Datei]</code><br/>
        <code>git commit -m "Commit Message"</code><br/>
        <code>git commit -am "Add . und Commit Message in einem"</code><br/>
        <code>git checkout -b [neuer Branch]</code><br/>
        <code>git checkout [Branch]</code><br/>
        <code>git checkout -</code><br/>
        <code>git Branch</code><br/>
        <code>git Branch [neuer Branch]</code><br/>
        <code>git Branch -d</code><br/>
        <code>git merge [anderer Branch]</code><br/>
        <code>git remote -v</code><br/>
        <code>git remote add origin [URL]</code><br/>
        <code>git push --set-upstream origin [branch]</code><br/>
        <code>git push</code><br/>
        <code>git push origin [branch]</code><br/>
        <code>git pull</code><br/>
        <code>git pull origin [branch]</code><br/>
        <code>git fetch origin</code><br/>
        <code>git log</code><br/>
        <code>git restore [Datei]</code><br/>
    </pre>

        {/* <p>Hier ist ein erklärender Text.</p>
        <pre>
        <code>
                --Terminal:
                git add .
                git push --set-upstream origin dev
            </code>
        </pre>
        <p>Hier ist ein weiterer erklärender Text.</p> */}
        </div>
  )
}

export default gitExplain