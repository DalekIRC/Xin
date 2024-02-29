/*
 * cap.js: CAP command (Client capabilities)
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

document.addEventListener(HOOKTYPE.SOCKOPEN_PRE, (e) => {
    // are we doing sasl? ;o
	const isSasl = (me.sasl.account && me.sasl.password) ? 1 : 0;
    if (isSasl)
        me.capsToRequest.push('sasl');

	doSend("cap ls 302");
})

document.addEventListener(HOOKTYPE.CAP, cap =>
{
    cap = cap.detail;

    var tok = cap.param[0].split(" ");
    var lcmd = tok[3];
    

    if (lcmd == "LS")
    {
        me.capsToRequest.forEach(c => {
            if (cap.parv.includes(c))
            {
                console.log(c);
                me.capsAck.push(c);
                if (c == 'sasl')
                    me.jobs++;
            }
        });
        doSend("cap req :"+me.capsAck.join(" "));
    }
    if (!me.jobs)
        setTimeout(() => {
            doSend("cap end");
        }, 1000);
    
});

function HasCapability(c)
{
    return me.capsAck.includes(c);
}