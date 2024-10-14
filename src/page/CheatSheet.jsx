import Repo from "../components/Repo";

const CheatSheet = () => {
  // Der Einfachheit halber kommt manches erst einmal hierhin, was dann in Komponenten ausgelagert werden kann.
  return (
    <main>
      <h1>Cheatsheet: Git und Github</h1>
        <section id="MPenCode"></section>

        <section id="ionaci"></section>
        <Repo />
        <section id="Lernya"></section>
    </main>
  );
};

export default CheatSheet;
