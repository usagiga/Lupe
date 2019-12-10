// ==UserScript==
// @name         Lupe
// @namespace    https://github.com/usagiga/lupe
// @version      1.0
// @description  Once open link of posted images on Twitter, then Lupe changes its url to original resolutions.
// @author       Usagigawara
// @match        https://pbs.twimg.com/media/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let pageUrl = new URL(window.location.href);
    let pageUrlParams = pageUrl.searchParams;

    if(pageUrlParams.get("name") != "orig") {
        pageUrlParams.set("name", "orig");

        window.location.assign(pageUrl.toString());
    }
})();https://pbs.twimg.com/media/ELZthZiUUAEklVS?format=jpg&name=900x900