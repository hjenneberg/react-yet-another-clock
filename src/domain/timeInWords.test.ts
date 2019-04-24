import {timeInWords, typedItem} from "./timeInWords";

it.each([
    [
        "2019-04-24T19:03:34",
        [
            {"title": "fünf", "type": "time"},
            {"title": "nach", "type": "time"},
            {"title": "sieben", "type": "hour"},
        ]
    ],
    [
        "2019-04-24T13:36:02",
        [
            {"title": "fünf", "type": "time"},
            {"title": "nach", "type": "time"},
            {"title": "halb", "type": "time"},
            {"title": "zwei", "type": "hour"},
        ]
    ],
    [
        "2019-04-24T18:57:04",
        [
            {"title": "fünf", "type": "time"},
            {"title": "vor", "type": "time"},
            {"title": "sieben", "type": "hour"},
        ]
    ],
    [
        "2019-04-24T18:59:50",
        [
            {"title": "um", "type": "time"},
            {"title": "sieben", "type": "hour"},
        ]
    ],
])('works for all cases', (date: string, expected: typedItem[]) => {
    expect(timeInWords(new Date(date))).toEqual(expected);
});
