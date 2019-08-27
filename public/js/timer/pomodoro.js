import $ from 'jquery';

export const timer = (() => {
    let status;

    let duration = {
        minutes: "25",
        seconds: "00"
    };

    let minutes     = 0,
        seconds     = 0,
        timer;

    // cache dom
    const $el = $('.pomodoro')
    const $status = $el.children('.title');
    const $timer = $el.children('.timer');
    
    function start() {
        if (timer === undefined) { // if timer isn't running start it
            const time = $timer.text().split(':'); // get time from timer's text
            minutes = time[0];
            seconds = time[1];

            duration = { minutes, seconds } // save duration for resetting timer

            timer = setInterval(_run, 1000);
            _run();
        } else // else pause timer
            _clear();
    }

    function reset() {
        _clear();
        _update(duration);
    }

    function _update({minutes, seconds}) {
        $timer.text(minutes + ":" + seconds);
    }

    function _clear() {
        clearInterval(timer);
        timer = undefined;
    }

    function _finish() {
        _clear();

        alert('Timer Done!');
    }

    function _run() {
       seconds--;

        if (seconds < 0) {
            minutes--;
            seconds = minutes > 0 ? 59 : 0;
        }

        if (minutes < 0) {
            minutes = "00";
            _finish();
        }

        minutes = (minutes < 10 && minutes !== "00") ? "0" + minutes : minutes;
        seconds = (seconds < 10 && seconds !== "00") ? "0" + seconds : seconds;

        _update({minutes, seconds});
    }

    return { start, stop, reset }
})()