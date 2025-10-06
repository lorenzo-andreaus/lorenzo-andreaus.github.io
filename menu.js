function menu(no)
{
  link = new Array("index.html", "research.html", "talks.html", "links.html", "personal.html")
  title = new Array('Home', 'Research', 'talks', 'Links', 'Beyond Mathematics')
  document.write('<div class="cadre">')
  document.write('<nav>')
  document.write('<ul>')
  for( var i = 0; i < 5; ++i)
  {
    if (i == no)
      document.write('<li><div title="' + title[i] + '" class="here">' + title[i] + '</div></li>')
    else 
      document.write('<li><a title="' + title[i] + '" href="' + link[i] + '">' + title[i] + '</a></li>')
  }
  document.write('</ul></nav>')
  document.write('</div>')
}
