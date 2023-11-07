const Article = (props) => {
  // console.log("🚀  Article  props:", props);

  const { children, name, age } = props;

  return (
    <div className="card">
      <div className="card-header">Details</div>
      <div className="card-body">
        My Name is {name} My Age is {age}
      </div>
    </div>
  );
};
export default Article;
