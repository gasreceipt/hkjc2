export const meeting = {
  venue: "Sha Tin",
  date: "Thu 9 April 2026",
  status: "Market Open",
  going: "Good to Firm",
  weather: "Clear, light headwind",
  rail: "C+3",
  races: [
    {
      raceNo: 1,
      time: "19:15",
      className: "Class 5",
      distance: "1200m",
      surface: "Turf",
      runners: [
        runner(1, "Kasa Papa", "Z Purton", "A S Cruz", 4, 40, 2.5, 93, 8.4, "Maps forward and owns the cleanest market profile."),
        runner(2, "On The Lash", "H Bowman", "P C Ng", 7, 38, 5.0, 86, 3.1, "Reliable closer if tempo gets honest."),
        runner(3, "Conspiracy", "K Teetan", "D A Hayes", 2, 37, 8.0, 82, 1.5, "Low draw keeps him relevant for exotics."),
        runner(4, "Speedy Dragon", "C L Chau", "J Size", 3, 36, 12.0, 79, 0.7, "Trainer strength keeps the ceiling interesting."),
        runner(8, "Smiling Emperor", "A Badel", "W K Mo", 1, 34, 4.5, 88, 2.7, "Inside gate and tactical speed create a neat trip."),
      ],
    },
    {
      raceNo: 2,
      time: "19:45",
      className: "Class 4",
      distance: "1000m",
      surface: "Turf",
      runners: [
        runner(1, "Fast As Lightning", "Z Purton", "F C Lor", 3, 60, 1.9, 96, 10.8, "Sharp profile and top rider make him the anchor."),
        runner(3, "Night Walker", "Y L Chung", "A S Cruz", 1, 57, 4.0, 90, 4.6, "Drawn to pressure early without wasting ground."),
        runner(2, "Happy Dragon", "H Bowman", "C Fownes", 8, 58, 6.5, 84, 2.1, "Needs cover, but finish is reliable."),
        runner(5, "Star Of Joy", "L Ferraris", "D J Hall", 5, 53, 14.0, 78, 0.8, "Best used underneath in wider structures."),
        runner(7, "Victory Moment", "C L Chau", "K W Lui", 2, 51, 18.0, 76, 0.6, "Draw gives him a better trip than the price implies."),
      ],
    },
    {
      raceNo: 3,
      time: "20:15",
      className: "Class 3",
      distance: "1650m",
      surface: "All Weather",
      runners: [
        runner(1, "Golden Rule", "Z Purton", "J Size", 1, 80, 3.0, 94, 6.2, "Rail draw and class edge put him on top."),
        runner(2, "Mighty Stride", "H Bowman", "P F Yiu", 4, 79, 4.5, 90, 3.4, "Consistent enough to press the favorite."),
        runner(4, "Eighteen Palms", "A Badel", "C S Shum", 2, 75, 5.5, 87, 2.6, "Trip shape suits a stalking ride."),
        runner(5, "Joyful Hunter", "K Teetan", "D A Hayes", 8, 73, 12.0, 80, 1.0, "The live overlay keeps him in the frame."),
        runner(8, "Speedy Chariot", "A Atzeni", "P C Ng", 3, 67, 35.0, 74, 0.3, "Longshot only, but the draw is not hopeless."),
      ],
    },
  ],
};

export const marketMoves = [
  { label: "R2 #1 Fast As Lightning", value: "1.9", trend: "Firming" },
  { label: "R1 #8 Smiling Emperor", value: "4.5", trend: "Stable" },
  { label: "R3 #5 Joyful Hunter", value: "12.0", trend: "Overlay" },
  { label: "R2 #7 Victory Moment", value: "18.0", trend: "Drifting" },
];

export const betSlip = [
  { race: "R2", runner: "Fast As Lightning", stake: "$125", odds: "1.9", return: "$237.50" },
  { race: "R3", runner: "Golden Rule", stake: "$80", odds: "3.0", return: "$240.00" },
  { race: "R1", runner: "Smiling Emperor", stake: "$45", odds: "4.5", return: "$202.50" },
];

export const news = [
  {
    title: "Sha Tin night card shapes around pace and rail position",
    source: "HKJC Racing",
    time: "18 min read",
  },
  {
    title: "Trackwork notes: five runners hold their condition into race week",
    source: "Trackside Desk",
    time: "9 min read",
  },
  {
    title: "Market watch: late money concentrates around short-course speed",
    source: "Golden Stallion",
    time: "4 min read",
  },
];

export const archiveRows = [
  { date: "2026-04-05", venue: "Sha Tin", races: 10, winners: 7, roi: "+8.4%" },
  { date: "2026-03-29", venue: "Happy Valley", races: 9, winners: 5, roi: "+2.1%" },
  { date: "2026-03-22", venue: "Sha Tin", races: 11, winners: 6, roi: "-1.8%" },
  { date: "2026-03-15", venue: "Happy Valley", races: 9, winners: 6, roi: "+5.7%" },
];

function runner(no, name, jockey, trainer, draw, rating, odds, confidence, edge, note) {
  return {
    no,
    name,
    jockey,
    trainer,
    draw,
    rating,
    odds,
    confidence,
    edge,
    note,
  };
}
