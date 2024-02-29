<?php
/*
 * include.php: Include source files.
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

/* List of source files to include.
 * DO NOT EDIT
*/
$list = [

	/* Javascript stuff */
	"js/connect.js",
	"js/me.js",
	"js/channel.js",
	"js/main.js",
	"js/misc.js",
	"js/send.js",
	"js/message-tags.js",
	"js/commandHandler.js",

	/* GUI stuff */
	"gui/modal.js",
	"gui/input.js",
	"gui/options.js",

	/* Source stuff */
	"src/hook.js",
	"src/commands/privmsg.js",
	"src/commands/cap.js",
	"src/commands/join.js",
	"src/commands/topic.js",
	"src/commands/cmdslist.js",
	"src/message-tags/typing.js",
	

];

require_once "html.php";
$html = new HTMLElement('script');
$long = "";
error_log("Loaded");
$html->setAttribute("defer");

foreach ($list as $i)
{
	$html->setAttribute('src', $i);
	$long .= $html;
}

echo $long."\n";

