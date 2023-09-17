// canales de lista m3u https://jsfiddle.net/onigetoc/f26zuLtw/
function m3utojson(m3u) {
    return m3u
        .replace('#EXTM3U', '')
        .split('#EXTINF:-1 ')
        .slice(1)
        .map(function(str, index) {
            let channel = str.split('\n').slice(0,-1);
			if(channel[1].indexOf('m3u8') >= 0){
            /* 
                    channel[0].split('"')[0]
                        | channel[0].split('"')[1]
                        |    |   channel[0].split('"')[2]
                        |    |      |    channel[0].split('"')[3]   
                        |    |      |        |     channel[0].split('"')[4]  
                        |    |      |        |         |      channel[0].split('"')[5]          
                        |    |      |        |         |             |        channel[0].split(',')[1]    
                        __|__  |  ____|___   __|__   ____|___   _______|______    ___|__
                    |     | | |        | |     | |        | |              |  |      |
            #EXTINF:-1 tvg-id="1" tvg-name="nombre1" tvg-logo="https://foto.png", nombre1
            https://enlace.m3u8
            -------|-----------
                channel[1]

            */
                return {
                 "id": index + 1,
                 "tvg-id": channel[0].split('"')[1],
                 "title": channel[0].split('"')[3],
                 "name": channel[0].split(',')[1],
                 "m3u8_url": channel[1].replace('http://', 'https://')                        
                }
			}
        });
}



// https://www.m3u.cl/iptv-chile.php
let m3u = `
#EXTM3U
#EXTINF:-1 tvg-id="4" tvg-name="Retro Plus TV" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", Retro Plus TV * | CL
https://video06.logicahost.com.br/retroplustv/retroplustv/playlist.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="Retro Plus TV Señal 2" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", Retro Plus TV Señal 2 * | CL
https://video06.logicahost.com.br/retroplussenal2/retroplussenal2/playlist.m3u8
#EXTINF:-1 tvg-id="465" tvg-name="Retro Plus TV Señal 3" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", Retro Plus TV Señal 3 * | CL
https://video06.logicahost.com.br/retroplussenal3/retroplussenal3/playlist.m3u8
#EXTINF:-1 tvg-id="1160" tvg-name="VClassicTV" tvg-logo="https://i2.paste.pics/99cc893c37784a17aac9a95ac3c7e5c8.png", VClassicTV * | CL
https://5eaccbab48461.streamlock.net:1936/8112/8112/playlist.m3u8
#EXTINF:-1 tvg-id="1255" tvg-name="VClassicTV Tropical" tvg-logo="https://i2.paste.pics/355ba171055dd0e6747131673432cc18.png", VClassicTV Tropical * | CL
https://5eaccbab48461.streamlock.net:1936/8222/8222/playlist.m3u8
#EXTINF:-1 tvg-id="31" tvg-name="Portal FoxMix" tvg-logo="https://i2.paste.pics/6abc319563c207c4ba1fb2c199fedd86.png", Portal FoxMix * | CL
https://panel.tvstream.cl:1936/8040/8040/playlist.m3u8
#EXTINF:-1 tvg-id="1436" tvg-name="Apanines TV" tvg-logo="https://i2.paste.pics/eee2cbc0f52cbb9c7c73ee13f72c0b96.png", Apanines TV * | CL
https://inliveserver.com:1936/10010/10010/playlist.m3u8
#EXTINF:-1 tvg-id="1058" tvg-name="Spectrum Channel" tvg-logo="https://i2.paste.pics/e3cde58abf314e0e6b17b595c357936a.png", Spectrum Channel * | CL
https://panel.miplay.cl:8081/spectrumchannel/index.m3u8
#EXTINF:-1 tvg-id="1112" tvg-name="Fanpop TV" tvg-logo="https://i2.paste.pics/5d6d67c298360548fd41a897f987628c.png", Fanpop TV * | CL
https://wifispeed.trapemn.tv:1936/infantil/energeek-2/playlist.m3u8
#EXTINF:-1 tvg-id="947" tvg-name="EnerGeek" tvg-logo="https://i2.paste.pics/5efe361b75000b6eb6104bf22a0880fe.png", EnerGeek * | CL
https://wifispeed.trapemn.tv:1936/infantil/energeek-1/playlist.m3u8
#EXTINF:-1 tvg-id="1266" tvg-name="EnerGeek Radio" tvg-logo="https://i.paste.pics/4a15cf6d76aaf3246f3a6cedd48e0ac9.png", EnerGeek Radio * | CL
https://stream.wifiexpert.cl/energeek/radio/playlist.m3u8
#EXTINF:-1 tvg-id="1300" tvg-name="Moni TV" tvg-logo="https://i2.paste.pics/dad53a17aceb11d80b7ec90ec2398f2f.png", Moni TV * | CL
https://tv.streaming-chile.com:1936/ngencrcbyy/ngencrcbyy/playlist.m3u8
#EXTINF:-1 tvg-id="1420" tvg-name="Terror TV" tvg-logo="https://i2.paste.pics/3d543690d890b9a5918a8025aebcf2bc.png", Terror TV * | CL
https://tv.streaming-chile.com:1936/8140/8140/playlist.m3u8
#EXTINF:-1 tvg-id="13" tvg-name="Ruidos TV" tvg-logo="https://i2.paste.pics/004835d0c1a19dd14fa643dd18897d4d.png", Ruidos TV * | CL
https://panel.tvstream.cl:1936/8022/8022/playlist.m3u8
#EXTINF:-1 tvg-id="1312" tvg-name="Eternal Metal" tvg-logo="https://i.paste.pics/8504c462729d61af6e1f0b59323f9a85.png", Eternal Metal * | CL
https://vdo.panelstreaming.live:3261/hybrid/play.m3u8
#EXTINF:-1 tvg-id="996" tvg-name="Latinos Radio" tvg-logo="https://i2.paste.pics/f5a6133c6b0fcec076105dfd2508549c.png", Latinos Radio * | CL
https://stmv2.zcasthn.com.br/latinosmedia/latinosmedia/playlist.m3u8
#EXTINF:-1 tvg-id="1014" tvg-name="PlanetaTV Music" tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png", PlanetaTV Music * | CL
https://scl.edge.grupoz.cl/music/live/music.m3u8
#EXTINF:-1 tvg-id="1016" tvg-name="PlanetaTV Movies" tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png", PlanetaTV Movies * | CL
https://scl.edge.grupoz.cl/movie/live/movie.m3u8
#EXTINF:-1 tvg-id="1424" tvg-name="Parentesis TV" tvg-logo="https://i2.paste.pics/d94a5f7f1913eea53167784065b56aee.png", Parentesis TV * | CL
https://vdo.miserver.pro:3591/live/parentesistvlive.m3u8
#EXTINF:-1 tvg-id="771" tvg-name="Mundo de la Musica TV" tvg-logo="https://i2.paste.pics/a66f18725932decfa4fcf7f634060922.png", Mundo de la Musica TV * | CL
https://tv.streaming-chile.com:1936/mundodelamusicatv/mundodelamusicatv/playlist.m3u8
#EXTINF:-1 tvg-id="1195" tvg-name="La Chilena TV" tvg-logo="https://i2.paste.pics/8c05e352159b95f3dc0092a6149b3daf.png", La Chilena TV * | CL
https://vdochile.com:3134/hybrid/play.m3u8
#EXTINF:-1 tvg-id="1288" tvg-name="Suyai TV" tvg-logo="https://i2.paste.pics/3d29bee85a41e947ab505098d83e8d64.png", Suyai TV * | CL
https://5ff3d9babae13.streamlock.net:443/ewdnnusyjt/ewdnnusyjt/playlist.m3u8
#EXTINF:-1 tvg-id="1287" tvg-name="CDR" tvg-logo="https://i2.paste.pics/bd867f1a431411c9720ec246807ade49.png", CDR * | CL
https://live-hls-xgod.livepush.io/live_cdn/emaf6CHYV7M-RQcL2/index.m3u8
#EXTINF:-1 tvg-id="1098" tvg-name="CRTV" tvg-logo="https://i2.paste.pics/bf68b159547597c39574aec9dd7c626a.png", CRTV * | CL
https://vdo.panelstreaming.live:3058/hybrid/play.m3u8
#EXTINF:-1 tvg-id="897" tvg-name="Retro Play TV" tvg-logo="https://i2.paste.pics/90f2f266cb4f68333119a06b99d65d10.png", Retro Play TV * | CL
https://v4.tustreaming.cl/retroplaytv/index.m3u8
#EXTINF:-1 tvg-id="1482" tvg-name="Radio Eva Digital" tvg-logo="https://i2.paste.pics/b242fea3347af3f807d518f3b834d2c1.png", Radio Eva Digital * | CL
https://vdo.panelstreaming.live:3466/stream/play.m3u8
#EXTINF:-1 tvg-id="1481" tvg-name="Mamalluca TV" tvg-logo="https://i2.paste.pics/5304dac5430b156b0909c664448fdc7a.png", Mamalluca TV * | CL
https://stmv2.zcasthn.com.br/mamallucatv/mamallucatv/playlist.m3u8
#EXTINF:-1 tvg-id="1476" tvg-name="Urban Pro DJ" tvg-logo="https://i2.paste.pics/5aed2aa69dbe9107dac26945d8e0f05c.png", Urban Pro DJ * | CL
https://vdochile.com:3119/stream/play.m3u8
#EXTINF:-1 tvg-id="1474" tvg-name="WF9" tvg-logo="https://i2.paste.pics/82bfc4cf5af7c8e65bbb2711cc1680d3.png", WF9 * | CL
https://5eaccbab48461.streamlock.net:1936/8240/8240/playlist.m3u8
#EXTINF:-1 tvg-id="1473" tvg-name="Music PUQ" tvg-logo="https://i2.paste.pics/e011164c3dcd24bc2f5f7924677e3891.png", Music PUQ * | CL
https://vdochile.com:3761/live/redupxprlive.m3u8
#EXTINF:-1 tvg-id="1472" tvg-name="La Nuestra" tvg-logo="https://i2.paste.pics/45043ca151a5f9ab3e8c62078c79ab26.png", La Nuestra * | CL
https://redirector.rudo.video/hls-video/339f69c6122f6d8f4574732c235f09b7683e31a5/ln/ln.smil/playlist.m3u8
#EXTINF:-1 tvg-id="1469" tvg-name="TV Canal 5" tvg-logo="https://i2.paste.pics/fc72e5076205656f9240cf2c19659f51.png", TV Canal 5 * | CL
https://vdochile.com:3088/stream/play.m3u8
#EXTINF:-1 tvg-id="1468" tvg-name="Radio Araucania Laja" tvg-logo="https://i2.paste.pics/f49ac74349c5d554de967f2387274e12.png", Radio Araucania Laja * | CL
https://stmv2.zcasthn.com.br/radioaraucania/radioaraucania/playlist.m3u8
#EXTINF:-1 tvg-id="1467" tvg-name="Radio UC" tvg-logo="https://i2.paste.pics/174966158c389cbc1163bc9cddc678ce.png", Radio UC * | CL
https://stmv2.zcasthn.com.br/radiouc/radiouc/playlist.m3u8
#EXTINF:-1 tvg-id="1466" tvg-name="Pandamax TV" tvg-logo="https://i2.paste.pics/ec98378f852412f496eaa557998255ac.png", Pandamax TV * | CL
https://streaming.zappix.live:3062/live/animaxlive.m3u8
#EXTINF:-1 tvg-id="1465" tvg-name="33 Segundos TV" tvg-logo="https://i2.paste.pics/5590098cd138c0b1a626ecb266c1c10e.png", 33 Segundos TV * | CL
https://stmv2.zcasthn.com.br/segundos/segundos/playlist.m3u8
#EXTINF:-1 tvg-id="1463" tvg-name="Radio Bienvenida FM" tvg-logo="https://i2.paste.pics/17ed714058cb5e62802ef8e04482748a.png", Radio Bienvenida FM * | CL
https://panel.tvstream.cl:1936/8012/8012/playlist.m3u8
#EXTINF:-1 tvg-id="1461" tvg-name="Los Rios Al Dia" tvg-logo="https://i2.paste.pics/654339e3e8e4096492037cfbca2ec3e2.png", Los Rios Al Dia * | CL
https://losriosaldia.ngrok.app/hls/stream.m3u8
#EXTINF:-1 tvg-id="1457" tvg-name="Comunitaria Radio Tv" tvg-logo="https://i2.paste.pics/847f6fb846d40df92c90f6daff9730e9.png", Comunitaria Radio Tv * | CL
https://panel.tvstream.cl:1936/8050/8050/playlist.m3u8
#EXTINF:-1 tvg-id="1455" tvg-name="TV EnPlacilla" tvg-logo="https://i2.paste.pics/201212ba4a9e52d2a39ddb6bb86b18d5.png", TV EnPlacilla * | CL
https://panel.tvstream.cl:1936/8038/8038/playlist.m3u8
#EXTINF:-1 tvg-id="1451" tvg-name="Nexovision" tvg-logo="https://i2.paste.pics/3279c8ece7f77ca4b871193c50a37fca.png", Nexovision * | CL
https://stmv2.zcasthn.com.br/nexovision/nexovision/playlist.m3u8
#EXTINF:-1 tvg-id="905" tvg-name="Taltal TV" tvg-logo="https://i2.paste.pics/18b445e2ec674ae21c12e73f6714501d.png", Taltal TV * | CL
https://ssh101.bozztv.com/ssh101/taltal/playlist.m3u8
#EXTINF:-1 tvg-id="1445" tvg-name="Teatrix" tvg-logo="https://i2.paste.pics/704a8832ee0cecaadc927139a8a43db8.png", Teatrix * | CL
https://content.uplynk.com/channel/585ab4fbd865426abd6fbd48fc631b6e.m3u8
#EXTINF:-1 tvg-id="1435" tvg-name="+Cine" tvg-logo="https://i2.paste.pics/e349b7ba64870b6e3cceb058c1f3a6ce.png", +Cine * | CL
https://tv.streaming-chile.com:1936/8142/8142/+Cine.m3u8
#EXTINF:-1 tvg-id="349" tvg-name="Supersonika TV" tvg-logo="https://i2.paste.pics/fef1c0d39162f064f634fd3250f23659.png", Supersonika TV * | CL
https://unlimited1-cl-isp.dps.live/supersonikatv/supersonikatv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="1434" tvg-name="Marga Marga TV" tvg-logo="https://i2.paste.pics/ac3ec8e1657f335cc9a19e8c716f7d42.png", Marga Marga TV * | CL
https://v1.tustreaming.cl/margamargatv/index.m3u8
#EXTINF:-1 tvg-id="1432" tvg-name="El Centro TV" tvg-logo="https://i2.paste.pics/c7efa75621818f201a2d01c7eb17cf6c.png", El Centro TV * | CL
https://v1.tustreaming.cl:443/diarioelcentrotv/index.m3u8
#EXTINF:-1 tvg-id="1431" tvg-name="Canal 30 Loncomilla" tvg-logo="https://i2.paste.pics/4002196065803939c387bb88ae54b8be.png", Canal 30 Loncomilla * | CL
https://v1.tustreaming.cl:19360/canal30loncomilla/canal30loncomilla.m3u8
#EXTINF:-1 tvg-id="1430" tvg-name="Classic Channel" tvg-logo="https://i2.paste.pics/d2ece12bb549ab394f008dd5415ebbbf.png", Classic Channel * | CL
https://paneltv.online:1936/8046/8046/playlist.m3u8
#EXTINF:-1 tvg-id="1428" tvg-name="Castro Municipio TV" tvg-logo="https://i2.paste.pics/0e74cd22caf321b8f0c13583ab55f1d7.png", Castro Municipio TV * | CL
https://videostream.chileservidores.com:8081/chiloefour/index.m3u8
#EXTINF:-1 tvg-id="1427" tvg-name="TV Provincial" tvg-logo="https://i2.paste.pics/e04ebf765005c8e9ef9a26ef0c0c1134.png", TV Provincial * | CL
https://v4.tustreaming.cl/limachemovil/index.m3u8
#EXTINF:-1 tvg-id="1422" tvg-name="Radio Rosa FM" tvg-logo="https://i2.paste.pics/778a5721e70978104e5dd47376775293.png", Radio Rosa FM * | CL
https://tv.streaming-chile.com:1936/rosafm/rosafm/playlist.m3u8
#EXTINF:-1 tvg-id="1421" tvg-name="13 Kids" tvg-logo="https://i2.paste.pics/fe14daf029d32fcab7f6305dc2e7a86e.png", 13 Kids * | CL
https://origin.dpsgo.com/ssai/event/LhHrVtyeQkKZ-Ye_xEU75g/master.m3u8
#EXTINF:-1 tvg-id="1416" tvg-name="TV y TV" tvg-logo="https://i2.paste.pics/5f5e3edcd542883e19bd1c0c59b59fad.png", TV y TV * | CL
https://Stmv1.zcasthn.com.br/tvytv/tvytv/playlist.m3u8
#EXTINF:-1 tvg-id="1418" tvg-name="Chile Visual TV" tvg-logo="https://i2.paste.pics/9433332812f73a536d41248ff05a903c.png", Chile Visual TV * | CL
https://stmv2.zcasthn.com.br/streamlatino/streamlatino/playlist.m3u8
#EXTINF:-1 tvg-id="1415" tvg-name="Radio Stefania" tvg-logo="https://i2.paste.pics/72aa914d751b131216d9c3880ea3556b.png", Radio Stefania * | CL
https://Stmv1.zcasthn.com.br/franzvalenzuela/franzvalenzuela/playlist.m3u8
#EXTINF:-1 tvg-id="1408" tvg-name="Radio Continente FM" tvg-logo="https://i2.paste.pics/793d78275b250f7d1919c5cea6febd95.png", Radio Continente FM * | CL
https://streamlov.alsolnet.com/continentefm/live/playlist.m3u8
#EXTINF:-1 tvg-id="1407" tvg-name="Milodon TV" tvg-logo="https://i2.paste.pics/11978fb15e78b24dc2c7cd78342f3c9f.png", Milodon TV * | CL
https://oracle.streaminghd.cl/milodontvenvivo/milodontvenvivo/playlist.m3u8
#EXTINF:-1 tvg-id="1404" tvg-name="Canal Noticias Colchagua" tvg-logo="https://i2.paste.pics/e2bc4cbe5aab410fe3b44148f01c5877.png", Canal Noticias Colchagua * | CL
https://oracle.streaminghd.cl:443/cncmedia/cncmedia/playlist.m3u8
#EXTINF:-1 tvg-id="1402" tvg-name="Canal Pais" tvg-logo="https://pbs.twimg.com/profile_images/1603428853350907904/-UBQCAHz_400x400.jpg", Canal Pais * | CL
https://unlimited1-cl-isp.dps.live/canalpais/canalpais.smil/playlist.m3u8
#EXTINF:-1 tvg-id="1396" tvg-name="Alerce TV" tvg-logo="https://i2.paste.pics/3fc7065e88b283066dc23173d5e21e2b.png", Alerce TV * | CL
https://s1.tvdatta.com:3384/live/canal20tvlive.m3u8
#EXTINF:-1 tvg-id="1393" tvg-name="La Melinkana TV" tvg-logo="https://i.paste.pics/d97e9b3a023839600a489348ed5f62df.png", La Melinkana TV * | CL
https://v1.tustreaming.cl/melinkana/index.m3u8
#EXTINF:-1 tvg-id="1330" tvg-name="Sureña TV" tvg-logo="https://i.paste.pics/61bca781a30ae3b52da01e9d47706654.png", Sureña TV * | CL
http://170.247.204.26:8081/wircom/surena/playlist.m3u8
#EXTINF:-1 tvg-id="1391" tvg-name="En la Noticia" tvg-logo="https://i.paste.pics/5bce4a819c49af17fd39a8d0f4a697e3.png", En la Noticia * | CL
https://videostream.chileservidores.com:8081/chiloetwo/index.m3u8
#EXTINF:-1 tvg-id="1389" tvg-name="Radio Acogida" tvg-logo="https://i.paste.pics/7cdfc8ed9e16ea9a007b84b7fe63c1de.png", Radio Acogida * | CL
https://videostream.chileservidores.com:8081/chiloethree/index.m3u8
#EXTINF:-1 tvg-id="1385" tvg-name="Veo TV" tvg-logo="https://i.paste.pics/801cf9a8ebc73581ca137bde012b80e1.png", Veo TV * | CL
https://oracle.streaminghd.cl/eduardo555/eduardo555/playlist.m3u8
#EXTINF:-1 tvg-id="1383" tvg-name="ATV Valdivia" tvg-logo="https://i.paste.pics/6270159fb81ff23a4e83a53a403ac21b.png", ATV Valdivia * | CL
https://6362ca6f1fc28.streamlock.net/8028/8028/playlist.m3u8
#EXTINF:-1 tvg-id="1378" tvg-name="Canal 5 Los Vilos" tvg-logo="https://i.paste.pics/6c8a3b10f42e59d51572e400faa0ed1d.png", Canal 5 Los Vilos * | CL
https://oracle.streaminghd.cl:443/canal5/canal5/playlist.m3u8
#EXTINF:-1 tvg-id="1377" tvg-name="Cauquenesnet TV" tvg-logo="https://i.paste.pics/c68d2bbc21789bd5b1ddc5353b4637ba.png", Cauquenesnet TV * | CL
https://vdo.miserver.pro:3102/stream/play.m3u8
#EXTINF:-1 tvg-id="1320" tvg-name="TV PRIME Movie" tvg-logo="https://i.paste.pics/9589e4ec10d95b3d940aa71538bc8afb.png", TV PRIME Movie * | CL
https://tv.clientetvstudio.net:3489/live/tvprimecllive.m3u8
#EXTINF:-1 tvg-id="1318" tvg-name="Los Sauces TV" tvg-logo="https://i.paste.pics/317980a53f40f246ec8a386f10c2fe9e.png", Los Sauces TV * | CL
http://live.mundogo.cl/mundo/LossaucesTV/index.m3u8
#EXTINF:-1 tvg-id="1314" tvg-name="Unetev" tvg-logo="https://i.paste.pics/a727f8da3132d12d50dd2f1c92b6a9a0.png", Unetev * | CL
https://v2.tustreaming.cl/unetev/index.m3u8
#EXTINF:-1 tvg-id="1313" tvg-name="Radio Edelweiss" tvg-logo="https://i.paste.pics/75cb3709ded84a16fb920d6eacfd7261.png", Radio Edelweiss * | CL
https://streamdemo.dyndns.biz/hls/edelweiss_src.m3u8
#EXTINF:-1 tvg-id="1309" tvg-name="Santa Cruz FM" tvg-logo="https://i.paste.pics/2ff8e62d475f86b1685957f0ef2c821b.png", Santa Cruz FM * | CL
https://unlimited1-cl-isp.dps.live/rcruz/rcruz.smil/playlist.m3u8
#EXTINF:-1 tvg-id="1302" tvg-name="Telecauquenes" tvg-logo="https://i2.paste.pics/fd357045a21ccd1337a714a77aab254d.png", Telecauquenes * | CL
https://vdo.panelstreaming.live:3469/live/telecauqueneslive.m3u8
#EXTINF:-1 tvg-id="1299" tvg-name="Lanco TV" tvg-logo="https://i2.paste.pics/cab8424cb00058c514d0d5cd1aaaf9e2.png", Lanco TV * | CL
https://lancotv.ngrok.app/hls/stream.m3u8
#EXTINF:-1 tvg-id="1293" tvg-name="TVM" tvg-logo="https://i2.paste.pics/46d2ec568b713450ec11771e49f2dfdf.png", TVM * | CL
https://tls-cl.cdnz.cl/tvm/live/playlist.m3u8
#EXTINF:-1 tvg-id="1284" tvg-name="Autonoma Radio" tvg-logo="https://i2.paste.pics/ab3b4f72e0708cab3f568772f2f6bcac.png", Autonoma Radio * | CL
https://stream.wifispeed.cl:3033/hybrid/play.m3u8
#EXTINF:-1 tvg-id="1282" tvg-name="Galactika Media" tvg-logo="https://i2.paste.pics/334ded887e14d80c7f01e985aa2e521a.png", Galactika Media * | CL
https://oracle.streaminghd.cl/galactika/galactika/playlist.m3u8
#EXTINF:-1 tvg-id="1403" tvg-name="Red Circle" tvg-logo="https://i2.paste.pics/4fba878332fd8719df992619f751b2dd.png", Red Circle * | CL
https://5e3483cba9114.streamlock.net:443/8016/8016/playlist.m3u8
#EXTINF:-1 tvg-id="1181" tvg-name="Freestyledjs" tvg-logo="https://i2.paste.pics/d7192184924772147bbeed4fffde3680.png", Freestyledjs * | CL
https://freestyledjs.ddns.net/hls/stream.m3u8
#EXTINF:-1 tvg-id="1397" tvg-name="House music TV" tvg-logo="https://i2.paste.pics/dd681ddc5d29baacd3d2c2935b51e8ef.png", House music TV * | CL
https://paneltv.net:3767/stream/play.m3u8
#EXTINF:-1 tvg-id="1172" tvg-name="Radio Q" tvg-logo="https://i2.paste.pics/36610b128075b57027afdf3e49842a97.png", Radio Q * | CL
https://panel.miplay.cl:8081/radioq/index.m3u8
#EXTINF:-1 tvg-id="1166" tvg-name="Dance FM" tvg-logo="https://i2.paste.pics/ff3e1e1045a1968dcdbcda3824a94eb3.png", Dance FM * | CL
https://5eaccbab48461.streamlock.net:1936/dancefm_1/dancefm_1/playlist.m3u8
#EXTINF:-1 tvg-id="1128" tvg-name="Solobailalo TV" tvg-logo="https://i2.paste.pics/d96b857f73a9ce281cdef4e11766eddd.png", Solobailalo TV * | CL
https://5ff3d9babae13.streamlock.net:443/8000/8000/playlist.m3u8
#EXTINF:-1 tvg-id="1087" tvg-name="Opinionsur TV" tvg-logo="https://i2.paste.pics/bbb0373472ad737d7f75d40d9c3d1839.png", Opinionsur TV * | CL
https://stmv2.zcasthn.com.br/opinionsur/opinionsur/playlist.m3u8
#EXTINF:-1 tvg-id="432" tvg-name="HiperTV" tvg-logo="https://lh3.googleusercontent.com/-YUlLyA8Pk7Y/X5n9AMtVNNI/AAAAAAAA61E/UkiOjRsCTWMa94h4g35uC424D4E_wU_2gCK8BGAsYHg/s0/2020-10-28.png", HiperTV * | CL
https://stmv2.zcasthn.com.br/hiperconectados/hiperconectados/playlist.m3u8
#EXTINF:-1 tvg-id="1005" tvg-name="Onda Radio TV" tvg-logo="https://i2.paste.pics/791d996af084b58748f6af996631f28b.png", Onda Radio TV * | CL
https://tv.streaming-chile.com:1936/ondaradio/ondaradio/playlist.m3u8
#EXTINF:-1 tvg-id="1331" tvg-name="Super TV" tvg-logo="https://i.paste.pics/61260e061568a10afcb0dcdf499311a8.png", Super TV * | CL
https://stmv2.zcasthn.com.br/supertv/supertv/playlist.m3u8
#EXTINF:-1 tvg-id="484" tvg-name="Infinita TV Premium" tvg-logo="https://lh3.googleusercontent.com/-gtOJEZDXT74/X6ial-IEvuI/AAAAAAAA7HE/DVodKb8gbr4UYli0KdKGZf9Bfz4WrXqwQCK8BGAsYHg/s0/2020-11-08.png", Infinita TV Premium | US
https://s2.tvdatta.com:3753/hybrid/play.m3u8
#EXTINF:-1 tvg-id="482" tvg-name="Frecuencia Musical TV" tvg-logo="https://lh3.googleusercontent.com/-t4L8hNzWCqg/X5DE85fJ91I/AAAAAAAA6nc/obm_y2scE0ULVHohSM5KdnQEkvMjOYEOACK8BGAsYHg/s0/2020-10-21.png", Frecuencia Musical TV | US
https://s2.tvdatta.com:3307/hybrid/play.m3u8
#EXTINF:-1 tvg-id="1074" tvg-name="Eva Retro" tvg-logo="https://i2.paste.pics/1fac7deeb4ca257162cde40abd006d9d.png", Eva Retro | CL
https://stmv2.zcasthn.com.br/evaretro/evaretro/playlist.m3u8
#EXTINF:-1 tvg-id="1015" tvg-name="PlanetaTV Kids" tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png", PlanetaTV Kids | CL
https://tls-cl.cdnz.cl/planetatvkids/live/playlist.m3u8
#EXTINF:-1 tvg-id="45" tvg-name="NTV" tvg-logo="https://i2.paste.pics/49116db7b95befdabb207ccbd2bb94b6.png", NTV | CL
https://marine2.miplay.cl/ntv/playlist.m3u8
#EXTINF:-1 tvg-id="64" tvg-name="Pintana TV" tvg-logo="https://lh3.googleusercontent.com/-Mthb4RQqfgU/XxyJnpes1QI/AAAAAAAA3Vo/Gmg_Wcr0Gv80KzXGNa3Z91BEea2r4ID0wCK8BGAsYHg/s0/2020-07-25.png", Pintana TV | CL
http://live.mundogo.cl/mundo/Pintanatv/index.m3u8
#EXTINF:-1 tvg-id="66" tvg-name="Pichilemu TV" tvg-logo="https://lh3.googleusercontent.com/-cLe1X-6sOWM/XqtZ-zhsGYI/AAAAAAAAydY/AFIEb1ZL-HEceewpnqr3m9QxC3_3_KzIwCK8BGAsYHg/s0/2020-04-30.png", Pichilemu TV | CL
https://5ff3d9babae13.streamlock.net/8028/8028/playlist.m3u8
#EXTINF:-1 tvg-id="65" tvg-name="El 3 de Conce" tvg-logo="https://lh3.googleusercontent.com/--o0_vpNuzz4/XqsNGuGSUEI/AAAAAAAAyck/t0v8luwsOWAEbNMHeaIvlrVCQrYyXLJXwCK8BGAsYHg/s0/2020-04-30.png", El 3 de Conce | CL
https://oracle.streaminghd.cl/8016/8016/playlist.m3u8
#EXTINF:-1 tvg-id="1001" tvg-name="La Granja TV" tvg-logo="https://i2.paste.pics/e5d61855b016df20f253d6b5b9ad8501.png", La Granja TV | CL
https://oracle.streaminghd.cl/8126/8126/playlist.m3u8
#EXTINF:-1 tvg-id="67" tvg-name="Exprezion TV" tvg-logo="https://i2.paste.pics/3a66236cd4d5f46b440f80ccc87129f1.png", Exprezion TV | CL
https://vdochile.com:3774/live/cnrhiawklive.m3u8
#EXTINF:-1 tvg-id="69" tvg-name="G Vision" tvg-logo="https://i2.paste.pics/d091b495e5432ae25bfab9dd4624cc6d.png", G Vision | CL
https://oracle.streaminghd.cl/gmistral/gmistral/playlist.m3u8
#EXTINF:-1 tvg-id="881" tvg-name="Wapp" tvg-logo="https://i2.paste.pics/08e536d8b5644b333832b035daeea1a9.png", Wapp | CL
https://redirector.rudo.video/hls-video/339f69c6122f6d8f4574732c235f09b7683e31a5/wapptv/wapptv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="790" tvg-name="La Red" tvg-logo="https://lh3.googleusercontent.com/-w3BIhImK3PM/YKLYqeFgJlI/AAAAAAABCXk/cJQItXH6BeII2A19RmryccG1o54twOSvACK8BGAsYHg/s512/2021-05-17.jpg", La Red | CL
https://unlimited1-cl-isp.dps.live/lared/lared.smil/playlist.m3u8
#EXTINF:-1 tvg-id="458" tvg-name="TV+" tvg-logo="https://lh3.googleusercontent.com/-OyqOBTEx-1E/XyA3AZwIgTI/AAAAAAAA3jQ/aDMZaLOx3mQuXBqjDKAF0X7dxExKFzawACK8BGAsYHg/s0/2020-07-28.png", TV+ | CL
https://mdstrm.com/live-stream-playlist/5c0e8b19e4c87f3f2d3e6a59.m3u8
#EXTINF:-1 tvg-id="1243" tvg-name="TVMas2" tvg-logo="https://i2.paste.pics/f37083fc717ad290191a24b61ee7eec7.png", TVMas2 | CL
https://marine2.miplay.cl/tateti/playlist.m3u8
#EXTINF:-1 tvg-id="1437" tvg-name="TVN3" tvg-logo="https://i2.paste.pics/2ba64b67051e159ff48060da1a687fd0.png", TVN3 | CL
https://mdstrm.com/live-stream-playlist/5653641561b4eba30a7e4929.m3u8
#EXTINF:-1 tvg-id="452" tvg-name="TVN" tvg-logo="https://lh3.googleusercontent.com/-ETprzEeH-JY/XbCxYXbNQUI/AAAAAAAArkw/zQxemFrwNjAbMoyByyr_sesnZ8QKgap-QCK8BGAsYHg/s0/2019-10-23.png", TVN | CL
https://panel.miplay.cl:8081/tvn/index.m3u8
#EXTINF:-1 tvg-id="453" tvg-name="TVN - 24h" tvg-logo="https://lh3.googleusercontent.com/-ETprzEeH-JY/XbCxYXbNQUI/AAAAAAAArkw/zQxemFrwNjAbMoyByyr_sesnZ8QKgap-QCK8BGAsYHg/s0/2019-10-23.png", TVN - 24h | CL
http://mdstrm.com/live-stream-playlist-v/5346f5f2c1e6f5810b5b9df0.m3u8
#EXTINF:-1 tvg-id="454" tvg-name="TVN - Reuters" tvg-logo="https://lh3.googleusercontent.com/-ETprzEeH-JY/XbCxYXbNQUI/AAAAAAAArkw/zQxemFrwNjAbMoyByyr_sesnZ8QKgap-QCK8BGAsYHg/s0/2019-10-23.png", TVN - Reuters | CL
https://mdstrm.com/live-stream-playlist/5346f657c1e6f5810b5b9df3.m3u8
#EXTINF:-1 tvg-id="455" tvg-name="Mega" tvg-logo="https://lh3.googleusercontent.com/-xqKe__ypgDY/XnzFn9NLnbI/AAAAAAAAxMU/2Wj9IOC1LaQxtJGRzcVOTrQWxP9z3RgPwCK8BGAsYHg/s0/2020-03-26.png", Mega | CL
https://unlimited1-cl-isp.dps.live/mega/mega.smil/playlist.m3u8
#EXTINF:-1 tvg-id="456" tvg-name="CHV" tvg-logo="https://lh3.googleusercontent.com/-8bGAVjbmdQo/Xlxxov1VBvI/AAAAAAAAwhU/ZO0JPjy4MaI7lGElqofGQbkOr52Hk1nUQCK8BGAsYHg/s0/2020-03-01.png", CHV | CL
https://panel.miplay.cl:8081/chilevision/index.m3u8
#EXTINF:-1 tvg-id="1193" tvg-name="13 Cultura" tvg-logo="https://i2.paste.pics/c04bad5b9339444b2acb44912d04b0a7.png", 13 Cultura | CL
https://origin.dpsgo.com/ssai/event/GI-9cp_bT8KcerLpZwkuhw/master.m3u8
#EXTINF:-1 tvg-id="979" tvg-name="13 Entretencion" tvg-logo="https://i2.paste.pics/a59418e1a9cb4068b83345be503f722c.png", 13 Entretencion | CL
https://origin.dpsgo.com/ssai/event/BBp0VeP6QtOOlH8nu3bWTg/master.m3u8
#EXTINF:-1 tvg-id="1033" tvg-name="13 Prime" tvg-logo="https://i2.paste.pics/544548398fcd92bf2db73e9d0fcddf5f.png", 13 Prime | CL
https://origin.dpsgo.com/ssai/event/p4mmBxEzSmKAxY1GusOHrw/master.m3u8
#EXTINF:-1 tvg-id="1032" tvg-name="13 Teleseries" tvg-logo="https://i2.paste.pics/863aea4fb1445b58f89afc7c692ed509.png", 13 Teleseries | CL
https://origin.dpsgo.com/ssai/event/f4TrySe8SoiGF8Lu3EIq1g/master.m3u8
#EXTINF:-1 tvg-id="1446" tvg-name="13 Festival" tvg-logo="https://i2.paste.pics/e0fd4b83e18449e31fca784e9ed7df03.png", 13 Festival | CL
https://origin.dpsgo.com/ssai/event/Nftd0fM2SXasfDlRphvUsg/master.m3u8
#EXTINF:-1 tvg-id="1447" tvg-name="13 Humor" tvg-logo="https://i2.paste.pics/07b96c9485f731aafdc798a406320c94.png", 13 Humor | CL
https://origin.dpsgo.com/ssai/event/cKWySXKgSK-SzlJmESkOWw/master.m3u8
#EXTINF:-1 tvg-id="1448" tvg-name="13 Realities" tvg-logo="https://i2.paste.pics/22b32c8870b49a5fad925b53b7485aa5.png", 13 Realities | CL
https://origin.dpsgo.com/ssai/event/g7_JOM0ORki9SR5RKHe-Kw/master.m3u8
#EXTINF:-1 tvg-id="1017" tvg-name="U Chile TV" tvg-logo="https://i2.paste.pics/2336e0cef4642213124e4192f019ccfd.png", U Chile TV | CL
https://unlimited1-cl-isp.dps.live/uchiletv/uchiletv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="54" tvg-name="UCV" tvg-logo="https://i2.paste.pics/87c6e7bb59c33bfab71e154181716e90.png", UCV | CL
https://unlimited2-cl-isp.dps.live/ucvtv2/ucvtv2.smil/playlist.m3u8
#EXTINF:-1 tvg-id="1152" tvg-name="UCV 2" tvg-logo="https://i2.paste.pics/87c6e7bb59c33bfab71e154181716e90.png", UCV 2 | CL
https://unlimited10-cl.dps.live/ucvtveventos/ucvtveventos.smil/playlist.m3u8
#EXTINF:-1 tvg-id="53" tvg-name="STGO.TV" tvg-logo="https://lh3.googleusercontent.com/-02uPrXnaZuY/Xk_sz_MIaEI/AAAAAAAAwVo/wwJD8vjW0ScrhAp-BVHSElUKIOUN_CqJgCK8BGAsYHg/s0/2020-02-21.png", STGO.TV | CL
https://stv.janus.cl/playlist/stream.m3u8
#EXTINF:-1 tvg-id="55" tvg-name="Campus TV" tvg-logo="https://lh3.googleusercontent.com/-pW3OtBR0N4A/Xl5Y7H0fi7I/AAAAAAAAwjg/gdqG0LJ8DP42Md2rGIh2qHs1vNF7AYopACK8BGAsYHg/s0/2020-03-03.png", Campus TV | CL
https://unlimited1-cl-isp.dps.live/campustv/campustv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="56" tvg-name="TVU" tvg-logo="https://i2.paste.pics/a399853d40d3e97454b0e04d423d47a9.png", TVU | CL
https://unlimited1-cl-isp.dps.live/tvu/tvu.smil/playlist.m3u8
#EXTINF:-1 tvg-id="58" tvg-name="Universidad Autonoma TV" tvg-logo="https://i2.paste.pics/4f091f5c6fccbcd410cdc98e452bcb3b.png", Universidad Autonoma TV | CL
https://unlimited1-cl-isp.dps.live/uatv/uatv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="802" tvg-name="TV UCT" tvg-logo="https://lh3.googleusercontent.com/-b5STpV7frCc/YHxqEk9aHxI/AAAAAAABBqs/CXWLe5jLyfgXXBgOSzhqb5sSUpn_A6K8ACK8BGAsYHg/s512/2021-04-18.png", TV UCT | CL
https://unlimited2-cl-isp.dps.live/uct/uct.smil/playlist.m3u8
#EXTINF:-1 tvg-id="57" tvg-name="Ufrovision" tvg-logo="https://lh3.googleusercontent.com/-fqdCC1PQsjQ/XbC1rzkVu6I/AAAAAAAArmE/eB5FcH8qqZkgXsnzuStsuYTohDPRfNMdQCK8BGAsYHg/s0/2019-10-23.png", Ufrovision | CL
https://mdstrm.com/live-stream-playlist/580a80b827de0ae2086ea6d8.m3u8
#EXTINF:-1 tvg-id="59" tvg-name="U Los Lagos" tvg-logo="https://lh3.googleusercontent.com/-mt7LVY0X3kE/XlBdyl_hwFI/AAAAAAAAwW0/vqFU9wiyuawEn3E39ERyYaOkVZ3TVterACK8BGAsYHg/s0/2020-02-21.png", U Los Lagos | CL
http://tv.ulagos.cl/web/live.m3u8
#EXTINF:-1 tvg-id="60" tvg-name="UMAG TV" tvg-logo="https://lh3.googleusercontent.com/-0NppS8zHXRU/XbC2cN4qlAI/AAAAAAAArmY/g4gYZKyGhHglj_lyBKSaRw-tBMgzO0NmACK8BGAsYHg/s0/2019-10-23.png", UMAG TV | CL
https://tls-cl.cdnz.cl/umag1/ngrp:live_all/playlist.m3u8
#EXTINF:-1 tvg-id="61" tvg-name="UMAG TV 2" tvg-logo="https://lh3.googleusercontent.com/-0NppS8zHXRU/XbC2cN4qlAI/AAAAAAAArmY/g4gYZKyGhHglj_lyBKSaRw-tBMgzO0NmACK8BGAsYHg/s0/2019-10-23.png", UMAG TV 2 | CL
https://tls-cl.cdnz.cl/umag2/live/playlist.m3u8
#EXTINF:-1 tvg-id="62" tvg-name="UesTV" tvg-logo="https://i2.paste.pics/360c8f7659accc54b1013b0b2b7669b6.png", UesTV | CL
https://tls-cl.cdnz.cl/uestv/live/playlist.m3u8
#EXTINF:-1 tvg-id="445" tvg-name="Camara de Diputados" tvg-logo="https://i2.paste.pics/8ac54ede0184c4fd9e872231a6d673b3.png", Camara de Diputados | CL
https://tls-cl.cdnz.cl/camara/live/playlist.m3u8
#EXTINF:-1 tvg-id="444" tvg-name="TV Senado" tvg-logo="https://i2.paste.pics/ee6b562807f06f0139f28cd160a82a8f.png", TV Senado | CL
https://janus-tv-ply.senado.cl/playlist/playlist.m3u8
#EXTINF:-1 tvg-id="798" tvg-name="Cultura Online" tvg-logo="https://i2.paste.pics/a64816b3950330d38cae04c477929f3f.png", Cultura Online | CL
https://v1.tustreaming.cl:19360/culturaonline/culturaonline.m3u8
#EXTINF:-1 tvg-id="442" tvg-name="CEAC TV" tvg-logo="https://lh3.googleusercontent.com/-Efv-00P_dR0/YLzynagSe1I/AAAAAAABCvM/yOhOzOxVWGwan9Xwgg-zpQzFK8WGJo12ACJEEGAsYHg/s512/2021-06-06.png", CEAC TV | CL
https://videostream.chileservidores.com:8081/ceactv/index.m3u8
#EXTINF:-1 tvg-id="415" tvg-name="Puranoticia" tvg-logo="https://i2.paste.pics/3dcc431073eca367aef2011ebdd26387.png", Puranoticia | CL
https://pnt.janusmedia.tv/hls/pnt.m3u8
#EXTINF:-1 tvg-id="448" tvg-name="TVN 24 Horas" tvg-logo="https://lh3.googleusercontent.com/-BbCIUKB7XJE/XbRLHyJVKcI/AAAAAAAArtU/ipNQiS3rttYIRuK2nKzy_oocBx0x4TOLACK8BGAsYHg/s0/2019-10-26.png", TVN 24 Horas | CL
https://mdstrm.com/live-stream-playlist/57d1a22064f5d85712b20dab.m3u8
#EXTINF:-1 tvg-id="1153" tvg-name="CHV Noticias" tvg-logo="https://i2.paste.pics/5bf0db1521a041595f387a893ab6512b.png", CHV Noticias | CL
https://redirector.rudo.video/hls-video/10b92cafdf3646cbc1e727f3dc76863621a327fd/chvn/chvn.smil/playlist.m3u8
#EXTINF:-1 tvg-id="1054" tvg-name="T13" tvg-logo="https://i2.paste.pics/38adedd4130272be03ef804c5eaf067e.png", T13 | CL
https://redirector.rudo.video/hls-video/10b92cafdf3646cbc1e727f3dc76863621a327fd/t13/t13.smil/playlist.m3u8
#EXTINF:-1 tvg-id="449" tvg-name="Meganoticias" tvg-logo="https://lh3.googleusercontent.com/-42YG0jZhyGg/XbC0Ua8FlLI/AAAAAAAArlw/S2qhcWOdFuskqCondIatbmxSfLMvgj9owCK8BGAsYHg/s0/2019-10-23.png", Meganoticias | CL
https://mdstrm.com/live-stream-playlist/561430ae330428c223687e1e.m3u8
#EXTINF:-1 tvg-id="1239" tvg-name="Señal Mediabanco" tvg-logo="https://i2.paste.pics/65df3a54b748e91cb8081bb17dee405b.png", Señal Mediabanco | CL
https://unlimited1-cl-isp.dps.live/mediabanco/mediabanco.smil/playlist.m3u8
#EXTINF:-1 tvg-id="434" tvg-name="Teletón TV" tvg-logo="https://lh3.googleusercontent.com/-RsMjPwaqZeE/XlMNZlWurnI/AAAAAAAAwZ4/RmHs1fZ6XLEEoLl-i_-v_bFmCaNF9AYCQCK8BGAsYHg/s0/2020-02-23.png", Teletón TV | CL
https://mdstrm.com/live-stream-playlist/5d6d5f05a2f6f407b0147965.m3u8
#EXTINF:-1 tvg-id="433" tvg-name="Solo Stand Up" tvg-logo="https://i2.paste.pics/70c9436a7a76e5605616ad21d6cefce6.png", Solo Stand Up | CL
https://paneltv.online:1936/8116/8116/playlist.m3u8
#EXTINF:-1 tvg-id="1020" tvg-name="Caracola TV" tvg-logo="https://i.paste.pics/d4c6f55f55efbda0faf59a7835b568b7.png", Caracola TV | CL
https://wifispeed.trapemn.tv:1936/comunales/caracola-tv/playlist.m3u8
#EXTINF:-1 tvg-id="1022" tvg-name="EGM Channel" tvg-logo="https://i2.paste.pics/c4059d4b2eb7b24f7208a93b05312995.png", EGM Channel | CL
https://paneltv.online:1936/8186/8186/playlist.m3u8
#EXTINF:-1 tvg-id="986" tvg-name="Ziza TV" tvg-logo="https://i2.paste.pics/129d176f2117a7985aefe938703c34a5.png", Ziza TV | CL
https://v2.tustreaming.cl/zizatv/index.m3u8
#EXTINF:-1 tvg-id="895" tvg-name="Radio Lado Oscuro TV" tvg-logo="https://i.paste.pics/2187dd0bf17bc4d9120ec79f47ad0145.png", Radio Lado Oscuro TV | CL
https://stmv2.zcasthn.com.br/cattotv/cattotv/playlist.m3u8
#EXTINF:-1 tvg-id="910" tvg-name="Raices Arabes TV" tvg-logo="https://i2.paste.pics/632a740768764ab4dd8208568ae61b01.png", Raices Arabes TV | CL
https://tv.streaming-chile.com:1936/raicesarabestv/raicesarabestv/playlist.m3u8
#EXTINF:-1 tvg-id="467" tvg-name="TV Pop" tvg-logo="https://lh3.googleusercontent.com/-XpZwlTaVD70/X5jAxBIjQnI/AAAAAAAA6ys/IoG_B-D9vCwSs4nNVTr2tK_hz-rI7VXCgCK8BGAsYHg/s0/2020-10-27.jpg", TV Pop | CL
https://v4.tustreaming.cl/poptv/index.m3u8
#EXTINF:-1 tvg-id="438" tvg-name="Tevex" tvg-logo="https://i2.paste.pics/37360245ae2194a41c9eaca39c5e1ec0.png", Tevex | CL
https://v2.tustreaming.cl/tevex/index.m3u8
#EXTINF:-1 tvg-id="436" tvg-name="TV Salud" tvg-logo="https://lh3.googleusercontent.com/-Xv_aL34GjFE/XdksOdTnS9I/AAAAAAAAsTs/_WBt4UNy428CuU5dtVeJQZzh4EpQREnDwCK8BGAsYHg/s0/2019-11-23.png", TV Salud | CL
https://panel.miplay.cl:8081/tvsalud/index.m3u8
#EXTINF:-1 tvg-id="435" tvg-name="Chile Channel" tvg-logo="https://lh3.googleusercontent.com/-DVzBnJJGsHM/Xzh-ooBVTnI/AAAAAAAA4dk/Gl6kLefOEM0C6UdyAwM1__ki_GZ7OGYQACK8BGAsYHg/s0/2020-08-15.png", Chile Channel | CL
https://v2.tustreaming.cl/chilechannel/index.m3u8
#EXTINF:-1 tvg-id="437" tvg-name="Campo Abierto TV" tvg-logo="https://i2.paste.pics/44c5f4becc68ee877580eed639645110.png", Campo Abierto TV | CL
https://v1.tustreaming.cl:19360/campoabierto/campoabierto.m3u8
#EXTINF:-1 tvg-id="1111" tvg-name="Canal Turismo Travel TV" tvg-logo="https://i2.paste.pics/50d8cde45e0c3efff3bc3fb05c5da6d1.png", Canal Turismo Travel TV | CL
https://vdo.panelstreaming.live:3740/live/turismotravellive.m3u8
#EXTINF:-1 tvg-id="1398" tvg-name="La Voz De Los Que Sobran TV" tvg-logo="https://i2.paste.pics/f67aa623e84b5841c4a6f655030491b2.png", La Voz De Los Que Sobran TV | CL
https://unlimited1-cl-isp.dps.live/lvdlqs/lvdlqs.smil/playlist.m3u8
#EXTINF:-1 tvg-id="311" tvg-name="Arica TV" tvg-logo="https://lh3.googleusercontent.com/-RSJgui5q1ag/YLwPYdKEv9I/AAAAAAABCsk/eI3D7-S2c7gaqLgRGewyN-pHzdzCghwIQCJEEGAsYHg/s512/2021-06-05.jpg", Arica TV | CL
https://5eaccbab48461.streamlock.net:1936/8002/8002/playlist.m3u8
#EXTINF:-1 tvg-id="312" tvg-name="Cappissima Multimedial TV" tvg-logo="https://lh3.googleusercontent.com/-uQdRQP7JvuA/XxzEqR_Af-I/AAAAAAAA3XQ/7CuKTSW5TYckPnJr5bxkDTtIYB6zy6lHACK8BGAsYHg/s0/2020-07-25.png", Cappissima Multimedial TV | CL
https://oracle.streaminghd.cl/cappissima/cappissima/playlist.m3u8
#EXTINF:-1 tvg-id="313" tvg-name="Puerta Norte" tvg-logo="https://lh3.googleusercontent.com/-HTLI7n2K50M/XhUge0dM_xI/AAAAAAAAvC4/vbnHWF_eheMVlaLxiXkRCDpAboN8_iiNgCK8BGAsYHg/s0/2020-01-07.png", Puerta Norte | CL
https://panel.tvstream.cl:1936/8030/8030/playlist.m3u8
#EXTINF:-1 tvg-id="314" tvg-name="Iquique TV" tvg-logo="https://lh3.googleusercontent.com/-pK0q2sl6njA/YLvYUotCF_I/AAAAAAABCrw/npXWp5Y_4Q83AVldxCKNFaadcbbxNV5cgCJEEGAsYHg/s512/2021-06-05.png", Iquique TV | CL
https://marine2.miplay.cl/arcatel/iquiquetv720/video.m3u8
#EXTINF:-1 tvg-id="1136" tvg-name="RTC Television" tvg-logo="https://i2.paste.pics/9a911e6ad11b7f64a845624942b2a241.png", RTC Television | CL
https://streams.skarnetchile.com/Regionales/RTC_Iquique/playlist.m3u8
#EXTINF:-1 tvg-id="71" tvg-name="Antofagasta TV" tvg-logo="https://lh3.googleusercontent.com/-37Qp1y0Froc/YLwMLWKi5ZI/AAAAAAABCr8/VATYbRiDFL4hNT7IqD8DL3tC8Y8QeUCjgCJEEGAsYHg/s512/2021-06-05.png", Antofagasta TV | CL
https://unlimited1-cl-isp.dps.live/atv/atv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="316" tvg-name="LRP Television" tvg-logo="https://lh3.googleusercontent.com/-RRqPPQ9jumM/X-sl8HVr3-I/AAAAAAAA8mk/er1v71iGwF06JQABRlSTDFwItzb7OVcMwCK8BGAsYHg/s0/2020-12-29.png", LRP Television | CL
https://v2.tustreaming.cl/lrp/index.m3u8
#EXTINF:-1 tvg-id="1241" tvg-name="TV Norte Digital" tvg-logo="https://i2.paste.pics/e602eadb770a82f88a1f9496dc40850e.png", TV Norte Digital | CL
https://v4.tustreaming.cl/tvnortedigital/index.m3u8
#EXTINF:-1 tvg-id="317" tvg-name="AM Canal" tvg-logo="https://lh3.googleusercontent.com/-Qbzsb10m8FI/YLwP7qvh82I/AAAAAAABCsw/obyVVlYUAa4YC3XO6ChBaMDvEtV3lAcRQCJEEGAsYHg/s512/2021-06-05.png", AM Canal | CL
https://v2.tustreaming.cl/amtv/index.m3u8
#EXTINF:-1 tvg-id="1375" tvg-name="Televisión Minera del Norte" tvg-logo="https://i.paste.pics/51a69eaf27479aea02bf6a49db3ce8ab.png", Televisión Minera del Norte | CL
https://v1.tustreaming.cl/tmntv/index.m3u8
#EXTINF:-1 tvg-id="72" tvg-name="Holvoet TV" tvg-logo="https://i2.paste.pics/2fb632fb69ae1c422609fdbf6c5a3fb4.png", Holvoet TV | CL
https://unlimited1-cl-isp.dps.live/holvoettv/holvoettv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="319" tvg-name="Atacama Noticias TV" tvg-logo="https://lh3.googleusercontent.com/-l7XXNQYmGAM/XvDpTB0gG5I/AAAAAAAA2Kk/GvD1qftKvhgJszIAP4CbyNkTdKk5h61gQCK8BGAsYHg/s0/2020-06-22.png", Atacama Noticias TV | CL
https://v2.tustreaming.cl/atacamanoticias/index.m3u8
#EXTINF:-1 tvg-id="320" tvg-name="Atacama TV" tvg-logo="https://lh3.googleusercontent.com/-dxfCxjRg3kc/YLwNHipWtxI/AAAAAAABCsE/YVukqdClrtcbM8N2pwv8MJSXGS862L1tgCJEEGAsYHg/s512/2021-06-05.png", Atacama TV | CL
https://v2.tustreaming.cl/atacamatv/index.m3u8
#EXTINF:-1 tvg-id="784" tvg-name="Madero TV" tvg-logo="https://lh3.googleusercontent.com/-2DPpYYaK6ZE/Xl_2gXryGII/AAAAAAAAwlA/Z8jpHccjFuApTI5Z7TPbW7pfTKTn8CKYQCK8BGAsYHg/s0/2020-03-04.png", Madero TV | CL
https://www.cloudscriptdog.cl:19360/madero-video-01/madero-video-01.m3u8
#EXTINF:-1 tvg-id="321" tvg-name="Huasco TV" tvg-logo="https://lh3.googleusercontent.com/-HCPaOQyvUaE/X_G7GCDvs_I/AAAAAAAA81U/R8xLktf5TvMmstApqceTVkQWIKFIv2YawCK8BGAsYHg/s0/2021-01-03.jpg", Huasco TV | CL
https://paneltv.online:1936/8024/8024/playlist.m3u8
#EXTINF:-1 tvg-id="462" tvg-name="Alternativa TV" tvg-logo="https://i.paste.pics/e0710548321c665eacd6536b5fe586b3.png", Alternativa TV | CL
https://5eaccbab48461.streamlock.net:1936/8216/8216/playlist.m3u8
#EXTINF:-1 tvg-id="322" tvg-name="Enfoque Digital TV" tvg-logo="https://lh3.googleusercontent.com/-Qjxyu8Kt5PM/YLwQbxwGefI/AAAAAAABCs4/GhZ1MB88oewmzOGNaDLnV-qanRmEvk9JQCJEEGAsYHg/s512/2021-06-05.png", Enfoque Digital TV | CL
https://5eaccbab48461.streamlock.net:1936/8074/8074/playlist.m3u8
#EXTINF:-1 tvg-id="1235" tvg-name="Origen TV" tvg-logo="https://i2.paste.pics/a260c7d6bedb511c0170f0ea04f3807a.png", Origen TV | CL
https://tv.streaming-chile.com:1936/origentv/origentv/playlist.m3u8
#EXTINF:-1 tvg-id="325" tvg-name="La Popular TV" tvg-logo="https://lh3.googleusercontent.com/-ptduoaJowMY/YLwQztvG1qI/AAAAAAABCtA/TLcpfNWqt38w8iRoqdprT8smUncIJ7AQACJEEGAsYHg/s512/2021-06-05.png", La Popular TV | CL
https://tv.streaming-chile.com:1936/lapopulartv/lapopulartv/playlist.m3u8
#EXTINF:-1 tvg-id="965" tvg-name="Canal 1440 Coquimbo" tvg-logo="https://i2.paste.pics/4670a31c2ccbc5689b6a607819de85c4.png", Canal 1440 Coquimbo | CL
https://stmv2.zcasthn.com.br/coquimboturadio/coquimboturadio/playlist.m3u8
#EXTINF:-1 tvg-id="326" tvg-name="ThemaTV" tvg-logo="https://lh3.googleusercontent.com/-Vgy7Z0vneQQ/YLwRzORmQaI/AAAAAAABCtM/eh_BH_39oIsbSgMiirmbkScqt8MuuFiOgCJEEGAsYHg/s512/2021-06-05.png", ThemaTV | CL
https://unlimited1-cl-isp.dps.live/thema/thema.smil/playlist.m3u8
#EXTINF:-1 tvg-id="327" tvg-name="América TV Chile" tvg-logo="https://lh3.googleusercontent.com/-dAThrFAhCtE/Xx-hwDQF4gI/AAAAAAAA3ic/BsAasEXfeos0_0c7QAorRga7pt2ZC1yfwCK8BGAsYHg/s0/2020-07-27.png", América TV Chile | CL
https://v2.tustreaming.cl:/radioamericatv/index.m3u8
#EXTINF:-1 tvg-id="328" tvg-name="Nortevision" tvg-logo="https://lh3.googleusercontent.com/-Vjrgm0Rr1PI/X3UTx5J44-I/AAAAAAAA6Fs/DMjCrXkJa2EfBj6VLrLghrPnSE2Gt-YbwCK8BGAsYHg/s0/2020-09-30.png", Nortevision | CL
https://live.tvcontrolcp.com:1936/nortevision/nortevision/playlist.m3u8
#EXTINF:-1 tvg-id="1339" tvg-name="Señal 21" tvg-logo="https://i.paste.pics/2ebd12f9d6bbf62d0b5628338cbea0e1.png", Señal 21 | CL
https://tv.clientetvstudio.net:3078/live/senal21tvlive.m3u8
#EXTINF:-1 tvg-id="329" tvg-name="TV Elqui" tvg-logo="https://lh3.googleusercontent.com/-uohfVTgGqkU/XrmveWQiUXI/AAAAAAAA0oQ/Bn7Ad9_7KMY6oMCjD2UJi_cp-8ynyLYSQCK8BGAsYHg/s0/2020-05-11.png", TV Elqui | CL
https://paneltv.online:1936/8056/8056/playlist.m3u8
#EXTINF:-1 tvg-id="335" tvg-name="VTV" tvg-logo="https://lh3.googleusercontent.com/-EcdiT1eMFFg/YLwNYKl0GII/AAAAAAABCsM/_WU-X010dJ80kDrgugAdGtSzIpUNsEgygCJEEGAsYHg/s512/2021-06-05.png", VTV | CL
https://unlimited2-cl-isp.dps.live/vtv/vtv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="1238" tvg-name="Canal LOF Aconcagua" tvg-logo="https://i2.paste.pics/f2f15add4d4cd59bd2c073b868fd6319.png", Canal LOF Aconcagua | CL
https://stmv2.zcasthn.com.br/loftvchile/loftvchile/playlist.m3u8
#EXTINF:-1 tvg-id="334" tvg-name="Canal 74 TeVe" tvg-logo="https://lh3.googleusercontent.com/-TYq4HDXXrKg/X1gGWf_2AWI/AAAAAAAA5ZQ/apHThKFoYGM5Yyixt53Afu2I10KkbCdjwCK8BGAsYHg/s0/2020-09-08.png", Canal 74 TeVe | CL
https://Stmv1.zcasthn.com.br/canal74hd/canal74hd/playlist.m3u8
#EXTINF:-1 tvg-id="332" tvg-name="TV Costa" tvg-logo="https://lh3.googleusercontent.com/-D5lPoIyFycQ/YIxMYNs6ZKI/AAAAAAABCEU/0AcLO4Az3y0wi6son16EjNv2DewCGFk8QCK8BGAsYHg/s512/2021-04-30.jpg", TV Costa | CL
https://tv.clientetvstudio.net:3486/live/costatv1live.m3u8
#EXTINF:-1 tvg-id="1231" tvg-name="Canal Local" tvg-logo="https://i2.paste.pics/b06a3259d7f1a9883bc755647b2ad1bd.png", Canal Local | CL
http://live.mundogo.cl/mundo/Canallocalquillota/index.m3u8
#EXTINF:-1 tvg-id="854" tvg-name="TV Quinta Region" tvg-logo="https://i2.paste.pics/2c015266869a8e163cc42bd1a0808834.png", TV Quinta Region | CL
https://stmv2.zcasthn.com.br/tvquintaregion/tvquintaregion/playlist.m3u8
#EXTINF:-1 tvg-id="995" tvg-name="Vida Nueva TV" tvg-logo="https://i2.paste.pics/7ea06393d56d6c5dee7664a46ae15c29.png", Vida Nueva TV | CL
https://stmv2.zcasthn.com.br/multimediavalparaiso/multimediavalparaiso/playlist.m3u8
#EXTINF:-1 tvg-id="74" tvg-name="Girovisual TV" tvg-logo="https://i2.paste.pics/11ba44db3bc04558ed204a000c65c266.png", Girovisual TV | CL
https://unlimited1-cl-isp.dps.live/girovisual2/girovisual2.smil/playlist.m3u8
#EXTINF:-1 tvg-id="464" tvg-name="Frecuencia 7 Aconcagua" tvg-logo="https://lh3.googleusercontent.com/-48JoMOIDPB4/YEtdWeH5oII/AAAAAAABAkQ/I1dAHLNoz4UVqNH4CL-wr1-O2hrEHD6VgCK8BGAsYHg/s512/2021-03-12.png", Frecuencia 7 Aconcagua | CL
https://v2.tustreaming.cl/frecuencia7/index.m3u8
#EXTINF:-1 tvg-id="1141" tvg-name="Estudio TV" tvg-logo="https://i2.paste.pics/5b659c86fa4c47f9a6b71677e4698fd5.png", Estudio TV | CL
https://5eaccbab48461.streamlock.net:1936/8176/8176/playlist.m3u8
#EXTINF:-1 tvg-id="76" tvg-name="Canal 2 de San Antonio" tvg-logo="https://lh3.googleusercontent.com/-8rzHJZdq8rY/Xb2AX9UW_tI/AAAAAAAAr58/gqkZ21n2nf4rm5Ah-lzNOz5ch6_JVUS5wCK8BGAsYHg/s0/2019-11-02.png", Canal 2 de San Antonio | CL
https://unlimited1-cl-isp.dps.live/canal2/canal2.smil/playlist.m3u8
#EXTINF:-1 tvg-id="333" tvg-name="Plaza TV" tvg-logo="https://i2.paste.pics/585c8e1e9e65021cae644117c35bd51a.png", Plaza TV | CL
https://unlimited10-cl.dps.live/girovisual2/girovisual2.smil/playlist.m3u8
#EXTINF:-1 tvg-id="77" tvg-name="TVR" tvg-logo="https://i2.paste.pics/138972442c9f6e8c471b5eecec021f08.png", TVR | CL
https://unlimited1-cl-isp.dps.live/tvr/tvr.smil/playlist.m3u8
#EXTINF:-1 tvg-id="336" tvg-name="Tendencias Prime" tvg-logo="https://i2.paste.pics/5d64fe0c6e8c1d3be74a7982fc408dab.png", Tendencias Prime | CL
https://v2.tustreaming.cl/tendenciastv/index.m3u8
#EXTINF:-1 tvg-id="1024" tvg-name="Vision Plus TV" tvg-logo="https://i2.paste.pics/e067ea7d04aa3bcd78e8892df03409af.png", Vision Plus TV | CL
https://v2.tustreaming.cl/visionplustv/index.m3u8
#EXTINF:-1 tvg-id="1120" tvg-name="Autonoma TV" tvg-logo="https://i2.paste.pics/c00eb38ed6d7b15ebc179af065730860.png", Autonoma TV | CL
https://wifispeed.trapemn.tv:1936/comunales/autonoma-tv/playlist.m3u8
#EXTINF:-1 tvg-id="999" tvg-name="38TV" tvg-logo="https://i2.paste.pics/3cc1950b0f0c4ad15752bd5b6646fdf6.png", 38TV | CL
https://v2.tustreaming.cl:19360/38tv/38tv.m3u8
#EXTINF:-1 tvg-id="337" tvg-name="Buin Somos Todos" tvg-logo="https://lh3.googleusercontent.com/-qHSWQUuG5HU/XkIKFkSMFBI/AAAAAAAAv-o/80_hG25Pe6cfe7Dm3Uc6VDpcMp2Nd3ImwCK8BGAsYHg/s0/2020-02-10.png", Buin Somos Todos | CL
https://bst.buin.cl/0.m3u8
#EXTINF:-1 tvg-id="338" tvg-name="Canal 57 Melipilla" tvg-logo="https://i2.paste.pics/142f64e0f0f7392e87b0f08fe9220039.png", Canal 57 Melipilla | CL
https://panel.tvstream.cl:1936/8016/8016/playlist.m3u8
#EXTINF:-1 tvg-id="1376" tvg-name="Tu Canal Colina" tvg-logo="https://i.paste.pics/3018ffa6fe33fc3d0baa222207790a5a.png", Tu Canal Colina | CL
https://live.chileservidores.com:8081/colina/index.m3u8
#EXTINF:-1 tvg-id="1025" tvg-name="Telecanal Santa Cruz" tvg-logo="https://i2.paste.pics/6a1696deb1c9517beb69237df03fb2a9.png", Telecanal Santa Cruz | CL
https://unlimited1-cl-isp.dps.live/tcsc/tcsc.smil/playlist.m3u8
#EXTINF:-1 tvg-id="1253" tvg-name="El Tipografo" tvg-logo="https://i2.paste.pics/4df8ca35af0bfce1985b33b930990505.png", El Tipografo | CL
http://live.mundogo.cl/mundo/Tipografo/index.m3u8
#EXTINF:-1 tvg-id="340" tvg-name="TVO San Vicente" tvg-logo="https://i2.paste.pics/a9f646af1abd085ef75e72c5e05e05b4.png", TVO San Vicente | CL
https://5ff3d9babae13.streamlock.net:443/8014/8014/playlist.m3u8
#EXTINF:-1 tvg-id="341" tvg-name="Sextavision" tvg-logo="https://lh3.googleusercontent.com/-jrWnNYMCARg/XxzHhPjtM8I/AAAAAAAA3X0/8TDxNrCDkK8gLpV7HBJhhFqovrjbr3AmwCK8BGAsYHg/s0/2020-07-25.png", Sextavision | CL
https://5ff3d9babae13.streamlock.net:443/8020/8020/playlist.m3u8
#EXTINF:-1 tvg-id="463" tvg-name="Ekiz TV" tvg-logo="https://lh3.googleusercontent.com/-gDK3j68Mc6o/YFYnQ_VgDyI/AAAAAAABAy0/COi6QK7t40UXPZuYPWHnOwi61yO0QRVUwCK8BGAsYHg/s512/2021-03-20.jpg", Ekiz TV | CL
http://live.mundogo.cl/mundo/EquizTV/index.m3u8
#EXTINF:-1 tvg-id="78" tvg-name="TVR Canal 11" tvg-logo="https://lh3.googleusercontent.com/-D7L3q2KhyFA/XjQLBVPp_xI/AAAAAAAAvhk/YiyvFKiyTV8wmlJ3AKPuWIP-c99ZP3I0QCK8BGAsYHg/s0/2020-01-31.png", TVR Canal 11 | CL
https://unlimited6-cl.dps.live/tvrcurico/tvrcurico.smil/playlist.m3u8
#EXTINF:-1 tvg-id="342" tvg-name="Vivo TV" tvg-logo="https://lh3.googleusercontent.com/-1sqZ7rIlQfU/X30JIKK3h6I/AAAAAAAA6Mg/PXOK4Ogfto8S5Jkbot2bAdHtCctyapzqwCK8BGAsYHg/s0/2020-10-06.jpg", Vivo TV | CL
https://unlimited1-cl-isp.dps.live/vivotv/vivotv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="79" tvg-name="Telecanal Talca" tvg-logo="https://i2.paste.pics/e39f43a339b5500e4c3f4071f8c14163.png", Telecanal Talca | CL
https://unlimited1-cl-isp.dps.live/tctc/tctc.smil/playlist.m3u8
#EXTINF:-1 tvg-id="343" tvg-name="VLTV" tvg-logo="https://lh3.googleusercontent.com/-_PURxYxD4SM/XokrBPhPlHI/AAAAAAAAxfI/6QOeSyIpBbsaCKY_afgxkFKXZ6FcuottwCK8BGAsYHg/s0/2020-04-04.png", VLTV | CL
https://tv.streaming-chile.com:1936/vltv/vltv/playlist.m3u8
#EXTINF:-1 tvg-id="80" tvg-name="TV 5 Linares" tvg-logo="https://lh3.googleusercontent.com/-ocbRhw13yZU/YD59yD7KV1I/AAAAAAABAfA/YTu015L36W07t8HVpzWdjgAYJvY3a42QgCK8BGAsYHg/s512/2021-03-02.jpg", TV 5 Linares | CL
https://unlimited1-cl-isp.dps.live/tv5/tv5.smil/playlist.m3u8
#EXTINF:-1 tvg-id="81" tvg-name="Contivision" tvg-logo="https://i2.paste.pics/984d0dc323bfe7d9b973ad47fc76639d.png", Contivision | CL
https://unlimited2-cl-isp.dps.live/cm/cm.smil/playlist.m3u8
#EXTINF:-1 tvg-id="1249" tvg-name="Molina TV" tvg-logo="https://i2.paste.pics/9d26fdb4d2774d7ecbb38759ed5f3a4b.png", Molina TV | CL
http://live.mundogo.cl/mundo/Molinatv/index.m3u8
#EXTINF:-1 tvg-id="345" tvg-name="UTV San Clemente" tvg-logo="https://i2.paste.pics/4a70b027fa4d7cc5763e54ce980580c4.png", UTV San Clemente | CL
https://v2.tustreaming.cl/utv/index.m3u8
#EXTINF:-1 tvg-id="346" tvg-name="Nativa TV" tvg-logo="https://lh3.googleusercontent.com/-cjGfTc-x5mE/XhNpkqYLfYI/AAAAAAAAvA0/H23FY52RLO8sZlK22ADQwnFt51j_RYcHgCK8BGAsYHg/s0/2020-01-06.png", Nativa TV | CL
https://stmv2.zcasthn.com.br/nativatv/nativatv/playlist.m3u8
#EXTINF:-1 tvg-id="347" tvg-name="Tele2 Web" tvg-logo="https://lh3.googleusercontent.com/-ma0nk15jqs0/Xte5HlWvxqI/AAAAAAAA1aM/FbCYYz6_ExY547-4KshY_FHdgea6Rr8mACK8BGAsYHg/s0/2020-06-03.png", Tele2 Web | CL
https://oracle.streaminghd.cl/tele2web/tele2web/playlist.m3u8
#EXTINF:-1 tvg-id="1164" tvg-name="Maule Vision" tvg-logo="https://i2.paste.pics/45eedb9b481a90dfb7e7f6e6a5085629.png", Maule Vision | CL
https://vmtv.cl:3787/hybrid/play.m3u8
#EXTINF:-1 tvg-id="1250" tvg-name="Nueva Region TV" tvg-logo="https://i2.paste.pics/6eeeac8e90c540f2462704788bb4db1d.png", Nueva Region TV | CL
http://live.mundogo.cl/mundo/Nuevaregion/index.m3u8
#EXTINF:-1 tvg-id="348" tvg-name="Canal 21 Chillán" tvg-logo="https://lh3.googleusercontent.com/-G3a4EWWVHDM/YLwWdi2a_KI/AAAAAAABCt8/9O8xWNi1f_UbcvwqCXhAHEvJhcrgSF2lwCJEEGAsYHg/s512/2021-06-05.jpg", Canal 21 Chillán | CL
https://tls-cl.cdnz.cl/canal21tv/live/playlist.m3u8
#EXTINF:-1 tvg-id="903" tvg-name="Región Televisión Ñuble" tvg-logo="https://i2.paste.pics/d1cf85869f9155b5839539a5dea311ea.png", Región Televisión Ñuble | CL
https://live.tvcontrolcp.com:1936/guzman/guzman/playlist.m3u8
#EXTINF:-1 tvg-id="1037" tvg-name="Canal SCÑ - San Carlos Ñuble" tvg-logo="https://i2.paste.pics/6c77f84d9c77fabb70a62b092e7edb78.png", Canal SCÑ - San Carlos Ñuble | CL
https://live.tvcontrolcp.com:1936/sancarlostv/sancarlostv/playlist.m3u8
#EXTINF:-1 tvg-id="902" tvg-name="Ñublevision" tvg-logo="https://i2.paste.pics/eccc0f198fb9739c2fda39aef85e81ae.png", Ñublevision | CL
https://cdn.oneplaychile.cl:1936/regionales/nublevision.stream/playlist.m3u8
#EXTINF:-1 tvg-id="1163" tvg-name="YungayOnline" tvg-logo="https://i2.paste.pics/2f5a5c317d9813f9d83b71e9b1a1c9a9.png", YungayOnline | CL
https://stmv2.zcasthn.com.br/diegomanuel/diegomanuel/playlist.m3u8
#EXTINF:-1 tvg-id="350" tvg-name="ClickTv" tvg-logo="https://i2.paste.pics/d4950684d99dbc3a25f4ef74a2895871.png", ClickTv | CL
https://v2.tustreaming.cl/clicktv/index.m3u8
#EXTINF:-1 tvg-id="174" tvg-name="VP Televisión" tvg-logo="https://i2.paste.pics/454ab39041c8b5867f7d4707ebd6c54f.png", VP Televisión | CL
https://v1.tustreaming.cl:19360/vozdepoder/vozdepoder.m3u8
#EXTINF:-1 tvg-id="386" tvg-name="Energia TV" tvg-logo="https://lh3.googleusercontent.com/-OixheIRfa_Y/YDwn1t40sVI/AAAAAAABAcE/SV3ZQAJE8l4yRS-KV-hCat4miTZwNOuXwCK8BGAsYHg/s512/2021-02-28.png", Energia TV | CL
https://cdn.oneplaychile.cl:1936/regionales/energia-fm/playlist.m3u8
#EXTINF:-1 tvg-id="352" tvg-name="Concepcion TV" tvg-logo="https://i2.paste.pics/d3cfb9b5755fef336d27e1b80a9d2921.png", Concepcion TV | CL
https://panel.miplay.cl:8081/concepciontv/index.m3u8
#EXTINF:-1 tvg-id="353" tvg-name="Canal 9 Bío Bí­o TV" tvg-logo="https://lh3.googleusercontent.com/-opZ6mP8G3Fo/Wn9lBEeoQ4I/AAAAAAAAgwY/cKvIaCeqHZEwdTQ-pJPh7oCDIU2q-fECwCK8BGAs/s220/2018-02-10.png", Canal 9 Bío Bí­o TV | CL
https://unlimited1-cl-isp.dps.live/c9/c9.smil/playlist.m3u8
#EXTINF:-1 tvg-id="354" tvg-name="TV8" tvg-logo="https://i2.paste.pics/104c1e13bca407b18797880aadc3cddb.png", TV8 | CL
https://panel.tvstream.cl:1936/8032/8032/playlist.m3u8
#EXTINF:-1 tvg-id="957" tvg-name="Pacifico Television" tvg-logo="https://i2.paste.pics/dfa0913e3c68b6d9306770eb3151bfa8.png", Pacifico Television | CL
https://oracle.streaminghd.cl/pacificotelevisionspa/pacificotelevisionspa/playlist.m3u8
#EXTINF:-1 tvg-id="355" tvg-name="Canal TV4" tvg-logo="https://lh3.googleusercontent.com/-y7TDgBUKCMI/XxzII32W3zI/AAAAAAAA3X8/hsnRb9iiH84srb7tOHQrBhKze2dWTBVuQCK8BGAsYHg/s0/2020-07-25.png", Canal TV4 | CL
https://v1.tustreaming.cl/tv4television/index.m3u8
#EXTINF:-1 tvg-id="1340" tvg-name="Canal Alta Frontera" tvg-logo="https://i.paste.pics/4e2f00e80ad5f9249e5d40e678cd46fe.png", Canal Alta Frontera | CL
https://mediacpstreamchile.com:1936/altafronteratv/altafronteratv/playlist.m3u8
#EXTINF:-1 tvg-id="948" tvg-name="San Pedro Conecta" tvg-logo="https://i2.paste.pics/8ef804170fcee24a4ee6221ae846e9ba.png", San Pedro Conecta | CL
https://stmv2.zcasthn.com.br/sanpedroconecta/sanpedroconecta/playlist.m3u8
#EXTINF:-1 tvg-id="810" tvg-name="Club TV" tvg-logo="https://i2.paste.pics/403506605b1b59768a26e7bc1d79f1e8.png", Club TV | CL
https://stmv2.zcasthn.com.br/clubtv/clubtv/playlist.m3u8
#EXTINF:-1 tvg-id="82" tvg-name="Teleangol Radio" tvg-logo="https://lh3.googleusercontent.com/-zDgbgkPTFLA/XbCy7Dg-33I/AAAAAAAArlQ/712PcpxHNmAKjz1k4Arp_iVvpJ-qC_WxQCK8BGAsYHg/s0/2019-10-23.png", Teleangol Radio | CL
https://pantera1-100gb-cl-movistar.dps.live/teleangol/teleangol.smil/playlist.m3u8
#EXTINF:-1 tvg-id="1251" tvg-name="RDO TV" tvg-logo="https://i2.paste.pics/d7af3169a2a13e4c18f3fb72db4b1447.png", RDO TV | CL
https://stmv2.zcasthn.com.br/rdotelevision/rdotelevision/playlist.m3u8
#EXTINF:-1 tvg-id="356" tvg-name="LTV canal" tvg-logo="https://lh3.googleusercontent.com/-Lm1PxwMT-Zc/X0v29tzKwLI/AAAAAAAA5Es/MjQEVIxYNhovyHt3mpzI91Gnb-YJj0FoQCK8BGAsYHg/s0/2020-08-30.png", LTV canal | CL
https://mediacpstreamchile.com:1936/ltvcanal/ltvcanal/playlist.m3u8
#EXTINF:-1 tvg-id="83" tvg-name="Pucon TV" tvg-logo="https://lh3.googleusercontent.com/-r4ejsHWoXtE/XYb7QVbZA4I/AAAAAAAArCw/XjvcDEIjGlAZnTFSCURiZYONDlWPs4GhwCK8BGAsYHg/s0/2019-09-21.png", Pucon TV | CL
https://unlimited1-cl-isp.dps.live/pucontv/pucontv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="357" tvg-name="Temuco TV" tvg-logo="https://lh3.googleusercontent.com/-RfITnpTfEz4/YKmDDqHhEvI/AAAAAAABCd4/QZ7_BVwPR3ou-_In9JbR1JeIk97H4irGACK8BGAsYHg/s512/2021-05-22.jpg", Temuco TV | CL
https://tv.streaming-chile.com:19360/temucotelevision/temucotelevision.m3u8
#EXTINF:-1 tvg-id="84" tvg-name="T-Vinet" tvg-logo="https://lh3.googleusercontent.com/-EtM2JBuVazM/XxzIhLJW5PI/AAAAAAAA3YE/zmlykaL06y4tNI5JbuLPm-I1BSYsWCZYACK8BGAsYHg/s0/2020-07-25.png", T-Vinet | CL
https://unlimited1-cl-isp.dps.live/inet2/inet2.smil/playlist.m3u8
#EXTINF:-1 tvg-id="359" tvg-name="Canal Latino 54" tvg-logo="https://lh3.googleusercontent.com/-gBbkRnIisag/XmPPRUnANTI/AAAAAAAAwpc/01jp-ZrMDeYwbf4ahDeKu7kayyMQ_VuUgCK8BGAsYHg/s0/2020-03-07.png", Canal Latino 54 | CL
https://live.chileservidores.com:8081/latina/index.m3u8
#EXTINF:-1 tvg-id="360" tvg-name="Osorno TV+" tvg-logo="https://lh3.googleusercontent.com/-tFNIzbzaa-w/XxzI1GfAaZI/AAAAAAAA3YM/9QCPBTiAp7E6V8u9cSZAyt0IdlWbexo2wCK8BGAsYHg/s0/2020-07-25.png", Osorno TV+ | CL
https://panel.tvstream.cl:1936/8036/8036/playlist.m3u8
#EXTINF:-1 tvg-id="85" tvg-name="Decima TV" tvg-logo="https://lh3.googleusercontent.com/-3q8oUK7uUUo/XbCzDBxA1OI/AAAAAAAArlU/FPIAOQc92_kSKByiVYmSU0USaROnneutgCK8BGAsYHg/s0/2019-10-23.png", Decima TV | CL
https://unlimited2-cl-isp.dps.live/decimatv/decimatv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="86" tvg-name="Canal 2 Quellon" tvg-logo="https://i2.paste.pics/ef4396a3c62252b1678b3fae595b0532.png", Canal 2 Quellon | CL
https://unlimited1-cl-isp.dps.live/tvquellon/tvquellon.smil/playlist.m3u8
#EXTINF:-1 tvg-id="361" tvg-name="Vision TV" tvg-logo="https://lh3.googleusercontent.com/-kA-YUEjBEoc/XygP_iR0ZzI/AAAAAAAA3sI/mMsFytWSPV4dziqhZQtA6X0GmhEIrmrpQCK8BGAsYHg/s0/2020-08-03.png", Vision TV | CL
https://vdo.voxhdnet.com:3141/live/visiontvlive.m3u8
#EXTINF:-1 tvg-id="364" tvg-name="Canal 5 Puerto Montt" tvg-logo="https://i2.paste.pics/bf21f73eb125d689b3362c7af6f25887.png", Canal 5 Puerto Montt | CL
https://stmv2.zcasthn.com.br/canal5/canal5/playlist.m3u8
#EXTINF:-1 tvg-id="365" tvg-name="Canal Chilote" tvg-logo="https://i2.paste.pics/062823e72b3259ec4d8787acd2b5ac54.png", Canal Chilote | CL
https://oracle.streaminghd.cl/8030/8030/playlist.m3u8
#EXTINF:-1 tvg-id="856" tvg-name="Hito Cero TV" tvg-logo="https://i2.paste.pics/2a80b8fde21cf03f7ac3bbff7fb0cc25.png", Hito Cero TV | CL
https://5ff3d9babae13.streamlock.net:443/8018/8018/playlist.m3u8
#EXTINF:-1 tvg-id="366" tvg-name="Chiloe Red 25" tvg-logo="https://lh3.googleusercontent.com/-taF7STTebY8/XxzJzTcNobI/AAAAAAAA3Yk/Z_EEZ_hbkK8G6V93Rp9x_q6qa925hTqbACK8BGAsYHg/s0/2020-07-25.png", Chiloe Red 25 | CL
https://v2.tustreaming.cl/chiloered/index.m3u8
#EXTINF:-1 tvg-id="368" tvg-name="Santa Maria TV" tvg-logo="https://lh3.googleusercontent.com/-u0E4RY62ySI/XbC2IU7YHXI/AAAAAAAArmQ/2mDq3cPseesa8lsFWQB8TPWlwAggTb3HQCK8BGAsYHg/s0/2019-10-23.png", Santa Maria TV | CL
https://unlimited1-cl-isp.dps.live/smtv/smtv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="369" tvg-name="Canal 11 TV Aysen" tvg-logo="https://i2.paste.pics/8023836adcf3a07cfaef99fcccbe8292.png", Canal 11 TV Aysen | CL
https://v1.tustreaming.cl:19360/canal11aysen/canal11aysen.m3u8
#EXTINF:-1 tvg-id="1116" tvg-name="SurTV" tvg-logo="https://i2.paste.pics/78850b6e924f55fcbeef5459a37a54a9.png", SurTV | CL
https://paneltv.online:1936/8034/8034/playlist.m3u8
#EXTINF:-1 tvg-id="1012" tvg-name="Aysen TV" tvg-logo="https://i2.paste.pics/f68f8bb46f486aec998bb476a60d4181.png", Aysen TV | CL
http://v1.tustreaming.cl:80/aysentv/index.m3u8
#EXTINF:-1 tvg-id="370" tvg-name="Soberania Radio" tvg-logo="https://lh3.googleusercontent.com/-9sAv8-Qg_V0/YLwX4GMnM2I/AAAAAAABCuM/zxEzBw1b7V8MDY-xb6mRahyOjBVDlph8gCJEEGAsYHg/s512/2021-06-05.png", Soberania Radio | CL
https://tls-cl.cdnz.cl/radiosoberania/live/playlist.m3u8
#EXTINF:-1 tvg-id="87" tvg-name="ITV Patagonia" tvg-logo="https://lh3.googleusercontent.com/-ZBNktblWn9U/YHTLWC_p1aI/AAAAAAABBXY/v90ntMGcb7kuYUK0yqNBGSTtu1JiQUHfQCK8BGAsYHg/s512/2021-04-12.png", ITV Patagonia | CL
https://unlimited1-cl-isp.dps.live/itv/itv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="371" tvg-name="EvaVisión" tvg-logo="https://i2.paste.pics/1fac7deeb4ca257162cde40abd006d9d.png", EvaVisión | CL
https://Stmv1.zcasthn.com.br/evevision/evevision/playlist.m3u8
#EXTINF:-1 tvg-id="372" tvg-name="Canal Sur Patagonia" tvg-logo="https://lh3.googleusercontent.com/-SMZdtDq6Dw0/XxzKA9R0abI/AAAAAAAA3Ys/R8wSeZoKBNU4LyZnAXKU_DR1mGnzo1L4wCK8BGAsYHg/s0/2020-07-25.png", Canal Sur Patagonia | CL
https://v1.tustreaming.cl:19360/canalsurpatagoniatv/canalsurpatagoniatv.m3u8
#EXTINF:-1 tvg-id="373" tvg-name="PinguinoTV" tvg-logo="https://lh3.googleusercontent.com/-qSwYgRuowGA/YLwYt69YoOI/AAAAAAABCuU/avw_KQcl4cUIiy4s2iebwzLAuy5CZDOXQCJEEGAsYHg/s512/2021-06-05.png", PinguinoTV | CL
https://streaming.elpinguino.com:5391/live/EP.smil/playlist.m3u8
#EXTINF:-1 tvg-id="376" tvg-name="Teletrak" tvg-logo="https://lh3.googleusercontent.com/-H203VH0Qnr0/XxzMCs6SOmI/AAAAAAAA3ZQ/S5ojmvOjSQERDOMBWTNQRoN_tqvAZGMBQCK8BGAsYHg/s0/2020-07-25.png", Teletrak | CL
https://mdstrm.com/live-stream-playlist/62616df888feb366839a3eb5.m3u8
#EXTINF:-1 tvg-id="1199" tvg-name="D13" tvg-logo="https://i2.paste.pics/21803adf68e4ed46e638156868973edd.png", D13 | CL
https://redirector.rudo.video/hls-video/ey6283je82983je9823je8jowowiekldk9838274/13d/13d.smil/playlist.m3u8
#EXTINF:-1 tvg-id="374" tvg-name="TV Turf Movil" tvg-logo="https://lh3.googleusercontent.com/-4gdqGn04Bng/Xb9WF2WzB6I/AAAAAAAAr7A/tbeDeaQTuuMuHOka_gYv4trQHwAyzqKPQCK8BGAsYHg/s0/2019-11-03.png", TV Turf Movil | CL
https://janus.tvturf.cl/playlist/stream.m3u8
#EXTINF:-1 tvg-id="375" tvg-name="Valparaiso Sporting" tvg-logo="https://lh3.googleusercontent.com/-HLkq9KDNolI/XxzLq65I2KI/AAAAAAAA3ZI/Vx5DVILxWmoGc5_PJ01NSoc2wVODn-FqACK8BGAsYHg/s0/2020-07-25.png", Valparaiso Sporting | CL
https://unlimited1-cl-isp.dps.live/sportinghd/sportinghd.smil/playlist.m3u8
#EXTINF:-1 tvg-id="63" tvg-name="Bajo Cero TV" tvg-logo="https://i2.paste.pics/3caab16270214727377ff0994bb64031.png", Bajo Cero TV | CL
https://stmv2.zcasthn.com.br/bajocerotv/bajocerotv/playlist.m3u8
#EXTINF:-1 tvg-id="324" tvg-name="El Galpon 80" tvg-logo="https://i2.paste.pics/f1bc9762fc091f72206cac3d4d4111da.png", El Galpon 80 | CL
https://stmv2.zcasthn.com.br/ferchile/ferchile/playlist.m3u8
#EXTINF:-1 tvg-id="849" tvg-name="Sensacion Costa" tvg-logo="https://i.paste.pics/fae835885948bd76146f00ad2640606d.png", Sensacion Costa | CL
https://tv.clientetvstudio.net:3382/live/costatv2live.m3u8
#EXTINF:-1 tvg-id="769" tvg-name="Radioteca TV" tvg-logo="https://i2.paste.pics/8990ff3b0c53684e7f62a5db3c0cab06.png", Radioteca TV | CL
https://paneltv.net:3908/live/txtkignslive.m3u8
#EXTINF:-1 tvg-id="785" tvg-name="Re7" tvg-logo="https://i2.paste.pics/bcba8ec188e21a5552afd167c46282b7.png", Re7 | CL
https://cp.panelchs.com:1936/etpxbvxrcp/etpxbvxrcp/playlist.m3u8
#EXTINF:-1 tvg-id="521" tvg-name="Recuerdos Retro Radio TV" tvg-logo="https://i2.paste.pics/64f570fc821ff3b32cfdc0b0123be940.png", Recuerdos Retro Radio TV | CL
https://panel.tvstream.cl:1936/8034/8034/playlist.m3u8
#EXTINF:-1 tvg-id="889" tvg-name="La Sabrosura TV" tvg-logo="https://lh3.googleusercontent.com/-8b7QS_hJZdY/YLu9e1SGFLI/AAAAAAABCrk/aO5qeFONSokBmWT8vsROhr1uigX0FizcQCJEEGAsYHg/s512/2021-06-05.png", La Sabrosura TV | CL
https://tv.streaming-chile.com:1936/radiosabrosura/radiosabrosura/playlist.m3u8
#EXTINF:-1 tvg-id="27" tvg-name="Carolina TV" tvg-logo="https://i2.paste.pics/7d24cb88758eceb655098c2fa29a7c9a.png", Carolina TV | CL
https://mdstrm.com/live-stream-playlist/63a06468117f42713374addd.m3u8
#EXTINF:-1 tvg-id="1127" tvg-name="Carolina TV 2" tvg-logo="https://i2.paste.pics/7d24cb88758eceb655098c2fa29a7c9a.png", Carolina TV 2 | CL
https://jireh-1-hls-video-cl-isp.dps.live/hls-video/ey6283je82983je9823je8jowowiekldk9838274/carolinatv2/carolinatv2.smil/playlist.m3u8
#EXTINF:-1 tvg-id="29" tvg-name="DJ Loncho TV" tvg-logo="https://lh3.googleusercontent.com/-VPBp6Vk47T4/XnzDahiuJCI/AAAAAAAAxMI/BkejtQRObwcVvsIvYbdi3Yf5UOizKSRoQCK8BGAsYHg/s0/2020-03-26.png", DJ Loncho TV | CL
https://srv5.zcast.com.br/djlonchtv/djlonchtv/playlist.m3u8
#EXTINF:-1 tvg-id="33" tvg-name="Maxima FM" tvg-logo="https://lh3.googleusercontent.com/-RF13xAQ97o0/XxzMzRqfnBI/AAAAAAAA3Zc/xet9CCbU7H8WEPRQGCXEPpiBxM5RUK6EwCK8BGAsYHg/s0/2020-07-25.png", Maxima FM | CL
https://server1.oklanet.cl:1936/maximavideo1/maximavideo1/playlist.m3u8
#EXTINF:-1 tvg-id="34" tvg-name="TV vconline.cl" tvg-logo="https://lh3.googleusercontent.com/-F0CYLyk3J_M/XxzNduxMoVI/AAAAAAAA3Zk/3S772u4F4jER7F0bULY-hlG7Nn9bbGa7gCK8BGAsYHg/s0/2020-07-25.png", TV vconline.cl | CL
https://panel.tvstream.cl:1936/8024/8024/playlist.m3u8
#EXTINF:-1 tvg-id="2" tvg-name="Zapping Music" tvg-logo="https://i2.paste.pics/869156d90e27d6c6e09dc5a8f0017838.png", Zapping Music | CL
https://zmlive.zappingtv.com/zm-free/zm.smil/playlist.m3u8
#EXTINF:-1 tvg-id="32" tvg-name="Alegria TV" tvg-logo="https://lh3.googleusercontent.com/-IDCwMaJRdnM/Xb11MVTbE-I/AAAAAAAAr4s/PbNF6ie1AIothtCRKeVvdVC6S5hO6a3xACK8BGAsYHg/s0/2019-11-02.png", Alegria TV | CL
https://63da5f7cbffac.streamlock.net:443/8192/8192/playlist.m3u8
#EXTINF:-1 tvg-id="1008" tvg-name="FM Hit" tvg-logo="https://i2.paste.pics/2634a30ce1a741cffa2e23cf6c0ca9ee.png", FM Hit | CL
https://6362ca6f1fc28.streamlock.net/radiofmhit/radiofmhit/playlist.m3u8
#EXTINF:-1 tvg-id="973" tvg-name="Top New Radio" tvg-logo="https://i2.paste.pics/fa96854fb72b2a5e1032d030c83814fa.png", Top New Radio | CL
https://panel.tvstream.cl:1936/8052/8052/playlist.m3u8
#EXTINF:-1 tvg-id="1242" tvg-name="Radio Estacion Arica" tvg-logo="https://i2.paste.pics/e64969d7d359e8932a50b2913cb998eb.png", Radio Estacion Arica | CL
https://5eaccbab48461.streamlock.net:1936/heqhvtgebg/heqhvtgebg/playlist.m3u8
#EXTINF:-1 tvg-id="1248" tvg-name="Subela Radio" tvg-logo="https://i2.paste.pics/f481e57821baed274d68c5b0c954cd96.png", Subela Radio | CL
https://mdstrm.com/live-stream-playlist/5fad9b1d978fe1080e3ac4a8.m3u8
#EXTINF:-1 tvg-id="1196" tvg-name="Radio Ritmo FM" tvg-logo="https://i2.paste.pics/7e2feb3f6e5b19c3b4b26515ee025bac.png", Radio Ritmo FM | CL
https://video.streamingchilenos.cl:1936/8040/8040/playlist.m3u8
#EXTINF:-1 tvg-id="1173" tvg-name="Radio Mia 89.3 Fm" tvg-logo="https://i2.paste.pics/3ffdfac502060629e56167adcd35f872.png", Radio Mia 89.3 Fm | CL
https://stmv2.zcasthn.com.br/radiomia/radiomia/playlist.m3u8
#EXTINF:-1 tvg-id="1229" tvg-name="Macarena FM" tvg-logo="https://i2.paste.pics/c1462d513ed7e5b049d338693366ff29.png", Macarena FM | CL
https://5ff3d9babae13.streamlock.net:443/8042/8042/playlist.m3u8
#EXTINF:-1 tvg-id="1069" tvg-name="Radio Magallanes" tvg-logo="https://i2.paste.pics/cc4b99bf8b5291c279d1f2f02fab8d06.png", Radio Magallanes | CL
https://live.tvcontrolcp.com:1936/magallanes/magallanes/playlist.m3u8
#EXTINF:-1 tvg-id="1134" tvg-name="Radio Maqui" tvg-logo="https://i2.paste.pics/c5e226f1753478bcd1752691c1ce259a.png", Radio Maqui | CL
https://bozztv.com/ssh101/ssh101/MAQUIRADIO/playlist.m3u8
#EXTINF:-1 tvg-id="1004" tvg-name="Ritmo TV" tvg-logo="https://i2.paste.pics/c21ae73475f4ae5a72d93defb2bdc1b7.png", Ritmo TV | CL
https://tv.streaming-chile.com:1936/ritmofm/ritmofm/playlist.m3u8
#EXTINF:-1 tvg-id="987" tvg-name="Emocion TV" tvg-logo="https://i2.paste.pics/2337c738e62db5b6e2b573580e2d9e82.png", Emocion TV | CL
https://v1.tustreaming.cl/emociontv/index.m3u8
#EXTINF:-1 tvg-id="1013" tvg-name="CRadio.cl" tvg-logo="https://i2.paste.pics/f08b155b917bdd7db3bebdd877d8703a.png", CRadio.cl | CL
https://tls-cl.cdnz.cl/cradio/live/playlist.m3u8
#EXTINF:-1 tvg-id="387" tvg-name="Zona Play Radio" tvg-logo="https://i2.paste.pics/443953e7611825ee250208b351899a7c.png", Zona Play Radio | CL
https://5eaccbab48461.streamlock.net:1936/8140/8140/playlist.m3u8
#EXTINF:-1 tvg-id="786" tvg-name="Tributo Valentina" tvg-logo="https://lh3.googleusercontent.com/-prh7BFcqRm8/YG-DVGT_cwI/AAAAAAABBRM/eqw6BkvoZRQ6UQHcT76iv42klsK74q7WgCK8BGAsYHg/s512/2021-04-08.png", Tributo Valentina | CL
https://vdochile.com:3385/hybrid/play.m3u8
#EXTINF:-1 tvg-id="1125" tvg-name="Radio La Serena" tvg-logo="https://i2.paste.pics/850f8ca54830f1011c5289f02a401cd5.png", Radio La Serena | CL
https://stmv2.zcasthn.com.br/radiolaserena/radiolaserena/playlist.m3u8
#EXTINF:-1 tvg-id="974" tvg-name="Patagonia Radio TV" tvg-logo="https://i2.paste.pics/0f20f371ddf95dcc9deed1f97c7c1bb8.png", Patagonia Radio TV | CL
https://video01.logicahost.com.br/grupomedia/grupomedia/playlist.m3u8
#EXTINF:-1 tvg-id="975" tvg-name="FM Mix" tvg-logo="https://i2.paste.pics/ee110fa8ecbc39a633bb78d6aaf6972d.png", FM Mix | CL
https://5ff3d9babae13.streamlock.net:443/8026/8026/playlist.m3u8
#EXTINF:-1 tvg-id="379" tvg-name="CCP Radio" tvg-logo="https://lh3.googleusercontent.com/-t_TztnOyFVE/XmsBBeYivqI/AAAAAAAAwyY/AiGUMO20vMcW9z6ipuNOk_WkgY_za1KrgCK8BGAsYHg/s512/2020-03-12.png", CCP Radio | CL
https://wifiexpert-1.energeek.cl/energeek/canal-3/playlist.m3u8
#EXTINF:-1 tvg-id="400" tvg-name="Red Fueguina Radio" tvg-logo="https://lh3.googleusercontent.com/-AX14DpZylvw/Xqx1dYnBM7I/AAAAAAAAyhM/FKTxf_9d9hEY1okFtMwivpO3IIy9KAAcgCK8BGAsYHg/s0/2020-05-01.png", Red Fueguina Radio | CL
https://inliveserver.com:1936/11012/11012/playlist.m3u8
#EXTINF:-1 tvg-id="838" tvg-name="DBox Radio" tvg-logo="https://i2.paste.pics/1ff617f249eb62e6e2fe828da20a83b7.png", DBox Radio | CL
https://Stmv1.zcasthn.com.br/dbox/dbox/playlist.m3u8
#EXTINF:-1 tvg-id="392" tvg-name="Radio Zeta" tvg-logo="https://i2.paste.pics/6e6018f04b3f9a9271f981117d65ee07.png", Radio Zeta | CL
https://unlimited1-cl-isp.dps.live/radioztv/radioztv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="396" tvg-name="Radio Via Libre" tvg-logo="https://lh3.googleusercontent.com/-BZ4QVXPlxJU/Xk_PdNVd3KI/AAAAAAAAwVc/js3gvjxbBPoXr0EmRyQxl6MWeiYX6x7_gCK8BGAsYHg/s0/2020-02-21.png", Radio Via Libre | CL
https://stmv2.zcasthn.com.br/vialibre/vialibre/playlist.m3u8
#EXTINF:-1 tvg-id="390" tvg-name="Radio Universal" tvg-logo="https://lh3.googleusercontent.com/-0g6kTjRKq_8/XoTI5Gn3jjI/AAAAAAAAxZk/9EsSrTOl0eMlKWP9oRzwZK8lQ9mt8PSBwCK8BGAsYHg/s0/2020-04-01.png", Radio Universal | CL
https://live.chileservidores.com:8081/universal/index.m3u8
#EXTINF:-1 tvg-id="394" tvg-name="Radio Touch" tvg-logo="https://lh3.googleusercontent.com/-qotpEBjN3o0/Xmr5PYL7uPI/AAAAAAAAwx8/FwJJfi_LQjUoISTRZ0JhU4es2qWXDJeCACK8BGAsYHg/s0/2020-03-12.png", Radio Touch | CL
https://tv.streaming-chile.com:1936/radiotouch/radiotouch/playlist.m3u8
#EXTINF:-1 tvg-id="416" tvg-name="Sabor TV" tvg-logo="https://i2.paste.pics/0c69fb7b8aed951e8fbb9dfae98c39a5.png", Sabor TV | CL
https://v1.tustreaming.cl/sabortv/index.m3u8
#EXTINF:-1 tvg-id="787" tvg-name="Radio Riquelme TV" tvg-logo="https://i2.paste.pics/866319e8987f0ca8c80f62eb775ab888.png", Radio Riquelme TV | CL
https://video.radioriquelme.cl/hls/stream.m3u8
#EXTINF:-1 tvg-id="418" tvg-name="Radio Rancagua" tvg-logo="https://lh3.googleusercontent.com/-Z5RpepVd4T0/XkbaXURXxAI/AAAAAAAAwC4/SEU5uIM2uzUQQznq-Pgvi-uCe_fStzypwCK8BGAsYHg/s0/2020-02-14.png", Radio Rancagua | CL
https://tv.streaming-chile.com:19360/rancagua/rancagua.m3u8
#EXTINF:-1 tvg-id="413" tvg-name="Radio Presidente Ibañez" tvg-logo="https://lh3.googleusercontent.com/-t2rtTbIA3oc/XmV-7wrFWHI/AAAAAAAAwr0/VH4k91ijqr4MbkR-DlS4n7o0HvCnjQfZACK8BGAsYHg/s0/2020-03-08.png", Radio Presidente Ibañez | CL
https://ibanez.servercl.com/hls/live.m3u8
#EXTINF:-1 tvg-id="420" tvg-name="Radio Portales" tvg-logo="https://lh3.googleusercontent.com/-eIr2RmGVfeg/XkbYVLkwo3I/AAAAAAAAwCs/F1Q11XV_JvgjR-wvfgNhKrGUmE7OldbqACK8BGAsYHg/s0/2020-02-14.png", Radio Portales | CL
https://cdn.oneplaychile.cl:1936/radios/radioportales/playlist.m3u8
#EXTINF:-1 tvg-id="403" tvg-name="Radio Polar" tvg-logo="https://i2.paste.pics/1a4476b8ddeb3fad055579929c495fca.png", Radio Polar | CL
https://mediacpstreamchile.com:1936/radiopolar2/radiopolar2/playlist.m3u8
#EXTINF:-1 tvg-id="378" tvg-name="Radio Mas" tvg-logo="https://lh3.googleusercontent.com/-1MimLN5b_Os/XmsDzj71aqI/AAAAAAAAwys/1bqv2qCTmUkN9qA1qaIZfWLihfGZ6jdOgCK8BGAsYHg/s512/2020-03-12.png", Radio Mas | CL
http://unlimited1-cl.dps.live/radiomas/radiomas.smil/playlist.m3u8
#EXTINF:-1 tvg-id="408" tvg-name="Radio Las Nieves" tvg-logo="https://lh3.googleusercontent.com/-yAzYXd230b8/XmPQwQY849I/AAAAAAAAwps/fu7GMDaULwEgJYarzmR1Vo5w_BRoPg2eACK8BGAsYHg/s0/2020-03-07.png", Radio Las Nieves | CL
https://v2.tustreaming.cl/rln/index.m3u8
#EXTINF:-1 tvg-id="380" tvg-name="Radio Hoy" tvg-logo="https://lh3.googleusercontent.com/-vFBzx3OHjvA/XmPSjVW5sMI/AAAAAAAAwp8/W0kgWc-NYfUkFdX3SZICQX3njfoFJP72QCK8BGAsYHg/s0/2020-03-07.png", Radio Hoy | CL
https://panel.dattalive.com:443/8146/8146/playlist.m3u8
#EXTINF:-1 tvg-id="412" tvg-name="Radio Genial TV" tvg-logo="https://lh3.googleusercontent.com/-tgkESVUJWRI/XkyfsBVW_mI/AAAAAAAAwHw/xsYoralOutAlHw-iMJC9nl1hdd6vKqznQCK8BGAsYHg/s0/2020-02-18.png", Radio Genial TV | CL
https://v1.tustreaming.cl:19360/genialtv/genialtv.m3u8
#EXTINF:-1 tvg-id="401" tvg-name="Radio Fiessta" tvg-logo="https://lh3.googleusercontent.com/-geXQ8sv9psc/XoPRmsgB8zI/AAAAAAAAxYA/XW6P5dLJn1wAaa3IZFhc5NBjBIr-OAbqgCK8BGAsYHg/s0/2020-03-31.png", Radio Fiessta | CL
https://www.cloudscriptdog.cl:19360/fiesta-video-01/fiesta-video-01.m3u8
#EXTINF:-1 tvg-id="883" tvg-name="Futura TV" tvg-logo="https://lh3.googleusercontent.com/-mnnwudrynnE/XkbaoY35p6I/AAAAAAAAwDA/eHhkuRJcADsgzRX1Zfajo6FQ8wrGHRS0gCK8BGAsYHg/s0/2020-02-14.png", Futura TV | CL
https://unlimited1-cl-isp.dps.live/futuratv/futuratv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="417" tvg-name="Radio Favorita" tvg-logo="https://i2.paste.pics/013f102620fa4558ed5f233f7ea3b33e.png", Radio Favorita | CL
https://streamyes.alsolnet.com/radiofavoritatv/live/playlist.m3u8
#EXTINF:-1 tvg-id="870" tvg-name="Radio Ñuble" tvg-logo="https://lh3.googleusercontent.com/-yPTpIpQNeeY/YKmBg83s56I/AAAAAAABCds/RmIdBd-Qd5wQYuoUEQmU9e8rmTgsSQPRQCK8BGAsYHg/s512/2021-05-22.jpg", Radio Ñuble | CL
https://live.tvcontrolcp.com:1936/rnuble/rnuble/playlist.m3u8
#EXTINF:-1 tvg-id="389" tvg-name="Radio Fantasia TV" tvg-logo="https://lh3.googleusercontent.com/-7Uf_S_1oEU8/XmV_Zz3S5cI/AAAAAAAAwsA/yYku6NdZFTk7c0a9AtwAOJBoh3a2UMnqQCK8BGAsYHg/s0/2020-03-08.png", Radio Fantasia TV | CL
https://v2.tustreaming.cl/fantasiatv/index.m3u8
#EXTINF:-1 tvg-id="405" tvg-name="Cosmos TV" tvg-logo="https://i2.paste.pics/ed2fce1f9fe98a5c7dec95777c201497.png", Cosmos TV | CL
https://v1.tustreaming.cl/cosmostv/index.m3u8
#EXTINF:-1 tvg-id="399" tvg-name="Radio Corporacion" tvg-logo="https://i2.paste.pics/78b7ed4b48b0239fe4e6c57d969bbfde.png", Radio Corporacion | CL
https://v2.tustreaming.cl/corporaciontv/index.m3u8
#EXTINF:-1 tvg-id="409" tvg-name="Radio Chiloe" tvg-logo="https://lh3.googleusercontent.com/-exchdEZ4lAg/XmWArTXQnFI/AAAAAAAAwsI/fo3sD3494lY54nz8wHjEykbwf0tVz0MkQCK8BGAsYHg/s0/2020-03-08.png", Radio Chiloe | CL
https://videostream.chileservidores.com:8081/chiloeone/index.m3u8
#EXTINF:-1 tvg-id="410" tvg-name="Radio Camila TV" tvg-logo="https://lh3.googleusercontent.com/-82UBf4qHY0Q/XjHJ9TJue-I/AAAAAAAAvfc/Y474O6NtMJYl1gpuUJ1sJyFh8i9afnYlACK8BGAsYHg/s0/2020-01-29.png", Radio Camila TV | CL
https://panel.tvstream.cl:1936/8008/8008/playlist.m3u8
#EXTINF:-1 tvg-id="407" tvg-name="Preludio TV" tvg-logo="https://lh3.googleusercontent.com/-dwHIA3qDBnE/XmPQVNGWG8I/AAAAAAAAwpk/lEVnfzQ8b1s7gjkedNxdk8G-foIlYgOAACK8BGAsYHg/s0/2020-03-07.png", Preludio TV | CL
https://tv.streaming-chile.com:19360/preludio/preludio.m3u8
#EXTINF:-1 tvg-id="402" tvg-name="Orocoipo" tvg-logo="https://lh3.googleusercontent.com/-Oj60X_Fdylk/XoPge96i7aI/AAAAAAAAxYQ/zkPc_7Zajj04xQelUuWrShb7K68FDuVBgCK8BGAsYHg/s0/2020-03-31.png", Orocoipo | CL
https://panel.tvstream.cl:1936/8018/8018/playlist.m3u8
#EXTINF:-1 tvg-id="395" tvg-name="Mi Radio TV" tvg-logo="https://lh3.googleusercontent.com/-7XLo-eid_jI/Xm9iFNKwCYI/AAAAAAAAw8Y/TWJlVG10Ofc-nX2cNdUPKn7quq7hKWKBACK8BGAsYHg/s0/2020-03-16.png", Mi Radio TV | CL
https://tls-cl.cdnz.cl/miradio2/live/playlist.m3u8
#EXTINF:-1 tvg-id="411" tvg-name="Interradio TV" tvg-logo="https://i2.paste.pics/29e1c081406ffc375a6af8717839fb30.png", Interradio TV | CL
https://tv.streaming-chile.com:1936/8012/8012/playlist.m3u8
#EXTINF:-1 tvg-id="388" tvg-name="Interactiva FM" tvg-logo="https://lh3.googleusercontent.com/-QI0Y25E7D14/X4YuErUkgLI/AAAAAAAA6Yo/WZwniEwC_RwZWkwXPGKRXxRueEu4ekjUQCK8BGAsYHg/s0/2020-10-13.jpg", Interactiva FM | CL
https://live.tvcontrolcp.com:1936/interactivafm/interactivafm/playlist.m3u8
#EXTINF:-1 tvg-id="397" tvg-name="FM Pulso" tvg-logo="https://lh3.googleusercontent.com/-PnlftgFahF0/XoThpbgVNeI/AAAAAAAAxZw/YFbXaFZUUikkGSKbQjxlOyxVMmJQBQMFACK8BGAsYHg/s0/2020-04-01.png", FM Pulso | CL
https://oracle.streaminghd.cl:443/fmpulso/fmpulso/playlist.m3u8
#EXTINF:-1 tvg-id="1478" tvg-name="El Conquistador Santiago" tvg-logo="https://i2.paste.pics/8dce6d20b26e1ed90098029d8d079fe5.png", El Conquistador Santiago | CL
https://redirector.rudo.video/hls-video/931b584451fa6dd1313ee66efbfd5802e3f3bcea/elconquistadortv/elconquistadortv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="398" tvg-name="El Sembrador" tvg-logo="https://i2.paste.pics/fb25f1d4266b7fd95e8a5f33a23ac492.png", El Sembrador | CL
https://tv.streaming-chile.com:19360/elsembrador/elsembrador.m3u8
#EXTINF:-1 tvg-id="419" tvg-name="El Conquistador Concepcion" tvg-logo="https://lh3.googleusercontent.com/-sbaPyioWXEc/XxzPyjqm-UI/AAAAAAAA3aQ/uxQH1SZBD4k0o1g7MQPhYsBf6Mo4cjkOQCK8BGAsYHg/s0/2020-07-25.png", El Conquistador Concepcion | CL
https://v1.tustreaming.cl:19360/conquistadorconcepcion/conquistadorconcepcion.m3u8
#EXTINF:-1 tvg-id="382" tvg-name="ChocolateFM" tvg-logo="https://lh3.googleusercontent.com/-Cv39r3czF0w/XovwZlRIgyI/AAAAAAAAxhI/u9IUH1nGlX4XEJA-Pqc2wGXfJJrbjejgwCK8BGAsYHg/s0/2020-04-06.png", ChocolateFM | CL
https://5eaccbab48461.streamlock.net:1936/8056/8056/playlist.m3u8
#EXTINF:-1 tvg-id="406" tvg-name="Radio Ancoa TV" tvg-logo="https://i2.paste.pics/b1a689ac7ba1ffd46a21a12f78b2e12a.png", Radio Ancoa TV | CL
https://v2.tustreaming.cl/radioancoatv/index.m3u8
#EXTINF:-1 tvg-id="414" tvg-name="AE Radio" tvg-logo="https://i2.paste.pics/f8b890eebda6062f306024bdc70afafa.png", AE Radio | CL
https://tls-cl.cdnz.cl/aeradio/live/playlist.m3u8
#EXTINF:-1 tvg-id="1301" tvg-name="Radioactiva TV" tvg-logo="https://i.paste.pics/cff8be166e37e6bab62b87f91d6215ca.png", Radioactiva TV | CL
https://redirector.rudo.video/hls-video/339f69c6122f6d8f4574732c235f09b7683e31a5/radioactivatv/radioactivatv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="1270" tvg-name="La Clave" tvg-logo="https://i2.paste.pics/cfee8bde46f156bfd6c7fc6aad021835.png", La Clave | CL
https://unlimited1-cl-isp.dps.live/laclavetv/laclavetv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="882" tvg-name="Pauta TV" tvg-logo="https://lh3.googleusercontent.com/-DB74taQncQw/XbSnai__c5I/AAAAAAAArt0/jqsOckrCWRMdlGZoE1ecSjJrHivTgt_fQCK8BGAsYHg/s0/2019-10-26.png", Pauta TV | CL
https://unlimited1-cl-isp.dps.live/pautatv/pautatv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="426" tvg-name="Radio Tiempo" tvg-logo="https://lh3.googleusercontent.com/-pG_O1wKWuUY/XlPedSivgtI/AAAAAAAAwbg/f7tHw2tx4kMuTwzpTSoJQeiprrvTMshuQCK8BGAsYHg/s0/2020-02-24.png", Radio Tiempo | CL
https://mdstrm.com/live-stream-playlist/63a0664e0b2e5754a7bed954.m3u8
#EXTINF:-1 tvg-id="425" tvg-name="Radio Infinita" tvg-logo="https://i2.paste.pics/e6cda89272e3579a1987bc1380bd5866.png", Radio Infinita | CL
https://mdstrm.com/live-stream-playlist/63a066e54ed536087960b550.m3u8
#EXTINF:-1 tvg-id="428" tvg-name="Radio Romantica" tvg-logo="https://i2.paste.pics/fb1c2e049a401e2e34318f28706587d0.png", Radio Romantica | CL
https://mdstrm.com/live-stream-playlist/63a0674c1137d408b45d4821.m3u8
#EXTINF:-1 tvg-id="423" tvg-name="Radio Agricultura" tvg-logo="https://lh3.googleusercontent.com/-nMa_IsPVRQ0/Xdsii8vjPBI/AAAAAAAAsVI/py8vvCsRNGIuvDA62hxD62S6L29wmGOzACK8BGAsYHg/s0/2019-11-24.png", Radio Agricultura | CL
http://unlimited1-cl-isp.dps.live/921tv/921tv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="427" tvg-name="Radio Duna" tvg-logo="https://lh3.googleusercontent.com/-yl6dZt6XKzE/XdshRlQ88eI/AAAAAAAAsU4/KxB9KZBrShQzBIEQyGmDZ9a-vvI41GiQwCK8BGAsYHg/s0/2019-11-24.png", Radio Duna | CL
https://unlimited1-cl-isp.dps.live/dunatv/dunatv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="429" tvg-name="Pudahuel FM" tvg-logo="https://lh3.googleusercontent.com/-j_3t6HSVxa8/XkbbBzVir0I/AAAAAAAAwDM/kVHViPIlEDs5ntK8W5yfVgaym95puVsLACK8BGAsYHg/s0/2020-02-14.png", Pudahuel FM | CL
https://unlimited2-cl-isp.dps.live/pudahueltv/pudahueltv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="422" tvg-name="Cooperativa" tvg-logo="https://lh3.googleusercontent.com/-z-9QvjvHZ5A/Xdsg1tqv4jI/AAAAAAAAsUw/f9g3MnniEdAxcMWqEsWK6vuikDlDz25iACK8BGAsYHg/s0/2019-11-24.png", Cooperativa | CL
https://unlimited1-cl-isp.dps.live/coopetv/coopetv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="421" tvg-name="Bio Bio TV" tvg-logo="https://lh3.googleusercontent.com/-QHD8_RoRqOU/XxzQUiC2S5I/AAAAAAAA3aY/YM3LJbqZLxot1bbgqWLRVD-QnoFWYaxCgCK8BGAsYHg/s0/2020-07-25.png", Bio Bio TV | CL
https://redirector.rudo.video/hls-video/339f69c6122f6d8f4574732c235f09b7683e31a5/bbtv/bbtv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="424" tvg-name="ADN" tvg-logo="https://lh3.googleusercontent.com/-H20emk-_gGE/Xb2CvlkCsVI/AAAAAAAAr6c/MvhdPSgNp4I1Q9QAGlqEvJp4QRnyorpkgCK8BGAsYHg/s0/2019-11-02.png", ADN | CL
https://redirector.rudo.video/hls-video/931b584451fa6dd1313ee66efbfd5802e3f3bcea/adntv/adntv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="1198" tvg-name="T13 Radio" tvg-logo="https://i2.paste.pics/45e025a4deee9ffaeabe6af0b964a6c8.png", T13 Radio | CL
https://unlimited1-cl-isp.dps.live/t13radio/t13radio.smil/playlist.m3u8
#EXTINF:-1 tvg-id="161" tvg-name="Vida TV" tvg-logo="https://lh3.googleusercontent.com/-M6IkTdk74v8/YEDQ8Yaj8sI/AAAAAAABAg0/0AX-YP_ERfco4p51TJDf3a0-cmAFLb6rgCK8BGAsYHg/s512/2021-03-04.png", Vida TV | CL
http://181.224.64.2:89/vidatv/index.m3u8
#EXTINF:-1 tvg-id="170" tvg-name="Unidad Evangelica TV" tvg-logo="https://lh3.googleusercontent.com/-0tqSzwPEvSc/X7PH803XliI/AAAAAAAA7aQ/4JNA77aFp8gLDSf-RMXP1Ej7gSyKjrKrACK8BGAsYHg/s0/2020-11-17.png", Unidad Evangelica TV | CL
https://v2.tustreaming.cl/unidadevangelica/index.m3u8
#EXTINF:-1 tvg-id="168" tvg-name="TNE" tvg-logo="https://i2.paste.pics/12d449b496fcb00dc23612da150e3fd6.png", TNE | CL
https://v2.tustreaming.cl/tnetv/index.m3u8
#EXTINF:-1 tvg-id="169" tvg-name="Televida HD" tvg-logo="https://i2.paste.pics/a33717fb4cfdc7ac0983ec9b03947e7e.png", Televida HD | CL
https://tls-cl.cdnz.cl/televida/live/playlist.m3u8
#EXTINF:-1 tvg-id="351" tvg-name="Restaurando Vidas TV" tvg-logo="https://i2.paste.pics/bda4dda4f3d61d88354e6d64a8fdbc44.png", Restaurando Vidas TV | CL
https://v4.tustreaming.cl/restaurandovida/index.m3u8
#EXTINF:-1 tvg-id="167" tvg-name="Radio Vida Curico" tvg-logo="https://i2.paste.pics/b5b7b96e2769867a92c9a32dee7cfba9.png", Radio Vida Curico | CL
https://v2.tustreaming.cl/radiovidacurico/rewind-999999.m3u8
#EXTINF:-1 tvg-id="164" tvg-name="NCTV" tvg-logo="https://i2.paste.pics/4a59ad761b7b6578b320729cb230f778.png", NCTV | CL
https://pantera1-100gb-cl-movistar.dps.live/nctv/nctv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="163" tvg-name="Gracia TV" tvg-logo="https://lh3.googleusercontent.com/-SWtsCllpbio/Xpz5oNEdmDI/AAAAAAAAyBc/fsfhz_a0y9I-6v8vfM0zUc_9C_xG3DgagCK8BGAsYHg/s0/2020-04-19.png", Gracia TV | CL
https://v4.tustreaming.cl/graciatv/index.m3u8
#EXTINF:-1 tvg-id="159" tvg-name="Canal ISB" tvg-logo="https://lh3.googleusercontent.com/-BAGm0_jccnk/Xpz6lms-rHI/AAAAAAAAyBk/Mbk9tiXSZPMBkW90NGR8LEG7OR1mmb2sQCK8BGAsYHg/s0/2020-04-19.png", Canal ISB | CL
https://unlimited1-cl-isp.dps.live/isb/isb.smil/playlist.m3u8
#EXTINF:-1 tvg-id="157" tvg-name="Canal 33" tvg-logo="https://lh3.googleusercontent.com/-SM266zq0954/XbJE8J3rspI/AAAAAAAArrY/ul2hiTKcHyUNayzFG1NbGTN11yRpb4oEACK8BGAsYHg/s0/2019-10-24.png", Canal 33 | CL
https://oracle.streaminghd.cl/eduardo555/eduardo555/playlist.m3u8
#EXTINF:-1 tvg-id="1186" tvg-name="Casa Sobre La Roca TV" tvg-logo="https://i2.paste.pics/fabed3217697cbd31cbd240376b2dfdb.png", Casa Sobre La Roca TV | CL
https://cp.panelchs.com:1936/8118/8118/playlist.m3u8
#EXTINF:-1 tvg-id="1202" tvg-name="MC Radio" tvg-logo="https://i2.paste.pics/7070d20a86a32c32e668f538bac42bdf.png", MC Radio | CL
https://live.tvcontrolcp.com:1936/manten/manten/playlist.m3u8
#EXTINF:-1 tvg-id="1306" tvg-name="Telezion" tvg-logo="https://i.paste.pics/744c8dc0a1dfd1f42f8a6facae3333c2.png", Telezion | CL
https://paneltv.net:3751/hybrid/play.m3u8
#EXTINF:-1 tvg-id="1308" tvg-name="Sonido Nazaret" tvg-logo="https://i.paste.pics/b1c8b206c4cfc580d74e9d865957ff17.png", Sonido Nazaret | CL
https://live.tvcontrolcp.com:1936/sonidonazaret/sonidonazaret/playlist.m3u8
#EXTINF:-1 tvg-id="1384" tvg-name="Metanoia TV" tvg-logo="https://i.paste.pics/151c6df5f012237e0a664508de84db1e.png", Metanoia TV | CL
https://6362ca6f1fc28.streamlock.net/8140/8140/playlist.m3u8
#EXTINF:-1 tvg-id="1390" tvg-name="TV Emanuel" tvg-logo="https://i.paste.pics/051076385a23f7e0dbcb12c94c20e109.png", TV Emanuel | CL
https://Stmv1.zcasthn.com.br/ministerioemanuel/ministerioemanuel/playlist.m3u8
#EXTINF:-1 tvg-id="1399" tvg-name="IPNA Medio" tvg-logo="https://i2.paste.pics/c6788a74a24fa5859af6167d6fc0f659.png", IPNA Medio | CL
https://paneltv.online:1936/8184/8184/playlist.m3u8
#EXTINF:-1 tvg-id="1412" tvg-name="Enlace BPB" tvg-logo="https://i2.paste.pics/8d175ca5266fe11e2de8318f0724d96c.png", Enlace BPB | CL
https://v1.tustreaming.cl/enlacebpbtv/index.m3u8
#EXTINF:-1 tvg-id="1444" tvg-name="Cristo Poder De Dios TV" tvg-logo="https://i2.paste.pics/2c9b7eabbe31208cdf9493ed9bc78259.png", Cristo Poder De Dios TV | CL
https://vdo.miserver.pro/p/3487/hybrid/play.m3u8
#EXTINF:-1 tvg-id="1450" tvg-name="Radio Israel" tvg-logo="https://i2.paste.pics/cd076383a1e326a4e2a438733669adc1.png", Radio Israel | CL
https://vdochile.com:3168/hybrid/play.m3u8
#EXTINF:-1 tvg-id="1456" tvg-name="Cero Anestesia" tvg-logo="https://i2.paste.pics/939584306bca2e6e0c4d33eda13b7f8c.png", Cero Anestesia | CL
https://webtvca.autoplayout.com/hls/0/stream.m3u8
#EXTINF:-1 tvg-id="173" tvg-name="Escuchame Radio" tvg-logo="https://lh3.googleusercontent.com/-eQd-W5mPTuw/YDwxJZOsNSI/AAAAAAABAcs/0mAPdTthnzsqYh3wSG0soki-xF-As78UQCK8BGAsYHg/s512/2021-02-28.png", Escuchame Radio | CL
https://stmv2.zcasthn.com.br/escuchame/escuchame/playlist.m3u8
#EXTINF:-1 tvg-id="1480" tvg-name="Fortaleza Radio" tvg-logo="https://i2.paste.pics/1f09fb712957263bd30cc502ce6b9670.png", Fortaleza Radio | CL
https://live.tvcontrolcp.com:1936/fortalezatv/fortalezatv/playlist.m3u8
#EXTINF:-1 tvg-id="1479" tvg-name="Fortaleza TV" tvg-logo="https://i2.paste.pics/34c6e0cc1a8eccd67342a70fb2281c7c.png", Fortaleza TV | CL
https://multimedia.fortalezatv.cl/video/video.m3u8
https://multimedia.fortalezatv.cl/video/video.m3u8
`

let parseM3u = m3utojson(m3u);