import $ from 'jquery';
import { timer } from './pomodoro';

export const buttons = (() => {
    // cache dom
    const $el = $('.action-buttons');
    const $start = $el.children('.start');
    const $reset = $el.children('.reset');
    const $finish = $el.children('.finish');

    // bind events
    $start.on('click', start);
    $reset.on('click', reset);
    // $finish.on('click', timer.finish);

    function start() {
        timer.start();
        
        const $text = $(this).text();
        $(this).text($text === 'Start' ? 'Pause': 'Start');
    }

    function reset() {
        timer.reset();
    }
})()