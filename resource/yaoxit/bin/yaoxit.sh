#!/system/bin/sh
if [ "$(basename "$0")" != "trace_plugin.sys" ]; then
	exit 1
fi

Version="2.1"
cat=$(cat /sdcard/AppDataTemp/calibrar)

RemoveListerOne() {
    wm size reset
    sleep 1
    wm density 406
}

sensivityOne() {
    wm size 1445x3238
    wm density reset
    sleep 1
}

exec 1>/dev/null
exec 2>/dev/null

prev_window_state=""
game_running=""

cmd="cmd notification post -S bigtext -t \"Sensitivity Aim Enhancer\" \"Tag\" \"Version: YAOXIT | Author: Henpeex\""
am force-stop com.dts.freefireth
am force-stop com.dts.freefiremax
eval "$cmd"

while true; do
	window_buffer=$(dumpsys window | grep -E 'mCurrentFocus|mFocusedApp' | grep -Eo 'com.dts.freefireth|com.dts.freefiremax')

	if [ -n "$window_buffer" ]; then
		if [ "$prev_window_state" != "active" ]; then
			game_running="open"
			sensivityOne

			cmd="cmd notification post -S bigtext -t \"Sensitivity Aim Enhancer\" \"Tag\" \"Process enhancer something\""
			eval "$cmd"
   			wm density $cat
			sleep 2

			cmd="pgrep -f 'com.dts.freefireth|com.dts.freefiremax'"
			pids=$(eval "$cmd")

			cmd="cmd notification post -S bigtext -t \"Sensitivity Aim Enhancer\" \"Tag\" \"Successfully enhancer mode\""
			eval "$cmd"

		fi
		prev_window_state="active"
	else
		if [ "$game_running" = "open" ]; then
		
			proc_buffer=$(pgrep -f 'com.dts.freefireth|com.dts.freefiremax')

			if [ -z "$proc_buffer" ]; then
				game_running=""
				cmd="cmd notification post -S bigtext -t \"Sensitivity Aim Enhancer\" \"Tag\" \"Game Closed\""
				eval "$cmd"
                                sleep 1 
				RemoveListerOne
			fi
		fi
		prev_window_state=""
	fi
	sleep 5
done
