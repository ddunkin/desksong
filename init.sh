#!/bin/bash
### BEGIN INIT INFO
# Provides:          desksong
# Required-Start:    $remote_fs $syslog
# Required-Stop:     $remote_fs $syslog
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
### END INIT INFO

BASEDIR=/home/pi/desksong
PIDFILE=/var/run/desksong.pid
LOGFILE=/var/log/desksong.log

start() {
	if [ -a $PIDFILE ] ; then
		if ps $(cat $PIDFILE) > /dev/null ; then
			echo Already running
			exit 1
		else
			rm $PIDFILE
		fi
	fi

	gpio-admin unexport 23 /dev/null 2>&1
	gpio-admin export 23 pullup
	gpio-admin unexport 24 /dev/null 2>&1
	gpio-admin export 24 pullup

	node $BASEDIR/index.js >> $LOGFILE 2>&1 &
	PID=$!
	if ps $PID > /dev/null ; then
		echo $PID > $PIDFILE
		echo Started
	else
		echo Failed
		exit 1
	fi
}

stop() {
	if [ -a $PIDFILE ] ; then
		kill $(cat $PIDFILE)
		rm $PIDFILE
		echo Stopped
	else
		echo Not running
	fi
}

case $1 in
	start)
		start
		;;

	stop)
		stop
		;;

	*)
		echo "Usage: $0 {start|stop}"
		;;
esac 
