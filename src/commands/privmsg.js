/*
 * PRIVMSG: Allow sending and recieving messages.
 * © Copyright 2023 Valerie Pond and the QtPiRC Team
 * 
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 3, or (at your option)
 * any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 675 Mass Ave, Cambridge, MA 02139, USA.
 */

document.addEventListener(HOOKTYPE.PRIVMSG, privmsg =>
{
    privmsg = privmsg.detail; // always in .detail
    const nick = privmsg.from.name;
    console.log(privmsg);
    let msg = (Array.isArray(privmsg.parv)) ? privmsg.parv.join(" ") : privmsg.parv;
    let parv = privmsg.parv;
    let param = privmsg.param[0].split(" ");
    let chan = param[2][0] == '#' ? param[2] : null;
    const mtags = privmsg.mtags;
    let isDisplayNick = false;
    let display_nick = (mtags && mtags["+draft/display-name"] && (isDisplayNick = true)) ? Escape(mtags["+draft/display-name"]) + ` (`+nick+`)` : nick;
    let isCtcp = IsCtcp(msg);
    let isAction = false;
    if (isCtcp)
    {
        msg = msg.split('\u0001').join("");
    }
    parv = msg.split(" ");
    if (parv[0] == "ACTION")
    {
        isAction = true;
        parv[0] = '';
        msg = (Array.isArray(parv)) ? parv.join(" ") : parv;
        parv = msg.split(" ");
    }

    if (isDisplayNick)
        display_nick = display_nick.split('\\:').join(';').split('\\s').join(' ').split('\\\\').join('\\').split('\\r').join('<br>').split('\\n').join('<br>');
    

    if (isAction)
    {
        doMiddleBubbble("* "+Escape(display_nick) + " "+Escape(msg))
        return;
    } 

    else if (nick != me.name)
    {
        var classes = isAction ? "other-action" : "other-privmsg";
        writeToScreen(`
            <div class="input-group align-items-middle">

                <!-- This will be the avatar when we support metadata -->
                <div class="ms-2 card rounded align-items-middle text-center" style="height:40px;width:40px"><h2>`+nick[0].toUpperCase()+`</h2></div>

                <!-- Message bubble -->
                <div role="button" id="`+mtags.msgid+`" class="rounded ms-3 mt-0 mb-0 ps-2 pb-1 pt-1 pe-4 card align-items-center ` + classes + `">` +
                    (mtags.bot ? `<div class="badge bg-primary me-2">Bot</div>` : ``)+ `
                    <div id="display-nick" class="ms-0 ` + (!isAction ? `badge bg-secondary` : 'ms-1') + ` me-2">`+ ((isAction) ? `<i><small> * ` : ``) + (Escape(display_nick) + 
                    ((isAction) ? Escape(msg) + `</small></i>` : ``)) + 
                    
                    ((!isAction) ? `</div>`+
                    `<br><small><div id="message-contents">`+Escape(msg)+`</div></small>` : '') + `
                </div>
            </div>
        `, chan.substring(1));
    } else {
        writeToScreen(`
        <div class="text-end me-3 align-items-center">
            <small><div class="ms-3 card rounded text-center" style="float:right;height:40px;width:40px"><h2>`+nick[0].toUpperCase()+`</h2></div>

            <div role="button" id="`+mtags.msgid+`" class="text-end rounded container-flex me-2 mt-0 mb-0 ps-2 pt-1 pb-1 pe-4 card our-privmsg">
                <div class="badge btn-sm bg-dark me-2">`+ display_nick + `</div><br><div id="message_contents">`+Escape(msg)+`</div>
            </div></small>
        </div>
    `, chan.substring(1));
    }

    const lastsaid = document.getElementById(chan.substring(1)+"-channel-lastsaid");
    lastsaid.innerHtml = "<small>"+nick+": "+Escape(msg)+"</small>";

});
