const Person = ({ name , removeItem, id}) => {
  return (
    <div>
      <h4>{name}</h4>
      <button onClick={() => removeItem(id)} className="btn">Remove</button>
    </div>
  );
};
export default Person;
