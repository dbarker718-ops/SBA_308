const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

function getLearnerData(course, ag, submissions) {
const result = []
let student132Avg = submissions[3].submission.score + submissions[4].submission.score;
let student125Avg = submissions[0].submission.score + submissions[1].submission.score;
let totalPoints = ag.assignments[0].points_possible + ag.assignments[1].points_possible;
let totalAvg132 = student132Avg / totalPoints;
let totalAvg125 = student125Avg / totalPoints;
let points_possible1 = '';
let points_possible2 = '';
let submissions1Avg1 = submissions[0].submission.score/ag.assignments[0].points_possible;
let submissions1Avg2 = submissions[1].submission.score/ag.assignments[1].points_possible;
console.log(totalPoints);
console.log(totalAvg132);


for(let i = 0; i < submissions.length; i++ ) {
  let report = {}

  report.id = submissions[i] ['learner_id']
  for(j = 0; j <submissions.length; j++) {

    if(submissions.learner_id == 125 && 132) {
      let avgScore = ''
      console.log(avgScore);
    }
  }
  report.avg = submissions[i].submission[1];
  report.assignment_id = submissions[0]['assignment_id']
  report.assignment_id2 = submissions[1]['assignment_id']
  result.push(report)

  console.log(report)
}

console.log(result);



  // here, we would process this data to achieve the desired result.
  // const result = [
  //   {
  //     id: 125,
  //     avg: 0.985, // (47 + 150) / (50 + 150)
  //     1: 0.94, // 47 / 50
  //     2: 1.0 // 150 / 150
  //   },
  //   {
  //     id: 132,
  //     avg: 0.82, // (39 + 125) / (50 + 150)
  //     1: 0.78, // 39 / 50
  //     2: 0.833 // late: (140 - 15) / 150
  //   }
  // ];

  // return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);