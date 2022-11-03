const todos = [
  { id: 1, description: "Get out of bed", deadline: "Wed Sep 13 2017" },
  { id: 2, description: "Brush teeth", deadline: "Thu Sep 14 2017" },
  { id: 3, description: "Eat breakfast", deadline: "Fri Sep 15 2017" },
  // {id: 4, description: "Eat launch", deadline: "Fri Sep 16 2017" }
];

export default function Todo() {
  return (
    <div className="Todo">
      {" "}
      {todos.map((list) => (
        <div>
          <h4> {`Id: ${list.id}`}</h4>
          <h4> {`Description: ${list.description}`}</h4>
          <h4> {`Deadline: ${list.deadline}`}</h4>
        </div>
      ))}
    </div>
  );
}
