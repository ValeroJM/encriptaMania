const minu = "abcdefghijklmnñopqrstuvwxyzç";
const mayu = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZÇ";
const acent = "áéíóúÁÉÍÓÚäëïöüÄÖÜ";
const spec = "!¡\"#$\t%&'()\n*+,-./ :;<=>¿?@[\\]^_`{|}~";
const num = "0123456789";
const emoticons = "😘🐢😂🐌😏❤️😅🔥💩🥙🍉🎯👓🎵🧰";

const abcedario = minu +
            mayu +
            acent +
            spec +
            num;

//const transposicion5Dig = [12345,12354,12435,12453,12534,12543,13245,13254,13425,13452,13524,13542,14235,14253,14325,14352,14523,14532,15234,15243,15324,15342,15423,15432,21345,21354,21435,21453,21534,21543,23145,23154,23415,23451,23514,23541,24135,24153,24315,24351,24513,24531,25134,25143,25314,25341,25413,25431,31245,31254,31425,31452,31524,31542,32145,32154,32415,32451,32514,32541,34125,34152,34215,34251,34512,34521,35124,35142,35214,35241,35412,35421,41235,41253,41325,41352,41523,41532,42135,42153,42315,42351,42513,42531,43125,43152,43215,43251,43512,43521,45123,45132,45213,45231,45312,45321,51234,51243,51324,51342,51423,51432,52134,52143,52314,52341,52413,52431,53124,53142,53214,53241,53412,53421,54123,54132,54213,54231,54312,54321];
const transposicion5DigStr = ['12345','12354','12435','12453','12534','12543','13245','13254','13425','13452','13524','13542','14235','14253','14325','14352','14523','14532','15234','15243','15324','15342','15423','15432','21345','21354','21435','21453','21534','21543','23145','23154','23415','23451','23514','23541','24135','24153','24315','24351','24513','24531','25134','25143','25314','25341','25413','25431','31245','31254','31425','31452','31524','31542','32145','32154','32415','32451','32514','32541','34125','34152','34215','34251','34512','34521','35124','35142','35214','35241','35412','35421','41235','41253','41325','41352','41523','41532','42135','42153','42315','42351','42513','42531','43125','43152','43215','43251','43512','43521','45123','45132','45213','45231','45312','45321','51234','51243','51324','51342','51423','51432','52134','52143','52314','52341','52413','52431','53124','53142','53214','53241','53412','53421','54123','54132','54213','54231','54312','54321'];

const abcedarioAtbash = "zyxwvutsrqpoñnmlkjihgfedçcbaZYXWVUTSRQPOÑNMLKJIHGFEDÇCBAÜÖÄüöïëäÚÓÍÉÁúóíéá~}|{`_^]\\[@?¿>=<;: /.-,+*\n)('&%\t$#\"¡!9876543210";
const abcedarioLeetSpeak = "∆ь¢d₤ƒghi♪klмทñØ¶Ω®§†บ✓พ×ЧzçДß©D£FGнI√KLMИÑΘ₱QЯSтµVЩЖ¥ZÇ@éíөú^€ÍÓÚäëïöüÄÖÜ!¡\"#$\t%&'()\n*+,-./ :;<=>¿?@[\\]^_`{|}~012∈456789";
const abcROT13 = "nñopqrstuvwxyzçabcdefghijklmNÑOPQRSTUVWXYZÇABCDEFGHIJKLMáéíóúÁÉÍÓÚäëïöüÄÖÜ!¡\"#$\t%&'()\n*+,-./ :;<=>¿?@[\\]^_`{|}~0123456789"

const abcedarioList = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','ç','A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z','Ç'];
const abcedarioDecimalList = ['00','10','11','12','13','20','21','22','23','30','31','32','33','34','35','36','37','40','41','42','43','44','45','50','51','52','53','54','55','56','14','15','16','17','24','25','26','27','38','39','301','302','303','304','46','47','48','49','401','402','57','58','59','501','502','503','504'];

const abcedarioSignoMorseList = [' ','A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9','.',',','?','"','/'];
const codigoMorseList = ['----','.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--','-.','--.--','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..','-----','.----','..---','...--','....-','.....','-....','--...','---..','----.','.-.-.-','--..--','..--..','.-..-.','-..-.'];

const abecedarioBifidoList = [['a','b','c','d','e','f','g','h','i','j','k'],
                              ['l','m','n','ñ','o','p','q','r','s','t','u'],
                              ['v','w','x','y','z','ç','á','é','í','ó','ú'],
                              ['Á','É','Í','Ó','Ú','ä','ë','ï','ö','ü','Ä'],
                              ['Ö','Ü','A','B','C','D','E','F','G','H','I'],
                              ['J','K','L','M','N','Ñ','O','P','Q','R','S'],
                              ['T','U','V','W','X','Y','Z','Ç','!','¡','\"'],
                              ['#','$','\t','%','&',"'",'(',')','\n','*','+'],
                              [',','-','.','/',' ',':',';','<','=','>','¿'],
                              ['?','@','[','\\',']','^','_','`','{','|','}'],
                              ['~','0','1','2','3','4','5','6','7','8','9']];

const abecedarioPlayFairMurcielagoList = [['M','u','R','C','i','é','L','a','g','O','k'],
                                         ['l','m','n','ñ','o','p','q','r','s','t','b'],
                                         ['v','w','x','y','z','ç','á','f','í','ó','ú'],
                                         ['Á','É','Í','Ó','Ú','ä','ë','ï','ö','ü','Ä'],
                                         ['Ö','Ü','A','B','d','D','E','F','G','H','I'],
                                         ['J','K','e','h','N','Ñ','j','P','Q','c','S'],
                                         ['T','U','V','W','X','Y','Z','Ç','!','¡','\"'],
                                         ['#','$','\t','%','&',"'",'(',')','\n','*','+'],
                                         [',','-','.','/',' ',':',';','<','=','>','¿'],
                                         ['?','@','[','\\',']','^','_','`','{','|','}'],
                                         ['~','0','1','2','3','4','5','6','7','8','9']];

const abecedarioGronsfeld = [["BÄ@<42.Q(?ü^+zS]cj!yauÇPpi9Ü)w}8~ñK6ä0 Lï'>YMó$&d_J\nlV*,7ÉReho;5XFqbv3/O\\t\tÑ:xsúNÁECg¿=míZW`ëÖ¡%UGöéA|HçÍáf-ÓI\"Úk[DnT#1{r"],
                             ["%nÜFXuL5q:$!wicbÓ1ë.}ÖözBWZ68üé<GloU49H]ÚÍ32\t\\`CóeaÄ=sS¡ D-RIÁv#pYJ,QÑáP{;_jrçtf\"M+T'ñE>g?ymV7*@~^NäK)ï(|Ç\núAxh/É¿kdí[0&O"],
                             ["hv(W_z+Ñ=ä|p^FHU.oZ{9dtw!1c¡kyÇÓÄ\\8&\"RÖQe- 3a$E/ÉY~)i6ëJÁ`Gx\tü;\nfmg%A'5qT<s[L7u0úöMlnCI4:#Nó]2@b¿rOïjV>PÍíD*B,Ké?áXÚ}ÜSçñ"],
                             ["(fBÓáPÍ#Éóq.h?KNéJ]Y!Ú|,Ü;5{ZismM9pen26jO¿*_LwbTñx><Çöäz`\nç3^4Wí~\"ü$+a=l[úëÖ1d¡I c@v:SV}8ÑkRÄ&A7%XÁg/tE\tr'\\GFï0QU)D-uoyHC"],
                             ["Nï:H7áSóVJXfÓTÖbíEWúkÇ/Qv)+l$PU&¿Bd3xjÉséto5<ä]@¡n#{wqÁ~g[r*\\Ú=\nü4^Aa|CDç61R2ZÑc\t\"MYKÜ8ëñ9y`I?m .'u>pGe};%öiÍ0z!-F(,LÄOh_"],
                             ["n~.OÇïv^J)Rh}9r<tH_/(D5QMÁ,`I4eN ZWÉ'[PAÓ&V\nmBsyó1?cTULÑë0>uñ8Cgif@á\\-7]ödY\"píSKX\tú2#bä6Ú3=¡Í:%oF*üçÖ;ÜGé!zÄqxj|kw+a$¿{El"],
                             ["Yúë{,Ú$Gï4@PDd<.HNMZi6?Ätyéc7¡3\tfX~¿A8>-üÇÉ\\b0FIJ'&s`V[u\nxí*9W;pB%RT çñÑOe)5}qjlSg!#Ó^öÖrQÁäa+ávm1Kowh/nCÜUÍ2=zk|:Ló\"(_]E"],
                             ["CNnA';X)Z=Bñ71\\ïD{h0ÖG-ÚÇx%WÑÄIaúöó(F83T¡j_<çu2?Uüqg>\n\"J[HÜ.^Y~V6!Kfl o\tp#betEO`]PÍv+$Lr*i¿ëá,äÓmÁSRyQsé/&9@:wdÉck}4|5zMí"],
                             ["y-íKe¿`oung4}*f,9H)=@'30\\_mC+Up>h7FdÇÍJzEÖ:éYOöäñb8Mq^\"áDAj%$r[.k~;ÉütsÜú Qa¡XwçïIÓRÁ\nZó!P<iL/Ú?VÑB\t5]xNcG1S{&|Ä2WëT6#(lv"],
                             ["P6=ëZ+:_.Ñ8h,QI4{&vU TÍíÇ%#ylz-e;\t*FÁdGw'VäWÓOJSnö1Úñ2çqo^\n¡A\"|$uKÄgÉ}m3p!>Bé)Ökr@/(Y¿t05aNLH9Ef]?icX\\ïMÜüóDRúx<[sb`j7~áC"]];

export {abcedario, transposicion5DigStr, abcedarioAtbash, abcedarioLeetSpeak, abcedarioList, abcedarioDecimalList, abcedarioSignoMorseList, codigoMorseList, abecedarioBifidoList, abecedarioPlayFairMurcielagoList, abcROT13, abecedarioGronsfeld};