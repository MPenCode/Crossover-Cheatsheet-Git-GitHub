import Repo from "../components/Repo";
import GitCommands from '../components/GitCommands'
import GitExplain from '../components/GitExplain'

const CheatSheet = () => {
  // Der Einfachheit halber kommt manches erst einmal hierhin, was dann in Komponenten ausgelagert werden kann.
  return (
    <main>
      <h1>Cheatsheet: Git und Github</h1>
        <section id="MPenCode">
    <GitExplain />
  <GitCommands />
    </section>
        <section id="ionaci"></section>
        <Repo />
        <section id="Lernya"></section>
    </main>
  );
};

export default CheatSheet;
