/* 
Guía rápida:

    'nombre': {                   (Nombre objeto/canal, no repetir entre señales debe ser único (sin espacios))
        'nombre': 'nombre'        (Nombre del canal a mostrar en botón y barra que dirige a su origen cuando esta activo)

tipos de enlaces posibles [Recordar utilizar solo enlaces https si se aloja en GitHub y solo 1 tipo por canal/señal]:

        'iframeURL': 'url'        (contenido que va dentro de un iframe (un embed directo))
        'm3u8URL': 'url'          (para enlaces ".m3u8", no listas ".m3u". Solo canales individuales)
        'ytID': 'url'             (ID referente a un canal de Youtube [https://www.youtube.com/channel/"ytID"]. NO REQUIERE 'fuente' DEBIDO A REDUNDANCIA)

        'fuente': 'url'           ("fuente" es el enlace de origen de la señal, a modo de transparencia y libertad de abandonar la página si solo se quiere continuar con dicha señal, si se extrae una señal ya sea tipo "iframe" o "m3u8" de www.pagina-ejemplo.cl debe de ponerse www.pagina-ejemplo.cl en "fuente". Si no se obtiene señal desde el emisor oficial como tal, se utiliza el sitio del emisor sobre el de terceros (ejemplo: saque canal de una lista IPTV, por lo que pongo el sitio del canal, no la lista IPTV. Ya que eso va en el listado de canales en archivo README))
    }

by Alplox 
https://github.com/Alplox/la-tele
*/

const listaCanales = {
    // CHILE
    '24-horas': {
        'nombre': '24 horas',
        'ytID': 'UCTXNz3gjAypWp3EhlIATEJQ'
    },     
    '24-horas-2': {
        'nombre': '24 Horas 2',
        'm3u8URL': 'https://mdstrm.com/live-stream-playlist/57d1a22064f5d85712b20dab.m3u8',
        'fuente': 'https://www.24horas.cl/envivo/'
    },
    '24-horas-3': {
        'nombre': '24 Horas 3',
        'm3u8URL': 'https://mdstrm.com/live-stream-playlist-v/5346f657c1e6f5810b5b9df3.m3u8',
        'fuente': 'https://www.24horas.cl/envivo/'
    },
    '24-horas-4': {
        'nombre': '24 horas 4',
        'iframeURL': 'https://player.twitch.tv/?channel=24horas_tvn&parent=alplox.github.io',
        'fuente': 'https://www.twitch.tv/24horas_tvn'
    },
    '24-horas-5': {
        'nombre': '24 horas 5',
        'iframeURL': 'https://mdstrm.com/live-stream/57d1a22064f5d85712b20dab?jsapi=true&autoplay=true&volume=0',
        'fuente': 'https://www.24horas.cl/envivo/'
    },
    '24-horas-6': {
        'nombre': '24 horas 6',
        'iframeURL': 'https://mdstrm.com/live-stream/57d1a22064f5d85712b20dab?jsapi=true&autoplay=true&controls=true&volume=0&mute=true&player=57f4e28f9c53768535d65782&access_token=&custom.preroll=&custom.overlay=',
        'fuente': 'https://www.24horas.cl/envivo/'
    },
    '24-horas-s2': {
        'nombre': '24 Horas s2',
        'm3u8URL': 'https://mdstrm.com/live-stream-playlist-v/53443c472c6e89675103cc4c.m3u8',
        'fuente': 'https://www.24horas.cl/envivo/'
    },
    '24-horas-s2-2': {
        'nombre': '24 Horas s2 2',
        'm3u8URL': 'https://mdstrm.com/live-stream-playlist-v/5346f5f2c1e6f5810b5b9df0.m3u8',
        'fuente': 'https://www.24horas.cl/envivo/'
    },
    '24-horas-s3': {
        'nombre': '24 Horas s3',
        'm3u8URL': 'https://mdstrm.com/live-stream-playlist-v/555c9a91eb4886825b07ee7b.m3u8',
        'fuente': 'https://www.24horas.cl/envivo/'
    },
    'tvn': {
        'nombre': 'TVN',
        'ytID': 'UCaVaCaiG6qRzDiJDuEGKOhQ'
    },
    'tvn-2': {
        'nombre': 'TVN 2',
        'm3u8URL': 'https://marine2.miplay.cl/tvn/index.m3u8',
        'fuente': 'https://www.tvn.cl/'
    },
    'tvn-3': {
        'nombre': 'TVN 3',
        'iframeURL': 'https://ok.ru/videoembed/3440915652202?nochat=1&autoplay=1',
        'fuente': 'https://www.tvn.cl/'
    },
    'meganoticias': {
        'nombre': 'Meganoticias',
        'ytID': 'UCkccyEbqhhM3uKOI6Shm-4Q'
    },
    'meganoticias-2': {
        'nombre': 'Meganoticias 2',
        'iframeURL': 'https://player.twitch.tv/?channel=meganoticiascl&parent=alplox.github.io',
        'fuente': 'https://www.twitch.tv/meganoticiascl'
    },
    'mega': {
        'nombre': 'Mega',
        'm3u8URL': 'https://marine2.miplay.cl/mega/index.m3u8',
        'fuente': 'https://www.mega.cl/'
    },
    'mega-2': {
        'nombre': 'Mega 2',
        'iframeURL': 'https://ok.ru/videoembed/3440906608234?nochat=1&autoplay=1',
        'fuente': 'https://www.mega.cl/'
    },
    't13': {
        'nombre': 'T13',
        'ytID': 'UCsRnhjcUCR78Q3Ud6OXCTNg'
    },
    't13-2': {
        'nombre': 'T13 2',
        'iframeURL': 'https://player.twitch.tv/?channel=t13envivo&parent=alplox.github.io',
        'fuente': 'https://www.twitch.tv/t13envivo'
    },
    't13-3': {
        'nombre': 'T13 3',
        'm3u8URL': 'https://unlimited1-cl-isp.dps.live/t13/t13.smil/playlist.m3u8',
        'fuente': 'https://www.t13.cl/'
    },
    'canal-13': {
        'nombre': 'Canal 13',
        'ytID': 'UCd4D3LfXC_9MY2zSv_3gMgw'
    },
    'canal-13-2': {
        'nombre': 'Canal 13 2',
        'iframeURL': 'https://13313131.tnvas.repl.co/',
        'fuente': 'https://www.13.cl/en-vivo'
    },
    'canal-13-3': {
        'nombre': 'Canal 13 3',
        'iframeURL': 'https://ok.ru/videoembed/3440918732394?nochat=1&autoplay=1',
        'fuente': 'https://www.13.cl/en-vivo'
    },
    'cnn-cl': {
        'nombre': 'CNN Chile',
        'ytID': 'UCpOAcjJNAp0Y0fhznRrXIJQ'
    },
    'chv-noticias': {
        'nombre': 'CHV Noticias',
        'ytID': 'UCRsUoZYC1ULUspipMRnMhwg'
    },
    'chv-noticias-2': {
        'nombre': 'CHV Noticias 2',
        'm3u8URL': 'https://siloh-latam-aka.plutotv.net/lilo/production/Chilevision/master.m3u8',
        'fuente': 'https://www.chvnoticias.cl/'
    },
    'chv': {
        'nombre': 'CHV',
        'ytID': 'UC8EdTmyUaFIfZvVttJ9lgIA'
    },
    'chv-2': {
        'nombre': 'CHV 2',
        'iframeURL': 'https://chvvvvvvvv.temporalservel.repl.co/',
        'fuente': 'https://www.chilevision.cl/senal-online'
    },
    'chv-3': {
        'nombre': 'CHV 3',
        'm3u8URL': 'https://marine2.miplay.cl/chilevision/index.m3u8',
        'fuente': 'https://www.chilevision.cl/senal-online'
    },
    'chv-4': {
        'nombre': 'CHV 4',
        'iframeURL': 'https://ok.ru/videoembed/3440896777834?nochat=1&autoplay=1',
        'fuente': 'https://www.chilevision.cl/senal-online'
    },
    'la-red': {
        'nombre': 'La Red',
        'm3u8URL': 'https://d2tr4gdfol9ja.cloudfront.net/lared/smil:lared.smil/playlist.m3u8',
        'fuente': 'https://www.lared.cl/senal-online'
    },
    'la-red-2': {
        'nombre': 'La Red 2',
        'm3u8URL': 'https://marine2.miplay.cl/lared/index.m3u8',
        'fuente': 'https://www.lared.cl/senal-online'
    },
    'cooperativa': {
        'nombre': '<i class="ai-music-album"></i> Cooperativa',
        'iframeURL': 'https://rudo.video/live/coopetv?volume=0&mute=1',
        'fuente': 'http://programas.cooperativa.cl/showalairelibre/'
    },
    'bbtv': {
        'nombre': '<i class="ai-music-album"></i> Biobio TV',
        'iframeURL': 'https://rudo.video/live/bbtv?volume=0&mute=1',
        'fuente': 'https://www.biobiochile.cl/biobiotv/'
    },
    'bbtv-2': {
        'nombre': '<i class="ai-music-album"></i> Biobio TV 2',
        'm3u8URL': 'https://unlimited1-cl-isp.dps.live/bbtv/bbtv.smil/playlist.m3u8',
        'fuente': 'https://www.biobiochile.cl/biobiotv/'
    },
    'adn': {
        'nombre': '<i class="ai-music-album"></i> ADN',
        'iframeURL': 'https://rudo.video/live/adntv?volume=0&mute=1',
        'fuente': 'http://tv.adnradio.cl/'
    },
    'adn-2': {
        'nombre': '<i class="ai-music-album"></i> ADN 2',
        'ytID': 'UCczkrFICr0xEgDsk51zZojA'
    },
    'adn-3': {
        'nombre': '<i class="ai-music-album"></i> ADN 3',
        'm3u8URL': 'https://unlimited1-us.dps.live/adntv/adntv.smil/playlist.m3u8',
        'fuente': 'http://tv.adnradio.cl/'
    },
    'adn-4': {
        'nombre': '<i class="ai-music-album"></i> ADN 4',
        'm3u8URL': 'https://unlimited6-cl.dps.live/adntv/adntv.smil/playlist.m3u8',
        'fuente': 'http://tv.adnradio.cl/'
    },
    'adn-5': {
        'nombre': '<i class="ai-music-album"></i> ADN 5',
        'm3u8URL': 'https://unlimited2-cl-isp.dps.live/adntv/adntv.smil/playlist.m3u8',
        'fuente': 'http://tv.adnradio.cl/'
    },
    'duna': {
        'nombre': '<i class="ai-music-album"></i> Duna',
        'iframeURL': 'https://rudo.video/live/dunatv?volume=0&mute=1',
        'fuente': 'https://www.duna.cl/tv/'
    },
    'infinita': {
        'nombre': '<i class="ai-music-album"></i> Infinita',
        'iframeURL': 'https://rudo.video/live/infinitatv?volume=0&mute=1',
        'fuente': 'http://www.infinita.cl/home/'
    },
    'universo': {
        'nombre': '<i class="ai-music-album"></i> Universo',
        'iframeURL': 'https://rudo.video/live/universotv?volume=0&mute=1',
        'fuente': 'https://www.universo.cl/'
    },
    'radio-ae': {
        'nombre': '<i class="ai-music-album"></i> AE Radio DuocUC',
        'iframeURL': 'https://live.grupoz.cl/3e3852b5c1ea7821ab9cdfadbbe735f2?sound=0',
        'fuente': 'https://www.aeradio.cl/'
    },
    'carolina-tv': {
        'nombre': '<i class="ai-music-album"></i> Carolina TV',
        'iframeURL': 'https://rudo.video/live/carolinatv?volume=0&mute=1',
        'fuente': 'https://www.carolina.cl/tv/'
    },
    'carolina-tv-2': {
        'nombre': '<i class="ai-music-album"></i> Carolina TV 2',
        'm3u8URL': 'https://unlimited6-cl.dps.live/carolinatv/carolinatv.smil/carolinatv/livestream2/chunks.m3u8',
        'fuente': 'https://www.carolina.cl/tv/'
    },
    'carolina-tv-3': {
        'nombre': '<i class="ai-music-album"></i> Carolina TV 3',
        'm3u8URL': 'https://unlimited1-us.dps.live/carolinatv/carolinatv.smil/playlist.m3u8',
        'fuente': 'https://www.carolina.cl/tv/'
    },
    'fm-tiempo': {
        'nombre': '<i class="ai-music-album"></i> FM Tiempo',
        'iframeURL': 'https://rudo.video/live/fmtiempotv?volume=0&mute=1',
        'fuente': 'https://www.fmtiempo.cl/'
    },
    'fm-tiempo-2': {
        'nombre': '<i class="ai-music-album"></i> FM Tiempo 2',
        'm3u8URL': 'https://unlimited10-cl.dps.live/fmtiempotv/fmtiempotv.smil/playlist.m3u8',
        'fuente': 'https://www.fmtiempo.cl/'
    },
    'alegria-tv': {
        'nombre': '<i class="ai-music-album"></i> Alegría TV',
        'm3u8URL': 'https://593b04c4c5670.streamlock.net:443/8192/8192/playlist.m3u8',
        'fuente': 'https://www.alegriafm.cl/'
    },
    'alegria-tv-2': {
        'nombre': '<i class="ai-music-album"></i> Alegría TV 2',
        'm3u8URL': 'https://593b04c4c5670.streamlock.net/8192/8192/playlist.m3u8',
        'fuente': 'https://www.alegriafm.cl/'
    },
    'romantica-tv': {
        'nombre': '<i class="ai-music-album"></i> Romántica TV',
        'iframeURL': 'https://rudo.video/live/romanticatv?volume=0&mute=1',
        'fuente': 'https://www.romantica.cl/romantica-tv/'
    },
    'romantica-tv-2': {
        'nombre': '<i class="ai-music-album"></i> Romántica TV 2',
        'm3u8URL': 'https://unlimited2-cl-isp.dps.live/romanticatv/romanticatv.smil/playlist.m3u8',
        'fuente': 'https://www.romantica.cl/romantica-tv/'
    },
    'radio-genial': {
        'nombre': '<i class="ai-music-album"></i> Radio Genial 100.5 FM',
        'm3u8URL': 'https://v2.tustreaming.cl/genialtv/index.m3u8',
        'fuente': 'https://radiogenial.cl/'
    },
    'mi-radio-es-mas': {
        'nombre': '<i class="ai-music-album"></i> Mi Radio es Más',
        'ytID': 'UCflUbt1g29kPG-H9SV5QIyw'
    },
    'radio-la-clave': {
        'nombre': '<i class="ai-music-album"></i> Radio La Clave',
        'iframeURL': 'https://rudo.video/live/laclavetv?volume=0&mute=1',
        'fuente': 'https://radiolaclave.cl/'
    },
    'radio-folclor-chile': {
        'nombre': '<i class="ai-music-album"></i> Radio Folclor de Chile',
        'ytID': 'UC0Hl8kJe8Xwv8g63Q4qefQg'
    },
    'radio-maria-chile': {
        'nombre': '<i class="ai-music-album"></i> Radio María Chile',
        'ytID': 'UClMwb2kCYemWyDIZ2dYttKA'
    },
    'sembrador': {
        'nombre': '<i class="ai-music-album"></i> El Sembrador',
        'm3u8URL': 'https://5eff35271151c.streamlock.net:1936/8064/8064/playlist.m3u8',
        'fuente': 'https://www.radioelsembrador.cl/tv/'
    },
    'radio-nuble': {
        'nombre': '<i class="ai-music-album"></i> Radio Ñuble',
        'm3u8URL': 'https://live.tvcontrolcp.com:1936/Rnuble/Rnuble/playlist.m3u8',
        'fuente': 'http://radionuble.cl/linea/'
    },
    'alternativa-fm': {
        'nombre': '<i class="ai-music-album"></i> Alternativa FM',
        'm3u8URL': 'https://srv2.zcast.com.br/carlos2469/carlos2469/playlist.m3u8',
        'fuente': 'https://www.alternativafm.cl/p/alternativa-tv.html'
    },
    'prensa-presidencia': {
        'nombre': 'Prensa Presidencia',
        'iframeURL': 'https://mdstrm.com/live-stream/5dc17f8944795108a2a52a49?autoplay=true&volume=0',
        'fuente': 'https://prensa.presidencia.cl/streaming.aspx'
    },
    'stgo-tv': {
        'nombre': 'Stgo TV',
        'iframeURL': 'https://stv.janus.cl/front/embed.html',
        'fuente': 'https://www.santiagotelevision.cl/'
    },
    'tv-mas': {
        'nombre': 'TV+',
        'm3u8URL': 'https://mdstrm.com/live-stream-playlist/5c0e8b19e4c87f3f2d3e6a59.m3u8',
        'fuente': 'https://www.tvmas.tv/'
    },
    'tv-mas-2': {
        'nombre': 'TV+ 2',
        'iframeURL': 'https://mdstrm.com/live-stream/5c0e8b19e4c87f3f2d3e6a59?autoplay=true&volume=0',
        'fuente': 'https://www.tvmas.tv/'
    },
    'derechofacil-tw': {
        'nombre': 'DerechoFacil',
        'iframeURL': 'https://player.twitch.tv/?channel=derechofacil&parent=alplox.github.io',
        'fuente': 'https://www.twitch.tv/derechofacil'
    },
    'voz-sobran': {
        'nombre': 'La Voz De Los Que Sobran',
        'ytID': 'UCEnSee5vPeNAm2EFpb_UaRw'
    },
    'copano': {
        'nombre': 'Nicolas Copano',
        'ytID': 'UCVTL17ftpqx3lQ_IaGUNgSg'
    },
    'copano-tw': {
        'nombre': 'Nicolas Copano 2',
        'iframeURL': 'https://player.twitch.tv/?channel=copano&parent=alplox.github.io',
        'fuente': 'https://www.twitch.tv/copano'
    },
    'puranoticia': {
        'nombre': 'Puranoticia TV',
        'm3u8URL': 'https://pnt.janusmedia.tv/hls/pnt.m3u8',
        'fuente': 'https://puranoticia.pnt.cl/'
    },
    'holvoet-tv': {
        'nombre': 'Holvoet TV',
        'iframeURL': 'https://rudo.video/live/holvoettv',
        'fuente': 'https://holvoet.cl/en-vivo/'
    },
    'holvoet-tv-2': {
        'nombre': 'Holvoet TV 2',
        'm3u8URL': 'https://unlimited1-cl-isp.dps.live/holvoettv/holvoettv.smil/playlist.m3u8',
        'fuente': 'https://holvoet.cl/en-vivo/'
    },
    'antofagasta-tv': {
        'nombre': 'Antofagasta TV',
        'm3u8URL': 'https://unlimited6-cl.dps.live/atv/atv.smil/atv/livestream2/playlist.m3u8',
        'fuente': 'https://www.antofagasta.tv/'
    },
    'antofagasta-tv-2': {
        'nombre': 'Antofagasta TV 2',
        'm3u8URL': 'https://unlimited1-cl-isp.dps.live/atv/atv.smil/playlist.m3u8',
        'fuente': 'https://www.antofagasta.tv/'
    },
    'antofagasta-tv-3': {
        'nombre': 'Antofagasta TV 3',
        'm3u8URL': 'https://unlimited6-cl.dps.live/atv/atv.smil/playlist.m3u8',
        'fuente': 'https://www.antofagasta.tv/'
    },
    'arab-tv': {
        'nombre': 'ARABTV',
        'm3u8URL': 'https://livefocamundo.com:8081/arabtv/index.m3u8',
        'fuente': 'https://www.arabtv.cl/'
    },
    'arab-tv-2': {
        'nombre': 'ARABTV 2',
        'm3u8URL': 'https://livefocamundo.com:8081/arabtv/playlist.m3u8',
        'fuente': 'https://www.arabtv.cl/'
    },
    'arica-tv': {
        'nombre': 'Arica TV',
        'm3u8URL': 'https://5eff35271151c.streamlock.net:1936/8002/8002/playlist.m3u8',
        'fuente': 'https://arica.tv/envivo/'
    },
    'atacama-tv': {
        'nombre': 'Atacama TV',
        'm3u8URL': 'https://v2.tustreaming.cl/atacamatv/index.m3u8',
        'fuente': 'http://atacamatelevision.com/'
    },
    'atacama-tv-2': {
        'nombre': 'Atacama TV 2',
        'm3u8URL': 'https://v2.tustreaming.cl/atacamatv/tracks-v1a1/mono.m3u8',
        'fuente': 'http://atacamatelevision.com/'
    },
    'canal-9': {
        'nombre': 'Canal 9',
        'iframeURL': 'https://rudo.video/live/c9?volume=0&mute=1',
        'fuente': 'https://www.canal9.cl/en-vivo/'
    },
    'canal-9-2': {
        'nombre': 'Canal 9 2',
        'm3u8URL': 'https://unlimited6-cl.dps.live/c9/c9.smil/c9/livestream1/chunks.m3u8',
        'fuente': 'https://www.canal9.cl/en-vivo/'
    },
    'tvu': {
        'nombre': 'TVU',
        'iframeURL': 'https://rudo.video/live/tvu?volume=0&mute=1',
        'fuente': 'https://www.tvu.cl/'
    },
    'tvu-2': {
        'nombre': 'TVU 2',
        'm3u8URL': 'https://unlimited6-cl.dps.live/tvu/tvu.smil/playlist.m3u8',
        'fuente': 'https://www.tvu.cl/'
    },
    'canal-21': {
        'nombre': 'Canal 21',
        'iframeURL': 'https://live.grupoz.cl/8b383d0a9cef5560a1bfbbeaf6ad4a38?sound=0',
        'fuente': 'https://www.canal21tv.cl/wp/en-vivo/'
    },
    'canal-21-2': {
        'nombre': 'Canal 21 2',
        'm3u8URL': 'https://tls-cl.cdnz.cl/canal21tv/live/playlist.m3u8',
        'fuente': 'https://www.canal21tv.cl/wp/en-vivo/'
    },
    'nublevision': {
        'nombre': 'Ñublevision',
        'm3u8URL': 'https://cdn.oneplaychile.cl:1936/regionales/nublevision.stream/playlist.m3u8',
        'fuente': 'https://nublevision.cl/'
    },
    'nuble-RTV': {
        'nombre': 'Ñuble RVT',
        'm3u8URL': 'https://live.tvcontrolcp.com:1936/guzman/guzman/playlist.m3u8',
        'fuente': 'https://canalrtv.cl/'
    },
    'estaciontv': {
        'nombre': 'Estacióntv',
        'm3u8URL': 'https://unlimited6-cl.dps.live/estaciontv/estaciontv.smil/playlist.m3u8',
        'fuente': 'https://www.estaciontv.cl/site/'
    },
    'estaciontv-2': {
        'nombre': 'Estacióntv 2',
        'm3u8URL': 'https://pantera1-100gb-cl-movistar.dps.live/estaciontv/estaciontv.smil/playlist.m3u8',
        'fuente': 'https://www.estaciontv.cl/site/'
    },
    'pinguino-tv': {
        'nombre': 'Pingüino TV',
        'iframeURL': 'https://elpinguino.com/reproductor/',
        'fuente': 'https://elpinguino.com/reproductor/'
    },
    'pinguino-tv-2': {
        'nombre': 'Pingüino TV 2',
        'm3u8URL': 'https://streaming.elpinguino.com:5391/live/EP.smil/playlist.m3u8',
        'fuente': 'https://elpinguino.com/reproductor/'
    },
    'itv-patagonia': {
        'nombre': 'ITV Patagonia',
        'iframeURL': 'https://rudo.video/live/itv?volume=0&mute=1',
        'fuente': 'https://www.itvpatagonia.com/'
    },
    'itv-patagonia-2': {
        'nombre': 'ITV Patagonia 2',
        'm3u8URL': 'https://unlimited1-cl-isp.dps.live/itv/itv.smil/playlist.m3u8',
        'fuente': 'https://www.itvpatagonia.com/'
    },
    'ucv': {
        'nombre': 'UCV TV',
        'iframeURL': 'https://rudo.video/live/ucvtv2?volume=0&mute=1',
        'fuente': 'https://pucvmultimedios.cl/senal-online-tv.php'
    },
    'ucv-2': {
        'nombre': 'UCV TV 2',
        'm3u8URL': 'https://unlimited10-cl.dps.live/ucvtv2/ucvtv2.smil/playlist.m3u8',
        'fuente': 'https://pucvmultimedios.cl/senal-online-tv.php'
    },
    'uatv': {
        'nombre': 'UATV',
        'iframeURL': 'https://rudo.video/live/uatv?volume=0&mute=1',
        'fuente': 'https://uatv.cl/uatv-en-vivo/'
    },
    'vtv': {
        'nombre': 'VTV',
        'iframeURL': 'https://rudo.video/live/vtv?volume=0&mute=1',
        'fuente': 'http://canalvtv.cl/vtv/'
    },
    'canal-33': {
        'nombre': 'Canal 33',
        'iframeURL': 'https://streaminghd.cl/player.video/index.php?s=eduardo555/eduardo555',
        'fuente': 'http://www.canal33.cl/online.php'
    },
    'contivision': {
        'nombre': 'Contivision',
        'iframeURL': 'https://rudo.video/live/contivision?volume=0&mute=1',
        'fuente': 'http://w.contivision.cl/cvn/envivo.php'
    },
    'contivision-2': {
        'nombre': 'Contivision 2',
        'm3u8URL': 'https://unlimited1-cl-isp.dps.live/contivision/contivision.smil/playlist.m3u8',
        'fuente': 'http://w.contivision.cl/cvn/envivo.php'
    },
    'osorno-tv': {
        'nombre': 'Osorno TV',
        'm3u8URL': 'https://hd.chileservidores.cl:1936/osorno2/live/playlist.m3u8',
        'fuente': 'https://www.osornotv.cl/envivo.html'
    },
    'teleton-tv': {
        'nombre': 'Teletón TV',
        'iframeURL': 'https://mdstrm.com/live-stream/5d6d5f05a2f6f407b0147965?autoplay=true&volume=0',
        'fuente': 'https://teletontv.cl/'
    },
    'teleton-tv-2': {
        'nombre': 'Teletón TV 2',
        'm3u8URL': 'https://mdstrm.com/live-stream-playlist/5d6d5f05a2f6f407b0147965.m3u8',
        'fuente': 'https://teletontv.cl/'
    },
    'tv-salud': {
        'nombre': 'TV Salud',
        'm3u8URL': 'https://srv3.zcast.com.br/mastermedia/mastermedia/tvsalud.cl.m3u8',
        'fuente': 'https://tvsalud.cl/'
    },
    //MUSICA
    'imuc-radio-chile': {
        'nombre': '<i class="ai-music-note"></i> IMUC Chile',
        'ytID': 'UCIIDtZoaK9UZi4FaGMmL_hw'
    },
    // CAMARAS MUNDO
    // Chile
    'galeria-cima': {
        'nombre': '<i class="ai-location"></i> Galería CIMA',
        'ytID': 'UC4GOcOKkEefz5NamN4WyMFg'
    },
    'parquemet-cumbre': {
        'nombre': '<i class="ai-location"></i> Halcón Parquemet, Cumbre',
        'iframeURL': 'https://g1.ipcamlive.com/player/player.php?alias=5a7084c9e0136&autoplay=true',
        'fuente': 'https://halcon.parquemet.cl/index.html'
    },
    'parquemet-terraza': {
        'nombre': '<i class="ai-location"></i> Halcón Parquemet, Terraza',
        'iframeURL': 'https://g1.ipcamlive.com/player/player.php?alias=5a7085fe914c0&autoplay=true',
        'fuente': 'https://halcon.parquemet.cl/index.html'
    },
    'ledrium': {
        'nombre': '<i class="ai-location"></i> Ledrium',
        'ytID': 'UCTDewuGhfwGv6JRNnqa-yXw',
    },
    'muni-osorno': {
        'nombre': '<i class="ai-location"></i> Municipalidad Osorno',
        'ytID': 'UCD7sqegDNyZxmdnCj6xqH6g'
    },
    'glaseado-1': {
        'nombre': '<i class="ai-location"></i> glaseado.cl, Huayquique',
        'iframeURL': 'https://g3.ipcamlive.com/player/player.php?alias=huayquique&autoplay=1',
        'fuente': 'https://www.glaseado.cl/surf-cams/huayquique/'
    },
    'glaseado-2': {
        'nombre': '<i class="ai-location"></i> glaseado.cl, Las Urracas',
        'iframeURL': 'https://g3.ipcamlive.com/player/player.php?alias=lasurracas&autoplay=1',
        'fuente': 'https://www.glaseado.cl/surf-cams/las-urracas/'
    },
    'glaseado-3': {
        'nombre': '<i class="ai-location"></i> glaseado.cl, La Punta',
        'iframeURL': 'https://g3.ipcamlive.com/player/player.php?alias=lapunta&autoplay=1',
        'fuente': 'https://www.glaseado.cl/surf-cams/la-punta/'
    },
    // EDUCATIVOS
    'tv-educa-cl': {
        'nombre': '<i class="ai-book-open"></i> TV Educa Chile',
        'm3u8URL': 'https://mdstrm.com/live-stream-playlist-v/5e74e53f1ab4eb073b19ef34.m3u8',
        'fuente': 'https://www.tvn.cl/envivo/tveducachile/'
    },
    'puntaje-nacional': {
        'nombre': '<i class="ai-book-open"></i> Puntaje Nacional Chile',
        'ytID': 'UCCY6xIXHmGBGZUgUYxtfKSg'
    },
    // GOBIERNO 
    'gob-cl': {
        'nombre': '<i class="ai-newspaper"></i> Gobierno de Chile',
        'iframeURL': 'https://mdstrm.com/live-stream/5c12a5c39e03df0795a74d3a?autoplay=true&volume=0',
        'fuente': 'https://www.gob.cl/'
    },
    'tv-senado': {
        'nombre': '<i class="ai-newspaper"></i> TV Senado',
        'iframeURL': 'https://janus-tv.senado.cl/embed.php',
        'fuente': 'https://tv.senado.cl/'
    },
    'tv-senado-2': {
        'nombre': '<i class="ai-newspaper"></i> TV Senado 2',
        'm3u8URL': 'https://janus-tv-ply.senado.cl/playlist/playlist.m3u8',
        'fuente': 'https://tv.senado.cl/'
    },
    'tv-senado-3': {
        'nombre': '<i class="ai-newspaper"></i> TV Senado 3',
        'ytID': 'UC4GJ43VNn4AYfiYa0RBCHQg'
    },
    'convencion-tv': {
        'nombre': '<i class="ai-newspaper"></i> Convención Constitucional',
        'iframeURL': 'https://mdstrm.com/live-stream/60d476c14157440829d03cd7?autoplay=true&volume=0',
        'fuente': 'https://www.convencion.tv/'
    },
    'convencion-tv-2': {
        'nombre': '<i class="ai-newspaper"></i> Convención Constitucional 2',
        'm3u8URL': 'https://mdstrm.com/live-stream-playlist/60d1f10fdacfa008348d71d2.m3u8',
        'fuente': 'https://www.convencion.tv/'
    },
    'convencion-tv-3': {
        'nombre': '<i class="ai-newspaper"></i> Convención Constitucional 3',
        'ytID': 'UCRlIWVAxQdAnCl4D4UR9r3Q'
    },
    'convencion-tv-01': {
        'nombre': '<i class="ai-newspaper"></i> Convención Constitucional YT 01',
        'ytID': 'UCc3koBbWMyvSyzRbG5eTgvQ'
    },
    'convencion-tv-02': {
        'nombre': '<i class="ai-newspaper"></i> Convención Constitucional YT 02',
        'ytID': 'UCKmKUwcjv6HJP7-z9Nnpp2w'
    },
    'convencion-tv-03': {
        'nombre': '<i class="ai-newspaper"></i> Convención Constitucional YT 03',
        'ytID': 'UCeIlCkkBplhU0SrWM9B7u7Q'
    },
    'convencion-tv-04': {
        'nombre': '<i class="ai-newspaper"></i> Convención Constitucional YT 04',
        'ytID': 'UCkMWMYCPUGzf3UPAxcIaVqA'
    },
    'convencion-tv-05': {
        'nombre': '<i class="ai-newspaper"></i> Convención Constitucional YT 05',
        'ytID': 'UChNeKfZ0-wwuOCyUSu6BlcA'
    },
    'convencion-tv-06': {
        'nombre': '<i class="ai-newspaper"></i> Convención Constitucional YT 06',
        'ytID': 'UC-HPc8CLoGRSG0dgbzZbDWA'
    },
    'convencion-tv-07': {
        'nombre': '<i class="ai-newspaper"></i> Convención Constitucional YT 07',
        'ytID': 'UC9p2Hsom7SXdro9FhN4K59w'
    },
    'convencion-tv-08': {
        'nombre': '<i class="ai-newspaper"></i> Convención Constitucional YT 08',
        'ytID': 'UCFkkF0LKUOUOcQEwG4nTrHw'
    },
    'convencion-tv-09': {
        'nombre': '<i class="ai-newspaper"></i> Convención Constitucional YT 09',
        'ytID': 'UCEK7dK0jllE0uXMhEQTV6og'
    },
    'convencion-tv-10': {
        'nombre': '<i class="ai-newspaper"></i> Convención Constitucional YT 10',
        'ytID': 'UC1qhPKBTpfhjVcTMzmM8mGw'
    },
    'convencion-tv-11': {
        'nombre': '<i class="ai-newspaper"></i> Convención Constitucional YT 11',
        'ytID': 'UCRVinYIynLNcn18wHjmI5Vg'
    },
    'convencion-tv-12': {
        'nombre': '<i class="ai-newspaper"></i> Convención Constitucional YT 12',
        'ytID': 'UCJerNR157sjR83jMChSocPQ'
    },
    'convencion-tv-13': {
        'nombre': '<i class="ai-newspaper"></i> Convención Constitucional YT 13',
        'ytID': 'UCxI0u9BUvXbGHrv200cgFZg'
    },
    'convencion-tv-14': {
        'nombre': '<i class="ai-newspaper"></i> Convención Constitucional YT 14',
        'ytID': 'UCxAECnUReRnEwkFThbjtH2Q'
    },
    'convencion-tv-15': {
        'nombre': '<i class="ai-newspaper"></i> Convención Constitucional YT 15',
        'ytID': 'UCTGMQgIdFvz3qlD9mKb8v9w'
    },
    'tribunal-consti': {
        'nombre': '<i class="ai-newspaper"></i> Tribunal Constitucional',
        'ytID': 'UCZaI-1N1oaGb-U8K2VNztjg'
    },
    'poder-judicial': {
        'nombre': '<i class="ai-newspaper"></i> Poder Judicial',
        'ytID': 'UCo0C1-ocUG9a0Yb3iO0V-xg'
    },
    'cam-dipu-1': {
        'nombre': '<i class="ai-newspaper"></i> Cámara Diputados',
        'm3u8URL': 'https://camara.03.cl.cdnz.cl/camara19/live/playlist.m3u8',
        'fuente': 'http://www.cdtv.cl/'
    },
    'cam-dipu-2': {
        'nombre': '<i class="ai-newspaper"></i> Cámara Diputados 2',
        'm3u8URL': 'https://camara.02.cl.cdnz.cl/cdndvr/live/playlist.m3u8?DVR',
        'fuente': 'http://webtv.camara.cl/'
    },
    'cam-dipu-3': {
        'nombre': '<i class="ai-newspaper"></i> Cámara Diputados 3',
        'm3u8URL': 'https://tls-cl.cdnz.cl/camara/live/playlist.m3u8',
        'fuente': 'http://webtv.camara.cl/'
    }, 
    // CANALES ALTERNATIVOS CAM DIPUTADOS
    'cam-dipu': {
        'nombre': '<i class="ai-newspaper"></i> Cámara Diputados YT',
        'ytID': 'UCYd5k2TyOyOmUJNx0SH17KA'
    },
    'cam-dipu-01': {
        'nombre': '<i class="ai-newspaper"></i> Cámara Diputados YT 01',
        'ytID': 'UCcULnWuDzgQG9yF0Dv3DIgg'
    },
    'cam-dipu-03': {
        'nombre': '<i class="ai-newspaper"></i> Cámara Diputados YT 03',
        'ytID': 'UCF6KgLfQqQzekn8U1DwVs9g'
    },
    'cam-dipu-05': {
        'nombre': '<i class="ai-newspaper"></i> Cámara Diputados YT 05',
        'ytID': 'UC0QKtI8NpeMObauDylsSUDA'
    },
    'cam-dipu-06': {
        'nombre': '<i class="ai-newspaper"></i> Cámara Diputados YT 06',
        'ytID': 'UCspWzpGflwb6A8PZqWw49CQ'
    },
    'cam-dipu-07': {
        'nombre': '<i class="ai-newspaper"></i> Cámara Diputados YT 07',
        'ytID': 'UCyVjDDBZGDywVGrpGBvGEsw'
    },
    'cam-dipu-08': {
        'nombre': '<i class="ai-newspaper"></i> Cámara Diputados YT 08',
        'ytID': 'UCCtDbZzh63vgU_BWHRGsbug'
    },
    'cam-dipu-11': {
        'nombre': '<i class="ai-newspaper"></i> Cámara Diputados YT 11',
        'ytID': 'UCYPKjGKq2yLbAnmth5rFZmQ'
    },
    'cam-dipu-12': {
        'nombre': '<i class="ai-newspaper"></i> Cámara Diputados YT 12',
        'ytID': 'UCVOWFY-sgbDglBsfOap9okg'
    },
    'cam-dipu-13': {
        'nombre': '<i class="ai-newspaper"></i> Cámara Diputados YT 13',
        'ytID': 'UC33MG3YdoQ16a8a3wODh6lw'
    }
}


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
                 "m3u8URL": channel[1].replace('http://', 'https://')                        
                }
			}
        });
}

// https://www.m3u.cl/iptv-chile.php
let m3u = `
#EXTM3U x-tvg-url="" tv-test="CL.m3u"
#EXTINF:-1 tvg-id="1" tvg-name="Rewind Radio y TVwena" tvg-logo="https://i2.paste.pics/731c365cab15afcdd35861bb1485c6e4.png", Rewind Radio y TV
https://tls-cl.cdnz.cl/rewindtv/live/playlist.m3u8
#EXTINF:-1 tvg-id="996" tvg-name="Latinos Radio" tvg-logo="https://i2.paste.pics/f5a6133c6b0fcec076105dfd2508549c.png", Latinos Radio
https://mediacpstreamchile.com:1936/latinosmedia-1/latinosmedia-1/playlist.m3u8
#EXTINF:-1 tvg-id="7" tvg-name="Toca Hits - Mix 24-7 Top 100" tvg-logo="https://i2.paste.pics/a49dfcb76b5d0413f88658b1a8b2716f.png", Toca Hits - Mix 24-7 Top 100
https://mix247.ml:444/TocaHits/Top100Mix24-7/playlist.m3u8
#EXTINF:-1 tvg-id="1058" tvg-name="Spectrum Channel" tvg-logo="https://i2.paste.pics/8e7293ed71d91aac5719c797af4ff208.png", Spectrum Channel
https://panel.miplay.cl:8081/spectrumchannel/index.m3u8
#EXTINF:-1 tvg-id="947" tvg-name="EnerGeek" tvg-logo="https://i2.paste.pics/21292151846695a1a7dff79bad326e50.png", EnerGeek
https://5eff35271151c.streamlock.net:1936/8098/8098/playlist.m3u8
#EXTINF:-1 tvg-id="1112" tvg-name="Energeek Radio" tvg-logo="https://i2.paste.pics/0a827a2aa3eb974cf2e999e0139f6d0f.png", Energeek Radio
https://5eff35271151c.streamlock.net:1936/8074/8074/playlist.m3u8
#EXTINF:-1 tvg-id="1085" tvg-name="Control.VG" tvg-logo="https://i2.paste.pics/b7451f5e0cacde5e936c5ab3ee2d0deb.png", Control.VG
https://tls-cl.cdnz.cl/onradio-5/live/playlist.m3u8
#EXTINF:-1 tvg-id="1110" tvg-name="Fox Kids" tvg-logo="https://i2.paste.pics/677936e5e91c9f5cffa02783544d5e39.png", Fox Kids
https://foxkidsjahh20.duckdns.org/hls/stream/index.m3u8
#EXTINF:-1 tvg-id="857" tvg-name="Aster Max" tvg-logo="https://i2.paste.pics/b9e6b11eb74c1a860ddeca6636a7fc23.png", Aster Max
https://stream.projectboom.live/hls/max.m3u8
#EXTINF:-1 tvg-id="26" tvg-name="RCKTV" tvg-logo="https://i2.paste.pics/b4e09c1315da8b38ccb2e308519cbda1.png", RCKTV
https://mediacpstreamchile.com:1936/ricardoaravena/ricardoaravena/playlist.m3u8
#EXTINF:-1 tvg-id="1128" tvg-name="Solobailalo TV" tvg-logo="https://i2.paste.pics/d96b857f73a9ce281cdef4e11766eddd.png", Solobailalo TV
https://5ff3d9babae13.streamlock.net:443/8000/8000/playlist.m3u8
#EXTINF:-1 tvg-id="1079" tvg-name="Goodstock Radio" tvg-logo="https://i2.paste.pics/98dc459130c22838ebbf34334fbab053.png", Goodstock Radio
https://live.tvcontrolcp.com:1936/goodstocktv/goodstocktv/playlist.m3u8
#EXTINF:-1 tvg-id="1122" tvg-name="Radio Popular Coihueco" tvg-logo="https://i2.paste.pics/72b61c6e2606afacc980f62d4eb95791.png", Radio Popular Coihueco
https://5eff35271151c.streamlock.net:1936/8090/8090/playlist.m3u8
#EXTINF:-1 tvg-id="1102" tvg-name="FM Kaliente" tvg-logo="https://i2.paste.pics/fda4a7d3195860302637cbd70e658cfe.png", FM Kaliente
https://cloud2.streaminglivehd.com:1936/8002/8002/playlist.m3u8
#EXTINF:-1 tvg-id="1120" tvg-name="Autonoma TV" tvg-logo="https://i2.paste.pics/c00eb38ed6d7b15ebc179af065730860.png", Autonoma TV
https://5eff35271151c.streamlock.net:1936/8144/8144/playlist.m3u8
#EXTINF:-1 tvg-id="1116" tvg-name="SurTV" tvg-logo="https://i2.paste.pics/78850b6e924f55fcbeef5459a37a54a9.png", SurTV
https://paneltv.online:1936/8034/8034/playlist.m3u8
#EXTINF:-1 tvg-id="1109" tvg-name="Arica Rural TV" tvg-logo="https://i2.paste.pics/5980eb75a2830837e5d5e186098c86e9.png", Arica Rural TV
https://s1.tvdatta.com:3766/live/aricaruraltvlive.m3u8
#EXTINF:-1 tvg-id="1111" tvg-name="Canal Turismo Travel TV" tvg-logo="https://i2.paste.pics/50d8cde45e0c3efff3bc3fb05c5da6d1.png", Canal Turismo Travel TV
https://srv.panelcast.net/traveltv/traveltv/playlist.m3u8
#EXTINF:-1 tvg-id="1098" tvg-name="CRTV" tvg-logo="https://i2.paste.pics/bf68b159547597c39574aec9dd7c626a.png", CRTV
https://srv.panelcast.net/crtv/crtv/playlist.m3u8
#EXTINF:-1 tvg-id="1087" tvg-name="Opinionsur TV" tvg-logo="https://i2.paste.pics/bbb0373472ad737d7f75d40d9c3d1839.png", Opinionsur TV
https://paneltv.online:1936/8042/8042/playlist.m3u8
#EXTINF:-1 tvg-id="1074" tvg-name="Eva Retro" tvg-logo="https://i2.paste.pics/1fac7deeb4ca257162cde40abd006d9d.png", Eva Retro
https://stmv2.voxtvhd.com.br/evaretro/evaretro/playlist.m3u8
#EXTINF:-1 tvg-id="1024" tvg-name="Vision Plus TV" tvg-logo="https://i2.paste.pics/e067ea7d04aa3bcd78e8892df03409af.png", Vision Plus TV
https://v2.tustreaming.cl:80/visionplustv/index.m3u8
#EXTINF:-1 tvg-id="798" tvg-name="Cultura Online" tvg-logo="https://i2.paste.pics/5ffe16632230a917956af1eda734fb85.png", Cultura Online
https://v2.tustreaming.cl/culturaonline/index.m3u8
#EXTINF:-1 tvg-id="432" tvg-name="HiperTV" tvg-logo="https://lh3.googleusercontent.com/-YUlLyA8Pk7Y/X5n9AMtVNNI/AAAAAAAA61E/UkiOjRsCTWMa94h4g35uC424D4E_wU_2gCK8BGAsYHg/s0/2020-10-28.png", HiperTV
https://mediacpstreamchile.com:1936/hiperconectados/hiperconectados/playlist.m3u8
#EXTINF:-1 tvg-id="1012" tvg-name="Aysen TV" tvg-logo="https://i2.paste.pics/aa749a5b36cdc1c3084e6d36fe2275c6.png", Aysen TV
https://v2.tustreaming.cl:80/aysentv/index.m3u8
#EXTINF:-1 tvg-id="1005" tvg-name="Onda Radio TV" tvg-logo="https://i2.paste.pics/60c9a1ed4fefdb6a9a588955f12a32d9.png", Onda Radio TV
https://5eff35271151c.streamlock.net:1936/8000/8000/playlist.m3u8
#EXTINF:-1 tvg-id="1004" tvg-name="Ritmo TV" tvg-logo="https://i2.paste.pics/c21ae73475f4ae5a72d93defb2bdc1b7.png", Ritmo TV
https://5eff35271151c.streamlock.net:1936/8032/8032/playlist.m3u8
#EXTINF:-1 tvg-id="47" tvg-name="CSTV" tvg-logo="https://i2.paste.pics/34feb14ad3ee6a17a160ab0635915bf0.png", CSTV
https://videostreaming.cloudserverlatam.com:443/CSTV/CSTV/playlist.m3u8
#EXTINF:-1 tvg-id="46" tvg-name="Chavo TV" tvg-logo="https://i2.paste.pics/363bdf769b4b91716d6ebb6db72d1d4b.png", Chavo TV
https://videostreaming.cloudserverlatam.com:443/ElChavotv/ElChavotv/playlist.m3u8
#EXTINF:-1 tvg-id="4" tvg-name="Retro Plus TV" tvg-logo="https://lh3.googleusercontent.com/-obky0xopJjA/XrIZZ5C1quI/AAAAAAAA0bo/OBDSs6fw5zEa1eQJrv7j7IkMtaoQFcBJgCK8BGAsYHg/s0/2020-05-05.png", Retro Plus TV
https://59f1cbe63db89.streamlock.net:1443/retroplustv/_definst_/retroplustv/playlist.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="Retro Plus TV Señal 2" tvg-logo="https://lh3.googleusercontent.com/-obky0xopJjA/XrIZZ5C1quI/AAAAAAAA0bo/OBDSs6fw5zEa1eQJrv7j7IkMtaoQFcBJgCK8BGAsYHg/s0/2020-05-05.png", Retro Plus TV Señal 2
https://59f1cbe63db89.streamlock.net:1443/retroplussenal2/_definst_/retroplussenal2/playlist.m3u8
#EXTINF:-1 tvg-id="13" tvg-name="Ruidos TV" tvg-logo="https://lh3.googleusercontent.com/-OYgpvMljozw/Xxy-3V91rJI/AAAAAAAA3WI/1Tr5TT2vvDw63C_2ZoSu5mmvTvZV4UDFACK8BGAsYHg/s0/2020-07-25.png", Ruidos TV
https://593b04c4c5670.streamlock.net:443/8038/8038/playlist.m3u8
#EXTINF:-1 tvg-id="771" tvg-name="Mundo de la Musica TV" tvg-logo="https://lh3.googleusercontent.com/-dGnGcoZ4XMI/YGiuDJ-l9SI/AAAAAAABBKo/29BjyFATaBUc5W1wMu7u18r7fY1SHwLhwCK8BGAsYHg/s512/2021-04-03.png", Mundo de la Musica TV
https://videostreaming.cloudserverlatam.com:443/8078/8078/playlist.m3u8
#EXTINF:-1 tvg-id="433" tvg-name="Solo Stand Up" tvg-logo="https://lh3.googleusercontent.com/-vs6bQTy4Dns/X30TqJ-CdrI/AAAAAAAA6M4/WUtqB3d4eiEp7oHE44DkOhh5V0NNTDMSACK8BGAsYHg/s0/2020-10-06.png", Solo Stand Up
https://paneltv.online:1936/8116/8116/playlist.m3u8
#EXTINF:-1 tvg-id="967" tvg-name="Quillayino TV" tvg-logo="https://i2.paste.pics/e62da6123a4ac3e7a3d21580d051e283.png", Quillayino TV
https://videostreaming.cloudserverlatam.com:443/8060/8060/playlist.m3u8
#EXTINF:-1 tvg-id="1015" tvg-name="PlanetaTV Kids" tvg-logo="https://i2.paste.pics/a49ae885facb1146cad8aadff09c4ca7.png", PlanetaTV Kids
https://mediacpstreamchile.com:1936/8152/8152/playlist.m3u8
#EXTINF:-1 tvg-id="1014" tvg-name="PlanetaTV Music" tvg-logo="https://i2.paste.pics/a49ae885facb1146cad8aadff09c4ca7.png", PlanetaTV Music
https://mediacpstreamchile.com:1936/8042/8042/playlist.m3u8
#EXTINF:-1 tvg-id="1016" tvg-name="PlanetaTV Movies" tvg-logo="https://i2.paste.pics/a49ae885facb1146cad8aadff09c4ca7.png", PlanetaTV Movies
https://mediacpstreamchile.com:1936/8140/8140/playlist.m3u8
#EXTINF:-1 tvg-id="1103" tvg-name="PlanetaTV 90s" tvg-logo="https://i2.paste.pics/a49ae885facb1146cad8aadff09c4ca7.png", PlanetaTV 90s
https://mediacpstreamchile.com:1936/8102/8102/playlist.m3u8
#EXTINF:-1 tvg-id="1104" tvg-name="PlanetaTV Hits" tvg-logo="https://i2.paste.pics/a49ae885facb1146cad8aadff09c4ca7.png", PlanetaTV Hits
https://mediacpstreamchile.com:1936/8172/8172/playlist.m3u8
#EXTINF:-1 tvg-id="1105" tvg-name="PlanetaTV Karaokes" tvg-logo="https://i2.paste.pics/a49ae885facb1146cad8aadff09c4ca7.png", PlanetaTV Karaokes
https://mediacpstreamchile.com:1936/8092/8092/playlist.m3u8
#EXTINF:-1 tvg-id="1020" tvg-name="Caracola TV" tvg-logo="https://i2.paste.pics/1c5801e48a6cf804950bd1ce5e78a303.png", Caracola TV
https://wifispeed.trapemn.tv:1936/comunales/caracola-tv/playlist.m3u8
#EXTINF:-1 tvg-id="1022" tvg-name="EGM Channel" tvg-logo="https://i2.paste.pics/c4059d4b2eb7b24f7208a93b05312995.png", EGM Channel
https://paneltv.online:1936/8186/8186/playlist.m3u8
#EXTINF:-1 tvg-id="1002" tvg-name="Primicia TV" tvg-logo="https://i2.paste.pics/b1773117638414fbc16ba92b92900b88.png", Primicia TV
https://stmv1.voxhdnet.com/primiciatv/primiciatv/playlist.m3u8
#EXTINF:-1 tvg-id="897" tvg-name="Retro Play TV" tvg-logo="https://i2.paste.pics/90f2f266cb4f68333119a06b99d65d10.png", Retro Play TV
https://v4.tustreaming.cl/retroplaytv/index.m3u8
#EXTINF:-1 tvg-id="770" tvg-name="ZPTV" tvg-logo="https://lh3.googleusercontent.com/-1AkpM1rC75w/YGdiuKFuQzI/AAAAAAABBGg/lG-2DxIFeU8K4vxZQxqPVZ6J29Bu5ZuSgCK8BGAsYHg/s512/2021-04-02.png", ZPTV
https://srv3.zcast.com.br/juancarlos9451/juancarlos9451/playlist.m3u8
#EXTINF:-1 tvg-id="465" tvg-name="Retro Plus TV Señal 3" tvg-logo="https://lh3.googleusercontent.com/-obky0xopJjA/XrIZZ5C1quI/AAAAAAAA0bo/OBDSs6fw5zEa1eQJrv7j7IkMtaoQFcBJgCK8BGAsYHg/s0/2020-05-05.png", Retro Plus TV Señal 3
https://59f1cbe63db89.streamlock.net:1443/retroplussenal3/_definst_/retroplussenal3/playlist.m3u8
#EXTINF:-1 tvg-id="480" tvg-name="EvaStream" tvg-logo="https://i2.paste.pics/20f4f7278dc7ab118f657d93da43474d.png", EvaStream
https://mediacpstreamchile.com:1936/evavision/evavision/playlist.m3u8
#EXTINF:-1 tvg-id="891" tvg-name="Viwix TV" tvg-logo="https://i2.paste.pics/a6146376c0d3f0076fd9265d2273181a.png", Viwix TV
https://593b04c4c5670.streamlock.net:443/8008/8008/playlist.m3u8
#EXTINF:-1 tvg-id="1035" tvg-name="Kids90" tvg-logo="https://i2.paste.pics/4a39976590ab0bd4fe7a0bbbd4411822.png", Kids90
https://videostreaming.cloudserverlatam.com:443/Kids90/Kids90/playlist.m3u8
#EXTINF:-1 tvg-id="48" tvg-name="Cloud Server Kids" tvg-logo="https://i2.paste.pics/274ff2c35f3c15674e5e8c580baec385.png", Cloud Server Kids
https://videostreaming.cloudserverlatam.com:443/kids/kids/playlist.m3u8
#EXTINF:-1 tvg-id="45" tvg-name="NTV" tvg-logo="https://i2.paste.pics/49116db7b95befdabb207ccbd2bb94b6.png", NTV
https://mdstrm.com/live-stream-playlist/5aaabe9e2c56420918184c6d.m3u8
#EXTINF:-1 tvg-id="65" tvg-name="El 3 de Conce" tvg-logo="https://lh3.googleusercontent.com/--o0_vpNuzz4/XqsNGuGSUEI/AAAAAAAAyck/t0v8luwsOWAEbNMHeaIvlrVCQrYyXLJXwCK8BGAsYHg/s0/2020-04-30.png", El 3 de Conce
https://5eae379fb77bb.streamlock.net:443/8016/8016/playlist.m3u8
#EXTINF:-1 tvg-id="1001" tvg-name="La Granja TV" tvg-logo="https://i2.paste.pics/e5d61855b016df20f253d6b5b9ad8501.png", La Granja TV
https://5eae379fb77bb.streamlock.net/8126/8126/playlist.m3u8
#EXTINF:-1 tvg-id="67" tvg-name="Exprezion TV" tvg-logo="https://i2.paste.pics/3a66236cd4d5f46b440f80ccc87129f1.png", Exprezion TV
https://srv3.zcast.com.br/expreszion/expreszion/playlist.m3u8
#EXTINF:-1 tvg-id="66" tvg-name="Pichilemu TV" tvg-logo="https://lh3.googleusercontent.com/-cLe1X-6sOWM/XqtZ-zhsGYI/AAAAAAAAydY/AFIEb1ZL-HEceewpnqr3m9QxC3_3_KzIwCK8BGAsYHg/s0/2020-04-30.png", Pichilemu TV
https://5eae379fb77bb.streamlock.net:443/roberto886/roberto886/playlist.m3u8
#EXTINF:-1 tvg-id="881" tvg-name="Wapp" tvg-logo="https://lh3.googleusercontent.com/-XPA8QBfVGSA/YLEWvahvgkI/AAAAAAABCjo/sVxl7r4_EQgdvmviKMozcvmxwajFgdLcgCJEEGAsYHg/s512/2021-05-28.jpg", Wapp
https://mdstrm.com/live-stream-playlist/6046495ddf98b007fa2fe807.m3u8
#EXTINF:-1 tvg-id="790" tvg-name="La Red" tvg-logo="https://lh3.googleusercontent.com/-w3BIhImK3PM/YKLYqeFgJlI/AAAAAAABCXk/cJQItXH6BeII2A19RmryccG1o54twOSvACK8BGAsYHg/s512/2021-05-17.jpg", La Red
https://marine2.miplay.cl/lared/playlist.m3u8
#EXTINF:-1 tvg-id="458" tvg-name="TV+" tvg-logo="https://lh3.googleusercontent.com/-OyqOBTEx-1E/XyA3AZwIgTI/AAAAAAAA3jQ/aDMZaLOx3mQuXBqjDKAF0X7dxExKFzawACK8BGAsYHg/s0/2020-07-28.png", TV+
https://mdstrm.com/live-stream-playlist/5c0e8b19e4c87f3f2d3e6a59.m3u8
#EXTINF:-1 tvg-id="459" tvg-name="TV+ Diferido" tvg-logo="https://lh3.googleusercontent.com/-OyqOBTEx-1E/XyA3AZwIgTI/AAAAAAAA3jQ/aDMZaLOx3mQuXBqjDKAF0X7dxExKFzawACK8BGAsYHg/s0/2020-07-28.png", TV+ Diferido
https://mdstrm.com/live-stream-playlist/5cb5f2bd50ae45798813ba17.m3u8
#EXTINF:-1 tvg-id="452" tvg-name="TVN" tvg-logo="https://lh3.googleusercontent.com/-ETprzEeH-JY/XbCxYXbNQUI/AAAAAAAArkw/zQxemFrwNjAbMoyByyr_sesnZ8QKgap-QCK8BGAsYHg/s0/2019-10-23.png", TVN
https://marine2.miplay.cl/tvn/playlist.m3u8
#EXTINF:-1 tvg-id="453" tvg-name="TVN - 24h" tvg-logo="https://lh3.googleusercontent.com/-ETprzEeH-JY/XbCxYXbNQUI/AAAAAAAArkw/zQxemFrwNjAbMoyByyr_sesnZ8QKgap-QCK8BGAsYHg/s0/2019-10-23.png", TVN - 24h
https://mdstrm.com/live-stream-playlist-v/5346f5f2c1e6f5810b5b9df0.m3u8
#EXTINF:-1 tvg-id="454" tvg-name="TVN - Reuters" tvg-logo="https://lh3.googleusercontent.com/-ETprzEeH-JY/XbCxYXbNQUI/AAAAAAAArkw/zQxemFrwNjAbMoyByyr_sesnZ8QKgap-QCK8BGAsYHg/s0/2019-10-23.png", TVN - Reuters
https://mdstrm.com/live-stream-playlist/5346f657c1e6f5810b5b9df3.m3u8
#EXTINF:-1 tvg-id="455" tvg-name="Mega" tvg-logo="https://lh3.googleusercontent.com/-xqKe__ypgDY/XnzFn9NLnbI/AAAAAAAAxMU/2Wj9IOC1LaQxtJGRzcVOTrQWxP9z3RgPwCK8BGAsYHg/s0/2020-03-26.png", Mega
https://marine2.miplay.cl/mega/playlist.m3u8
#EXTINF:-1 tvg-id="456" tvg-name="CHV" tvg-logo="https://lh3.googleusercontent.com/-8bGAVjbmdQo/Xlxxov1VBvI/AAAAAAAAwhU/ZO0JPjy4MaI7lGElqofGQbkOr52Hk1nUQCK8BGAsYHg/s0/2020-03-01.png", CHV
https://marine2.miplay.cl/chilevision/playlist.m3u8
#EXTINF:-1 tvg-id="457" tvg-name="Canal 13" tvg-logo="https://lh3.googleusercontent.com/-lTPRVsTnfaY/XlMLxy_VhII/AAAAAAAAwZs/TNUiwtX3VEEFdP26RGGtfie-M7AI01XMgCK8BGAsYHg/s0/2020-02-23.png", Canal 13
https://marine2.miplay.cl/canal13/playlist.m3u8
#EXTINF:-1 tvg-id="979" tvg-name="13 Entretencion" tvg-logo="https://i2.paste.pics/a59418e1a9cb4068b83345be503f722c.png", 13 Entretencion
https://unlimited1-cl-isp.dps.live/13e/13e.smil/playlist.m3u8
#EXTINF:-1 tvg-id="1033" tvg-name="13 Prime" tvg-logo="https://i2.paste.pics/544548398fcd92bf2db73e9d0fcddf5f.png", 13 Prime
https://unlimited2-cl-isp.dps.live/13p/13p.smil/playlist.m3u8
#EXTINF:-1 tvg-id="1032" tvg-name="13 Teleseries" tvg-logo="https://i2.paste.pics/863aea4fb1445b58f89afc7c692ed509.png", 13 Teleseries
https://unlimited1-cl-isp.dps.live/13t/13t.smil/playlist.m3u8
#EXTINF:-1 tvg-id="1017" tvg-name="U Chile TV" tvg-logo="https://i2.paste.pics/2336e0cef4642213124e4192f019ccfd.png", U Chile TV
https://unlimited1-cl-isp.dps.live/uchiletv/uchiletv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="54" tvg-name="UCV" tvg-logo="https://i2.paste.pics/87c6e7bb59c33bfab71e154181716e90.png", UCV
https://unlimited2-cl-isp.dps.live/ucvtv2/ucvtv2.smil/playlist.m3u8
#EXTINF:-1 tvg-id="53" tvg-name="STGO.TV" tvg-logo="https://lh3.googleusercontent.com/-02uPrXnaZuY/Xk_sz_MIaEI/AAAAAAAAwVo/wwJD8vjW0ScrhAp-BVHSElUKIOUN_CqJgCK8BGAsYHg/s0/2020-02-21.png", STGO.TV
https://stv.janus.cl/playlist/stream.m3u8
#EXTINF:-1 tvg-id="55" tvg-name="Campus TV" tvg-logo="https://lh3.googleusercontent.com/-pW3OtBR0N4A/Xl5Y7H0fi7I/AAAAAAAAwjg/gdqG0LJ8DP42Md2rGIh2qHs1vNF7AYopACK8BGAsYHg/s0/2020-03-03.png", Campus TV
https://unlimited1-cl-isp.dps.live/campustv/campustv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="56" tvg-name="TVU" tvg-logo="https://i2.paste.pics/a399853d40d3e97454b0e04d423d47a9.png", TVU
https://unlimited1-cl-isp.dps.live/tvu/tvu.smil/playlist.m3u8
#EXTINF:-1 tvg-id="58" tvg-name="Universidad Autonoma TV" tvg-logo="https://i2.paste.pics/4f091f5c6fccbcd410cdc98e452bcb3b.png", Universidad Autonoma TV
https://unlimited1-cl-isp.dps.live/uatv/uatv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="802" tvg-name="TV UCT" tvg-logo="https://lh3.googleusercontent.com/-b5STpV7frCc/YHxqEk9aHxI/AAAAAAABBqs/CXWLe5jLyfgXXBgOSzhqb5sSUpn_A6K8ACK8BGAsYHg/s512/2021-04-18.png", TV UCT
https://unlimited2-cl-isp.dps.live/uct/uct.smil/playlist.m3u8
#EXTINF:-1 tvg-id="57" tvg-name="Ufrovision" tvg-logo="https://lh3.googleusercontent.com/-fqdCC1PQsjQ/XbC1rzkVu6I/AAAAAAAArmE/eB5FcH8qqZkgXsnzuStsuYTohDPRfNMdQCK8BGAsYHg/s0/2019-10-23.png", Ufrovision
https://mdstrm.com/live-stream-playlist/580a80b827de0ae2086ea6d8.m3u8
#EXTINF:-1 tvg-id="59" tvg-name="U Los Lagos" tvg-logo="https://lh3.googleusercontent.com/-mt7LVY0X3kE/XlBdyl_hwFI/AAAAAAAAwW0/vqFU9wiyuawEn3E39ERyYaOkVZ3TVterACK8BGAsYHg/s0/2020-02-21.png", U Los Lagos
https://tv.ulagos.cl/web/live.m3u8
#EXTINF:-1 tvg-id="60" tvg-name="UMAG TV" tvg-logo="https://lh3.googleusercontent.com/-0NppS8zHXRU/XbC2cN4qlAI/AAAAAAAArmY/g4gYZKyGhHglj_lyBKSaRw-tBMgzO0NmACK8BGAsYHg/s0/2019-10-23.png", UMAG TV
https://tls-cl.cdnz.cl/umag1/ngrp:live_all/playlist.m3u8
#EXTINF:-1 tvg-id="61" tvg-name="UMAG TV 2" tvg-logo="https://lh3.googleusercontent.com/-0NppS8zHXRU/XbC2cN4qlAI/AAAAAAAArmY/g4gYZKyGhHglj_lyBKSaRw-tBMgzO0NmACK8BGAsYHg/s0/2019-10-23.png", UMAG TV 2
https://tls-cl.cdnz.cl/umag2/live/playlist.m3u8
#EXTINF:-1 tvg-id="62" tvg-name="UesTV" tvg-logo="https://i2.paste.pics/360c8f7659accc54b1013b0b2b7669b6.png", UesTV
https://tls-cl.cdnz.cl/uestv/live/playlist.m3u8
#EXTINF:-1 tvg-id="445" tvg-name="Camara de Diputados" tvg-logo="https://i2.paste.pics/8ac54ede0184c4fd9e872231a6d673b3.png", Camara de Diputados
https://tls-cl.cdnz.cl/camara/live/playlist.m3u8
#EXTINF:-1 tvg-id="444" tvg-name="TV Senado" tvg-logo="https://i2.paste.pics/ee6b562807f06f0139f28cd160a82a8f.png", TV Senado
https://janus-tv-ply.senado.cl/playlist/playlist.m3u8
#EXTINF:-1 tvg-id="443" tvg-name="Arab TV" tvg-logo="https://lh3.googleusercontent.com/-qWptYK_8bAs/YKl2kcbwBiI/AAAAAAABCdg/mUmckB6yF_Ie3F5MCqX2t3JF1Beu4Hw2gCK8BGAsYHg/s512/2021-05-22.png", Arab TV
https://livefocamundo.com:8081/arabtv/index.m3u8
#EXTINF:-1 tvg-id="442" tvg-name="CEAC TV" tvg-logo="https://lh3.googleusercontent.com/-Efv-00P_dR0/YLzynagSe1I/AAAAAAABCvM/yOhOzOxVWGwan9Xwgg-zpQzFK8WGJo12ACJEEGAsYHg/s512/2021-06-06.png", CEAC TV
https://hd.chileservidores.cl:1936/ceactv/ceactv/playlist.m3u8
#EXTINF:-1 tvg-id="441" tvg-name="Teatro del Lago" tvg-logo="https://lh3.googleusercontent.com/-_WeBzVIBMF8/X6cu2w6_zdI/AAAAAAAA7Fk/gCxEgXlJx1w8pcUgqyK31CIVCHXdp-icQCK8BGAsYHg/s0/2020-11-07.png", Teatro del Lago
https://mdstrm.com/live-stream-playlist/5eee24e3ed5b6d0761a11a31.m3u8
#EXTINF:-1 tvg-id="447" tvg-name="TVN 24 Horas" tvg-logo="https://lh3.googleusercontent.com/-BbCIUKB7XJE/XbRLHyJVKcI/AAAAAAAArtU/ipNQiS3rttYIRuK2nKzy_oocBx0x4TOLACK8BGAsYHg/s0/2019-10-26.png", TVN 24 Horas
https://mdstrm.com/live-stream-playlist/57d1a22064f5d85712b20dab.m3u8
#EXTINF:-1 tvg-id="448" tvg-name="TVN 24 Horas 2" tvg-logo="https://lh3.googleusercontent.com/-BbCIUKB7XJE/XbRLHyJVKcI/AAAAAAAArtU/ipNQiS3rttYIRuK2nKzy_oocBx0x4TOLACK8BGAsYHg/s0/2019-10-26.png", TVN 24 Horas 2
https://mdstrm.com/live-stream-playlist-v/53443c472c6e89675103cc4c.m3u8
#EXTINF:-1 tvg-id="1054" tvg-name="T13" tvg-logo="https://i2.paste.pics/38adedd4130272be03ef804c5eaf067e.png", T13
https://unlimited1-cl-isp.dps.live/t13/t13.smil/playlist.m3u8

#EXTINF:-1 tvg-id="434" tvg-name="Teletón TV" tvg-logo="https://lh3.googleusercontent.com/-RsMjPwaqZeE/XlMNZlWurnI/AAAAAAAAwZ4/RmHs1fZ6XLEEoLl-i_-v_bFmCaNF9AYCQCK8BGAsYHg/s0/2020-02-23.png", Teletón TV
https://mdstrm.com/live-stream-playlist/5d6d5f05a2f6f407b0147965.m3u8
#EXTINF:-1 tvg-id="986" tvg-name="Ziza TV" tvg-logo="https://i2.paste.pics/129d176f2117a7985aefe938703c34a5.png", Ziza TV
https://v2.tustreaming.cl/zizatv/index.m3u8
#EXTINF:-1 tvg-id="895" tvg-name="RLOTV" tvg-logo="https://lh3.googleusercontent.com/-k3Xfmd6KcLo/YL98wEjWBnI/AAAAAAABCzo/6deLMFJ6YUElLm3DMqccKFmz8nyzWoRPQCJEEGAsYHg/s512/2021-06-08.png", RLOTV
https://593b04c4c5670.streamlock.net:443/8034/8034/playlist.m3u8
#EXTINF:-1 tvg-id="910" tvg-name="Raices Arabes TV" tvg-logo="https://i2.paste.pics/632a740768764ab4dd8208568ae61b01.png", Raices Arabes TV
https://Stmv1.zcastbr.com/julio4589/julio4589/playlist.m3u8
#EXTINF:-1 tvg-id="430" tvg-name="Sello de Raza TV" tvg-logo="https://lh3.googleusercontent.com/-GTdaE_DGyVE/YDGL_yr6BXI/AAAAAAABAO8/BqD0Sa1JTzQcCaOoBlmFCLeHZ5__djg7QCK8BGAsYHg/s0/2021-02-20.png", Sello de Raza TV
https://v2.tustreaming.cl/mastermedia/index.m3u8
#EXTINF:-1 tvg-id="467" tvg-name="TV Pop" tvg-logo="https://lh3.googleusercontent.com/-XpZwlTaVD70/X5jAxBIjQnI/AAAAAAAA6ys/IoG_B-D9vCwSs4nNVTr2tK_hz-rI7VXCgCK8BGAsYHg/s0/2020-10-27.jpg", TV Pop
https://v4.tustreaming.cl/poptv/index.m3u8
#EXTINF:-1 tvg-id="440" tvg-name="LosDesterrados.cl" tvg-logo="https://lh3.googleusercontent.com/-ZiSdwXOa0ik/X9X6x7iWwfI/AAAAAAAA8KM/9rBepDqcrY88k9chNmEB3ZhRN9mbGqSLwCK8BGAsYHg/s0/2020-12-13.jpg", LosDesterrados.cl
https://5e3483cba9114.streamlock.net/losdesterrados.cl/losdesterrados.cl/playlist.m3u8
#EXTINF:-1 tvg-id="438" tvg-name="tevex" tvg-logo="https://i2.paste.pics/37360245ae2194a41c9eaca39c5e1ec0.png", tevex
https://v2.tustreaming.cl/tevex/index.m3u8
#EXTINF:-1 tvg-id="436" tvg-name="TV Salud" tvg-logo="https://lh3.googleusercontent.com/-Xv_aL34GjFE/XdksOdTnS9I/AAAAAAAAsTs/_WBt4UNy428CuU5dtVeJQZzh4EpQREnDwCK8BGAsYHg/s0/2019-11-23.png", TV Salud
https://srv3.zcast.com.br/mastermedia/mastermedia/tvsalud.cl.m3u8
#EXTINF:-1 tvg-id="435" tvg-name="Chile Channel" tvg-logo="https://lh3.googleusercontent.com/-DVzBnJJGsHM/Xzh-ooBVTnI/AAAAAAAA4dk/Gl6kLefOEM0C6UdyAwM1__ki_GZ7OGYQACK8BGAsYHg/s0/2020-08-15.png", Chile Channel
https://v2.tustreaming.cl/chilechannel/index.m3u8
#EXTINF:-1 tvg-id="437" tvg-name="Campo Abierto TV" tvg-logo="https://i2.paste.pics/44c5f4becc68ee877580eed639645110.png", Campo Abierto TV
https://v2.tustreaming.cl/campoabierto/index.m3u8
#EXTINF:-1 tvg-id="984" tvg-name="Detras de la Razon" tvg-logo="https://i2.paste.pics/e093f4c39209534fab612187f68c85e4.png", Detras de la Razon
https://videostreaming.cloudserverlatam.com:443/detrazdelarazon/detrazdelarazon/playlist.m3u8
#EXTINF:-1 tvg-id="70" tvg-name="Arcatel" tvg-logo="https://lh3.googleusercontent.com/-eAhwIXcCpA0/XnoL0QvZpII/AAAAAAAAxIw/2f2YOsAaVq4-OfUKS3cxgcIt213l90u2ACK8BGAsYHg/s0/2020-03-24.png", Arcatel
https://unlimited1-cl-isp.dps.live/arcatel/arcatel.smil/playlist.m3u8
#EXTINF:-1 tvg-id="311" tvg-name="Arica TV" tvg-logo="https://lh3.googleusercontent.com/-RSJgui5q1ag/YLwPYdKEv9I/AAAAAAABCsk/eI3D7-S2c7gaqLgRGewyN-pHzdzCghwIQCJEEGAsYHg/s512/2021-06-05.jpg", Arica TV
https://5eff35271151c.streamlock.net:1936/8002/8002/playlist.m3u8
#EXTINF:-1 tvg-id="312" tvg-name="Cappissima Multimedial TV" tvg-logo="https://lh3.googleusercontent.com/-uQdRQP7JvuA/XxzEqR_Af-I/AAAAAAAA3XQ/7CuKTSW5TYckPnJr5bxkDTtIYB6zy6lHACK8BGAsYHg/s0/2020-07-25.png", Cappissima Multimedial TV
https://5eae379fb77bb.streamlock.net/cappissima/cappissima/playlist.m3u8
#EXTINF:-1 tvg-id="313" tvg-name="Puerta Norte" tvg-logo="https://lh3.googleusercontent.com/-HTLI7n2K50M/XhUge0dM_xI/AAAAAAAAvC4/vbnHWF_eheMVlaLxiXkRCDpAboN8_iiNgCK8BGAsYHg/s0/2020-01-07.png", Puerta Norte
https://593b04c4c5670.streamlock.net:443/8012/8012/playlist.m3u8
#EXTINF:-1 tvg-id="314" tvg-name="Iquique TV" tvg-logo="https://lh3.googleusercontent.com/-pK0q2sl6njA/YLvYUotCF_I/AAAAAAABCrw/npXWp5Y_4Q83AVldxCKNFaadcbbxNV5cgCJEEGAsYHg/s512/2021-06-05.png", Iquique TV
https://marine2.miplay.cl/arcatel/iquiquetv720/video.m3u8
#EXTINF:-1 tvg-id="315" tvg-name="Geovision" tvg-logo="https://lh3.googleusercontent.com/-CwMYprB8eaA/XnATeNoPyXI/AAAAAAAAw-Y/I40dMYtgMWstYOVQvOI-uZArZune0a9VACK8BGAsYHg/s0/2020-03-16.jpg", Geovision
https://5fa5de1a545ae.streamlock.net:443/Geovision/Geovision/playlist.m3u8
#EXTINF:-1 tvg-id="71" tvg-name="Antofagasta TV" tvg-logo="https://lh3.googleusercontent.com/-37Qp1y0Froc/YLwMLWKi5ZI/AAAAAAABCr8/VATYbRiDFL4hNT7IqD8DL3tC8Y8QeUCjgCJEEGAsYHg/s512/2021-06-05.png", Antofagasta TV
https://unlimited1-cl-isp.dps.live/atv/atv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="316" tvg-name="LRP Television" tvg-logo="https://lh3.googleusercontent.com/-RRqPPQ9jumM/X-sl8HVr3-I/AAAAAAAA8mk/er1v71iGwF06JQABRlSTDFwItzb7OVcMwCK8BGAsYHg/s0/2020-12-29.png", LRP Television
https://v2.tustreaming.cl/lrp/index.m3u8
#EXTINF:-1 tvg-id="317" tvg-name="AM Canal" tvg-logo="https://lh3.googleusercontent.com/-Qbzsb10m8FI/YLwP7qvh82I/AAAAAAABCsw/obyVVlYUAa4YC3XO6ChBaMDvEtV3lAcRQCJEEGAsYHg/s512/2021-06-05.png", AM Canal
https://v2.tustreaming.cl/amtv/live1/index.m3u8
#EXTINF:-1 tvg-id="318" tvg-name="TVO Tocopilla" tvg-logo="https://lh3.googleusercontent.com/-uSdgqeTgb4o/XxzE8VuETQI/AAAAAAAA3XY/9-D2ks1nTFwcS9od0Ko39vdHoH7YlgVWgCK8BGAsYHg/s0/2020-07-25.png", TVO Tocopilla
https://srv3.zcast.com.br/cristian5592/cristian5592/playlist.m3u8
#EXTINF:-1 tvg-id="72" tvg-name="Holvoet TV" tvg-logo="https://i2.paste.pics/2fb632fb69ae1c422609fdbf6c5a3fb4.png", Holvoet TV
https://unlimited1-cl-isp.dps.live/holvoettv/holvoettv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="319" tvg-name="Atacama Noticias TV" tvg-logo="https://lh3.googleusercontent.com/-l7XXNQYmGAM/XvDpTB0gG5I/AAAAAAAA2Kk/GvD1qftKvhgJszIAP4CbyNkTdKk5h61gQCK8BGAsYHg/s0/2020-06-22.png", Atacama Noticias TV
https://v2.tustreaming.cl/atacamanoticias/index.m3u8
#EXTINF:-1 tvg-id="320" tvg-name="Atacama TV" tvg-logo="https://lh3.googleusercontent.com/-dxfCxjRg3kc/YLwNHipWtxI/AAAAAAABCsE/YVukqdClrtcbM8N2pwv8MJSXGS862L1tgCJEEGAsYHg/s512/2021-06-05.png", Atacama TV
https://v2.tustreaming.cl/atacamatv/index.m3u8
#EXTINF:-1 tvg-id="784" tvg-name="Madero TV" tvg-logo="https://lh3.googleusercontent.com/-2DPpYYaK6ZE/Xl_2gXryGII/AAAAAAAAwlA/Z8jpHccjFuApTI5Z7TPbW7pfTKTn8CKYQCK8BGAsYHg/s0/2020-03-04.png", Madero TV
https://videostreaming.cloudserverlatam.com:443/8040/8040/playlist.m3u8
#EXTINF:-1 tvg-id="321" tvg-name="Huasco TV" tvg-logo="https://lh3.googleusercontent.com/-HCPaOQyvUaE/X_G7GCDvs_I/AAAAAAAA81U/R8xLktf5TvMmstApqceTVkQWIKFIv2YawCK8BGAsYHg/s0/2021-01-03.jpg", Huasco TV
https://paneltv.online:1936/8062/8062/playlist.m3u8
#EXTINF:-1 tvg-id="462" tvg-name="Alternativa TV" tvg-logo="https://lh3.googleusercontent.com/-iKwsCUXvDPI/YFdM0gGK5jI/AAAAAAABAzM/qwl5-LN14w8v5OywQnwwmZRiDV4PhIP9QCK8BGAsYHg/s512/2021-03-21.png", Alternativa TV
https://srv2.zcast.com.br/carlos2469/carlos2469/playlist.m3u8
#EXTINF:-1 tvg-id="322" tvg-name="Enfoque Digital TV" tvg-logo="https://lh3.googleusercontent.com/-Qjxyu8Kt5PM/YLwQbxwGefI/AAAAAAABCs4/GhZ1MB88oewmzOGNaDLnV-qanRmEvk9JQCJEEGAsYHg/s512/2021-06-05.png", Enfoque Digital TV
https://5eae379fb77bb.streamlock.net:443/edtv/edtv/playlist.m3u8
#EXTINF:-1 tvg-id="894" tvg-name="Canal Costa TV" tvg-logo="https://i2.paste.pics/3bf20fb62eb24a657e63d6155f17b074.png", Canal Costa TV
https://mediacpstreamchile.com:1936/8042/8042/playlist.m3u8
#EXTINF:-1 tvg-id="325" tvg-name="La Popular TV" tvg-logo="https://lh3.googleusercontent.com/-ptduoaJowMY/YLwQztvG1qI/AAAAAAABCtA/TLcpfNWqt38w8iRoqdprT8smUncIJ7AQACJEEGAsYHg/s512/2021-06-05.png", La Popular TV
https://5eff35271151c.streamlock.net:1936/8076/8076/playlist.m3u8
#EXTINF:-1 tvg-id="965" tvg-name="Canal 1440 Coquimbo" tvg-logo="https://i2.paste.pics/4670a31c2ccbc5689b6a607819de85c4.png", Canal 1440 Coquimbo
https://streamyes.alsolnet.com/norteramatv/live/playlist.m3u8
#EXTINF:-1 tvg-id="326" tvg-name="ThemaTV" tvg-logo="https://lh3.googleusercontent.com/-Vgy7Z0vneQQ/YLwRzORmQaI/AAAAAAABCtM/eh_BH_39oIsbSgMiirmbkScqt8MuuFiOgCJEEGAsYHg/s512/2021-06-05.png", ThemaTV
https://unlimited1-cl-isp.dps.live/thema/thema.smil/playlist.m3u8
#EXTINF:-1 tvg-id="327" tvg-name="América TV Chile" tvg-logo="https://lh3.googleusercontent.com/-dAThrFAhCtE/Xx-hwDQF4gI/AAAAAAAA3ic/BsAasEXfeos0_0c7QAorRga7pt2ZC1yfwCK8BGAsYHg/s0/2020-07-27.png", América TV Chile
https://Stmv1.zcastbr.com/americatvchile/americatvchile/playlist.m3u8
#EXTINF:-1 tvg-id="890" tvg-name="Tele 8 Illapel" tvg-logo="https://lh3.googleusercontent.com/-cU3LFIKQaiY/YLwS_bnfeoI/AAAAAAABCtU/WQf-JrV9vlsWE6IY8BQho5DlkVS1tVo3QCJEEGAsYHg/s512/2021-06-05.png", Tele 8 Illapel
https://5eae379fb77bb.streamlock.net/rauleduardo493/rauleduardo493/playlist.m3u8
#EXTINF:-1 tvg-id="329" tvg-name="TV Elqui" tvg-logo="https://lh3.googleusercontent.com/-uohfVTgGqkU/XrmveWQiUXI/AAAAAAAA0oQ/Bn7Ad9_7KMY6oMCjD2UJi_cp-8ynyLYSQCK8BGAsYHg/s0/2020-05-11.png", TV Elqui
https://video.streamingchilenos.cl:1936/8046/8046/playlist.m3u8
#EXTINF:-1 tvg-id="335" tvg-name="VTV" tvg-logo="https://lh3.googleusercontent.com/-EcdiT1eMFFg/YLwNYKl0GII/AAAAAAABCsM/_WU-X010dJ80kDrgugAdGtSzIpUNsEgygCJEEGAsYHg/s512/2021-06-05.png", VTV
https://unlimited2-cl-isp.dps.live/vtv/vtv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="334" tvg-name="Canal 74 TeVe" tvg-logo="https://lh3.googleusercontent.com/-TYq4HDXXrKg/X1gGWf_2AWI/AAAAAAAA5ZQ/apHThKFoYGM5Yyixt53Afu2I10KkbCdjwCK8BGAsYHg/s0/2020-09-08.png", Canal 74 TeVe
https://Stmv1.zcastbr.com/canal74hd/canal74hd/playlist.m3u8
#EXTINF:-1 tvg-id="332" tvg-name="TV Costa" tvg-logo="https://lh3.googleusercontent.com/-D5lPoIyFycQ/YIxMYNs6ZKI/AAAAAAABCEU/0AcLO4Az3y0wi6son16EjNv2DewCGFk8QCK8BGAsYHg/s512/2021-04-30.jpg", TV Costa
https://hd.chileservidores.cl:1936/tvcosta1/tvcosta1/playlist.m3u8
#EXTINF:-1 tvg-id="330" tvg-name="Quinta TV" tvg-logo="https://lh3.googleusercontent.com/-ICOGP6CIXA0/YLwTmfwPE5I/AAAAAAABCtc/1ZaEWOjJNw0YA8ojwUaJ3aaYB6xb7q2hwCJEEGAsYHg/s512/2021-06-05.jpg", Quinta TV
https://livefocamundo.com:8081/quintatv/index.m3u8
#EXTINF:-1 tvg-id="854" tvg-name="TV Quinta Region" tvg-logo="https://i2.paste.pics/2c015266869a8e163cc42bd1a0808834.png", TV Quinta Region
https://Stmv1.zcastbr.com/danielg/danielg/playlist.m3u8
#EXTINF:-1 tvg-id="995" tvg-name="TV Quinta Region 2" tvg-logo="https://i2.paste.pics/2c015266869a8e163cc42bd1a0808834.png", TV Quinta Region 2
https://srv1.zcast.com.br/daniel2525/daniel2525/playlist.m3u8
#EXTINF:-1 tvg-id="331" tvg-name="Canal de la Costa" tvg-logo="https://lh3.googleusercontent.com/-5gr2u_fRaYc/XnAV1RTZyYI/AAAAAAAAw-k/m2mQkdOij1MSnHaQ6op9KU4LKsxMhwXnwCK8BGAsYHg/s0/2020-03-16.png", Canal de la Costa
https://livefocamundo.com:8081/cdlcyerko/index.m3u8
#EXTINF:-1 tvg-id="74" tvg-name="Girovisual TV" tvg-logo="https://i2.paste.pics/11ba44db3bc04558ed204a000c65c266.png", Girovisual TV
https://unlimited1-cl-isp.dps.live/girovisual2/girovisual2.smil/playlist.m3u8
#EXTINF:-1 tvg-id="76" tvg-name="Canal 2 de San Antonio" tvg-logo="https://lh3.googleusercontent.com/-8rzHJZdq8rY/Xb2AX9UW_tI/AAAAAAAAr58/gqkZ21n2nf4rm5Ah-lzNOz5ch6_JVUS5wCK8BGAsYHg/s0/2019-11-02.png", Canal 2 de San Antonio
https://unlimited1-cl-isp.dps.live/canal2/canal2.smil/playlist.m3u8
#EXTINF:-1 tvg-id="333" tvg-name="Plaza TV" tvg-logo="https://i2.paste.pics/585c8e1e9e65021cae644117c35bd51a.png", Plaza TV
https://videostreaming.cloudserverlatam.com:443/8044/8044/playlist.m3u8
#EXTINF:-1 tvg-id="77" tvg-name="TVR" tvg-logo="https://lh3.googleusercontent.com/-xyk2_KFlnyQ/WycRffTYWbI/AAAAAAAAj2I/H3wImrej3y8ryyTZOsLtkd8fVB12d5aKQCK8BGAs/s200/2018-06-17.png", TVR
https://unlimited1-cl-isp.dps.live/tvr/tvr.smil/playlist.m3u8
#EXTINF:-1 tvg-id="336" tvg-name="Tendencias Prime" tvg-logo="https://i2.paste.pics/5d64fe0c6e8c1d3be74a7982fc408dab.png", Tendencias Prime
https://v2.tustreaming.cl/tendenciastv/index.m3u8
#EXTINF:-1 tvg-id="999" tvg-name="38TV" tvg-logo="https://i2.paste.pics/3cc1950b0f0c4ad15752bd5b6646fdf6.png", 38TV
https://v2.tustreaming.cl:19360/38tv/38tv.m3u8
#EXTINF:-1 tvg-id="337" tvg-name="Buin Somos Todos" tvg-logo="https://lh3.googleusercontent.com/-qHSWQUuG5HU/XkIKFkSMFBI/AAAAAAAAv-o/80_hG25Pe6cfe7Dm3Uc6VDpcMp2Nd3ImwCK8BGAsYHg/s0/2020-02-10.png", Buin Somos Todos
https://bst.buin.cl/0.m3u8
#EXTINF:-1 tvg-id="338" tvg-name="Canal 57 Melipilla" tvg-logo="https://i2.paste.pics/142f64e0f0f7392e87b0f08fe9220039.png", Canal 57 Melipilla
https://593b04c4c5670.streamlock.net:443/8148/8148/playlist.m3u8
#EXTINF:-1 tvg-id="1025" tvg-name="Telecanal Santa Cruz" tvg-logo="https://i2.paste.pics/6a1696deb1c9517beb69237df03fb2a9.png", Telecanal Santa Cruz
https://unlimited1-cl-isp.dps.live/tcsc/tcsc.smil/playlist.m3u8
#EXTINF:-1 tvg-id="340" tvg-name="TVO San Vicente" tvg-logo="https://lh3.googleusercontent.com/-_Df5mnuWqno/YLwUDTHmLUI/AAAAAAABCtk/l-8RtIbQqAEeDY1KsrNc4ZJVI5SMP6cFgCJEEGAsYHg/s512/2021-06-05.jpg", TVO San Vicente
https://unlimited2-cl-isp.dps.live/tvo/tvo.smil/playlist.m3u8
#EXTINF:-1 tvg-id="341" tvg-name="Sextavision" tvg-logo="https://lh3.googleusercontent.com/-jrWnNYMCARg/XxzHhPjtM8I/AAAAAAAA3X0/8TDxNrCDkK8gLpV7HBJhhFqovrjbr3AmwCK8BGAsYHg/s0/2020-07-25.png", Sextavision
https://5eae379fb77bb.streamlock.net:443/8042/8042/playlist.m3u8
#EXTINF:-1 tvg-id="463" tvg-name="Ekiz TV" tvg-logo="https://lh3.googleusercontent.com/-gDK3j68Mc6o/YFYnQ_VgDyI/AAAAAAABAy0/COi6QK7t40UXPZuYPWHnOwi61yO0QRVUwCK8BGAsYHg/s512/2021-03-20.jpg", Ekiz TV
https://stmv.panel.mivideo.pro/ekiztv/ekiztv/playlist.m3u8
#EXTINF:-1 tvg-id="78" tvg-name="TVR Canal 11" tvg-logo="https://lh3.googleusercontent.com/-D7L3q2KhyFA/XjQLBVPp_xI/AAAAAAAAvhk/YiyvFKiyTV8wmlJ3AKPuWIP-c99ZP3I0QCK8BGAsYHg/s0/2020-01-31.png", TVR Canal 11
https://unlimited1-cl-isp.dps.live/tvrcurico/tvrcurico.smil/playlist.m3u8
#EXTINF:-1 tvg-id="342" tvg-name="Vivo TV" tvg-logo="https://lh3.googleusercontent.com/-1sqZ7rIlQfU/X30JIKK3h6I/AAAAAAAA6Mg/PXOK4Ogfto8S5Jkbot2bAdHtCctyapzqwCK8BGAsYHg/s0/2020-10-06.jpg", Vivo TV
https://unlimited1-cl-isp.dps.live/vivotv/vivotv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="79" tvg-name="Telecanal Talca" tvg-logo="https://lh3.googleusercontent.com/-G00IurB2EiU/XsdJC7RaGJI/AAAAAAAA1D0/b3IywEyDKrgsPzT18tf6cIyKu7N2FhgbACK8BGAsYHg/s0/2020-05-21.png", Telecanal Talca
https://unlimited1-cl-isp.dps.live/tctc/tctc.smil/playlist.m3u8
#EXTINF:-1 tvg-id="80" tvg-name="TV 5 Linares" tvg-logo="https://lh3.googleusercontent.com/-ocbRhw13yZU/YD59yD7KV1I/AAAAAAABAfA/YTu015L36W07t8HVpzWdjgAYJvY3a42QgCK8BGAsYHg/s512/2021-03-02.jpg", TV 5 Linares
https://unlimited1-cl-isp.dps.live/tv5/tv5.smil/playlist.m3u8
#EXTINF:-1 tvg-id="81" tvg-name="Contivision" tvg-logo="https://i2.paste.pics/e2423d4364f7e13bcb55bde9fd708ede.png", Contivision
https://unlimited1-cl-isp.dps.live/contivision/contivision.smil/playlist.m3u8
#EXTINF:-1 tvg-id="345" tvg-name="UTV San Clemente" tvg-logo="https://i2.paste.pics/4a70b027fa4d7cc5763e54ce980580c4.png", UTV San Clemente
https://v2.tustreaming.cl/utv/index.m3u8
#EXTINF:-1 tvg-id="346" tvg-name="Nativa TV" tvg-logo="https://lh3.googleusercontent.com/-cjGfTc-x5mE/XhNpkqYLfYI/AAAAAAAAvA0/H23FY52RLO8sZlK22ADQwnFt51j_RYcHgCK8BGAsYHg/s0/2020-01-06.png", Nativa TV
https://mediacpstreamchile.com:1936/nativa3/nativa3/playlist.m3u8
#EXTINF:-1 tvg-id="347" tvg-name="Tele2 Web" tvg-logo="https://lh3.googleusercontent.com/-ma0nk15jqs0/Xte5HlWvxqI/AAAAAAAA1aM/FbCYYz6_ExY547-4KshY_FHdgea6Rr8mACK8BGAsYHg/s0/2020-06-03.png", Tele2 Web
https://inliveserver.com:1936/11516/11516/playlist.m3u8
#EXTINF:-1 tvg-id="348" tvg-name="Canal 21 Chillán" tvg-logo="https://lh3.googleusercontent.com/-G3a4EWWVHDM/YLwWdi2a_KI/AAAAAAABCt8/9O8xWNi1f_UbcvwqCXhAHEvJhcrgSF2lwCJEEGAsYHg/s512/2021-06-05.jpg", Canal 21 Chillán
https://tls-cl.cdnz.cl/canal21tv/live/playlist.m3u8
#EXTINF:-1 tvg-id="903" tvg-name="Región Televisión Ñuble" tvg-logo="https://i2.paste.pics/d1cf85869f9155b5839539a5dea311ea.png", Región Televisión Ñuble
https://live.tvcontrolcp.com:1936/guzman/guzman/playlist.m3u8
#EXTINF:-1 tvg-id="1037" tvg-name="Canal SCÑ - San Carlos Ñuble" tvg-logo="https://i2.paste.pics/6c77f84d9c77fabb70a62b092e7edb78.png", Canal SCÑ - San Carlos Ñuble
https://live.tvcontrolcp.com:1936/sancarlostv/sancarlostv/playlist.m3u8
#EXTINF:-1 tvg-id="902" tvg-name="Ñublevision" tvg-logo="https://i2.paste.pics/eccc0f198fb9739c2fda39aef85e81ae.png", Ñublevision
https://cdn.oneplaychile.cl:1936/regionales/nublevision.stream/playlist.m3u8
#EXTINF:-1 tvg-id="349" tvg-name="Estacion TV" tvg-logo="https://lh3.googleusercontent.com/-lv8qJFiOnmM/XY5huCSO6VI/AAAAAAAArLA/M13LackrZaICHmHnHZZTHWLxQQdOQCwIACK8BGAsYHg/s0/2019-09-27.png", Estacion TV
https://pantera1-100gb-cl-movistar.dps.live/estaciontv/estaciontv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="350" tvg-name="ClickTv" tvg-logo="https://i2.paste.pics/d4950684d99dbc3a25f4ef74a2895871.png", ClickTv
https://v2.tustreaming.cl/clicktv/index.m3u8
#EXTINF:-1 tvg-id="970" tvg-name="ClickTv Internacional" tvg-logo="https://i2.paste.pics/d4950684d99dbc3a25f4ef74a2895871.png", ClickTv Internacional
https://patagoniaip.trapemn.tv:1936/comunales/clicktv1.stream/playlist.m3u8
#EXTINF:-1 tvg-id="386" tvg-name="Energia TV" tvg-logo="https://lh3.googleusercontent.com/-OixheIRfa_Y/YDwn1t40sVI/AAAAAAABAcE/SV3ZQAJE8l4yRS-KV-hCat4miTZwNOuXwCK8BGAsYHg/s512/2021-02-28.png", Energia TV
https://cdn.oneplaychile.cl:1936/regionales/energia-fm/playlist.m3u8
#EXTINF:-1 tvg-id="353" tvg-name="Canal 9 Bío Bí­o TV" tvg-logo="https://lh3.googleusercontent.com/-opZ6mP8G3Fo/Wn9lBEeoQ4I/AAAAAAAAgwY/cKvIaCeqHZEwdTQ-pJPh7oCDIU2q-fECwCK8BGAs/s220/2018-02-10.png", Canal 9 Bío Bí­o TV
https://unlimited1-cl-isp.dps.live/c9/c9.smil/playlist.m3u8
#EXTINF:-1 tvg-id="354" tvg-name="TV8" tvg-logo="https://lh3.googleusercontent.com/-snwIA-MbUYs/W15lFEEE7TI/AAAAAAAAkqA/75Rrun41uOMufo_zTiUBpJu4icQcjpSOwCK8BGAs/s317/2018-07-29.png", TV8
https://593b04c4c5670.streamlock.net:443/8014/8014/playlist.m3u8
#EXTINF:-1 tvg-id="957" tvg-name="Pacifico Television" tvg-logo="https://i2.paste.pics/dfa0913e3c68b6d9306770eb3151bfa8.png", Pacifico Television
https://5eae379fb77bb.streamlock.net:443/pacificotelevision/pacificotelevision/playlist.m3u8
#EXTINF:-1 tvg-id="355" tvg-name="TV4" tvg-logo="https://lh3.googleusercontent.com/-y7TDgBUKCMI/XxzII32W3zI/AAAAAAAA3X8/hsnRb9iiH84srb7tOHQrBhKze2dWTBVuQCK8BGAsYHg/s0/2020-07-25.png", TV4
https://evo.eltelon.com:1935/live/tv4-television/playlist.m3u8
#EXTINF:-1 tvg-id="948" tvg-name="San Pedro Conecta" tvg-logo="https://i2.paste.pics/8ef804170fcee24a4ee6221ae846e9ba.png", San Pedro Conecta
https://Stmv1.zcastbr.com/marcosvillegas/marcosvillegas/playlist.m3u8
#EXTINF:-1 tvg-id="810" tvg-name="Club TV" tvg-logo="https://lh3.googleusercontent.com/-ZO2ZG5c9lTg/YH4vuRraIyI/AAAAAAABBv4/sR_z5uB03g8Xo_BL094Xs-Kk31W-aFjmACK8BGAsYHg/s512/2021-04-19.png", Club TV
https://mediacpstreamchile.com:1936/clubtv/clubtv/playlist.m3u8
#EXTINF:-1 tvg-id="82" tvg-name="Teleangol Radio" tvg-logo="https://lh3.googleusercontent.com/-zDgbgkPTFLA/XbCy7Dg-33I/AAAAAAAArlQ/712PcpxHNmAKjz1k4Arp_iVvpJ-qC_WxQCK8BGAsYHg/s0/2019-10-23.png", Teleangol Radio
https://unlimited1-cl-isp.dps.live/teleangolradio/teleangolradio.smil/playlist.m3u8
#EXTINF:-1 tvg-id="356" tvg-name="LTV canal" tvg-logo="https://lh3.googleusercontent.com/-Lm1PxwMT-Zc/X0v29tzKwLI/AAAAAAAA5Es/MjQEVIxYNhovyHt3mpzI91Gnb-YJj0FoQCK8BGAsYHg/s0/2020-08-30.png", LTV canal
https://medios.sirtel.cl/live/stream/index.m3u8
#EXTINF:-1 tvg-id="83" tvg-name="Pucon TV" tvg-logo="https://lh3.googleusercontent.com/-r4ejsHWoXtE/XYb7QVbZA4I/AAAAAAAArCw/XjvcDEIjGlAZnTFSCURiZYONDlWPs4GhwCK8BGAsYHg/s0/2019-09-21.png", Pucon TV
https://unlimited1-cl-isp.dps.live/pucontv/pucontv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="357" tvg-name="Temuco TV" tvg-logo="https://lh3.googleusercontent.com/-RfITnpTfEz4/YKmDDqHhEvI/AAAAAAABCd4/QZ7_BVwPR3ou-_In9JbR1JeIk97H4irGACK8BGAsYHg/s512/2021-05-22.jpg", Temuco TV
https://5eff35271151c.streamlock.net:1936/8038/8038/playlist.m3u8
#EXTINF:-1 tvg-id="358" tvg-name="TecTV" tvg-logo="https://lh3.googleusercontent.com/-25N61RT1aYg/XkymulbB_NI/AAAAAAAAwIk/CTy8bQmk5IkhF1wVO0B-b2Vz3Qp17u6NACK8BGAsYHg/s0/2020-02-18.png", TecTV
https://190.107.176.55:1935/live/tec-tv/playlist.m3u8
#EXTINF:-1 tvg-id="84" tvg-name="T-Vinet" tvg-logo="https://lh3.googleusercontent.com/-EtM2JBuVazM/XxzIhLJW5PI/AAAAAAAA3YE/zmlykaL06y4tNI5JbuLPm-I1BSYsWCZYACK8BGAsYHg/s0/2020-07-25.png", T-Vinet
https://unlimited1-cl-isp.dps.live/inet2/inet2.smil/playlist.m3u8
#EXTINF:-1 tvg-id="359" tvg-name="Canal Latino 54" tvg-logo="https://lh3.googleusercontent.com/-gBbkRnIisag/XmPPRUnANTI/AAAAAAAAwpc/01jp-ZrMDeYwbf4ahDeKu7kayyMQ_VuUgCK8BGAsYHg/s0/2020-03-07.png", Canal Latino 54
https://190.3.169.119:8080/latina/latina/playlist.m3u8
#EXTINF:-1 tvg-id="360" tvg-name="Osorno TV+" tvg-logo="https://lh3.googleusercontent.com/-tFNIzbzaa-w/XxzI1GfAaZI/AAAAAAAA3YM/9QCPBTiAp7E6V8u9cSZAyt0IdlWbexo2wCK8BGAsYHg/s0/2020-07-25.png", Osorno TV+
https://hd.chileservidores.cl:1936/osorno2/live/playlist.m3u8
#EXTINF:-1 tvg-id="85" tvg-name="Decima TV" tvg-logo="https://lh3.googleusercontent.com/-3q8oUK7uUUo/XbCzDBxA1OI/AAAAAAAArlU/FPIAOQc92_kSKByiVYmSU0USaROnneutgCK8BGAsYHg/s0/2019-10-23.png", Decima TV
https://unlimited2-cl-isp.dps.live/decimatv/decimatv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="86" tvg-name="Canal 2 Quellon" tvg-logo="https://lh3.googleusercontent.com/-h8o2u7q5Uy0/XbC17VIqwsI/AAAAAAAArmI/K43pwbbfr8kOdMyWd5JqIA14olHsldGfwCK8BGAsYHg/s0/2019-10-23.png", Canal 2 Quellon
https://unlimited1-cl-isp.dps.live/tvquellon/tvquellon.smil/playlist.m3u8
#EXTINF:-1 tvg-id="361" tvg-name="Vision TV" tvg-logo="https://lh3.googleusercontent.com/-kA-YUEjBEoc/XygP_iR0ZzI/AAAAAAAA3sI/mMsFytWSPV4dziqhZQtA6X0GmhEIrmrpQCK8BGAsYHg/s0/2020-08-03.png", Vision TV
https://vivo.solumedia.com:19360/visiontv/visiontv.m3u8
#EXTINF:-1 tvg-id="362" tvg-name="Canal Survision Alerce" tvg-logo="https://lh3.googleusercontent.com/-Kiv5Ktv3BEo/Xb1-X8u-CxI/AAAAAAAAr5s/GhIbG_a7q6AgLXn-a8YDhoGIw6SlZBEOACK8BGAsYHg/s0/2019-11-02.png", Canal Survision Alerce
https://v2.tustreaming.cl/canalsurvision/index.m3u8
#EXTINF:-1 tvg-id="364" tvg-name="Canal 5 Puerto Montt" tvg-logo="https://lh3.googleusercontent.com/-szH-Ks13BEM/XxzJjjfkGMI/AAAAAAAA3Yg/9NJcDqFC9hcJL9ZUeBaaC8eDcAi1W-k7ACK8BGAsYHg/s0/2020-07-25.png", Canal 5 Puerto Montt
https://srv2.zcast.com.br/canal5tv/canal5tv/playlist.m3u8
#EXTINF:-1 tvg-id="365" tvg-name="Canal Chilote" tvg-logo="https://lh3.googleusercontent.com/-PSTGhMmBibc/XxzJI-gLUqI/AAAAAAAA3YU/mEA7WQhC_OAGP30eyfR2OlLBrd6Wy19OQCK8BGAsYHg/s0/2020-07-25.png", Canal Chilote
https://5eae379fb77bb.streamlock.net:443/8030/8030/playlist.m3u8
#EXTINF:-1 tvg-id="856" tvg-name="Hito Cero TV" tvg-logo="https://i2.paste.pics/2a80b8fde21cf03f7ac3bbff7fb0cc25.png", Hito Cero TV
https://5ff3d9babae13.streamlock.net:443/8018/8018/playlist.m3u8
#EXTINF:-1 tvg-id="366" tvg-name="Chiloe Red 25" tvg-logo="https://lh3.googleusercontent.com/-taF7STTebY8/XxzJzTcNobI/AAAAAAAA3Yk/Z_EEZ_hbkK8G6V93Rp9x_q6qa925hTqbACK8BGAsYHg/s0/2020-07-25.png", Chiloe Red 25
https://v2.tustreaming.cl/chiloered/index.m3u8
#EXTINF:-1 tvg-id="367" tvg-name="Rocco TV 4" tvg-logo="https://lh3.googleusercontent.com/-5jEbbcsU_ik/XYkOp0auiYI/AAAAAAAArFI/FZ5rSg86P3UYvIygsK6xhWt2xrO37mAsQCK8BGAsYHg/s0/2019-09-23.png", Rocco TV 4
https://evo.eltelon.com:1935/live/rocco-tv/playlist.m3u8
#EXTINF:-1 tvg-id="368" tvg-name="Santa Maria TV" tvg-logo="https://lh3.googleusercontent.com/-u0E4RY62ySI/XbC2IU7YHXI/AAAAAAAArmQ/2mDq3cPseesa8lsFWQB8TPWlwAggTb3HQCK8BGAsYHg/s0/2019-10-23.png", Santa Maria TV
https://unlimited1-cl-isp.dps.live/smtv/smtv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="369" tvg-name="Canal 11 TV Aysen" tvg-logo="https://i2.paste.pics/8023836adcf3a07cfaef99fcccbe8292.png", Canal 11 TV Aysen
https://v2.tustreaming.cl/canal11aysen/index.m3u8
#EXTINF:-1 tvg-id="370" tvg-name="Soberania Radio" tvg-logo="https://lh3.googleusercontent.com/-9sAv8-Qg_V0/YLwX4GMnM2I/AAAAAAABCuM/zxEzBw1b7V8MDY-xb6mRahyOjBVDlph8gCJEEGAsYHg/s512/2021-06-05.png", Soberania Radio
https://tls-cl.cdnz.cl/radiosoberania/live/playlist.m3u8
#EXTINF:-1 tvg-id="87" tvg-name="ITV Patagonia" tvg-logo="https://lh3.googleusercontent.com/-ZBNktblWn9U/YHTLWC_p1aI/AAAAAAABBXY/v90ntMGcb7kuYUK0yqNBGSTtu1JiQUHfQCK8BGAsYHg/s512/2021-04-12.png", ITV Patagonia
https://unlimited1-cl-isp.dps.live/itv/itv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="371" tvg-name="EvaVisión" tvg-logo="https://i2.paste.pics/1fac7deeb4ca257162cde40abd006d9d.png", EvaVisión
https://stmv2.voxtvhd.com.br/puertonatales/puertonatales/playlist.m3u8
#EXTINF:-1 tvg-id="372" tvg-name="Canal Sur Patagonia" tvg-logo="https://lh3.googleusercontent.com/-SMZdtDq6Dw0/XxzKA9R0abI/AAAAAAAA3Ys/R8wSeZoKBNU4LyZnAXKU_DR1mGnzo1L4wCK8BGAsYHg/s0/2020-07-25.png", Canal Sur Patagonia
https://v2.tustreaming.cl:19360/canalsurpatagoniatv/canalsurpatagoniatv.m3u8
#EXTINF:-1 tvg-id="373" tvg-name="PinguinoTV" tvg-logo="https://lh3.googleusercontent.com/-qSwYgRuowGA/YLwYt69YoOI/AAAAAAABCuU/avw_KQcl4cUIiy4s2iebwzLAuy5CZDOXQCJEEGAsYHg/s512/2021-06-05.png", PinguinoTV
https://167.114.133.205:1935/live/pinguinotv/playlist.m3u8
#EXTINF:-1 tvg-id="491" tvg-name="TV Chile" tvg-logo="https://lh3.googleusercontent.com/-tUAc1plWtjg/Xa0CQyx4E_I/AAAAAAAArgs/ET8I9WYNPSA3R5FoRn54Ok6IGA9-5ItaACK8BGAsYHg/s0/2019-10-20.png", TV Chile
https://mdstrm.com/live-stream-playlist/533adcc949386ce765657d7c.m3u8
#EXTINF:-1 tvg-id="376" tvg-name="Teletrak" tvg-logo="https://lh3.googleusercontent.com/-H203VH0Qnr0/XxzMCs6SOmI/AAAAAAAA3ZQ/S5ojmvOjSQERDOMBWTNQRoN_tqvAZGMBQCK8BGAsYHg/s0/2020-07-25.png", Teletrak
https://unlimited1-cl-isp.dps.live/teletrak/teletrak.smil/playlist.m3u8
#EXTINF:-1 tvg-id="374" tvg-name="TV Turf Movil" tvg-logo="https://lh3.googleusercontent.com/-4gdqGn04Bng/Xb9WF2WzB6I/AAAAAAAAr7A/tbeDeaQTuuMuHOka_gYv4trQHwAyzqKPQCK8BGAsYHg/s0/2019-11-03.png", TV Turf Movil
https://janus.tvturf.cl/playlist/stream.m3u8
#EXTINF:-1 tvg-id="375" tvg-name="Valparaiso Sporting" tvg-logo="https://lh3.googleusercontent.com/-HLkq9KDNolI/XxzLq65I2KI/AAAAAAAA3ZI/Vx5DVILxWmoGc5_PJ01NSoc2wVODn-FqACK8BGAsYHg/s0/2020-07-25.png", Valparaiso Sporting
https://unlimited1-cl-isp.dps.live/sportinghd/sportinghd.smil/playlist.m3u8
#EXTINF:-1 tvg-id="63" tvg-name="Bajo Cero TV" tvg-logo="https://i2.paste.pics/3caab16270214727377ff0994bb64031.png", Bajo Cero TV
https://stmv.panel.mivideo.pro/bajocerotv/bajocerotv/playlist.m3u8
#EXTINF:-1 tvg-id="1029" tvg-name="Evavisión Pachanga" tvg-logo="https://i2.paste.pics/1fac7deeb4ca257162cde40abd006d9d.png", Evavisión Pachanga
https://159.69.56.148:25461/live/evavision/2r4rfasf/38.m3u8
#EXTINF:-1 tvg-id="324" tvg-name="El Galpon 80" tvg-logo="https://lh3.googleusercontent.com/-ZhVxctNbhbM/YH2g1ESaUAI/AAAAAAABBtY/CJuILsc-u_kfRfDmtrMOuzVIwH9oT_WSwCK8BGAsYHg/s512/2021-04-19.png", El Galpon 80
https://streamyes.alsolnet.com/wtmradio/live/playlist.m3u8
#EXTINF:-1 tvg-id="849" tvg-name="High Music" tvg-logo="https://lh3.googleusercontent.com/-C6a5ObWNq2E/YIxMW2MLOiI/AAAAAAABCEQ/W-H__V_pPaUG5WgvOBrge4NzdIzR3xLsQCK8BGAsYHg/s512/2021-04-30.jpg", High Music
https://hd.chileservidores.cl:1936/tvcosta2/tvcosta2/playlist.m3u8
#EXTINF:-1 tvg-id="769" tvg-name="Radioteca WebStereo" tvg-logo="https://lh3.googleusercontent.com/-vjEnvM1m630/YGYhYT-7EvI/AAAAAAABBFk/rz8H2mX_Euwct3Z1LtSido0C2Wg7eQ4hgCK8BGAsYHg/s512/2021-04-01.webp", Radioteca WebStereo
https://vdohd.cl:1936/9040/9040/playlist.m3u8
#EXTINF:-1 tvg-id="785" tvg-name="Re7" tvg-logo="https://lh3.googleusercontent.com/-G0VClSWuZuY/YG8IaybYl4I/AAAAAAABBQc/muG2PSbo290d03axgs10Z-KSgdK3uWcBACK8BGAsYHg/s512/2021-04-08.png", Re7
https://tv.streamprivate.live:3540/stream/play.m3u8
#EXTINF:-1 tvg-id="1000" tvg-name="Calama TV" tvg-logo="https://i2.paste.pics/1391977c24b4145f99ff7e9c91926dc0.png", Calama TV
https://vdohd.cl:1936/8026/8026/playlist.m3u8
#EXTINF:-1 tvg-id="521" tvg-name="Recuerdos Retro Radio TV" tvg-logo="https://lh3.googleusercontent.com/-u9hoJJgi3Qg/YCCON9BSD1I/AAAAAAAA_xk/IaTcH9DfgAgCjdrjd_MM10F7TGPoUnpEACK8BGAsYHg/s0/2021-02-07.png", Recuerdos Retro Radio TV
https://593b04c4c5670.streamlock.net:443/8002/8002/playlist.m3u8
#EXTINF:-1 tvg-id="889" tvg-name="La Sabrosura TV" tvg-logo="https://lh3.googleusercontent.com/-8b7QS_hJZdY/YLu9e1SGFLI/AAAAAAABCrk/aO5qeFONSokBmWT8vsROhr1uigX0FizcQCJEEGAsYHg/s512/2021-06-05.png", La Sabrosura TV
https://5eff35271151c.streamlock.net:1936/8012/8012/playlist.m3u8
#EXTINF:-1 tvg-id="27" tvg-name="Carolina TV" tvg-logo="https://lh3.googleusercontent.com/-3hmTnW9e-Y4/XbDAlKKxKtI/AAAAAAAArnA/OkLJM2f1T0ktieMaceuBzVPOADwGIf1jACK8BGAsYHg/s0/2019-10-23.png", Carolina TV
https://unlimited1-cl-isp.dps.live/carolinatv/carolinatv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="1127" tvg-name="Carolina TV 2" tvg-logo="https://i2.paste.pics/a1f3645efd9dcde7f2c90bc14f24ddc1.png", Carolina TV 2
https://unlimited1-cl-isp.dps.live/carolinatv/carolinatv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="33" tvg-name="Maxima FM" tvg-logo="https://lh3.googleusercontent.com/-RF13xAQ97o0/XxzMzRqfnBI/AAAAAAAA3Zc/xet9CCbU7H8WEPRQGCXEPpiBxM5RUK6EwCK8BGAsYHg/s0/2020-07-25.png", Maxima FM
https://server1.oklanet.cl:1936/maximavideo1/maximavideo1/playlist.m3u8
#EXTINF:-1 tvg-id="20" tvg-name="On Radio Kpop" tvg-logo="https://lh3.googleusercontent.com/-MfYGt6f-FNQ/XmWIp_jDYpI/AAAAAAAAwsg/7Yn3jbMYdRIJWMFC3S1YbS2hQT3XBMiOgCK8BGAsYHg/s0/2020-03-08.png", On Radio Kpop
https://tls-cl.cdnz.cl/adgm-2/live/playlist.m3u8
#EXTINF:-1 tvg-id="31" tvg-name="Portal FoxMix" tvg-logo="https://lh3.googleusercontent.com/-k9n3tedhqBs/XbC_-FblJSI/AAAAAAAArm4/pMPtuBhhdtoL_yFWs5dt23dHFTHHCv8hgCK8BGAsYHg/s0/2019-10-23.png", Portal FoxMix
https://149.56.17.92:1935/portalfoxmix/_definst_/portalfoxmix/playlist.m3u8
#EXTINF:-1 tvg-id="25" tvg-name="TuTv Quillota" tvg-logo="https://i2.paste.pics/cff14c81193469fc7a3157d689d6f594.png", TuTv Quillota
https://paneltv.net:3978/hybrid/play.m3u8
#EXTINF:-1 tvg-id="966" tvg-name="Vox TV" tvg-logo="https://i2.paste.pics/62c3e5626494078d746f41faea72e2d2.png", Vox TV
https://live01.hablaip.com:1936/9071/9071/playlist.m3u8
#EXTINF:-1 tvg-id="34" tvg-name="TV vconline.cl" tvg-logo="https://lh3.googleusercontent.com/-F0CYLyk3J_M/XxzNduxMoVI/AAAAAAAA3Zk/3S772u4F4jER7F0bULY-hlG7Nn9bbGa7gCK8BGAsYHg/s0/2020-07-25.png", TV vconline.cl
https://593b04c4c5670.streamlock.net/8068/8068/chunklist_w2070277572.m3u8
#EXTINF:-1 tvg-id="2" tvg-name="Zapping Music" tvg-logo="https://i2.paste.pics/869156d90e27d6c6e09dc5a8f0017838.png", Zapping Music
https://zmlive.zappingtv.com/zm-free/zm.smil/playlist.m3u8
#EXTINF:-1 tvg-id="32" tvg-name="Alegria TV" tvg-logo="https://lh3.googleusercontent.com/-IDCwMaJRdnM/Xb11MVTbE-I/AAAAAAAAr4s/PbNF6ie1AIothtCRKeVvdVC6S5hO6a3xACK8BGAsYHg/s0/2019-11-02.png", Alegria TV
https://593b04c4c5670.streamlock.net:443/8192/8192/playlist.m3u8
#EXTINF:-1 tvg-id="1008" tvg-name="Cloud FM" tvg-logo="https://i2.paste.pics/bfdf6e6db7e66a7f59008cc6e85079b6.png", Cloud FM
https://videostreaming.cloudserverlatam.com:443/CLOUDFM/CLOUDFM/playlist.m3u8
#EXTINF:-1 tvg-id="1009" tvg-name="Radiomania" tvg-logo="https://i2.paste.pics/23bcb93c2d0cdd0163f92bffdb001898.png", Radiomania
https://videostreaming.cloudserverlatam.com:443/8000/8000/playlist.m3u8
#EXTINF:-1 tvg-id="973" tvg-name="Top New Radio" tvg-logo="https://i2.paste.pics/fa96854fb72b2a5e1032d030c83814fa.png", Top New Radio
https://video.streamingchilenos.cl:1936/8048/8048/playlist.m3u8
#EXTINF:-1 tvg-id="1069" tvg-name="Radio Magallanes" tvg-logo="https://i2.paste.pics/cc4b99bf8b5291c279d1f2f02fab8d06.png", Radio Magallanes
https://tv.tvcontrolcp.com:1936/magallanes/magallanes/playlist.m3u8
#EXTINF:-1 tvg-id="972" tvg-name="TV Volcan" tvg-logo="https://i2.paste.pics/7f6b70a7dd32b495e0449baa44cf4ea5.png", TV Volcan
https://video.streamingchilenos.cl:1936/8034/8034/playlist.m3u8
#EXTINF:-1 tvg-id="987" tvg-name="Emocion TV" tvg-logo="https://i2.paste.pics/2337c738e62db5b6e2b573580e2d9e82.png", Emocion TV
https://v2.tustreaming.cl/emocion/index.m3u8
#EXTINF:-1 tvg-id="1013" tvg-name="CRadio.cl" tvg-logo="https://i2.paste.pics/f08b155b917bdd7db3bebdd877d8703a.png", CRadio.cl
https://tls-cl.cdnz.cl/cradio/live/playlist.m3u8
#EXTINF:-1 tvg-id="387" tvg-name="Zona Play Radio" tvg-logo="https://lh3.googleusercontent.com/-nYwjW5gyOHs/Xm_wyxoQZ8I/AAAAAAAAw-M/UivKYmyy1tMPqn_zDoQtMGFrmivibOCLgCK8BGAsYHg/s0/2020-03-16.jpg", Zona Play Radio
https://srv1.zcast.com.br/zonaplay/zonaplay/playlist.m3u8
#EXTINF:-1 tvg-id="786" tvg-name="Tributo Valentina" tvg-logo="https://lh3.googleusercontent.com/-prh7BFcqRm8/YG-DVGT_cwI/AAAAAAABBRM/eqw6BkvoZRQ6UQHcT76iv42klsK74q7WgCK8BGAsYHg/s512/2021-04-08.png", Tributo Valentina
https://vdohd.cl:1936/8044/8044/playlist.m3u8
#EXTINF:-1 tvg-id="964" tvg-name="Tierras Blancas TV" tvg-logo="https://i2.paste.pics/f369858a8cbfe19a4db8994e3f3d9626.png", Tierras Blancas TV
https://mediacpstreamchile.com:1936/norterama/norterama/playlist.m3u8
#EXTINF:-1 tvg-id="1125" tvg-name="Radio La Serena" tvg-logo="https://i2.paste.pics/850f8ca54830f1011c5289f02a401cd5.png", Radio La Serena
https://mediacpstreamchile.com:1936/norterama2/norterama2/playlist.m3u8
#EXTINF:-1 tvg-id="974" tvg-name="Patagonia Radio TV" tvg-logo="https://i2.paste.pics/0f20f371ddf95dcc9deed1f97c7c1bb8.png", Patagonia Radio TV
https://video01.logicahost.com.br/grupomedia/grupomedia/playlist.m3u8
#EXTINF:-1 tvg-id="956" tvg-name="Conecta2 TV" tvg-logo="https://i2.paste.pics/c162d560addc59e693d1924645c5c984.png", Conecta2 TV
https://srv.panelcast.net/rc2/rc2/playlist.m3u8
#EXTINF:-1 tvg-id="977" tvg-name="Radio PuntoFM" tvg-logo="https://i2.paste.pics/4ac46b3631337f8bdee0376711adc814.png", Radio PuntoFM
https://streaming5.globalhostla.com/rtplive/puntofmcl/playlist.m3u8
#EXTINF:-1 tvg-id="379" tvg-name="CCP Radio" tvg-logo="https://lh3.googleusercontent.com/-t_TztnOyFVE/XmsBBeYivqI/AAAAAAAAwyY/AiGUMO20vMcW9z6ipuNOk_WkgY_za1KrgCK8BGAsYHg/s512/2020-03-12.png", CCP Radio
https://tls-cl.cdnz.cl/ccpradio/live/playlist.m3u8
#EXTINF:-1 tvg-id="400" tvg-name="Red Fueguina Radio" tvg-logo="https://lh3.googleusercontent.com/-AX14DpZylvw/Xqx1dYnBM7I/AAAAAAAAyhM/FKTxf_9d9hEY1okFtMwivpO3IIy9KAAcgCK8BGAsYHg/s0/2020-05-01.png", Red Fueguina Radio
https://inliveserver.com:1936/11012/11012/playlist.m3u8
#EXTINF:-1 tvg-id="838" tvg-name="DBox Radio" tvg-logo="https://lh3.googleusercontent.com/-SQdye8I9dnM/YIDp2W_TXJI/AAAAAAABB2s/WEtbSpSFbiEfpoYN3Wy76gtxXIIdCPjeQCK8BGAsYHg/s512/2021-04-21.png", DBox Radio
https://stmv1.voxtvhd.com.br/dbox/dbox/playlist.m3u8
#EXTINF:-1 tvg-id="392" tvg-name="Radio Zeta" tvg-logo="https://lh3.googleusercontent.com/-Zkxwnf-bgX4/XoPOd4kOr7I/AAAAAAAAxX0/EWBlznUnmekBRjTn7B8n3ocfGe8bkITsQCK8BGAsYHg/s0/2020-03-31.png", Radio Zeta
https://unlimited1-cl-isp.dps.live/radioztv/radioztv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="396" tvg-name="Radio Via Libre" tvg-logo="https://lh3.googleusercontent.com/-BZ4QVXPlxJU/Xk_PdNVd3KI/AAAAAAAAwVc/js3gvjxbBPoXr0EmRyQxl6MWeiYX6x7_gCK8BGAsYHg/s0/2020-02-21.png", Radio Via Libre
https://mediacpstreamchile.com:1936/radiovialibre/radiovialibre/playlist.m3u8
#EXTINF:-1 tvg-id="390" tvg-name="Radio Universal" tvg-logo="https://lh3.googleusercontent.com/-0g6kTjRKq_8/XoTI5Gn3jjI/AAAAAAAAxZk/9EsSrTOl0eMlKWP9oRzwZK8lQ9mt8PSBwCK8BGAsYHg/s0/2020-04-01.png", Radio Universal
https://hd.chileservidores.cl:1936/universal/universal/playlist.m3u8
#EXTINF:-1 tvg-id="394" tvg-name="Radio Touch" tvg-logo="https://lh3.googleusercontent.com/-qotpEBjN3o0/Xmr5PYL7uPI/AAAAAAAAwx8/FwJJfi_LQjUoISTRZ0JhU4es2qWXDJeCACK8BGAsYHg/s0/2020-03-12.png", Radio Touch
https://mediacpstreamchile.com:1936/8118/8118/playlist.m3u8
#EXTINF:-1 tvg-id="384" tvg-name="Radio Tazmania Hit" tvg-logo="https://lh3.googleusercontent.com/-mSk9UtnIomg/YCCNgwOIw4I/AAAAAAAA_xc/Y4IZWv0EqR81E3iFCD6Vul6LkGxgZRaygCK8BGAsYHg/s0/2021-02-07.png", Radio Tazmania Hit
https://paneltv.online:1936/8054/8054/playlist.m3u8
#EXTINF:-1 tvg-id="416" tvg-name="Sabor TV" tvg-logo="https://i2.paste.pics/0c69fb7b8aed951e8fbb9dfae98c39a5.png", Sabor TV
https://v2.tustreaming.cl/radiosabortv/index.m3u8
#EXTINF:-1 tvg-id="418" tvg-name="Radio Rancagua" tvg-logo="https://lh3.googleusercontent.com/-Z5RpepVd4T0/XkbaXURXxAI/AAAAAAAAwC4/SEU5uIM2uzUQQznq-Pgvi-uCe_fStzypwCK8BGAsYHg/s0/2020-02-14.png", Radio Rancagua
https://5eff35271151c.streamlock.net:1936/8056/8056/playlist.m3u8
#EXTINF:-1 tvg-id="413" tvg-name="Radio Presidente Ibañez" tvg-logo="https://lh3.googleusercontent.com/-t2rtTbIA3oc/XmV-7wrFWHI/AAAAAAAAwr0/VH4k91ijqr4MbkR-DlS4n7o0HvCnjQfZACK8BGAsYHg/s0/2020-03-08.png", Radio Presidente Ibañez
https://ibanez.servercl.com/hls/live.m3u8
#EXTINF:-1 tvg-id="403" tvg-name="Radio Polar" tvg-logo="https://i2.paste.pics/1a4476b8ddeb3fad055579929c495fca.png", Radio Polar
https://mediacpstreamchile.com:1936/radiopolar2/radiopolar2/playlist.m3u8
#EXTINF:-1 tvg-id="378" tvg-name="Radio Mas" tvg-logo="https://lh3.googleusercontent.com/-1MimLN5b_Os/XmsDzj71aqI/AAAAAAAAwys/1bqv2qCTmUkN9qA1qaIZfWLihfGZ6jdOgCK8BGAsYHg/s512/2020-03-12.png", Radio Mas
https://unlimited1-cl.dps.live/radiomas/radiomas.smil/playlist.m3u8
#EXTINF:-1 tvg-id="408" tvg-name="Radio Las Nieves" tvg-logo="https://lh3.googleusercontent.com/-yAzYXd230b8/XmPQwQY849I/AAAAAAAAwps/fu7GMDaULwEgJYarzmR1Vo5w_BRoPg2eACK8BGAsYHg/s0/2020-03-07.png", Radio Las Nieves
https://v2.tustreaming.cl/rln/index.m3u8
#EXTINF:-1 tvg-id="383" tvg-name="Radio Lado Oscuro TV" tvg-logo="https://lh3.googleusercontent.com/-TNqDa4nEUv4/X_ujz4Fx5wI/AAAAAAAA9GA/-Wvhg96AgXkuBRq5Edc7QxUyFD6YMwaiACK8BGAsYHg/s0/2021-01-10.jpg", Radio Lado Oscuro TV
https://593b04c4c5670.streamlock.net:443/8034/8034/playlist.m3u8
#EXTINF:-1 tvg-id="377" tvg-name="4R Television" tvg-logo="https://i2.paste.pics/4bb2b08e260f27b2b276bcd83445ef81.png", 4R Television
https://streamyes.alsolnet.com/radioserena/live/playlist.m3u8
#EXTINF:-1 tvg-id="380" tvg-name="Radio Hoy" tvg-logo="https://lh3.googleusercontent.com/-vFBzx3OHjvA/XmPSjVW5sMI/AAAAAAAAwp8/W0kgWc-NYfUkFdX3SZICQX3njfoFJP72QCK8BGAsYHg/s0/2020-03-07.png", Radio Hoy
https://panel.dattalive.com:443/8146/8146/playlist.m3u8
#EXTINF:-1 tvg-id="412" tvg-name="Radio Genial TV" tvg-logo="https://lh3.googleusercontent.com/-tgkESVUJWRI/XkyfsBVW_mI/AAAAAAAAwHw/xsYoralOutAlHw-iMJC9nl1hdd6vKqznQCK8BGAsYHg/s0/2020-02-18.png", Radio Genial TV
https://v2.tustreaming.cl/genialtv/index.m3u8
#EXTINF:-1 tvg-id="401" tvg-name="Radio Fiessta" tvg-logo="https://lh3.googleusercontent.com/-geXQ8sv9psc/XoPRmsgB8zI/AAAAAAAAxYA/XW6P5dLJn1wAaa3IZFhc5NBjBIr-OAbqgCK8BGAsYHg/s0/2020-03-31.png", Radio Fiessta
https://videostreaming.cloudserverlatam.com:443/8052/8052/playlist.m3u8
#EXTINF:-1 tvg-id="883" tvg-name="Futura TV" tvg-logo="https://lh3.googleusercontent.com/-mnnwudrynnE/XkbaoY35p6I/AAAAAAAAwDA/eHhkuRJcADsgzRX1Zfajo6FQ8wrGHRS0gCK8BGAsYHg/s0/2020-02-14.png", Futura TV
https://unlimited1-cl-isp.dps.live/futuratv/futuratv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="417" tvg-name="Radio Favorita" tvg-logo="https://lh3.googleusercontent.com/-q3XnvDfKVpc/Xkba4X57uaI/AAAAAAAAwDI/8sCjKKC3QJ4WoPLBcOxgFmG0dic0ffPuQCK8BGAsYHg/s0/2020-02-14.png", Radio Favorita
https://streamyes.alsolnet.com/radiofavoritatv/live/playlist.m3u8
#EXTINF:-1 tvg-id="870" tvg-name="Radio Ñuble" tvg-logo="https://lh3.googleusercontent.com/-yPTpIpQNeeY/YKmBg83s56I/AAAAAAABCds/RmIdBd-Qd5wQYuoUEQmU9e8rmTgsSQPRQCK8BGAsYHg/s512/2021-05-22.jpg", Radio Ñuble
https://live.tvcontrolcp.com:1936/Rnuble/Rnuble/playlist.m3u8
#EXTINF:-1 tvg-id="389" tvg-name="Radio Fantasia TV" tvg-logo="https://lh3.googleusercontent.com/-7Uf_S_1oEU8/XmV_Zz3S5cI/AAAAAAAAwsA/yYku6NdZFTk7c0a9AtwAOJBoh3a2UMnqQCK8BGAsYHg/s0/2020-03-08.png", Radio Fantasia TV
https://v2.tustreaming.cl/fantasiatv/index.m3u8
#EXTINF:-1 tvg-id="405" tvg-name="Cosmos TV" tvg-logo="https://i2.paste.pics/ed2fce1f9fe98a5c7dec95777c201497.png", Cosmos TV
https://v2.tustreaming.cl:80/cosmostv/index.m3u8
#EXTINF:-1 tvg-id="409" tvg-name="Radio Chiloe" tvg-logo="https://lh3.googleusercontent.com/-exchdEZ4lAg/XmWArTXQnFI/AAAAAAAAwsI/fo3sD3494lY54nz8wHjEykbwf0tVz0MkQCK8BGAsYHg/s0/2020-03-08.png", Radio Chiloe
https://hd.chileservidores.cl:1936/chiloeone/chiloeone/playlist.m3u8
#EXTINF:-1 tvg-id="410" tvg-name="Radio Camila TV" tvg-logo="https://lh3.googleusercontent.com/-82UBf4qHY0Q/XjHJ9TJue-I/AAAAAAAAvfc/Y474O6NtMJYl1gpuUJ1sJyFh8i9afnYlACK8BGAsYHg/s0/2020-01-29.png", Radio Camila TV
https://593b04c4c5670.streamlock.net/8142/8142/playlist.m3u8
#EXTINF:-1 tvg-id="393" tvg-name="Radio Actitud" tvg-logo="https://lh3.googleusercontent.com/-KZ5hF_e71jY/Xm70Txo7USI/AAAAAAAAw8I/Y6DKIiTDd7YJUOLYn2hO9gjvroZD4T5MACK8BGAsYHg/s0/2020-03-15.png", Radio Actitud
https://593b04c4c5670.streamlock.net/8020/8020/playlist.m3u8
#EXTINF:-1 tvg-id="415" tvg-name="Pura Noticia" tvg-logo="https://lh3.googleusercontent.com/-byzaiVj7LaA/XdyKPYtxdwI/AAAAAAAAsWo/80eR-amTNBsnAUPBFCPgHuL_hychB-b3wCK8BGAsYHg/s0/2019-11-25.png", Pura Noticia
https://pnt.janusmedia.tv/hls/pnt.m3u8
#EXTINF:-1 tvg-id="407" tvg-name="Preludio TV" tvg-logo="https://lh3.googleusercontent.com/-dwHIA3qDBnE/XmPQVNGWG8I/AAAAAAAAwpk/lEVnfzQ8b1s7gjkedNxdk8G-foIlYgOAACK8BGAsYHg/s0/2020-03-07.png", Preludio TV
https://5eff35271151c.streamlock.net:1936/8068/8068/playlist.m3u8
#EXTINF:-1 tvg-id="402" tvg-name="Orocoipo" tvg-logo="https://lh3.googleusercontent.com/-Oj60X_Fdylk/XoPge96i7aI/AAAAAAAAxYQ/zkPc_7Zajj04xQelUuWrShb7K68FDuVBgCK8BGAsYHg/s0/2020-03-31.png", Orocoipo
https://593b04c4c5670.streamlock.net:443/8076/8076/playlist.m3u8
#EXTINF:-1 tvg-id="385" tvg-name="On Radio Chile" tvg-logo="https://lh3.googleusercontent.com/-tWify_nqCRw/XlwOcKK-yiI/AAAAAAAAwg0/mYcxi6LPzmYoZVTyTAOF0VFqInihTPbhgCK8BGAsYHg/s0/2020-03-01.png", On Radio Chile
https://tls-cl.cdnz.cl/adgm-1/live/playlist.m3u8
#EXTINF:-1 tvg-id="395" tvg-name="Mi Radio TV" tvg-logo="https://lh3.googleusercontent.com/-7XLo-eid_jI/Xm9iFNKwCYI/AAAAAAAAw8Y/TWJlVG10Ofc-nX2cNdUPKn7quq7hKWKBACK8BGAsYHg/s0/2020-03-16.png", Mi Radio TV
https://v2.tustreaming.cl/miradiotv/rewind-999999.m3u8
#EXTINF:-1 tvg-id="411" tvg-name="Interradio TV" tvg-logo="https://i2.paste.pics/29e1c081406ffc375a6af8717839fb30.png", Interradio TV
https://unlimited1-cl-isp.dps.live/intrr/intrr.smil/playlist.m3u8
#EXTINF:-1 tvg-id="388" tvg-name="Interactiva FM" tvg-logo="https://lh3.googleusercontent.com/-QI0Y25E7D14/X4YuErUkgLI/AAAAAAAA6Yo/WZwniEwC_RwZWkwXPGKRXxRueEu4ekjUQCK8BGAsYHg/s0/2020-10-13.jpg", Interactiva FM
https://live.tvcontrolcp.com:1936/interactiva/interactiva/playlist.m3u8
#EXTINF:-1 tvg-id="397" tvg-name="FM Pulso" tvg-logo="https://lh3.googleusercontent.com/-PnlftgFahF0/XoThpbgVNeI/AAAAAAAAxZw/YFbXaFZUUikkGSKbQjxlOyxVMmJQBQMFACK8BGAsYHg/s0/2020-04-01.png", FM Pulso
https://videostreaming.cloudserverlatam.com:443/8026/8026/playlist.m3u8
#EXTINF:-1 tvg-id="398" tvg-name="El Sembrador" tvg-logo="https://lh3.googleusercontent.com/-ZXxa89JuEy4/XqSv0ZHfhRI/AAAAAAAAyMI/Vm77URwVLucvQErUaM6LFb_GlH-1_hdUwCK8BGAsYHg/s0/2020-04-25.png", El Sembrador
https://5eff35271151c.streamlock.net:1936/8064/8064/playlist.m3u8
#EXTINF:-1 tvg-id="419" tvg-name="El Conquistador TV" tvg-logo="https://lh3.googleusercontent.com/-sbaPyioWXEc/XxzPyjqm-UI/AAAAAAAA3aQ/uxQH1SZBD4k0o1g7MQPhYsBf6Mo4cjkOQCK8BGAsYHg/s0/2020-07-25.png", El Conquistador TV
https://v2.tustreaming.cl/conquistadorcc/index.m3u8
#EXTINF:-1 tvg-id="382" tvg-name="ChocolateFM" tvg-logo="https://lh3.googleusercontent.com/-Cv39r3czF0w/XovwZlRIgyI/AAAAAAAAxhI/u9IUH1nGlX4XEJA-Pqc2wGXfJJrbjejgwCK8BGAsYHg/s0/2020-04-06.png", ChocolateFM
https://5eff35271151c.streamlock.net:1936/8162/8162/playlist.m3u8
#EXTINF:-1 tvg-id="406" tvg-name="Radio Ancoa TV" tvg-logo="https://i2.paste.pics/b1a689ac7ba1ffd46a21a12f78b2e12a.png", Radio Ancoa TV
https://v2.tustreaming.cl/radioancoatv/index.m3u8
#EXTINF:-1 tvg-id="414" tvg-name="AE Radio" tvg-logo="https://i2.paste.pics/f8b890eebda6062f306024bdc70afafa.png", AE Radio
https://tls-cl.cdnz.cl/aeradio/live/playlist.m3u8
#EXTINF:-1 tvg-id="882" tvg-name="Pauta TV" tvg-logo="https://lh3.googleusercontent.com/-DB74taQncQw/XbSnai__c5I/AAAAAAAArt0/jqsOckrCWRMdlGZoE1ecSjJrHivTgt_fQCK8BGAsYHg/s0/2019-10-26.png", Pauta TV
https://unlimited1-cl-isp.dps.live/pautatv/pautatv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="426" tvg-name="Radio Tiempo" tvg-logo="https://lh3.googleusercontent.com/-pG_O1wKWuUY/XlPedSivgtI/AAAAAAAAwbg/f7tHw2tx4kMuTwzpTSoJQeiprrvTMshuQCK8BGAsYHg/s0/2020-02-24.png", Radio Tiempo
https://unlimited2-cl-isp.dps.live/fmtiempotv/fmtiempotv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="425" tvg-name="Radio Infinita" tvg-logo="https://i2.paste.pics/e6cda89272e3579a1987bc1380bd5866.png", Radio Infinita
https://unlimited2-cl-isp.dps.live/infinitatv/infinitatv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="428" tvg-name="Radio Romantica" tvg-logo="https://i2.paste.pics/fb1c2e049a401e2e34318f28706587d0.png", Radio Romantica
https://unlimited2-cl-isp.dps.live/romanticatv/romanticatv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="423" tvg-name="Radio Agricultura" tvg-logo="https://lh3.googleusercontent.com/-nMa_IsPVRQ0/Xdsii8vjPBI/AAAAAAAAsVI/py8vvCsRNGIuvDA62hxD62S6L29wmGOzACK8BGAsYHg/s0/2019-11-24.png", Radio Agricultura
https://unlimited1-cl-isp.dps.live/921tv/921tv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="427" tvg-name="Radio Duna" tvg-logo="https://lh3.googleusercontent.com/-yl6dZt6XKzE/XdshRlQ88eI/AAAAAAAAsU4/KxB9KZBrShQzBIEQyGmDZ9a-vvI41GiQwCK8BGAsYHg/s0/2019-11-24.png", Radio Duna
https://unlimited1-cl-isp.dps.live/dunatv/dunatv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="429" tvg-name="Pudahuel FM" tvg-logo="https://lh3.googleusercontent.com/-j_3t6HSVxa8/XkbbBzVir0I/AAAAAAAAwDM/kVHViPIlEDs5ntK8W5yfVgaym95puVsLACK8BGAsYHg/s0/2020-02-14.png", Pudahuel FM
https://unlimited2-cl-isp.dps.live/pudahueltv/pudahueltv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="422" tvg-name="Cooperativa" tvg-logo="https://lh3.googleusercontent.com/-z-9QvjvHZ5A/Xdsg1tqv4jI/AAAAAAAAsUw/f9g3MnniEdAxcMWqEsWK6vuikDlDz25iACK8BGAsYHg/s0/2019-11-24.png", Cooperativa
https://unlimited1-cl-isp.dps.live/coopetv/coopetv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="421" tvg-name="Bio Bio TV" tvg-logo="https://lh3.googleusercontent.com/-QHD8_RoRqOU/XxzQUiC2S5I/AAAAAAAA3aY/YM3LJbqZLxot1bbgqWLRVD-QnoFWYaxCgCK8BGAsYHg/s0/2020-07-25.png", Bio Bio TV
https://unlimited1-cl-isp.dps.live/bbtv/bbtv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="424" tvg-name="ADN" tvg-logo="https://lh3.googleusercontent.com/-H20emk-_gGE/Xb2CvlkCsVI/AAAAAAAAr6c/MvhdPSgNp4I1Q9QAGlqEvJp4QRnyorpkgCK8BGAsYHg/s0/2019-11-02.png", ADN
https://unlimited2-cl-isp.dps.live/adntv/adntv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="174" tvg-name="Voz de Poder Televisión" tvg-logo="https://lh3.googleusercontent.com/-ud_Q7QFZBEI/X9jQ5_GSSeI/AAAAAAAA8PE/1no_fjWZjTIIPW0n1ddWGBXtYbSHYzmVwCK8BGAsYHg/s0/2020-12-15.png", Voz de Poder Televisión
https://v2.tustreaming.cl/vozdepoder/index.m3u8
#EXTINF:-1 tvg-id="161" tvg-name="Vida TV" tvg-logo="https://lh3.googleusercontent.com/-M6IkTdk74v8/YEDQ8Yaj8sI/AAAAAAABAg0/0AX-YP_ERfco4p51TJDf3a0-cmAFLb6rgCK8BGAsYHg/s512/2021-03-04.png", Vida TV
https://45.161.188.242:88/vidatv/index.m3u8
#EXTINF:-1 tvg-id="170" tvg-name="Unidad Evangelica TV" tvg-logo="https://lh3.googleusercontent.com/-0tqSzwPEvSc/X7PH803XliI/AAAAAAAA7aQ/4JNA77aFp8gLDSf-RMXP1Ej7gSyKjrKrACK8BGAsYHg/s0/2020-11-17.png", Unidad Evangelica TV
https://v2.tustreaming.cl/unidadevangelica/index.m3u8
#EXTINF:-1 tvg-id="168" tvg-name="TNE" tvg-logo="https://i2.paste.pics/12d449b496fcb00dc23612da150e3fd6.png", TNE
https://v2.tustreaming.cl/tnetv/index.m3u8
#EXTINF:-1 tvg-id="169" tvg-name="Televida HD" tvg-logo="https://i2.paste.pics/a33717fb4cfdc7ac0983ec9b03947e7e.png", Televida HD
https://tls-cl.cdnz.cl/televida/live/playlist.m3u8
#EXTINF:-1 tvg-id="351" tvg-name="Restaurando Vidas TV" tvg-logo="https://i2.paste.pics/bda4dda4f3d61d88354e6d64a8fdbc44.png", Restaurando Vidas TV
https://v2.tustreaming.cl/restaurandovidastv/index.m3u8
#EXTINF:-1 tvg-id="971" tvg-name="Restaurando Vidas TV Internacional" tvg-logo="https://i2.paste.pics/bda4dda4f3d61d88354e6d64a8fdbc44.png", Restaurando Vidas TV Internacional
https://patagoniaip.trapemn.tv:1936/cristianos/restaurandovidatv1.stream/playlist.m3u8
#EXTINF:-1 tvg-id="167" tvg-name="Radio Vida Curico" tvg-logo="https://i2.paste.pics/b5b7b96e2769867a92c9a32dee7cfba9.png", Radio Vida Curico
https://v2.tustreaming.cl/radiovidacurico/rewind-999999.m3u8
#EXTINF:-1 tvg-id="805" tvg-name="Radio Unido Al Cielo" tvg-logo="https://lh3.googleusercontent.com/-K58P9VOeL1M/YH3I4wI5eDI/AAAAAAABBuk/m1cDE2y7aaks-dqEPEL2BhYUc6HrvwgEwCK8BGAsYHg/s512/2021-04-19.webp", Radio Unido Al Cielo
https://streamlov.alsolnet.com/radiounidoalcielo/live/playlist.m3u8
#EXTINF:-1 tvg-id="164" tvg-name="NCTV" tvg-logo="https://lh3.googleusercontent.com/-8FziFTjIuAc/Xp0H3lcJYsI/AAAAAAAAyCQ/FGN80U47Fiw0GwPBBcVtMfT5Ky0wKftqgCK8BGAsYHg/s0/2020-04-19.png", NCTV
https://unlimited1-cl-isp.dps.live/nctv/nctv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="163" tvg-name="Gracia TV" tvg-logo="https://lh3.googleusercontent.com/-SWtsCllpbio/Xpz5oNEdmDI/AAAAAAAAyBc/fsfhz_a0y9I-6v8vfM0zUc_9C_xG3DgagCK8BGAsYHg/s0/2020-04-19.png", Gracia TV
https://v3.tustreaming.cl:80/graciatv/live1/index.m3u8
#EXTINF:-1 tvg-id="173" tvg-name="Escuchame Radio" tvg-logo="https://lh3.googleusercontent.com/-eQd-W5mPTuw/YDwxJZOsNSI/AAAAAAABAcs/0mAPdTthnzsqYh3wSG0soki-xF-As78UQCK8BGAsYHg/s512/2021-02-28.png", Escuchame Radio
https://stmv1.voxtvhd.com.br/escuchame/escuchame/playlist.m3u8
#EXTINF:-1 tvg-id="159" tvg-name="Canal ISB" tvg-logo="https://lh3.googleusercontent.com/-BAGm0_jccnk/Xpz6lms-rHI/AAAAAAAAyBk/Mbk9tiXSZPMBkW90NGR8LEG7OR1mmb2sQCK8BGAsYHg/s0/2020-04-19.png", Canal ISB
https://unlimited1-cl-isp.dps.live/isb/isb.smil/playlist.m3u8
#EXTINF:-1 tvg-id="157" tvg-name="Canal 33" tvg-logo="https://lh3.googleusercontent.com/-SM266zq0954/XbJE8J3rspI/AAAAAAAArrY/ul2hiTKcHyUNayzFG1NbGTN11yRpb4oEACK8BGAsYHg/s0/2019-10-24.png", Canal 33
https://5eae379fb77bb.streamlock.net:443/eduardo555/eduardo555/playlist.m3u8
#EXTINF:-1 tvg-id="899" tvg-name="Volvamos a Dios TV" tvg-logo="https://lh3.googleusercontent.com/hangouts/AEnVqigr-RNzT8M14VgHs-JpNLj-mABLz-lbmRJ7j2tbg3JsB7YBfD6HJbPlgSUBilF5_xCb2X1V3RUzJPJzMZ9m5nUQ_bqReL6EitaBY_UcichPDax4YRR8xb8IWRyy_yEuLlLnN45pnU6d9rIOpAUlx72-E12covMcj0HiYKBHPMFVCbbLP8V90mir3nu4Tzdzbv2ANoRT9yQBjNj21QCkhZgdgNxMKmGWZh_dm89Ap0NfMzTCL25Cq6tzwiT3xsKlAezSMEeL4cTkNAwO1uD4qo2j-JhLQOQCb4ZgpmnbLhlNkUZTIGv5m_LxaHfxgdbsvxwYBeLsGVIZ_d0jNdVcpQ4uikdo5iM8HlV0jCQpo0OLPgxeej9wWwH4wIE2TihAPHluSr_4iTaWZlqfxN7CINBPkk58ea3T7TxujFzUCV3N-tDaJOJu2tZa7Y0ylV15cMdp63FNhhWt6lBPRmk2m_HkjxnIHsvPr9vBGyMOgprYe2mVOrwPga0rKe3UyNe2jilHJ_HTi-RkjY9dIAYRSAMuGIn4Da-o1pw6pfauwe1SnqcXUzRiAAhLJQV2w7oCnpo4Ua4O15SNFFP2I9zleFqVPFe0pjnGw5LfMbrBzgUDreP8IeY5CfG2ysqbLnCSXuNDJmc66xydP3GzwwvLQTwhRldJOo916hh8nqZ0ibp1RnkanBk7Bzcwye5Dx721pujPTwjE9SydFvebdpCorHdp1MNIGoIyQKrtC-FPd6n0TsCTVjsquMzHZKn8fMsFrkc7vux00YswJfiqprLIabAmfFjjuzETPQxHAZghjyB5fAsZzdYywBolM5ktpLnwOGYuC9LCjVR5VWu8XthZc02rV4nThurcRg5SqsefKyJKO_CI69hLOABcihPQdl5z-6advHSPezPXQ-Cl3FdXzyC04Z3FhRaZ1oNAE68_dSa-gkLp0ozAFSQuwPKfjoKILwGMEQ=w280-h203?authuser=0", Volvamos a Dios TV
https://stmv.panel.mivideo.pro/remanenteescogido/remanenteescogido/playlist.m3u8
`

let parseM3u = m3utojson(m3u);