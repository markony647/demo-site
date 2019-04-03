var bannero3pyk5ql9ekqn4u9 = new Array();

bannero3pyk5ql9ekqn4u9[0] = "";
bannero3pyk5ql9ekqn4u9[0] += "<!-- start premium banner for pravda.com.ua -->\n";
bannero3pyk5ql9ekqn4u9[0] += "<div id=\"adpartner-htmlunit-4325\">\n";
bannero3pyk5ql9ekqn4u9[0] += "    <script>\n";
bannero3pyk5ql9ekqn4u9[0] += "        var head = document.getElementsByTagName(\'head\')[0];\n";
bannero3pyk5ql9ekqn4u9[0] += "        var script = document.createElement(\'script\');\n";
bannero3pyk5ql9ekqn4u9[0] += "        script.type = \'text/javascript\';\n";
bannero3pyk5ql9ekqn4u9[0] += "        script.src = \"//a4p.adpartner.pro/htmlunit?id=4325&\" + Math.random();\n";
bannero3pyk5ql9ekqn4u9[0] += "        head.appendChild(script);\n";
bannero3pyk5ql9ekqn4u9[0] += "    <\/script>\n";
bannero3pyk5ql9ekqn4u9[0] += "<\/div>\n";
bannero3pyk5ql9ekqn4u9[0] += "<!-- end premium banner for pravda.com.ua -->\n";
bannero3pyk5ql9ekqn4u9[0] += "\n";

var prioro3pyk5ql9ekqn4u9 = new Array();
prioro3pyk5ql9ekqn4u9[0] = 100

var nRandomPriority = Math.random() * 100;
var space = 0;
for(var nPos=0; nPos < 1; nPos++){
var bannerPrior = prioro3pyk5ql9ekqn4u9[nPos];
if (nRandomPriority > space && nRandomPriority < (space+bannerPrior)){
document.write(bannero3pyk5ql9ekqn4u9[nPos]);}
space+=bannerPrior;}
