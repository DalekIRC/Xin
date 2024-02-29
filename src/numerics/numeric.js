const RPL = {
	WELCOME:		"001",
	YOURHOST:		"002",
	CREATED:		"003",
	MYINFO:			"004",
	ISUPPORT:		"005",

	REDIR:			"010",
	MAPUSERS:		"018",
	REMOTEISUPPORT:		"105",

        NONE:                   "300";
        AWAY:                   "301";
        USERHOST:               "302";
        ISON:                   "303";
        TEXT:                   "304";
        UNAWAY:                 "305";
        NOWAWAY:                "306";
        WHOISREGNICK:           "307";
        RULESSTART:             "308";
        ENDOFRULES:             "309";

        WHOISUSER:              "311";
        WHOISSERVER:            "312";
        WHOISOPERATOR:          "313";

        WHOWASUSER:             "314";
	ENDOFWHOWAS:	      	"369";

	WHOISIDLE:        	"317";

	ENDOFWHOIS:       	"318";
	WHOISCHANNELS:    	"319";
	WHOISSPECIAL:     	"320";
	LISTSTART:        321
	LIST:             322
	LISTEND:          323
	CHANNELMODEIS:    324
	CREATIONTIME:     329

	WHOISLOGGEDIN:    330

	NOTOPIC:          331
	TOPIC:            332
	TOPICWHOTIME:     333

	INVITELIST:       336
	ENDOFINVITELIST:  337

	LISTSYNTAX:       334
	WHOISBOT:         335
	USERIP:           340
	INVITING:         341
	WHOISCOUNTRY:     344

	VERSION:          351

	WHOREPLY:         352
	ENDOFWHO:         315
	NAMREPLY:         353
	ENDOFNAMES:       366
	INVEXLIST:        346
	ENDOFINVEXLIST:   347

	EXLIST:           348
	ENDOFEXLIST:      349
	CLOSING:          362
	CLOSEEND:         363
	LINKS:            364
	ENDOFLINKS:       365


}

const ERR = {
	NOSUCHNICK:		"401",
	NOSUCHSERVER:		"402",
	NOSUCHCHANNEL:		"403",
	CANNOTSENDTOCHAN:	"404",
	TOOMANYCHANNELS:	"405",
	WASNOSUCHNICK:		"406",
	TOOMANYTARGETS:		"407",
	NOORIGIN:		"409",
	INVALIDCAPCMD:		"410",
	NORECIPIENT:		"411",
	NOTEXTTOSEND:		"412",

	TOOMANYMATCHES:		"416",
	INPUTTOOLONG:		"417",
	UNKNOWNCOMMAND:		"421",
	NOMOTD:			"422",
	NOADMININFO:		"423",
	NOOPERMOTD:		"425",

	TOOMANYAWAY:		"429",
	NONICKNAMEGIVEN:	"431",
	ERRONEUSNICKNAME:	"432",
	NICKNAMEINUSE:		"433",
	NORULES:		"434",
	BANNICKCHANGE:		"437",
	NCHANGETOOFAST:		"438",
	TARGETOOFAST:		"439",
	SERVICESDOWN:		"440",
	USERNOTINCHANNEL:	"441",
	NOTONCHANNEL:		"442",
	USERONCHANNEL:		"443",
	NONICKCHANGE:		"447",
	FORBIDDENCHANNEL:	"448";

	NOTREGISTERED:		"451";

	NOTFORHALFOPS:		"460";
	NEEDMOREPARAMS:		"461";
	ALREADYREGISTRED:	"462";
	PASSWDMISMATCH:		"464";
	YOUREBANNEDCREEP:	"465";
	ONLYSERVERSCANCHANGE:	"468";
	LINKCHANNEL:		"470";
	CHANNELISFULL:		"471";
	ERR_UNKNOWNMODE:	"472";
	INVITEONLYCHAN:		"473";
	BANNEDFROMCHAN:		"474";
	BADCHANNELKEY:		"475";
	NEEDREGGEDNICK:		"477";
	BANLISTFULL:		"478";
	CANNOTKNOCK:		"480";

	NOPRIVILEGES:		"481";
	CHANOPRIVSNEEDED:	"482";
	KILLDENY:		"485";

	NOTFORUSERS:		"487";

	SECUREONLYCHAN:		"489";
	NOOPERHOST:		"491";

	CHANOWNPRIVNEEDED:	"499";

	TOOMANYJOINS:		"500";
	UMODEUNKNOWNFLAG:	"501";
	USERSDONTMATCH:		"502";

	SILELISTFULL:		"511";
	TOOMANYWATCH:		"512";

	TOOMANYDCC:		"514";

	DISABLED:		"517";
	NOINVITE:		"518";
	OPERONLY:		"520";
	LISTSYNTAX:		"521";

	CANTSENDTOUSER:		"531";

}

/ rpl_endofwho below (315) *
#define	RPL_ENDOFWHOWAS      369

#define RPL_WHOISIDLE        317

#define RPL_ENDOFWHOIS       318
#define RPL_WHOISCHANNELS    319
#define RPL_WHOISSPECIAL     320
#define RPL_LISTSTART        321
#define RPL_LIST             322
#define RPL_LISTEND          323
#define RPL_CHANNELMODEIS    324
#define RPL_CREATIONTIME     329

#define RPL_WHOISLOGGEDIN    330	/ ircu/charybdis-family --nenolod *

#define RPL_NOTOPIC          331
#define RPL_TOPIC            332
#define RPL_TOPICWHOTIME     333

#define RPL_INVITELIST       336
#define RPL_ENDOFINVITELIST  337

#define RPL_LISTSYNTAX       334
#define RPL_WHOISBOT	     335
#define RPL_USERIP	     340
#define RPL_INVITING         341
#define RPL_WHOISCOUNTRY     344

#define RPL_VERSION          351

#define RPL_WHOREPLY         352
#define RPL_ENDOFWHO         315
#define RPL_NAMREPLY         353
#define RPL_ENDOFNAMES       366
#define RPL_INVEXLIST	     346
#define RPL_ENDOFINVEXLIST   347

#define RPL_EXLIST	     348
#define RPL_ENDOFEXLIST      349
#define	RPL_CLOSING          362
#define RPL_CLOSEEND         363
#define RPL_LINKS            364
#define RPL_ENDOFLINKS       365
/ rpl_endofnames above (366) *
#define RPL_BANLIST          367
#define RPL_ENDOFBANLIST     368
/ rpl_endofwhowas above (369) *

#define	RPL_INFO             371
#define	RPL_MOTD             372
#define	RPL_ENDOFINFO        374
#define	RPL_MOTDSTART        375
#define	RPL_ENDOFMOTD        376

#define RPL_WHOISHOST        378
#define RPL_WHOISMODES       379
#define RPL_YOUREOPER        381
#define RPL_REHASHING        382
#define RPL_QLIST			 386
#define	RPL_ENDOFQLIST		 387
#define	RPL_ALIST			 388
#define	RPL_ENDOFALIST		 389

#define RPL_TIME             391
#define	RPL_USERSSTART       392
#define	RPL_USERS            393
#define	RPL_ENDOFUSERS       394
#define	RPL_NOUSERS          395
#define RPL_HOSTHIDDEN       396

#define RPL_TRACELINK        200
#define RPL_TRACECONNECTING  201
#define RPL_TRACEHANDSHAKE   202
#define RPL_TRACEUNKNOWN     203

#define RPL_TRACEOPERATOR    204
#define RPL_TRACEUSER        205
#define RPL_TRACESERVER      206
#define RPL_TRACENEWTYPE     208
#define RPL_TRACECLASS       209

#define RPL_STATSHELP	     210
#define RPL_STATSLINKINFO    211
#define RPL_STATSCOMMANDS    212
#define RPL_STATSCLINE       213

#define RPL_STATSILINE       215
#define RPL_STATSQLINE       217
#define RPL_STATSYLINE       218
#define RPL_ENDOFSTATS       219


#define RPL_UMODEIS          221
#define RPL_STATSGLINE		 223
#define RPL_STATSTLINE		 224
#define RPL_STATSNLINE	     226
#define RPL_STATSVLINE	     227
#define RPL_STATSBANVER	     228
#define RPL_STATSSPAMF       229
#define RPL_STATSEXCEPTTKL   230
#define RPL_RULES            232
#define	RPL_SERVICE          233

#define	RPL_STATSLLINE       241
#define	RPL_STATSUPTIME      242
#define	RPL_STATSOLINE       243
#define	RPL_STATSHLINE       244
#define RPL_STATSXLINE	     247
#define RPL_STATSULINE       248
#define	RPL_STATSDEBUG	     249
#define RPL_STATSCONN        250

#define	RPL_LUSERCLIENT      251
#define RPL_LUSEROP          252
#define	RPL_LUSERUNKNOWN     253
#define	RPL_LUSERCHANNELS    254
#define	RPL_LUSERME          255
#define	RPL_ADMINME          256
#define	RPL_ADMINLOC1        257
#define	RPL_ADMINLOC2        258
#define	RPL_ADMINEMAIL       259

#define	RPL_TRACELOG         261
#define RPL_TRYAGAIN         263
#define RPL_LOCALUSERS       265
#define RPL_GLOBALUSERS      266

#define RPL_SILELIST         271
#define RPL_ENDOFSILELIST    272
#define RPL_STATSDLINE       275
#define RPL_WHOISCERTFP      276

/
 * New /MAP format.
 *
#define RPL_MAP              006
#define RPL_MAPMORE          610
#define RPL_MAPEND           007


#define ERR_WHOLIMEXCEED 523
#define ERR_OPERSPVERIFY 524

#define RPL_SNOMASK	     8

/
 * Numberic replies from server commands.
 * These are also in the range 600-799.
 *
#define RPL_REAWAY           597
#define RPL_GONEAWAY         598
#define RPL_NOTAWAY          599
#define RPL_LOGON            600
#define RPL_LOGOFF           601
#define RPL_WATCHOFF         602
#define RPL_WATCHSTAT        603
#define RPL_NOWON            604
#define RPL_NOWOFF           605
#define RPL_WATCHLIST        606
#define RPL_ENDOFWATCHLIST   607
#define RPL_NOWISAWAY        609

#define RPL_DCCSTATUS        617
#define RPL_DCCLIST          618
#define RPL_ENDOFDCCLIST     619
#define RPL_DCCINFO          620

#define RPL_SPAMCMDFWD       659

#define RPL_STARTTLS         670

#define RPL_WHOISSECURE      671

#define RPL_MONONLINE		730
#define RPL_MONOFFLINE		731
#define RPL_MONLIST			732
#define RPL_ENDOFMONLIST	733
#define ERR_MONLISTFULL		734

#define ERR_MLOCKRESTRICTED	742

#define ERR_CANNOTDOCOMMAND 972
#define ERR_CANNOTCHANGECHANMODE 974

#define ERR_STARTTLS            691

#define ERR_INVALIDMODEPARAM	696

#define RPL_LOGGEDIN            900
#define RPL_LOGGEDOUT           901

#define RPL_SASLSUCCESS         903
#define ERR_SASLFAIL            904
#define ERR_SASLTOOLONG         905
#define ERR_SASLABORTED         906
#define RPL_SASLMECHS           908
