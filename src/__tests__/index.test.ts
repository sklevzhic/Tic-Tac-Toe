
import {Values} from "../types/values";

let boardTemp = [
  [
    {
      "x": 0,
      "y": 0,
      "value": null,
      "id": 6206
    },
    {
      "x": 0,
      "y": 1,
      "value": null,
      "id": 8946
    },
    {
      "x": 0,
      "y": 2,
      "value": null,
      "id": 3990
    },
    {
      "x": 0,
      "y": 3,
      "value": null,
      "id": 1119
    },
    {
      "x": 0,
      "y": 4,
      "value": null,
      "id": 6728
    },
    {
      "x": 0,
      "y": 5,
      "value": null,
      "id": 3768
    },
    {
      "x": 0,
      "y": 6,
      "value": null,
      "id": 7925
    },
    {
      "x": 0,
      "y": 7,
      "value": null,
      "id": 5152
    }
  ],
  [
    {
      "x": 1,
      "y": 0,
      "value": null,
      "id": 611
    },
    {
      "x": 1,
      "y": 1,
      "value": null,
      "id": 5871
    },
    {
      "x": 1,
      "y": 2,
      "value": null,
      "id": 8135
    },
    {
      "x": 1,
      "y": 3,
      "value": null,
      "id": 7197
    },
    {
      "x": 1,
      "y": 4,
      "value": null,
      "id": 2281
    },
    {
      "x": 1,
      "y": 5,
      "value": null,
      "id": 1394
    },
    {
      "x": 1,
      "y": 6,
      "value": null,
      "id": 1772
    },
    {
      "x": 1,
      "y": 7,
      "value": null,
      "id": 5266
    }
  ],
  [
    {
      "x": 2,
      "y": 0,
      "value": null,
      "id": 5884
    },
    {
      "x": 2,
      "y": 1,
      "value": null,
      "id": 1294
    },
    {
      "x": 2,
      "y": 2,
      "value": "X",
      "id": 432
    },
    {
      "x": 2,
      "y": 3,
      "value": "0",
      "id": 6550
    },
    {
      "x": 2,
      "y": 4,
      "value": null,
      "id": 3089
    },
    {
      "x": 2,
      "y": 5,
      "value": null,
      "id": 4229
    },
    {
      "x": 2,
      "y": 6,
      "value": null,
      "id": 4326
    },
    {
      "x": 2,
      "y": 7,
      "value": null,
      "id": 8176
    }
  ],
  [
    {
      "x": 3,
      "y": 0,
      "value": null,
      "id": 5804
    },
    {
      "x": 3,
      "y": 1,
      "value": null,
      "id": 5454
    },
    {
      "x": 3,
      "y": 2,
      "value": null,
      "id": 3069
    },
    {
      "x": 3,
      "y": 3,
      "value": "X",
      "id": 2757
    },
    {
      "x": 3,
      "y": 4,
      "value": "0",
      "id": 863
    },
    {
      "x": 3,
      "y": 5,
      "value": null,
      "id": 9866
    },
    {
      "x": 3,
      "y": 6,
      "value": null,
      "id": 6510
    },
    {
      "x": 3,
      "y": 7,
      "value": null,
      "id": 9416
    }
  ],
  [
    {
      "x": 4,
      "y": 0,
      "value": null,
      "id": 950
    },
    {
      "x": 4,
      "y": 1,
      "value": null,
      "id": 4779
    },
    {
      "x": 4,
      "y": 2,
      "value": null,
      "id": 9254
    },
    {
      "x": 4,
      "y": 3,
      "value": null,
      "id": 3829
    },
    {
      "x": 4,
      "y": 4,
      "value": "X",
      "id": 633
    },
    {
      "x": 4,
      "y": 5,
      "value": "0",
      "id": 6599
    },
    {
      "x": 4,
      "y": 6,
      "value": null,
      "id": 597
    },
    {
      "x": 4,
      "y": 7,
      "value": null,
      "id": 6854
    }
  ],
  [
    {
      "x": 5,
      "y": 0,
      "value": null,
      "id": 5632
    },
    {
      "x": 5,
      "y": 1,
      "value": null,
      "id": 4856
    },
    {
      "x": 5,
      "y": 2,
      "value": null,
      "id": 4569
    },
    {
      "x": 5,
      "y": 3,
      "value": null,
      "id": 2708
    },
    {
      "x": 5,
      "y": 4,
      "value": null,
      "id": 4009
    },
    {
      "x": 5,
      "y": 5,
      "value": null,
      "id": 5478
    },
    {
      "x": 5,
      "y": 6,
      "value": null,
      "id": 6396
    },
    {
      "x": 5,
      "y": 7,
      "value": null,
      "id": 6032
    }
  ],
  [
    {
      "x": 6,
      "y": 0,
      "value": null,
      "id": 1347
    },
    {
      "x": 6,
      "y": 1,
      "value": null,
      "id": 1943
    },
    {
      "x": 6,
      "y": 2,
      "value": null,
      "id": 6271
    },
    {
      "x": 6,
      "y": 3,
      "value": null,
      "id": 6462
    },
    {
      "x": 6,
      "y": 4,
      "value": null,
      "id": 3038
    },
    {
      "x": 6,
      "y": 5,
      "value": null,
      "id": 2574
    },
    {
      "x": 6,
      "y": 6,
      "value": null,
      "id": 7626
    },
    {
      "x": 6,
      "y": 7,
      "value": null,
      "id": 201
    }
  ],
  [
    {
      "x": 7,
      "y": 0,
      "value": null,
      "id": 263
    },
    {
      "x": 7,
      "y": 1,
      "value": null,
      "id": 2442
    },
    {
      "x": 7,
      "y": 2,
      "value": null,
      "id": 1644
    },
    {
      "x": 7,
      "y": 3,
      "value": null,
      "id": 6217
    },
    {
      "x": 7,
      "y": 4,
      "value": null,
      "id": 5405
    },
    {
      "x": 7,
      "y": 5,
      "value": null,
      "id": 5037
    },
    {
      "x": 7,
      "y": 6,
      "value": null,
      "id": 5051
    },
    {
      "x": 7,
      "y": 7,
      "value": null,
      "id": 7015
    }
  ]
]
describe(("Should check values in the line"), () => {
  test("horisontal", () => {
    // console.log(checkValuesInVertical({ "x": 5, "y": 5,  "value": null, "id": 5478 }, Values.VALUE_X))
  })
})
