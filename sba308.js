const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
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
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

function ValidAssignmentGroup(CourseInfo, AssignmentGroup) {
  return CourseInfo.id == AssignmentGroup.course_id;
}

function ValidSubmission(LearnerSubmissions, AssignmentGroup, number) {
    const score = LearnerSubmissions[number].submission.score;
    const points_possible = AssignmentGroup.assignments[(LearnerSubmissions[number].assignment_id)-1].points_possible;

    if (points_possible == 0 || typeof score == "number" || isNaN(score)) {
      return false;
    } else {
      return true;
    }
  }

function getLearnerData(course, ag, submissions) {
  //ValidSubmission(submission, assignment)
  ValidAssignmentGroup(course,ag)
  ///const result = {test:5};
  let student132Average =
    submissions[3].submission.score + submissions[4].submission.score;
  let student125Average =
    submissions[0].submission.score + submissions[1].submission.score;
  let pointsTotal =
    ag.assignments[0].points_possible + ag.assignments[1].points_possible;
  let totalAverage132 = student132Average / pointsTotal;
  let totalAverage125 = student125Average / pointsTotal;
  let points_possible1 = "";
  let points_possible2 = "";
  let submissions1Average1 =
    submissions[0].submission.score / ag.assignments[0].points_possible;
  let submissions1Average2 =
    submissions[1].submission.score / ag.assignments[1].points_possible;
  console.log(pointsTotal);
  console.log(totalAverage132);
  console.log(totalAverage125);
  console.log(submissions1Average1);
  console.log(submissions1Average2);
  console.log(points_possible1);
  console.log(points_possible2);
  //console.log(result);
  console.log(ValidAssignmentGroup(course,ag));
  console.log(ValidSubmission(submissions, ag, 0));
  
  let idArray = []
  let AverageArray = []
  let AssignmentArray125 = []
  let AssignmentArray132 = []
  idArray.push(submissions[0].learner_id)
  idArray.push(submissions[3].learner_id)
  AverageArray.push(totalAverage125)
  AverageArray.push(totalAverage132)
  AssignmentArray125.push(submissions1Average1)
  AssignmentArray132.push(submissions1Average2)
  console.log(idArray)
  console.log(AverageArray)
  console.log(AssignmentArray125)
  console.log(AssignmentArray132)
  const finaloutput = [
    {
      id: idArray[0],
      Average: AverageArray[0],
      assignment_id: AssignmentArray125[0]
    },
    {
      id: idArray[1],
      Average: AverageArray[1],
      assignment_id: AssignmentArray132[0]
    }
  ]

  for (let i = 0; i < submissions.length; i++) {
    let report = {};

    report.id = submissions[i]["learner_id"];
    for (j = 0; j < submissions.length; j++) {
      if (submissions.learner_id == 125 && 132) {
        let avgScore = "";
        console.log(avgScore);
      }
    }
    report.avg = submissions[i].submission[1];
    report.assignment_id = submissions[0]["assignment_id"];
    report.assignment_id2 = submissions[1]["assignment_id"];
    //result.push(report)

    console.log(report);
  }

  //console.log(result);

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

   return finaloutput;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
