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

function LoopThroughNames() {
  for (var i = 0; i < json.results.length; i++) {
    console.log(json.results[i].name);
  }
}

function List(){
  return(
    <div>
      <h1>LIST</h1>
      <LoopThroughNames />
    </div>
  );
}

  var StarWarsPage = React.createClass({
    render: function() {
      return (
        <div>
          This is a Star Wars Page
          <List />
        </div>
      );
    }
  });

  ReactDOM.render(
    <StarWarsPage />,
    document.getElementById('container')
  );
