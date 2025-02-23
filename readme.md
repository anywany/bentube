# Ben-tube

Ben-tube, terminalden Ben 10 izlemek için geliştirilmiş bir programdır.

## Kullanım

**Not:** Node.js, npm ve VLC gereklidir. Videolar VLC kullanılarak açılır.

Kurulum ve kullanım oldukça basittir:

```sh
sudo apt install vlc
sudo npm install -g bentube
ben
```

**Not:** Videoyu oynatırken hata alırsanız, aşağıdaki komutları çalıştırın:

```sh
sudo apt update
sudo apt install vlc
```

 Bazı videoların ingilizce halleri yoktur. Eğer yoksa hata alırsınız.

Videoların varsayılan dilini değiştirmek için `-l` parametresini kullanabilirsiniz.
0: Türkçe, 1: İngilizce. Örneğin:

```sh
ben -l 0 # Turkish
ben -l 1 # English
```
**Not:** Program varsayılan olarak `1` (İngilizce + Altyazı) ile başlar.

### İzleme Adımları

1. Seri seçin.
2. Sezon numarasını girin.
3. Bölüm numarasını girin.
4. `Enter` tuşuna basın.

Herhangi bir adımdan geri gitmek için `..` yazın.
Herhangi bir adımı listelemek için `l`, `ls` veya `list` yazın.
Çıkmak için `exit` veya `e` yazın.

İzlerken dili değiştirmek için şu komutları kullanabilirsiniz:

```sh
watch? >lang 0 # Turkish
watch? >lang 1 # English (Subtitles)
```

### Örnek Kullanım

```sh
ben
choose series: 0
Ben 10 Classic:Season>ls
Ben 10 Classic:Season>1
Ben 10 Classic:Season>1>Part>ls
Ben 10 Classic:Season>1>Part>1
╔════════════════════════════════════════════════════════════╗
║ (►◄)  1. Sezon  1. Bölüm  And Then There Were 10  27.12.2005 ║
╚════════════════════════════════════════════════════════════╝

watch? >..
Ben 10 Classic:Season>1>Part>
```

## Geliştirmeler

### Mevcut Özellikler
- VLC ile oynatma desteği
- Dil seçimi (Dublaj/Altyazılı - EN)

### Planlanan Özellikler
- Video oynatıcı seçme özelliği
- Video indirme desteği

## Kütüphaneler

Kullanılan Node.js kütüphaneleri:
- `axios`, `qs`: HTTP/S istekleri için
- `table`: Terminalde tablo oluşturmak için

ayrıca 
- `vlc` : Videoları oynatmak için

## Lisans

Mevcut lisans dosyası: `./LICENSE.txt`
Bu program **GPL v3** lisansı ile lisanslanmıştır. Detaylı bilgi için: [GPL v3](https://www.gnu.org/licenses/gpl-3.0.txt)
Bu programın yanlış kullanımından veya çalıştırılmasından doğabilecek sorunlardan sorumlu değilim, tüm sorumluluk kullanıcıya aittir.

---

# Ben-tube (English)

Ben-tube is a program developed for watching Ben 10 from the terminal.

## Usage

**Note:** Node.js, npm, and VLC are required. Videos are played using VLC.

Installation and usage are quite simple:

```sh
sudo apt install vlc
sudo npm install -g bentube
ben
```

**Note:** If you encounter an error while playing the video, run the following commands:

```sh
sudo apt update
sudo apt install vlc
```

Some videos do not have English versions. If not, you will get an error.

To change the default playback language, use the `-l` parameter.
0: Turkish, 1: English. For example:

```sh
ben -l 0 # Turkish
ben -l 1 # English
```
**Note:** The program defaults to `1` (English).

### Watching Steps

1. Select a series.
2. Enter the season number.
3. Enter the episode number.
4. Press `Enter`.

To go back to the previous step, type `..`.
To list options at any step, type `l`, `ls`, or `list`.
To exit, type `exit` or `e`.

To change the language while watching, use:

```sh
watch? >lang 0 # Turkish
watch? >lang 1 # English (Subtitles)
```

### Example Usage

```sh
ben
choose series: 0
Ben 10 Classic:Season>ls
Ben 10 Classic:Season>1
Ben 10 Classic:Season>1>Part>ls
Ben 10 Classic:Season>1>Part>1
╔════════════════════════════════════════════════════════════╗
║(►◄) Season 1, Episode 1 -And Then There Were 10-27.12.2005 ║
╚════════════════════════════════════════════════════════════╝

watch? >..
Ben 10 Classic:Season>1>Part>
```

## Enhancements

### Current Features
- VLC playback support
- Language selection (Dubbed/Subtitled - EN)

### Planned Features
- Option to choose the video player
- Video downloader support

## Libraries

Used Node.js libraries:
- `axios`, `qs`: For HTTP/S requests
- `table`: For displaying tables in the terminal

and 

- `vlc` : For play videos

## License

License file: `./LICENSE.txt`
This program is licensed under **GPL v3**. More details: [GPL v3](https://www.gnu.org/licenses/gpl-3.0.txt)
I am not responsible for any misuse or execution of this program. The user is solely responsible.

