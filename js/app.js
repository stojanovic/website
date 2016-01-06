'use strict'

var request        = new XMLHttpRequest()
  , url            = 'https://random-art.herokuapp.com/'
  , background     = document.getElementById('background')
  , artTitle       = document.getElementById('art-title')
  , artCreator     = document.getElementById('art-creator')
  , artDescription = document.getElementById('art-description')
  , artLocation    = document.getElementById('art-location')
  , artImage       = document.getElementById('art-image')
  , artLink        = document.getElementById('art-link')

function process(art) {
  background.style.backgroundImage = 'url(' + art.image.replace(/^http:/, 'https:') + ')'
  artTitle.innerHTML = art.title
  
  if (art.date)
    artTitle.innerHTML = artTitle.innerHTML + ' (' + art.date + ')'
  
  if (art.creator)
    artCreator.innerHTML = '<span>Artist:</span> ' + art.creator
  
  if (art.description)
    artDescription.innerHTML = '<span>Description:</span> ' + art.description
  
  if (art.location)
    artLocation.innerHTML = '<span>Location:</span> ' + art.location

  artImage.innerHTML = '<span>Full image:</span> <a href="' + art.image + '" target=_blank>' + art.image + '</a>'
  artLink.innerHTML = '<span>Source:</span> <a href="' + art.link + '" target=_blank>Google Art Project</a>'
}

request.onreadystatechange = function() {
  if (request.readyState === 4 && request.status === 200)
    process(JSON.parse(request.responseText))
}
request.open('GET', url, true)
request.send()
