echo 'if [ "$(basename "$0")" != "binary" ]; then
    exit 1
fi

source /data/local/tmp/sensivity.so

set_priorities() {
    local pid="$1"

    cmd="pgrep -f '\''$pid'\''"
    pids=$(eval "$cmd")

    for p in $pids; do
        cmd="/proc/$p/task/"
        if [ -d "$cmd" ]; then
            for task_id in $(ls "$cmd"); do
                if [ "$task_id" != "." ] && [ "$task_id" != ".." ]; then
                    renice -n -20 -p "$task_id"
                    ionice -c 1 -n 0 -p "$task_id"
                    chrt -f -p 99 "$task_id"
                fi
            done
        fi
    done
}

sensivityOne() {
    cmd power set-fixed-performance-mode-enabled true
    rm -rf /tmp/cache
    wm size 1369x3075
}

exec 1>/dev/null
exec 2>/dev/null

prev_window_state=""
game_running=""

cmd="cmd notification post -S bigtext -t \"SENSIX WEBXIT\" \"Tag\" \"Status: Actived | Author: Henpeex\""
eval "$cmd"

while true; do
    window_buffer=$(dumpsys window | grep -E '\''mCurrentFocus|mFocusedApp'\'' | grep -Eo '\''com.dts.freefireth|com.dts.freefiremax'\'')

    if [ -n "$window_buffer" ]; then
        if [ "$prev_window_state" != "active" ]; then
            game_running="open"
            sensivityOne
            sleep 0.5
            wm density "$calibrar"
            cmd="cmd notification post -S bigtext -t \"SENSIX WEBXIT\" \"Tag\" \"Process injecting something\""
            eval "$cmd"
            sleep 2

            cmd="pgrep -f '\''com.dts.freefireth|com.dts.freefiremax'\''"
            pids=$(eval "$cmd")

            for pid in $pids; do
                t_priorities "$pid"
                sleep 0.7
            done

            cmd="cmd notification post -S bigtext -t \"SENSIX WEBXIT\" \"Tag\" \"Successfully configuration dpi\""
            eval "$cmd"
        fi
        prev_window_state="active"
    else
        if [ "$game_running" = "open" ]; then
        
            proc_buffer=$(pgrep -f '\''com.dts.freefireth|com.dts.freefiremax'\'')

            if [ -z "$proc_buffer" ]; then
                game_running=""
                cmd="cmd notification post -S bigtext -t \"SENSIX WEB-UI\" \"Tag\" \"Game Closed\""
                eval "$cmd"
                sleep 0.1
                device_config delete game_overlay
                wm size reset
                sleep 1
                wm density reset
            fi
        fi
        prev_window_state=""
    fi
    sleep 4
done' > /data/local/tmp/regxit