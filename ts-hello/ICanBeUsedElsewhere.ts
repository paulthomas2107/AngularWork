class ICanBeUsedElsewhere {
  constructor(studentId: number, private score: number) {}
  getScore() {
    return this.score;
  }
}

export default ICanBeUsedElsewhere;
