// import Button from './practice/Button';
// import TodoList from './practice/TodoList';
import usersJSON from "./practice/users";

function App() {
  const { users } = usersJSON;

  return (
    <>
      <h1>Code Playground</h1>
      {/* <TodoList/>
        <Button/> */}
      <ul>
        {users
          .filter(({ age }) => age < 30)
          .map((user) => {
            return (
              <li key={user.id}>
                <UserInfo
                  //  firstName={firstName}
                  //  lastName={lastName}
                  //  hair={hair}
                  user={user}
                />
              </li>
            );
          })}
      </ul>
    </>
  );
}

function UserInfo({ user }) {
  const { firstName, lastName, hair, age, gender } = user;

  return (
    <>
      <div>
        {firstName} {lastName} 
      </div>
      <div>
        {gender === 'male' && age}
        {gender === 'male' ? age : "secret"}
      </div>
      <div style={{ color: gender === "female" ? "pink" : "blue" }}>
        {gender}
      </div>
      <div>
        {hair.color} {hair.type}
      </div>
    </>
  );
}

export default App;
