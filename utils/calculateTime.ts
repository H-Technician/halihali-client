interface TimelineIntervals {
    interval: number;
    totalIntervals: number;
}

export function calculateTimelineIntervals(videoDurationInSeconds: number): TimelineIntervals {
    let interval: number;
    let totalIntervals: number;

    if (videoDurationInSeconds <= 60) { // 1 分钟或更短
        interval = 0.5;
    } else { // 1 分钟到 1 小时
        interval = 60; // 1 分钟
    }

    totalIntervals = Math.ceil(videoDurationInSeconds / interval);

    return { interval, totalIntervals };
}