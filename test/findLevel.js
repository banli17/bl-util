import { findLevel } from '../src/util/findLevel'

describe('findLevel', () => {
    test('findLevel', () => {

        let levels = [{ "id": "24", "name": "200元减50元", "category_id": "20", "full": "200", "minus": "50", "create_time": "1546486808", "weight": "7" }, { "id": "25", "name": "400元减100元", "category_id": "20", "full": "400", "minus": "100", "create_time": "1546486891", "weight": "16" }, { "id": "26", "name": "700元减200元", "category_id": "20", "full": "700", "minus": "200", "create_time": "1546486942", "weight": "4" }];

        expect(findLevel(55, levels, 'full')).toBe(-1)
        expect(findLevel(201, levels, 'full')).toBe(0)
        expect(findLevel(500, levels, 'full')).toBe(1)
        expect(findLevel(800, levels, 'full')).toBe(2)
    })
})