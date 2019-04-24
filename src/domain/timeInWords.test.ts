import {timeInWords} from "./timeInWords";

test('timeInWords works for all required cases', () => {
    expect(timeInWords(new Date("2019-04-24T13:36:02")))
        .toEqual([
            {"title": "fünf", "type": "time"},
            {"title": "nach", "type": "time"},
            {"title": "halb", "type": "time"},
            {"title": "zwei", "type": "hour"},
        ]);
});
