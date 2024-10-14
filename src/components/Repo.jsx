import React from 'react'

const Repo = () => {
  return (
    <div>
    <div title="RepoErstellen">
          <h1>Repository erstellen in GitHub (über die GitHub-Webseite)</h1>
          <p>
            Schritt 1: Melden Sie sich bei Ihrem GitHub-Konto an und klicken Sie
            auf das Plus-Symbol (+) in der oberen rechten Ecke der Seite.
          </p>
          <br />
          <p>Schritt 2: Wählen Sie “New repository” aus.</p> <br />
          <p>
            Schritt 3: Geben Sie einen Namen und eine Beschreibung für Ihr
            Repository ein.
          </p>
          <br />
          <p>
            Schritt 4: Wählen Sie die Repository-Typen aus, die Sie verwenden
            möchten (z.B. Public oder Private).
          </p>{" "}
          <br />
          <p>Schritt 5: Klicken Sie auf “Create repository”.</p>
        </div>
        <div title="RepoHochladen">
          <h1>Repository hochladen</h1>
          <p>
            Schritt 1: Initialisieren Sie das lokale Repository: Wenn Ihr
            Repository noch nicht mit Git initialisiert wurde, führen Sie den
            Befehl <strong>git init</strong> aus.
          </p>
          <br />
          <p>
            Schritt 2: Fügen Sie alle Projektdateien zum Git-Index hinzu:{" "}
            <strong>git add . </strong>oder <strong>git add "dateiname"</strong>{" "}
            (je nach Bedarf)
          </p>
          <br />
          <p>
            Schritt 3: Erstellen Sie einen Commit:{" "}
            <strong>git commit -m "Nachricht"</strong>
            (z.B. “Initial commit”)
          </p>
          <br />
          <p>
            Schritt 4: Konfigurieren Sie den Remote-Server: git remote add
            origin https://github.com/DEIN_BENUTZERNAME/neues_repo.git
          </p>
          <br />
          <p>
            Schritt 5: Pushen Sie das Repository auf GitHub:{" "}
            <strong>git push -u origin main</strong> (Ersetzen Sie master durch
            den Namen Ihres Haupt-Branches)
          </p>
          <br />
          <p>
            <strong>Alternativer Weg:</strong> Wenn Sie ein neues Repository auf
            GitHub erstellen möchten, können Sie dies über die GitHub-Webseite
            tun. Dann können Sie das lokale Repository mit dem neuen
            GitHub-Repository synchronisieren, indem Sie den Befehl git remote
            add verwenden.
          </p>
        </div>
        <div title="Konflikte">
          <h1>Git Merge Konflikte lösen</h1>
          <strong>A:in der GitHub-Webbenutzerfläche</strong>
          <p>1.Öffne den Pull Request, der den Merge-Konflikt enthält.</p>
          <br />
          <p>
            2.Klicke auf die Schaltfläche “Konflikte auflösen” im unteren
            Bereich des Pull Requests.
          </p>
          <br />
          <p>
            3.GitHub öffnet den Konflikt-Editor, in dem du die Konflikte in der
            Datei auflösen kannst.
          </p>
          <br />
          <p>
            4.Identifiziere die Änderungen, die den Konflikt verursachen, und
            bearbeite die Datei entsprechend.
          </p>
          <br />
          <p>
            5.Klicke auf “Als behoben markieren”, wenn du alle Konflikte
            aufgelöst hast.
          </p>
          <br />
          <strong>B:in der Befehlszeile mit Git</strong>
          <p>
            1.Öffne ein Terminal-Fenster und navigiere zu dem Repository, das
            den Merge-Konflikt enthält.
          </p>
          <br />
          <p>
            2.Verwende den Befehl <strong>git status</strong> um den Status des
            Repositories zu überprüfen und die betroffenen Dateien zu
            identifizieren.
          </p>
          <br />
          <p>
            3.Öffne den Konflikt-Editor mit{" "}
            <strong>git edit "dateiname"</strong> und bearbeite die Datei
            entsprechend.
          </p>
          <br />
          <p>
            4.Verwende den Befehl <strong>git add "dateiname"</strong> um die
            bearbeitete Datei bereitzustellen.
          </p>
          <br />
          <p>
            5.Verwende den Befehl{" "}
            <strong>git commit -m "Ihre Commit-Nachricht hier"</strong> um den
            Commit zu erstellen.
          </p>
          <br />
          <p>
            6.Verwende den Befehl <strong>git push</strong> um den Commit auf
            GitHub zu pushen.
          </p>
        </div>
        <div title="Regeln">
          <h1>Git Hub Regeln Übersicht</h1>
          <p>
            <strong>Push-Regeln:</strong> Regeln, die die Übertragung von
            Commits an ein Repository steuern. Sie können verwendet werden, um
            bestimmte Benutzer oder Teams zu autorisieren, Änderungen an einem
            Repository vorzunehmen.
          </p>
          <br />
          <p>
            <strong>Deployment Protection Regeln:</strong> Regeln, die die
            Bereitstellung von Anwendungen in einem Repository steuern. Sie
            können verwendet werden, um die Genehmigung oder Ablehnung von
            Bereitstellungen anhand von bestimmten Kriterien wie z.B.
            Code-Reviews oder automatischen Tests zu regulieren.
          </p>
          <br />
          <p>
            <strong>Metadata Restrictions:</strong> Regeln, die die Formatierung
            von Commit-Metadaten wie z.B. Titeln, Beschreibungen und
            Autor-Informationen steuern.
          </p>
          <br />
          <p>
            <strong>Branch Protection Regeln:</strong> Regeln, die die
            Verwaltung von Zweigen in einem Repository steuern. Sie können
            verwendet werden, um bestimmte Zweige zu schützen oder zu
            blockieren, oder um die Übertragung von Commits an bestimmte Zweige
            zu autorisieren.
          </p>
          <br />
          <p>
            <strong>Collaborator Permissions:</strong> Regeln, die die Rechte
            von Mitarbeitern in einem Repository steuern. Sie können verwendet
            werden, um bestimmten Benutzern bestimmte Rechte wie z.B. Lesen,
            Schreiben oder Admin-Zugriff zu erteilen.
          </p>
        </div>
        <div>
          <h1>GitHub-Repository Klonen</h1>
          <p>
            1.Öffnen Sie ein integriertes Terminal in Visual Studio Code (VS
            Code) oder verwenden Sie ein separates Terminal.
          </p>
          <br />
          <p>
            2.Geben Sie den folgenden Befehl ein: git clone
            https://github.com/USERNAME/REPO-NAME
          </p>
          <br />
          <p>
            3.Wechseln Sie in das neue Verzeichnis, indem Sie den Befehl cd
            verwenden (z.B. cd REPO-NAME).
          </p>
          <br />
          <p>4.Öffnen Sie VS Code und laden Sie das Repository als Projekt.</p>
        </div>
        </div>
  )
}

export default Repo