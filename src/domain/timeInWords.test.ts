import {timeInWords, typedItem} from "./timeInWords";

it.each([
    [
        "2019-04-25T10:02:09",
        [{"title": "um", "type": "time"}]
    ],
    [
        "2019-04-24T19:03:34",
        [{"title": "fünf", "type": "time"}, {"title": "nach", "type": "time"}]
    ],
    [
        "2019-04-25T10:12:45",
        [{"title": "zehn", "type": "time"}, {"title": "nach", "type": "time"}]
    ],
    [
        "2019-04-24T22:16:27",
        [{"title": "viertel", "type": "time"}]
    ],
    [
        "2019-04-24T19:19:37",
        [{"title": "zwanzig", "type": "time"}, {"title": "nach", "type": "time"}]
    ],
    [
        "2019-04-24T22:25:14",
        [{"title": "fünf", "type": "time"}, {"title": "vor", "type": "time"}, {"title": "halb", "type": "time"}]
    ],
    [
        "2019-04-25T10:30:55",
        [{"title": "halb", "type": "time"}]
    ],
    [
        "2019-04-24T13:36:02",
        [{"title": "fünf", "type": "time"}, {"title": "nach", "type": "time"}, {"title": "halb", "type": "time"}]
    ],
    [
        "2019-04-24T18:57:04",
        [{"title": "fünf", "type": "time"}, {"title": "vor", "type": "time"}]
    ],
    [
        "2019-04-24T18:59:50",
        [{"title": "um", "type": "time"}]
    ],
])('works for all minutes', (date: string, expected: typedItem[]) => {
    expect(timeInWords(new Date(date))).toEqual(expect.arrayContaining(expected));
});
