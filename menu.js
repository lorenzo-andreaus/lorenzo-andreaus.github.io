function menu(no)
{
  link = new Array("index.html", "publi.html", "teaching.html", "admin.html", "links.html", "perso.html")
  onglet = new Array('Accueil', 'Recherche', 'Enseignement', 'Administration', 'Liens', 'Perso')
  title = new Array('Home', 'Research', 'Teaching', '', 'Links', '')
  document.write('<div class="cadre">')
  document.write('<nav>')
  document.write('<ul>')
  for( var i = 0; i < 6; ++i)
  {
    if (i == no)
      document.write('<li><div title="' + title[i] + '" class="here">' + title[i] + '</div></li>')
    else 
      document.write('<li><a title="' + title[i] + '" href="' + link[i] + '">' + title[i] + '</a></li>')
  }
  document.write('</ul></nav>')
  document.write('<a href="https://www.math.univ-toulouse.fr/"><img title="Institut de Mathématiques de Toulouse" alt="Logo IMT" src="pictures/logo_IMT.jpg" class="logo"></a>')
  document.write('</div>')
}
