# DeskSong

Play a song when my desk is going up or down using a Raspberry Pi.

## Installation

Install [gpio-admin](https://github.com/quick2wire/cuick2wire-gpio-admin):
```
git clone git://github.com/quick2wire/quick2wire-gpio-admin.git
cd quick2wire-gpio-admin
make
sudo make install
sudo adduser $USER gpio
```
After this, you will need to logout and log back in.

Run gpio-admin to pull up GPIO 23 & 24 (pins 16 & 18):
```
gpio-admin export 23 pullup
gpio-admin export 24 pullup
```

Run the app and watch for output when one of the watched pins is pulled down or back up.
```
node .
```

