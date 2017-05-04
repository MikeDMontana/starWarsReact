var json = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "http://swapi.co/api/people/",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();


function List(){
  return(
    <div>
      <h1>LIST</h1>
      <h2>{json.results[0].name}</h2>
    </div>
  );
}

  var StarWarsPage = React.createClass({
    render: function() {
      return (
        <div>
          This is a Star Wars Page
          <List/>
        </div>
      );
    }
  });

  ReactDOM.render(
    <StarWarsPage />,
    document.getElementById('container')
  );
