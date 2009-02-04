// ==UserScript==
// @name           Torrent2Azureus
// @namespace      http://chrismetcalf.net/
// @include        http://thepiratebay.org/*
// ==/UserScript==

var azureus_web_root = "http://magrathea.lan/torrents/";

var all_links = document.getElementsByTagName('a');

for(var i = 0; i < all_links.length; i++) {
  link = all_links[i];

  // Check to see if it's a torrent link
  if(link.href.match(/^http:\/\/.*\.torrent$/)) {
    //GM_log("Found torrent link: " + link);

    // Create a new link target for the link
    var link_target = azureus_web_root + "index.tmpl?d=u&upurl=" + encodeURI(link.href);

    // Replace the link target
    link.href = link_target;
    link.target = "_blank";
  }
}
