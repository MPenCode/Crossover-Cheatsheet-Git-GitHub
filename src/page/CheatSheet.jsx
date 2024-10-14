import GitCommands from '../components/GitCommands'
import GitExplain from '../components/GitExplain'

const CheatSheet = () => {
  // Der Einfachheit halber kommt manches erst einmal hierhin, was dann in Komponenten ausgelagert werden kann.
  return (

    <main>
      <h1>Cheatsheet: Git und Github</h1>


<section id="testbereich">
  
  
  <h1>Testbereich</h1>
  <p>Das, was in diesem Bereich steht, wird hinterher (auch wieder in bestimmten Sections) 
    in den Nicht-Testbereich umplatziert. Hier ist Spielwiese sozusagen.
  </p>
  
  <section id="MPenCode">
  <GitExplain />
  <GitCommands />
  </section>
  
  <section id="ionaci">
  
  
  
  </section>
  
  
  
  <section id="Lernya">
  
  
  
  </section>
</section>


    </main>






  )
}

export default CheatSheet