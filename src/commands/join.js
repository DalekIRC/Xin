document.addEventListener(HOOKTYPE.JOIN, (e) =>
{   // are we joining or is someone else
    console.log(e.detail);
    var tok = e.detail.param[0].split(" ");
    
    // it's us
    if (e.detail.from.name == me.name)
        Channel.addNew(tok[tok.length - 2].substring(1)); // add a channel
    
    // someone else
        // add them to the user list lmao
});