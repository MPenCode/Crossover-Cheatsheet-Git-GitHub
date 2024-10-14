const GitCommands = () => {
  return (
    <div>
      <h3 className="text-2xl font-medium mb-2">Hier die Git Codes In einem Codeblock</h3>
      <pre className="block bg-gray-100 p-2 rounded-md mb-2">
        <code>
          git config --global init.defaultBranch main //setzt den
          Standard-Branch auf main
        </code>
        <br />
        <code>git init //initialisiert ein neues Git-Repository</code>
        <br />
        <code>git clone [URL] //klont ein bestehendes Repository</code>
        <br />
        <code>git status //zeigt den Status des Repositories an</code>
        <br />
        <code>git add . //fügt alle Änderungen zur Staging-Area hinzu</code>
        <br />
        <code>
          git add [Datei] //fügt eine bestimmte Datei zur Staging-Area hinzu
        </code>
        <br />
        <code>
          git commit -m "Commit Message" //erstellt einen Commit mit einer
          Nachricht
        </code>
        <br />
        <code>
          git commit -am "Add . und Commit Message in einem" //fügt alle
          Änderungen zur Staging-Area hinzu und erstellt einen Commit
        </code>
        <br />
        <code>
          git checkout -b [neuer Branch] //erstellt und wechselt zu einem neuen
          Branch
        </code>
        <br />
        <code>
          git checkout [Branch] //wechselt zu einem bestehenden Branch
        </code>
        <br />
        <code>git checkout - //wechselt zum vorherigen Branch</code>
        <br />
        <code>git Branch //zeigt alle Branches an</code>
        <br />
        <code>git Branch [neuer Branch] //erstellt einen neuen Branch</code>
        <br />
        <code>git Branch -d //löscht einen Branch</code>
        <br />
        <code>
          git merge [anderer Branch] //führt Änderungen eines anderen Branches
          in den aktuellen Branch ein
        </code>
        <br />
        <code>git remote -v //zeigt alle Remote-Repositories an</code>
        <br />
        <code>
          git remote add origin [URL] //fügt ein Remote-Repository hinzu
        </code>
        <br />
        <code>
          git push --set-upstream origin [branch] //pusht den lokalen Branch und
          setzt den Upstream
        </code>
        <br />
        <code>git push //pusht alle Branches mit Upstream</code>
        <br />
        <code>git push origin [branch] //pusht den lokalen Branch</code>
        <br />
        <code>git pull //holt alle Änderungen aus dem Remote-Repository</code>
        <br />
        <code>
          git pull origin [branch] //holt alle Änderungen für einen bestimmten
          Branch
        </code>
        <br />
        <code>git fetch origin //holt alle Änderungen und zeigt sie an</code>
        <br />
        <code>git log //zeigt die Commit-Historie an</code>
        <br />
        <code>
          git restore [Datei] //setzt eine Datei auf den Stand des letzten
          Commits zurück
        </code>
        <br />
      </pre>
    </div>
  );
};

export default GitCommands;
