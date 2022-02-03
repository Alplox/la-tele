/* 
Guía rápida:
{
        'nombre': 'nombre'        (Nombre del canal a mostrar en botón y barra que dirige a su origen cuando esta activo)
        
tipos de enlaces posibles [Recordar utilizar solo enlaces https si se aloja en GitHub]:

        'iframe': 'url'           (contenido que va dentro de un iframe (un embed directo))
        'm3u8': 'url'             (para enlaces ".m3u8", no listas ".m3u". Solo canales individuales)
        'yt_id': 'url'            (ID referente a un canal de Youtube [https://www.youtube.com/channel/"yt_id"]. NO REQUIERE 'fuente' DEBIDO A REDUNDANCIA)
        'yt_embed': 'url'         (se usa para 1 video directamente [https://www.youtube.com/watch?v="yt_embed"])


        'fuente': 'url'         ("fuente" es el enlace de origen de la señal, a modo de transparencia y libertad de abandonar la página si solo se quiere continuar con dicha señal, si se extrae una señal ya sea tipo "iframe" o "m3u8" de www.pagina-ejemplo.cl debe de ponerse www.pagina-ejemplo.cl en "fuente". Si no se obtiene señal desde el emisor oficial como tal, se utiliza el sitio del emisor anntes que el de terceros (ejemplo: saque canal de una lista IPTV, por lo que pongo el sitio del canal, no la lista IPTV. Ya que eso va en el listado de canales en archivo README))
}

by Alplox 
https://github.com/Alplox
*/


const canales = [ 
        {
            'nombre': '24 horas',
            'yt_id': 'UCTXNz3gjAypWp3EhlIATEJQ',
        },    
        {
            'nombre': '24 Horas 2',
            'm3u8': 'https://mdstrm.com/live-stream-playlist/57d1a22064f5d85712b20dab.m3u8',
            'fuente': 'https://www.24horas.cl/envivo/'
        },
        {
            'nombre': '24 Horas 3',
            'm3u8': 'https://mdstrm.com/live-stream-playlist-v/5346f657c1e6f5810b5b9df3.m3u8',
            'fuente': 'https://www.24horas.cl/envivo/'
        },
        {
            'nombre': '24 horas 4',
            'iframe': 'https://player.twitch.tv/?channel=24horas_tvn&parent=alplox.github.io',
            'fuente': 'https://www.twitch.tv/24horas_tvn'
        },
        {
            'nombre': '24 horas 5',
            'iframe': 'https://mdstrm.com/live-stream/57d1a22064f5d85712b20dab?jsapi=true&autoplay=true',
            'fuente': 'https://www.24horas.cl/envivo/'
        },
        {
            'nombre': '24 horas 6',
            'iframe': 'https://mdstrm.com/live-stream/57d1a22064f5d85712b20dab?jsapi=true&autoplay=true&controls=true&mute=true&player=57f4e28f9c53768535d65782&access_token=&custom.preroll=&custom.overlay=',
            'fuente': 'https://www.24horas.cl/envivo/'
        },
        {
            'nombre': '24 Horas s2',
            'm3u8': 'https://mdstrm.com/live-stream-playlist-v/53443c472c6e89675103cc4c.m3u8',
            'fuente': 'https://www.24horas.cl/envivo/'
        },
        {
            'nombre': '24 Horas s2 2',
            'm3u8': 'https://mdstrm.com/live-stream-playlist-v/5346f5f2c1e6f5810b5b9df0.m3u8',
            'fuente': 'https://www.24horas.cl/envivo/'
        },
        {
            'nombre': '24 Horas s3',
            'm3u8': 'https://mdstrm.com/live-stream-playlist-v/555c9a91eb4886825b07ee7b.m3u8',
            'fuente': 'https://www.24horas.cl/envivo/'
        },
        {
            'nombre': 'TVN',
            'yt_id': 'UCaVaCaiG6qRzDiJDuEGKOhQ',
        },
        {
            'nombre': 'TVN 2',
            'iframe': 'https://ok.ru/videoembed/3076940701290?nochat=1&autoplay=1',
            'fuente': 'https://www.tvn.cl/'
        },
        {
            'nombre': 'Meganoticias',
            'yt_id': 'UCkccyEbqhhM3uKOI6Shm-4Q',
        },
        {
            'nombre': 'Meganoticias 2',
            'iframe': 'https://player.twitch.tv/?channel=meganoticiascl&parent=alplox.github.io',
            'fuente': 'https://www.twitch.tv/meganoticiascl'
        },
        {
            'nombre': 'Mega',
            'm3u8': 'https://unlimited2-cl-isp.dps.live/mega/mega.smil/playlist.m3u8',
            'fuente': 'https://www.mega.cl/'
        },
        {
            'nombre': 'T13',
            'yt_id': 'UCsRnhjcUCR78Q3Ud6OXCTNg',
        },
        {
            'nombre': 'T13 2',
            'iframe': 'https://player.twitch.tv/?channel=t13envivo&parent=alplox.github.io',
            'fuente': 'https://www.twitch.tv/t13envivo'
        },
        {
            'nombre': 'Canal 13',
            'yt_id': 'UCd4D3LfXC_9MY2zSv_3gMgw',
        },
        {
            'nombre': 'Canal 13 2',
            'iframe': 'https://13313131.tnvas.repl.co/',
            'fuente': 'https://www.13.cl/en-vivo'
        },
        {
            'nombre': 'Canal 13 3',
            'iframe': 'https://ok.ru/videoembed/3076941553258?nochat=1&autoplay=1',
            'fuente': 'https://www.13.cl/en-vivo'
        },
        {
            'nombre': 'CNN Chile',
            'yt_id': 'UCpOAcjJNAp0Y0fhznRrXIJQ',
        },
        {
            'nombre': 'CHV Noticias',
            'yt_id': 'UCRsUoZYC1ULUspipMRnMhwg',
        },
        {
            'nombre': 'CHV',
            'yt_id': 'UC8EdTmyUaFIfZvVttJ9lgIA',
        },
        {
            'nombre': 'CHV 2',
            'iframe': 'https://chvvvvvvvv.temporalservel.repl.co/',
            'fuente': 'https://www.chilevision.cl/senal-online'
        },
        {
            'nombre': 'La Red',
            'm3u8': 'https://unlimited1-cl-isp.dps.live/lared/lared.smil/playlist.m3u8',
            'fuente': 'https://www.lared.cl/senal-online'
        },
        {
            'nombre': 'La Red 2',
            'm3u8': 'https://unlimited1-cl-movistar.dps.live/lared/lared.smil/lared/livestream0/chunks.m3u8',
            'fuente': 'https://www.lared.cl/senal-online'
        },
        {
            'nombre': 'La Red 3',
            'm3u8': 'https://d2tr4gdfol9ja.cloudfront.net/lared/smil:lared.smil/playlist.m3u8',
            'fuente': 'https://www.lared.cl/senal-online'
        },
        {
            'nombre': 'La Red 4',
            'm3u8': 'https://unlimited2-cl-isp.dps.live/lared/lared.smil/playlist.m3u8',
            'fuente': 'https://www.lared.cl/senal-online'
        },
        {
            'nombre': '📻 Cooperativa',
            'iframe': 'https://rudo.video/live/coopetv',
            'fuente': 'http://programas.cooperativa.cl/showalairelibre/'
        },
        {
            'nombre': '📻 Biobio TV',
            'iframe': 'https://rudo.video/live/bbtv',
            'fuente': 'https://www.biobiochile.cl/biobiotv/'
        },
        {
            'nombre': '📻 Biobio TV 2',
            'm3u8': 'https://unlimited1-cl-isp.dps.live/bbtv/bbtv.smil/playlist.m3u8',
            'fuente': 'https://www.biobiochile.cl/biobiotv/'
        },
        {
            'nombre': '📻 ADN',
            'iframe': 'https://rudo.video/live/adntv',
            'fuente': 'http://tv.adnradio.cl/'
        },
        {
            'nombre': '📻 ADN 2',
            'yt_id': 'UCczkrFICr0xEgDsk51zZojA',
        },
        {
            'nombre': '📻 ADN 3',
            'm3u8': 'https://unlimited1-us.dps.live/adntv/adntv.smil/playlist.m3u8',
            'fuente': 'http://tv.adnradio.cl/'
        },
        {
            'nombre': '📻 ADN 4',
            'm3u8': 'https://unlimited6-cl.dps.live/adntv/adntv.smil/playlist.m3u8',
            'fuente': 'http://tv.adnradio.cl/'
        },
        {
            'nombre': '📻 ADN 5',
            'm3u8': 'https://unlimited2-cl-isp.dps.live/adntv/adntv.smil/playlist.m3u8',
            'fuente': 'http://tv.adnradio.cl/'
        },
        {
            'nombre': '📻 Duna',
            'iframe': 'https://rudo.video/live/dunatv',
            'fuente': 'https://www.duna.cl/tv/'
        },
        {
            'nombre': '📻 Infinita',
            'iframe': 'https://rudo.video/live/infinitatv',
            'fuente': 'http://www.infinita.cl/home/'
        },
        {
            'nombre': '📻 Universo',
            'iframe': 'https://rudo.video/live/universotv',
            'fuente': 'https://www.universo.cl/'
        },
        {
            'nombre': '📻 AE (DUOC)',
            'iframe': 'https://live.grupoz.cl/3991add90400a25a1580f290246f90eb?sound=0',
            'fuente': 'https://www.aeradio.cl/'
        },
        {
            'nombre': '📻 Carolina TV',
            'iframe': 'https://rudo.video/live/carolinatv',
            'fuente': 'https://www.carolina.cl/tv/'
        },
        {
            'nombre': '📻 Carolina TV 2',
            'm3u8': 'https://unlimited6-cl.dps.live/carolinatv/carolinatv.smil/carolinatv/livestream2/chunks.m3u8',
            'fuente': 'https://www.carolina.cl/tv/'
        },
        {
            'nombre': '📻 Carolina TV 3',
            'm3u8': 'https://unlimited1-us.dps.live/carolinatv/carolinatv.smil/playlist.m3u8',
            'fuente': 'https://www.carolina.cl/tv/'
        },
        {
            'nombre': '📻 FM Tiempo',
            'iframe': 'https://rudo.video/live/fmtiempotv',
            'fuente': 'https://www.fmtiempo.cl/'
        },
        {
            'nombre': '📻 FM Tiempo 2',
            'm3u8': 'https://unlimited10-cl.dps.live/fmtiempotv/fmtiempotv.smil/playlist.m3u8',
            'fuente': 'https://www.fmtiempo.cl/'
        },
        {
            'nombre': '📻 Alegría TV',
            'm3u8': 'https://593b04c4c5670.streamlock.net:443/8192/8192/playlist.m3u8',
            'fuente': 'https://www.alegriafm.cl/'
        },
        {
            'nombre': '📻 Romántica TV',
            'iframe': 'https://rudo.video/live/romanticatv',
            'fuente': 'https://www.romantica.cl/romantica-tv/'
        },
        {
            'nombre': '📻 Romántica TV 2',
            'm3u8': 'https://unlimited2-cl-isp.dps.live/romanticatv/romanticatv.smil/playlist.m3u8',
            'fuente': 'https://www.romantica.cl/romantica-tv/'
        },
        {
            'nombre': '📻 Radio Genial 100.5 FM',
            'm3u8': 'https://v2.tustreaming.cl/genialtv/index.m3u8',
            'fuente': 'https://radiogenial.cl/'
        },
        {
            'nombre': '📻 Mi Radio es Más',
            'yt_id': 'UCflUbt1g29kPG-H9SV5QIyw',
        },
        {
            'nombre': '📻 Radio La Clave',
            'iframe': 'https://rudo.video/live/laclavetv',
            'fuente': 'https://radiolaclave.cl/'
        },
        {
            'nombre': '📻 Radio Folclor de Chile',
            'yt_id': 'UC0Hl8kJe8Xwv8g63Q4qefQg',
        },
        {
            'nombre': '📻 Radio María Chile',
            'yt_id': 'UClMwb2kCYemWyDIZ2dYttKA',
        },
        {
            'nombre': '📻 El Sembrador',
            'm3u8': 'https://5eff35271151c.streamlock.net:1936/8064/8064/playlist.m3u8',
            'fuente': 'https://www.radioelsembrador.cl/tv/'
        },
        {
            'nombre': '📻 Radio Ñuble',
            'm3u8': 'https://live.tvcontrolcp.com:1936/Rnuble/Rnuble/playlist.m3u8',
            'fuente': 'http://radionuble.cl/linea/'
        },
        {
            'nombre': 'Prensa Presidencia',
            'iframe': 'https://mdstrm.com/live-stream/5dc17f8944795108a2a52a49?autoplay=true',
            'fuente': 'https://prensa.presidencia.cl/streaming.aspx'
        },
        {
            'nombre': 'Stgo TV',
            'iframe': 'https://stv.janus.cl/front/embed.html',
            'fuente': 'https://www.santiagotelevision.cl/'
        },
        {
            'nombre': 'DerechoFacil',
            'iframe': 'https://player.twitch.tv/?channel=derechofacil&parent=alplox.github.io',
            'fuente': 'https://www.twitch.tv/derechofacil'
        },
        {
            'nombre': 'La Voz De Los Que Sobran',
            'yt_id': 'UCEnSee5vPeNAm2EFpb_UaRw',
        },
        {
            'nombre': 'Nicolas Copano',
            'yt_id': 'UCVTL17ftpqx3lQ_IaGUNgSg',
        },
        {
            'nombre': 'Nicolas Copano 2',
            'iframe': 'https://player.twitch.tv/?channel=copano&parent=alplox.github.io',
            'fuente': 'https://www.twitch.tv/copano'
        },
        {
            'nombre': 'Puranoticia TV',
            'm3u8': 'https://pnt.janusmedia.tv/hls/pnt.m3u8',
            'fuente': 'https://puranoticia.pnt.cl/'
        },
        {
            'nombre': 'Holvoet TV',
            'iframe': 'https://rudo.video/live/holvoettv',
            'fuente': 'https://holvoet.cl/en-vivo/'
        },
        {
            'nombre': 'Holvoet TV 2',
            'm3u8': 'https://unlimited1-cl-isp.dps.live/holvoettv/holvoettv.smil/playlist.m3u8',
            'fuente': 'https://holvoet.cl/en-vivo/'
        },
        {
            'nombre': 'Antofagasta TV',
            'm3u8': 'https://unlimited6-cl.dps.live/atv/atv.smil/atv/livestream2/playlist.m3u8',
            'fuente': 'https://www.antofagasta.tv/'
        },
        {
            'nombre': 'Antofagasta TV 2',
            'm3u8': 'https://unlimited1-cl-isp.dps.live/atv/atv.smil/playlist.m3u8',
            'fuente': 'https://www.antofagasta.tv/'
        },
        {
            'nombre': 'Canal 9',
            'iframe': 'https://rudo.video/live/c9',
            'fuente': 'https://www.canal9.cl/en-vivo/'
        },
        {
            'nombre': 'Canal 9 2',
            'm3u8': 'https://unlimited6-cl.dps.live/c9/c9.smil/c9/livestream1/chunks.m3u8',
            'fuente': 'https://www.canal9.cl/en-vivo/'
        },
        {
            'nombre': 'TVU',
            'iframe': 'https://rudo.video/live/tvu',
            'fuente': 'https://www.tvu.cl/'
        },
        {
            'nombre': 'TVU 2',
            'm3u8': 'https://unlimited6-cl.dps.live/tvu/tvu.smil/playlist.m3u8',
            'fuente': 'https://www.tvu.cl/'
        },
        {
            'nombre': 'Canal 21',
            'iframe': 'https://live.grupoz.cl/8b383d0a9cef5560a1bfbbeaf6ad4a38?sound=0',
            'fuente': 'https://www.canal21tv.cl/wp/en-vivo/'
        },
        {
            'nombre': 'Canal 21 2',
            'm3u8': 'https://tls.cdnz.cl/canal21tv/live/playlist.m3u8',
            'fuente': 'https://www.canal21tv.cl/wp/en-vivo/'
        },
        {
            'nombre': 'Ñublevision',
            'm3u8': 'https://cdn.oneplaychile.cl:1936/regionales/nublevision.stream/playlist.m3u8',
            'fuente': 'https://nublevision.cl/'
        },
        {
            'nombre': 'Estacióntv',
            'm3u8': 'https://unlimited6-cl.dps.live/estaciontv/estaciontv.smil/playlist.m3u8',
            'fuente': 'https://www.estaciontv.cl/site/'
        },
        {
            'nombre': 'Estacióntv 2',
            'm3u8': 'https://pantera1-100gb-cl-movistar.dps.live/estaciontv/estaciontv.smil/playlist.m3u8',
            'fuente': 'https://www.estaciontv.cl/site/'
        },
        {
            'nombre': 'Pingüino TV',
            'iframe': 'https://elpinguino.com/reproductor/',
            'fuente': 'https://elpinguino.com/reproductor/'
        },
        {
            'nombre': 'Pingüino TV 2',
            'm3u8': 'https://streaming.elpinguino.com:5391/live/EP.smil/playlist.m3u8',
            'fuente': 'https://elpinguino.com/reproductor/'
        },
        {
            'nombre': 'ITV Patagonia',
            'm3u8': 'https://rudo.video/live/itv',
            'fuente': 'https://www.itvpatagonia.com/'
        },
        {
            'nombre': 'ITV Patagonia 2',
            'm3u8': 'https://unlimited1-cl-isp.dps.live/itv/itv.smil/playlist.m3u8',
            'fuente': 'https://www.itvpatagonia.com/'
        },
        {
            'nombre': 'UCV TV',
            'iframe': 'https://rudo.video/live/ucvtv2',
            'fuente': 'https://pucvmultimedios.cl/senal-online-tv.php'
        },
        {
            'nombre': 'UATV',
            'iframe': 'https://rudo.video/live/uatv',
            'fuente': 'https://uatv.cl/uatv-en-vivo/'
        },
        {
            'nombre': 'VTV',
            'iframe': 'https://rudo.video/live/vtv',
            'fuente': 'http://canalvtv.cl/vtv/'
        },
        {
            'nombre': 'Canal 33',
            'iframe': 'https://streaminghd.cl/player.video/index.php?s=eduardo555/eduardo555',
            'fuente': 'http://www.canal33.cl/online.php'
        },
        {
            'nombre': 'Contivision',
            'm3u8': 'https://unlimited2-cl.dps.live/contivision/contivision.smil/playlist.m3u8',
            'fuente': 'http://w.contivision.cl/cvn/envivo.php'
        },
        {
            'nombre': 'Teletón TV',
            'iframe': 'https://mdstrm.com/live-stream/5d6d5f05a2f6f407b0147965?autoplay=true',
            'fuente': 'https://teletontv.cl/'
        },
        {
            'nombre': 'Teletón TV 2',
            'm3u8': 'https://mdstrm.com/live-stream-playlist/5d6d5f05a2f6f407b0147965.m3u8',
            'fuente': 'https://teletontv.cl/'
        },
        {
            'nombre': 'TV Salud',
            'm3u8': 'https://srv3.zcast.com.br/mastermedia/mastermedia/tvsalud.cl.m3u8',
            'fuente': 'https://tvsalud.cl/'
        },
    // MUSICA 24/7
        {
            'nombre': '🎵 IMUC Chile',
            'yt_id': 'UCIIDtZoaK9UZi4FaGMmL_hw',
        },
    // CAMARAS MUNDO
    // Chile
        {
            'nombre': '📷 Galería CIMA',
            'yt_id': 'UC4GOcOKkEefz5NamN4WyMFg',
        },
        {
            'nombre': '📷 Halcón Parquemet, Cumbre',
            'iframe': 'https://g1.ipcamlive.com/player/player.php?alias=5a7084c9e0136&autoplay=true',
            'fuente': 'https://halcon.parquemet.cl/index.html'
        },
        {
            'nombre': '📷 Halcón Parquemet, Terraza',
            'iframe': 'https://g1.ipcamlive.com/player/player.php?alias=5a7085fe914c0&autoplay=true',
            'fuente': 'https://halcon.parquemet.cl/index.html'
        },
        {
            'nombre': '📷 Providencia, Ledrium',
            'yt_embed': 'mGxX5PfREPA',
            'fuente': 'https://www.youtube.com/channel/UCTDewuGhfwGv6JRNnqa-yXw'
    // EDUCATIVOS
        },
        {
            'nombre': '📚 TV Educa Chile',
            'm3u8': 'https://mdstrm.com/live-stream-playlist-v/5e74e53f1ab4eb073b19ef34.m3u8',
            'fuente': 'https://www.tvn.cl/envivo/tveducachile/'
        },
        {
            'nombre': '📚 PuntajeNacional Chile',
            'yt_id': 'UCCY6xIXHmGBGZUgUYxtfKSg',
        },
    // 🏛️ 🏛️ 🏛️ 
        {
            'nombre': '🏛️ TV Senado',
            'iframe': 'https://janus-tv.senado.cl/embed.php',
            'fuente': 'https://tv.senado.cl/'
        },
        {
            'nombre': '🏛️ TV Senado 2',
            'm3u8': 'https://janus-tv-ply.senado.cl/playlist/playlist.m3u8',
            'fuente': 'https://tv.senado.cl/'
        },
        {
            'nombre': '🏛️ TV Senado 3',
            'yt_id': 'UC4GJ43VNn4AYfiYa0RBCHQg',
        },
        {
            'nombre': '🏛️ Convención Constitucional',
            'iframe': 'https://mdstrm.com/live-stream/60d476c14157440829d03cd7?autoplay=true',
            'fuente': 'https://www.convencion.tv/'
        },
        {
            'nombre': '🏛️ Convención Constitucional 2',
            'm3u8': 'https://mdstrm.com/live-stream-playlist/60d1f10fdacfa008348d71d2.m3u8',
            'fuente': 'https://www.convencion.tv/'
        },
        {
            'nombre': '🏛️ Tribunal Constitucional',
            'yt_id': 'UCZaI-1N1oaGb-U8K2VNztjg',
        },
        {
            'nombre': '🏛️ Poder Judicial',
            'yt_id': 'UCo0C1-ocUG9a0Yb3iO0V-xg',
        },   
        {
            'nombre': '🏛️ Cámara Diputados',
            'm3u8': 'https://camara.03.cl.cdnz.cl/camara19/live/playlist.m3u8',
            'fuente': 'http://www.cdtv.cl/'
        },
        {
            'nombre': '🏛️ Cámara Diputados 2',
            'm3u8': 'https://camara.02.cl.cdnz.cl/cdndvr/live/playlist.m3u8?DVR',
            'fuente': 'http://webtv.camara.cl/'
        },
        {
            'nombre': '🏛️ Cámara Diputados 3',
            'm3u8': 'https://tls-cl.cdnz.cl/camara/live/playlist.m3u8',
            'fuente': 'http://webtv.camara.cl/'
        }, 
    // CANALES ALTERNATIVOS CAM DIPUTADOS
        {
            'nombre': 'Cámara Diputados YT',
            'yt_id': 'UCYd5k2TyOyOmUJNx0SH17KA',
        },
        {
            'nombre': 'Cámara Diputados YT 01',
            'yt_id': 'UCcULnWuDzgQG9yF0Dv3DIgg',
        },
        {
            'nombre': 'Cámara Diputados YT 03',
            'yt_id': 'UCF6KgLfQqQzekn8U1DwVs9g',
        },
        {
            'nombre': 'Cámara Diputados YT 05',
            'yt_id': 'UC0QKtI8NpeMObauDylsSUDA',
        },
        {
            'nombre': 'Cámara Diputados YT 06',
            'yt_id': 'UCspWzpGflwb6A8PZqWw49CQ',
        },
        {
            'nombre': 'Cámara Diputados YT 07',
            'yt_id': 'UCyVjDDBZGDywVGrpGBvGEsw',
        },
        {
            'nombre': 'Cámara Diputados YT 08',
            'yt_id': 'UCCtDbZzh63vgU_BWHRGsbug',
        },
        {
            'nombre': 'Cámara Diputados YT 11',
            'yt_id': 'UCYPKjGKq2yLbAnmth5rFZmQ',
        },
        {
            'nombre': 'Cámara Diputados YT 12',
            'yt_id': 'UCVOWFY-sgbDglBsfOap9okg',
        },
        {
            'nombre': 'Cámara Diputados YT 13',
            'yt_id': 'UC33MG3YdoQ16a8a3wODh6lw',
        }
        
]

// Canales M3U8 (no tienen fuente) https://www.m3u.cl/iptv-chile.php
const canales_m3u8 = [{
        'nombre': 'TV Senado',
        'm3u8': 'https://janus-tv-ply.senado.cl/playlist/playlist.m3u8',
    },
    {
        'nombre': 'Wapp',
        'm3u8': 'https://mdstrm.com/live-stream-playlist/6046495ddf98b007fa2fe807.m3u8'
    },
    {
        'nombre': 'Spectrum Channel LGBTQ+',
        'm3u8': 'https://app.viloud.tv/hls/channel/f2eb3ddf5eb0bf6e040db535a7150e1e.m3u8'
    },
    {
        'nombre': 'Rewind TV',
        'm3u8': 'https://tls.cdnz.cl:443/rewindtv/rewindtv/playlist.m3u8'
    },
    {
        'nombre': 'Ener Geek',
        'm3u8': 'https://tvstreaming.cl:1936/8062/8062/playlist.m3u8'
    },
    {
        'nombre': 'Kanade TV',
        'm3u8': 'https://stream.jetixtv.club/hls/kanade.m3u8'
    },
    {
        'nombre': 'Raices Arabes TV',
        'm3u8': 'https://stmv2.zcastbr.com/julio4589/julio4589/playlist.m3u8'
    },
    {
        'nombre': 'TV Educa Chile',
        'm3u8': 'https://mdstrm.com/live-stream-playlist/5aaabe9e2c56420918184c6d.m3u8'
    },
    {
        'nombre': 'Cultura Online',
        'm3u8': 'https://5eae379fb77bb.streamlock.net:443/8034/8034/playlist.m3u8'
    },
    {
        'nombre': 'Pacifico Television',
        'm3u8': 'https://5eae379fb77bb.streamlock.net:443/PacificoTelevision/PacificoTelevision/playlist.m3u8'
    },
    {
        'nombre': 'San Pedro Conecta',
        'm3u8': 'https://stmv2.zcastbr.com/marcosvillegas/marcosvillegas/playlist.m3u8'
    },
    {
        'nombre': 'Región Televisión Ñuble',
        'm3u8': 'https://live.tvcontrolcp.com:1936/guzman/guzman/playlist.m3u8'
    },
    {
        'nombre': 'Ñublevision',
        'm3u8': 'https://cdn.oneplaychile.cl:1936/regionales/nublevision.stream/playlist.m3u8'
    },
    {
        'nombre': 'CSTV',
        'm3u8': 'https://videostreaming.cloudserverlatam.com:443/cloudservertv/cloudservertv/playlist.m3u8'
    },
    {
        'nombre': 'El Chavo TV',
        'm3u8': 'https://videostreaming.cloudserverlatam.com:443/chavotv/chavotv/playlist.m3u8'
    },
    {
        'nombre': 'Retro Plus TV',
        'm3u8': 'https://59f1cbe63db89.streamlock.net:1443/retroplustv/_definst_/retroplustv/playlist.m3u8'
    },
    {
        'nombre': 'Retro Plus TV Señal 2',
        'm3u8': 'https://59f1cbe63db89.streamlock.net:1443/retroplussenal2/_definst_/retroplussenal2/playlist.m3u8'
    },
    {
        'nombre': 'Retro Plus TV Señal 3',
        'm3u8': 'https://vdo.billingchs.com:3408/hybrid/play.m3u8'
    },
    {
        'nombre': 'XTV Music',
        'm3u8': 'https://tls.cdnz.cl:443/xtvmusic-media/xtvmusic-media/playlist.m3u8'
    },
    {
        'nombre': 'Ruidos TV',
        'm3u8': 'https://593b04c4c5670.streamlock.net:443/8038/8038/playlist.m3u8'
    },
    {
        'nombre': 'Mundo de la Musica TV',
        'm3u8': 'https://593b04c4c5670.streamlock.net:443/8018/8018/playlist.m3u8'
    },
    {
        'nombre': 'Solo Stand Up',
        'm3u8': 'https://paneltv.online:1936/8116/8116/playlist.m3u8'
    },
    {
        'nombre': 'Chic Magazine',
        'm3u8': 'https://paneltv.online:1936/8056/8056/playlist.m3u8'
    },
    {
        'nombre': 'Convencion Constitucional',
        'm3u8': 'https://mdstrm.com/live-stream-playlist/60d1f10fdacfa008348d71d2.m3u8'
    },
    {
        'nombre': 'Convencion Constitucional-Señal 2',
        'm3u8': 'https://mdstrm.com/live-stream-playlist/60d476c14157440829d03cd7.m3u8'
    },
    {
        'nombre': 'Convencion Constitucional-Señal 3',
        'm3u8': 'https://mdstrm.com/live-stream-playlist/60d475f88fc34c7abc188c68.m3u8'
    },
    {
        'nombre': 'Convencion Constitucional-Señal 4',
        'm3u8': 'https://mdstrm.com/live-stream-playlist/60d47530e89f67082ee80ed0.m3u8'
    },
    {
        'nombre': 'Convencion Constitucional-Señal 5',
        'm3u8': 'https://mdstrm.com/live-stream-playlist/60d474eeb5d7c30828d2a560.m3u8'
    },
    {
        'nombre': 'Convencion Constitucional-Señal 6',
        'm3u8': 'https://mdstrm.com/live-stream-playlist/60d474bea654210826d3ffe3.m3u8'
    },
    {
        'nombre': 'Convencion Constitucional-Señal 7',
        'm3u8': 'https://mdstrm.com/live-stream-playlist/60d47401e89f67082ee80ecd.m3u8'
    },
    {
        'nombre': 'Mi Sur Deportes',
        'm3u8': 'https://vdo.mediacp.eu:3411/live/exiswckzlive.m3u8'
    },
    {
        'nombre': 'Retro Play TV',
        'm3u8': 'https://v4.tustreaming.cl/retroplaytv/index.m3u8'
    },
    {
        'nombre': 'ZPTV',
        'm3u8': 'https://srv3.zcast.com.br/juancarlos9451/juancarlos9451/playlist.m3u8'
    },
    {
        'nombre': 'Eva Stream',
        'm3u8': 'https://stmv.panel.mivideo.pro/evastream/evastream/playlist.m3u8'
    },
    {
        'nombre': 'TV Mas Chile',
        'm3u8': 'https://593b04c4c5670.streamlock.net:443/8008/8008/playlist.m3u8'
    },
    {
        'nombre': 'Etc TV',
        'm3u8': 'https://unlimited1-cl-movistar.dps.live/etctv/etctv.smil/playlist.m3u8'
    },
    {
        'nombre': 'El 3 de Conce',
        'm3u8': 'https://5eae379fb77bb.streamlock.net:443/8016/8016/playlist.m3u8'
    },
    {
        'nombre': 'Exprezion TV',
        'm3u8': 'https://srv3.zcast.com.br/expreszion/expreszion/playlist.m3u8'
    },
    {
        'nombre': 'G Vision',
        'm3u8': 'https://tls.cdnz.cl/escgabrielamistral/live/playlist.m3u8'
    },
    {
        'nombre': 'Peña Visión TV',
        'm3u8': 'https://tvstreaming.cl:1936/80102/80102/playlist.m3u8'
    },
    {
        'nombre': 'La Red',
        'm3u8': 'https://unlimited2-cl-movistar.dps.live/lared/lared.smil/playlist.m3u8'
    },
    {
        'nombre': 'TV+',
        'm3u8': 'https://mdstrm.com/live-stream-playlist/5c0e8b19e4c87f3f2d3e6a59.m3u8'
    },
    {
        'nombre': 'TV+ Diferido',
        'm3u8': 'https://mdstrm.com/live-stream-playlist/5cb5f2bd50ae45798813ba17.m3u8'
    },
    {
        'nombre': 'TVN',
        'm3u8': 'https://unlimited1-cl-movistar.dps.live/tvn/tvn.smil/playlist.m3u8'
    },
    {
        'nombre': 'TVN-Reuters',
        'm3u8': 'https://mdstrm.com/live-stream-playlist/5346f657c1e6f5810b5b9df3.m3u8'
    },
    {
        'nombre': 'Mega',
        'm3u8': 'https://unlimited2-cl-movistar.dps.live/mega/mega.smil/playlist.m3u8'
    },
    {
        'nombre': 'CHV',
        'm3u8': 'https://unlimited1-cl-movistar.dps.live/cnnprensa/cnnprensa.smil/playlist.m3u8'
    },
    {
        'nombre': 'Canal 13',
        'm3u8': 'https://cl-canal13-13now-live.ned.media/live.m3u8'
    },
    {
        'nombre': 'UCV',
        'm3u8': 'https://unlimited2-cl-movistar.dps.live/ucvtv2/ucvtv2.smil/playlist.m3u8'
    },
    {
        'nombre': 'STGO.TV',
        'm3u8': 'https://stv.janus.cl/playlist/stream.m3u8'
    },
    {
        'nombre': 'Campus TV',
        'm3u8': 'https://unlimited1-cl-movistar.dps.live/campustv/campustv.smil/playlist.m3u8'
    },
    {
        'nombre': 'TVU',
        'm3u8': 'https://unlimited1-cl-movistar.dps.live/tvu/tvu.smil/playlist.m3u8'
    },
    {
        'nombre': 'Universidad Autonoma TV',
        'm3u8': 'https://unlimited1-cl-movistar.dps.live/uatv/uatv.smil/playlist.m3u8'
    },
    {
        'nombre': 'TV UCT',
        'm3u8': 'https://unlimited2-cl-movistar.dps.live/uct/uct.smil/playlist.m3u8'
    },
    {
        'nombre': 'Ufrovision',
        'm3u8': 'https://mdstrm.com/live-stream-playlist/580a80b827de0ae2086ea6d8.m3u8'
    },
    {
        'nombre': 'UMAG TV',
        'm3u8': 'https://tls.cdnz.cl/tser5/ngrp:live_all/playlist.m3u8'
    },
    {
        'nombre': 'UMAG TV 2',
        'm3u8': 'https://tls.cdnz.cl/umagtv2-media/umagtv2-media/playlist.m3u8'
    },
    {
        'nombre': 'UesTV',
        'm3u8': 'https://tls.cdnz.cl/uestv/live/playlist.m3u8'
    },
    {
        'nombre': 'Camarade Diputados',
        'm3u8': 'https://camara.03.cl.cdnz.cl/camara19/live/chunklist.m3u8'
    },
    {
        'nombre': 'TV Senado',
        'm3u8': 'https://janus-tv-ply.senado.cl/playlist/playlist.m3u8'
    },
    {
        'nombre': 'Arab TV',
        'm3u8': 'https://livefocamundo.com:8081/arabtv/index.m3u8'
    },
    {
        'nombre': 'CEAC TV',
        'm3u8': 'https://videostreaming.cloudserverlatam.com:443/ceactv/ceactv/playlist.m3u8'
    },
    {
        'nombre': 'Teatro del Lago',
        'm3u8': 'https://mdstrm.com/live-stream-playlist/5eee24e3ed5b6d0761a11a31.m3u8'
    },
    {
        'nombre': 'TVN 24 Horas',
        'm3u8': 'https://mdstrm.com/live-stream-playlist/57d1a22064f5d85712b20dab.m3u8'
    },
    {
        'nombre': 'TVN 24 Horas 2',
        'm3u8': 'https://mdstrm.com/live-stream-playlist-v/53443c472c6e89675103cc4c.m3u8'
    },

    {
        'nombre': 'CNN Chile',
        'm3u8': 'https://unlimited1-cl-movistar.dps.live/cnn/cnn.smil/playlist.m3u8'
    },
    {
        'nombre': 'Poder Judicial',
        'm3u8': 'https://unlimited2-cl-movistar.dps.live/poderjudicial1/poderjudicial1.smil/playlist.m3u8'
    },
    {
        'nombre': 'La Tercera TV',
        'm3u8': 'https://unlimited1-cl-movistar.dps.live/lttv/lttv.smil/playlist.m3u8'
    },
    {
        'nombre': 'La Tercera TV 2',
        'm3u8': 'https://unlimited1-cl-movistar.dps.live/lt3/lt3.smil/playlist.m3u8'
    },
    {
        'nombre': 'Teletón TV',
        'm3u8': 'https://mdstrm.com/live-stream-playlist/5d6d5f05a2f6f407b0147965.m3u8'
    },
    {
        'nombre': 'RLOTV',
        'm3u8': 'https://tv.streamingchilenos.com:1936/8020/8020/playlist.m3u8'
    },
    {
        'nombre': 'Sello de Raza TV',
        'm3u8': 'https://v2.tustreaming.cl/mastermedia/index.m3u8'
    },
    {
        'nombre': 'TV Pop',
        'm3u8': 'https://v4.tustreaming.cl/poptv/index.m3u8'
    },
    {
        'nombre': 'LosDesterrados.cl',
        'm3u8': 'https://5e3483cba9114.streamlock.net/losdesterrados.cl/losdesterrados.cl/playlist.m3u8'
    },
    {
        'nombre': 'tevex',
        'm3u8': 'https://v2.tustreaming.cl/tevex/index.m3u8'
    },
    {
        'nombre': 'TV Salud',
        'm3u8': 'https://srv3.zcast.com.br/mastermedia/mastermedia/tvsalud.cl.m3u8'
    },
    {
        'nombre': 'Chile Channel',
        'm3u8': 'https://v2.tustreaming.cl/chilechannel/live1/tracks-v1a1/mono.m3u8'
    },
    {
        'nombre': 'Campo Abierto TV',
        'm3u8': 'https://v2.tustreaming.cl/campoabierto/live1/index.m3u8'
    },
    {
        'nombre': 'Arcatel',
        'm3u8': 'https://unlimited1-cl-movistar.dps.live/arcatel/arcatel.smil/playlist.m3u8'
    },
    {
        'nombre': 'Arica TV',
        'm3u8': 'https://5eff35271151c.streamlock.net:1936/8002/8002/playlist.m3u8'
    },
    {
        'nombre': 'Puerta Norte',
        'm3u8': 'https://593b04c4c5670.streamlock.net/8170/8170/playlist.m3u8'
    },
    {
        'nombre': 'Iquique TV',
        'm3u8': 'https://marine2.miplay.cl/arcatel/iquiquetv720/video.m3u8'
    },
    {
        'nombre': 'Geovision',
        'm3u8': 'https://5fa5de1a545ae.streamlock.net:443/Geovision/Geovision/playlist.m3u8'
    },
    {
        'nombre': 'Antofagasta TV',
        'm3u8': 'https://unlimited1-cl-movistar.dps.live/atv/atv.smil/playlist.m3u8'
    },
    {
        'nombre': 'LRP Television',
        'm3u8': 'https://v2.tustreaming.cl/lrp/index.m3u8'
    },
    {
        'nombre': 'AM Canal',
        'm3u8': 'https://v2.tustreaming.cl/amtv/live1/index.m3u8'
    },
    {
        'nombre': 'Taltal TV',
        'm3u8': 'https://ed5ov.live.opencaster.com/xBwCmtEjAibA/index.m3u8'
    },
    {
        'nombre': 'Holvoet TV',
        'm3u8': 'https://unlimited1-cl-movistar.dps.live/holvoettv/holvoettv.smil/playlist.m3u8'
    },
    {
        'nombre': 'Atacama Noticias TV',
        'm3u8': 'https://stmv1.zcastbr.com/atacamanoticias/atacamanoticias/playlist.m3u8'
    },
    {
        'nombre': 'Atacama TV',
        'm3u8': 'https://v2.tustreaming.cl/atacamatv/index.m3u8'
    },
    {
        'nombre': 'Madero TV',
        'm3u8': 'https://videostreaming.cloudserverlatam.com:443/8040/8040/playlist.m3u8'
    },
    {
        'nombre': 'Huasco TV',
        'm3u8': 'https://paneltv.online:1936/8062/8062/playlist.m3u8'
    },
    {
        'nombre': 'Alternativa TV',
        'm3u8': 'https://srv2.zcast.com.br/carlos2469/carlos2469/playlist.m3u8'
    },
    {
        'nombre': 'EnfoqueDigital TV',
        'm3u8': 'https://Stmv1.zcastbr.com/edtvchile/edtvchile/playlist.m3u8'
    },
    {
        'nombre': 'Canal Costa TV SD',
        'm3u8': 'https://stmv2.zcastbr.com/canalcostatv1/canalcostatv1/playlist.m3u8'
    },
    {
        'nombre': 'Canal Costa TV HD',
        'm3u8': 'https://stmv2.zcastbr.com/canalcostatv2/canalcostatv2/playlist.m3u8'
    },
    {
        'nombre': 'La Popular TV',
        'm3u8': 'https://5d1ca66d2d698.streamlock.net:1936/8076/8076/playlist.m3u8'
    },
    {
        'nombre': 'Estrella TV',
        'm3u8': 'https://streamyes.alsolnet.com/norteramatv/live/playlist.m3u8'
    },
    {
        'nombre': 'Thema TV',
        'm3u8': 'https://unlimited1-cl-movistar.dps.live/thema/thema.smil/playlist.m3u8'
    },
    {
        'nombre': 'América TV Chile',
        'm3u8': 'https://stmv1.zcastbr.com/americatvchile/americatvchile/playlist.m3u8'
    },
    {
        'nombre': 'Nortevision',
        'm3u8': 'https://live.tvcontrolcp.com:1936/nortevision/nortevision/playlist.m3u8'
    },
    {
        'nombre': 'Tele 8 Illapel',
        'm3u8': 'https://5eae379fb77bb.streamlock.net/rauleduardo493/rauleduardo493/playlist.m3u8'
    },
    {
        'nombre': 'TV Elqui',
        'm3u8': 'https://593b04c4c5670.streamlock.net:443/8116/8116/playlist.m3u8'
    },
    {
        'nombre': 'VTV',
        'm3u8': 'https://unlimited2-cl-movistar.dps.live/vtv/vtv.smil/playlist.m3u8'
    },
    {
        'nombre': 'Canal 74 TeVe',
        'm3u8': 'https://Stmv1.zcastbr.com/canal74hd/canal74hd/playlist.m3u8'
    },
    {
        'nombre': 'TV Costa',
        'm3u8': 'https://hd.chileservidores.cl:1936/tvcosta1/tvcosta1/playlist.m3u8'
    },
    {
        'nombre': 'Quinta TV',
        'm3u8': 'https://livefocamundo.com:8081/quintatv/index.m3u8'
    },
    {
        'nombre': 'TV Quinta Region',
        'm3u8': 'https://srv1.zcast.com.br/daniel2525/daniel2525/playlist.m3u8'
    },
    {
        'nombre': 'Canal de la Costa',
        'm3u8': 'https://livefocamundo.com:8081/cdlcyerko/index.m3u8'
    },
    {
        'nombre': 'Girovisual TV',
        'm3u8': 'https://unlimited2-cl-movistar.dps.live/girovisual2/girovisual2.smil/playlist.m3u8'
    },
    {
        'nombre': 'Frecuencia 7 Aconcagua',
        'm3u8': 'https://5eae379fb77bb.streamlock.net:443/8048/8048/playlist.m3u8'
    },
    {
        'nombre': 'Vox Populi Chile',
        'm3u8': 'https://unlimited2-cl-movistar.dps.live/vox/vox.smil/playlist.m3u8'
    },
    {
        'nombre': 'Canal 2 de San Antonio',
        'm3u8': 'https://unlimited1-cl-movistar.dps.live/canal2/canal2.smil/playlist.m3u8'
    },
    {
        'nombre': 'Plaza TV',
        'm3u8': 'https://tvstreaming.cl:1936/8158/8158/playlist.m3u8'
    },
    {
        'nombre': 'TVR',
        'm3u8': 'https://unlimited1-cl-movistar.dps.live/tvr/tvr.smil/playlist.m3u8'
    },
    {
        'nombre': 'Tendencias TV',
        'm3u8': 'https://v2.tustreaming.cl/tendenciastv/live1/index.m3u8'
    },
    {
        'nombre': 'Buin Somos Todos',
        'm3u8': 'https://bst.buin.cl/0.m3u8'
    },
    {
        'nombre': 'Canal 57 Melipilla',
        'm3u8': 'https://593b04c4c5670.streamlock.net:443/8148/8148/playlist.m3u8'
    },
    {
        'nombre': 'TVO San Vicente',
        'm3u8': 'https://unlimited1-cl-movistar.dps.live/tvo/tvo.smil/playlist.m3u8'
    },
    {
        'nombre': 'Sextavision',
        'm3u8': 'https://5eae379fb77bb.streamlock.net:443/8042/8042/playlist.m3u8'
    },
    {
        'nombre': 'Ekiz TV',
        'm3u8': 'https://stmv.panel.mivideo.pro/ekiztv/ekiztv/playlist.m3u8'
    },
    {
        'nombre': 'TVR Canal 11',
        'm3u8': 'https://unlimited1-cl-movistar.dps.live/tvrcurico/tvrcurico.smil/playlist.m3u8'
    },
    {
        'nombre': 'Vivo TV',
        'm3u8': 'https://unlimited1-cl-movistar.dps.live/vivotv/vivotv.smil/playlist.m3u8'
    },
    {
        'nombre': 'Telecanal Talca',
        'm3u8': 'https://unlimited1-cl.dps.live/tctc/tctc.smil/playlist.m3u8'
    },
    {
        'nombre': 'VLTV',
        'm3u8': 'https://5d1ca66d2d698.streamlock.net:1936/8096/8096/playlist.m3u8'
    },
    {
        'nombre': 'TV Maulinos',
        'm3u8': 'https://5eae379fb77bb.streamlock.net:443/8062/8062/playlist.m3u8'
    },
    {
        'nombre': 'TV5 Linares',
        'm3u8': 'https://unlimited1-cl-movistar.dps.live/tv5/tv5.smil/playlist.m3u8'
    },
    {
        'nombre': 'Contivision',
        'm3u8': 'https://unlimited1-cl-movistar.dps.live/contivision/contivision.smil/playlist.m3u8'
    },
    {
        'nombre': 'UTV San Clemente',
        'm3u8': 'https://v2.tustreaming.cl/utvsc/live1/index.m3u8'
    },
    {
        'nombre': 'Nativa TV',
        'm3u8': 'https://mediacpstreamchile.com:1936/nativa3/ngrp:nativa3_all/playlist.m3u8'
    },
    {
        'nombre': 'Tele2 Web',
        'm3u8': 'https://inliveserver.com:1936/11516/11516/playlist.m3u8'
    },
    {
        'nombre': 'TV Maule Sur',
        'm3u8': 'https://cloud2.streaminglivehd.com:1936/8002/8002/playlist.m3u8'
    },
    {
        'nombre': 'Canal 21 Chillán',
        'm3u8': 'https://tls.cdnz.cl/canal21tv/live/playlist.m3u8'
    },
    {
        'nombre': 'Estacion TV',
        'm3u8': 'https://unlimited1-cl-movistar.dps.live/estaciontv/estaciontv.smil/playlist.m3u8'
    },
    {
        'nombre': 'Energia TV',
        'm3u8': 'https://cdn.oneplaychile.cl:1936/regionales/energia-fm/playlist.m3u8'
    },
    {
        'nombre': 'Canal 9 BíoBí­o TV',
        'm3u8': 'https://unlimited1-cl-movistar.dps.live/c9/c9.smil/playlist.m3u8'
    },
    {
        'nombre': 'TV8',
        'm3u8': 'https://593b04c4c5670.streamlock.net:443/8014/8014/playlist.m3u8'
    },
    {
        'nombre': 'Club TV',
        'm3u8': 'https://paneltv.online:1936/8030/8030/playlist.m3u8'
    },
    {
        'nombre': 'Teleangol Radio',
        'm3u8': 'https://unlimited2-cl-movistar.dps.live/teleangol/teleangol.smil/playlist.m3u8'
    },
    {
        'nombre': 'LTV canal',
        'm3u8': 'https://medios.sirtel.cl/live/stream/index.m3u8'
    },
    {
        'nombre': 'Pucon TV',
        'm3u8': 'https://unlimited1-cl-movistar.dps.live/pucontv/pucontv.smil/playlist.m3u8'
    },
    {
        'nombre': 'Temuco TV',
        'm3u8': 'https://5eff35271151c.streamlock.net:1936/8038/8038/playlist.m3u8'
    },
    {
        'nombre': 'T-Vinet',
        'm3u8': 'https://unlimited1-cl-movistar.dps.live/inet2/inet2.smil/playlist.m3u8'
    },
    {
        'nombre': 'Osorno TV+',
        'm3u8': 'https://hd.chileservidores.cl:1936/osorno2/live/playlist.m3u8'
    },
    {
        'nombre': 'Decima TV',
        'm3u8': 'https://unlimited2-cl-movistar.dps.live/decimatv/decimatv.smil/playlist.m3u8'
    },
    {
        'nombre': 'Canal 2 Quellon',
        'm3u8': 'https://unlimited1-cl-movistar.dps.live/tvquellon/tvquellon.smil/playlist.m3u8'
    },
    {
        'nombre': 'Vision TV',
        'm3u8': 'https://vivo.solumedia.com:19360/visiontv/visiontv.m3u8'
    },
    {
        'nombre': 'Canal Survision Alerce',
        'm3u8': 'https://v2.tustreaming.cl/canalsurvision/index.m3u8'
    },
    {
        'nombre': 'Canal 5 Puerto Montt',
        'm3u8': 'https://srv2.zcast.com.br/canal5tv/canal5tv/playlist.m3u8'
    },
    {
        'nombre': 'Canal Chilote',
        'm3u8': 'https://5eae379fb77bb.streamlock.net:443/8030/8030/playlist.m3u8'
    },
    {
        'nombre': 'Hito Cero TV',
        'm3u8': 'https://streaming10.zglobalhost.com:1936/8018/8018/playlist.m3u8'
    },
    {
        'nombre': 'ChiloeRed25',
        'm3u8': 'https://v2.tustreaming.cl/chiloered/live1/index.m3u8'
    },
    {
        'nombre': 'SantaMariaTV',
        'm3u8': 'https://unlimited1-cl-movistar.dps.live/smtv/smtv.smil/playlist.m3u8'
    },
    {
        'nombre': 'Canal11TVAysen',
        'm3u8': 'https://v2.tustreaming.cl/canal11aysen/live1/index.m3u8'
    },
    {
        'nombre': 'Soberania Radio',
        'm3u8': 'https://tls.cdnz.cl/iflexus/live/playlist.m3u8'
    },
    {
        'nombre': 'ITV Patagonia',
        'm3u8': 'https://unlimited1-cl-isp.dps.live/itv/itv.smil/playlist.m3u8'
    },
    {
        'nombre': 'EvaVisión',
        'm3u8': 'https://stmv.panel.mivideo.pro/evatelevision/evatelevision/playlist.m3u8'
    },
    {
        'nombre': 'Canal Sur Patagonia',
        'm3u8': 'https://v1.tustreaming.cl:19360/canalsurpatagoniatv/canalsurpatagoniatv.m3u8'
    },
    {
        'nombre': 'Zee Mundo',
        'm3u8': 'https://y5w8j4a9.ssl.hwcdn.net/mundohd/tracks-v1a1/index.m3u8'
    },
    {
        'nombre': 'TV Chile',
        'm3u8': 'https://mdstrm.com/live-stream-playlist/533adcc949386ce765657d7c.m3u8'
    },
    {
        'nombre': 'Teletrak',
        'm3u8': 'https://unlimited1-cl-movistar.dps.live/teletrak/teletrak.smil/playlist.m3u8'
    },
    {
        'nombre': 'TV Turf Movil',
        'm3u8': 'https://janus.tvturf.cl/playlist/stream.m3u8'
    },
    {
        'nombre': 'Valparaiso Sporting',
        'm3u8': 'https://unlimited2-cl-movistar.dps.live/sportinghd/sportinghd.smil/playlist.m3u8'
    },
    {
        'nombre': 'El Galpon 80',
        'm3u8': 'https://streamyes.alsolnet.com/wtmradio/live/playlist.m3u8'
    },
    {
        'nombre': 'Radioteca WebStereo',
        'm3u8': 'https://tvstreaming.cl:1936/8042/8042/playlist.m3u8'
    },
    {
        'nombre': 'Re7',
        'm3u8': 'https://vdo.mivideo.pro:3446/stream/play.m3u8'
    },
    {
        'nombre': 'Recuerdos Retro Radio TV',
        'm3u8': 'https://593b04c4c5670.streamlock.net:443/8002/8002/playlist.m3u8'
    },
    {
        'nombre': 'La Sabrosura TV',
        'm3u8': 'https://5eff35271151c.streamlock.net:1936/8096/8096/playlist.m3u8'
    },
    {
        'nombre': 'Carolina TV',
        'm3u8': 'https://unlimited1-cl-movistar.dps.live/carolinatv/carolinatv.smil/playlist.m3u8'
    },
    {
        'nombre': 'DJ Loncho TV',
        'm3u8': 'https://srv2.zcast.com.br/djlonchotv/djlonchotv/playlist.m3u8'
    },
    {
        'nombre': 'Maxima FM',
        'm3u8': 'https://server1.oklanet.cl:1936/maximavideo1/maximavideo1/playlist.m3u8'
    },
    {
        'nombre': 'On Radio Kpop',
        'm3u8': 'https://tls.cdnz.cl/onradio4/live/playlist.m3u8'
    },
    {
        'nombre': 'Radio Coquimbo 1440',
        'm3u8': 'https://mediacpstreamchile.com:1936/norterama/norterama/playlist.m3u8'
    },
    {
        'nombre': 'Tributo Valentina',
        'm3u8': 'https://tvstreaming.cl:1936/8124/8124/playlist.m3u8'
    },
    {
        'nombre': 'Radio Under',
        'm3u8': 'https://eu1.servers10.com:8081/8140/index.m3u8'
    },
    {
        'nombre': 'Radio Baeza',
        'm3u8': 'https://paneltv.online:1936/8136/8136/playlist.m3u8'
    },
    {
        'nombre': 'Radio Recreo',
        'm3u8': 'https://tvstreaming.cl:1936/8128/8128/playlist.m3u8'
    },
    {
        'nombre': 'RCKStudio',
        'm3u8': 'https://inliveserver.com:1936/11530/11530/playlist.m3u8'
    },
    {
        'nombre': 'TuTv Quillota',
        'm3u8': 'https://tvstreaming.cl:1936/9570/9570/playlist.m3u8'
    },
    {
        'nombre': 'Vox TV',
        'm3u8': 'https://live01.hablaip.com:1936/9071/9071/playlist.m3u8'
    },
    {
        'nombre': 'TV vconline.cl',
        'm3u8': 'https://593b04c4c5670.streamlock.net/8068/8068/chunklist_w2070277572.m3u8'
    },
    {
        'nombre': 'Zapping Music',
        'm3u8': 'https://zmlive.zappingtv.com/zm-free/zm.smil/playlist.m3u8'
    },
    {
        'nombre': 'Alegria TV',
        'm3u8': 'https://593b04c4c5670.streamlock.net:443/8192/8192/playlist.m3u8'
    },
    {
        'nombre': 'Zona Play Radio',
        'm3u8': 'https://srv1.zcast.com.br/zonaplay/zonaplay/playlist.m3u8'
    },
    {
        'nombre': 'CCP Radio',
        'm3u8': 'https://tls.cdnz.cl:443/ccpradio/ccpradio/playlist.m3u8'
    },
    {
        'nombre': 'Red Fueguina Radio',
        'm3u8': 'https://inliveserver.com:1936/11012/11012/playlist.m3u8'
    },
    {
        'nombre': 'DBox Radio',
        'm3u8': 'https://stmv1.voxtvhd.com.br/dbox/dbox/playlist.m3u8'
    },
    {
        'nombre': 'Radio Zeta',
        'm3u8': 'https://unlimited1-cl-movistar.dps.live/radioztv/radioztv.smil/playlist.m3u8'
    },
    {
        'nombre': 'Radio X',
        'm3u8': 'https://v2.tustreaming.cl/radiox/live1/index.m3u8'
    },
    {
        'nombre': 'Radio Via Libre',
        'm3u8': 'https://mediacpstreamchile.com:1936/radiovialibre/radiovialibre/playlist.m3u8'
    },
    {
        'nombre': 'Radio Universal',
        'm3u8': 'https://hd.chileservidores.cl:1936/universal/universal/playlist.m3u8'
    },
    {
        'nombre': 'Radio Touch',
        'm3u8': 'https://Stmv1.zcastbr.com/radiotouch/radiotouch/playlist.m3u8'
    },
    {
        'nombre': 'Radio Tazmania Hit',
        'm3u8': 'https://paneltv.online:1936/8054/8054/playlist.m3u8'
    },
    {
        'nombre': 'Sabor TV',
        'm3u8': 'https://v2.tustreaming.cl/sabortv/live1/index.m3u8'
    },
    {
        'nombre': 'Radio Riquelme TV',
        'm3u8': 'https://us1.streamchileno.cl/hls/stream.m3u8'
    },
    {
        'nombre': 'Radio Rancagua',
        'm3u8': 'https://5eff35271151c.streamlock.net:1936/8056/8056/playlist.m3u8'
    },
    {
        'nombre': 'Radio Presidente Ibañez',
        'm3u8': 'https://ibanez.servercl.com/hls/live.m3u8'
    },
    {
        'nombre': 'Radio Portales',
        'm3u8': 'https://cdn.oneplaychile.cl:1936/radios/radioportales/playlist.m3u8'
    },
    {
        'nombre': 'Radio Las Nieves',
        'm3u8': 'https://v2.tustreaming.cl/rln/live1/index.m3u8'
    },
    {
        'nombre': 'Radio Lado Oscuro TV',
        'm3u8': 'https://video.streamingchilenos.cl:1936/8006/8006/playlist.m3u8'
    },
    {
        'nombre': 'Radio La Serena',
        'm3u8': 'https://streamyes.alsolnet.com/radioserena/live/playlist.m3u8'
    },
    {
        'nombre': 'Radio Hoy',
        'm3u8': 'https://panel.dattalive.com:443/8146/8146/playlist.m3u8'
    },
    {
        'nombre': 'Radio Genial TV',
        'm3u8': 'https://v2.tustreaming.cl/genialtv/live1/index.m3u8'
    },
    {
        'nombre': 'Radio Fiessta',
        'm3u8': 'https://unlimited1-cl-movistar.dps.live/fiesstatv/fiesstatv.smil/playlist.m3u8'
    },
    {
        'nombre': 'Futura TV',
        'm3u8': 'https://unlimited1-cl-movistar.dps.live/futuratv/futuratv.smil/playlist.m3u8'
    },
    {
        'nombre': 'Radio Favorita',
        'm3u8': 'https://streamyes.alsolnet.com/radiofavoritatv/live/playlist.m3u8'
    },
    {
        'nombre': 'Radio Ñuble',
        'm3u8': 'https://live.tvcontrolcp.com:1936/Rnuble/Rnuble/playlist.m3u8'
    },
    {
        'nombre': 'Radio Fantasia TV',
        'm3u8': 'https://v2.tustreaming.cl/fantasiatv/index.m3u8'
    },
    {
        'nombre': 'Radio Corporacion',
        'm3u8': 'https://v2.tustreaming.cl/corporacion/s1-500k/index.m3u8'
    },
    {
        'nombre': 'Radio Chiloe',
        'm3u8': 'https://hd.chileservidores.cl:1936/chiloeone/chiloeone/playlist.m3u8'
    },
    {
        'nombre': 'Radio Camila TV',
        'm3u8': 'https://593b04c4c5670.streamlock.net/8142/8142/playlist.m3u8'
    },
    {
        'nombre': 'Radio Amatista',
        'm3u8': 'https://paneltv.online:1936/8096/8096/playlist.m3u8'
    },
    {
        'nombre': 'Radio Actitud',
        'm3u8': 'https://593b04c4c5670.streamlock.net/8020/8020/playlist.m3u8'
    },
    {
        'nombre': 'Pura Noticia',
        'm3u8': 'https://pnt.janusmedia.tv/hls/pnt.m3u8'
    },
    {
        'nombre': 'Preludio TV',
        'm3u8': 'https://5eff35271151c.streamlock.net:1936/8068/8068/playlist.m3u8'
    },
    {
        'nombre': 'Orocoipo',
        'm3u8': 'https://593b04c4c5670.streamlock.net:443/8076/8076/playlist.m3u8'
    },
    {
        'nombre': 'On Radio Chile',
        'm3u8': 'https://tls.cdnz.cl/onradio3/live/playlist.m3u8'
    },
    {
        'nombre': 'Mi Radio TV',
        'm3u8': 'https://v2.tustreaming.cl/miradiotv/live1/rewind-999999.m3u8'
    },
    {
        'nombre': 'Inter Radio TV',
        'm3u8': 'https://v2.tustreaming.cl/interradiotv/tracks-v1a1/mono.m3u8'
    },
    {
        'nombre': 'Interactiva FM',
        'm3u8': 'https://live.tvcontrolcp.com:1936/interactiva/interactiva/playlist.m3u8'
    },
    {
        'nombre': 'FM Pulso',
        'm3u8': 'https://panel.tvstream.cl:1936/8004/8004/playlist.m3u8'
    },
    {
        'nombre': 'El Sembrador',
        'm3u8': 'https://5eff35271151c.streamlock.net:1936/8064/8064/playlist.m3u8'
    },
    {
        'nombre': 'Chocolate FM',
        'm3u8': 'https://paneltv.online:1936/8106/8106/playlist.m3u8'
    },
    {
        'nombre': 'AE Radio',
        'm3u8': 'https://tls.cdnz.cl/aeradio/live/playlist.m3u8'
    },
    {
        'nombre': 'Pauta TV',
        'm3u8': 'https://unlimited1-cl-movistar.dps.live/pautatv/pautatv.smil/playlist.m3u8'
    },
    {
        'nombre': 'Radio Tiempo',
        'm3u8': 'https://unlimited2-cl-movistar.dps.live/fmtiempotv/fmtiempotv.smil/playlist.m3u8'
    },
    {
        'nombre': 'Radio Infinita',
        'm3u8': 'https://unlimited2-cl-movistar.dps.live/infinitatv/infinitatv.smil/playlist.m3u8'
    },
    {
        'nombre': 'Radio Romantica',
        'm3u8': 'https://unlimited2-cl-movistar.dps.live/romanticatv/romanticatv.smil/playlist.m3u8'
    },
    {
        'nombre': 'Radio Duna',
        'm3u8': 'https://unlimited1-cl-movistar.dps.live/dunatv/dunatv.smil/playlist.m3u8'
    },
    {
        'nombre': 'Pudahuel FM',
        'm3u8': 'https://unlimited2-cl-movistar.dps.live/pudahueltv/pudahueltv.smil/playlist.m3u8'
    },
    {
        'nombre': 'Cooperativa',
        'm3u8': 'https://unlimited2-cl-movistar.dps.live/coopetv/coopetv.smil/playlist.m3u8'
    },
    {
        'nombre': 'BioBio TV',
        'm3u8': 'https://unlimited1-cl-movistar.dps.live/bbtv/bbtv.smil/playlist.m3u8'
    },
    {
        'nombre': 'ADN',
        'm3u8': 'https://unlimited2-cl-movistar.dps.live/adntv/adntv.smil/playlist.m3u8'
    },
    {
        'nombre': 'Voz de Poder Televisión',
        'm3u8': 'https://v2.tustreaming.cl/vozdepoder/live1/index.m3u8'
    },
    {
        'nombre': 'Unidad Evangelica TV',
        'm3u8': 'https://v2.tustreaming.cl/unidadevangelica/index.m3u8'
    },
    {
        'nombre': 'TNE',
        'm3u8': 'https://v2.tustreaming.cl/tnetv/live1/tracks-v1a1/playlist.m3u8'
    },
    {
        'nombre': 'Televida HD',
        'm3u8': 'https://tls.cdnz.cl/televida/ngrp:live_all/playlist.m3u8'
    },
    {
        'nombre': 'Radio Unido Al Cielo',
        'm3u8': 'https://stmv.panel.mivideo.pro/unidoalcielo/unidoalcielo/playlist.m3u8'
    },
    {
        'nombre': 'NCTV',
        'm3u8': 'https://unlimited2-cl-movistar.dps.live/nctv/nctv.smil/playlist.m3u8'
    },
    {
        'nombre': 'Escuchame Radio',
        'm3u8': 'https://stmv1.voxtvhd.com.br/escuchame/escuchame/playlist.m3u8'
    },
    {
        'nombre': 'Canal ISB',
        'm3u8': 'https://unlimited2-cl-movistar.dps.live/isb/isb.smil/playlist.m3u8'
    },
    {
        'nombre': 'Canal 33',
        'm3u8': 'https://590c5dc5c3271.streamlock.net/eduardo555/eduardo555/playlist.m3u8'
    },
    {
        'nombre': 'Volvamos a Dios TV',
        'm3u8': 'https://stmv.panel.mivideo.pro/remanenteescogido/remanenteescogido/playlist.m3u8'
    }
]