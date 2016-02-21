# DeskSong

Play a song when my desk is going up or down using a Raspberry Pi.

## Installation

Install [gpio-admin](https://github.com/ddunkin/cuick2wire-gpio-admin):
```
git clone git://github.com/ddunkin/quick2wire-gpio-admin.git
cd quick2wire-gpio-admin
make
sudo make install
```
After this, you will need to logout and log back in.

Run gpio-admin to pull up GPIO 23 & 24 (pins 16 & 18):
```
npm run setup
```

Run the app and watch for output when one of the watched pins is pulled down or back up.
```
node .
```

