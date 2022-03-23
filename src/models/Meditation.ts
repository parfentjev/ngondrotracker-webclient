class Meditation {
  title: string;
  path: string;
  goal: number;
  order: number;

  constructor(title: string, path: string, goal: number, order: number) {
    this.title = title;
    this.path = path;
    this.goal = goal;
    this.order = order;
  }
}

export default Meditation;
