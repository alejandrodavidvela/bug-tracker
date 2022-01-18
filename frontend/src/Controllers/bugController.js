import bugModel from "../Models/bugModel";

export function retrieveBugs() {
  let data = [];
  data.push(
    new bugModel({
      _id: 234253,
      name: "Crash on Load",
      details: "Crashes after 3 seconds",
      steps: "open app and it will crash",
      version: "V2.2.1",
      assigned: "Alex Vela",
      creator: "Joe Bloggs",
      priority: 1,
      time: "23:38",
    })
  );
  data.push(
    new bugModel({
      _id: 234253,
      name: "Freezing on save",
      details: "Freezes everytime I save",
      steps: "open app and save something",
      version: "V2",
      assigned: "Jen Sakian",
      creator: "Alex Bloggs",
      priority: 3,
      time: "13:38",
    })
  );

  let sorted = data.sort((a, b) => {
    return a.priority - b.priority;
  });
  return sorted;
}
