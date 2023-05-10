interface Ilocation {
  towers: string[];
  floors: string[];
  meetingRooms: string[];
}

export const location: Ilocation = {
  towers: ["A", "B"],
  floors: new Array(25).fill(0).map((_, i) => String(i + 3)),
  meetingRooms: new Array(10).fill(0).map((_, i) => String(i + 1)),
};
