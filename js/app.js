$.ajax({
  url:"http://swapi.co/api/people/",
  success: function(data){console.log(data);}
});

function List(){
  return(
    <h1>LIST</h1>
  );
}

  var StarWarsPage = React.createClass({
    render: function() {
      return (
        <div>
          This is a Star Wars Page.
          <List/>
        </div>
      );
    }
  });

  ReactDOM.render(
    <StarWarsPage />,
    document.getElementById('container')
  );
